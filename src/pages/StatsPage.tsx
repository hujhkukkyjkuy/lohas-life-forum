import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { KNOWN_SOURCES, dayKey, getCount } from '../lib/analytics'

type Row = { label: string; key: string; value: number | null }

const PAGES = ['home', 'categories', 'merchants', 'rates', 'why-us', 'me']
const EVENTS = ['wa_click', 'copy_inquiry']

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/** 逐個讀（Abacus 限制每 IP 每 10 秒 30 次） */
async function loadRows(rows: Row[], onUpdate: (rows: Row[]) => void, cancelled: () => boolean) {
  const out = rows.map((r) => ({ ...r }))
  for (let i = 0; i < out.length; i++) {
    if (cancelled()) return
    out[i].value = await getCount(out[i].key)
    onUpdate(out.map((r) => ({ ...r })))
    await sleep(380)
  }
}

function Table({ title, rows, sort }: { title: string; rows: Row[]; sort?: boolean }) {
  const list = sort ? [...rows].sort((a, b) => (b.value ?? -2) - (a.value ?? -2)) : rows
  return (
    <div className="mono-box" style={{ marginBottom: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
        <tbody>
          {list.map((r) => (
            <tr key={r.key} style={{ borderTop: '1px solid #e2e8f0' }}>
              <td style={{ padding: '4px 0' }}>{r.label}</td>
              <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                {r.value === null ? '…' : r.value < 0 ? '錯誤' : r.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function StatsPage() {
  const d0 = dayKey(0)
  const d1 = dayKey(1)
  const init = (): Row[] => [
    { label: `今日訪問 (${d0})`, key: `d${d0}_visits`, value: null },
    { label: `今日瀏覽頁數`, key: `d${d0}_pv`, value: null },
    { label: `尋日訪問 (${d1})`, key: `d${d1}_visits`, value: null },
    { label: `尋日瀏覽頁數`, key: `d${d1}_pv`, value: null },
    { label: '累計訪問（session）', key: 'visits_total', value: null },
    { label: '累計瀏覽頁數', key: 'pv_total', value: null },
    ...KNOWN_SOURCES.map((s) => ({ label: `來源 ${s}（累計）`, key: `src_${s}`, value: null })),
    ...KNOWN_SOURCES.map((s) => ({ label: `來源 ${s}（今日）`, key: `d${d0}_src_${s}`, value: null })),
    ...EVENTS.map((e) => ({ label: `事件 ${e}（累計）`, key: `evt_${e}`, value: null })),
    ...EVENTS.map((e) => ({ label: `事件 ${e}（今日）`, key: `d${d0}_evt_${e}`, value: null })),
  ]
  const [rows, setRows] = useState<Row[]>(init)
  const [postRows, setPostRows] = useState<Row[] | null>(null)

  useEffect(() => {
    let dead = false
    void loadRows(init(), setRows, () => dead)
    return () => {
      dead = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadPosts() {
    const r: Row[] = [
      ...PAGES.map((p) => ({ label: `頁面 /${p === 'home' ? '' : p}`, key: `pv_${p}`, value: null })),
      ...posts.map((p) => ({ label: `${p.id} ${p.title.slice(0, 18)}`, key: `pv_post_${p.id}`, value: null })),
    ]
    setPostRows(r)
    void loadRows(r, setPostRows, () => false)
  }

  const g = (from: number, to: number) => rows.slice(from, to)
  const n = KNOWN_SOURCES.length
  const e = EVENTS.length
  return (
    <div className="page">
      <div className="detail-header" style={{ margin: '0 -16px 8px', position: 'static' }}>
        <Link to="/me" className="back-btn" aria-label="返回">
          ←
        </Link>
        <div>
          <strong>訪客統計</strong>
          <div style={{ fontSize: 11, color: '#64748b' }}>Abacus 免費計數 · 香港時間計日</div>
        </div>
      </div>
      <Table title="總覽" rows={g(0, 6)} />
      <Table title="來源（?src=fb / tg / xhs）" rows={g(6, 6 + 2 * n)} />
      <Table title="商戶 CTA 事件" rows={g(6 + 2 * n, 6 + 2 * n + 2 * e)} />
      {postRows ? (
        <Table title="每頁／每帖瀏覽（累計）" rows={postRows} sort />
      ) : (
        <button type="button" className="btn ghost" onClick={loadPosts}>
          載入每頁／每帖瀏覽（約 20 秒）
        </button>
      )}
      <p style={{ fontSize: 12, color: '#64748b', marginTop: 12 }}>
        自己瀏覽唔想計數：開一次網址加 <code>?notrack=1</code>（同一瀏覽器永久唔計，<code>?notrack=0</code> 取消）。
      </p>
    </div>
  )
}
