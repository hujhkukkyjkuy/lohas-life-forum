import { useState } from 'react'
import { Link } from 'react-router-dom'

export function MePage() {
  const [toast, setToast] = useState<string | null>(null)

  function teaseLogin() {
    setToast('登录后可发帖同步／收藏（即将开放）')
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="page">
      <h2 className="section-title">我的</h2>

      <div className="me-hero">
        <div className="emoji">👤</div>
        <div>
          <h3>康城访客（示范）</h3>
          <p>未接登录 · MVP 本地预览</p>
        </div>
      </div>

      <div className="login-cta-card">
        <div>
          <strong>想玩更多？</strong>
          <p>登录后可发帖同步／收藏同参与投票（即将开放）</p>
        </div>
        <div className="login-cta-actions">
          <button type="button" className="btn primary" onClick={teaseLogin}>
            登录（即将）
          </button>
          <Link to="/" className="btn ghost">
            去动态逛逛
          </Link>
        </div>
      </div>

      <div className="mono-box">
        <h3>关于康城生活圈</h3>
        <ul>
          <li>定位：日出康城生活社区 · 非官方</li>
          <li>内容：生活 · 医疗资讯 · 饮食 · 休闲海旁 · 短视频</li>
          <li>示范社区 · 内容示意 · 非官方屋苑频道</li>
        </ul>
      </div>

      <div className="mono-box ops-entry">
        <h3>商户试投（可选）</h3>
        <p className="ops-lead">公开信息流试投 · 唔似 FB 群禁广告</p>
        <Link to="/rates" className="ops-link-card">
          <span className="ops-icon">💰</span>
          <span>
            <strong>合作价目 /rates</strong>
            <small>示范价 · 可议 · 含询价 CTA</small>
          </span>
        </Link>
        <Link to="/merchants" className="ops-link-card">
          <span className="ops-icon">🏪</span>
          <span>
            <strong>商户页 · 留下电话</strong>
            <small>Lead form 存 localStorage</small>
          </span>
        </Link>
        <Link to="/why-us" className="ops-link-card">
          <span className="ops-icon">⚔️</span>
          <span>
            <strong>点解选我们 /why-us</strong>
            <small>对标 FB／TG 群</small>
          </span>
        </Link>
        <Link to="/categories" className="ops-link-card">
          <span className="ops-icon">🗂️</span>
          <span>
            <strong>分类浏览</strong>
            <small>点分类会过滤动态帖流</small>
          </span>
        </Link>
        <Link to="/stats" className="ops-link-card">
          <span className="ops-icon">📊</span>
          <span>
            <strong>访客统计 /stats</strong>
            <small>来源 fb／tg／xhs、每帖浏览</small>
          </span>
        </Link>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
