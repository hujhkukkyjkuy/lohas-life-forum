import { useState } from 'react'
import {
  CONTACT_WHATSAPP,
  buildInquiryText,
  whatsappUrl,
} from '../config/site'

type Props = {
  compact?: boolean
  contextLabel?: string
}

export function MerchantCtaButtons({ compact, contextLabel }: Props) {
  const [copied, setCopied] = useState(false)
  const text = buildInquiryText(
    contextLabel ? { category: contextLabel } : undefined,
  )
  const wa = whatsappUrl(text)
  const hasWa = Boolean(CONTACT_WHATSAPP.trim())

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select via prompt-like alert
      window.prompt('請手動複製以下文案：', text)
    }
  }

  return (
    <div className={`cta-row${compact ? ' compact' : ''}`}>
      {hasWa && wa ? (
        <a
          className="btn primary cta-btn"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp 询价试投
        </a>
      ) : (
        <button type="button" className="btn ghost cta-btn" disabled title="请先在 src/config/site.ts 设定 CONTACT_WHATSAPP">
          请先设定联络 WhatsApp
        </button>
      )}
      <button type="button" className="btn ghost cta-btn" onClick={copyText}>
        {copied ? '已复制 ✓' : '复制询价文案'}
      </button>
      {!hasWa && (
        <p className="cta-hint">
          待填：喺 <code>src/config/site.ts</code> 填 <code>CONTACT_WHATSAPP</code>（例如 85291234567），或先撳「复制询价文案」贴去 WhatsApp。
        </p>
      )}
    </div>
  )
}
