import Link from 'next/link';
import { articles } from '@/lib/site-data';

export default function BlogPage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="返回首页">
          LY
        </Link>
        <nav className="nav" aria-label="主导航">
          <Link href="/">首页</Link>
          <Link href="/#about">关于</Link>
          <Link href="/blog">文章</Link>
          <Link href="/#contact">联系</Link>
        </nav>
      </header>

      <section className="section-header-block">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">文章列表</h1>
        <p className="lead">
          这里可以放技术总结、搭建记录和内容输出。后续接 MDX、CMS 或数据库时，结构已经准备好了。
        </p>
      </section>

      <section className="article-list">
        {articles.map((article) => (
          <Link className="article-card" key={article.slug} href={`/blog/${article.slug}`}>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        ))}
      </section>

      <section className="section-block callout-link">
        <Link className="button button-primary" href="/docs">
          看 GitHub Pages 文档中心
        </Link>
        <Link className="button button-secondary" href="/projects">
          看简历项目页
        </Link>
      </section>
    </main>
  );
}
