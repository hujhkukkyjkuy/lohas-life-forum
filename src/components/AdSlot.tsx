import type { nativeAdPlaceholders } from '../data/merchants'

type Ad = (typeof nativeAdPlaceholders)[number]

export function AdSlot({ ad }: { ad: Ad }) {
  return (
    <div className="ad-slot" role="complementary" aria-label="示范广告位">
      <div className="emoji">{ad.emoji}</div>
      <div>
        <div className="label">{ad.label}</div>
        <h3>{ad.title}</h3>
        <p>{ad.body}</p>
      </div>
    </div>
  )
}
