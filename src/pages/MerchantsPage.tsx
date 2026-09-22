import { featuredMerchants } from '../data/merchants'

export function MerchantsPage() {
  return (
    <div className="page">
      <h2 className="section-title">商户合作</h2>
      <div className="banner-demo" style={{ margin: '0 0 12px' }}>
        置顶推广 · 商户合作位均为 Demo 示意
      </div>

      {featuredMerchants.map((m) => (
        <div key={m.id} className="merchant-card">
          <div className="emoji">{m.emoji}</div>
          <div className="info">
            <span className="badge">{m.badge}</span>
            <h3>{m.name}</h3>
            <p>
              {m.category} · {m.blurb}
            </p>
          </div>
        </div>
      ))}

      <div className="mono-box">
        <h3>示范价目（HKD／月）</h3>
        <div className="pricing-row">
          <span>信息流原生广告</span>
          <strong>$800–$2,500</strong>
        </div>
        <div className="pricing-row">
          <span>帖子置顶推广（7 天）</span>
          <strong>$1,200–$3,800</strong>
        </div>
        <div className="pricing-row">
          <span>商户主页位</span>
          <strong>$2,000–$6,000</strong>
        </div>
        <div className="pricing-row">
          <span>海旁／市集赞助卡</span>
          <strong>$3,500+</strong>
        </div>
        <p style={{ margin: '10px 0 0', fontSize: 12, color: '#64748b' }}>
          详细见 MONETIZATION.md · 非正式报价
        </p>
      </div>

      <div className="mono-box">
        <h3>路线图（未上线）</h3>
        <ul>
          <li>活动票务／团购分销</li>
          <li>地产代理／业主 freemium 导流（日后桥接「易租」）</li>
          <li>短视频商户口播套餐</li>
        </ul>
      </div>
    </div>
  )
}
