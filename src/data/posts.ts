export type Category = '生活' | '医疗' | '饮食' | '休闲海旁'
export type PostStyle = 'xiaohongshu' | 'instagram' | 'facebook'

export type MediaType = 'text' | 'video'

export interface Post {
  id: string
  title: string
  body: string
  category: Category
  style: PostStyle
  author: string
  authorAvatar: string
  likes: number
  commentsCount: number
  createdAt: string
  tags: string[]
  coverEmoji: string
  gradient: string
  disclaimer?: string
  mediaType?: MediaType
  videoScriptId?: string
  videoSrc?: string
}

export const CATEGORIES: Category[] = ['生活', '医疗', '饮食', '休闲海旁']

export const posts: Post[] = [
  // —— 生活 (5) ——
  {
    id: 'p01',
    title: '康城新手入住指南｜屋苑 × 商场 × 港铁一把过',
    body: `搬嚟日出康城第三個月，終於理清「邊度買嘢最方便」😌

📍 港鐵康城站出閘直入 The LOHAS，supermarket／銀行／診所一條龍
📦 收包裹：建議用商場自取櫃，雨天唔使落地下大堂等
🚌 週末去坑口／將軍澳站，A／B 出口行人天橋超順

Tips：
1️⃣ 平日早上 8 點前出入，升降機比較快
2️⃣ 休閒海旁日落前 30 分鐘最靚，記得帶外套～
3️⃣ 鄰里群組問到先買大件傢俬，好多二手盤

#康城生活 #LOHASPark #將軍澳`,
    category: '生活',
    style: 'xiaohongshu',
    author: '康城小林',
    authorAvatar: '🌿',
    likes: 128,
    commentsCount: 23,
    createdAt: '2026-09-18T09:30:00+08:00',
    tags: ['新手', '交通', '屋苑'],
    coverEmoji: '🏠',
    gradient: 'linear-gradient(135deg, #0d9488, #5eead4)',
  },
  {
    id: 'p02',
    title: 'Weekend at LOHAS ✨',
    body: `Saturday morning coffee → waterfront stroll → The LOHAS brunch.
Living in LOHAS Park hits different when the sea breeze is this soft 🌊

港鐵康城站 3 分鐘到海旁，真係「出街就放假」。

#LOHASPark #TseungKwanO #康城生活圈 #WeekendVibes #HKLife`,
    category: '生活',
    style: 'instagram',
    author: 'Mika.TKO',
    authorAvatar: '✨',
    likes: 256,
    commentsCount: 18,
    createdAt: '2026-09-16T11:00:00+08:00',
    tags: ['週末', '打卡', '海旁'],
    coverEmoji: '☕',
    gradient: 'linear-gradient(135deg, #6366f1, #a78bfa)',
    mediaType: 'video',
    videoScriptId: 'v02-weekend-lohas',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p03',
    title: '問吓各位鄰居：寵物美容／沖涼有冇推介？',
    body: `大家好，我住 Phase 附近，養咗隻中型犬。想問吓康城／將軍澳區有冇口碑好嘅寵物沖涼或美容店？

理想係：
• 可以預約、唔使排太耐
• 對敏感皮膚比較小心
• 最好近港鐵康城站或 The LOHAS 一帶

如果有價錢同體驗可以一齊分享，多謝各位！🙏

（示範帖 · 社區互助問答）`,
    category: '生活',
    style: 'facebook',
    author: '阿Dee住康城',
    authorAvatar: '🐶',
    likes: 47,
    commentsCount: 31,
    createdAt: '2026-09-14T19:20:00+08:00',
    tags: ['寵物', '問答', '鄰居'],
    coverEmoji: '🐾',
    gradient: 'linear-gradient(135deg, #f59e0b, #fcd34d)',
  },
  {
    id: 'p04',
    title: '收納小技巧｜細單位都唔亂',
    body: `屋企唔大，但想放得落又靚👀

💡 玄關：掛鈎 + 矮櫃，鎖匙／口罩一攞就走
💡 廚房：磁吸刀架慳位
💡 露台：防水膠箱放雨具，颱風前檢查一次就夠

有冇康城屋友一齊分享收納好物？留言交換～

#收納 #康城屋企 #生活hack`,
    category: '生活',
    style: 'xiaohongshu',
    author: '整理控Ada',
    authorAvatar: '📦',
    likes: 89,
    commentsCount: 14,
    createdAt: '2026-09-12T15:45:00+08:00',
    tags: ['收納', '傢俬', 'tips'],
    coverEmoji: '🪴',
    gradient: 'linear-gradient(135deg, #10b981, #6ee7b7)',
  },
  {
    id: 'p05',
    title: '康城晚間保安／出入體驗分享（社區討論）',
    body: `想開個輕鬆討論：大家平日返工返學夜啲，對屋苑大堂同商場接駁有冇特別感受？

我自己感覺：
1. 港鐵尾班車時段人流仍然可控
2. 商場部分通道夜晚會較暗，建議行光猛啲嗰邊
3. 訪客預約系統用熟咗就好方便

歡迎正面分享經驗，一齊令社區資訊更透明。唔好人身攻擊，多謝合作 🙌

#康城生活圈 #社區安全`,
    category: '生活',
    style: 'facebook',
    author: '夜歸人Jason',
    authorAvatar: '🌙',
    likes: 62,
    commentsCount: 27,
    createdAt: '2026-09-10T21:10:00+08:00',
    tags: ['安全', '出入', '討論'],
    coverEmoji: '🔐',
    gradient: 'linear-gradient(135deg, #334155, #64748b)',
  },

  // —— 医疗 (5) ——
  {
    id: 'p06',
    title: 'The LOHAS 附近診所資訊整理（示範）',
    body: `整理咗一啲「地點／營業時間查詢方向」畀住戶參考📍

🏥 The LOHAS／康城站一帶有多間 orthodontics、家庭醫學、物理治療 orthopaedic 相關 orthotics… 等等 orthodontics wait — 即係：
• 家庭醫生／普通科
• 牙科
• 物理治療

⚠️ 重要：本帖只係社區資訊示意，唔係醫療建議。求診前請自行核實診所資料、預約同專業資格。如有緊急情況請致電 999。

有鄰居想補充「邊間容易預約」可以留言～`,
    category: '医疗',
    style: 'facebook',
    author: '資訊整理員Kay',
    authorAvatar: '🏥',
    likes: 74,
    commentsCount: 19,
    createdAt: '2026-09-17T10:00:00+08:00',
    tags: ['診所', '資訊', '預約'],
    coverEmoji: '🩺',
    gradient: 'linear-gradient(135deg, #0284c7, #7dd3fc)',
    disclaimer: '示範內容 · 非醫療建議。請自行核實診所資料；緊急請致電 999。',
  },
  {
    id: 'p07',
    title: '流感季節小提醒（社區貼士）',
    body: `天氣轉涼，康城商場人流多，想分享幾個「生活層面」小提醒～

🧼 返屋企先洗手
😷 人多時段可按需要戴口罩
💧 多飲水、瞓夠

⚠️ 以上唔係診斷或治療建議。如有發燒、持續不適，請諮詢合資格醫生或到急症室。本帖由 AI 生成示意。

#健康生活 #康城 #流感季節`,
    category: '医疗',
    style: 'xiaohongshu',
    author: '健康鄰居May',
    authorAvatar: '💊',
    likes: 95,
    commentsCount: 12,
    createdAt: '2026-09-15T08:30:00+08:00',
    tags: ['健康', '貼士', '季節'],
    coverEmoji: '🌡️',
    gradient: 'linear-gradient(135deg, #dc2626, #fca5a5)',
    mediaType: 'video',
    videoScriptId: 'v07-flu-season-tips',
    videoSrc: 'videos/demo-clinic-info.mp4',
    disclaimer: '非醫療建議 · 僅供社區生活參考。',
  },
  {
    id: 'p08',
    title: 'Looking for physio near LOHAS Park 💪',
    body: `Anyone tried physio or sports massage around The LOHAS / 康城站?

I need general mobility care after desk work — not an emergency.
歡迎用中文留言推介（診所名 + 大致價錢範圍即可）。

⚠️ Demo post · Not medical advice. Please verify credentials yourself.

#LOHASPark #Physio #將軍澳 #康城生活圈`,
    category: '医疗',
    style: 'instagram',
    author: 'Ken.run.tko',
    authorAvatar: '🏃',
    likes: 41,
    commentsCount: 16,
    createdAt: '2026-09-13T17:00:00+08:00',
    tags: ['物理治療', '問答', '運動'],
    coverEmoji: '🦴',
    gradient: 'linear-gradient(135deg, #7c3aed, #c4b5fd)',
    disclaimer: '示範帖 · 非醫療建議。',
  },
  {
    id: 'p09',
    title: '帶小朋友睇普通科：預約心得分享',
    body: `小朋友發燒嗰晚好慌，想同區內家長分享「流程向」經驗（非處方）：

1. 先睇診所網上／電話是否接受即日 pediatrics wait — 即日門診
2. 準備：體溫記錄、過敏史、保險卡
3. The LOHAS 一帶平日白天較易約；週末要早啲打

再次強調：我唔係醫護人員，只係家長經驗分享。嚴重或持續症狀請立即求醫。🙏

#親子 #康城家長 #診所`,
    category: '医疗',
    style: 'facebook',
    author: '兩孩爸Ben',
    authorAvatar: '👨‍👧‍👦',
    likes: 113,
    commentsCount: 34,
    createdAt: '2026-09-11T14:20:00+08:00',
    tags: ['親子', '普通科', '預約'],
    coverEmoji: '👶',
    gradient: 'linear-gradient(135deg, #ea580c, #fdba74)',
    disclaimer: '家長經驗分享 · 非醫療建議。緊急請求醫或致電 999。',
  },
  {
    id: 'p10',
    title: '牙科洗牙價錢範圍（鄰居交流）',
    body: `想問吓康城／將軍澳洗牙大概幾錢？聽講商場內同街外差唔少～

方便嘅話可以講：
• 大概價位（例如 $xxx–$xxx）
• 包唔包 X-ray
• 要唔要提早好耐預約

⚠️ 本帖只收集社區經驗，唔構成任何牙科建議。選擇診所請自行判斷。`,
    category: '医疗',
    style: 'xiaohongshu',
    author: '笑容管理Irene',
    authorAvatar: '😁',
    likes: 58,
    commentsCount: 22,
    createdAt: '2026-09-09T16:40:00+08:00',
    tags: ['牙科', '價錢', '問答'],
    coverEmoji: '🦷',
    gradient: 'linear-gradient(135deg, #0891b2, #67e8f9)',
    disclaimer: '社區經驗交流 · 非牙科／醫療建議。',
  },

  // —— 饮食 (5) ——
  {
    id: 'p11',
    title: 'The LOHAS 美食地圖｜一個人食都開心',
    body: `一個人返工夜晚，唔想煮又唔想太遠～整理咗幾類選擇🍜

🥗 輕食／沙律：商場高層幾間氣氛舒服
🍜 拉麵／丼：午饭時段要避峰
🧋 茶飲：海旁方向行出去風大啲，冬天要着多件

個人最愛：坐近落地玻璃位睇住天色轉暗，好治癒✨

有冇隱藏小店？留言話我知！

#康城美食 #TheLOHAS #一人食`,
    category: '饮食',
    style: 'xiaohongshu',
    author: '夜食少女Yuki',
    authorAvatar: '🍜',
    likes: 187,
    commentsCount: 41,
    createdAt: '2026-09-19T12:15:00+08:00',
    tags: ['美食', '商場', '一人食'],
    coverEmoji: '🍱',
    gradient: 'linear-gradient(135deg, #e11d48, #fb7185)',
    mediaType: 'video',
    videoScriptId: 'v11-lohas-food-map',
    videoSrc: 'videos/demo-food.mp4',
  },
  {
    id: 'p12',
    title: 'Brunch vibes @ LOHAS 🥑',
    body: `Eggs, latte, and sea breeze after shopping at The LOHAS.
康城週末 brunch 真係有排試 ☀️

Save this spot for your next lazy Sunday.

#Brunch #LOHASPark #TheLOHAS #FoodieHK #康城飲食 #TKO`,
    category: '饮食',
    style: 'instagram',
    author: 'foodie.cara',
    authorAvatar: '🥑',
    likes: 312,
    commentsCount: 28,
    createdAt: '2026-09-18T10:45:00+08:00',
    tags: ['brunch', '打卡', '週末'],
    coverEmoji: '🥞',
    gradient: 'linear-gradient(135deg, #d97706, #fde68a)',
  },
  {
    id: 'p13',
    title: '鄰居團購意向：有冇人一齊叫晚市外賣？',
    body: `想試吓「同座／同層」晚市團購，慳運費又熱啲 🍲

初步諗法：
• 每週固定 1–2 晚
• 用本區常見外賣平台
• 餐單先喺群組投票

有興趣可以留言「+1」同大概樓層範圍（唔使公開單位號碼）。呢個係示範社區活動構想～

#團購 #外賣 #康城鄰居`,
    category: '饮食',
    style: 'facebook',
    author: '團長阿輝',
    authorAvatar: '🛒',
    likes: 69,
    commentsCount: 38,
    createdAt: '2026-09-16T18:30:00+08:00',
    tags: ['團購', '外賣', '鄰居'],
    coverEmoji: '🥡',
    gradient: 'linear-gradient(135deg, #c026d3, #e879f9)',
  },
  {
    id: 'p14',
    title: '超市特價觀察｜週三晚掃貨心得',
    body: `住近 The LOHAS 超市真係人生勝利組😆

📌 週三晚肉類／急凍有時會減
📌 麵包區臨近收舖前值得行多轉
📌 自有品牌日用品通常夠用

記住：價錢日日變，以當場標價為準～

#超市 #慳錢 #康城生活`,
    category: '饮食',
    style: 'xiaohongshu',
    author: '慳家主婦Lisa',
    authorAvatar: '🧾',
    likes: 142,
    commentsCount: 25,
    createdAt: '2026-09-14T20:00:00+08:00',
    tags: ['超市', '特價', 'tips'],
    coverEmoji: '🛒',
    gradient: 'linear-gradient(135deg, #059669, #34d399)',
  },
  {
    id: 'p15',
    title: '尋找正宗泰式／越南粉：康城站步行範圍',
    body: `大家好！最近好想食越南粉同泰式，想問吓：

1. 港鐵康城站步行 10 分鐘內有冇穩陣選擇？
2. 定係要搭一站去坑口／將軍澳比較好？

歡迎附上店名同「你點解鍾意」（味道／份量／價錢）。多謝晒！🙏

#飲食推介 #東南亞菜 #將軍澳`,
    category: '饮食',
    style: 'facebook',
    author: '吃貨Tom',
    authorAvatar: '🌶️',
    likes: 53,
    commentsCount: 29,
    createdAt: '2026-09-12T13:10:00+08:00',
    tags: ['越南粉', '泰式', '推介'],
    coverEmoji: '🍛',
    gradient: 'linear-gradient(135deg, #b45309, #fbbf24)',
  },

  // —— 休闲海旁 (5) ——
  {
    id: 'p16',
    title: '海旁日落路線｜康城最治癒半小時',
    body: `每逢天氣好就會落海旁走走🌅

路線建議（示範）：
康城站 → The LOHAS 海邊方向 → 沿行人徑慢慢行 → 找個石壆坐低影相

📸 黃金時間：日落前 20–40 分鐘
🧥 海風大，薄外套必備
🚫 請帶走垃圾，保護海岸

#海旁 #日落 #康城散步 #LOHAS`,
    category: '休闲海旁',
    style: 'xiaohongshu',
    author: '日落捕手Sora',
    authorAvatar: '🌅',
    likes: 224,
    commentsCount: 33,
    createdAt: '2026-09-20T17:50:00+08:00',
    tags: ['日落', '散步', '海旁'],
    coverEmoji: '🌊',
    gradient: 'linear-gradient(135deg, #0369a1, #38bdf8)',
    mediaType: 'video',
    videoScriptId: 'v16-sunset-walk',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p17',
    title: 'Golden hour by the water 🌊✨',
    body: `LOHAS Park waterfront never gets old.
Just me, my playlist, and that Tseung Kwan O skyline glow.

康城海旁 = 免費身心spa。

#GoldenHour #Waterfront #LOHASPark #康城海旁 #HKSunset #MindfulWalk`,
    category: '休闲海旁',
    style: 'instagram',
    author: 'sky.and.salt',
    authorAvatar: '🦋',
    likes: 401,
    commentsCount: 22,
    createdAt: '2026-09-19T18:20:00+08:00',
    tags: ['golden hour', '海旁', '放空'],
    coverEmoji: '🌇',
    gradient: 'linear-gradient(135deg, #f97316, #fbbf24)',
    mediaType: 'video',
    videoScriptId: 'v17-golden-hour',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p18',
    title: '週末親子單車／滑板：海旁注意事項',
    body: `帶小朋友去海旁玩，想同家長交流一下安全同禮讓：

✅ 行人優先，車速放慢
✅ 頭盔／護具按年齡考慮
✅ 避開繁忙日落打卡位高峰
✅ 留意天氣同突然起風

有冇推薦適合小朋友嘅時段？歡迎分享～一齊令海旁更友善 💛

#親子 #海旁 #單車`,
    category: '休闲海旁',
    style: 'facebook',
    author: '海旁爸媽Clara',
    authorAvatar: '🚲',
    likes: 88,
    commentsCount: 21,
    createdAt: '2026-09-17T09:00:00+08:00',
    tags: ['親子', '單車', '安全'],
    coverEmoji: '🛹',
    gradient: 'linear-gradient(135deg, #0f766e, #5eead4)',
  },
  {
    id: 'p19',
    title: '晨跑路線分享｜海風真係醒神',
    body: `晨早 6:45 出發最舒服🏃

路線：屋苑 → 海旁直線 → 折返（大約 5–8km 可調）
音樂：慢歌先，返程先加速
補水：帶小樽就夠，唔使太重

雨後地面濕滑，小心脚步～

有跑友想一齊？留言約假日慢跑（示範社群活動）！

#晨跑 #康城 #海旁運動`,
    category: '休闲海旁',
    style: 'xiaohongshu',
    author: 'RunnerCody',
    authorAvatar: '🎧',
    likes: 156,
    commentsCount: 27,
    createdAt: '2026-09-15T06:50:00+08:00',
    tags: ['晨跑', '運動', '路線'],
    coverEmoji: '🏃‍♂️',
    gradient: 'linear-gradient(135deg, #4f46e5, #818cf8)',
  },
  {
    id: 'p20',
    title: 'Waterfront picnic idea（簡易版）',
    body: `Simple setup: picnic mat, cut fruit, iced tea, and friends.
康城海旁野餐不一定要大陣仗——輕便就最開心 🧺

Please pack out what you pack in. Keep our LOHAS waterfront clean 🌿

#Picnic #LOHASPark #海旁休閒 #Friends #TKOLife`,
    category: '休闲海旁',
    style: 'instagram',
    author: 'picnic.with.jo',
    authorAvatar: '🧺',
    likes: 198,
    commentsCount: 15,
    createdAt: '2026-09-13T15:30:00+08:00',
    tags: ['野餐', '朋友', '海旁'],
    coverEmoji: '🥂',
    gradient: 'linear-gradient(135deg, #15803d, #86efac)',
  },
]

export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id)
}

export function getPostsByCategory(category: Category | '全部'): Post[] {
  if (category === '全部') return posts
  return posts.filter((p) => p.category === category)
}

export function countByCategory(): Record<Category, number> {
  return CATEGORIES.reduce(
    (acc, c) => {
      acc[c] = posts.filter((p) => p.category === c).length
      return acc
    },
    {} as Record<Category, number>,
  )
}

export function countByStyle(): Record<PostStyle, number> {
  const styles: PostStyle[] = ['xiaohongshu', 'instagram', 'facebook']
  return styles.reduce(
    (acc, s) => {
      acc[s] = posts.filter((p) => p.style === s).length
      return acc
    },
    {} as Record<PostStyle, number>,
  )
}
