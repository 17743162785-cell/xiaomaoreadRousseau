# 卢梭思想交互式共读网页

一个面向中文读者的卢梭共读网页。项目不把卢梭简化成《社会契约论》或某种革命口号，而是从他的真实生平、出版处境、音乐兴趣、剧场论争、教育思想、自传写作和晚年植物学出发，勾勒更完整的思想面貌。

## 功能

- 典雅阅读器布局：章节导航、文本卡片、关键词、导读问题、评论边栏。
- 可点击作品地图：左侧书籍按钮可筛选正文，覆盖 34 个主要作品、政治方案、书信、剧作、音乐写作、译作和晚年自然研究入口。
- 作品概貌文本：每部作品都有一张概貌卡，先说明年份、类型、问题轴和它在卢梭思想中的位置。
- 中文译本选择：每部作品标注推荐中文译本、选择理由和可对照版本；核心著作优先采用通行经典单行本，冷门作品优先参照商务《卢梭全集》。
- 互动注释：作品面板中的轶事与生平注释可展开阅读，适合后续继续做成讨论点或脚注。
- 分层细读内容：108 段正文，重点扩展《论科学与艺术》《论人类不平等的起源和基础》的逐层细读，并为《新爱洛伊丝》《爱弥儿》《忏悔录》《孤独漫步者的遐想》加入长概括式哲学解读。
- 邮箱 Magic Link 登录：配置 CloudBase 后使用真实邮箱登录；未配置时自动进入本地 mock 演示模式。
- 段落级互动：每段可高亮、查看评论，登录后发表评论。
- 评论管理：用户可编辑/删除自己的评论；管理员邮箱可隐藏、恢复、删除评论。

## 本地运行

```bash
npm install
npm run dev
```

PowerShell 如果遇到 `npm.ps1` 执行策略限制，可使用：

```bash
npm.cmd run dev
```

默认不配置 CloudBase 时会进入 mock 模式，登录表单会直接创建本地演示用户，数据保存在浏览器 `localStorage`。

## CloudBase 配置

复制 `.env.example` 为 `.env.local`，填入：

```bash
VITE_USE_MOCK=false
VITE_CLOUDBASE_ENV_ID=your-env-id
VITE_CLOUDBASE_REGION=ap-shanghai
VITE_ADMIN_EMAILS=admin@example.com,another-admin@example.com
```

CloudBase 控制台需要开启邮箱登录、配置 Web 安全域名与 Magic Link 回跳域名，并准备 `profiles`、`comments`、`comment_likes`、`highlights`、`moderation_logs` 等集合。

## 文本来源

卢梭原作已进入公版。本项目参考法文 Wikisource 公版文本，并使用原创中文译写、概述和导读，不直接复制现代中文译本的大段内容。

中文译本参照原则：

- 《社会契约论》优先参照何兆武译本，兼核李平沤译本。
- 《论人类不平等的起源和基础》优先参照李常山译、东林校本，兼核李平沤译本。
- 《爱弥儿》优先参照李平沤译本。
- 《忏悔录》优先参照范希衡等译本，兼核商务《卢梭全集》。
- 《孤独漫步者的遐想》优先参照袁筱一译本，兼看徐继曾译《漫步遐想录》。
- 书信、音乐、植物学、剧作和政治方案等冷门作品优先参照李平沤主持翻译的商务《卢梭全集》。

主要来源包括 [Wikisource 作者页](https://fr.wikisource.org/wiki/Auteur:Jean-Jacques_Rousseau)、[Du contrat social](https://fr.wikisource.org/wiki/Du_contrat_social)、[Émile](https://fr.wikisource.org/wiki/%C3%89mile%2C_ou_De_l%E2%80%99%C3%A9ducation)、[Julie ou la Nouvelle Héloïse](https://fr.wikisource.org/wiki/Julie_ou_la_Nouvelle_H%C3%A9lo%C3%AFse)、[Les Confessions](https://fr.wikisource.org/wiki/Les_Confessions_(Rousseau)) 和 [Les Rêveries](https://fr.wikisource.org/wiki/Les_R%C3%AAveries_du_promeneur_solitaire/Texte_entier)。

## 验证

```bash
npm run typecheck
npm run test
npm run lint
npm run build
```

构建产物在 `dist/`，可上传到 CloudBase 静态网站托管。
