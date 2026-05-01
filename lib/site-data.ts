export const siteHighlights = [
  { value: 'Next 15', label: 'App Router' },
  { value: 'React 19', label: '并发渲染基础' },
  { value: 'TS', label: '可维护类型体系' },
] as const;

export const featuredProjects = [
  {
    index: '01',
    title: '个人博客平台',
    description: '支持文章、标签和归档页，适合作为内容输出的核心阵地。',
    tags: ['MDX', 'SEO', '动态路由'],
  },
  {
    index: '02',
    title: '作品集系统',
    description: '把项目、案例和视觉作品统一到同一个信息架构里。',
    tags: ['组件化', '卡片布局', '响应式'],
  },
  {
    index: '03',
    title: '轻量工具站',
    description: '围绕效率、收藏和日常需求，持续加入可复用的小工具。',
    tags: ['API', '表单', '扩展性'],
  },
] as const;

export const sitePrinciples = [
  {
    title: '内容数据化',
    description: '先把首页内容从组件里拆出去，后面接 JSON、CMS 或数据库都更顺。',
  },
  {
    title: '路由可扩展',
    description: '下一步可以直接增加 /blog、/projects、/about 等页面。',
  },
  {
    title: '样式可控',
    description: '使用全局 CSS 变量管理主题，不会被 UI 库锁死。',
  },
] as const;

export const contactLinks = [
  { label: 'Email', href: 'mailto:hello@example.com', external: false },
  { label: 'GitHub', href: 'https://github.com/', external: true },
  { label: 'X / Twitter', href: 'https://x.com/', external: true },
] as const;

export const timelineItems = [
  {
    title: '毕业',
    date: '主线 · 2026',
    kind: 'main',
    description: '个人成长的核心大事件，用来串联求职、作品和阶段性成果。',
  },
  {
    title: '第一份实习 / 项目经历',
    date: '主线 · 2025',
    kind: 'main',
    description: '真实产出和协作经验，直接对应简历里的可讲述内容。',
  },
  {
    title: '摄影',
    date: '支线 · 长期兴趣',
    kind: 'side',
    description: '从观察光影和构图开始，补充审美和叙事表达。',
  },
  {
    title: '运动与跑步',
    date: '支线 · 2024 起',
    kind: 'side',
    description: '稳定的生活节奏，也可以作为长周期目标管理的示例。',
  },
] as const;

export const personalityTraits = [
  { label: '专业', value: '前端开发 / 交互实现' },
  { label: '性格', value: '稳重、执行力强、愿意持续迭代' },
  { label: '三观', value: '重视长期价值、协作和自我驱动' },
  { label: '成就', value: '完成多个可上线项目与总结输出' },
  { label: '兴趣', value: '摄影、阅读、运动、独立站点搭建' },
  { label: '标签', value: '简历导向 / 内容表达 / 产品意识' },
] as const;

export const resumeProjects = [
  {
    title: '个人作品集系统',
    summary: '把项目、能力、博客与联系入口集中到一个可投递的站点。',
    stack: ['Next.js', 'TypeScript', 'App Router'],
    highlight: '面试时可直接作为线上简历入口。',
  },
  {
    title: '在线文档中心',
    summary: '用于发布技术笔记、总结文章和可公开访问的 GitHub Pages 文档。',
    stack: ['MDX', '静态生成', 'SEO'],
    highlight: '适合沉淀知识和对外分享。',
  },
  {
    title: '业务型小工具',
    summary: '围绕效率、整理和内容管理，扩展可复用的工具模块。',
    stack: ['React', 'API', '组件化'],
    highlight: '体现工程化能力和交付速度。',
  },
] as const;

export const articleHubLinks = [
  {
    title: 'GitHub Pages 技术文章',
    description: '适合放长期公开文章、教程和在线文档。',
    href: 'https://your-name.github.io/',
    target: 'external',
  },
  {
    title: '微信公众号文章',
    description: '适合传播型内容，但建议回链到站内归档页。',
    href: 'https://mp.weixin.qq.com/',
    target: 'external',
  },
  {
    title: '站内文章归档',
    description: '作为你的长期内容中心，统一承接外部内容回流。',
    href: '/blog',
    target: 'internal',
  },
] as const;

export const articles = [
  {
    slug: 'building-a-personal-site',
    title: '从零搭建一个可持续演进的个人站',
    description: '记录我如何用 Next.js、TypeScript 和数据分层把个人主页做成长期项目。',
    date: '2026-05-01',
    readTime: '6 分钟',
    category: '搭建记录',
    content: [
      '个人站最重要的不是一开始做得多复杂，而是后面能不能持续更新。',
      '我现在更倾向于先把内容模型、路由结构和组件边界搭好，再逐步增加文章、项目和联系入口。',
      '这样后续无论是接 MDX、CMS、数据库还是后台管理，都不会推翻重来。',
    ],
  },
  {
    slug: 'frontend-stack-2026',
    title: '我会怎么选 2026 年的前端技术栈',
    description: '围绕 App Router、Server Components、类型体系和样式组织的选择思路。',
    date: '2026-04-18',
    readTime: '5 分钟',
    category: '技术思考',
    content: [
      '主流栈不是越多越好，而是要尽量少引入和业务无关的复杂度。',
      '如果是个人站或内容站，我会优先用 Next.js、TypeScript 和清晰的数据层。',
      '等内容和需求稳定后，再逐步考虑数据库、搜索、分析和自动化工作流。',
    ],
  },
  {
    slug: 'content-and-design',
    title: '内容和设计如何一起决定个人站的质感',
    description: '信息层级、留白、字体和色彩系统如何影响网站的第一印象。',
    date: '2026-03-30',
    readTime: '4 分钟',
    category: '设计方法',
    content: [
      '好看的个人站通常不是靠装饰，而是靠明确的信息组织。',
      '标题、描述、按钮和文章列表要形成稳定的阅读节奏，访问者才会停留。',
      '我更喜欢克制但有方向的视觉，这样后面加内容时依然清晰。',
    ],
  },
] as const;
