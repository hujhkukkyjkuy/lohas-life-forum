import type { Category } from './posts'

export interface DemoComment {
  id: string
  author: string
  avatar: string
  text: string
  createdAt: string
  likes: number
}

const byCategory: Record<Category, DemoComment[]> = {
  生活: [
    {
      id: 'c-life-1',
      author: '邻居阿怡',
      avatar: '😊',
      text: '太真实了哈哈，我哋楼都一样！留言支持～',
      createdAt: '2026-09-22T12:10:00+08:00',
      likes: 12,
    },
    {
      id: 'c-life-2',
      author: 'Phase住客Ken',
      avatar: '🏠',
      text: '收藏咗，下次搬屋用得着。有冇人一齐倾二手交收位？',
      createdAt: '2026-09-22T10:40:00+08:00',
      likes: 8,
    },
    {
      id: 'c-life-3',
      author: '晚归人Jo',
      avatar: '🌃',
      text: '我选夜晚！海旁吹完风先返屋企最爽。',
      createdAt: '2026-09-21T21:05:00+08:00',
      likes: 15,
    },
    {
      id: 'c-life-4',
      author: '细路妈Bea',
      avatar: '🧸',
      text: '亲子行程好实用，我哋上週末就咁玩～',
      createdAt: '2026-09-21T16:20:00+08:00',
      likes: 6,
    },
  ],
  饮食: [
    {
      id: 'c-food-1',
      author: '吃货Tom',
      avatar: '🌶️',
      text: '宵夜清单收咗！我投 B 打包返屋企 😂',
      createdAt: '2026-09-22T18:05:00+08:00',
      likes: 21,
    },
    {
      id: 'c-food-2',
      author: 'Brunch女Elle',
      avatar: '🥞',
      text: '週末真係要提早到，唔系排到肚饿。',
      createdAt: '2026-09-22T15:00:00+08:00',
      likes: 11,
    },
    {
      id: 'c-food-3',
      author: '甜牙Momo',
      avatar: '🧁',
      text: '芝士派举手！！下次约打卡～',
      createdAt: '2026-09-22T11:30:00+08:00',
      likes: 19,
    },
    {
      id: 'c-food-4',
      author: '独食Yuki',
      avatar: '🥗',
      text: '一人食窗边位最啱睇海，完全唔尴尬。',
      createdAt: '2026-09-21T20:10:00+08:00',
      likes: 14,
    },
  ],
  休闲海旁: [
    {
      id: 'c-sea-1',
      author: '日落捕手Sora',
      avatar: '🌅',
      text: '第二角度影人像真係绝，多谢分享！',
      createdAt: '2026-09-22T17:40:00+08:00',
      likes: 28,
    },
    {
      id: 'c-sea-2',
      author: '骑行阿辉',
      avatar: '🚲',
      text: '黄昏骑最靓，记得行人优先呀各位。',
      createdAt: '2026-09-21T19:00:00+08:00',
      likes: 9,
    },
    {
      id: 'c-sea-3',
      author: '狗奴Sam',
      avatar: '🦮',
      text: '朝早放风人少好多，狗狗都开心～',
      createdAt: '2026-09-21T08:30:00+08:00',
      likes: 17,
    },
    {
      id: 'c-sea-4',
      author: '短视频阿禾',
      avatar: '🎥',
      text: '口播第二句最好用，已拍一条 demo！',
      createdAt: '2026-09-20T18:15:00+08:00',
      likes: 13,
    },
  ],
  医疗: [
    {
      id: 'c-med-1',
      author: '家长Ben',
      avatar: '👨‍👧‍👦',
      text: '预约流程整理得好清楚，已收藏。自己会再核实地点同时间。',
      createdAt: '2026-09-22T12:00:00+08:00',
      likes: 7,
    },
    {
      id: 'c-med-2',
      author: '资讯读者May',
      avatar: '😷',
      text: '提醒得好：呢啲只系生活资讯，唔好当医疗建议。',
      createdAt: '2026-09-21T15:45:00+08:00',
      likes: 10,
    },
    {
      id: 'c-med-3',
      author: '邻居Irene',
      avatar: '😁',
      text: 'OTC 睇标籤真係好重要，多谢科普。',
      createdAt: '2026-09-20T19:20:00+08:00',
      likes: 5,
    },
  ],
}

/** Deterministic 2–4 demo comments per post from category pools */
export function getDemoComments(postId: string, category: Category, countHint?: number): DemoComment[] {
  const pool = byCategory[category]
  const n = countHint ?? 2 + (postId.charCodeAt(postId.length - 1) % 3) // 2–4
  const start = postId.charCodeAt(1) % pool.length
  const out: DemoComment[] = []
  for (let i = 0; i < Math.min(n, pool.length); i++) {
    const base = pool[(start + i) % pool.length]
    out.push({
      ...base,
      id: `${postId}-${base.id}`,
    })
  }
  return out
}
