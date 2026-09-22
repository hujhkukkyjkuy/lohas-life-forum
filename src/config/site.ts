/**
 * 站點聯絡設定（上線前請填實）
 * CONTACT_WHATSAPP：國際格式，唔好加 + 或空格，例如 85291234567
 * 留空 → UI 顯示「請先設定聯絡 WhatsApp」並提供可複製詢價文案
 */
export const CONTACT_WHATSAPP = '' // 待填 · e.g. '85291234567'

export const SITE_NAME = '康城生活圈'
export const SITE_TAGLINE = 'Lohas Life · LOHAS Park'
export const PRIVACY_EMAIL = '' // 待填 · e.g. 'privacy@example.com'

/** 預設詢價文案（WhatsApp / 複製用） */
export function buildInquiryText(opts?: {
  name?: string
  shopName?: string
  phone?: string
  category?: string
}): string {
  const lines = [
    `你好，我想了解「${SITE_NAME}」商戶試投一周合作。`,
    opts?.shopName ? `店名：${opts.shopName}` : '',
    opts?.name ? `聯絡人：${opts.name}` : '',
    opts?.phone ? `電話：${opts.phone}` : '',
    opts?.category ? `類別：${opts.category}` : '',
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

export const LEAD_STORAGE_KEY = 'lohas-life-merchant-leads'

export interface MerchantLead {
  id: string
  name: string
  shopName: string
  phone: string
  category: string
  createdAt: string
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
