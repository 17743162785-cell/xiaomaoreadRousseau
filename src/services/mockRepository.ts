import { passages } from '../data/passages'
import type {
  Highlight,
  LoginResult,
  ReaderComment,
  ReaderRepository,
  ReaderStats,
  ReaderUser,
} from '../types'
import { isAdminEmail } from './config'

const sessionKey = 'rousseau-reader:session'
const commentsKey = 'rousseau-reader:comments'
const highlightsKey = 'rousseau-reader:highlights'
const likesKey = 'rousseau-reader:likes'

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

const writeJson = <T,>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const now = () => new Date().toISOString()

const makeUser = (email: string): ReaderUser => {
  const normalized = email.trim().toLowerCase()
  const prefix = normalized.split('@')[0] || 'reader'
  return {
    id: `mock-${normalized}`,
    email: normalized,
    name: prefix.length > 14 ? `${prefix.slice(0, 14)}...` : prefix,
    isAdmin: isAdminEmail(normalized),
  }
}

const getSession = () => readJson<ReaderUser | null>(sessionKey, null)

const requireUser = () => {
  const user = getSession()
  if (!user) {
    throw new Error('请先登录后再参与共读。')
  }
  return user
}

const readComments = () => readJson<ReaderComment[]>(commentsKey, [])
const saveComments = (comments: ReaderComment[]) => writeJson(commentsKey, comments)
const readHighlights = () => readJson<Highlight[]>(highlightsKey, [])
const saveHighlights = (highlights: Highlight[]) => writeJson(highlightsKey, highlights)
const readLikes = () => readJson<Record<string, string[]>>(likesKey, {})
const saveLikes = (likes: Record<string, string[]>) => writeJson(likesKey, likes)

const withLikeState = (comment: ReaderComment, user: ReaderUser | null): ReaderComment => {
  const likes = readLikes()
  const users = likes[comment.id] ?? []
  return {
    ...comment,
    likeCount: users.length,
    likedByMe: user ? users.includes(user.id) : false,
  }
}

export const createMockRepository = (): ReaderRepository => ({
  mode: 'mock',

  async getCurrentUser() {
    return getSession()
  },

  async sendMagicLink(email: string): Promise<LoginResult> {
    const user = makeUser(email)
    writeJson(sessionKey, user)
    return {
      message: '本地演示模式已直接登录；配置 CloudBase 后会改为发送邮箱魔法链接。',
      mockSignedIn: user,
    }
  },

  async signOut() {
    window.localStorage.removeItem(sessionKey)
  },

  async listComments(passageId: string) {
    const user = getSession()
    return readComments()
      .filter((comment) => comment.passageId === passageId)
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      .map((comment) => withLikeState(comment, user))
  },

  async addComment(passageId: string, body: string) {
    const user = requireUser()
    const comment: ReaderComment = {
      id: crypto.randomUUID(),
      passageId,
      userId: user.id,
      userEmail: user.email,
      userName: user.name,
      body: body.trim(),
      createdAt: now(),
      hidden: false,
      likedByMe: false,
      likeCount: 0,
    }
    saveComments([comment, ...readComments()])
    return comment
  },

  async updateComment(commentId: string, body: string) {
    const user = requireUser()
    const comments = readComments()
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    if (target.userId !== user.id && !user.isAdmin) {
      throw new Error('只能编辑自己的评论。')
    }
    const updated = {
      ...target,
      body: body.trim(),
      updatedAt: now(),
    }
    saveComments(comments.map((comment) => (comment.id === commentId ? updated : comment)))
    return withLikeState(updated, user)
  },

  async deleteComment(commentId: string) {
    const user = requireUser()
    const comments = readComments()
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) {
      return
    }
    if (target.userId !== user.id && !user.isAdmin) {
      throw new Error('只能删除自己的评论。')
    }
    saveComments(comments.filter((comment) => comment.id !== commentId))
  },

  async toggleLike(commentId: string) {
    const user = requireUser()
    const comments = readComments()
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    const likes = readLikes()
    const users = likes[commentId] ?? []
    likes[commentId] = users.includes(user.id)
      ? users.filter((userId) => userId !== user.id)
      : [...users, user.id]
    saveLikes(likes)
    return withLikeState(target, user)
  },

  async listHighlights() {
    const user = getSession()
    if (!user) {
      return []
    }
    return readHighlights().filter((highlight) => highlight.userId === user.id)
  },

  async setHighlight(passageId: string, active: boolean) {
    const user = requireUser()
    const highlights = readHighlights()
    const existing = highlights.find(
      (highlight) => highlight.userId === user.id && highlight.passageId === passageId,
    )
    if (!active) {
      saveHighlights(highlights.filter((highlight) => highlight.id !== existing?.id))
      return null
    }
    if (existing) {
      return existing
    }
    const highlight: Highlight = {
      id: crypto.randomUUID(),
      passageId,
      userId: user.id,
      createdAt: now(),
    }
    saveHighlights([...highlights, highlight])
    return highlight
  },

  async hideComment(commentId: string, reason: string) {
    const user = requireUser()
    if (!user.isAdmin) {
      throw new Error('只有管理员可以隐藏评论。')
    }
    const comments = readComments()
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    const updated = {
      ...target,
      hidden: true,
      hiddenReason: reason.trim() || '管理员已隐藏这条评论',
      updatedAt: now(),
    }
    saveComments(comments.map((comment) => (comment.id === commentId ? updated : comment)))
    return withLikeState(updated, user)
  },

  async restoreComment(commentId: string) {
    const user = requireUser()
    if (!user.isAdmin) {
      throw new Error('只有管理员可以恢复评论。')
    }
    const comments = readComments()
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    const updated = {
      ...target,
      hidden: false,
      hiddenReason: undefined,
      updatedAt: now(),
    }
    saveComments(comments.map((comment) => (comment.id === commentId ? updated : comment)))
    return withLikeState(updated, user)
  },

  async getStats(): Promise<ReaderStats> {
    const comments = readComments()
    const highlights = readHighlights()
    const readers = new Set([
      ...comments.map((comment) => comment.userId),
      ...highlights.map((highlight) => highlight.userId),
    ])
    return {
      commentCount: comments.filter((comment) => !comment.hidden).length,
      highlightCount: highlights.length,
      readerCount: Math.max(readers.size, passages.length > 0 ? 1 : 0),
    }
  },
})
