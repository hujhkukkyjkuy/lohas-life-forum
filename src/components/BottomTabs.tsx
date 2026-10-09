import { NavLink } from 'react-router-dom'

type Props = {
  onCompose?: () => void
}

export function BottomTabs({ onCompose }: Props) {
  return (
    <nav className="tabbar-3" aria-label="主导航">
      <NavLink to="/" end className={({ isActive }) => `tab${isActive ? ' active' : ''}`}>
        <span className="icon">🏠</span>
        <span>动态</span>
      </NavLink>

      <button type="button" className="tab tab-compose" onClick={onCompose} aria-label="发帖">
        <span className="compose-fab">＋</span>
        <span className="label">发帖</span>
      </button>

      <NavLink to="/me" className={({ isActive }) => `tab${isActive ? ' active' : ''}`}>
        <span className="icon">👤</span>
        <span>我的</span>
      </NavLink>
    </nav>
  )
}
