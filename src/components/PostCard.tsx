import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'
import { isQuestionPost, listExcerpt } from '../lib/localPosts'

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

export function PostCard({ post }: { post: Post }) {
  const isVideo = post.mediaType === 'video'
  const isQ = isQuestionPost(post)
  const cta = isQ ? '睇答案 · 投票' : isVideo ? '睇短视频' : '睇全文'
  return (
    <Link to={`/post/${post.id}`} className="forum-card">
      <div className="post-cover" style={{ background: post.gradient }}>
        <span className="emoji">{isVideo ? '▶️' : post.coverEmoji}</span>
        <span className="style-pill">{isVideo ? '短视频' : post.category}</span>
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
        <p className="post-excerpt">{listExcerpt(post)}</p>
        <div className="post-stats">
          <span className="forum-cta">{cta} →</span>
          <span className="stat-quiet">💬 {post.commentsCount || '留言'}</span>
        </div>
      </div>
    </Link>
  )
}
