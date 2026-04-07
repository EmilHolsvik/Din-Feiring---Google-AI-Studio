import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatPriceFrom } from '../data/produkter'

export default function ProduktKort({ product, showBadge = true }) {
  const productHref = `/produkter/${product.id}`

  return (
    <article className="product-card surface-card">
      <Link to={productHref} className="product-card-link" aria-label={`Se detaljer for ${product.navn}`}>
        <div className="product-card-media">
          <img
            src={product.bilde}
            alt={product.imageAlt || product.navn}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 360px"
          />
          {showBadge ? <span className="product-badge">{product.badge}</span> : null}
        </div>

        <div className="product-card-body">
          <div className="product-card-meta">
            <span>{product.kategori}</span>
            <span>{formatPriceFrom(product)}</span>
          </div>

          <div className="stack-sm">
            <h3 className="product-card-title">{product.navn}</h3>
            <p className="product-card-copy">{product.kortBeskrivelse}</p>
          </div>

          <p className="product-card-note">{product.montering}</p>

          <div className="product-card-actions" aria-hidden="true">
            <span className="text-link">
              Se detaljer
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
