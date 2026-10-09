import { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { trackPageview } from './lib/analytics'
import { StatsPage } from './pages/StatsPage'
import { BottomTabs } from './components/BottomTabs'
import { ComposeSheet } from './components/ComposeSheet'
import { HomePage } from './pages/HomePage'
import { PostDetailPage } from './pages/PostDetailPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { MerchantsPage } from './pages/MerchantsPage'
import { MePage } from './pages/MePage'
import { RatesPage } from './pages/RatesPage'
import { WhyUsPage } from './pages/WhyUsPage'
import type { Post } from './data/posts'
import { upsertLocalPost } from './lib/localPosts'

function RouteTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageview(pathname)
  }, [pathname])
  return null
}

function AppShell() {
  const [composeOpen, setComposeOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const navigate = useNavigate()

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/merchants" element={<MerchantsPage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomTabs onCompose={() => setComposeOpen(true)} />
      <div className="forum-compose">
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
              gradient: 'linear-gradient(135deg, #0D9F6E, #00C2A8)',
              mediaType: 'text',
            }
            upsertLocalPost(p)
            window.dispatchEvent(new Event('lohas-local-posts'))
            setComposeOpen(false)
            showToast('已发布到本机 · 登录后可同步（即将）')
            navigate(`/post/${p.id}`)
          }}
        />
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <RouteTracker />
      <AppShell />
    </HashRouter>
  )
}
