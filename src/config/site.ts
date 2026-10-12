/**
 * 站點聯絡設定（上線前請填實）
 * CONTACT_WHATSAPP：國際格式，唔好加 + 或空格，例如 85291234567
 * CONTACT_EMAIL：有填則表單提交會開 mailto（可同 WhatsApp 並存）
 * 留空 WhatsApp → UI 顯示「請先設定聯絡 WhatsApp」並提供可複製詢價文案
 */
export const CONTACT_WHATSAPP = '85244361681'

export const SITE_NAME = '康城生活圈'
export const SITE_TAGLINE = '日出康城生活社区 · 非官方'
export const PRIVACY_EMAIL = '' // 待填 · e.g. 'privacy@example.com'
/** 商戶合作詢價電郵（有填則提交時開 mailto） */
export const CONTACT_EMAIL = '' // 待填 · e.g. 'partner@example.com'

/** 試投方案選項 */
export const TRIAL_OPTIONS = [
  { id: 'feed7', label: '信息流 7 日' },
  { id: 'pin7', label: '置顶 7 日' },
  { id: 'monthly', label: '月费露出' },
  { id: 'undecided', label: '未定' },
] as const

export type TrialOptionId = (typeof TRIAL_OPTIONS)[number]['id']

/** 預設詢價文案（WhatsApp / 複製用） */
export function buildInquiryText(opts?: {
  name?: string
  shopName?: string
  phone?: string
  category?: string
  trial?: string
  notes?: string
}): string {
  const lines = [
    `你好，我想了解「${SITE_NAME}」商戶試投合作。`,
    opts?.shopName ? `店名：${opts.shopName}` : '',
    opts?.name ? `聯絡人：${opts.name}` : '',
    opts?.phone ? `WhatsApp／電話：${opts.phone}` : '',
    opts?.category ? `類別：${opts.category}` : '',
    opts?.trial ? `想試投：${opts.trial}` : '',
    opts?.notes ? `備註：${opts.notes}` : '',
    '想知信息流／置頂／月費露出示範價同檔期，謝謝！',
  ]
  return lines.filter(Boolean).join('\n')
}

export function whatsappUrl(text?: string): string | null {
  const num = CONTACT_WHATSAPP.trim()
  if (!num) return null
  const q = encodeURIComponent(text || buildInquiryText())
  return `https://wa.me/${num}?text=${q}`
}

export function mailtoUrl(subject: string, body: string): string | null {
  const to = (CONTACT_EMAIL || PRIVACY_EMAIL).trim()
  if (!to) return null
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const LEAD_STORAGE_KEY = 'lohas-life-merchant-leads'

export interface MerchantLead {
  id: string
  name: string
  shopName: string
  phone: string
  category: string
  trial: string
  notes: string
  createdAt: string
}

export function loadLeads(): MerchantLead[] {
  try {
    const raw = localStorage.getItem(LEAD_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as MerchantLead[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveLead(lead: MerchantLead) {
  const next = [lead, ...loadLeads()].slice(0, 50)
  localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(next))
}

export function exportLeadsJson(): string {
  return JSON.stringify(loadLeads(), null, 2)
}

export function exportLeadsCsv(): string {
  const leads = loadLeads()
  const header = ['id', 'shopName', 'name', 'phone', 'category', 'trial', 'notes', 'createdAt']
  const esc = (v: string) => `"${String(v ?? '').replace(/"/g, '""')}"`
  const rows = leads.map((l) =>
    [l.id, l.shopName, l.name, l.phone, l.category, l.trial, l.notes, l.createdAt]
      .map(esc)
      .join(','),
  )
  return [header.join(','), ...rows].join('\n')
}

export const RATE_CARD = [
  {
    id: 'native',
    name: '信息流合作卡',
    period: '7 日',
    price: 'HK$800–2,500',
    note: 'Feed 插入原生廣告位',
  },
  {
    id: 'pin',
    name: '置頂推廣',
    period: '7 日',
    price: 'HK$1,200–3,800',
    note: '帖子置頂 +「推廣」標',
  },
  {
    id: 'monthly',
    name: '商戶月費露出',
    period: '30 日',
    price: 'HK$2,000–6,000',
    note: '商戶 Tab 精選位',
  },
  {
    id: 'video',
    name: '短視頻商戶套餐',
    period: '單條起',
    price: '由 HK$1,500',
    note: '15–45 秒口播 + 發布',
  },
  {
    id: 'sponsor',
    name: '活動贊助',
    period: '單次活動',
    price: '由 HK$3,500',
    note: '海旁／市集贊助卡',
  },
] as const
