export type CloseReadingNote = {
  title: string
  body: string
}

export type TranslationLayer = {
  title: string
  body: string
  sourceNote?: string
}

export type Passage = {
  id: string
  bookId?: string
  bookTitle?: string
  chapter: string
  title: string
  theme: string
  source: string
  sourceUrl: string
  originalRef: string
  translation: string
  translationLayers?: TranslationLayer[]
  guide: string
  closeReading?: CloseReadingNote[]
  furtherReading?: CloseReadingNote[]
  questions: string[]
  keyTerms: string[]
}

export type ReaderUser = {
  id: string
  email: string
  name: string
  isAdmin: boolean
}

export type ReaderComment = {
  id: string
  passageId: string
  userId: string
  userEmail: string
  userName: string
  body: string
  createdAt: string
  updatedAt?: string
  hidden: boolean
  hiddenReason?: string
  likedByMe: boolean
  likeCount: number
}

export type Highlight = {
  id: string
  passageId: string
  userId: string
  createdAt: string
}

export type ReaderStats = {
  commentCount: number
  highlightCount: number
  readerCount: number
}

export type LoginResult = {
  message: string
  mockSignedIn?: ReaderUser
}

export type ReaderRepository = {
  mode: 'mock' | 'cloudbase'
  getCurrentUser: () => Promise<ReaderUser | null>
  sendMagicLink: (email: string, redirectTo: string) => Promise<LoginResult>
  signOut: () => Promise<void>
  listComments: (passageId: string) => Promise<ReaderComment[]>
  addComment: (passageId: string, body: string) => Promise<ReaderComment>
  updateComment: (commentId: string, body: string) => Promise<ReaderComment>
  deleteComment: (commentId: string) => Promise<void>
  toggleLike: (commentId: string) => Promise<ReaderComment>
  listHighlights: () => Promise<Highlight[]>
  setHighlight: (passageId: string, active: boolean) => Promise<Highlight | null>
  hideComment: (commentId: string, reason: string) => Promise<ReaderComment>
  restoreComment: (commentId: string) => Promise<ReaderComment>
  getStats: () => Promise<ReaderStats>
}
