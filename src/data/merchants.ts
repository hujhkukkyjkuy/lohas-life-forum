export interface MerchantSlot {
  id: string
  name: string
  category: string
  blurb: string
  emoji: string
  badge: string
  cta: string
}

export const featuredMerchants: MerchantSlot[] = [
  {
    id: 'm1',
    name: '海旁咖啡工作室',
    category: '飲食 · Cafe',
    blurb: '康城站步行 5 分鐘 · 示範商戶置頂',
    emoji: '☕',
    badge: '置頂推廣 · Demo',
    cta: 'WhatsApp 询价试投',
  },
  {
    id: 'm2',
    name: 'LOHAS 家庭醫學診所',
    category: '醫療 · 診所',
    blurb: '預約資訊展示位 · 非醫療建議',
    emoji: '🏥',
    badge: '商戶月費 · Demo',
    cta: 'WhatsApp 询价试投',
  },
  {
    id: 'm3',
    name: '康城補習小班',
    category: '教育 · 導師',
    blurb: '本地導師曝光位（示範）',
    emoji: '📚',
    badge: '信息流合作 · Demo',
    cta: '留下电话，我哋联络你',
  },
]

export const nativeAdPlaceholders = [
  {
    id: 'ad1',
    title: '本週末海旁市集',
    body: '贊助活動卡 · 本地商戶可預訂檔期 · 撳下面询价试投',
    emoji: '🎪',
    label: '贊助活動 · Demo',
  },
  {
    id: 'ad2',
    title: 'The LOHAS 新店試業禮遇',
    body: '原生廣告位 · 信息流露出 · 示范价 HK$800 起／7日',
    emoji: '🛍️',
    label: '原生廣告 · Demo',
  },
]
