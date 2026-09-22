import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: '首页', icon: '🏠', end: true },
  { to: '/categories', label: '分类', icon: '🗂️' },
  { to: '/merchants', label: '商户', icon: '🏪' },
  { to: '/me', label: '我的', icon: '👤' },
]

export function BottomTabs() {
  return (
    <nav className="tabbar" aria-label="主导航">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.end}
          className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
        >
          <span className="icon">{t.icon}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
