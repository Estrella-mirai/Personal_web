import Link from 'next/link';
import { BubbleCloud } from '@/components/bubble-cloud';
import { ContactForm } from '@/components/contact-form';
import {
  articleHubLinks,
  articles,
  contactLinks,
  personalityTraits,
  resumeProjects,
  siteHighlights,
  timelineItems,
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="返回首页">
          LY
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#timeline">时间线</a>
          <a href="#profile">画像</a>
          <a href="#projects">项目</a>
          <a href="#docs">文档</a>
          <Link href="/blog">文章</Link>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Engineer · Next.js 15 · React 19 · TypeScript</p>
            <h1>面向求职场景的前端工程师主页。</h1>
            <p className="lead">
              把项目经验、技术栈、成长路径和内容输出整理到同一个入口里，让面试官、招聘方或合作方能在几分钟内快速了解我的能力结构和表达方式。
            </p>

            <div className="hero-summary-grid" aria-label="求职概览">
              <article className="summary-card">
                <span>求职方向</span>
                <strong>前端开发 / 全栈方向拓展</strong>
              </article>
              <article className="summary-card">
                <span>核心能力</span>
                <strong>React 生态、工程化、交互落地</strong>
              </article>
              <article className="summary-card">
                <span>内容结构</span>
                <strong>项目、时间线、文章、联系方式</strong>
              </article>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                查看项目经历
              </a>
              <a className="button button-secondary" href="#timeline">
                查看成长路径
              </a>
              <Link className="button button-secondary" href="/docs">
                技术文档
              </Link>
            </div>
          </div>

          <aside className="hero-aside">
            <p className="hero-note-label">Candidate Snapshot</p>
            <h2>把“能做什么”讲清楚，比堆效果更重要。</h2>
            <p>
              这个首页优先服务招聘场景，先传达技术身份和项目质量，再用时间线、文章和联系入口补足可信度与延展性。
            </p>
            <div className="hero-aside-line" />
            <div className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>状态：可作为在线简历与作品集首页使用</span>
            </div>
            <ul className="hero-points">
              <li>先看项目，再看时间线和技术输出</li>
              <li>信息表达更接近招聘方浏览习惯</li>
              <li>后续可继续接简历下载、项目详情和真实后端</li>
            </ul>
          </aside>
        </div>

        <div className="hero-metrics">
          {siteHighlights.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="about">
        <article className="panel panel-feature">
          <p className="section-kicker">关于我</p>
          <h2>把个人主页做成一个清晰、可信、可投递的工程师入口。</h2>
          <p>
            这个版本不只是在展示内容，而是在模拟招聘方阅读路径。首页负责快速建立判断，内页负责补充项目细节、成长背景和技术思考，适合在投递、面试和自我介绍时直接使用。
          </p>
        </article>

        <article className="panel">
          <p className="section-kicker">当前重点</p>
          <ul className="bullet-list">
            <li>整理项目经历并强化可讲述的问题与方案</li>
            <li>把技术文章和文档沉淀成可验证的输出记录</li>
            <li>持续优化这个站点作为在线简历与作品集入口</li>
          </ul>
        </article>
      </section>

      <section className="section-block" id="timeline">
        <div className="section-heading">
          <p className="section-kicker">时间线</p>
          <h2>用主线经历说明成长速度，用支线兴趣补足个人特质</h2>
        </div>
        <div className="timeline-preview">
          {timelineItems.map((item) => (
            <article className={`timeline-pill timeline-${item.kind}`} key={item.title}>
              <span>{item.date}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="section-link-row">
          <Link className="button button-secondary" href="/timeline">
            打开完整时间线
          </Link>
        </div>
      </section>

      <section className="content-grid" id="profile">
        <article className="panel panel-feature">
          <p className="section-kicker">能力画像</p>
          <h2>把技术方向、合作方式和个人特质放到同一个视图里。</h2>
          <p>
            这一块更适合面试官快速扫读，几秒内就能知道我的方向、优势和工作风格。
          </p>
        </article>
        <article className="panel bubble-panel">
          <BubbleCloud traits={personalityTraits} />
        </article>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <p className="section-kicker">项目</p>
          <h2>优先展示能够支撑简历与面试表达的项目经历</h2>
        </div>
        <div className="project-grid">
          {resumeProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-index">Resume Project</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="project-highlight">{project.highlight}</p>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="section-link-row">
          <Link className="button button-secondary" href="/projects">
            打开简历项目页
          </Link>
        </div>
      </section>

      <section className="section-block" id="articles">
        <div className="section-heading">
          <p className="section-kicker">技术输出</p>
          <h2>用文章和文档证明学习路径、思考方式和工程表达能力</h2>
        </div>
        <div className="article-grid">
          {articles.slice(0, 3).map((article) => (
            <Link className="article-card" key={article.slug} href={`/blog/${article.slug}`}>
              <div className="article-meta">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>
        <div className="article-grid article-hub-grid">
          {articleHubLinks.map((item) => (
            <article className="article-card" key={item.title}>
              <div className="article-meta">
                <span>{item.target === 'external' ? '外部发布' : '站内归档'}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.target === 'internal' ? (
                <Link className="button button-secondary docs-link" href={item.href}>
                  打开站内归档
                </Link>
              ) : (
                <a className="button button-secondary docs-link" href={item.href} target="_blank" rel="noreferrer">
                  打开外部页面
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="section-link-row">
          <Link className="button button-secondary" href="/docs">
            打开文档中心
          </Link>
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <p className="section-kicker">联系</p>
          <h2>如果你想进一步了解项目细节或合作可能，可以直接联系我。</h2>
          <p>
            当前表单会调用默认邮箱客户端，适合作为轻量联系入口。后续也可以继续接入真实服务端提交。
          </p>
        </div>
        <div className="contact-stack">
          <ContactForm />
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="button button-secondary"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
