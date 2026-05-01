import Link from 'next/link';
import { articleHubLinks } from '@/lib/site-data';

export default function DocsPage() {
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
        <p className="eyebrow">Docs</p>
        <h1 className="page-title">GitHub Pages 文章与在线文档</h1>
        <p className="lead">
          这里作为你的内容中心。建议把 GitHub Pages、微信公众号和站内归档都连到这一层，再从这里互相回链。
        </p>
      </section>

      <section className="article-list">
        {articleHubLinks.map((item) => (
          <article className="article-card" key={item.title}>
            <div className="article-meta">
              <span>{item.target === 'external' ? '外部发布' : '站内归档'}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.target === 'external' ? (
              <a className="button button-secondary docs-link" href={item.href} target="_blank" rel="noreferrer">
                打开内容
              </a>
            ) : (
              <Link className="button button-secondary docs-link" href={item.href}>
                打开内容
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="panel docs-note">
        <p className="section-kicker">链接策略</p>
        <p>
          建议所有内容都保留一个“站内归档页”，外部平台负责传播，站内负责沉淀。每篇文章最好互相带上一条返回归档、上一篇/下一篇和相关项目链接，这样搜索和转化都更稳。
        </p>
      </section>
    </main>
  );
}
