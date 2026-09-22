import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostById } from '../data/posts'
import { getDemoComments } from '../data/comments'

const styleLabel = {
  xiaohongshu: '小红书风',
  instagram: 'Instagram 风',
  facebook: 'Facebook 社区风',
} as const

const LIKES_KEY = 'lohas-life-liked-posts'

function loadLiked(): Set<string> {
  try {
    const raw = localStorage.getItem(LIKES_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as string[]
    return new Set(Array.isArray(arr) ? arr : [])
  } catch {
    return new Set()
  }
}

function saveLiked(set: Set<string>) {
  localStorage.setItem(LIKES_KEY, JSON.stringify([...set]))
}

export function PostDetailPage() {
  const { id } = useParams()
  const post = id ? getPostById(id) : undefined
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeBoost, setLikeBoost] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!post) return
    const set = loadLiked()
    setLiked(set.has(post.id))
    setLikeBoost(set.has(post.id) ? 1 : 0)
  }, [post?.id])

  const comments = useMemo(() => {
    if (!post) return []
    return getDemoComments(post.id, post.category)
  }, [post])

  if (!post) {
    return (
      <div className="page">
        <Link to="/" className="back-btn" style={{ display: 'inline-grid', placeItems: 'center' }}>
          ←
        </Link>
        <div className="empty">找不到呢篇帖子</div>
      </div>
    )
  }

  const videoUrl = post.videoSrc
    ? `${import.meta.env.BASE_URL}${post.videoSrc}`
    : undefined

  async function copyPostLink() {
    const url = `${window.location.origin}${window.location.pathname}#/post/${post!.id}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('请手动复制以下链接：', url)
    }
  }

  function toggleLike() {
    const pid = post!.id
    const set = loadLiked()
    if (set.has(pid)) {
      set.delete(pid)
      setLiked(false)
      setLikeBoost(0)
    } else {
      set.add(pid)
      setLiked(true)
      setLikeBoost(1)
      setToast('已点赞（存本机）· 登录后可同步收藏')
      setTimeout(() => setToast(null), 2200)
    }
    saveLiked(set)
  }

  return (
    <>
      <div className="detail-header">
        <Link to="/" className="back-btn" style={{ display: 'grid', placeItems: 'center' }}>
          ←
        </Link>
        <strong style={{ fontSize: 14 }}>帖子详情</strong>
      </div>
      <div className="detail-cover" style={{ background: post.gradient }}>
        {post.coverEmoji}
      </div>
      <div className="detail-content">
        <div className="post-meta" style={{ marginBottom: 12 }}>
          <div className="avatar">{post.authorAvatar}</div>
          <div className="meta-text">
            <div className="author">{post.author}</div>
            <div className="time">
              {new Date(post.createdAt).toLocaleString('zh-HK', { timeZone: 'Asia/Shanghai' })} · HKT
            </div>
          </div>
          <span className="cat-tag">{post.category}</span>
        </div>

        {post.mediaType === 'video' && (
          <div className="mono-box" style={{ background: '#0f172a', color: '#e2e8f0', border: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0, color: '#5eead4' }}>🎬 短视频</h3>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Demo clip</span>
            </div>
            {videoUrl ? (
              <div className="video-frame">
                <video
                  key={videoUrl}
                  controls
                  playsInline
                  muted
                  autoPlay
                  loop
                  preload="auto"
                  poster={
                    videoUrl.includes('food')
                      ? `${import.meta.env.BASE_URL}videos/poster-food.png`
                      : videoUrl.includes('water')
                        ? `${import.meta.env.BASE_URL}videos/poster-water.png`
                        : videoUrl.includes('clinic')
                          ? `${import.meta.env.BASE_URL}videos/poster-clinic.png`
                          : undefined
                  }
                  className="video-player"
                  src={videoUrl}
                >
                  你的浏览器暂时播唔到呢条短视频。
                </video>
                <p className="video-hint">若未自动播放，请点一下 ▶ 播放（示范片 · 无声）</p>
              </div>
            ) : (
              <div style={{ padding: 24, textAlign: 'center', color: '#94a3b8' }}>播放占位</div>
            )}
            {post.videoScriptId && (
              <p style={{ margin: '10px 0 0', fontSize: 12, color: '#94a3b8' }}>
                口播稿／提示词：
                <code style={{ color: '#5eead4' }}>scripts/video-prompts/{post.videoScriptId}.md</code>
              </p>
            )}
          </div>
        )}

        <h1>{post.title}</h1>
        <p style={{ margin: '0 0 12px', fontSize: 12, color: '#64748b' }}>
          风格：{styleLabel[post.style]}
          {post.mediaType === 'video' ? ' · 含短视频' : ''}
        </p>
        <div className="detail-body">{post.body}</div>
        {post.disclaimer && <div className="disclaimer">⚠️ {post.disclaimer}</div>}
        <div className="tags">
          {post.tags.map((t) => (
            <span key={t} className="tag">
              #{t}
            </span>
          ))}
        </div>
        <div className="post-stats" style={{ marginTop: 16 }}>
          <button type="button" className={`like-btn${liked ? ' on' : ''}`} onClick={toggleLike}>
            {liked ? '♥' : '♡'} {post.likes + likeBoost}
          </button>
          <span>💬 {Math.max(post.commentsCount, comments.length)}</span>
        </div>

        <div className="share-row">
          <button type="button" className="btn ghost cta-btn" onClick={copyPostLink}>
            {copied ? '已复制链接 ✓' : '🔗 复制链接'}
          </button>
          <p className="share-hint">公开链接可转发出群 · 唔似封闭群难分享</p>
        </div>

        <section className="comments-section">
          <h3 className="comments-title">评论 · 示范 {comments.length}</h3>
          <p className="comments-hint">登录后可留言同参与投票（即将开放）</p>
          <ul className="comments-list">
            {comments.map((c) => (
              <li key={c.id} className="comment-item">
                <div className="avatar">{c.avatar}</div>
                <div className="comment-body">
                  <div className="comment-meta">
                    <strong>{c.author}</strong>
                    <span>
                      {new Date(c.createdAt).toLocaleString('zh-HK', {
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZone: 'Asia/Shanghai',
                      })}
                    </span>
                  </div>
                  <p>{c.text}</p>
                  <span className="comment-likes">♥ {c.likes}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
