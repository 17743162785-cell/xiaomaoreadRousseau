import {
  BookOpen,
  Check,
  ChevronRight,
  EyeOff,
  Heart,
  Highlighter,
  LogOut,
  MessageCircle,
  Pencil,
  Send,
  Shield,
  Trash2,
  Undo2,
  UserRound,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import { books, getPassageBook } from './data/books'
import { getChineseTranslation } from './data/chineseTranslations'
import { closeReadings } from './data/closeReadings'
import { furtherReadings } from './data/furtherReadings'
import { passageCount, passages } from './data/passages'
import { getRepository } from './services/repository'
import type { Highlight, ReaderComment, ReaderStats, ReaderUser } from './types'

const repository = getRepository()

const emptyStats: ReaderStats = {
  commentCount: 0,
  highlightCount: 0,
  readerCount: 0,
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))

const normalizeEmail = (value: string) => value.trim().toLowerCase()

function App() {
  const [user, setUser] = useState<ReaderUser | null>(null)
  const [stats, setStats] = useState<ReaderStats>(emptyStats)
  const [highlights, setHighlights] = useState<Highlight[]>([])
  const [commentsByPassage, setCommentsByPassage] = useState<Record<string, ReaderComment[]>>({})
  const [selectedBookId, setSelectedBookId] = useState('all')
  const [activePassageId, setActivePassageId] = useState(passages[0].id)
  const [email, setEmail] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingBody, setEditingBody] = useState('')
  const [busy, setBusy] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const [error, setError] = useState('')

  const selectedBook = useMemo(
    () => books.find((book) => book.id === selectedBookId) ?? null,
    [selectedBookId],
  )

  const selectedTranslation = useMemo(
    () => (selectedBook ? getChineseTranslation(selectedBook.id) : null),
    [selectedBook],
  )

  const visiblePassages = useMemo(
    () =>
      selectedBookId === 'all'
        ? passages
        : passages.filter((passage) => getPassageBook(passage).id === selectedBookId),
    [selectedBookId],
  )

  const activePassage = useMemo(
    () => passages.find((passage) => passage.id === activePassageId) ?? visiblePassages[0] ?? passages[0],
    [activePassageId, visiblePassages],
  )

  const activeComments = commentsByPassage[activePassageId] ?? []
  const highlightedPassageIds = useMemo(
    () => new Set(highlights.map((highlight) => highlight.passageId)),
    [highlights],
  )

  const selectPassage = (passageId: string, shouldScroll = false) => {
    setActivePassageId(passageId)
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        document.getElementById(passageId)?.scrollIntoView?.({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

  const selectBook = (bookId: string) => {
    setSelectedBookId(bookId)
    const nextPassage =
      bookId === 'all' ? passages[0] : passages.find((passage) => getPassageBook(passage).id === bookId)
    if (nextPassage) {
      selectPassage(nextPassage.id, true)
    }
  }

  const loadComments = async (passageId: string) => {
    const comments = await repository.listComments(passageId)
    setCommentsByPassage((current) => ({
      ...current,
      [passageId]: comments,
    }))
  }

  const refreshStats = async () => {
    setStats(await repository.getStats())
  }

  const refreshSessionData = async () => {
    const [sessionUser, savedHighlights] = await Promise.all([
      repository.getCurrentUser(),
      repository.listHighlights(),
    ])
    setUser(sessionUser)
    setHighlights(savedHighlights)
  }

  const loadAllComments = async () => {
    const entries = await Promise.all(
      passages.map(async (passage) => [passage.id, await repository.listComments(passage.id)] as const),
    )
    setCommentsByPassage(Object.fromEntries(entries))
  }

  useEffect(() => {
    const boot = async () => {
      try {
        await Promise.all([refreshSessionData(), loadAllComments(), refreshStats()])
      } catch (bootError) {
        setError(bootError instanceof Error ? bootError.message : '初始化失败。')
      }
    }
    void boot()
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActivePassageId(visible.target.id)
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.18, 0.35, 0.6],
      },
    )
    visiblePassages.forEach((passage) => {
      const node = document.getElementById(passage.id)
      if (node) {
        observer.observe(node)
      }
    })
    return () => observer.disconnect()
  }, [visiblePassages])

  useEffect(() => {
    if (cooldown <= 0) {
      return undefined
    }
    const timer = window.setTimeout(() => setCooldown((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [cooldown])

  const runAction = async (action: () => Promise<void>) => {
    setBusy(true)
    setError('')
    try {
      await action()
    } catch (actionError) {
      setError(actionError instanceof Error ? actionError.message : '操作失败，请稍后再试。')
    } finally {
      setBusy(false)
    }
  }

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalized = normalizeEmail(email)
    if (!normalized) {
      setError('请输入邮箱。')
      return
    }
    void runAction(async () => {
      const result = await repository.sendMagicLink(normalized, window.location.href)
      setLoginMessage(result.message)
      setCooldown(60)
      if (result.mockSignedIn) {
        setUser(result.mockSignedIn)
        await refreshSessionData()
        await loadAllComments()
        await refreshStats()
      }
    })
  }

  const handleSignOut = () => {
    void runAction(async () => {
      await repository.signOut()
      setUser(null)
      setHighlights([])
      setLoginMessage('')
      await loadAllComments()
    })
  }

  const ensureUser = () => {
    if (user) {
      return true
    }
    setError('请先用邮箱登录，再参与评论或高亮。')
    return false
  }

  const toggleHighlight = (passageId: string) => {
    if (!ensureUser()) {
      return
    }
    const shouldHighlight = !highlightedPassageIds.has(passageId)
    void runAction(async () => {
      await repository.setHighlight(passageId, shouldHighlight)
      setHighlights(await repository.listHighlights())
      await refreshStats()
    })
  }

  const submitComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!ensureUser()) {
      return
    }
    if (draft.trim().length < 3) {
      setError('评论至少需要 3 个字。')
      return
    }
    void runAction(async () => {
      await repository.addComment(activePassageId, draft)
      setDraft('')
      await loadComments(activePassageId)
      await refreshStats()
    })
  }

  const submitEdit = (commentId: string) => {
    if (!editingBody.trim()) {
      setError('评论内容不能为空。')
      return
    }
    void runAction(async () => {
      await repository.updateComment(commentId, editingBody)
      setEditingId(null)
      setEditingBody('')
      await loadComments(activePassageId)
    })
  }

  const deleteComment = (commentId: string) => {
    void runAction(async () => {
      await repository.deleteComment(commentId)
      await loadComments(activePassageId)
      await refreshStats()
    })
  }

  const toggleLike = (commentId: string) => {
    if (!ensureUser()) {
      return
    }
    void runAction(async () => {
      await repository.toggleLike(commentId)
      await loadComments(activePassageId)
    })
  }

  const hideComment = (commentId: string) => {
    const reason = window.prompt('隐藏原因', '偏离共读主题或包含不适内容') ?? ''
    if (!reason) {
      return
    }
    void runAction(async () => {
      await repository.hideComment(commentId, reason)
      await loadComments(activePassageId)
    })
  }

  const restoreComment = (commentId: string) => {
    void runAction(async () => {
      await repository.restoreComment(commentId)
      await loadComments(activePassageId)
    })
  }

  const startEditing = (comment: ReaderComment) => {
    setEditingId(comment.id)
    setEditingBody(comment.body)
  }

  return (
    <main className="app-shell">
      <aside className="reading-rail" aria-label="章节导航">
        <div className="brand-block">
          <BookOpen aria-hidden="true" />
          <div>
            <p>Rousseau Reader</p>
            <strong>卢梭思想共读</strong>
          </div>
        </div>

        <div className="book-strip" aria-label="作品范围">
          <button
            aria-pressed={selectedBookId === 'all'}
            className={selectedBookId === 'all' ? 'book-chip active' : 'book-chip'}
            onClick={() => selectBook('all')}
            title="显示卢梭全部作品入口"
            type="button"
          >
            全部
          </button>
          {books.map((book) => (
            <button
              aria-pressed={selectedBookId === book.id}
              className={selectedBookId === book.id ? 'book-chip active' : 'book-chip'}
              key={book.id}
              onClick={() => selectBook(book.id)}
              title={`${book.title} · ${book.axis}`}
              type="button"
            >
              {book.shortTitle}
            </button>
          ))}
        </div>

        <nav className="passage-list">
          {visiblePassages.map((passage, index) => {
            const book = getPassageBook(passage)
            return (
              <button
                className={passage.id === activePassageId ? 'passage-tab active' : 'passage-tab'}
                key={passage.id}
                onClick={() => selectPassage(passage.id, true)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{passage.title}</strong>
                  <small>
                    {book.shortTitle} · {passage.theme}
                  </small>
                </div>
                <ChevronRight aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="rail-stats" aria-label="共读统计">
          <span>{books.length} 部作品</span>
          <span>
            {visiblePassages.length}/{passageCount} 段文本
          </span>
          <span>{stats.commentCount} 条评论</span>
          <span>{stats.highlightCount} 次高亮</span>
        </div>
      </aside>

      <section className="reader-column" aria-label="卢梭文本共读">
        <header className="reader-hero">
          <div className="hero-copy">
            <p className="eyebrow">Jean-Jacques Rousseau · 1712-1778</p>
            <h1>卢梭思想交互式共读</h1>
            <p>
              从日内瓦湖、巴黎论战、教育小说、自我辩护和晚年植物标本进入卢梭。这里不把他压成某种行动口号，而是追踪一个敏感、矛盾、极有洞察力的人怎样反复处理自然、社会、真实和自由。
            </p>
            <div className="hero-meta" aria-label="共读范围">
              <span>{books.length} 部作品</span>
              <span>{passageCount} 段文本</span>
              <span>{repository.mode === 'mock' ? '本地演示' : 'CloudBase'}</span>
            </div>
            <div className="hero-rhythm" aria-hidden="true">
              <span>日内瓦</span>
              <span>湖畔漫步</span>
              <span>手稿</span>
              <span>植物标本</span>
            </div>
          </div>
        </header>

        <section className="book-atlas" aria-label="卢梭作品地图">
          {selectedBook ? (
            <>
              <div className="book-overview">
                <p className="section-kicker">当前作品</p>
                <h2>{selectedBook.title}</h2>
                <div className="book-overview-meta">
                  <span>{selectedBook.year}</span>
                  <span>{selectedBook.kind}</span>
                  <span>{selectedBook.axis}</span>
                </div>
                <div className="book-signal-row" aria-label={`${selectedBook.title} 阅读统计`}>
                  <span>
                    <strong>{visiblePassages.length}</strong>
                    段文本
                  </span>
                  <span>
                    <strong>{selectedBook.annotations.length}</strong>
                    条注释
                  </span>
                  <span>
                    <strong>{selectedTranslation?.alternates.length ?? 0}</strong>
                    个对照版本
                  </span>
                </div>
                <p>{selectedBook.overview}</p>
                {selectedTranslation ? (
                  <div className="translation-edition">
                    <span>推荐中文译本</span>
                    <strong>{selectedTranslation.primary}</strong>
                    <p>{selectedTranslation.why}</p>
                    {selectedTranslation.alternates.length > 0 ? (
                      <details>
                        <summary>可对照版本</summary>
                        <ul>
                          {selectedTranslation.alternates.map((alternate) => (
                            <li key={alternate}>{alternate}</li>
                          ))}
                        </ul>
                      </details>
                    ) : null}
                  </div>
                ) : null}
                {selectedBook.sourceUrl ? (
                  <a href={selectedBook.sourceUrl} rel="noreferrer" target="_blank">
                    查看法文公版来源
                  </a>
                ) : null}
              </div>
              <div className="annotation-grid" aria-label={`${selectedBook.title} 注释`}>
                {selectedBook.annotations.map((annotation) => (
                  <details className="annotation-note" key={annotation.title}>
                    <summary>{annotation.title}</summary>
                    <p>{annotation.body}</p>
                  </details>
                ))}
              </div>
            </>
          ) : (
            <div className="corpus-note">
              <p className="section-kicker">作品地图</p>
              <h2>从日内瓦、巴黎、湖山和植物标本进入卢梭</h2>
              <p>
                左侧书目现在覆盖卢梭主要存世作品、政治方案、音乐论争、剧作、自传性写作和晚年自然研究。点击任一作品可以筛选正文，并展开相关轶事注释：它们会帮助读者看到卢梭的真实处境，而不是只看到被后人概括出来的几个标签。
              </p>
              <div className="corpus-ledger" aria-label="卢梭共读数据">
                <span>
                  <strong>{books.length}</strong>
                  作品入口
                </span>
                <span>
                  <strong>{passageCount}</strong>
                  文本卡
                </span>
                <span>
                  <strong>7</strong>
                  思想谱系
                </span>
              </div>
              <div className="book-family-grid" aria-label="作品谱系">
                <span>音乐与语言</span>
                <span>文明批判</span>
                <span>共和国政治</span>
                <span>教育与宗教</span>
                <span>情感小说</span>
                <span>自传与晚年</span>
                <span>植物学</span>
              </div>
            </div>
          )}
        </section>

        <div className="passage-stack">
          {visiblePassages.map((passage) => {
            const isActive = passage.id === activePassageId
            const isHighlighted = highlightedPassageIds.has(passage.id)
            const comments = commentsByPassage[passage.id] ?? []
            const book = getPassageBook(passage)
            const translationProfile = getChineseTranslation(book.id)
            const closeReadingNotes = closeReadings[passage.id] ?? passage.closeReading ?? []
            const furtherReadingNotes = furtherReadings[passage.id] ?? passage.furtherReading ?? []
            return (
              <article
                className={[
                  'passage-card',
                  isActive ? 'active' : '',
                  isHighlighted ? 'highlighted' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                id={passage.id}
                key={passage.id}
              >
                <div className="passage-meta">
                  <span>{book.title}</span>
                  <span>{passage.chapter}</span>
                  <span>{passage.theme}</span>
                </div>
                <h2>{passage.title}</h2>
                <p className="source-line">
                  {passage.originalRef} ·{' '}
                  <a href={passage.sourceUrl} rel="noreferrer" target="_blank">
                    {passage.source}
                  </a>
                </p>
                <p className="translation">{passage.translation}</p>
                <section className="edition-strip" aria-label={`${book.title} 中文译本参照`}>
                  <span>中文译本参照</span>
                  <strong>{translationProfile.primary}</strong>
                  <p>{translationProfile.siteUse}</p>
                </section>
                {passage.translationLayers?.length ? (
                  <section className="translation-layers" aria-label={`${passage.title} 译本层次`}>
                    <div className="translation-layer-heading">
                      <span>译本层次</span>
                      <strong>{passage.translationLayers.length} 个版本判断</strong>
                    </div>
                    <div className="translation-layer-list">
                      {passage.translationLayers.map((layer) => (
                        <article className="translation-layer" key={layer.title}>
                          <h3>{layer.title}</h3>
                          <p>{layer.body}</p>
                          {layer.sourceNote ? <small>{layer.sourceNote}</small> : null}
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}
                <div className="guide-block">
                  <strong>导读</strong>
                  <p>{passage.guide}</p>
                </div>
                {closeReadingNotes.length > 0 ? (
                  <section className="close-reading" aria-label={`${passage.title} 细读`}>
                    <div className="close-reading-heading">
                      <span>细读</span>
                      <strong>{closeReadingNotes.length} 个阅读切面</strong>
                    </div>
                    <div className="close-reading-list">
                      {closeReadingNotes.map((note, noteIndex) => (
                        <article className="close-reading-item" key={note.title}>
                          <span>{String(noteIndex + 1).padStart(2, '0')}</span>
                          <div>
                            <h3>{note.title}</h3>
                            <p>{note.body}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}
                {furtherReadingNotes.length > 0 ? (
                  <section className="further-reading" aria-label={`${passage.title} 进一步细读`}>
                    <div className="further-reading-heading">
                      <span>进一步细读</span>
                      <strong>{furtherReadingNotes.length} 个深层问题</strong>
                    </div>
                    <div className="further-reading-list">
                      {furtherReadingNotes.map((note) => (
                        <article className="further-reading-item" key={note.title}>
                          <h3>{note.title}</h3>
                          <p>{note.body}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}
                <div className="question-block">
                  {passage.questions.map((question) => (
                    <p key={question}>{question}</p>
                  ))}
                </div>
                <div className="key-terms" aria-label="关键词">
                  {passage.keyTerms.map((term) => (
                    <span key={term}>{term}</span>
                  ))}
                </div>
                <div className="passage-actions">
                  <button
                    className={isHighlighted ? 'icon-button selected' : 'icon-button'}
                    onClick={() => toggleHighlight(passage.id)}
                    title={isHighlighted ? '取消高亮' : '高亮这段'}
                    type="button"
                  >
                    {isHighlighted ? <Check aria-hidden="true" /> : <Highlighter aria-hidden="true" />}
                    <span>{isHighlighted ? '已高亮' : '高亮'}</span>
                  </button>
                  <button
                    className="icon-button"
                    onClick={() => selectPassage(passage.id)}
                    title="打开这段评论"
                    type="button"
                  >
                    <MessageCircle aria-hidden="true" />
                    <span>{comments.length} 条评论</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <aside className="discussion-panel" aria-label="评论区">
        <section className="auth-panel">
          <div className="panel-title">
            <UserRound aria-hidden="true" />
            <h2>共读身份</h2>
          </div>
          {user ? (
            <div className="user-line">
              <div>
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
              {user.isAdmin ? (
                <span className="admin-badge">
                  <Shield aria-hidden="true" />
                  管理员
                </span>
              ) : null}
              <button className="icon-only" onClick={handleSignOut} title="退出登录" type="button">
                <LogOut aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="email">邮箱登录</label>
              <div className="email-row">
                <input
                  autoComplete="email"
                  id="email"
                  inputMode="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="reader@example.com"
                  type="email"
                  value={email}
                />
                <button disabled={busy || cooldown > 0} title="发送登录链接" type="submit">
                  <Send aria-hidden="true" />
                  <span>{cooldown > 0 ? `${cooldown}s` : '发送'}</span>
                </button>
              </div>
              {loginMessage ? <p className="muted">{loginMessage}</p> : null}
            </form>
          )}
        </section>

        <section className="comment-section">
          <div className="panel-title">
            <MessageCircle aria-hidden="true" />
            <div>
              <h2>{activePassage.title}</h2>
              <p>{activeComments.length} 条段落评论</p>
            </div>
          </div>

          {error ? <p className="error-line">{error}</p> : null}

          <form className="comment-form" onSubmit={submitComment}>
            <textarea
              disabled={!user || busy}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={user ? '写下你对此段的理解、疑问或反驳。' : '登录后即可参与这段讨论。'}
              value={draft}
            />
            <button disabled={!user || busy || draft.trim().length < 3} type="submit">
              <Send aria-hidden="true" />
              <span>发表评论</span>
            </button>
          </form>

          <div className="comment-list">
            {activeComments.length === 0 ? (
              <p className="empty-state">这段还没有评论。第一条想法通常会改变整段文字的温度。</p>
            ) : (
              activeComments.map((comment) => (
                <article className={comment.hidden ? 'comment-card hidden' : 'comment-card'} key={comment.id}>
                  {comment.hidden ? (
                    <div className="hidden-note">
                      <EyeOff aria-hidden="true" />
                      <span>{comment.hiddenReason ?? '管理员已隐藏这条评论'}</span>
                    </div>
                  ) : null}
                  <header>
                    <div>
                      <strong>{comment.userName}</strong>
                      <span>{formatDate(comment.createdAt)}</span>
                    </div>
                  </header>
                  {editingId === comment.id ? (
                    <div className="edit-box">
                      <textarea
                        onChange={(event) => setEditingBody(event.target.value)}
                        value={editingBody}
                      />
                      <div>
                        <button onClick={() => submitEdit(comment.id)} type="button">
                          保存
                        </button>
                        <button
                          className="ghost-button"
                          onClick={() => setEditingId(null)}
                          type="button"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p>{comment.body}</p>
                  )}
                  <footer>
                    <button
                      className={comment.likedByMe ? 'text-button liked' : 'text-button'}
                      onClick={() => toggleLike(comment.id)}
                      type="button"
                    >
                      <Heart aria-hidden="true" />
                      {comment.likeCount}
                    </button>
                    {user?.id === comment.userId || user?.isAdmin ? (
                      <>
                        <button className="text-button" onClick={() => startEditing(comment)} type="button">
                          <Pencil aria-hidden="true" />
                          编辑
                        </button>
                        <button className="text-button danger" onClick={() => deleteComment(comment.id)} type="button">
                          <Trash2 aria-hidden="true" />
                          删除
                        </button>
                      </>
                    ) : null}
                    {user?.isAdmin ? (
                      comment.hidden ? (
                        <button className="text-button" onClick={() => restoreComment(comment.id)} type="button">
                          <Undo2 aria-hidden="true" />
                          恢复
                        </button>
                      ) : (
                        <button className="text-button" onClick={() => hideComment(comment.id)} type="button">
                          <EyeOff aria-hidden="true" />
                          隐藏
                        </button>
                      )
                    ) : null}
                  </footer>
                </article>
              ))
            )}
          </div>
        </section>
      </aside>
    </main>
  )
}

export default App
