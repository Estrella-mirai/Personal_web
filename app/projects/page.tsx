import Link from 'next/link';
import { resumeProjects } from '@/lib/site-data';

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="返回首页">
          LY
        </Link>
        <nav className="nav" aria-label="主导航">
          <Link href="/">首页</Link>
          <Link href="/timeline">时间线</Link>
          <Link href="/projects">项目</Link>
          <Link href="/docs">文档</Link>
        </nav>
      </header>

      <section className="section-header-block">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">计算机项目与简历入口</h1>
        <p className="lead">
          这一页专门放计算机相关项目，面向找工作和投递简历，强调技术栈、产出和可讲述性。
        </p>
      </section>

      <section className="project-page-grid">
        {resumeProjects.map((project) => (
          <article className="project-card project-card-large" key={project.title}>
            <span className="project-index">简历项目</span>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <p className="project-highlight">{project.highlight}</p>
            <div className="tag-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section-block callout-link">
        <Link className="button button-primary" href="/blog">
          顺便看看文章归档
        </Link>
        <Link className="button button-secondary" href="/docs">
          打开文档中心
        </Link>
        <Link className="button button-secondary" href="/timeline">
          回到时间线
        </Link>
      </section>
    </main>
  );
}
