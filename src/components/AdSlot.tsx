import { Link } from 'react-router-dom'
import type { nativeAdPlaceholders } from '../data/merchants'
import { MerchantCtaButtons } from './MerchantCta'

type Ad = (typeof nativeAdPlaceholders)[number]

export function AdSlot({ ad }: { ad: Ad }) {
  return (
    <div className="ad-slot ad-slot-boost" role="complementary" aria-label="合作推广位">
      <div className="ad-slot-main">
        <div className="emoji">{ad.emoji}</div>
        <div className="ad-slot-body">
          <div className="ad-label-row">
            <span className="coop-badge">合作</span>
            <span className="label">{ad.label}</span>
          </div>
          <h3>{ad.title}</h3>
          <p>{ad.body}</p>
        </div>
      </div>
      <div className="ad-slot-cta">
        <MerchantCtaButtons compact contextLabel={ad.label} />
        <Link to="/rates" className="ad-rates-link">
          睇价目 · 询价试投 →
        </Link>
      </div>
    </div>
  )
}
