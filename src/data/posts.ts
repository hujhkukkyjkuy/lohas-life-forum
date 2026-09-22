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

  // —— 今日新鲜 Sep 20–22 2026（置顶最新）——
  {
    id: 'p21',
    title: '雨天升降机八卦大会｜你哋楼有冇呢啲人？😂',
    body: `落大雨嗰阵升降机变咗社区剧场～

今日目击：
☂️ 带湿遮入lift、水滴成地
📦 快递小哥同邻居倾偈倾到漏咗几层
🐶 狗狗甩水，全厢人一齐笑

留言你嘅答案：你哋屋苑雨天升降机最经典场面系边个？

#康城生活 #雨天日常 #升降机八卦`,
    category: '生活',
    style: 'xiaohongshu',
    author: '八卦阿仪',
    authorAvatar: '☔',
    likes: 486,
    commentsCount: 92,
    createdAt: '2026-09-22T18:40:00+08:00',
    tags: ['雨天', '升降机', '留言'],
    coverEmoji: '🛗',
    gradient: 'linear-gradient(135deg, #0369a1, #7dd3fc)',
  },
  {
    id: 'p22',
    title: 'The LOHAS 宵夜清单｜饿亲都有救🍜',
    body: `夜晚十一点仲饿？整理咗一版「康城一带宵夜方向」畀夜猫子～

🔥 商场内：轻食／面／茶饮（以当日营业为准）
🥡 外卖：同座团购悭运费
🌊 海旁散步消化：边行边食请带走垃圾

你哋会点选？A 坐低慢慢食　B 打包返屋企　C 急冻叮叮

收藏下次用！（示范清单 · 非商场官方）

#宵夜 #TheLOHAS #康城饮食`,
    category: '饮食',
    style: 'xiaohongshu',
    author: '夜喵Kitty',
    authorAvatar: '🌙',
    likes: 512,
    commentsCount: 67,
    createdAt: '2026-09-22T17:55:00+08:00',
    tags: ['宵夜', '清单', '投票'],
    coverEmoji: '🍲',
    gradient: 'linear-gradient(135deg, #be123c, #fb7185)',
    mediaType: 'video',
    videoScriptId: 'v22-lohas-night-bites',
    videoSrc: 'videos/demo-food.mp4',
  },
  {
    id: 'p23',
    title: '海旁日落拍照点｜三角度一次过📸',
    body: `短视频感口播标题先嚟一句：

「康城日落，三步影到杂志感」🌅

1️⃣ 石壆侧光：人像超温柔
2️⃣ 行人径直线：天空同海一齐入镜
3️⃣ 商场出海方向回头望：城市灯火渐亮

黄金时间约日落前 25 分钟。海风大记得夹稳头发～

留言你嘅答案：你最爱边个角度？

#日落 #海旁 #打卡 #短视频`,
    category: '休闲海旁',
    style: 'instagram',
    author: '影相阿俊',
    authorAvatar: '📷',
    likes: 628,
    commentsCount: 54,
    createdAt: '2026-09-22T17:10:00+08:00',
    tags: ['日落', '拍照', '口播'],
    coverEmoji: '🌅',
    gradient: 'linear-gradient(135deg, #ea580c, #fbbf24)',
    mediaType: 'video',
    videoScriptId: 'v23-sunset-spots',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p24',
    title: '投票贴｜留言你屋苑最恨／最爱嘅事',
    body: `开个轻松投票，一齐倾下邻里生活～

❤️ 最爱可以系：海旁散步、港铁方便、邻居友善…
😤 最恨可以系：雨天等lift、周末人流、快递高峰…

规则：留言格式「最爱：xxx／最恨：xxx」
唔好指名道姓人身攻击，讲现象就得 🙌

你哋会点选？今日新鲜互动帖，留言你嘅答案！

#投票 #康城邻居 #生活圈`,
    category: '生活',
    style: 'facebook',
    author: '邻里主持阿明',
    authorAvatar: '🗳️',
    likes: 391,
    commentsCount: 118,
    createdAt: '2026-09-22T16:20:00+08:00',
    tags: ['投票', '屋苑', '互动'],
    coverEmoji: '💬',
    gradient: 'linear-gradient(135deg, #7c3aed, #c4b5fd)',
  },
  {
    id: 'p25',
    title: '週末 brunch 排队攻略｜悭半个钟秘技',
    body: `康城週末 brunch 人龍真係见惯唔怪🥞

实用向（示范分享）：
⏰ 开市前 10–15 分钟到场
📱 查下店铺是否接受预约／排队 app
👥 2–3 人比大枱更快入座
☕ 唔想等？转轻食／咖啡先顶住

收藏下次用！有冇隐藏「唔使排咁耐」位？留言话我知～

#brunch #排队 #週末饮食`,
    category: '饮食',
    style: 'xiaohongshu',
    author: 'Brunch女Elle',
    authorAvatar: '🥞',
    likes: 447,
    commentsCount: 61,
    createdAt: '2026-09-22T14:05:00+08:00',
    tags: ['brunch', '排队', 'tips'],
    coverEmoji: '☕',
    gradient: 'linear-gradient(135deg, #b45309, #fde68a)',
  },
  {
    id: 'p26',
    title: '流感季口罩小贴士（生活层 · 非医疗建议）',
    body: `转季人流多，分享几个「生活习惯」层面提醒～

😷 人多密闭空间可按个人需要戴口罩
🧼 返屋企先洗手、换衫
🧴 随身湿纸巾方便

⚠️ 以上只系社区生活资讯示意，唔系诊断、预防或治疗建议。如有不适请咨询合资格医护；紧急致电 999。

收藏下次用。留言你屋企有冇准备口罩／酒精？

#流感季 #口罩 #健康生活`,
    category: '医疗',
    style: 'xiaohongshu',
    author: '健康邻居May',
    authorAvatar: '😷',
    likes: 278,
    commentsCount: 29,
    createdAt: '2026-09-22T11:30:00+08:00',
    tags: ['流感季', '口罩', '贴士'],
    coverEmoji: '🌡️',
    gradient: 'linear-gradient(135deg, #dc2626, #fca5a5)',
    mediaType: 'video',
    videoScriptId: 'v26-mask-tips-flu',
    videoSrc: 'videos/demo-clinic-info.mp4',
    disclaimer: '非医疗建议 · 仅供社区生活参考。紧急请致电 999。',
  },
  {
    id: 'p27',
    title: '二手傢俬攻略｜康城屋友点样交收先稳阵',
    body: `搬屋／换傢俬，二手盘真係香 🛋️

经验分享：
1️⃣ 邻里群组／本区平台先睇口碑
2️⃣ 交收选商场公开位置（示范建议）
3️⃣ 量好门同升降机尺寸先付款
4️⃣ 大件最好两人搬，注意安全

留言你嘅答案：你买过最超值二手系乜？

#二手 #傢俬 #悭钱`,
    category: '生活',
    style: 'facebook',
    author: '悭家阿Dee',
    authorAvatar: '🪑',
    likes: 334,
    commentsCount: 48,
    createdAt: '2026-09-22T10:15:00+08:00',
    tags: ['二手', '傢俬', '交收'],
    coverEmoji: '📦',
    gradient: 'linear-gradient(135deg, #0f766e, #5eead4)',
  },
  {
    id: 'p28',
    title: '甜品打卡｜玻璃窗位甜到入心🍮',
    body: `今日甜品份量夸张到想叫全座来睇 😍

推荐打卡姿势：
✨ 窗边逆光
✨ 竖拍留空位写字
✨ 海旁饭后散步消化

你哋会点选？芝士／抹茶／朱古力？留言投票～

#甜品 #打卡 #康城饮食`,
    category: '饮食',
    style: 'instagram',
    author: '甜牙Momo',
    authorAvatar: '🧁',
    likes: 521,
    commentsCount: 43,
    createdAt: '2026-09-22T09:40:00+08:00',
    tags: ['甜品', '打卡', '投票'],
    coverEmoji: '🍰',
    gradient: 'linear-gradient(135deg, #db2777, #f9a8d4)',
  },
  {
    id: 'p29',
    title: '夜跑路线｜海旁灯带超有感觉🏃',
    body: `下班后夜跑，海风一吹即时醒神～

路线示意：屋苑 → 海旁行人径 → 折返（约 4–7km 可调）
tips：反光配件、带水、雨后小心湿滑

有跑友？留言约假日轻松 jog（示范社群）！
收藏下次用。

#夜跑 #海旁 #运动`,
    category: '生活',
    style: 'xiaohongshu',
    author: '夜跑Cody',
    authorAvatar: '🎧',
    likes: 368,
    commentsCount: 41,
    createdAt: '2026-09-21T21:30:00+08:00',
    tags: ['夜跑', '路线', '运动'],
    coverEmoji: '🌃',
    gradient: 'linear-gradient(135deg, #1e3a8a, #60a5fa)',
  },
  {
    id: 'p30',
    title: '一人食唔尴尬位｜坐低都好舒服✨',
    body: `一个人食饭最怕「枱大到尴尬」——整理咗几类舒服位方向：

🪑 吧台／窗边单人位
📖 适合睇书打机嘅角落
🌙 夜晚灯光柔和、唔使同大枱对望

实际座位以店铺安排为准。留言你嘅答案：你一人食最常去边？

#一人食 #康城 #饮食`,
    category: '饮食',
    style: 'xiaohongshu',
    author: '独食少女Yuki',
    authorAvatar: '📖',
    likes: 409,
    commentsCount: 55,
    createdAt: '2026-09-21T19:45:00+08:00',
    tags: ['一人食', '座位', '舒服'],
    coverEmoji: '🥗',
    gradient: 'linear-gradient(135deg, #059669, #6ee7b7)',
  },
  {
    id: 'p31',
    title: '海风约会提案｜日落＋散步就够浪漫',
    body: `短视频感口播：

「唔使大餐，海风已经系礼物」🌊

简易 itinerary：
咖啡 takeaway → 海旁慢行 → 日落位坐低倾偈 → 宵夜收尾

预算可高可低。你哋会点选？日头定黄昏？留言话我知～

#约会 #海旁 #浪漫`,
    category: '休闲海旁',
    style: 'instagram',
    author: '海风情侣笔记',
    authorAvatar: '💫',
    likes: 572,
    commentsCount: 38,
    createdAt: '2026-09-21T18:20:00+08:00',
    tags: ['约会', '海风', '日落'],
    coverEmoji: '💑',
    gradient: 'linear-gradient(135deg, #c026d3, #e879f9)',
    mediaType: 'video',
    videoScriptId: 'v31-seaside-date',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p32',
    title: '宠物友善角落｜狗狗都有社交位🐾',
    body: `带狗出门，想找啲「人狗都自在」嘅角落～

观察分享（示范）：
🌳 海旁较空旷时段
💧 记得带水同拾便袋
🤝 问过先摸别人狗狗

留言你嘅答案：你哋屋苑附近边度最宠物友善？

#宠物 #狗狗 #康城生活`,
    category: '生活',
    style: 'facebook',
    author: '汪星人家长Faye',
    authorAvatar: '🐕',
    likes: 298,
    commentsCount: 52,
    createdAt: '2026-09-21T16:00:00+08:00',
    tags: ['宠物', '友善', '角落'],
    coverEmoji: '🐾',
    gradient: 'linear-gradient(135deg, #f59e0b, #fcd34d)',
  },
  {
    id: 'p33',
    title: '附近诊所点样预约？流程科普（资讯向）',
    body: `整理咗一般「预约流程方向」畀新邻居参考（非任何诊所代言）：

1️⃣ 查官方网页／电话／App 是否接受预约
2️⃣ 准备：症状摘要、过敏史、保险卡（如有）
3️⃣ 问清楚：初诊／复诊、需时、取消政策
4️⃣ 到诊带身份证明，提早 10 分钟

⚠️ 本帖只系资讯科普示意，唔构成医疗建议。请自行核实各诊所安排；紧急请致电 999 或前往急症室。

收藏下次用。

#诊所 #预约 #资讯`,
    category: '医疗',
    style: 'facebook',
    author: '资讯整理员Kay',
    authorAvatar: '🏥',
    likes: 246,
    commentsCount: 31,
    createdAt: '2026-09-21T14:30:00+08:00',
    tags: ['诊所', '预约', '科普'],
    coverEmoji: '📋',
    gradient: 'linear-gradient(135deg, #0284c7, #7dd3fc)',
    disclaimer: '示范资讯 · 非医疗建议。请自行核实诊所资料；紧急请致电 999。',
  },
  {
    id: 'p34',
    title: '咖啡拉花打卡｜康城 barista 手势好稳☕',
    body: `今日拉花靚到唔忍得分享～心形？叶片？你估！

IG 风滤镜：暖色 + 一点点暗角
小红书风文案：地点大概 + 心情就够

留言你嘅答案：你点样叫咖啡最稳？美式／燕麦奶／少甜？

#咖啡 #拉花 #打卡`,
    category: '饮食',
    style: 'instagram',
    author: '咖啡控Bowie',
    authorAvatar: '☕',
    likes: 389,
    commentsCount: 36,
    createdAt: '2026-09-21T12:10:00+08:00',
    tags: ['咖啡', '拉花', '打卡'],
    coverEmoji: '🌸',
    gradient: 'linear-gradient(135deg, #78350f, #d6d3d1)',
    mediaType: 'video',
    videoScriptId: 'v34-latte-art',
    videoSrc: 'videos/demo-food.mp4',
  },
  {
    id: 'p35',
    title: '单车路径分享｜海旁慢骑最啱週末🚲',
    body: `週末单车，唔使狂冲——慢慢睇海最舒服。

注意：
✅ 行人优先
✅ 响铃示意
✅ 停泊唔好挡通道
✅ 头盔按需要

你哋会点选？朝早定黄昏骑？留言约伴（示范）～

#单车 #海旁 #週末`,
    category: '休闲海旁',
    style: 'xiaohongshu',
    author: '骑行阿辉',
    authorAvatar: '🚲',
    likes: 312,
    commentsCount: 27,
    createdAt: '2026-09-21T09:20:00+08:00',
    tags: ['单车', '路径', '海旁'],
    coverEmoji: '🚴',
    gradient: 'linear-gradient(135deg, #0f766e, #99f6e4)',
  },
  {
    id: 'p36',
    title: '週末亲子半日游｜商场＋海旁刚刚好👨‍👩‍👧‍👦',
    body: `带细路出街，行程唔好排太满～

建议节奏：
上午室内活动／轻食
下午海旁吹风跑跑跳跳
预留小睡／尿片时间

留言你嘅答案：你哋亲子週末最常去边？

#亲子 #週末 #康城`,
    category: '生活',
    style: 'facebook',
    author: '两孩妈Clara',
    authorAvatar: '👨‍👧‍👦',
    likes: 267,
    commentsCount: 44,
    createdAt: '2026-09-21T08:00:00+08:00',
    tags: ['亲子', '週末', '行程'],
    coverEmoji: '🎈',
    gradient: 'linear-gradient(135deg, #ea580c, #fdba74)',
  },
  {
    id: 'p37',
    title: '狗狗友善时段｜避开人潮更自在🐶',
    body: `观察：平日早上／晚饭后海旁相对松动，週末下午较挤。

贴士：牵引绳、拾便袋、热天注意脚掌烫。
你哋会点选？朝早定夜晚放风？

短视频感标题：「呢个时段，狗狗都笑得到」

#狗狗 #海旁 #宠物友善`,
    category: '休闲海旁',
    style: 'xiaohongshu',
    author: '狗奴Sam',
    authorAvatar: '🦮',
    likes: 341,
    commentsCount: 39,
    createdAt: '2026-09-20T20:15:00+08:00',
    tags: ['狗狗', '时段', '海旁'],
    coverEmoji: '🦴',
    gradient: 'linear-gradient(135deg, #0369a1, #38bdf8)',
  },
  {
    id: 'p38',
    title: '药房 OTC 常识｜睇标籤先好買（资讯）',
    body: `去药房买成药前，可以养成嘅「资讯习惯」：

🏷️ 睇清楚适应／警告标籤
📅 留意有效期
💬 唔肯定就问药剂师
🚫 唔好听信不明来源偏方

⚠️ 本帖唔系用药建议，亦唔推荐任何品牌。身体不适请咨询医生或药剂师；紧急致电 999。

收藏下次用。

#药房 #OTC #常识`,
    category: '医疗',
    style: 'facebook',
    author: '资讯整理员Kay',
    authorAvatar: '💊',
    likes: 198,
    commentsCount: 22,
    createdAt: '2026-09-20T18:40:00+08:00',
    tags: ['药房', 'OTC', '常识'],
    coverEmoji: '🏪',
    gradient: 'linear-gradient(135deg, #0e7490, #67e8f9)',
    disclaimer: '社区资讯示意 · 非用药／医疗建议。请咨询专业人士；紧急请致电 999。',
  },
  {
    id: 'p39',
    title: '口播标题合集｜海旁短视频这样开场🎬',
    body: `拍海旁短视频唔知点开场？借几句示范口播：

「三十秒教你影到康城日落」
「海风一吹，加班疲惫消失」
「呢个角度，朋友会以为你去咗旅行」

你哋会点选边句？留言你嘅答案，我再出下一辑～

#短视频 #口播 #海旁`,
    category: '休闲海旁',
    style: 'instagram',
    author: '短视频阿禾',
    authorAvatar: '🎥',
    likes: 455,
    commentsCount: 48,
    createdAt: '2026-09-20T17:05:00+08:00',
    tags: ['短视频', '口播', '标题'],
    coverEmoji: '🎤',
    gradient: 'linear-gradient(135deg, #4f46e5, #a5b4fc)',
    mediaType: 'video',
    videoScriptId: 'v39-waterfront-hooks',
    videoSrc: 'videos/demo-waterfront.mp4',
  },
  {
    id: 'p40',
    title: '快递高峰避雷｜自取柜时段心得📦',
    body: `最近收件高峰，大堂挤到爆～

心得：
• 能选商场自取柜就选
• 避开晚饭后 7–9 点
• 大件提早同管理处／快递沟通（按你屋苑规定）

留言你嘅答案：你哋楼最挤系几点？

#快递 #生活hack #康城`,
    category: '生活',
    style: 'xiaohongshu',
    author: '收件狂魔Jen',
    authorAvatar: '📭',
    likes: 289,
    commentsCount: 57,
    createdAt: '2026-09-20T15:30:00+08:00',
    tags: ['快递', '自取', 'tips'],
    coverEmoji: '📬',
    gradient: 'linear-gradient(135deg, #334155, #94a3b8)',
  },
  {
    id: 'p41',
    title: '海旁野餐轻装清单｜唔使大阵仗🧺',
    body: `轻便版：垫、湿巾、水果、冰茶、垃圾袋。
重点：食完带走，海旁先会一直靓。

你哋会点选？二人世界定朋友局？留言～收藏下次用！

#野餐 #海旁 #周末`,
    category: '休闲海旁',
    style: 'facebook',
    author: 'picnic.with.jo',
    authorAvatar: '🧺',
    likes: 276,
    commentsCount: 24,
    createdAt: '2026-09-20T13:50:00+08:00',
    tags: ['野餐', '清单', '海旁'],
    coverEmoji: '🍇',
    gradient: 'linear-gradient(135deg, #15803d, #86efac)',
  },
  {
    id: 'p42',
    title: 'Hidden gem 茶饮｜少甜都好味🧋',
    body: `试咗杯少甜茶饮，海旁边行边饮超爽。
天气热记得多补水；杯袋请丢入垃圾桶。

留言你嘅答案：全糖／少甜／无糖派？

#茶饮 #康城 #饮食`,
    category: '饮食',
    style: 'instagram',
    author: '饮饮Anson',
    authorAvatar: '🧋',
    likes: 318,
    commentsCount: 33,
    createdAt: '2026-09-20T12:00:00+08:00',
    tags: ['茶饮', '少甜', '打卡'],
    coverEmoji: '🧋',
    gradient: 'linear-gradient(135deg, #9a3412, #fdba74)',
  },
  {
    id: 'p43',
    title: '转季衣柜整理｜玄关小筐救命衣架👕',
    body: `天气忽冷忽热，玄关放个「薄外套筐」出入超方便。

还有：口罩、钥匙、八达通一格一物。
有冇康城屋友收纳好物？留言交换～收藏下次用！

#收纳 #转季 #生活`,
    category: '生活',
    style: 'xiaohongshu',
    author: '整理控Ada',
    authorAvatar: '🧺',
    likes: 254,
    commentsCount: 28,
    createdAt: '2026-09-20T10:25:00+08:00',
    tags: ['收纳', '转季', '玄关'],
    coverEmoji: '🧥',
    gradient: 'linear-gradient(135deg, #10b981, #a7f3d0)',
  },
  {
    id: 'p44',
    title: '社区投票｜今晚食乜好？四选一',
    body: `开餐困难户集合！你哋会点选？

A 🍜 面／粉
B 🥗 沙律轻食
C 🍛 东南亚
D 🍱 自己煮

留言字母＋理由。示范互动帖 · 玩下啦！

#投票 #今晚食乜 #饮食`,
    category: '饮食',
    style: 'facebook',
    author: '开餐主持人阿辉',
    authorAvatar: '🎲',
    likes: 402,
    commentsCount: 96,
    createdAt: '2026-09-20T09:10:00+08:00',
    tags: ['投票', '晚饭', '互动'],
    coverEmoji: '🍽️',
    gradient: 'linear-gradient(135deg, #c026d3, #f0abfc)',
  },
  // —— 既有帖子 ——
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
