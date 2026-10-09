import { useEffect, useState } from 'react'

/**
 * 日期 + 香港天文台天氣（開放數據 API，客戶端讀取，支援 CORS）
 * https://data.weather.gov.hk/weatherAPI/opendata/weather.php
 */
const API = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php'
const HKO_URL = 'https://www.hko.gov.hk/tc/'
const STATION = '將軍澳'

type Rh = {
  temperature?: { data?: Array<{ place: string; value: number }> }
  humidity?: { data?: Array<{ place: string; value: number }> }
  icon?: number[]
  updateTime?: string
}
type FndDay = {
  forecastDate: string
  week: string
  forecastWeather: string
  forecastWind: string
  forecastMaxtemp: { value: number }
  forecastMintemp: { value: number }
  ForecastIcon: number
  PSR?: string
}
type Flw = { forecastPeriod?: string; forecastDesc?: string }
type Warn = Record<string, { name: string; code: string; type?: string; actionCode?: string }>

type Wx = {
  temp?: { place: string; value: number }
  rh?: number
  icon?: number
  days: FndDay[]
  flw?: Flw
  warnings: string[]
}

const WEEK = ['日', '一', '二', '三', '四', '五', '六']

function hkNow() {
  // 轉成香港時間（UTC+8）嘅日期部件
  const d = new Date(Date.now() + 8 * 3600 * 1000)
  return { m: d.getUTCMonth() + 1, day: d.getUTCDate(), w: d.getUTCDay() }
}

export function iconEmoji(code?: number): string {
  if (!code) return '🌤️'
  if (code === 50) return '☀️'
  if (code === 51 || code === 52) return '🌤️'
  if (code === 53 || code === 54) return '🌦️'
  if (code === 60) return '☁️'
  if (code === 61) return '🌥️'
  if (code >= 62 && code <= 64) return '🌧️'
  if (code === 65) return '⛈️'
  if (code >= 70 && code <= 77) return '🌙'
  if (code === 80) return '💨'
  if (code === 83 || code === 84 || code === 85) return '🌫️'
  if (code === 90 || code === 91) return '🥵'
  if (code === 92 || code === 93) return '🥶'
  return '🌤️'
}

function warnLabel(x: { name: string; type?: string }): string {
  if (!x.type) return x.name
  return x.type.length <= 3 ? `${x.type}${x.name}` : x.type
}

async function getJson<T>(dataType: string): Promise<T | null> {
  try {
    const r = await fetch(`${API}?dataType=${dataType}&lang=tc`, { credentials: 'omit' })
    if (!r.ok) return null
    return (await r.json()) as T
  } catch {
    return null
  }
}

export function WeatherStrip({ compact = false }: { compact?: boolean } = {}) {
  const { m, day, w } = hkNow()
  const [wx, setWx] = useState<Wx | null>(null)
  const [failed, setFailed] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let dead = false
    void (async () => {
      const [rh, fnd, flw, warn] = await Promise.all([
        getJson<Rh>('rhrread'),
        getJson<{ weatherForecast?: FndDay[] }>('fnd'),
        getJson<Flw>('flw'),
        getJson<Warn>('warnsum'),
      ])
      if (dead) return
      if (!rh && !fnd && !flw) {
        setFailed(true)
        return
      }
      const temps = rh?.temperature?.data ?? []
      const temp =
        temps.find((t) => t.place === STATION) ?? temps.find((t) => t.place === '香港天文台') ?? temps[0]
      setWx({
        temp,
        rh: rh?.humidity?.data?.[0]?.value,
        icon: rh?.icon?.[0],
        days: (fnd?.weatherForecast ?? []).slice(0, 3),
        flw: flw ?? undefined,
        warnings: warn ? Object.values(warn).filter((x) => x?.actionCode !== 'CANCEL').map(warnLabel) : [],
      })
    })()
    return () => {
      dead = true
    }
  }, [])

  if (compact) {
    return (
      <section className="wx-strip wx-compact" aria-label="今日日期及天氣">
        <div className="wx-row">
          <span className="wx-date">
            {m}月{day}日 星期{WEEK[w]}
          </span>
          {wx?.temp && (
            <span className="wx-now">
              {iconEmoji(wx.icon)} {wx.temp.value}°
              {typeof wx.rh === 'number' && <span className="wx-dim"> · 濕度 {wx.rh}%</span>}
            </span>
          )}
          {!wx && !failed && <span className="wx-dim">天氣載入中…</span>}
          {failed && (
            <a className="wx-link" href={HKO_URL} target="_blank" rel="noopener noreferrer">
              天文台 →
            </a>
          )}
          {wx && wx.warnings.length > 0 && (
            <span className="wx-warn">⚠️ {wx.warnings[0]}</span>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="wx-strip" aria-label="今日日期及天氣">
      <div className="wx-row">
        <span className="wx-date">
          {m}月{day}日 星期{WEEK[w]}
        </span>
        {wx?.temp && (
          <span className="wx-now">
            {iconEmoji(wx.icon)} {wx.temp.place} {wx.temp.value}°
            {typeof wx.rh === 'number' && <span className="wx-dim"> · 濕度 {wx.rh}%</span>}
          </span>
        )}
        {!wx && !failed && <span className="wx-dim">天氣載入中…</span>}
        {failed && (
          <a className="wx-link" href={HKO_URL} target="_blank" rel="noopener noreferrer">
            睇天文台天氣 →
          </a>
        )}
      </div>

      {wx && wx.warnings.length > 0 && (
        <div className="wx-warns">
          {wx.warnings.map((n) => (
            <span key={n} className="wx-warn">
              ⚠️ {n}
            </span>
          ))}
        </div>
      )}

      {wx?.flw?.forecastDesc && (
        <button type="button" className={`wx-flw${open ? ' open' : ''}`} onClick={() => setOpen((v) => !v)}>
          <strong>{(wx.flw.forecastPeriod || '天氣預測').replace('本港地區', '')}：</strong>
          {wx.flw.forecastDesc}
        </button>
      )}

      {wx && wx.days.length > 0 && (
        <div className="wx-days">
          {wx.days.map((d) => (
            <div key={d.forecastDate} className="wx-day" title={`${d.forecastWeather} ${d.forecastWind}`}>
              <span className="wx-dim">
                {Number(d.forecastDate.slice(4, 6))}/{Number(d.forecastDate.slice(6, 8))} {d.week.replace('星期', '週')}
              </span>
              <span className="wx-day-ico">{iconEmoji(d.ForecastIcon)}</span>
              <span>
                {d.forecastMintemp.value}–{d.forecastMaxtemp.value}°
              </span>
              {d.PSR && <span className="wx-dim">降雨 {d.PSR}</span>}
            </div>
          ))}
        </div>
      )}

      <div className="wx-credit">
        資料來源：
        <a href={HKO_URL} target="_blank" rel="noopener noreferrer">
          香港天文台
        </a>
      </div>
    </section>
  )
}
