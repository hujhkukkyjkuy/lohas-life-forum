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
      <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: -6, marginBottom: 14 }}>
        点分类会回到动态并真正过滤帖流
      </p>
      {CATEGORIES.map((c) => (
        <Link key={c} to={`/?cat=${encodeURIComponent(c)}`} className="merchant-card">
          <div className="emoji">{catEmoji[c]}</div>
          <div className="info">
            <h3>{c}</h3>
            <p>{byCat[c]} 篇示范帖 · 点入过滤</p>
          </div>
        </Link>
      ))}

      <Link to="/?cat=%E7%9F%AD%E8%A7%86%E9%A2%91" className="merchant-card">
        <div className="emoji">🎬</div>
        <div className="info">
          <h3>短视频</h3>
          <p>{videoCount} 篇 · 点入过滤</p>
        </div>
      </Link>

      <div className="mono-box" style={{ marginTop: 16 }}>
        <h3>内容结构（示范数据）</h3>
        <ul>
          <li>小红书风：{byStyle.xiaohongshu}</li>
          <li>Instagram 风：{byStyle.instagram}</li>
          <li>Facebook 风：{byStyle.facebook}</li>
          <li>短视频帖：{videoCount}</li>
        </ul>
      </div>
    </div>
  )
}
