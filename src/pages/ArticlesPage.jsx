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
        description="Les artiklene våre om partytelt, oppsett, montering og planlegging. Her finner du korte og praktiske råd før du bestemmer deg."
        path="/artikler"
        ogImage={posts[0]?.image}
        ogImageAlt={posts[0]?.imageAlt}
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
            <h1 className="section-title">Artikler og guider fra Din Feiring</h1>
            <p className="section-subtitle section-subtitle-centered">
              Her finner du korte og praktiske artikler om valg av partytelt, montering og hva som faktisk er lurt å tenke på før du bestemmer deg.
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
