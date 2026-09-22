import { useState } from 'react'
import { CATEGORIES, type Category } from '../data/posts'

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (payload: { title: string; body: string; category: Category }) => void
}

export function ComposeSheet({ open, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState<Category>('生活')

  if (!open) return null

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <h2>发帖</h2>
        <p className="hint">本地示范 · 不会上传服务器 · 刷新后消失</p>
        <p className="hint login-hint">🔐 登录后可同步发帖同收藏（即将开放）</p>
        <div className="field">
          <label>分类</label>
          <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>标题</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="分享康城生活…"
            maxLength={80}
          />
        </div>
        <div className="field">
          <label>内容</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="写点邻居会感兴趣的事… 可加「留言你嘅答案」"
          />
        </div>
        <div className="sheet-actions">
          <button type="button" className="btn ghost" onClick={onClose}>
            取消
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              if (!title.trim() || !body.trim()) return
              onSubmit({ title: title.trim(), body: body.trim(), category })
              setTitle('')
              setBody('')
              setCategory('生活')
            }}
          >
            发布（本地）
          </button>
        </div>
      </div>
    </div>
  )
}
