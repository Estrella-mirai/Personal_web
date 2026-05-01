import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/site-data';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="返回首页">
          LY
        </Link>
        <nav className="nav" aria-label="主导航">
          <Link href="/">首页</Link>
          <Link href="/blog">文章</Link>
          <Link href="/#contact">联系</Link>
        </nav>
      </header>

      <article className="article-detail panel">
        <p className="section-kicker">{article.category}</p>
        <h1 className="page-title">{article.title}</h1>
        <div className="article-meta article-meta-detail">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        {article.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="article-actions">
          <Link className="button button-secondary" href="/blog">
            返回文章列表
          </Link>
          <Link className="button button-secondary" href="/docs">
            文档中心
          </Link>
          <Link className="button button-primary" href="/#contact">
            联系我
          </Link>
        </div>
      </article>
    </main>
  );
}
