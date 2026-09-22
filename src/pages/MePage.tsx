export function MePage() {
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

      <div className="mono-box">
        <h3>关于康城生活圈</h3>
        <ul>
          <li>定位：日出康城／LOHAS Park 超本地生活社区</li>
          <li>英文副标：Lohas Life</li>
          <li>内容：生活 · 医疗资讯 · 饮食 · 休闲海旁 · 短视频</li>
          <li>「易租」租赁业务暂停中，本论坛独立运营</li>
        </ul>
      </div>

      <div className="mono-box">
        <h3>运营资料（给建峰）</h3>
        <ul>
          <li>PRODUCT.md — 产品定位与 MVP 范围</li>
          <li>MONETIZATION.md — 变现与价目</li>
          <li>docs/OPS_PLAYBOOK.md — 每周操作手册</li>
          <li>docs/VIDEO_PLAYBOOK.md — AI 短视频制作</li>
          <li>scripts/video-prompts/ — 口播稿与提示词</li>
        </ul>
      </div>
    </div>
  )
}
