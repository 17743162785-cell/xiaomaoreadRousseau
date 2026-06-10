import type { Passage } from '../types'

export type RousseauBook = {
  id: string
  title: string
  shortTitle: string
  year: string
  axis: string
  kind: string
  overview: string
  sourceUrl?: string
  annotations: {
    title: string
    body: string
  }[]
}

const authorSourceUrl = 'https://fr.wikisource.org/wiki/Auteur:Jean-Jacques_Rousseau'

export const books: RousseauBook[] = [
  {
    id: 'music-signs',
    title: '《新音乐符号方案》',
    shortTitle: '音乐符号',
    year: '1742',
    axis: '音乐与秩序',
    kind: '音乐方案',
    sourceUrl: authorSourceUrl,
    overview:
      '这是卢梭早年带到巴黎的音乐改革方案，试图用更简洁的数字化标记替代繁复谱法。它让我们先看到一个不只是政治写作者的卢梭：他把清晰、自然、可学性和公共传播的问题先放在音乐技术里处理。',
    annotations: [
      {
        title: '带着方案进巴黎',
        body: '卢梭早年的巴黎野心首先不是革命，而是音乐。他想让复杂的符号变得更容易学，这种“把人为习俗还原到自然清晰”的冲动，后来会反复出现在教育、语言和政治文本里。',
      },
    ],
  },
  {
    id: 'modern-music',
    title: '《现代音乐论文》',
    shortTitle: '现代音乐',
    year: '1743',
    axis: '声音与方法',
    kind: '音乐论文',
    sourceUrl: 'https://fr.wikisource.org/wiki/Dissertation_sur_la_musique_moderne',
    overview:
      '这部早期论文继续讨论谱法、旋律和音乐理解。它未必是卢梭最成熟的作品，却能补出他的思想底色：他对抽象规则始终怀疑，更重视能否使普通人真正听见、理解并参与。',
    annotations: [
      {
        title: '音乐不是边角料',
        body: '读卢梭时如果只读政治，会错过他关于声音、节奏、情感传递的长期兴趣。音乐给了他一套理解语言、激情和公共感染力的模型。',
      },
    ],
  },
  {
    id: 'chemistry-institutions',
    title: '《化学制度》',
    shortTitle: '化学',
    year: '约 1747',
    axis: '知识与实验',
    kind: '未刊科学手稿',
    sourceUrl: authorSourceUrl,
    overview:
      '这部早期科学笔记常被政治哲学叙述忽略。它提醒我们，卢梭并非天生站在“反科学”的姿态里；他熟悉启蒙知识环境，只是在成名后越来越追问知识怎样进入名望、权力和道德生活。',
    annotations: [
      {
        title: '反科学的误会',
        body: '卢梭批判科学与艺术时，并不是没接触过知识实践。更准确地说，他批判的是知识在社会竞争中可能造成的虚荣、依附和道德软弱。',
      },
    ],
  },
  {
    id: 'sciences-arts',
    title: '《论科学与艺术》',
    shortTitle: '科学艺术',
    year: '1750',
    axis: '文明批判',
    kind: '第戎获奖论文',
    sourceUrl: 'https://fr.wikisource.org/wiki/Discours_sur_les_sciences_et_les_arts',
    overview:
      '卢梭以这篇论文突然成名。他反问科学与艺术是否真的净化风俗，并提出贯穿一生的问题：文明进步是否也会制造虚荣、依附和道德软弱。',
    annotations: [
      {
        title: '第戎路上的“顿悟”',
        body: '卢梭后来回忆，自己在去探望狱中狄德罗的路上读到第戎学院征文题目，受到强烈震动。这段回忆本身也带有自我神话色彩，很适合做成可讨论注释。',
      },
      {
        title: '不是简单反知识',
        body: '他反对的不是学习和技艺本身，而是知识被宫廷、名望和虚荣体系收编后，对德性的腐蚀。',
      },
    ],
  },
  {
    id: 'narcissus',
    title: '《那耳喀索斯，或自恋者》',
    shortTitle: '那耳喀索斯',
    year: '1752',
    axis: '自恋与表演',
    kind: '喜剧与序言',
    sourceUrl: 'https://fr.wikisource.org/wiki/Narcisse_ou_l%E2%80%99Amant_de_lui-m%C3%AAme',
    overview:
      '这部戏本身不如序言重要。卢梭在序言中继续辩护自己的文明批判，把剧场、表演和自我爱恋放到一起思考。',
    annotations: [
      {
        title: '题名很“卢梭”',
        body: 'Narcisse 本身就是自恋神话。它和卢梭终生关心的“被看见”“自我表演”“真实与伪装”相互呼应。',
      },
    ],
  },
  {
    id: 'village-soothsayer',
    title: '《乡村占卜师》',
    shortTitle: '占卜师',
    year: '1752',
    axis: '音乐与田园',
    kind: '歌剧',
    sourceUrl: 'https://fr.wikisource.org/wiki/Le_Devin_du_village',
    overview:
      '这部小歌剧曾在宫廷演出并大受欢迎。它显示卢梭不是单一的反宫廷思想家，也曾在宫廷趣味、田园想象和公众声望之间移动。',
    annotations: [
      {
        title: '拒绝养老金的传说',
        body: '歌剧成功后，国王据说愿意给予年金，卢梭没有接受。这个故事常被讲成独立人格的证明，也能读出他与荣誉体系的复杂关系。',
      },
    ],
  },
  {
    id: 'french-music-letter',
    title: '《论法国音乐的信》',
    shortTitle: '法国音乐信',
    year: '1753',
    axis: '音乐论争',
    kind: '论战书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettre_sur_la_musique_fran%C3%A7aise',
    overview:
      '这封信卷入“丑角之争”，卢梭支持意大利音乐的自然旋律，猛烈批评法国歌唱传统。它把审美判断、民族趣味和语言音调纠缠在一起。',
    annotations: [
      {
        title: '和拉莫的阴影',
        body: '卢梭的音乐论争常和拉莫等人构成对照：他不只是在争哪种音乐好听，也是在争音乐应当服从理性和声，还是服从旋律、声音和激情。',
      },
    ],
  },
  {
    id: 'inequality',
    title: '《论人类不平等的起源和基础》',
    shortTitle: '不平等',
    year: '1755',
    axis: '自然与社会',
    kind: '第二篇论文',
    sourceUrl:
      'https://fr.wikisource.org/wiki/Discours_sur_l%E2%80%99origine_et_les_fondements_de_l%E2%80%99in%C3%A9galit%C3%A9_parmi_les_hommes',
    overview:
      '这部作品追问人怎样从相对独立的自然状态，走向比较、财产、支配和制度化不平等。它是理解《社会契约论》的阴影前史。',
    annotations: [
      {
        title: '“高贵野蛮人”不是原文口号',
        body: '卢梭常被简化为赞美“高贵野蛮人”，但他的分析更复杂：自然人并不是圣人，而是欲望较少、比较较少、支配关系尚未制度化的人。',
      },
      {
        title: '献给日内瓦',
        body: '卢梭把论文献给日内瓦共和国，这暴露了他的政治想象：小共和国、公共风俗和公民身份始终牵动他的思想。',
      },
    ],
  },
  {
    id: 'political-economy',
    title: '《政治经济论》',
    shortTitle: '政治经济',
    year: '1755',
    axis: '公共财政',
    kind: '百科全书条目',
    sourceUrl: authorSourceUrl,
    overview:
      '原为《百科全书》条目，讨论家庭管理和国家治理的差别、公共利益、税收与公民教育。它像《社会契约论》的前厅。',
    annotations: [
      {
        title: '从百科全书走向决裂',
        body: '卢梭曾参与百科全书事业，但后来与百科全书派渐行渐远。这种关系变化能帮助理解他和启蒙运动的复杂距离。',
      },
    ],
  },
  {
    id: 'peace-project',
    title: '《圣皮埃尔永久和平方案评判》',
    shortTitle: '永久和平',
    year: '1756',
    axis: '国际秩序',
    kind: '政治评判',
    sourceUrl:
      'https://fr.wikisource.org/wiki/Collection_compl%C3%A8te_des_%C5%93uvres_de_J._J._Rousseau',
    overview:
      '卢梭整理并评判圣皮埃尔神父关于欧洲永久和平的方案。他既被和平设想吸引，又警惕君主利益、国家竞争和制度执行之间的落差。',
    annotations: [
      {
        title: '不是抽象和平主义',
        body: '卢梭关心和平，但他并不相信只靠善意条约就能消除国家间竞争。这里可以看到他对制度条件的现实感。',
      },
    ],
  },
  {
    id: 'providence-letter',
    title: '《致伏尔泰论天意书》',
    shortTitle: '致伏尔泰',
    year: '1756',
    axis: '苦难与信仰',
    kind: '哲学书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettre_%C3%A0_Voltaire_sur_la_Providence',
    overview:
      '这封信回应里斯本大地震后的信仰危机。卢梭不同意用悲观主义吞没人的自由与责任，他把自然灾害、城市生活、天意和道德判断放在紧张关系里讨论。',
    annotations: [
      {
        title: '和伏尔泰的分歧',
        body: '卢梭与伏尔泰并非简单的“启蒙同盟”。在苦难、宗教和人类处境问题上，他们的距离非常大，后来也会变成公开敌意的一部分。',
      },
    ],
  },
  {
    id: 'd-alembert',
    title: '《致达朗贝尔论剧院的信》',
    shortTitle: '剧院信',
    year: '1758',
    axis: '剧场与风俗',
    kind: '公开信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettre_%C3%A0_d%E2%80%99Alembert',
    overview:
      '卢梭反对在日内瓦建立剧院，认为剧场会改变小共和国的风俗和公共情感。它把艺术批判落到具体城市生活中。',
    annotations: [
      {
        title: '不是讨厌戏剧那么简单',
        body: '卢梭自己写过戏，也写歌剧。他反对的是某种剧场制度如何改变公民风俗，而不是所有表演艺术。',
      },
    ],
  },
  {
    id: 'moral-letters',
    title: '《道德书简》',
    shortTitle: '道德书简',
    year: '1758',
    axis: '良心与德性',
    kind: '书信片段',
    sourceUrl: 'https://fr.wikisource.org/wiki/Collection_compl%C3%A8te_des_%C5%93uvres_de_J._J._Rousseau',
    overview:
      '这些书信围绕良心、幸福、德性和自我教育展开。它们不像《爱弥儿》那样构成宏大教育小说，却能看见卢梭把道德生活写成日常修炼。',
    annotations: [
      {
        title: '思想的私人语气',
        body: '卢梭的很多强思想不是只在体系著作里出现，也藏在劝告、辩护、安慰和自我解释的书信语气里。',
      },
    ],
  },
  {
    id: 'new-heloise',
    title: '《新爱洛伊丝》',
    shortTitle: '爱洛伊丝',
    year: '1761',
    axis: '情感与德性',
    kind: '书信体小说',
    sourceUrl: 'https://fr.wikisource.org/wiki/Julie_ou_la_Nouvelle_H%C3%A9lo%C3%AFse',
    overview:
      '这部畅销小说把爱情、德性、家庭共同体、自然风景和现代情感教育连在一起。它让卢梭不只是政治哲学家，也成为情感现代性的塑造者。',
    annotations: [
      {
        title: '畅销到惊人',
        body: '《新爱洛伊丝》在十八世纪欧洲读者中引起强烈情感反应，许多人不是把它当理论读，而是当一场道德与爱情的亲身经历。',
      },
      {
        title: '阿尔卑斯风景的入口',
        body: '小说对瑞士湖山景色的描写使自然不只是背景，而成为情感和道德秩序的组成部分。网站背景可以从这里取“湖水、山色、手稿纸”的气质。',
      },
    ],
  },
  {
    id: 'malesherbes-letters',
    title: '《致马勒泽布书信》',
    shortTitle: '马勒泽布信',
    year: '1762',
    axis: '自我说明',
    kind: '自传性书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettres_%C3%A0_Malesherbes',
    overview:
      '这组书信写于危机边缘，卢梭向马勒泽布解释自己的性格、孤独和写作冲动。它像《忏悔录》的前奏，把思想家的公共形象拉回一个紧张、敏感、需要辩解的人。',
    annotations: [
      {
        title: '自传冲动的预告',
        body: '卢梭后来在《忏悔录》中放大的自我展示，在这里已经出现：他想被理解，又怀疑自己永远会被误解。',
      },
    ],
  },
  {
    id: 'social-contract',
    title: '《社会契约论》',
    shortTitle: '契约',
    year: '1762',
    axis: '政治自由',
    kind: '政治哲学',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    overview:
      '这部作品试图回答正当政治秩序如何可能：人能否在共同体中服从法律而仍然自由。公意、主权、法律与政府的区分都从这里展开。',
    annotations: [
      {
        title: '和《爱弥儿》同年出版',
        body: '1762 年，《社会契约论》和《爱弥儿》相继出版，政治自由和教育自由在同一年爆发，也给卢梭带来审查、焚书和逃亡。',
      },
      {
        title: '不是行动手册',
        body: '把它只读成革命动员会失去卢梭的真实复杂性。它更像是一部关于合法性、自由与小共和国条件的严密思想实验。',
      },
    ],
  },
  {
    id: 'emile',
    title: '《爱弥儿》',
    shortTitle: '爱弥儿',
    year: '1762',
    axis: '教育与人格',
    kind: '教育哲学小说',
    sourceUrl: 'https://fr.wikisource.org/wiki/%C3%89mile%2C_ou_De_l%E2%80%99%C3%A9ducation',
    overview:
      '《爱弥儿》从儿童成长讨论自由人格怎样形成。自然教育、消极教育、经验学习、良心和性别限制都在这里集中出现。',
    annotations: [
      {
        title: '被焚与逃亡',
        body: '《爱弥儿》出版后，巴黎和日内瓦都对卢梭采取行动，尤其是“萨瓦副主教信仰自白”触犯宗教权威。',
      },
      {
        title: '思想与人生的刺痛处',
        body: '卢梭写教育名著，却把自己的孩子送入弃婴院。这是理解卢梭时不能绕开的真实矛盾。',
      },
    ],
  },
  {
    id: 'emile-sophie',
    title: '《爱弥儿与苏菲，或孤独者》',
    shortTitle: '爱与苏菲',
    year: '1762 后',
    axis: '教育的破裂',
    kind: '未完成续篇',
    sourceUrl: 'https://fr.wikisource.org/wiki/%C3%89mile_et_Sophie',
    overview:
      '这部未完成续篇把《爱弥儿》的教育理想带入婚姻、背叛和现实挫败。它使“自然教育”不再停留在漂亮模型里，而要面对成人生活的伤害。',
    annotations: [
      {
        title: '理想教育的余震',
        body: '续篇的阴郁气氛提示我们：《爱弥儿》不是天真乐观的教育童话，卢梭很清楚社会生活会重新侵入受教育者。',
      },
    ],
  },
  {
    id: 'beaumont-letter',
    title: '《致博蒙大主教书》',
    shortTitle: '博蒙书',
    year: '1763',
    axis: '宗教辩护',
    kind: '辩护书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettre_%C3%A0_Christophe_de_Beaumont',
    overview:
      '卢梭回应巴黎大主教对《爱弥儿》的谴责，辩护自然宗教、良心和教育计划。它是理解卢梭宗教思想与公共审判关系的重要文本。',
    annotations: [
      {
        title: '审判中的信仰',
        body: '卢梭既不是无神论者，也不是教会意义上的顺民。他常把良心视为内在法庭，这使他同时得罪启蒙无神论者和教会权威。',
      },
    ],
  },
  {
    id: 'mountain-letters',
    title: '《山中书简》',
    shortTitle: '山中书简',
    year: '1764',
    axis: '日内瓦争议',
    kind: '政治辩护书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettres_%C3%A9crites_de_la_montagne',
    overview:
      '卢梭回应日内瓦对他的谴责，讨论宗教宽容、公民权、审查与共和国制度。它是卢梭和故乡政治关系破裂后的重要文本。',
    annotations: [
      {
        title: '“山中”也是位置声明',
        body: '书信姿态像一个退到边缘的人重新向共和国说话：既是辩护，也是对日内瓦政治身份的最后争夺。',
      },
    ],
  },
  {
    id: 'war-state',
    title: '《战争与战争状态》',
    shortTitle: '战争状态',
    year: '1756-1758',
    axis: '国家间关系',
    kind: '政治片段',
    sourceUrl: 'https://fr.wikisource.org/wiki/Collection_compl%C3%A8te_des_%C5%93uvres_de_J._J._Rousseau',
    overview:
      '这些片段讨论战争并非自然人之间的关系，而更多发生在政治体之间。它能补足《社会契约论》较少展开的国家间维度。',
    annotations: [
      {
        title: '战争不是人的自然本性',
        body: '卢梭常把自然人写得相对孤独、欲望有限。因此战争问题不能直接归结为个人天性，而要看政治体、财产和制度竞争。',
      },
    ],
  },
  {
    id: 'corsica',
    title: '《科西嘉宪法草案》',
    shortTitle: '科西嘉',
    year: '1765',
    axis: '小共和国实验',
    kind: '宪法草案',
    sourceUrl: 'https://fr.wikisource.org/wiki/Projet_de_Constitution_pour_la_Corse',
    overview:
      '卢梭为科西嘉构想政治制度，强调农业、朴素风俗、小规模自治和公民德性。它显示他不是只写抽象契约，也尝试面对具体民族。',
    annotations: [
      {
        title: '现实政治委托',
        body: '科西嘉领袖曾邀请卢梭提供制度建议。这个未完成草案让我们看到他如何把小共和国理想转译到现实政治。',
      },
    ],
  },
  {
    id: 'music-dictionary',
    title: '《音乐词典》',
    shortTitle: '音乐词典',
    year: '1767',
    axis: '音乐与语言',
    kind: '词典',
    sourceUrl: authorSourceUrl,
    overview:
      '卢梭不仅写政治和教育，也长期研究音乐。《音乐词典》保存了他的音乐理论、审美判断和与法国音乐传统的争论。',
    annotations: [
      {
        title: '卢梭也是作曲者',
        body: '他写过歌剧《乡村占卜师》，并卷入法国音乐与意大利音乐之争。音乐不是他思想的边角料。',
      },
    ],
  },
  {
    id: 'poland',
    title: '《波兰政府论》',
    shortTitle: '波兰',
    year: '1772',
    axis: '民族与制度',
    kind: '政治建议',
    sourceUrl: 'https://fr.wikisource.org/wiki/Consid%C3%A9rations_sur_le_gouvernement_de_Pologne',
    overview:
      '卢梭为波兰提出政治建议，重视民族风俗、公共教育、地方集会和渐进改革。它让《社会契约论》的原则面对大型复杂国家。',
    annotations: [
      {
        title: '不是一套万能制度',
        body: '卢梭在波兰问题上很强调国情、历史和风俗，说明他并不把《社会契约论》当作到处复制的制度模板。',
      },
    ],
  },
  {
    id: 'botany-letters',
    title: '《植物学通信》',
    shortTitle: '植物学',
    year: '1771-1773',
    axis: '植物学与注意力',
    kind: '教学书信',
    sourceUrl: 'https://fr.wikisource.org/wiki/Lettres_%C3%A9l%C3%A9mentaires_sur_la_botanique',
    overview:
      '卢梭晚年写给德莱塞尔夫人的植物学书信，把植物观察变成温和、精确、低压力的教育。它连接自然、注意力和晚年自我疗愈。',
    annotations: [
      {
        title: '随身采集植物',
        body: '卢梭晚年热爱采集和辨认植物。植物学让他从人际纷争中撤离，回到无害而具体的对象。',
      },
    ],
  },
  {
    id: 'languages',
    title: '《论语言的起源》',
    shortTitle: '语言起源',
    year: '1781',
    axis: '语言与情感',
    kind: '语言哲学',
    sourceUrl: 'https://fr.wikisource.org/wiki/Essai_sur_l%E2%80%99origine_des_langues',
    overview:
      '这部作品把语言起源同情感、歌唱、气候和社会形成联系起来。卢梭认为语言首先不是冷冰冰的信息工具，而与激情和呼唤有关。',
    annotations: [
      {
        title: '语言和音乐相连',
        body: '卢梭关于语言起源的思考常常通向音乐：声音先打动人，然后才清楚地指称事物。',
      },
    ],
  },
  {
    id: 'botany-dictionary',
    title: '《植物学片段词典》',
    shortTitle: '植物词典',
    year: '1781',
    axis: '分类与观察',
    kind: '植物学片段',
    sourceUrl: 'https://fr.wikisource.org/wiki/Dictionnaire_fragmentaire_de_botanique',
    overview:
      '这部片段词典延续卢梭晚年的植物学兴趣。它不是宏大思想体系，却让读者看见他如何在细小命名、分类和观察中寻找秩序感。',
    annotations: [
      {
        title: '晚年的小尺度安宁',
        body: '相比公共论战，植物分类显得安静得多。正是在这些小尺度活动里，晚年卢梭试图重新安顿自己。',
      },
    ],
  },
  {
    id: 'confessions',
    title: '《忏悔录》',
    shortTitle: '忏悔录',
    year: '1782-1789',
    axis: '自我书写',
    kind: '自传',
    sourceUrl: 'https://fr.wikisource.org/wiki/Les_Confessions_(Rousseau)',
    overview:
      '卢梭把自己的羞耻、错误、欲望和辩解公开写出，开创现代自我书写的重要形式。它既是真诚实验，也是自我辩护。',
    annotations: [
      {
        title: '“我将展示一个人”',
        body: '《忏悔录》的雄心不是写履历，而是把一个灵魂的全部曲折交给读者判断。',
      },
      {
        title: '真诚不等于透明',
        body: '卢梭越强调坦白，读者越要留意叙事选择、记忆重组和自我辩护。这正是《忏悔录》的魅力。',
      },
    ],
  },
  {
    id: 'dialogues',
    title: '《卢梭评判让-雅克：对话录》',
    shortTitle: '对话录',
    year: '1780',
    axis: '自我辩护',
    kind: '对话体自辩',
    sourceUrl: 'https://fr.wikisource.org/wiki/Rousseau_juge_de_Jean-Jacques',
    overview:
      '这部晚年作品写得曲折、重复、痛苦。卢梭把自己分裂成被审判的“让-雅克”和评判者“卢梭”，试图回应外界误解。',
    annotations: [
      {
        title: '分裂的自我舞台',
        body: '一个人用对话形式审判自己，说明卢梭的“被误解感”已经变成写作结构本身。',
      },
    ],
  },
  {
    id: 'reveries',
    title: '《孤独漫步者的遐想》',
    shortTitle: '遐想',
    year: '1782',
    axis: '孤独与晚年',
    kind: '未完成散文',
    sourceUrl: 'https://fr.wikisource.org/wiki/Les_R%C3%AAveries_du_promeneur_solitaire/Texte_entier',
    overview:
      '这是晚年卢梭的孤独之书。漫步、植物、回忆和自我安顿取代了公共辩论，思想从制度转向存在感和宁静。',
    annotations: [
      {
        title: '未完成的十次漫步',
        body: '《遐想》在卢梭去世前仍未完成，它的未完成感反而很贴近晚年自我整理的状态。',
      },
    ],
  },
  {
    id: 'tacitus-translation',
    title: '《塔西佗〈历史〉第一卷译本》',
    shortTitle: '塔西佗译',
    year: '晚年刊行',
    axis: '古典政治',
    kind: '译作',
    sourceUrl: 'https://fr.wikisource.org/wiki/Traduction_du_premier_Livre_de_l%E2%80%99histoire_de_Tacite',
    overview:
      '卢梭翻译塔西佗，使他与罗马政治史、共和国德性和暴政书写发生联系。它适合放在作品地图边缘，提示卢梭并非只向自然退去，也一直与古典政治语汇对话。',
    annotations: [
      {
        title: '古典共和国的回声',
        body: '卢梭对小共和国、公民德性和腐败的敏感，与古典历史写作之间有暗线相连。',
      },
    ],
  },
  {
    id: 'seneca-translation',
    title: '《塞涅卡〈南瓜化〉译本》',
    shortTitle: '塞涅卡译',
    year: '晚年刊行',
    axis: '讽刺与古典',
    kind: '译作',
    sourceUrl: 'https://fr.wikisource.org/wiki/Traduction_de_l%E2%80%99Apocolokintosis_de_S%C3%A9n%C3%A8que',
    overview:
      '这部译作显示卢梭与古典讽刺传统的接触。它虽不构成核心思想书，却能补出他文学趣味中机智、讽刺和道德判断的一面。',
    annotations: [
      {
        title: '严肃思想家的轻侧面',
        body: '卢梭不总是庄严的。他的文学兴趣包含戏剧、讽刺、古风叙事和音乐舞台，这些都应进入网站的真实面貌。',
      },
    ],
  },
  {
    id: 'pygmalion',
    title: '《皮格马利翁》',
    shortTitle: '皮格马利翁',
    year: '1770',
    axis: '艺术与创造',
    kind: '音乐独白剧',
    sourceUrl: 'https://fr.wikisource.org/wiki/Pygmalion',
    overview:
      '《皮格马利翁》把雕塑、欲望、创造和生命幻觉放在舞台上。它虽不是哲学大书，却很适合补足卢梭关于艺术与情感的面貌。',
    annotations: [
      {
        title: '舞台上的创造焦虑',
        body: '皮格马利翁爱上自己创造的形象，这和卢梭反复讨论的自恋、投射、真实与幻想形成暗线。',
      },
    ],
  },
  {
    id: 'levite',
    title: '《以法莲的利未人》',
    shortTitle: '利未人',
    year: '1781',
    axis: '圣经叙事',
    kind: '散文叙事',
    sourceUrl: 'https://fr.wikisource.org/wiki/Le_L%C3%A9vite_d%E2%80%99%C3%89phra%C3%AFm',
    overview:
      '卢梭改写《士师记》故事，显示他对宗教叙事、道德震撼和古朴文体的兴趣。它不是核心哲学书，却能补足他的文学与宗教想象。',
    annotations: [
      {
        title: '古风不是装饰',
        body: '卢梭常借古朴文体抵抗现代精致趣味，这和他的文明批判相通。',
      },
    ],
  },
]

export const defaultBook = books.find((book) => book.id === 'social-contract') ?? books[0]

export const getPassageBook = (passage: Passage) =>
  books.find((book) => book.id === passage.bookId) ?? defaultBook
