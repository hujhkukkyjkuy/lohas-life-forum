import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { trackPageview } from './lib/analytics'
import { StatsPage } from './pages/StatsPage'
import { BottomTabs } from './components/BottomTabs'
import { HomePage } from './pages/HomePage'
import { PostDetailPage } from './pages/PostDetailPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { MerchantsPage } from './pages/MerchantsPage'
import { MePage } from './pages/MePage'
import { RatesPage } from './pages/RatesPage'
import { WhyUsPage } from './pages/WhyUsPage'

function RouteTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageview(pathname)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <RouteTracker />
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
        <BottomTabs />
      </div>
    </HashRouter>
  )
}
