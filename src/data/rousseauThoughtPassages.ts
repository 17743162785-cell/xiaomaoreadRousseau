import type { Passage } from '../types'

const scienceSource = {
  source: 'Jean-Jacques Rousseau, Discours sur les sciences et les arts, 1750',
  sourceUrl: 'https://fr.wikisource.org/wiki/Discours_sur_les_sciences_et_les_arts',
}

const inequalitySource = {
  source:
    'Jean-Jacques Rousseau, Discours sur l’origine et les fondements de l’inégalité parmi les hommes, 1755',
  sourceUrl:
    'https://fr.wikisource.org/wiki/Discours_sur_l%E2%80%99origine_et_les_fondements_de_l%E2%80%99in%C3%A9galit%C3%A9_parmi_les_hommes',
}

const emileSource = {
  source: 'Jean-Jacques Rousseau, Émile, ou De l’éducation, 1762',
  sourceUrl: 'https://fr.wikisource.org/wiki/%C3%89mile%2C_ou_De_l%E2%80%99%C3%A9ducation',
}

const heloiseSource = {
  source: 'Jean-Jacques Rousseau, Julie ou la Nouvelle Héloïse, 1761',
  sourceUrl: 'https://fr.wikisource.org/wiki/Julie_ou_la_Nouvelle_H%C3%A9lo%C3%AFse',
}

const confessionsSource = {
  source: 'Jean-Jacques Rousseau, Les Confessions, 1782',
  sourceUrl: 'https://fr.wikisource.org/wiki/Les_Confessions_(Rousseau)',
}

const reveriesSource = {
  source: 'Jean-Jacques Rousseau, Les Rêveries du promeneur solitaire, 1782',
  sourceUrl: 'https://fr.wikisource.org/wiki/Les_R%C3%AAveries_du_promeneur_solitaire/Texte_entier',
}

export const rousseauThoughtPassages: Passage[] = [
  {
    id: 'sciences-arts-virtue-mask',
    bookId: 'sciences-arts',
    bookTitle: '《论科学与艺术》',
    chapter: '第一部分',
    title: '文明的光泽可能遮蔽德性',
    theme: '文明批判',
    ...scienceSource,
    originalRef: 'Première partie',
    keyTerms: ['文明', '德性', '外观'],
    translation:
      '科学、文学和艺术把花环铺在束缚人的锁链上，使人爱上自己的奴役。它们使粗野的习俗变得文雅，使恶习披上礼貌的外衣；人们学会了取悦、谈吐、修饰和判断，却未必学会了成为更正直的人。外表越精致，灵魂越可能被比较、虚荣和依附占据。文明并不必然提升德性，它也可能让堕落更优雅、更难被察觉。',
    guide:
      '这是卢梭第一次震动欧洲的命题：进步不等于德性。网站若要讲卢梭思想，必须从这里开始看到他的基本姿态：他不是反智，而是怀疑知识和艺术在社会荣誉体系中被用来服务虚荣。',
    closeReading: [
      {
        title: '批判对象不是知识本身',
        body: '卢梭攻击的是知识进入名誉、宫廷和竞争体系后的效果。知识若成为炫耀资本，就可能增加依附而非自由。',
      },
      {
        title: '“礼貌”有双面性',
        body: '礼貌可以减少粗暴，也可能训练人隐藏真实动机。卢梭关心的是人越会表演，越难显出真实德性。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代教育、履历和文化资本是否也有类似问题：它们让人更自由，还是让人更精致地参与竞争？',
      },
    ],
    questions: ['知识增长为什么不必然带来德性增长？', '文明的礼貌什么时候会变成自我伪装？'],
  },
  {
    id: 'sciences-arts-luxury',
    bookId: 'sciences-arts',
    bookTitle: '《论科学与艺术》',
    chapter: '第二部分',
    title: '奢侈让公共精神变得柔软',
    theme: '奢侈与腐化',
    ...scienceSource,
    originalRef: 'Seconde partie',
    keyTerms: ['奢侈', '公共精神', '依附'],
    translation:
      '奢侈使人需要越来越多东西，也使人越来越依赖他人的眼光。公民不再以共同体的自由为荣，而以消费、品味和被羡慕为荣。当贫者被迫追逐富者的生活方式，富者又以稀有之物制造距离，社会就被欲望的阶梯分割。艺术和工业越能生产精致享受，公共精神越可能被私人欲望稀释。',
    guide:
      '卢梭把奢侈看作政治问题，而非单纯道德说教。奢侈改变人的荣誉结构，使人更愿意为了被承认而依附权力、财富和时尚。',
    closeReading: [
      {
        title: '欲望会被社会制造',
        body: '人以为自己在追求自然需要，其实常常在追求由比较和羡慕制造出来的需要。',
      },
      {
        title: '奢侈腐化公共时间',
        body: '当人的主要精力转向消费和地位表演，共同事务就会显得乏味、笨重、没有吸引力。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '消费社会是否用更温和的方式完成了卢梭担心的事：让人自愿把自由交给身份焦虑？',
      },
    ],
    questions: ['奢侈为什么会成为政治问题？', '公共精神能否和高度消费社会共存？'],
  },
  {
    id: 'sciences-arts-genius',
    bookId: 'sciences-arts',
    bookTitle: '《论科学与艺术》',
    chapter: '第二部分',
    title: '天才不能替代公民德性',
    theme: '天才与共和国',
    ...scienceSource,
    originalRef: 'Seconde partie',
    keyTerms: ['天才', '名望', '公民德性'],
    translation:
      '一个民族也许拥有诗人、几何学家、音乐家和雄辩家，却仍然可能失去勇气、节制和公共忠诚。少数天才的光芒不能证明共同体健康；辉煌作品也不能替代公民日常的朴素德性。若荣誉只奖赏机智与才华，而不奖赏正直与牺牲，社会会越来越善于赞美优秀表演，却越来越不善于形成优秀公民。',
    guide:
      '这段能把卢梭和现代“精英崇拜”联系起来。他不否认天才，但拒绝让天才遮蔽共同体德性的衰弱。',
    closeReading: [
      {
        title: '文化成就不是政治健康',
        body: '一个社会可以很会创作、很会评论、很会展示，却在公共勇气上衰败。',
      },
      {
        title: '荣誉制度决定人的方向',
        body: '人会朝社会奖励的方向塑造自己。若只奖励聪明，不奖励正直，聪明就可能服务虚荣。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '今天的名校、奖项、榜单和流量机制，奖励的是更自由的人，还是更会被看见的人？',
      },
    ],
    questions: ['文化繁荣是否能掩盖政治贫弱？', '社会应如何奖励不耀眼但必要的德性？'],
  },
  {
    id: 'sciences-arts-simple-morals',
    bookId: 'sciences-arts',
    bookTitle: '《论科学与艺术》',
    chapter: '结论',
    title: '朴素风俗不是无知，而是少一点表演',
    theme: '朴素与真实',
    ...scienceSource,
    originalRef: 'Conclusion',
    keyTerms: ['朴素', '风俗', '真实'],
    translation:
      '卢梭向往的朴素并不是粗鄙无知，而是一种较少被表演污染的生活状态。在那里，人不必随时把自己包装成值得羡慕的样子，不必把言谈变成求取名望的工具，也不必把判断交给时尚。朴素意味着人的外表和内心之间少一些裂缝，公共评价与实际德性之间少一些距离。',
    guide:
      '这里需要避免把卢梭读成反现代的乡愁。他真正怀疑的是社会表演系统，而不是识字、学习或艺术本身。',
    closeReading: [
      {
        title: '朴素是关系状态',
        body: '朴素不是知识少，而是人与人之间较少通过虚荣、名声和炫耀发生关系。',
      },
      {
        title: '真实不等于透明',
        body: '卢梭并不要求人毫无内心秘密。他反对的是人为了社会承认而持续伪装自己。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '社交媒体时代，卢梭的朴素理想是否变得更难，还是反而更必要？',
      },
    ],
    questions: ['朴素生活是否可能是一种高级自由？', '真实和反智之间该如何区分？'],
  },
  {
    id: 'inequality-natural-man',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第一部分',
    title: '自然人首先关心保存自己',
    theme: '自然状态',
    ...inequalitySource,
    originalRef: 'Première partie',
    keyTerms: ['自然人', '自爱', '保存'],
    translation:
      '自然状态中的人没有复杂的荣誉观，也没有持续支配他人的计划。他首先关心的是保存自己：寻找食物、避开危险、休息、满足直接需要。他的欲望少，比较少，想象也不总把他拖向远处。正因为他的需要有限，他既不天然善良到像圣人，也不天然邪恶到像暴君；他只是尚未被社会关系训练成不断比较、占有和命令的存在。',
    guide:
      '卢梭的自然人不是现实人类学标本，而是分析工具：通过剥离社会制造的欲望，追问哪些东西不是人的本性，而是社会结构的结果。',
    closeReading: [
      {
        title: '自然人不是道德楷模',
        body: '他没有复杂德性，也没有复杂恶习。卢梭要找的是社会之前的低欲望状态。',
      },
      {
        title: '有限需要带来自足',
        body: '需要少并不是贫乏，而是少一些被他人眼光牵引的依赖。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '如果许多欲望是社会制造的，那么现代人的“不满足”有多少来自真实需要，有多少来自比较？',
      },
    ],
    questions: ['自然状态是历史事实，还是批判工具？', '需要有限是否比资源丰富更接近自由？'],
  },
  {
    id: 'inequality-pity',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第一部分',
    title: '怜悯先于理性计算',
    theme: '怜悯与同情',
    ...inequalitySource,
    originalRef: 'Première partie',
    keyTerms: ['怜悯', '同情', '自然情感'],
    translation:
      '在人精于推理之前，他已经会对痛苦有所退缩。看到同类受苦时，自然的怜悯使他不愿无故伤害别人。理性可以扩大道德判断，也可以为自私寻找借口；怜悯则更早、更直接地阻止残忍。卢梭因此把道德根基的一部分放在感受能力中：人不是因为先成为哲学家才不杀戮，而是因为能感到他人的痛苦与自己相关。',
    guide:
      '这段帮助我们理解卢梭不是单纯理性主义者。他重视情感的道德能力，尤其是怜悯如何限制自爱变成残酷。',
    closeReading: [
      {
        title: '怜悯不是软弱',
        body: '怜悯是一种原初限制，它让自我保存不自动变成对他人的侵害。',
      },
      {
        title: '理性有双面性',
        body: '理性可以普遍化道德，也可以冷静地为利益服务。卢梭因此不把理性神圣化。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '一个高度理性化、数据化的社会，是否可能削弱人对具体痛苦的直接感受？',
      },
    ],
    questions: ['怜悯能否成为政治制度的基础？', '情感道德比理性道德更可靠吗？'],
  },
  {
    id: 'inequality-perfectibility',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第一部分',
    title: '可完善性让人类既进步又迷失',
    theme: '可完善性',
    ...inequalitySource,
    originalRef: 'Première partie',
    keyTerms: ['可完善性', '进步', '退化'],
    translation:
      '人区别于动物的一项能力，是能够改变自己、学习新技能、创造新需要，并把偶然经验积累成生活方式。这个能力使人可能进步，也使人可能退化；它打开科学、语言、制度和教育，也打开虚荣、依赖、奢侈和奴役。人的危险不在于不能改变，而在于太能改变：他会把自己制造成不再知道怎样生活的存在。',
    guide:
      '“可完善性”是卢梭理解人类历史的关键。人类不是固定本性，而是会被自身发明改造。文明批判由此不是反进步，而是追问进步把人带向哪里。',
    closeReading: [
      {
        title: '进步没有自动方向',
        body: '可完善性只是可变性，不保证变好。历史是开放的，也因此危险。',
      },
      {
        title: '人会制造自己的枷锁',
        body: '许多束缚不是自然给的，而是人类能力的副产品：制度、技术、欲望都可能反过来支配人。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '人工智能、算法和生物技术是否是新的可完善性问题：我们能改变自己，却未必知道改变的尺度？',
      },
    ],
    questions: ['人类进步为什么会带来退化？', '可完善性需要什么样的政治限制？'],
  },
  {
    id: 'inequality-amour-propre',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第二部分',
    title: '被观看的欲望产生了不平等',
    theme: '自尊与比较',
    ...inequalitySource,
    originalRef: 'Seconde partie',
    keyTerms: ['自尊', '比较', '虚荣'],
    translation:
      '当人们开始聚集、歌唱、跳舞、展示力量、机智和美貌时，他们也开始希望被看见、被偏爱、被承认。公共评价有了价格，最会取悦的人得到尊重，较弱或较少被看见的人感到羞耻。从这时起，人不再只问自己是否活着、是否满足，还问自己在别人眼中值多少。自尊由此诞生，不平等也获得了情感燃料。',
    guide:
      '卢梭最深的社会心理学在这里：不平等不只来自财产，也来自被比较、被排名、被承认的欲望。',
    closeReading: [
      {
        title: '比较制造社会自我',
        body: '人开始通过他人目光认识自己，自我价值不再由自身感受决定。',
      },
      {
        title: '荣誉变成稀缺资源',
        body: '一旦承认可以排序，社会就会制造羡慕、羞耻、嫉妒和支配。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '排行榜、点赞和关注数是否把卢梭的“被观看欲望”制度化、实时化了？',
      },
    ],
    questions: ['承认为什么会变成不平等的燃料？', '能否有不制造支配的公共评价？'],
  },
  {
    id: 'inequality-property-origin',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第二部分',
    title: '第一个圈地者改变了人类历史',
    theme: '财产起源',
    ...inequalitySource,
    originalRef: 'Seconde partie',
    keyTerms: ['圈地', '财产', '制度起源'],
    translation:
      '第一个把一块土地圈起来并说“这是我的”的人，如果找到了足够单纯的人相信他，便成为文明社会真正的奠基者。多少犯罪、战争、谋杀、苦难和恐怖，本可以被那个拔掉木桩、填平沟渠并喊出“果实属于所有人，土地不属于任何人”的人阻止。财产制度从一个声明开始，却需要许多人承认；它的力量不只在占有者手里，也在旁观者的信任中。',
    guide:
      '这是卢梭最著名的段落之一。它不是简单取消财产，而是揭示财产起源中的社会承认和制度暴力：一条线被相信之后，世界就变了。',
    closeReading: [
      {
        title: '财产是社会事实',
        body: '圈地本身只是动作，真正使它有效的是他人承认和共同执行。',
      },
      {
        title: '文明奠基包含暴力',
        body: '卢梭把文明起点写得像一次欺骗，是为了动摇财产天然正当的神话。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代所有权体系如何在保护劳动成果与固化不平等之间摇摆？',
      },
    ],
    questions: ['财产为什么需要他人的承认？', '“土地不属于任何人”在现代还有意义吗？'],
  },
  {
    id: 'inequality-rich-pact',
    bookId: 'inequality',
    bookTitle: '《论人类不平等的起源和基础》',
    chapter: '第二部分',
    title: '富人的契约把不平等写成法律',
    theme: '虚假契约',
    ...inequalitySource,
    originalRef: 'Seconde partie',
    keyTerms: ['富人契约', '法律', '统治'],
    translation:
      '当冲突和不安全威胁财产时，富人想出了最巧妙的计划：把保护所有人的语言用来保护自己的占有。他们说，让我们联合起来，制定法律，保护弱者免受压迫，约束野心，保障每个人拥有属于自己的东西。穷人以为自己获得安全，实际上却把偶然占有变成固定权利，把不平等盖上公共印章。法律由此可能既带来秩序，也冻结支配。',
    guide:
      '《论不平等》和《社会契约论》在这里形成张力：并非所有契约都正当。契约可能是自由人的共同约定，也可能是既得利益的合法化技术。',
    closeReading: [
      {
        title: '契约语言可以被盗用',
        body: '“共同保护”听起来普遍，却可能实际保护最有东西可保护的人。',
      },
      {
        title: '秩序有阶级方向',
        body: '秩序并不天然中立。它可能结束混乱，也可能把不平等稳定下来。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当法律保护形式平等却继承巨大起点差异时，它是在纠正不平等，还是在管理不平等？',
      },
    ],
    questions: ['怎样区分真实契约和富人的虚假契约？', '法律是否可能把不正义变得有秩序？'],
  },
  {
    id: 'emile-natural-education',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第一卷',
    title: '教育要保护自然的生长节奏',
    theme: '自然教育',
    ...emileSource,
    originalRef: 'Livre I',
    keyTerms: ['自然教育', '成长', '节奏'],
    translation:
      '万物出自造物者之手时是好的，一到人的手中就变坏。教育的任务不是把儿童尽快塑造成成人，而是保护他按照自身节奏展开。儿童有儿童的看法、感受和理解方式；若急着用成人的语言、荣誉和恐惧训练他，我们得到的只是早熟的伪成人。真正的教育首先是延缓，让自然有时间工作，让孩子在身体、感官和经验中形成稳固的自己。',
    guide:
      '《爱弥儿》把卢梭的自由问题放到成长中。政治上的自由人，必须先在教育中学会不被虚荣和权威过早占有。',
    closeReading: [
      {
        title: '自然不是放任',
        body: '自然教育不是不教育，而是不让社会偏见过早支配孩子。',
      },
      {
        title: '儿童不是小成人',
        body: '卢梭坚持儿童阶段有自身价值，不能只按成人目的评价。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当教育越来越早地服务竞争，儿童是否正在被提前交给社会评价体系？',
      },
    ],
    questions: ['教育是塑造人，还是保护人成长？', '“自然”在教育中应如何理解？'],
  },
  {
    id: 'emile-negative-education',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第二卷',
    title: '消极教育先避免败坏',
    theme: '消极教育',
    ...emileSource,
    originalRef: 'Livre II',
    keyTerms: ['消极教育', '自由', '环境'],
    translation:
      '最初的教育不在于教给孩子德性和真理，而在于保护他的心不染恶习，保护他的判断不陷入错误。不要急着说教，不要让他为了取悦成人而撒谎，也不要让他在惩罚和奖励中学会表演。让事情本身教育他，让自然后果约束他。教师的艺术常常不是命令，而是安排环境，使孩子以为自己自由行动，却在自由中遇见必要的边界。',
    guide:
      '消极教育听起来像少做事，实际上要求教师高度设计。卢梭希望儿童先免于虚荣、恐惧和依附，再谈积极德性。',
    closeReading: [
      {
        title: '少说教，多安排',
        body: '卢梭不相信抽象训诫能塑造自由人。他更重视经验后果。',
      },
      {
        title: '自由中的边界',
        body: '孩子不是没有限制，而是限制来自事情本身，而不是成人任意意志。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '今天的家庭和学校是否过度依赖评价、奖励和惩罚，从而训练孩子表演正确？',
      },
    ],
    questions: ['教师如何“不命令”却仍然教育？', '消极教育会不会变成隐蔽操控？'],
  },
  {
    id: 'emile-things-not-words',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第三卷',
    title: '让孩子从事物学习，而不是从空话学习',
    theme: '经验与判断',
    ...emileSource,
    originalRef: 'Livre III',
    keyTerms: ['经验', '判断', '事物教育'],
    translation:
      '孩子不应先记住一堆他不能理解的词，而应在事物中形成判断。测量、观察、制作、迷路、寻找、失败和重试，比背诵结论更能教育理智。语言若走在经验前面，只会制造虚假的聪明；经验若不断校正语言，知识才属于他自己。卢梭要培养的不是会复述的人，而是能判断的人。',
    guide:
      '这段把卢梭的教育思想和认识论连在一起：知识不是装进去的内容，而是主体在世界中形成判断的能力。',
    closeReading: [
      {
        title: '反对早熟的语言能力',
        body: '孩子会说不等于懂。卢梭警惕语言成为空洞优越感。',
      },
      {
        title: '失败是教育材料',
        body: '经验教育允许孩子遇见限制，并在限制中发展判断。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当学习越来越考试化，学生是在获得判断力，还是获得可评分的表达？',
      },
    ],
    questions: ['经验学习为什么比背诵更接近自由？', '知识如何真正成为“自己的”？'],
  },
  {
    id: 'emile-adolescence-pity',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第四卷',
    title: '青春期让人第一次真正走向他人',
    theme: '同情教育',
    ...emileSource,
    originalRef: 'Livre IV',
    keyTerms: ['青春期', '同情', '他人'],
    translation:
      '在儿童时期，人主要活在自己的感觉和需要中；到了青春期，激情扩展，想象打开，他开始真正感到他人的存在。教育此时不应只压抑激情，而要引导激情走向怜悯、友爱和责任。让青年看见苦难，而不是只看见浮华；让他理解人类共同脆弱，而不是急着加入虚荣竞赛。爱情、同情和德性都从这个危险而丰饶的时刻开始。',
    guide:
      '《爱弥儿》不是只谈儿童，也谈情感如何成为道德入口。卢梭要把激情从虚荣中救出来，使它成为走向他人的力量。',
    closeReading: [
      {
        title: '激情不是敌人',
        body: '卢梭不主张消灭激情，而是要改变激情的方向。',
      },
      {
        title: '同情需要想象',
        body: '人要能把自己放到他人处境中，才会从自我需要走向道德关系。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当青春期主要被竞争、升学和形象焦虑占据，同情教育还剩多少空间？',
      },
    ],
    questions: ['激情如何被教育为德性？', '同情是否需要亲眼看见苦难？'],
  },
  {
    id: 'emile-vicar-conscience',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第四卷：萨瓦副主教信仰自白',
    title: '良心是灵魂深处的声音',
    theme: '良心与信仰',
    ...emileSource,
    originalRef: 'Livre IV',
    keyTerms: ['良心', '自然宗教', '内在声音'],
    translation:
      '在种种教条、权威和争论之前，人心中还有一种更直接的判断：良心。它不是复杂推理的结果，而像灵魂深处对善的感受。人可能用诡辩压低它，用利益遮蔽它，却很难彻底消灭它。卢梭借萨瓦副主教之口说：真正的信仰不应首先服从宗派争斗，而应回到自然、秩序、内心和对善的真诚爱。',
    guide:
      '这一节连接卢梭的教育、道德和宗教思想。它强调内在真诚，反对把信仰变成外部权威和教条竞赛。',
    closeReading: [
      {
        title: '良心不是意见',
        body: '良心不是我喜欢什么，而是我在深处感到什么值得尊重。',
      },
      {
        title: '自然宗教反对宗派化',
        body: '卢梭试图在教会权威和无神论之间寻找内在信仰的位置。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '如果现代人不再共享宗教语言，良心还能否成为公共伦理的来源？',
      },
    ],
    questions: ['良心和个人偏见如何区分？', '信仰是否可以不依赖宗派权威？'],
  },
  {
    id: 'emile-sophie-problem',
    bookId: 'emile',
    bookTitle: '《爱弥儿》',
    chapter: '第五卷',
    title: '苏菲章节暴露了卢梭思想的限度',
    theme: '性别与教育',
    ...emileSource,
    originalRef: 'Livre V',
    keyTerms: ['苏菲', '性别', '限度'],
    translation:
      '卢梭为爱弥儿设计自由成长，却为苏菲安排另一套以取悦、持家和辅助男性为中心的教育。他强调女性的德性、判断和情感力量，却又把这些力量放进性别分工中。这里不能只当作时代偏见轻轻带过；它迫使读者看到，卢梭关于自由和自然的语言并不总能平等地适用于所有人。思想的伟大处和局限处在同一本书中并存。',
    guide:
      '讲卢梭思想不能回避这一章。它让网站更诚实：卢梭提供了自由教育的强大资源，也留下了性别不平等的明显限度。',
    closeReading: [
      {
        title: '自由概念的选择性',
        body: '同一本书中，男孩被保护为自由主体，女孩却被训练进关系角色。',
      },
      {
        title: '自然可能成为规范借口',
        body: '卢梭把某些社会性别安排说成自然差异，这正是现代读者需要批判的地方。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当一种理论高喊自由，却只把自由完整给予部分人，我们应如何继承它？',
      },
    ],
    questions: ['如何批判性地阅读卢梭的性别观？', '自然教育是否可能摆脱性别定型？'],
  },
  {
    id: 'new-heloise-love-virtue',
    bookId: 'new-heloise',
    bookTitle: '《新爱洛伊丝》',
    chapter: '第一部分',
    title: '爱情必须接受德性的审判',
    theme: '爱情与德性',
    ...heloiseSource,
    originalRef: 'Première partie',
    keyTerms: ['爱情', '德性', '克制'],
    translation:
      '《新爱洛伊丝》不是单纯爱情小说，而是把激情放进德性的审判中。爱情使人发现内心深处的力量，也使人暴露于占有、冲动和自我欺骗。真正高贵的情感不能只说“我感受强烈”，还要问这种强烈是否使人更正直、更能克制、更能尊重他人的幸福。卢梭让读者既相信情感的真实，又不把真实情感等同于正当行动。',
    guide:
      '这本书展示卢梭的情感哲学：情感不是理性的敌人，但情感必须被德性组织。',
    closeReading: [
      {
        title: '激情需要形式',
        body: '卢梭不把爱情贬低为欲望，但要求它进入承诺、克制和责任。',
      },
      {
        title: '真实不等于正当',
        body: '强烈感受可以是真的，却未必因此值得实行。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代亲密关系常把“真实感受”当作最高理由，卢梭会要求我们再问它是否有德性形式。',
      },
    ],
    questions: ['爱情如何既真实又不任性？', '德性会保护激情，还是压抑激情？'],
  },
  {
    id: 'new-heloise-clarens',
    bookId: 'new-heloise',
    bookTitle: '《新爱洛伊丝》',
    chapter: '第四部分',
    title: '克拉朗像一个小型道德共同体',
    theme: '家庭共同体',
    ...heloiseSource,
    originalRef: 'Quatrième partie',
    keyTerms: ['克拉朗', '家庭', '秩序'],
    translation:
      '克拉朗庄园不是普通家庭背景，而像卢梭想象中的小共同体：劳动有秩序，情感有节制，主人与仆人之间不只是冷冰冰的雇佣关系，日常生活被安排得既有自然趣味，又有道德方向。这里没有《社会契约论》的公民大会，却有另一种政治想象：共同生活从餐桌、劳动、教育、友谊和节制中开始。',
    guide:
      '这段让政治卢梭和情感卢梭相遇。卢梭的共同体理想不只在国家制度中，也在日常生活的秩序中。',
    closeReading: [
      {
        title: '家庭作为政治模型',
        body: '克拉朗把治理问题缩小到生活尺度：如何安排关系，使人更节制、更互相关怀。',
      },
      {
        title: '温情也有等级问题',
        body: '庄园共同体看似和谐，但仍有主人与仆人的结构，值得现代读者继续追问。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '一个温和、有秩序、充满关怀的小共同体，是否可能仍然保留隐蔽不平等？',
      },
    ],
    questions: ['日常生活能否承载政治理想？', '温情共同体如何避免家长制？'],
  },
  {
    id: 'new-heloise-city-rural',
    bookId: 'new-heloise',
    bookTitle: '《新爱洛伊丝》',
    chapter: '第五部分',
    title: '城市使人分心，乡居让人重新集中',
    theme: '城市与自然',
    ...heloiseSource,
    originalRef: 'Cinquième partie',
    keyTerms: ['城市', '乡居', '自然'],
    translation:
      '卢梭笔下的城市充满表演、流言、比较和消耗，人在其中不断被他人的目光牵引。乡居并不是逃避世界，而是让感官、劳动和情感重新接近真实对象。自然景色、节制生活和较慢的时间，使人有机会重新听见自己的内心。卢梭的自然不是风景消费，而是一种抵抗社会分心的生活条件。',
    guide:
      '这段扩展了卢梭的自然概念。自然不只是政治起源，也是治疗现代分裂自我的空间。',
    closeReading: [
      {
        title: '城市是目光机器',
        body: '城市让人持续被观看和比较，这与《论不平等》的自尊理论相通。',
      },
      {
        title: '自然恢复注意力',
        body: '卢梭的自然经验常常意味着注意力回到身体、季节和具体关系。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代人即使身在乡野，也可能被屏幕重新带回城市目光中。卢梭的自然条件还能如何重建？',
      },
    ],
    questions: ['自然生活是逃避还是抵抗？', '城市生活怎样改变人的自我感？'],
  },
  {
    id: 'new-heloise-authentic-writing',
    bookId: 'new-heloise',
    bookTitle: '《新爱洛伊丝》',
    chapter: '书信体形式',
    title: '书信让思想以情感的速度出现',
    theme: '书信与真诚',
    ...heloiseSource,
    originalRef: 'Forme épistolaire',
    keyTerms: ['书信', '真诚', '情感表达'],
    translation:
      '书信体让人物不是在冷静论文中表达自己，而是在等待、误解、羞愧、希望和悔恨中说话。思想不再只是概念排列，而带着心跳、延迟和语气。卢梭选择这种形式，是因为他相信人的真理常常藏在自我暴露的瞬间：人怎样请求、辩解、沉默和承认，和他说了什么同样重要。',
    guide:
      '这段帮助网站突破哲学摘录的单一形态。卢梭思想也存在于文学形式中，尤其存在于真诚表达与自我表演的拉扯里。',
    closeReading: [
      {
        title: '形式也是思想',
        body: '书信体不是包装，它让情感和道德判断以过程形式展开。',
      },
      {
        title: '真诚仍可能表演',
        body: '越是说真心话，越可能希望被理解、被原谅、被爱。卢梭对此很敏感。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '今天的私信、朋友圈和长文自白，是否继承了书信体的真诚，也放大了它的表演性？',
      },
    ],
    questions: ['文学形式如何承载哲学思想？', '真诚表达和自我表演能否分开？'],
  },
  {
    id: 'confessions-one-man',
    bookId: 'confessions',
    bookTitle: '《忏悔录》',
    chapter: '第一卷',
    title: '我要展示一个人的全部真实',
    theme: '自我书写',
    ...confessionsSource,
    originalRef: 'Livre I',
    keyTerms: ['自我', '真实', '公开'],
    translation:
      '卢梭在《忏悔录》开头宣称，他要展示一个按照自然真实而存在的人；这个人就是他自己。他愿意说出可赞美的，也愿意说出可羞耻的；不是为了给自己塑造完美形象，而是为了让读者看见一个具体灵魂的形成。自我书写在这里变成一次审判：他把自己交给公众，也把公众的判断带到自己面前。',
    guide:
      '《忏悔录》让卢梭思想转向自我透明的难题：一个人能否把自己真实地写出来？公开自我是否会再次变成表演？',
    closeReading: [
      {
        title: '公开真相的悖论',
        body: '越想公开真实自我，越会面对读者目光；真实因此总和表演纠缠。',
      },
      {
        title: '自我成为哲学材料',
        body: '卢梭不只讲理论，也把自己的羞耻、记忆和辩解变成理解人的材料。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代自我表达越多，我们是否越接近真实，还是越熟练地管理形象？',
      },
    ],
    questions: ['人能否完全诚实地书写自己？', '公开忏悔会不会变成另一种自我辩护？'],
  },
  {
    id: 'confessions-childhood',
    bookId: 'confessions',
    bookTitle: '《忏悔录》',
    chapter: '第一卷',
    title: '童年记忆塑造一生的敏感',
    theme: '童年与人格',
    ...confessionsSource,
    originalRef: 'Livre I',
    keyTerms: ['童年', '记忆', '敏感性'],
    translation:
      '卢梭反复回到童年，因为他相信最早的感受会在灵魂中留下长久痕迹。一次误解、一次羞辱、一本书、一个温柔或严厉的眼神，都可能改变人后来感受世界的方式。童年不是成年生活的序章，而是人格敏感性的形成地。理解一个人，不能只看他的原则和行为，还要看他如何学会害怕、渴望、羞耻和爱。',
    guide:
      '这段与《爱弥儿》相互照亮：教育理论中的儿童，在《忏悔录》中变成有创伤、有记忆、有误解的具体儿童。',
    closeReading: [
      {
        title: '记忆不是资料库',
        body: '卢梭的记忆常常带着解释、辩护和情绪。它显示一个人如何理解自己的形成。',
      },
      {
        title: '敏感性有历史',
        body: '人的感受方式不是天然固定，而是在早期关系中被塑造。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '如果童年经验深刻塑造人格，教育和家庭中的小事件是否比宏大原则更重要？',
      },
    ],
    questions: ['童年记忆为什么具有哲学意义？', '自我理解能否摆脱对童年的重写？'],
  },
  {
    id: 'confessions-shame',
    bookId: 'confessions',
    bookTitle: '《忏悔录》',
    chapter: '第二卷',
    title: '羞耻揭示自我与他人目光的纠缠',
    theme: '羞耻与辩解',
    ...confessionsSource,
    originalRef: 'Livre II',
    keyTerms: ['羞耻', '目光', '辩解'],
    translation:
      '卢梭写自己的过错时，常常既承认又解释，既暴露又辩护。羞耻说明他无法只在自己面前存在；他总在想象一个观看、误解或审判他的他人。自我因此不是孤立内心，而是在他人目光中不断收缩和伸展。卢梭越想证明自己真实，越显示真实自我如何被承认需要所缠绕。',
    guide:
      '这段把《忏悔录》和《论不平等》的自尊理论连接起来：被看见的欲望不只是社会理论，也是卢梭自己的生命经验。',
    closeReading: [
      {
        title: '忏悔不是单纯认罪',
        body: '忏悔总带着解释和争取理解的欲望。',
      },
      {
        title: '他人目光进入内心',
        body: '羞耻证明社会已经住进自我内部。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '今天的公开道歉和自我披露，是否也在承认、辩解和形象修复之间摇摆？',
      },
    ],
    questions: ['羞耻是一种道德能力，还是社会控制？', '承认错误为何常伴随自我辩护？'],
  },
  {
    id: 'confessions-persecution',
    bookId: 'confessions',
    bookTitle: '《忏悔录》',
    chapter: '后半部',
    title: '被迫害感让自我收缩成堡垒',
    theme: '孤立与猜疑',
    ...confessionsSource,
    originalRef: 'Livres IX-XII',
    keyTerms: ['迫害感', '孤立', '自我防御'],
    translation:
      '晚年的卢梭越来越感到自己被误解、被围攻、被阴谋包围。无论这些感受有多少现实根据，它们都改变了他的思想气质：公共承认变得可疑，友谊变得脆弱，自我必须不断防御。他仍渴望被公正理解，却又怀疑一切理解都已被污染。一个追求透明的人，最终活在无法被透明理解的痛苦中。',
    guide:
      '这段为《孤独漫步者的遐想》铺路。卢梭的孤独不是简单隐居，而是与公共世界破裂后的自我保存方式。',
    closeReading: [
      {
        title: '被误解的政治性',
        body: '卢梭的痛苦不只是私人心理，也与作者、公众和舆论关系有关。',
      },
      {
        title: '透明理想的崩裂',
        body: '越要求被真实理解，越难承受误读；透明理想会制造新的伤口。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '公共舆论时代，每个人都可能被误读；卢梭的敏感是否预演了现代公众自我的焦虑？',
      },
    ],
    questions: ['被误解感如何改变人的政治态度？', '追求透明是否会加重孤独？'],
  },
  {
    id: 'reveries-solitude',
    bookId: 'reveries',
    bookTitle: '《孤独漫步者的遐想》',
    chapter: '第一漫步',
    title: '孤独成为最后的自由空间',
    theme: '孤独与自由',
    ...reveriesSource,
    originalRef: 'Première promenade',
    keyTerms: ['孤独', '自由', '退隐'],
    translation:
      '当公共世界不再给他公正位置，卢梭把自己退回孤独中。孤独不是单纯失败，而成为最后仍可保存自由的空间：在那里，他不必继续争辩，不必求取承认，不必在误解中反复证明自己。他失去了社会，却获得一种不再依附他人判断的宁静。晚年的卢梭把自由从政治共同体转向内心栖居。',
    guide:
      '《遐想》让卢梭思想进入晚年形态：当社会契约理想破裂时，人怎样在孤独中保存自己？',
    closeReading: [
      {
        title: '孤独不是纯粹幸福',
        body: '它带着受伤后的退守，也带着摆脱承认焦虑后的安宁。',
      },
      {
        title: '自由尺度改变',
        body: '早期自由关乎政治形式，晚年自由更多关乎不再被目光支配。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当公共生活令人疲惫，退回私人宁静是自由，还是放弃共同世界？',
      },
    ],
    questions: ['孤独能否成为积极自由？', '退隐和逃避之间有什么区别？'],
  },
  {
    id: 'reveries-botany',
    bookId: 'reveries',
    bookTitle: '《孤独漫步者的遐想》',
    chapter: '第七漫步',
    title: '植物学让注意力回到无害之物',
    theme: '植物学与注意力',
    ...reveriesSource,
    originalRef: 'Septième promenade',
    keyTerms: ['植物学', '注意力', '自然'],
    translation:
      '采集植物、辨认叶片、观察花形，使卢梭的心从人际伤害中撤离出来。植物不会奉承、不会诽谤、不会争夺名声；它们只是以自己的形态存在。植物学因此不仅是知识活动，也是一种精神疗法：注意力被安放在无害、具体、安静的对象上，灵魂从社会比较中暂时恢复呼吸。',
    guide:
      '这段把卢梭的自然经验具体化。自然不是抽象观念，而是通过观察、命名、触摸和漫步恢复自我的方式。',
    closeReading: [
      {
        title: '无害对象的伦理',
        body: '植物不卷入承认斗争，给受伤自我提供低压力关系。',
      },
      {
        title: '观察也是修养',
        body: '细看自然能训练一种不占有、不表演的注意力。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '在持续分心的数字生活中，是否也需要某种“植物学式”的注意力训练？',
      },
    ],
    questions: ['自然观察为何能疗愈社会伤害？', '注意力是否是一种道德能力？'],
  },
  {
    id: 'reveries-self-sufficiency',
    bookId: 'reveries',
    bookTitle: '《孤独漫步者的遐想》',
    chapter: '第五漫步',
    title: '幸福可以是不再渴求别处',
    theme: '自足与幸福',
    ...reveriesSource,
    originalRef: 'Cinquième promenade',
    keyTerms: ['自足', '幸福', '当下'],
    translation:
      '在圣皮埃尔岛的回忆中，卢梭描述一种几乎无对象的幸福：不追逐名声，不计划胜利，不期待别人承认，只是在水声、天空、植物和身体节奏中感到存在本身已经足够。这样的幸福不是强烈占有，而是欲望暂时安静；不是得到更多，而是不再被缺乏感驱赶。自足在这里成为对社会欲望的最温柔反抗。',
    guide:
      '这段是卢梭晚年思想最美的核心之一：幸福不是欲望满足的总和，而是欲望结构的改变。',
    closeReading: [
      {
        title: '无对象幸福',
        body: '卢梭写的是一种不依赖具体成就的存在感。',
      },
      {
        title: '欲望的静止',
        body: '幸福不在刺激增强，而在比较和匮乏感暂时停止。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '现代幸福常被设计为目标、消费和成就；卢梭提供的是几乎相反的幸福语法。',
      },
    ],
    questions: ['幸福是否可能是不再追求？', '自足会不会变成对他人的冷漠？'],
  },
  {
    id: 'reveries-memory',
    bookId: 'reveries',
    bookTitle: '《孤独漫步者的遐想》',
    chapter: '第十漫步',
    title: '回忆让破碎生命重新形成秩序',
    theme: '回忆与自我',
    ...reveriesSource,
    originalRef: 'Dixième promenade',
    keyTerms: ['回忆', '自我', '晚年'],
    translation:
      '晚年的卢梭不再系统证明自己，而是在漫步和回忆中整理生命。记忆不是为了恢复完整事实，而是为了给破碎经验找到一种可忍受的秩序。过去的爱、羞耻、误解和短暂幸福，在回忆中重新被安放。自我不再是要说服法庭的被告，而像一个孤独的漫步者，把散落的片段拾起，确认自己曾经真实地活过。',
    guide:
      '这段让《忏悔录》和《遐想》区别开来：前者仍面向审判，后者更多面向自我安顿。',
    closeReading: [
      {
        title: '回忆不是证据',
        body: '回忆在这里不是为案件提供材料，而是为生命提供形状。',
      },
      {
        title: '从辩护到安顿',
        body: '卢梭晚年写作逐渐从对他人的辩护转向对自己的安放。',
      },
    ],
    furtherReading: [
      {
        title: '进一步追问',
        body: '当一个人不再能改变公众评价，他是否仍能通过回忆重新拥有自己的生命？',
      },
    ],
    questions: ['回忆能否修复被误解的人生？', '自我叙事是发现真相还是创造秩序？'],
  },
]
