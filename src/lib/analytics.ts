/**
 * 輕量訪客統計（免註冊）
 * ------------------------------------------------------------
 * 主力：Abacus 免費計數 API（https://jasoncameron.dev/abacus/）
 *   - 唔使開帳戶、唔使 key、支援 CORS，靜態 GitHub Pages 直接用
 *   - 每個 route / 來源 / 事件 = 一個計數器；#/stats 頁可睇數
 * 可選升級：GoatCounter（填 GOATCOUNTER_CODE 就自動加載，有來源／裝置等詳細報表）
 *
 * 來源參數：?src=fb / ?src=tg / ?src=xhs（亦接受 utm_source）
 *   例：https://hujhkukkyjkuy.github.io/lohas-life-forum/?src=fb#/post/p45
 *   或：…/#/post/p45?src=fb
 *
 * 自己睇唔想計數：開一次 …/?notrack=1 （同一瀏覽器永久唔計；?notrack=0 取消）
 */

export const ABACUS_BASE = 'https://abacus.jasoncameron.dev'
export const ABACUS_NS = 'hujhkukkyjkuy-lohas-life-forum'

/** 可選：GoatCounter 站點代號（例如 'lohaslife' → https://lohaslife.goatcounter.com）。留空 = 唔加載 */
export const GOATCOUNTER_CODE = ''

export const KNOWN_SOURCES = ['fb', 'tg', 'xhs', 'wa', 'ig', 'direct', 'other'] as const

const SESSION_KEY = 'lohas-an-session'
const SRC_KEY = 'lohas-an-src'
const NOTRACK_KEY = 'lohas-an-notrack'

type GoatCounter = {
  count?: (vars: { path: string; title?: string; referrer?: string; event?: boolean }) => void
  no_onload?: boolean
  allow_local?: boolean
}
declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

function safe<T>(fn: () => T, fallback: T): T {
  try {
    return fn()
  } catch {
    return fallback
  }
}

function isLocalhost(): boolean {
  const h = location.hostname
  return h === 'localhost' || h === '127.0.0.1' || h === '' || h.endsWith('.local')
}

function readParam(name: string): string | null {
  const fromSearch = new URLSearchParams(location.search).get(name)
  if (fromSearch) return fromSearch
  const hash = location.hash || ''
  const qi = hash.indexOf('?')
  if (qi >= 0) return new URLSearchParams(hash.slice(qi + 1)).get(name)
  return null
}

function trackingDisabled(): boolean {
  const nt = readParam('notrack')
  if (nt === '1') safe(() => localStorage.setItem(NOTRACK_KEY, '1'), undefined)
  if (nt === '0') safe(() => localStorage.removeItem(NOTRACK_KEY), undefined)
  if (isLocalhost()) return true
  return safe(() => localStorage.getItem(NOTRACK_KEY) === '1', false)
}

/** 轉成 Abacus 合法 key：^[A-Za-z0-9_\-.]{3,64}$ */
export function toKey(raw: string): string {
  let k = raw.replace(/[^A-Za-z0-9_.-]+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '')
  if (k.length < 3) k = (k + '___').slice(0, 3)
  return k.slice(0, 64)
}

function today(): string {
  // 以香港時間計日（UTC+8）
  const d = new Date(Date.now() + 8 * 3600 * 1000)
  return d.toISOString().slice(0, 10).replace(/-/g, '')
}

function hit(key: string) {
  const url = `${ABACUS_BASE}/hit/${ABACUS_NS}/${toKey(key)}`
  safe(() => {
    void fetch(url, { mode: 'cors', keepalive: true, credentials: 'omit' }).catch(() => {})
  }, undefined)
}

export function routeKey(pathname: string): string {
  const p = pathname.replace(/^\/+|\/+$/g, '')
  return p ? p.replace(/\//g, '_') : 'home'
}

function normaliseSource(raw: string | null): string | null {
  if (!raw) return null
  const s = raw.toLowerCase().trim()
  if (['fb', 'facebook', 'meta'].includes(s)) return 'fb'
  if (['tg', 'telegram'].includes(s)) return 'tg'
  if (['xhs', 'xiaohongshu', 'rednote', 'red'].includes(s)) return 'xhs'
  if (['wa', 'whatsapp'].includes(s)) return 'wa'
  if (['ig', 'instagram'].includes(s)) return 'ig'
  return 'other'
}

function referrerSource(): string {
  const r = document.referrer
  if (!r) return 'direct'
  if (/facebook\.com|fb\.com|fb\.me/i.test(r)) return 'fb'
  if (/t\.me|telegram/i.test(r)) return 'tg'
  if (/xiaohongshu|xhslink/i.test(r)) return 'xhs'
  if (/instagram/i.test(r)) return 'ig'
  if (/whatsapp|wa\.me/i.test(r)) return 'wa'
  if (r.includes(location.host)) return 'direct'
  return 'other'
}

let enabled = false
let goatLoaded = false

function loadGoatCounter() {
  if (!GOATCOUNTER_CODE || goatLoaded) return
  goatLoaded = true
  window.goatcounter = { no_onload: true }
  const s = document.createElement('script')
  s.async = true
  s.src = '//gc.zgo.at/count.js'
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  document.head.appendChild(s)
}

/** App 啟動時叫一次：記錄來源 + 新訪問（每個 session 一次） */
export function initAnalytics() {
  enabled = !trackingDisabled()
  if (!enabled) return
  loadGoatCounter()

  const paramSrc = normaliseSource(readParam('src') || readParam('utm_source'))
  const isNewSession = !safe(() => sessionStorage.getItem(SESSION_KEY), null)
  if (isNewSession) {
    safe(() => sessionStorage.setItem(SESSION_KEY, String(Date.now())), undefined)
    const src = paramSrc || referrerSource()
    safe(() => sessionStorage.setItem(SRC_KEY, src), undefined)
    const d = today()
    hit('visits_total')
    hit(`d${d}_visits`)
    hit(`src_${src}`)
    hit(`d${d}_src_${src}`)
  }
}

export function currentSource(): string {
  return safe(() => sessionStorage.getItem(SRC_KEY) || 'direct', 'direct')
}

let lastPath = ''
/** 每次 hash route 變化叫（RouteTracker 負責） */
export function trackPageview(pathname: string) {
  if (!enabled || pathname === lastPath) return
  lastPath = pathname
  if (pathname.startsWith('/stats')) return // 唔計統計頁本身
  const rk = routeKey(pathname)
  hit('pv_total')
  hit(`d${today()}_pv`)
  hit(`pv_${rk}`)
  if (GOATCOUNTER_CODE) {
    const count = () =>
      window.goatcounter?.count?.({
        path: `#${pathname}`,
        title: document.title,
        referrer: `src:${currentSource()}`,
      })
    if (window.goatcounter?.count) count()
    else setTimeout(count, 1500)
  }
}

/** 事件（例如 WhatsApp CTA 點擊） */
export function trackEvent(name: string, context?: string) {
  if (!enabled) return
  hit(`evt_${name}`)
  hit(`d${today()}_evt_${name}`)
  if (context) hit(`evt_${name}_${context}`)
  window.goatcounter?.count?.({ path: `evt-${name}${context ? '-' + context : ''}`, title: name, event: true })
}

/** 讀數（#/stats 用） */
export async function getCount(key: string): Promise<number> {
  try {
    const r = await fetch(`${ABACUS_BASE}/get/${ABACUS_NS}/${toKey(key)}`, { credentials: 'omit' })
    if (r.status === 404) return 0
    if (r.status === 429) return -429
    if (!r.ok) return -1
    const j = (await r.json()) as { value?: number }
    return typeof j.value === 'number' ? j.value : 0
  } catch {
    return -1
  }
}

export function dayKey(offsetDays = 0): string {
  const d = new Date(Date.now() + 8 * 3600 * 1000 - offsetDays * 86400 * 1000)
  return d.toISOString().slice(0, 10).replace(/-/g, '')
}
