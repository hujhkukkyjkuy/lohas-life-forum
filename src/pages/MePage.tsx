import { useState } from 'react'
import { Link } from 'react-router-dom'

export function MePage() {
  const [toast, setToast] = useState<string | null>(null)

  function teaseLogin() {
    setToast('想玩更多？登录后可发帖同步／收藏（即将开放）')
    setTimeout(() => setToast(null), 2400)
  }

  return (
    <div className="page">
      <h2 className="section-title">我的</h2>
      <div className="merchant-card">
        <div className="emoji">👤</div>
        <div className="info">
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
            去首页逛逛
          </Link>
        </div>
      </div>

      <div className="mono-box ops-today">
        <h3>今日动作</h3>
        <ul className="ops-tips" style={{ listStyle: 'disc', paddingLeft: 18 }}>
          <li>
            <strong>发帖</strong>：首页「＋ 发帖」写 1 篇新鲜生活／饮食／海旁
          </li>
          <li>
            <strong>逛新鲜</strong>：首页「今日新鲜」跳转日落／宵夜／投票贴
          </li>
          <li>
            商户合作（可选）：费率 <Link to="/rates">#/rates</Link> ·{' '}
            <Link to="/why-us">点解选我们</Link>
          </li>
        </ul>
      </div>

      <div className="mono-box ops-entry">
        <h3>站长运营入口</h3>
        <p className="ops-lead">畀建峰用 · 收首 5 个商户同跟进试投</p>
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
            <small>对标 FB／TG 群 · 商户说服页</small>
          </span>
        </Link>

        <h4 className="ops-h4">点攞首 5 个商户（新手）</h4>
        <ol className="ops-tips">
          <li>行 The LOHAS／海旁 Cafe，自我介绍「康城生活圈」本地信息流。</li>
          <li>开价用「试投一周」：信息流 HK$800 起或置顶 HK$1,200 起（可议）。</li>
          <li>当场复制询价文案 → 贴 WhatsApp；或叫对方填「留下电话」表单。</li>
          <li>出稿后截图曝光位 + 简单数据（浏览／赞）做证言。</li>
          <li>目标：两周内签 3–5 家，先换案例再加价。</li>
        </ol>
        <p className="ops-foot">
          变现作战见 <code>docs/MONEY_BATTLE_PLAN.md</code> · 上线清单见{' '}
          <code>docs/LAUNCH_CHECKLIST.md</code>
        </p>
      </div>

      <div className="mono-box">
        <h3>关于康城生活圈</h3>
        <ul>
          <li>定位：日出康城／LOHAS Park 公开超本地生活社区</li>
          <li>副标：公开康城生活圈 · 欢迎商户试投（唔似 FB 群禁广告）</li>
          <li>内容：生活 · 医疗资讯 · 饮食 · 休闲海旁 · 短视频</li>
          <li>「易租」租赁业务暂停中，本论坛独立运营</li>
        </ul>
      </div>

      <div className="mono-box">
        <h3>运营资料（给建峰）</h3>
        <ul>
          <li>docs/MONEY_BATTLE_PLAN.md — 打群组弱点 · 30 日收钱</li>
          <li>PRODUCT.md — 产品定位与 MVP 范围</li>
          <li>MONETIZATION.md — 变现与价目</li>
          <li>docs/LAUNCH_CHECKLIST.md — 上线清单</li>
          <li>docs/OPS_PLAYBOOK.md — 每周操作手册</li>
          <li>docs/VIDEO_PLAYBOOK.md — AI 短视频制作</li>
          <li>scripts/video-prompts/ — 口播稿与提示词</li>
        </ul>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
