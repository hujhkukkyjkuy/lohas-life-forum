import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LeadForm } from '../components/LeadForm'

const SHARE_URL =
  'https://hujhkukkyjkuy.github.io/lohas-life-forum/?notrack=1#/coop'

export function CoopPage() {
  const [toast, setToast] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 2400)
  }

  async function copyShare() {
    try {
      await navigator.clipboard.writeText(SHARE_URL)
      setCopied(true)
      showToast('分享链接已复制')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('请手动复制分享链接：', SHARE_URL)
    }
  }

  return (
    <div className="page">
      <div className="detail-header" style={{ margin: '0 -16px 8px', position: 'static' }}>
        <Link to="/me" className="back-btn" aria-label="返回我的">
          ←
        </Link>
        <div>
          <strong>商户合作／试投留资</strong>
          <div style={{ fontSize: 11, color: '#64748b' }}>直接 WhatsApp 站长</div>
        </div>
      </div>

      <div className="banner-demo" style={{ margin: '0 0 12px' }}>
        累计访客约二十以内 · 首周可议／可 5 折 · 不满意可停
      </div>

      <LeadForm onToast={showToast} />

      <div className="mono-box">
        <h3>分享给商户朋友</h3>
        <p style={{ margin: '0 0 10px', fontSize: 12, color: '#64748b', wordBreak: 'break-all' }}>
          {SHARE_URL}
        </p>
        <button type="button" className="btn ghost" onClick={copyShare} style={{ width: '100%' }}>
          {copied ? '已复制 ✓' : '复制分享链接'}
        </button>
        <Link to="/rates" className="rates-link" style={{ display: 'block', marginTop: 12 }}>
          查看完整价目表 →
        </Link>
        <Link to="/merchants" className="rates-link" style={{ display: 'block' }}>
          商户合作页（含示范位） →
        </Link>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
