import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'

const styleLabel: Record<Post['style'], string> = {
  xiaohongshu: '小红书',
  instagram: 'IG',
  facebook: 'Facebook',
}

function formatTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString('zh-HK', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Shanghai',
  })
}

function excerpt(body: string) {
  return body.replace(/\s+/g, ' ').trim()
}

export function PostCard({ post }: { post: Post }) {
  const isVideo = post.mediaType === 'video'
  return (
    <Link to={`/post/${post.id}`} className="card post-card">
      <div className="post-cover" style={{ background: post.gradient }}>
        <span className="emoji">{isVideo ? '▶️' : post.coverEmoji}</span>
        <span className="style-pill">
          {isVideo ? '短视频' : styleLabel[post.style]}
        </span>
      </div>
      <div className="post-body">
        <div className="post-meta">
          <div className="avatar">{post.authorAvatar}</div>
          <div className="meta-text">
            <div className="author">{post.author}</div>
            <div className="time">{formatTime(post.createdAt)} · HKT</div>
          </div>
          <span className="cat-tag">{post.category}</span>
        </div>
        <h3 className="post-title">
          {isVideo ? '🎬 ' : ''}
          {post.title}
        </h3>
        <p className="post-excerpt">{excerpt(post.body)}</p>
        <div className="post-stats">
          <span>♥ {post.likes}</span>
          <span>💬 {post.commentsCount}</span>
          {isVideo && <span>短视频 Demo</span>}
        </div>
      </div>
    </Link>
  )
}
