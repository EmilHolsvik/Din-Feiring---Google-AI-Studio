import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ClipboardList, MessageCircle, Truck, ShieldCheck, ArrowLeft } from 'lucide-react'
import ProduktKort from '../components/ProduktKort'
import Kontakt from '../components/Kontakt'
import ArticlesPreview from '../components/ArticlesPreview'
import {
  formatCurrency,
  getProductById,
  getRelatedProducts,
} from '../data/produkter'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Produkt() {
  const { id } = useParams()
  const produkt = useMemo(() => getProductById(id), [id])
  const [activeImage, setActiveImage] = useState('')
  const presetItems = useMemo(() => (produkt ? [{ productId: produkt.id, quantity: 1 }] : []), [produkt])
  useDocumentTitle(produkt ? `${produkt.navn} | Din Feiring` : 'Produkt ikke funnet | Din Feiring')

  useEffect(() => {
    if (!produkt) return
    setActiveImage(produkt.galleri?.[0] ?? produkt.bilde)
  }, [produkt])

  if (!produkt) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h2>Produktet ble ikke funnet</h2>
        <Link to="/produkter" className="btn btn-primary" style={{ marginTop: '24px' }}>
          Tilbake til katalogen
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(produkt)
  const gallery = produkt.galleri?.length ? produkt.galleri : [produkt.bilde]
  const selectedImage = activeImage || gallery[0]

  return (
    <div style={{ background: 'var(--cream-light)', minHeight: '100vh' }}>
      <div className="container product-content-wrap" style={{ padding: '36px 24px 0' }}>
        <div className="product-breadcrumbs">
          <Link to="/">Forside</Link>
          <span>/</span>
          <Link to="/produkter">Produkter</Link>
          <span>/</span>
          <strong>{produkt.navn}</strong>
        </div>

        <div className="product-main-grid">
          <div>
            <div
              style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                background: 'white',
                aspectRatio: '4/3',
                marginBottom: '16px',
              }}
            >
              <img
                src={selectedImage}
                alt={produkt.navn}
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            {gallery.length > 1 && (
              <div className="gallery-strip" aria-label="Flere produktbilder">
                {gallery.map((img, idx) => {
                  const isActive = img === selectedImage

                  return (
                    <button
                      key={`${img}-${idx}`}
                      type="button"
                      className={`gallery-thumb ${isActive ? 'gallery-thumb-active' : ''}`}
                      onClick={() => setActiveImage(img)}
                      aria-label={`Vis bilde ${idx + 1} av ${produkt.navn}`}
                      aria-pressed={isActive}
                    >
                      <img
                        src={img}
                        alt={`${produkt.navn} bilde ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isActive ? 1 : 0.72 }}
                        sizes="110px"
                      />
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <div>
            <div
              style={{
                marginBottom: '8px',
                color: 'var(--primary-light)',
                fontWeight: 600,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {produkt.kategori}
            </div>
            <h1 className="heading-elegant product-title" style={{ fontSize: '42px', marginBottom: '16px', color: 'var(--primary)' }}>
              {produkt.navn}
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text)', lineHeight: 1.6, marginBottom: '24px' }}>{produkt.ingress}</p>

            <div className="product-price-list" aria-label="Priser">
              <div className="product-price-item">
                <span>Døgn</span>
                <strong>{formatCurrency(produkt.priser.dogn)}</strong>
              </div>
              <div className="product-price-item">
                <span>Helg</span>
                <strong>{formatCurrency(produkt.priser.helg)}</strong>
              </div>
              <div className="product-price-item">
                <span>Uke</span>
                <strong>{formatCurrency(produkt.priser.uke)}</strong>
              </div>
            </div>

            <div style={{ paddingTop: '28px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '14px', color: 'var(--primary)' }}>Om produktet</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px', fontWeight: 400 }}>{produkt.langBeskrivelse}</p>

              {produkt.kapasitetDetaljer?.length ? (
                <div className="product-capacity-section">
                  <h4 className="product-subtitle product-capacity-title">Plass i teltet</h4>
                  <ul className="product-capacity-list">
                    {produkt.kapasitetDetaljer.map((item) => (
                      <li key={item.label} className="product-capacity-item">
                        <span className="product-capacity-label">{item.label}</span>
                        <span className="product-capacity-value">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                  {produkt.kapasitetNotat ? <p className="product-capacity-note">{produkt.kapasitetNotat}</p> : null}
                </div>
              ) : null}

              <div className="product-feature-grid">
                <div>
                  <h4 className="product-subtitle">Spesifikasjoner</h4>
                  <ul className="product-feature-list">
                    {produkt.spesifikasjoner?.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>

                {produkt.inkludert && produkt.kategoriId !== 'mobler' && (
                  <div>
                    <h4 className="product-subtitle">Dette følger med</h4>
                    <ul className="product-feature-list">
                      {produkt.inkludert.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Kontakt
        eyebrow="Forespørsel"
        eyebrowIcon={ClipboardList}
        title="Send oss en forespørsel"
        subtitle={`Vi har allerede lagt inn ${produkt.navn} i skjemaet, så du kan sende en forespørsel med en gang eller legge til mer utstyr i neste steg.`}
        presetItems={presetItems}
        compactSpacing
        homeTone
        productSpacing
      />

      <ArticlesPreview />

      <div style={{ background: 'white', padding: '60px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <ul className="product-trust-grid" aria-label="Fordeler ved å leie fra Din Feiring">
            <li className="product-trust-item">
              <span className="product-trust-icon" aria-hidden="true">
                <MessageCircle size={26} strokeWidth={1.8} />
              </span>
              <h4 className="product-trust-title">Raskt svar</h4>
              <p className="product-trust-copy">Vi svarer deg så fort vi kan når du sender en forespørsel.</p>
            </li>
            <li className="product-trust-item">
              <span className="product-trust-icon" aria-hidden="true">
                <Truck size={26} strokeWidth={1.8} />
              </span>
              <h4 className="product-trust-title">Henting eller levering</h4>
              <p className="product-trust-copy">Du kan hente selv i Sandefjord, eller avtale levering.</p>
            </li>
            <li className="product-trust-item">
              <span className="product-trust-icon" aria-hidden="true">
                <ShieldCheck size={26} strokeWidth={1.8} />
              </span>
              <h4 className="product-trust-title">Klart til bruk</h4>
              <p className="product-trust-copy">Alt utstyr er rengjort og klargjort før du henter eller får levert.</p>
            </li>
          </ul>

          {related.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <div className="between-row" style={{ marginBottom: '18px' }}>
                <h3 className="section-title" style={{ fontSize: '28px' }}>
                  Passer sammen med
                </h3>
                <Link to="/produkter" className="text-link">
                  Se alle produkter
                </Link>
              </div>
              <div className="product-related-grid">
                {related.map((item) => (
                  <ProduktKort key={item.id} product={item} showBadge={false} />
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '36px' }}>
            <Link to="/produkter" className="text-link">
              <ArrowLeft size={16} />
              Tilbake til katalogen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
