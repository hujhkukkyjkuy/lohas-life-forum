import { Link } from 'react-router-dom'
import { useState } from 'react'
import { featuredMerchants } from '../data/merchants'
import { RATE_CARD } from '../config/site'
import { LeadForm } from '../components/LeadForm'
import { MerchantCtaButtons } from '../components/MerchantCta'

export function MerchantsPage() {
  const [toast, setToast] = useState<string | null>(null)

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="page">
      <h2 className="section-title">商户合作</h2>
      <div className="banner-demo" style={{ margin: '0 0 12px' }}>
        置顶推广 · 商户合作位 · 想试投一周？撳下面 CTA
      </div>

      <div className="hero-cta mono-box">
        <h3>商户试投一周</h3>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#64748b' }}>
          本地 Cafe、诊所、补习、市集主办——喺康城住户信息流露出。示范价 · 可议。
        </p>
        <MerchantCtaButtons />
        <Link to="/rates" className="rates-link">
          查看完整价目表 →
        </Link>
        <Link to="/why-us" className="rates-link">
          点解选我们而唔系 FB／TG 群 →
        </Link>
      </div>

      {featuredMerchants.map((m) => (
        <div key={m.id} className="merchant-card merchant-card-boost">
          <div className="emoji">{m.emoji}</div>
          <div className="info">
            <span className="badge badge-coop">合作 · {m.badge}</span>
            <h3>{m.name}</h3>
            <p>
              {m.category} · {m.blurb}
            </p>
            <div className="merchant-card-actions">
              <MerchantCtaButtons compact contextLabel={m.category} />
            </div>
          </div>
        </div>
      ))}

      <div className="mono-box">
        <div className="rate-heading-row">
          <h3>示范价目（HKD）</h3>
          <Link to="/rates" className="rates-link-inline">
            完整版
          </Link>
        </div>
        <p className="demo-price-tag">示范价 · 可议</p>
        {RATE_CARD.map((r) => (
          <div key={r.id} className="pricing-row">
            <span>
              {r.name}
              <small className="price-period"> · {r.period}</small>
            </span>
            <strong>{r.price}</strong>
          </div>
        ))}
      </div>

      <LeadForm onToast={showToast} />

      <div className="mono-box">
        <h3>路线图（未上线）</h3>
        <ul>
          <li>活动票务／团购分销</li>
          <li>地产代理／业主 freemium 导流（日后桥接「易租」）</li>
          <li>短视频商户口播套餐（价目已列，制作见 VIDEO_PLAYBOOK）</li>
        </ul>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
