import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock3, FileText, UserRound } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import ArticleCard from '../components/ArticleCard'
import SEO from '../components/SEO'
import { getAndreArtikler, getArtikkelBySlug } from '../data/artikler'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArtikkelBySlug(slug)

  if (!article) {
    return (
      <section className="section article-index-page">
        <SEO title="Artikkel ikke funnet" noindex />
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
  const articlePath = `/artikler/${article.slug}`
  const ctaConfig =
    article.slug === 'hvilke-arrangementer-passer-partytelt-for'
      ? {
          title: 'Se teltløsninger for de vanligste anledningene',
          text: 'Gå videre til sider som er laget for konfirmasjon, bryllup og andre arrangementer utendørs.',
          primary: { to: '/partytelt-konfirmasjon', label: 'Partytelt til konfirmasjon' },
          secondary: { to: '/partytelt-bryllup', label: 'Partytelt til bryllup' },
        }
      : article.slug === 'montering-og-sikring-av-partytelt'
        ? {
            title: 'Se partytelt og få hjelp til riktig oppsett',
            text: 'Sammenlign teltstørrelser og ta kontakt hvis du vil avklare levering, montering eller plassering.',
            primary: { to: '/partytelt', label: 'Se partytelt' },
            secondary: { to: '/kontakt', label: 'Ta kontakt' },
          }
        : {
            title: 'Klar for å finne riktig partytelt?',
            text: 'Se størrelser, kapasitet og veien videre til prisestimat eller kontakt.',
            primary: { to: '/partytelt', label: 'Se partytelt' },
            secondary: { to: '/hvor-stort-partytelt', label: 'Se teltguiden' },
          }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Forside',
        item: '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Artikler',
        item: '/artikler',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articlePath,
      },
    ],
  }
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: 'no',
    mainEntityOfPage: articlePath,
  }

  return (
    <section className="section article-page">
      <SEO 
        title={article.seoTitle || article.title}
        description={article.excerpt}
        ogImage={article.image}
        ogType="article"
        path={articlePath}
        jsonLd={[breadcrumbJsonLd, articleJsonLd]}
      />
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

            <div className="article-cta-box" style={{ marginTop: '48px', padding: '32px', background: 'var(--cream-light)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '12px' }}>{ctaConfig.title}</h3>
              <p style={{ marginBottom: '24px' }}>{ctaConfig.text}</p>
              <div className="button-row button-row-center">
                <Link to={ctaConfig.primary.to} className="btn btn-primary">
                  {ctaConfig.primary.label}
                </Link>
                <Link to={ctaConfig.secondary.to} className="btn btn-secondary">
                  {ctaConfig.secondary.label}
                </Link>
              </div>
            </div>
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
