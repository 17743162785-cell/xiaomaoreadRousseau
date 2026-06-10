import type { CloseReadingNote } from '../types'

const further = (body: string): CloseReadingNote[] => [
  {
    title: '进一步追问',
    body,
  },
]

export const additionalFurtherReadings: Record<string, CloseReadingNote[]> = {
  'slavery-renunciation': further(
    '这一章可以和现代劳动、债务、平台依赖一起读：当人的选择被生存压力逼到只剩一个选项时，形式上的自愿是否足以产生正当性？',
  ),
  'first-occupancy': further(
    '卢梭对财产的判断不是“有或没有”，而是“怎样被公共化”。关键不在占有人是否勤劳，而在共同体如何防止勤劳叙事掩盖过度占有。',
  ),
  'sovereignty-indivisible': further(
    '如果主权不可分割，现代宪政中的分权如何理解？一种读法是：分权分的是执行和制衡技术，不是把公共意志卖给多个私人机关。',
  ),
  'law-generality': further(
    '普遍规则也可能制造结构性不平等。进一步的问题是：当表面上一体适用的法律落在不平等社会条件中，它是否仍能表达公意？',
  ),
  'people-before-laws': further(
    '制度改革常在“人民尚未准备好”和“正因如此才需要改革”之间摇摆。卢梭让这个悖论变得清楚，却没有轻松答案。',
  ),
  'state-scale': further(
    '数字技术似乎能让大规模参与变得容易，但也可能制造更强的操控和情绪动员。技术缩短距离，未必自动恢复公共判断。',
  ),
  'government-body': further(
    '现代行政国家的难题正在这里：政府越专业，人民越依赖它；人民越依赖它，越难判断它是否仍只是中介体。',
  ),
  'democracy-demanding': further(
    '卢梭逼迫我们承认，民主不是只在制度表格中存在，也存在于贫富差距、教育习惯、公共时间和公民是否愿意彼此倾听中。',
  ),
  'elective-aristocracy': further(
    '选任贤能的核心问题不是“要不要专业能力”，而是专业能力如何接受非专业公民的最终授权与持续问责。',
  ),
  'monarchy-danger': further(
    '越是危机时刻，人们越容易偏爱统一意志。卢梭提醒我们，统一意志若缺乏公共来源，效率会迅速滑向私人统治。',
  ),
  'government-degeneration': further(
    '政府蜕化理论让自由成为一项持续维护工作。没有任何制度能一劳永逸地保存主权，只有不断使政府回到受托位置。',
  ),
  'popular-assemblies': further(
    '人民集会的现代对应物不能只是仪式化参与。真正的问题是：参与是否能改变议程，是否能迫使政府解释，是否能让公共判断可见。',
  ),
  'voting-opinion': further(
    '把投票理解为判断，会提高对公共讨论的要求。没有共同事实、没有公共理由、没有免于胁迫的表达，投票就很难承载卢梭意义上的自由。',
  ),
  tribunate: further(
    '护民官显示自由制度需要“能说不”的机构。但能说不的机构若不受边界限制，也会把保护法律变成挟持法律。',
  ),
  dictatorship: further(
    '所有紧急状态都应被问三个问题：任务是什么，期限多长，谁判断危机结束。没有这三点，临时权力就已经在接近永久化。',
  ),
  'censorship-morals': further(
    '卢梭把风俗看得很重，因为他知道法律不能独自统治人的内心。但现代读者必须继续追问：共同价值如何不变成多数对少数的生活审判？',
  ),
}
