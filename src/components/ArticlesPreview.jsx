import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import Eyebrow from './Eyebrow'
import ArticleCard from './ArticleCard'
import { getSortedArtikler } from '../data/artikler'

export default function ArticlesPreview() {
  const posts = getSortedArtikler().slice(0, 3)

  return (
    <section className="section articles-preview-section">
      <div className="container">
        <div className="articles-preview-top">
          <div className="section-header section-header-sm articles-preview-header">
            <Eyebrow icon={FileText}>Artikler</Eyebrow>
            <h2 className="section-title">
              Tips og inspirasjon
              <br />
              før du planlegger
            </h2>
            <p className="section-subtitle articles-preview-subtitle">
              Tre korte artikler som gjør det lettere å velge telt, planlegge oppsett og finne ut hva som passer til
              arrangementet ditt.
            </p>
            <Link to="/artikler" className="text-link articles-preview-link">
              Se alle artikler
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="article-grid articles-preview-grid">
          {posts.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
