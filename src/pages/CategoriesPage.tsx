import { Link } from 'react-router-dom'
import { CATEGORIES, countByCategory, countByStyle, posts } from '../data/posts'

const catEmoji: Record<string, string> = {
  生活: '🏠',
  医疗: '🩺',
  饮食: '🍜',
  休闲海旁: '🌊',
}

export function CategoriesPage() {
  const byCat = countByCategory()
  const byStyle = countByStyle()
  const videoCount = posts.filter((p) => p.mediaType === 'video').length

  return (
    <div className="page">
      <h2 className="section-title">分类浏览</h2>
      {CATEGORIES.map((c) => (
        <Link key={c} to="/" className="merchant-card">
          <div className="emoji">{catEmoji[c]}</div>
          <div className="info">
            <h3>{c}</h3>
            <p>{byCat[c]} 篇示范帖</p>
          </div>
        </Link>
      ))}

      <div className="mono-box" style={{ marginTop: 16 }}>
        <h3>内容结构（示范数据）</h3>
        <ul>
          <li>小红书风：{byStyle.xiaohongshu}</li>
          <li>Instagram 风：{byStyle.instagram}</li>
          <li>Facebook 风：{byStyle.facebook}</li>
          <li>短视频帖：{videoCount}</li>
        </ul>
      </div>

      <p style={{ fontSize: 12, color: '#64748b' }}>
        提示：首页芯片可直接筛选「短视频」与各分类。
      </p>
    </div>
  )
}
