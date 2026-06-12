import type { Passage } from '../types'
import { getBookOriginalExcerpt } from './bookOriginalExcerpts'
import { books } from './books'
import { getChineseTranslation } from './chineseTranslations'

const authorSourceUrl = 'https://fr.wikisource.org/wiki/Auteur:Jean-Jacques_Rousseau'

export const bookOverviewPassages: Passage[] = books.map((book) => {
  const excerpt = getBookOriginalExcerpt(book.id)
  const translationProfile = getChineseTranslation(book.id)
  const literaryNotes = [
    ...(excerpt.literarySummary
      ? [
          {
            title: '长段落概括',
            body: excerpt.literarySummary,
          },
        ]
      : []),
    ...(excerpt.philosophicalReflection
      ? [
          {
            title: '哲学意义反思',
            body: excerpt.philosophicalReflection,
          },
        ]
      : []),
  ]

  return {
    id: `book-${book.id}-overview`,
    bookId: book.id,
    bookTitle: book.title,
    chapter: '作品概貌',
    title: `${book.title}的原文入口`,
    theme: book.axis,
    source: `Jean-Jacques Rousseau, ${book.title.replace(/[《》]/g, '')}, ${book.year}`,
    sourceUrl: book.sourceUrl ?? authorSourceUrl,
    originalRef: excerpt.originalRef,
    keyTerms: [book.axis, book.kind, book.year],
    translation: excerpt.translation,
    translationLayers: [
      {
        title: '原文译引说明',
        body: excerpt.sourceNote,
        sourceNote:
          '为避免大段照录现代中文译本，本站正文采用据法文公版译写、释译和概括式译引；术语参照下列中文译本。',
      },
      {
        title: '作品概貌',
        body: book.overview,
      },
      {
        title: '首选中文译本',
        body: translationProfile.primary,
        sourceNote: translationProfile.basis,
      },
      {
        title: '为什么选这个版本',
        body: translationProfile.why,
      },
      {
        title: '本站正文处理',
        body: translationProfile.siteUse,
        sourceNote:
          '现代中文译本通常仍受译者版权保护；本站可以短引并标注来源，但正文长段采用据法文公版重新译写和导读。',
      },
    ],
    guide: `先从这段原文译引进入${book.title}：不要只把它当作“${book.axis}”的标签，而要看卢梭怎样在具体句子里安排自然、社会、真实和自由。作品概貌可以帮助定位，但真正的细读必须从原文的措辞、比喻、叙事姿态和论证转折开始。`,
    closeReading: [
      ...excerpt.closeReading,
      ...book.annotations.map((annotation) => ({
        title: `轶事注释：${annotation.title}`,
        body: annotation.body,
      })),
    ],
    furtherReading: [
      ...literaryNotes,
      {
        title: '如何继续细读',
        body: `读${book.title}时，可以先问这段原文处理的是制度、情感、语言、教育还是自我辩护；再看卢梭是否把问题归结为某种“自然”与“社会”的张力。这样能够避免只按出版年份排队，而能真正看见思想结构。`,
      },
      {
        title: '和真实生平的关系',
        body: `这部作品也应和卢梭的处境一起读：他的日内瓦身份、巴黎声望、与启蒙友人的分裂、流亡经验、晚年的孤独和植物学爱好，都会改变文本的语气。作品不是孤立观念，而是一个敏感的人在具体生活压力中的回应。`,
      },
    ],
    questions: [
      `这段原文译引中，最能显示${book.title}问题意识的是哪一个词、意象或转折？`,
      `${book.title}中的“自然”是一个哲学原则、审美理想、生活方式，还是自我安慰？`,
      `如果把这部作品和《社会契约论》并读，它是在补充政治自由，还是在暴露政治理论无法完全处理的人生问题？`,
    ],
  }
})
