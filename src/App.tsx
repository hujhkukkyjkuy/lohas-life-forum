import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BottomTabs } from './components/BottomTabs'
import { HomePage } from './pages/HomePage'
import { PostDetailPage } from './pages/PostDetailPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { MerchantsPage } from './pages/MerchantsPage'
import { MePage } from './pages/MePage'
import { RatesPage } from './pages/RatesPage'
import { WhyUsPage } from './pages/WhyUsPage'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/merchants" element={<MerchantsPage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BottomTabs />
      </div>
    </HashRouter>
  )
}
