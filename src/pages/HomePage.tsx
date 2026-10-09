import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PostCard } from '../components/PostCard'
import { WeatherStrip } from '../components/WeatherStrip'
import { posts as seedPosts, type Category, type Post } from '../data/posts'
import { SITE_TAGLINE } from '../config/site'
import { loadLocalPosts, isQuestionPost } from '../lib/localPosts'

const chips: Array<Category | '全部' | '短视频'> = [
  '全部',
  '短视频',
  '生活',
  '医疗',
  '饮食',
  '休闲海旁',
]

function isChip(v: string | null): v is (typeof chips)[number] {
  return !!v && (chips as string[]).includes(v)
}

export function HomePage() {
  const [params, setParams] = useSearchParams()
  const rawCat = params.get('cat')
  const filter: (typeof chips)[number] = isChip(rawCat) ? rawCat : '全部'
  const [localPosts, setLocalPosts] = useState<Post[]>([])

  useEffect(() => {
    setLocalPosts(loadLocalPosts())
    const onStorage = () => setLocalPosts(loadLocalPosts())
    window.addEventListener('lohas-local-posts', onStorage)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('lohas-local-posts', onStorage)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const all = useMemo(
    () =>
      [...localPosts, ...seedPosts].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [localPosts],
  )

  const todayQuestion = useMemo(() => {
    return all.find((p) => isQuestionPost(p) && !p.id.startsWith('local-')) ?? all[0]
  }, [all])

  const filtered = useMemo(() => {
    if (filter === '全部') return all
    if (filter === '短视频') return all.filter((p) => p.mediaType === 'video')
    return all.filter((p) => p.category === filter)
  }, [all, filter])

  function setFilter(c: (typeof chips)[number]) {
    if (c === '全部') {
      setParams({}, { replace: true })
    } else {
      setParams({ cat: c }, { replace: true })
    }
  }

  return (
    <>
      <header className="forum-topbar">
        <div className="brand-row">
          <div className="brand">
            <div className="brand-mark">🏝</div>
            <div>
              <h1>康城生活圈</h1>
              <p className="forum-sub">{SITE_TAGLINE}</p>
            </div>
          </div>
        </div>
      </header>

      <WeatherStrip compact />

      <div className="forum-compliance" role="note">
        <span className="dot" aria-hidden />
        <span>示范社区 · 内容示意 · 非官方屋苑频道 · 答案喺帖入面睇</span>
      </div>

      {todayQuestion && (
        <section className="fresh-strip" aria-label="今日问题">
          <div className="fresh-strip-head">
            <strong>今日問題</strong>
            <span>点入去睇答案 · 可本机投票</span>
          </div>
          <div className="fresh-jumps">
            <Link to={`/post/${todayQuestion.id}`} className="fresh-chip">
              {todayQuestion.coverEmoji} {todayQuestion.title.replace(/^今日問題｜/, '')}
            </Link>
          </div>
        </section>
      )}

      <div className="forum-chips" role="tablist" aria-label="分类">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`forum-chip${filter === c ? ' active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c === '短视频' ? '🎬 短视频' : c}
          </button>
        ))}
      </div>

      <div className="forum-feed">
        {filtered.length === 0 && <div className="empty">呢个分类暂时未有帖子</div>}
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
