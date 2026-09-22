import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LeadForm } from '../components/LeadForm'
import { MerchantCtaButtons } from '../components/MerchantCta'

const rows: Array<{ feature: string; us: string; groups: string }> = [
  { feature: '公开可搜', us: '✓ 公开网页 URL', groups: '✗ 封闭／难搜' },
  { feature: '欢迎广告', us: '✓ 商户优先费率', groups: '✗ 群组常禁广告' },
  { feature: '有费率页', us: '✓ #/rates 一目了然', groups: '✗ 要私聊问价' },
  { feature: '可留资', us: '✓ 表单／WhatsApp', groups: '✗ 审批／admin 把关' },
  { feature: '链接可转发', us: '✓ 帖子复制链接', groups: '✗ 出唔到群难分享' },
  { feature: 'SEO／发现', us: '✓ 可被搜寻引擎索引', groups: '✗ 要入会先睇到' },
]

export function WhyUsPage() {
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
          <strong>点解选我们</strong>
          <div style={{ fontSize: 11, color: '#64748b' }}>对标 FB／TG 群</div>
        </div>
      </div>

      <h2 className="why-title">点解商户选我们而唔系 Facebook／Telegram 群</h2>
      <p className="why-lead">
        封闭群难发现、要审批，仲经常<strong>禁广告</strong>。康城生活圈系公开网页：有费率、可留资、链接可转发——欢迎商户试投一周。
      </p>

      <div className="compare-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>能力</th>
              <th>康城生活圈</th>
              <th>FB／TG 群</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td>{r.feature}</td>
                <td className="cell-us">{r.us}</td>
                <td className="cell-them">{r.groups}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mono-box">
        <h3>同其他渠道点分</h3>
        <ul>
          <li>
            <strong>vs 已停运独立论坛</strong>：我哋做开放网页主场，唔靠入会先睇到。
          </li>
          <li>
            <strong>vs LIHKG</strong>：我哋做生活／饮食／医疗资讯／海旁，唔做物业八卦板。
          </li>
        </ul>
      </div>

      <div className="hero-cta mono-box">
        <h3>想试投？即刻联络</h3>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#64748b' }}>
          WhatsApp 询价 · 或睇完整示范价 · 商户页留电话
        </p>
        <MerchantCtaButtons />
        <div className="why-links">
          <Link to="/rates" className="rates-link">
            查看合作价目 →
          </Link>
          <Link to="/merchants" className="rates-link">
            去商户合作页 →
          </Link>
        </div>
      </div>

      <LeadForm onToast={showToast} />

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
