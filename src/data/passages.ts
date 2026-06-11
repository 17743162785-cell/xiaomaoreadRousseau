import type { Passage } from '../types'
import { additionalPassages } from './additionalPassages'
import { bookOverviewPassages } from './bookOverviewPassages'
import { continuedTextExpansionPassages } from './continuedTextExpansionPassages'
import { expandedTextualPassages } from './expandedTextualPassages'
import { famousWorksCloseReadings } from './famousWorksCloseReadings'
import { literaryExpansionPassages } from './literaryExpansionPassages'
import { rousseauThoughtPassages } from './rousseauThoughtPassages'
import { textualDeepeningPassages } from './textualDeepeningPassages'

export const passages: Passage[] = [
  {
    id: 'opening-problem',
    chapter: '第一卷 第一章',
    title: '人生而自由，却处处在枷锁之中',
    theme: '自由与依附',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre I, Chapitre I',
    keyTerms: ['自由', '枷锁', '合法秩序'],
    translation:
      '人是生而自由的，可他到处都被束缚着。自以为是他人的主人者，反而比他人更是奴隶。这个变化是怎样发生的？我不知道。它怎样才能成为合法的？我相信自己能够回答。若只考虑强力以及由强力造成的结果，我会说：当一个民族被迫服从而且服从时，它做得对；一旦它能够挣脱束缚而且挣脱时，它做得更对。因为人民凭同一权利恢复自由，这权利不是被夺走，就是从未被让渡。',
    guide:
      '卢梭并不是从一个抽象定义开始，而是从一个刺眼的矛盾开始：自由似乎是人的原初状态，社会却把人纳入依附关系。他真正要追问的不是“人为什么被统治”，而是“什么样的共同秩序才配让自由人服从”。这也是全书的入口：合法性不能从暴力中来，只能从自由人共同形成的约定中来。',
    questions: [
      '如果一个秩序很有效，但它来自强迫，这种秩序能被称作合法的吗？',
      '“枷锁”在今天可能表现为什么：法律、资本、舆论、平台，还是人的欲望？',
    ],
  },
  {
    id: 'force-right',
    chapter: '第一卷 第三章',
    title: '最强者也不会永远强到足以做主人',
    theme: '强力不产生权利',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre I, Chapitre III',
    keyTerms: ['强力', '权利', '服从'],
    translation:
      '最强者也不会永远强到足以总是做主人，除非他把强力转化为权利，把服从转化为义务。于是便有了所谓强者的权利。这个说法表面像是在讽刺，实际上却被当作原则来解释。可是强力只是一种物理力量，我看不出它的效果能产生什么道德义务。向强力屈服是一种必要行为，不是一种意志行为；它至多是谨慎，而绝不是责任。',
    guide:
      '这一段把“事实上的支配”和“应当服从的理由”分开。卢梭提醒我们，一个人被迫低头，不等于他承认对方有权命令。政治哲学的问题常常藏在这个差异里：现实能够解释人为什么顺从，却不能自动证明顺从是正当的。',
    questions: [
      '在什么情况下，人们会把“不得不服从”误认为“应当服从”？',
      '如果权利不能从强力中产生，它应当从哪里产生？',
    ],
  },
  {
    id: 'social-pact',
    chapter: '第一卷 第六章',
    title: '找到一种结合形式',
    theme: '社会契约',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre I, Chapitre VI',
    keyTerms: ['契约', '共同力量', '个人自由'],
    translation:
      '要找到一种结合形式，它以全部共同力量保护每个成员的人身和财产；在这种结合中，每个人虽然和所有人联合，却仍然只服从自己，并且像从前一样自由。这就是社会契约所要解决的根本问题。契约的条款也许从未被正式说出，却处处相同，处处被默默承认；一旦社会契约遭到破坏，每个人便恢复原来的权利，重新取得他曾让渡出去的自然自由。',
    guide:
      '这里是全书最关键的公式。卢梭并不把社会看成个人自由的简单牺牲，而是试图构造一种奇特的联合：个人把自己交给共同体，却不是交给某个私人主人。难点也正在这里：共同体怎样既代表所有人，又不吞没每个人？',
    questions: [
      '“只服从自己”在共同体中是否真的可能？',
      '个人把权利交给共同体，与把权利交给某个统治者有什么根本区别？',
    ],
  },
  {
    id: 'total-alienation',
    chapter: '第一卷 第六章',
    title: '每个人把自己全部交给全体',
    theme: '让渡与平等',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre I, Chapitre VI',
    keyTerms: ['全部让渡', '平等条件', '共同体'],
    translation:
      '这些条款归结起来只有一条：每个成员把自己和自己的全部权利完全让渡给整个共同体。因为每个人都完全让渡，所以条件对所有人都是一样的；而条件既然对所有人一样，就没有人有兴趣使条件成为他人的负担。并且，因为让渡是毫无保留的，联合也就达到可能有的最完整程度；没有任何成员还保留某种可以与公共权利相抗衡的私人权利。',
    guide:
      '“全部让渡”听起来危险，但卢梭的逻辑是：若有人保留特权，契约就不平等；若让渡对象是某个人，契约就变成奴役。只有当每个人都交给“全体”，并且每个人都是全体的一部分时，让渡才可能转化为平等。这里也是卢梭最容易被误解、最值得争论的地方。',
    questions: [
      '“完全让渡”是自由的条件，还是自由的风险？',
      '如果共同体本身犯错，个人是否还应当无保留服从？',
    ],
  },
  {
    id: 'general-will',
    chapter: '第二卷 第三章',
    title: '公意总是趋向公共利益',
    theme: '公意',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre II, Chapitre III',
    keyTerms: ['公意', '众意', '公共利益'],
    translation:
      '公意总是正直的，并且总是趋向公共利益；但这并不意味着人民的判断总是同样明智。人民总是愿意自己的好处，却并不总能看见它。人们从不腐化人民本身，但常常欺骗人民，于是人民似乎愿意坏的东西。众意和公意之间常有很大差别：公意只着眼于共同利益，众意则着眼于私人利益，不过是许多个别意志的总和。',
    guide:
      '卢梭区分了“大家加起来想要什么”和“作为共同体我们应当要什么”。这并不是简单反多数，而是在提醒我们：投票结果可能只是私利的相加，公共判断则需要把自己从私人位置中稍稍拔出来。现代民主中的民粹、舆论动员和算法推荐，都可以从这里重新进入讨论。',
    questions: [
      '多数人的意见什么时候只是“众意”，而不是“公意”？',
      '谁有资格说自己看见了公共利益？这种资格会不会变成新的专断？',
    ],
  },
  {
    id: 'lawgiver',
    chapter: '第二卷 第七章',
    title: '立法者既要看见人，也要改变人',
    theme: '立法者',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre II, Chapitre VII',
    keyTerms: ['立法者', '制度', '人民教育'],
    translation:
      '为了发现最适合各民族的社会规则，需要一种卓越的智慧：它看见人的一切激情，却不受任何激情支配；它同我们的本性没有关系，却对本性有透彻认识；它的幸福不依附于我们，却愿意关怀我们的幸福。立法者仿佛要改变人的构成，增强人的力量，把一个孤立而完整的整体转化为更大的整体的一部分。',
    guide:
      '卢梭笔下的立法者不是普通行政官，而像制度的创始者。他要理解人的弱点，也要塑造公共生活的习惯。这个设想很有魅力，也很危险：如果制度真的能塑造人，那么谁来限制塑造者？',
    questions: [
      '好的制度应当顺应人的本性，还是改造人的本性？',
      '立法者的“卓越智慧”如何避免变成精英对人民的替代？',
    ],
  },
  {
    id: 'civil-liberty',
    chapter: '第一卷 第八章',
    title: '从自然自由到公民自由',
    theme: '公民自由',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre I, Chapitre VIII',
    keyTerms: ['自然自由', '公民自由', '道德自由'],
    translation:
      '人因社会契约失去的是自然自由，以及对一切诱惑他、且他能够取得之物的无限权利；他得到的是公民自由，以及他所拥有之物的所有权。为了不在这些补偿中弄错，还必须把自然自由和公民自由区分开：自然自由只以个人力量为界限，公民自由则受公意限制。还应再加上道德自由；只有道德自由才使人成为自己的主人，因为仅受欲望冲动支配乃是奴役，服从自己为自己规定的法律才是自由。',
    guide:
      '这一段显示卢梭并不只是怀念自然状态。他关心的是一种更高层次的自由：不是“想做什么就做什么”，而是能把自己从冲动中组织起来，按照自己认可的法则生活。这使他的自由观接近一种自律伦理，也解释了为什么康德会认真读他。',
    questions: [
      '“服从自己规定的法律”听起来矛盾吗？',
      '现代人的自由更像自然自由、公民自由，还是道德自由？',
    ],
  },
  {
    id: 'sovereignty',
    chapter: '第二卷 第一章',
    title: '主权不可转让',
    theme: '人民主权',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre II, Chapitre I',
    keyTerms: ['主权', '代表', '公共人格'],
    translation:
      '主权既然只是公意的运用，就永远不能转让；主权者既然只是一个集合体，也只能由它自己来代表。权力可以被移交，意志却不能被移交。私人意志也许在某一点上和公意一致，但这种一致既不会持久，也不可靠。私人意志按照本性趋向偏私，公意则趋向平等。',
    guide:
      '卢梭对代表制始终保持警惕。他认为行政权可以委托，但作为共同体的意志不能被别人替你拥有。这里的张力非常现代：大型社会离不开代表和专业治理，但如果人民只在授权那一刻出现，主权是否已经悄悄空心化？',
    questions: [
      '在现代国家中，“主权不可代表”是否现实？',
      '我们如何区分授权治理和放弃公共意志？',
    ],
  },
  {
    id: 'civic-religion',
    chapter: '第四卷 第八章',
    title: '公共纽带也需要情感形式',
    theme: '公民宗教',
    source: 'Jean-Jacques Rousseau, Du contrat social, 1762',
    sourceUrl: 'https://fr.wikisource.org/wiki/Du_contrat_social',
    originalRef: 'Livre IV, Chapitre VIII',
    keyTerms: ['公民宗教', '共同情感', '宽容'],
    translation:
      '国家并不关心臣民的意见，除非这些意见影响共同体。每个人可以有自己愿意有的信仰，但作为公民，他也需要承认某些维系公共生活的情感：法律的神圣、社会契约的神圣、对同胞的责任，以及对不宽容的排斥。谁说“在我的信仰之外便没有得救”，就应当被国家驱逐；因为这不是神学问题，而是社会问题。',
    guide:
      '这一章常让读者不安，因为它触及政治共同体与信念生活的边界。卢梭想解决的是：一个共同体是否需要最低限度的公共情感？他的答案是需要，但这种需要一旦过度，就可能变成思想管制。现代社会仍绕不开这个问题，只是词汇换成了价值共识、宪法爱国主义或公共伦理。',
    questions: [
      '共同体是否需要共享的情感和信念？最低限度在哪里？',
      '宽容能否容忍不宽容？',
    ],
  },
  ...additionalPassages,
  ...rousseauThoughtPassages,
  ...famousWorksCloseReadings,
  ...textualDeepeningPassages,
  ...expandedTextualPassages,
  ...literaryExpansionPassages,
  ...continuedTextExpansionPassages,
  ...bookOverviewPassages,
]

export const passageCount = passages.length
