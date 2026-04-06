import { Link } from 'react-router-dom'
import { Clock3, UserRound } from 'lucide-react'

export default function ArticleCard({ article }) {
  return (
    <article className="article-card card">
      <Link to={`/artikler/${article.slug}`} className="article-card-link">
        <div className="article-card-media">
          <img src={article.image} alt={article.imageAlt} loading="lazy" decoding="async" />
        </div>

        <div className="article-card-body">
          <div className="article-card-meta">
            <span className="article-card-category">{article.category}</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="article-card-title">{article.title}</h3>
          <p className="article-card-excerpt">{article.excerpt}</p>

          <div className="article-card-footer">
            <span className="article-card-byline">
              <UserRound size={14} />
              {article.author}
            </span>
            <time className="article-card-byline" dateTime={article.publishedAt}>
              <Clock3 size={14} />
              {article.publishedLabel}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
}
