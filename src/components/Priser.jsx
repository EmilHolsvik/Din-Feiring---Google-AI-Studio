import { Link } from 'react-router-dom'
import { ArrowRight, BadgePercent } from 'lucide-react'
import Eyebrow from './Eyebrow'
import { alleProdukter, productCategories, formatCurrency, priceNotes } from '../data/produkter'

const grouped = productCategories.map((cat) => ({
  ...cat,
  produkter: alleProdukter.filter((p) => p.kategoriId === cat.id),
}))

export default function Priser() {
  return (
    <section id="priser" className="section">
      <div className="container price-container">
        <div className="price-intro-shell">
          <div className="price-intro-head">
            <Eyebrow icon={BadgePercent} className="badge badge-spaced price-badge">
              Prisliste
            </Eyebrow>
            <h2 className="section-title price-header-title">Våre priser</h2>
            <p className="price-intro-subtitle">
              Her ser du priser per produkt og leieperiode. Prislisten viser leie av utstyret, mens totalprisen kommer an
              på hva du trenger. Finn riktig nivå først, og send oss en forespørsel når du vil ha et samlet tilbud.
            </p>

            <ul className="price-notes-list price-notes-list-inline" aria-label="Greit å vite">
              {priceNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <div className="price-notes-actions price-notes-actions-centered">
              <Link to="/kontakt" className="btn btn-secondary">
                Be om tilbud
              </Link>
            </div>
          </div>
        </div>

        <div className="price-sections">
          {grouped.map((kategori) => (
            <article key={kategori.id} className="price-section-card">
              <div className="price-section-head">
                <div>
                  <h3 className="price-section-title">{kategori.name}</h3>
                  <p className="price-section-copy">{kategori.summary}</p>
                </div>
              </div>

              <div className="price-sheet">
                <div className="price-sheet-header">
                  <span>Produkt</span>
                  <span>Døgn</span>
                  <span>Helg</span>
                  <span>Uke</span>
                  <span>Detaljer</span>
                </div>

                {kategori.produkter.map((produkt) => (
                  <div key={produkt.id} className="price-sheet-row">
                    <div className="price-sheet-product">
                      <Link to={`/produkter/${produkt.id}`} className="price-sheet-product-link">
                        {produkt.navn}
                      </Link>
                      <div className="price-sheet-detail-line">
                        <span className="price-sheet-badge">{produkt.badge}</span>
                        <span>{produkt.kapasitetKort ?? produkt.kapasitet}</span>
                      </div>
                    </div>

                    <div className="price-sheet-value">
                      <span>Døgn</span>
                      <strong>{formatCurrency(produkt.priser.dogn)}</strong>
                    </div>
                    <div className="price-sheet-value">
                      <span>Helg</span>
                      <strong>{formatCurrency(produkt.priser.helg)}</strong>
                    </div>
                    <div className="price-sheet-value">
                      <span>Uke</span>
                      <strong>{formatCurrency(produkt.priser.uke)}</strong>
                    </div>

                    <Link to={`/produkter/${produkt.id}`} className="price-sheet-link">
                      Se detaljer
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
