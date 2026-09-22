import { useState, type FormEvent } from 'react'
import {
  LEAD_STORAGE_KEY,
  type MerchantLead,
  buildInquiryText,
} from '../config/site'
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

function loadLeads(): MerchantLead[] {
  try {
    const raw = localStorage.getItem(LEAD_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as MerchantLead[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveLead(lead: MerchantLead) {
  const next = [lead, ...loadLeads()].slice(0, 50)
  localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(next))
}

type Props = {
  onToast?: (msg: string) => void
}

export function LeadForm({ onToast }: Props) {
  const [name, setName] = useState('')
  const [shopName, setShopName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !shopName.trim() || !phone.trim()) {
      onToast?.('请填写姓名、店名同电话')
      return
    }
    const lead: MerchantLead = {
      id: `lead-${Date.now()}`,
      name: name.trim(),
      shopName: shopName.trim(),
      phone: phone.trim(),
      category,
      createdAt: new Date().toISOString(),
    }
    saveLead(lead)
    setDone(true)
    onToast?.('已收下你的联络 · 本机已储存')
    // keep fields for copy text convenience
  }

  const inquiry = buildInquiryText({ name, shopName, phone, category })

  return (
    <div className="lead-panel">
      <h3>留下电话，我哋联络你</h3>
      <p className="lead-sub">
        试投一周 · 资料只存喺你部装置（localStorage），方便站长跟进。
      </p>

      <form onSubmit={onSubmit} className="lead-form">
        <div className="field">
          <label htmlFor="lead-name">联络人姓名</label>
          <input
            id="lead-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例如：阿明"
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="lead-shop">店名／品牌</label>
          <input
            id="lead-shop"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="例如：海旁咖啡工作室"
          />
        </div>
        <div className="field">
          <label htmlFor="lead-phone">电话</label>
          <input
            id="lead-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="例如：9123 4567"
            autoComplete="tel"
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
        <button type="submit" className="btn primary" style={{ width: '100%' }}>
          提交询价意向
        </button>
      </form>

      {done && (
        <div className="lead-success">
          ✓ 已储存。你可以再撳下面「复制询价文案」贴去 WhatsApp 俾站长。
          <pre className="inquiry-preview">{inquiry}</pre>
        </div>
      )}

      <div style={{ marginTop: 14 }}>
        <MerchantCtaButtons contextLabel={category} />
      </div>
    </div>
  )
}
