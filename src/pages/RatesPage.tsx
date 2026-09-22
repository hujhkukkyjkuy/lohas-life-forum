import { Link } from 'react-router-dom'
import { RATE_CARD } from '../config/site'
import { LeadForm } from '../components/LeadForm'
import { MerchantCtaButtons } from '../components/MerchantCta'
import { useState } from 'react'

export function RatesPage() {
  const [toast, setToast] = useState<string | null>(null)

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="page">
      <div className="detail-header" style={{ margin: '0 -16px 8px', position: 'static' }}>
        <Link to="/merchants" className="back-btn" aria-label="返回商户">
          ←
        </Link>
        <div>
          <strong>合作价目</strong>
          <div style={{ fontSize: 11, color: '#64748b' }}>示范价 · 可议</div>
        </div>
      </div>

      <div className="banner-demo" style={{ margin: '0 0 12px' }}>
        示范价 · 可议 · 非正式报价 · 按曝光与档期调整
      </div>

      <div className="mono-box vs-groups">
        <h3>对标群组</h3>
        <p>
          Facebook／Telegram 封闭群好多时<strong>禁广告</strong>、要审批、难搜。我哋系公开生活圈，有费率页、欢迎商户试投——链接可以转发出圈。
        </p>
        <Link to="/why-us" className="rates-link">
          点解选我们而唔系 FB／TG 群 →
        </Link>
      </div>

      <div className="rate-grid">
        {RATE_CARD.map((r) => (
          <div key={r.id} className="rate-card">
            <div className="rate-card-top">
              <span className="rate-badge">合作</span>
              <span className="rate-period">{r.period}</span>
            </div>
            <h3>{r.name}</h3>
            <p className="rate-price">{r.price}</p>
            <p className="rate-note">{r.note}</p>
          </div>
        ))}
      </div>

      <div className="mono-box">
        <h3>点样开始试投？</h3>
        <ul>
          <li>冷启动建议：先试「置顶 7 日」或「信息流合作卡」</li>
          <li>价可偏低换案例同截图证言</li>
          <li>详价见仓内 MONETIZATION.md · 作战计划见 docs/MONEY_BATTLE_PLAN.md</li>
        </ul>
        <div style={{ marginTop: 12 }}>
          <MerchantCtaButtons />
        </div>
      </div>

      <LeadForm onToast={showToast} />

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
