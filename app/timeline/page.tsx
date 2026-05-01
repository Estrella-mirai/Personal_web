import Link from 'next/link';
import { timelineItems } from '@/lib/site-data';

export default function TimelinePage() {
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
        <p className="eyebrow">Timeline</p>
        <h1 className="page-title">主线任务与支线兴趣</h1>
        <p className="lead">
          主线任务用来承载毕业、实习、求职和大事件；支线任务用来承载兴趣、习惯和长期积累。
        </p>
      </section>

      <section className="timeline-page">
        {timelineItems.map((item) => (
          <article className={`timeline-item timeline-${item.kind}`} key={item.title}>
            <span className="timeline-marker" />
            <div>
              <p className="section-kicker">{item.date}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section-block callout-link">
        <Link className="button button-primary" href="/projects">
          看简历项目页
        </Link>
        <Link className="button button-secondary" href="/docs">
          看文档中心
        </Link>
      </section>
    </main>
  );
}
