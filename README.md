# Personal Web

这是一个基于 Next.js 15、React 19 和 TypeScript 的完整个人站模板，已经包含主页、主线时间线、人物属性气泡、计算机项目页、站内文章页和在线文档中心。

## 功能结构

- 首页：总入口，汇总时间线、画像、项目、文章和联系方式
- 时间线页：主线任务直线展示，支线任务展示兴趣与长期习惯
- 个人属性页签：用气泡图呈现专业、性格、三观、成就等信息
- 项目页：专门给找工作简历用的计算机项目板块
- 文章页：站内文章列表与文章详情
- 文档中心：适合 GitHub Pages、微信公众号和站内归档互相导流

## 运行方式

1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`
3. 打开浏览器：`http://localhost:3000`
4. 生产构建：`npm run build`

## 主要路由

- `/`：首页总览
- `/timeline`：主线与支线时间线
- `/projects`：简历导向的项目页
- `/docs`：GitHub Pages 在线文档中心
- `/blog`：站内文章列表
- `/blog/[slug]`：文章详情页

## 内容组织建议

- 主线任务只放毕业、实习、求职、重要项目这些大事件
- 支线任务放兴趣、爱好、长期习惯、持续积累内容
- 文章尽量保留站内归档页，外部平台负责传播，站内负责沉淀
- 微信公众号、GitHub Pages 和站内文章建议互相链接，形成内容闭环

## 项目结构

- `app/layout.tsx`：全局布局与元信息
- `app/page.tsx`：首页聚合入口
- `app/timeline/page.tsx`：时间线页
- `app/projects/page.tsx`：简历项目页
- `app/docs/page.tsx`：文档中心
- `app/blog/page.tsx`：文章列表
- `app/blog/[slug]/page.tsx`：文章详情
- `components/contact-form.tsx`：联系表单
- `components/bubble-cloud.tsx`：人物属性气泡图
- `lib/site-data.ts`：站点内容数据

## 后续扩展建议

- 接入 MDX 或 CMS，继续扩展文章与文档
- 接入表单后端，把联系表单改成真实提交
- 增加项目详情页和简历下载页
