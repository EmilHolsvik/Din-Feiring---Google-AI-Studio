import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock3, FileText, UserRound } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import ArticleCard from '../components/ArticleCard'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { getAndreArtikler, getArtikkelBySlug } from '../data/artikler'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArtikkelBySlug(slug)

  useDocumentTitle(article ? `${article.title} | Din Feiring` : 'Artikkel ikke funnet | Din Feiring')

  if (!article) {
    return (
      <section className="section article-index-page">
        <div className="container narrow-container">
          <div className="page-breadcrumbs">
            <Link to="/">Forside</Link>
            <span>/</span>
            <Link to="/artikler">Artikler</Link>
            <span>/</span>
            <strong>Fant ikke artikkelen</strong>
          </div>

          <div className="surface-card centered-card">
            <h1 className="section-title compact-title">Artikkelen ble ikke funnet</h1>
            <p className="section-copy">Lenken er kanskje gammel, eller så er artikkelen flyttet.</p>
            <div className="button-row button-row-center" style={{ marginTop: '24px' }}>
              <Link to="/artikler" className="btn btn-primary">
                Tilbake til artikler
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const relatedArticles = getAndreArtikler(article.slug, 2)

  return (
    <section className="section article-page">
      <div className="container narrow-container">
        <div className="page-breadcrumbs">
          <Link to="/">Forside</Link>
          <span>/</span>
          <Link to="/artikler">Artikler</Link>
          <span>/</span>
          <strong>{article.title}</strong>
        </div>

        <article className="article-shell">
          <header className="article-header">
            <Eyebrow icon={FileText}>{article.category}</Eyebrow>
            <h1 className="section-title">{article.title}</h1>
            <p className="section-subtitle">{article.excerpt}</p>

            <div className="article-meta-row">
              <span className="article-meta-pill">
                <UserRound size={15} />
                Skrevet av {article.author}
              </span>
              <time className="article-meta-pill" dateTime={article.publishedAt}>
                <Clock3 size={15} />
                Publisert {article.publishedLabel}
              </time>
              <span className="article-meta-pill">{article.readTime}</span>
            </div>
          </header>

          <div className="article-cover">
            <img src={article.image} alt={article.imageAlt} referrerPolicy="no-referrer" />
          </div>

          <div className="article-body">
            <p className="article-lead">{article.intro}</p>

            {article.sections.map((section) => (
              <section key={section.title} className="article-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-section">
              <h2>Oppsummert</h2>
              <p>{article.conclusion}</p>
            </section>
          </div>
        </article>

        <div className="article-footer-actions">
          <Link to="/artikler" className="text-link">
            <ArrowLeft size={16} />
            Tilbake til artikler
          </Link>
        </div>

        {relatedArticles.length > 0 ? (
          <div className="article-related-section">
            <div className="between-row" style={{ marginBottom: '20px' }}>
              <h2 className="section-title" style={{ fontSize: '30px', marginBottom: 0 }}>
                Les også
              </h2>
              <Link to="/artikler" className="text-link">
                Se alle artikler
              </Link>
            </div>

            <div className="article-grid article-grid-related">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
