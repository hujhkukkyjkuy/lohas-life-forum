import { useState, type FormEvent } from 'react'
import {
  TRIAL_OPTIONS,
  buildInquiryText,
  whatsappUrl,
  mailtoUrl,
  saveLead,
  type MerchantLead,
} from '../config/site'
import { trackEvent } from '../lib/analytics'
import { MerchantCtaButtons } from './MerchantCta'

const CATEGORIES = [
  '飲食 · Cafe',
  '醫療 · 診所',
  '教育 · 導師',
  '零售 · 生活',
  '美容 · 健康',
  '活動 · 市集',
  '其他',
]

type Props = {
  onToast?: (msg: string) => void
}

export function LeadForm({ onToast }: Props) {
  const [name, setName] = useState('')
  const [shopName, setShopName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [trial, setTrial] = useState<string>(TRIAL_OPTIONS[0].label)
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!shopName.trim() || !phone.trim()) {
      onToast?.('请填写店名同 WhatsApp／电话')
      return
    }
    const lead: MerchantLead = {
      id: `lead-${Date.now()}`,
      name: name.trim() || '（未填）',
      shopName: shopName.trim(),
      phone: phone.trim(),
      category,
      trial,
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
    }
    saveLead(lead)
    trackEvent('lead_submit', category)

    const inquiry = buildInquiryText({
      name: name.trim() || undefined,
      shopName: lead.shopName,
      phone: lead.phone,
      category,
      trial,
      notes: lead.notes || undefined,
    })
    const wa = whatsappUrl(inquiry)
    if (wa) {
      window.open(wa, '_blank', 'noopener,noreferrer')
    } else {
      const mail = mailtoUrl(`【${lead.shopName}】商户试投询价`, inquiry)
      if (mail) window.location.href = mail
    }

    setDone(true)
    onToast?.(
      wa
        ? '已存本机 · 正打开 WhatsApp 联络站长'
        : '已存本机 · 请复制文案贴去 WhatsApp',
    )
  }

  const inquiry = buildInquiryText({
    name: name.trim() || undefined,
    shopName,
    phone,
    category,
    trial,
    notes: notes.trim() || undefined,
  })

  return (
    <div className="lead-panel" id="lead">
      <h3>商户试投留资</h3>
      <p className="lead-sub">
        诚实讲：累计访客大约九十（站内统计）。首周试用可议／可 5
        折，不满意可停。提交后会打开 WhatsApp（852 4436
        1681）预填询价文案，直接打到站长；同时本机也会存一份方便你自己对照。
      </p>

      <form onSubmit={onSubmit} className="lead-form">
        <div className="field">
          <label htmlFor="lead-shop">
            店名／品牌 <span className="req">必填</span>
          </label>
          <input
            id="lead-shop"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="例如：海旁咖啡工作室"
            required
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="lead-phone">
            WhatsApp／电话 <span className="req">必填</span>
          </label>
          <input
            id="lead-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="例如：9123 4567"
            required
            autoComplete="tel"
          />
        </div>
        <div className="field">
          <label htmlFor="lead-name">联络人姓名（可选）</label>
          <input
            id="lead-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例如：阿明"
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="lead-cat">类别</label>
          <select
            id="lead-cat"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="lead-trial">想试投</label>
          <select
            id="lead-trial"
            value={trial}
            onChange={(e) => setTrial(e.target.value)}
          >
            {TRIAL_OPTIONS.map((t) => (
              <option key={t.id} value={t.label}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="lead-notes">备注（可选）</label>
          <textarea
            id="lead-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="档期、预算、想露出位置……"
            rows={2}
          />
        </div>
        <button type="submit" className="btn primary" style={{ width: '100%' }}>
          提交并打开 WhatsApp
        </button>
      </form>

      {done && (
        <div className="lead-success">
          ✓ 已存本机。若 WhatsApp 未自动打开，可撳下面「WhatsApp
          询价试投」或复制文案手动贴去。
          <pre className="inquiry-preview">{inquiry}</pre>
        </div>
      )}

      <div style={{ marginTop: 14 }}>
        <MerchantCtaButtons contextLabel={category} />
      </div>
    </div>
  )
}
