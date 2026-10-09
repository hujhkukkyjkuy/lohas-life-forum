import type { Post } from '../data/posts'

export const LOCAL_POSTS_KEY = 'lohas-life-local-posts'

export function loadLocalPosts(): Post[] {
  try {
    const raw = localStorage.getItem(LOCAL_POSTS_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw) as Post[]
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export function saveLocalPosts(list: Post[]) {
  localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(list))
}

export function upsertLocalPost(post: Post): Post[] {
  const prev = loadLocalPosts().filter((p) => p.id !== post.id)
  const next = [post, ...prev]
  saveLocalPosts(next)
  return next
}

export function getLocalPostById(id: string): Post | undefined {
  return loadLocalPosts().find((p) => p.id === id)
}

/** 列表用短摘录：只留问题／开头，截断答案 */
export function listExcerpt(post: Post, max = 72): string {
  let text = post.body || ''
  const q = text.match(/❓[^\n]+/)
  if (q) {
    text = q[0].replace(/^❓\s*/, '').trim()
  } else {
    text = text.split(/✅\s*答案/)[0]
    text = text.replace(/\s+/g, ' ').trim()
  }
  text = text.replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  return `${text.slice(0, max).trim()}…`
}

export function isQuestionPost(post: Post): boolean {
  return (
    post.title.includes('今日問題') ||
    post.title.includes('今日问题') ||
    post.body.includes('❓') ||
    /[ABC]\s*[^／\n]{0,40}[／/]/.test(post.body)
  )
}

export function parseVoteOptions(post: Post): Array<{ key: 'A' | 'B' | 'C'; label: string }> {
  const line =
    post.body
      .split('\n')
      .map((l) => l.trim())
      .find((l) => /A\s+.+[／/].*B/.test(l) || /留言.*A\s/.test(l)) || ''
  const cleaned = line.replace(/^.*?(?=A\s)/, '')
  const parts = cleaned.split(/[／/]/).map((s) => s.trim()).filter(Boolean)
  const opts: Array<{ key: 'A' | 'B' | 'C'; label: string }> = []
  for (const p of parts) {
    const m = p.match(/^([ABC])\s*[.、:：]?\s*(.+)$/)
    if (m) {
      opts.push({ key: m[1] as 'A' | 'B' | 'C', label: m[2].replace(/🙋/g, '').trim() })
    }
  }
  if (opts.length >= 2) return opts.slice(0, 3)
  return [
    { key: 'A', label: '同意／会' },
    { key: 'B', label: '唔同意／唔会' },
    { key: 'C', label: '睇情况' },
  ]
}

const VOTES_KEY = 'lohas-life-post-votes'
const REPLIES_KEY = 'lohas-life-post-replies'

export type LocalReply = { id: string; text: string; createdAt: string }

export function loadVote(postId: string): 'A' | 'B' | 'C' | null {
  try {
    const raw = localStorage.getItem(VOTES_KEY)
    if (!raw) return null
    const map = JSON.parse(raw) as Record<string, string>
    const v = map[postId]
    return v === 'A' || v === 'B' || v === 'C' ? v : null
  } catch {
    return null
  }
}

export function saveVote(postId: string, choice: 'A' | 'B' | 'C') {
  let map: Record<string, string> = {}
  try {
    map = JSON.parse(localStorage.getItem(VOTES_KEY) || '{}') as Record<string, string>
  } catch {
    map = {}
  }
  map[postId] = choice
  localStorage.setItem(VOTES_KEY, JSON.stringify(map))
}

export function loadVoteCounts(postId: string): Record<'A' | 'B' | 'C', number> {
  const base = { A: 0, B: 0, C: 0 }
  try {
    const raw = localStorage.getItem(VOTES_KEY)
    if (!raw) return base
    const map = JSON.parse(raw) as Record<string, string>
    // 本机一人一票：有票则对应 +1（演示）
    const v = map[postId]
    if (v === 'A' || v === 'B' || v === 'C') base[v] = 1
  } catch {
    /* ignore */
  }
  return base
}

export function loadReplies(postId: string): LocalReply[] {
  try {
    const raw = localStorage.getItem(REPLIES_KEY)
    if (!raw) return []
    const map = JSON.parse(raw) as Record<string, LocalReply[]>
    return Array.isArray(map[postId]) ? map[postId] : []
  } catch {
    return []
  }
}

export function addReply(postId: string, text: string): LocalReply[] {
  let map: Record<string, LocalReply[]> = {}
  try {
    map = JSON.parse(localStorage.getItem(REPLIES_KEY) || '{}') as Record<string, LocalReply[]>
  } catch {
    map = {}
  }
  const reply: LocalReply = {
    id: `r-${Date.now()}`,
    text,
    createdAt: new Date().toISOString(),
  }
  const list = [reply, ...(map[postId] || [])]
  map[postId] = list
  localStorage.setItem(REPLIES_KEY, JSON.stringify(map))
  return list
}
