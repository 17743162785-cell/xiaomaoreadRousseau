import type {
  Highlight,
  LoginResult,
  ReaderComment,
  ReaderRepository,
  ReaderStats,
  ReaderUser,
} from '../types'
import { config, isAdminEmail } from './config'

type CloudBaseApp = {
  auth: () => CloudBaseAuth
  database: () => CloudBaseDb
}

type CloudBaseAuth = {
  hasLoginState: () => unknown
  getCurrentUser: () => Promise<unknown>
  signInWithOtp: (params: {
    email: string
    options: {
      shouldCreateUser: boolean
      emailRedirectTo: string
    }
  }) => Promise<{ error?: { message?: string } | null }>
  signOut: () => Promise<void>
}

type CloudBaseDb = {
  collection: (name: string) => CloudBaseCollection
}

type CloudBaseCollection = {
  where: (query: Record<string, unknown>) => CloudBaseQuery
  doc: (id: string) => CloudBaseDocument
  add: (data: Record<string, unknown>) => Promise<{ id?: string }>
  count: () => Promise<{ total?: number }>
}

type CloudBaseQuery = {
  get: () => Promise<{ data?: unknown[] }>
  orderBy: (field: string, direction: 'asc' | 'desc') => CloudBaseQuery
}

type CloudBaseDocument = {
  get: () => Promise<{ data?: unknown[] }>
  update: (patch: Record<string, unknown>) => Promise<unknown>
  remove: () => Promise<unknown>
}

type CloudComment = {
  _id?: string
  id?: string
  passageId: string
  userId: string
  userEmail: string
  userName: string
  body: string
  createdAt: string
  updatedAt?: string
  hidden?: boolean
  hiddenReason?: string
  likeCount?: number
}

type CloudHighlight = {
  _id?: string
  id?: string
  passageId: string
  userId: string
  createdAt: string
}

type CloudLike = {
  _id?: string
  commentId: string
  userId: string
}

let appPromise: Promise<CloudBaseApp> | null = null

const getApp = async () => {
  if (!config.cloudbaseEnvId) {
    throw new Error('缺少 CloudBase 环境 ID。')
  }
  appPromise ??= import('@cloudbase/js-sdk').then(({ default: cloudbase }) =>
    cloudbase.init({
      env: config.cloudbaseEnvId,
      region: config.cloudbaseRegion,
    }) as CloudBaseApp,
  )
  return appPromise
}

const getAuth = async () => {
  const app = await getApp()
  return app.auth()
}

const getDb = async () => {
  const app = await getApp()
  return app.database()
}

const now = () => new Date().toISOString()

const docId = (doc: { _id?: string; id?: string }) => doc._id ?? doc.id ?? crypto.randomUUID()

const getEmailFromCloudUser = (user: unknown) => {
  const data = user as {
    email?: string
    user?: { email?: string; uid?: string; id?: string }
    uid?: string
    id?: string
  }
  return data.email ?? data.user?.email ?? ''
}

const getIdFromCloudUser = (user: unknown) => {
  const data = user as {
    uid?: string
    id?: string
    user?: { uid?: string; id?: string; email?: string }
  }
  return data.uid ?? data.id ?? data.user?.uid ?? data.user?.id ?? data.user?.email ?? 'cloudbase-user'
}

const makeReaderUser = (cloudUser: unknown): ReaderUser | null => {
  if (!cloudUser) {
    return null
  }
  const email = getEmailFromCloudUser(cloudUser).toLowerCase()
  const id = String(getIdFromCloudUser(cloudUser))
  const name = email ? email.split('@')[0] : id.slice(0, 12)
  return {
    id,
    email,
    name,
    isAdmin: email ? isAdminEmail(email) : false,
  }
}

const requireUser = async () => {
  const user = await createCloudBaseRepository().getCurrentUser()
  if (!user) {
    throw new Error('请先登录后再参与共读。')
  }
  return user
}

const mapComment = (
  comment: CloudComment,
  like: CloudLike | undefined,
): ReaderComment => ({
  id: docId(comment),
  passageId: comment.passageId,
  userId: comment.userId,
  userEmail: comment.userEmail,
  userName: comment.userName,
  body: comment.body,
  createdAt: comment.createdAt,
  updatedAt: comment.updatedAt,
  hidden: Boolean(comment.hidden),
  hiddenReason: comment.hiddenReason,
  likeCount: comment.likeCount ?? 0,
  likedByMe: Boolean(like),
})

const mapHighlight = (highlight: CloudHighlight): Highlight => ({
  id: docId(highlight),
  passageId: highlight.passageId,
  userId: highlight.userId,
  createdAt: highlight.createdAt,
})

export const createCloudBaseRepository = (): ReaderRepository => ({
  mode: 'cloudbase',

  async getCurrentUser() {
    const auth = await getAuth()
    const localState = auth.hasLoginState()
    if (!localState) {
      return null
    }
    const cloudUser = await auth.getCurrentUser()
    return makeReaderUser(cloudUser)
  },

  async sendMagicLink(email: string, redirectTo: string): Promise<LoginResult> {
    const auth = await getAuth()
    const result = await auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: redirectTo,
      },
    })
    if (result.error) {
      throw new Error(result.error.message || '发送登录链接失败。')
    }
    return {
      message: '登录链接已发送，请在 10 分钟内点击邮件中的按钮回到共读页。',
    }
  },

  async signOut() {
    const auth = await getAuth()
    await auth.signOut()
  },

  async listComments(passageId: string) {
    const db = await getDb()
    const user = await this.getCurrentUser()
    const commentResult = await db
      .collection('comments')
      .where({ passageId })
      .orderBy('createdAt', 'desc')
      .get()
    const comments = (commentResult.data ?? []) as CloudComment[]
    if (!user || comments.length === 0) {
      return comments.map((comment) => mapComment(comment, undefined))
    }
    const likeResult = await db
      .collection('comment_likes')
      .where({
        userId: user.id,
      })
      .get()
    const likes = (likeResult.data ?? []) as CloudLike[]
    return comments.map((comment) =>
      mapComment(
        comment,
        likes.find((like) => like.commentId === docId(comment)),
      ),
    )
  },

  async addComment(passageId: string, body: string) {
    const user = await requireUser()
    const db = await getDb()
    const comment: Omit<ReaderComment, 'id' | 'likedByMe' | 'likeCount'> & {
      likeCount: number
    } = {
      passageId,
      userId: user.id,
      userEmail: user.email,
      userName: user.name,
      body: body.trim(),
      createdAt: now(),
      hidden: false,
      likeCount: 0,
    }
    const result = await db.collection('comments').add(comment)
    return {
      ...comment,
      id: result.id ?? crypto.randomUUID(),
      likedByMe: false,
      likeCount: 0,
    }
  },

  async updateComment(commentId: string, body: string) {
    const user = await requireUser()
    const db = await getDb()
    const currentResult = await db.collection('comments').doc(commentId).get()
    const target = currentResult.data?.[0] as CloudComment | undefined
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    if (target.userId !== user.id && !user.isAdmin) {
      throw new Error('只能编辑自己的评论。')
    }
    const patch = {
      body: body.trim(),
      updatedAt: now(),
    }
    await db.collection('comments').doc(commentId).update(patch)
    return mapComment({ ...target, ...patch, _id: commentId }, undefined)
  },

  async deleteComment(commentId: string) {
    const user = await requireUser()
    const db = await getDb()
    const currentResult = await db.collection('comments').doc(commentId).get()
    const target = currentResult.data?.[0] as CloudComment | undefined
    if (!target) {
      return
    }
    if (target.userId !== user.id && !user.isAdmin) {
      throw new Error('只能删除自己的评论。')
    }
    await db.collection('comments').doc(commentId).remove()
  },

  async toggleLike(commentId: string) {
    const user = await requireUser()
    const db = await getDb()
    const likeResult = await db
      .collection('comment_likes')
      .where({ commentId, userId: user.id })
      .get()
    const existing = (likeResult.data?.[0] ?? null) as CloudLike | null
    const commentResult = await db.collection('comments').doc(commentId).get()
    const comment = commentResult.data?.[0] as CloudComment | undefined
    if (!comment) {
      throw new Error('没有找到这条评论。')
    }
    const nextLikeCount = Math.max(0, (comment.likeCount ?? 0) + (existing ? -1 : 1))
    if (existing?._id) {
      await db.collection('comment_likes').doc(existing._id).remove()
    } else {
      await db.collection('comment_likes').add({
        commentId,
        userId: user.id,
        createdAt: now(),
      })
    }
    await db.collection('comments').doc(commentId).update({ likeCount: nextLikeCount })
    return mapComment({ ...comment, _id: commentId, likeCount: nextLikeCount }, existing ? undefined : { commentId, userId: user.id })
  },

  async listHighlights() {
    const user = await this.getCurrentUser()
    if (!user) {
      return []
    }
    const db = await getDb()
    const result = await db.collection('highlights').where({ userId: user.id }).get()
    return ((result.data ?? []) as CloudHighlight[]).map(mapHighlight)
  },

  async setHighlight(passageId: string, active: boolean) {
    const user = await requireUser()
    const db = await getDb()
    const existingResult = await db
      .collection('highlights')
      .where({ passageId, userId: user.id })
      .get()
    const existing = (existingResult.data?.[0] ?? null) as CloudHighlight | null
    if (!active) {
      if (existing?._id) {
        await db.collection('highlights').doc(existing._id).remove()
      }
      return null
    }
    if (existing) {
      return mapHighlight(existing)
    }
    const highlight = {
      passageId,
      userId: user.id,
      createdAt: now(),
    }
    const result = await db.collection('highlights').add(highlight)
    return { ...highlight, id: result.id ?? crypto.randomUUID() }
  },

  async hideComment(commentId: string, reason: string) {
    const user = await requireUser()
    if (!user.isAdmin) {
      throw new Error('只有管理员可以隐藏评论。')
    }
    const db = await getDb()
    const currentResult = await db.collection('comments').doc(commentId).get()
    const target = currentResult.data?.[0] as CloudComment | undefined
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    const patch = {
      hidden: true,
      hiddenReason: reason.trim() || '管理员已隐藏这条评论',
      updatedAt: now(),
    }
    await db.collection('comments').doc(commentId).update(patch)
    await db.collection('moderation_logs').add({
      commentId,
      action: 'hide',
      reason: patch.hiddenReason,
      adminUserId: user.id,
      createdAt: now(),
    })
    return mapComment({ ...target, ...patch, _id: commentId }, undefined)
  },

  async restoreComment(commentId: string) {
    const user = await requireUser()
    if (!user.isAdmin) {
      throw new Error('只有管理员可以恢复评论。')
    }
    const db = await getDb()
    const currentResult = await db.collection('comments').doc(commentId).get()
    const target = currentResult.data?.[0] as CloudComment | undefined
    if (!target) {
      throw new Error('没有找到这条评论。')
    }
    const patch = {
      hidden: false,
      hiddenReason: undefined,
      updatedAt: now(),
    }
    await db.collection('comments').doc(commentId).update(patch)
    await db.collection('moderation_logs').add({
      commentId,
      action: 'restore',
      adminUserId: user.id,
      createdAt: now(),
    })
    return mapComment({ ...target, ...patch, _id: commentId }, undefined)
  },

  async getStats(): Promise<ReaderStats> {
    const db = await getDb()
    const [comments, highlights, profiles] = await Promise.all([
      db.collection('comments').count(),
      db.collection('highlights').count(),
      db.collection('profiles').count(),
    ])
    return {
      commentCount: comments.total ?? 0,
      highlightCount: highlights.total ?? 0,
      readerCount: profiles.total ?? 0,
    }
  },
})
