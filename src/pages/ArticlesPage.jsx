import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'
import Eyebrow from '../components/Eyebrow'
import Kontakt from '../components/Kontakt'
import Leieprosess from '../components/Leieprosess'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import { getSortedArtikler } from '../data/artikler'
import SEO from '../components/SEO'

export default function ArticlesPage() {
  const posts = getSortedArtikler()

  return (
    <>
      <SEO 
        title="Artikler og inspirasjon til din feiring"
        description="Les våre artikler om valg av partytelt, montering, planlegging av hagefest og mye mer. Få tipsene du trenger for et vellykket arrangement."
      />
      <section className="section article-index-page">
        <div className="container">
          <div className="page-breadcrumbs">
            <Link to="/">Forside</Link>
            <span>/</span>
            <strong>Artikler</strong>
          </div>

          <div className="section-header section-header-lg section-header-centered">
            <Eyebrow icon={FileText}>Artikler</Eyebrow>
            <h1 className="section-title">Blogg og guider fra Din Feiring</h1>
            <p className="section-subtitle section-subtitle-centered">
              Her finner du korte og praktiske artikler om valg av partytelt, montering og hvilke arrangementer telt
              passer godt til.
            </p>
          </div>

          <div className="article-grid">
            {posts.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <Leieprosess />
      <Kontakt homeTone />
    </>
  )
}
