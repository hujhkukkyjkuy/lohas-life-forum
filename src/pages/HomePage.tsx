import { useMemo, useState } from 'react'
import { PostCard } from '../components/PostCard'
import { AdSlot } from '../components/AdSlot'
import { ComposeSheet } from '../components/ComposeSheet'
import { posts as seedPosts, type Category, type Post } from '../data/posts'
import { nativeAdPlaceholders } from '../data/merchants'

const chips: Array<Category | '全部' | '短视频'> = [
  '全部',
  '短视频',
  '生活',
  '医疗',
  '饮食',
  '休闲海旁',
]

export function HomePage() {
  const [filter, setFilter] = useState<(typeof chips)[number]>('全部')
  const [localPosts, setLocalPosts] = useState<Post[]>([])
  const [composeOpen, setComposeOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const all = useMemo(() => [...localPosts, ...seedPosts], [localPosts])

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

  return (
    <>
      <header className="topbar">
        <div className="brand-row">
          <div className="brand">
            <div className="brand-mark">🏝</div>
            <div>
              <h1>康城生活圈</h1>
              <p>Lohas Life · LOHAS Park</p>
            </div>
          </div>
          <button type="button" className="compose-btn" onClick={() => setComposeOpen(true)}>
            ＋ 发帖
          </button>
        </div>
      </header>

      <div className="banner-demo">示范社区 · 内容由 AI 生成示意 · 非官方屋苑频道</div>

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
          setToast('已发布到本机预览')
          setTimeout(() => setToast(null), 2200)
        }}
      />

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
