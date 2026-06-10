import type { Passage } from '../types'
import { books } from './books'
import { getChineseTranslation } from './chineseTranslations'

const authorSourceUrl = 'https://fr.wikisource.org/wiki/Auteur:Jean-Jacques_Rousseau'

export const bookOverviewPassages: Passage[] = books.map((book) => ({
  id: `book-${book.id}-overview`,
  bookId: book.id,
  bookTitle: book.title,
  chapter: '作品概貌',
  title: `${book.title}在卢梭思想中的位置`,
  theme: book.axis,
  source: `Jean-Jacques Rousseau, ${book.title.replace(/[《》]/g, '')}, ${book.year}`,
  sourceUrl: book.sourceUrl ?? authorSourceUrl,
  originalRef: `${book.kind} · ${book.year}`,
  keyTerms: [book.axis, book.kind, book.year],
  translation: book.overview,
  translationLayers: [
    {
      title: '首选中文译本',
      body: getChineseTranslation(book.id).primary,
      sourceNote: getChineseTranslation(book.id).basis,
    },
    {
      title: '为什么选这个版本',
      body: getChineseTranslation(book.id).why,
    },
    {
      title: '本站正文处理',
      body: getChineseTranslation(book.id).siteUse,
      sourceNote:
        '现代中文译本通常仍受译者版权保护；本站可以短引并标注来源，但正文长段采用据法文公版重新译写和导读。',
    },
  ],
  guide: `先把${book.title}放在“${book.axis}”这条线上阅读：它不一定都是卢梭最有名的体系著作，却能帮助我们看见真实卢梭的多重身份。这里的阅读目标不是把卢梭简化成革命口号，而是观察他如何在音乐、剧场、教育、政治、宗教、自传和植物学之间不断调整同一个问题：人在社会中怎样保持真实、自由和可承受的生活。`,
  closeReading: book.annotations.map((annotation) => ({
    title: annotation.title,
    body: annotation.body,
  })),
  furtherReading: [
    {
      title: '如何继续细读',
      body: `读${book.title}时，可以先问它处理的是制度、情感、语言、教育还是自我辩护；再看卢梭是否把问题归结为某种“自然”与“社会”的张力。这样能够避免只按出版年份排队，而能真正看见思想结构。`,
    },
    {
      title: '和真实生平的关系',
      body: `这部作品也应和卢梭的处境一起读：他的日内瓦身份、巴黎声望、与启蒙友人的分裂、流亡经验、晚年的孤独和植物学爱好，都会改变文本的语气。作品不是孤立观念，而是一个敏感的人在具体生活压力中的回应。`,
    },
  ],
  questions: [
    `${book.title}中的“自然”是一个哲学原则、审美理想、生活方式，还是自我安慰？`,
    `如果把这部作品和《社会契约论》并读，它是在补充政治自由，还是在暴露政治理论无法完全处理的人生问题？`,
  ],
}))
