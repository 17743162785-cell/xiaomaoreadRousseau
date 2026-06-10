export type ChineseTranslationProfile = {
  primary: string
  basis: string
  why: string
  alternates: string[]
  siteUse: string
}

const completeWorks =
  '李平沤主持翻译《卢梭全集》，商务印书馆，2012 年版及后续印次'

const completeWorksUse =
  '作为本站覆盖冷门作品、片段、书信、音乐和植物学文本的首要中文参照；正文仍以本站据法文公版译写为主，不大段照录现代译本。'

const completeWorksProfile = (
  volume: string,
  reason: string,
  alternates: string[] = [],
): ChineseTranslationProfile => ({
  primary: `${completeWorks}，${volume}`,
  basis: '全集本',
  why: reason,
  alternates,
  siteUse: completeWorksUse,
})

export const chineseTranslations: Record<string, ChineseTranslationProfile> = {
  'music-signs': completeWorksProfile(
    '第 8 卷相关音乐写作',
    '《新音乐符号方案》没有稳定流通的成熟单行中译，全集本能把它放回卢梭音乐理论脉络中阅读。',
  ),
  'modern-music': completeWorksProfile(
    '第 8 卷相关音乐写作',
    '早期音乐论文宜和卢梭的音乐符号、法国音乐论争、音乐词典合读，全集本的连续性最好。',
  ),
  'chemistry-institutions': completeWorksProfile(
    '全集或研究文献中的早期科学手稿参照',
    '《化学制度》中文流通文本稀少，本站暂以法文公版和研究性说明为准，只把它作为思想版图入口。',
  ),
  'sciences-arts': completeWorksProfile(
    '第 4 卷《论科学与艺术的复兴是否有助于使风俗日趋淳朴》',
    '李平沤全集本题名更贴近原题的问题式结构，适合和《不平等论》《爱弥儿》组成卢梭“三部主要著作”的阅读线。',
    ['可兼看商务汉译名著系统中的旧译或论文选本，用于比较“科学与艺术/风俗”术语。'],
  ),
  narcissus: completeWorksProfile(
    '第 9 卷相关戏剧与文学作品',
    '这部作品的序言比剧情更重要，全集本便于同卢梭的文学自辩和剧场问题放在一起读。',
  ),
  'village-soothsayer': completeWorksProfile(
    '第 8 卷相关音乐与剧作',
    '《乡村占卜师》中文单行本不常见，全集本能同时保留音乐写作和舞台作品的关系。',
  ),
  'french-music-letter': completeWorksProfile(
    '第 8 卷相关音乐论争',
    '《论法国音乐的信》应和《音乐词典》《论语言的起源》互读，全集本有利于统一音乐术语。',
  ),
  inequality: {
    primary: '李常山译、东林校《论人类不平等的起源和基础》，商务印书馆',
    basis: '经典单行本',
    why: '这是中文学界长期引用的经典译本，题名和术语已进入大量研究文献，适合作为本站讨论“不平等论”的首选中文参照。',
    alternates: [
      '李平沤译《论人与人之间不平等的起因和基础》，商务印书馆，可用于核对法文题名和新版全集体系。',
    ],
    siteUse:
      '站内术语以李常山译本的通行表达为优先参照，遇到“起源/起因”“不平等/人与人之间不平等”等关键处，会提示版本差异。',
  },
  'political-economy': {
    primary: '李平沤译《政治经济学》，商务印书馆',
    basis: '专题单行本/全集本',
    why: '该译本对应《百科全书》条目，适合把主权、政府、公共财政、公民教育等术语与《社会契约论》贯通。',
    alternates: [`${completeWorks}，第 5 卷《政治经济学》`],
    siteUse: '站内采用“政治经济学/政治经济论”并列提示，正文以李平沤译本的术语为主要校准。',
  },
  'peace-project': completeWorksProfile(
    '第 5 卷或相关政治书信卷',
    '圣皮埃尔永久和平方案的评判中文单行本少见，全集本更适合放在卢梭国际政治和国家间关系中阅读。',
  ),
  'providence-letter': completeWorksProfile(
    '宗教、哲学和书信相关卷',
    '《致伏尔泰论天意书》需要放在里斯本地震、伏尔泰争论和自然宗教问题中读，全集本能提供较完整语境。',
  ),
  'd-alembert': completeWorksProfile(
    '第 5 卷《致达朗贝尔的信》',
    '这封信在美学、政治和日内瓦风俗之间移动，全集本能和《政治经济学》《山中来信》形成同一共和国问题组。',
  ),
  'moral-letters': completeWorksProfile(
    '第 6-7 卷相关伦理和教育书信',
    '《道德书简》适合作为《爱弥儿》之外的道德教育补充，全集本覆盖面更完整。',
  ),
  'new-heloise': completeWorksProfile(
    '第 8-9 卷《新爱洛伊丝》',
    '这部小说体量大、书信结构复杂，全集本能保持上下卷完整性。文学阅读可兼看伊信、陈筱卿等译本比较文风。',
    ['伊信译本、陈筱卿译本可作文学阅读参照，但本站优先使用全集本做术语和情节核对。'],
  ),
  'malesherbes-letters': completeWorksProfile(
    '自传和书信相关卷',
    '《致马勒泽布书信》是《忏悔录》的前奏，全集本最适合作为自传性文本链条的一部分。',
  ),
  'social-contract': {
    primary: '何兆武译《社会契约论》，商务印书馆',
    basis: '经典单行本',
    why: '何兆武译本是中文世界最通行的《社会契约论》译本之一，术语稳定、引用率高，适合公共阅读和学术讨论的共同入口。',
    alternates: [
      '李平沤译《社会契约论》，商务印书馆，可用于按法文版本重新核对术语和句法。',
      `${completeWorks}，第 4 卷《社会契约论》`,
    ],
    siteUse:
      '站内政治术语优先尊重何兆武译本的通行表达，如“公意”“主权”“立法者”；细读时同时提示李平沤译本可供校核。',
  },
  emile: {
    primary: '李平沤译《爱弥儿：论教育》，商务印书馆',
    basis: '经典单行本',
    why: '李平沤译本长期流通，且与商务《卢梭全集》体系相衔接，是中文阅读《爱弥儿》的首选版本。',
    alternates: [`${completeWorks}，第 6-7 卷《爱弥儿》`],
    siteUse: '站内教育术语以李平沤译本为主要参照，尤其注意“自然教育”“消极教育”“良心”等关键词。',
  },
  'emile-sophie': completeWorksProfile(
    '第 7 卷相关续篇《爱弥儿与苏菲，或孤独者》',
    '未完成续篇不宜孤立阅读，全集本能把它放在《爱弥儿》之后，显示教育理想进入现实婚姻后的破裂。',
  ),
  'beaumont-letter': completeWorksProfile(
    '第 7 卷或相关宗教辩护文本',
    '《致博蒙大主教书》应与《爱弥儿》的“萨瓦副主教信仰自白”互读，全集本便于核对宗教和教育语境。',
  ),
  'mountain-letters': {
    primary: '李平沤译《山中来信》，商务印书馆',
    basis: '专题单行本/全集本',
    why: '该文本直接回应日内瓦对卢梭的审查和谴责，李平沤译本便于与商务全集中的政治书信和宗教辩护贯通。',
    alternates: [`${completeWorks}，第 5 卷《山中来信》`],
    siteUse: '站内统一使用“山中来信/山中书简”并列提示，避免读者因译名差异误以为是不同作品。',
  },
  'war-state': completeWorksProfile(
    '第 4-5 卷相关政治片段',
    '战争片段中文单行本少，全集本更适合和《社会契约论》《永久和平方案评判》组成国家间政治问题组。',
  ),
  corsica: completeWorksProfile(
    '第 5 卷相关政治方案',
    '《科西嘉宪法草案》需要放入小共和国、民族风俗和现实政治委托中读，全集本覆盖最稳妥。',
  ),
  'music-dictionary': completeWorksProfile(
    '第 8 卷或音乐相关卷《音乐词典》',
    '《音乐词典》术语密集，中文单行本少见，全集本和音乐论文合读最适合本站做思想版图。',
  ),
  poland: completeWorksProfile(
    '第 5 卷相关政治方案《波兰政府论》',
    '《波兰政府论》讨论大国、民族风俗和制度渐进，全集本能和《科西嘉宪法草案》互相校读。',
  ),
  'botany-letters': completeWorksProfile(
    '第 3 卷或相关晚年自然研究文本',
    '植物学书信不宜只作为逸事，全集本能把它放入卢梭晚年自我安顿和自然观察中阅读。',
  ),
  languages: completeWorksProfile(
    '第 8 卷《论语言的起源》',
    '《论语言的起源》与音乐、激情、气候和社会形成密切相关，全集本便于和音乐论争合读。',
    ['可兼看单行本《论语言的起源》译本，用于比较“激情/情感”“旋律/和声”等术语。'],
  ),
  'botany-dictionary': completeWorksProfile(
    '第 3 卷或相关植物学片段',
    '植物词典片段中文流通不广，全集本或本站据法文译写更适合作为初版入口。',
  ),
  confessions: {
    primary: '范希衡等译《忏悔录》，人民文学出版社',
    basis: '文学经典译本',
    why: '范希衡译本在中文文学阅读中影响很大，叙述流畅，适合作为《忏悔录》的文学性首选参照。',
    alternates: [
      `${completeWorks}，第 1-2 卷《忏悔录》`,
      '李平沤译本可用于和全集体系中的自传三部曲互校。',
    ],
    siteUse:
      '站内叙事语气会参考范希衡译本的文学流畅性，但涉及自我辩护、记忆和羞耻结构时，会回到法文公版核对。',
  },
  dialogues: {
    primary: '李平沤译《卢梭评判让-雅克：对话录》，商务印书馆',
    basis: '专题单行本/全集本',
    why: '这是理解晚年卢梭自我辩护结构的关键作品，商务译本便于和《忏悔录》《遐想》并读。',
    alternates: [`${completeWorks}，第 3 卷或相关自传三部曲文本`],
    siteUse: '站内统一使用“卢梭评判让-雅克：对话录”，并提示“对话录”是晚年自我审判结构。',
  },
  reveries: {
    primary: '袁筱一译《一个孤独漫步者的遐想》，商务印书馆',
    basis: '现代文学译本',
    why: '袁筱一译本适合当代中文读者进入晚年卢梭的散文节奏；徐继曾译《漫步遐想录》则是重要经典参照。',
    alternates: [
      '徐继曾译《漫步遐想录》，人民文学出版社',
      `${completeWorks}，第 3 卷《一个孤独的散步者的梦及其他》`,
    ],
    siteUse: '站内晚年散文语气以袁筱一译本为主要参照，同时在标题处保留“遐想/漫步/散步者的梦”的译名差异。',
  },
  'tacitus-translation': completeWorksProfile(
    '全集相关译作卷或本站据法文公版译写',
    '卢梭的古典译作中文流通有限，本站只把它作为古典共和国语汇的侧面入口，不做大段现代译本引用。',
  ),
  'seneca-translation': completeWorksProfile(
    '全集相关译作卷或本站据法文公版译写',
    '这类古典译作更适合用于呈现卢梭的文学趣味和古典训练，中文版本以全集或本站译写为宜。',
  ),
  pygmalion: completeWorksProfile(
    '第 8-9 卷相关戏剧作品',
    '《皮格马利翁》中文单行本少见，全集本便于和卢梭的戏剧、音乐和自恋主题互读。',
  ),
  levite: completeWorksProfile(
    '第 9 卷相关散文叙事',
    '《以法莲的利未人》属于边缘但有代表性的文学文本，全集本比零散节选更可靠。',
  ),
}

export const fallbackChineseTranslation: ChineseTranslationProfile = {
  primary: completeWorks,
  basis: '全集本',
  why: '本站优先选择能够覆盖卢梭全体作品的中文版本，以便保持术语、译名和作品位置的一致性。',
  alternates: [],
  siteUse: completeWorksUse,
}

export const getChineseTranslation = (bookId?: string) =>
  (bookId ? chineseTranslations[bookId] : undefined) ?? fallbackChineseTranslation
