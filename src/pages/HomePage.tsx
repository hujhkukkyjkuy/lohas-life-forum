import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PostCard } from '../components/PostCard'
import { AdSlot } from '../components/AdSlot'
import { ComposeSheet } from '../components/ComposeSheet'
import { posts as seedPosts, type Category, type Post } from '../data/posts'
import { nativeAdPlaceholders } from '../data/merchants'
import { SITE_TAGLINE } from '../config/site'

const chips: Array<Category | '全部' | '短视频'> = [
  '全部',
  '短视频',
  '生活',
  '医疗',
  '饮食',
  '休闲海旁',
]

const FRESH_JUMPS = [
  { id: 'p23', label: '🌅 海旁日落' },
  { id: 'p22', label: '🍜 宵夜清单' },
  { id: 'p24', label: '🗳️ 投票贴' },
] as const

export function HomePage() {
  const [filter, setFilter] = useState<(typeof chips)[number]>('全部')
  const [localPosts, setLocalPosts] = useState<Post[]>([])
  const [composeOpen, setComposeOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const all = useMemo(() => [...localPosts, ...seedPosts], [localPosts])

  const freshCount = useMemo(() => {
    const start = new Date('2026-09-20T00:00:00+08:00').getTime()
    return all.filter((p) => new Date(p.createdAt).getTime() >= start).length
  }, [all])

  const hotPosts = useMemo(() => {
    return [...all].sort((a, b) => b.likes - a.likes).slice(0, 3)
  }, [all])

  const filtered = useMemo(() => {
    if (filter === '全部') return all
    if (filter === '短视频') return all.filter((p) => p.mediaType === 'video')
    return all.filter((p) => p.category === filter)
  }, [all, filter])

  const feedItems: Array<{ type: 'post'; post: Post } | { type: 'ad'; ad: (typeof nativeAdPlaceholders)[number] }> = []
  filtered.forEach((post, i) => {
    feedItems.push({ type: 'post', post })
    if ((i + 1) % 4 === 0) {
      const ad = nativeAdPlaceholders[(Math.floor(i / 4)) % nativeAdPlaceholders.length]
      feedItems.push({ type: 'ad', ad })
    }
  })

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <>
      <header className="topbar">
        <div className="brand-row">
          <div className="brand">
            <div className="brand-mark">🏝</div>
            <div>
              <h1>康城生活圈</h1>
              <p>{SITE_TAGLINE}</p>
            </div>
          </div>
          <button type="button" className="compose-btn" onClick={() => setComposeOpen(true)}>
            ＋ 发帖
          </button>
        </div>
      </header>

      <div className="banner-demo">示范社区 · 内容由 AI 生成示意 · 非官方屋苑频道</div>

      <div className="fresh-strip">
        <div className="fresh-strip-head">
          <strong>今日新鲜</strong>
          <span>
            今日 +{freshCount} 篇新帖 · 海旁日落／宵夜清单／投票贴
          </span>
        </div>
        <div className="fresh-jumps">
          {FRESH_JUMPS.map((j) => (
            <Link key={j.id} to={`/post/${j.id}`} className="fresh-chip">
              {j.label}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/why-us" className="diff-banner soft">
        <strong>商户合作入口</strong>
        <span>公开信息流试投（可选）· 点解选我们 →</span>
      </Link>

      <div className="login-tease" role="note">
        <span>🔐 登录后可点赞收藏同参与投票（即将开放）</span>
        <button
          type="button"
          className="login-tease-btn"
          onClick={() => showToast('登录同步即将开放 · 而家可先本地发帖预览')}
        >
          了解
        </button>
      </div>

      <div className="chips">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            className={`chip${filter === c ? ' active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c === '短视频' ? '🎬 短视频' : c}
          </button>
        ))}
      </div>

      {filter === '全部' && (
        <section className="hot-section" aria-label="热门">
          <div className="hot-head">
            <strong>🔥 热门 Trending</strong>
            <span>按赞数 Top 3</span>
          </div>
          <div className="hot-list">
            {hotPosts.map((p, i) => (
              <Link key={p.id} to={`/post/${p.id}`} className="hot-item">
                <span className="hot-rank">{i + 1}</span>
                <span className="hot-title">
                  {p.mediaType === 'video' ? '🎬 ' : ''}
                  {p.title}
                </span>
                <span className="hot-likes">♥ {p.likes}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="feed">
        {feedItems.length === 0 && <div className="empty">呢个分类暂时未有帖子</div>}
        {feedItems.map((item, idx) =>
          item.type === 'post' ? (
            <PostCard key={item.post.id} post={item.post} />
          ) : (
            <AdSlot key={`ad-${idx}-${item.ad.id}`} ad={item.ad} />
          ),
        )}
      </div>

      <ComposeSheet
        open={composeOpen}
        onClose={() => setComposeOpen(false)}
        onSubmit={({ title, body, category }) => {
          const now = new Date()
          const p: Post = {
            id: `local-${now.getTime()}`,
            title,
            body,
            category,
            style: 'facebook',
            author: '我（本地示范）',
            authorAvatar: '✍️',
            likes: 0,
            commentsCount: 0,
            createdAt: now.toISOString(),
            tags: ['本地发帖'],
            coverEmoji: '📝',
            gradient: 'linear-gradient(135deg, #0f766e, #5eead4)',
            mediaType: 'text',
          }
          setLocalPosts((prev) => [p, ...prev])
          setComposeOpen(false)
          showToast('已发布到本机预览 · 登录后可同步（即将开放）')
        }}
      />

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
