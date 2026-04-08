import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgePercent, ClipboardCheck, MapPin, PackageCheck, Warehouse } from 'lucide-react'
import { heroImages, homeHighlights, priceEstimateLink } from '../data/produkter'

const highlightIcons = {
  price: BadgePercent,
  warehouse: Warehouse,
  bundle: PackageCheck,
  simple: ClipboardCheck,
}

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length <= 1) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="topp" className="hero">
      <div className="container hero-shell">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-location">
              <MapPin size={16} strokeWidth={1.5} />
              Lager i Sandefjord
            </span>

            <h1 className="hero-title">Lei partytelt, bord, stoler og lyd på ett sted</h1>

            <p className="hero-lede">Se priser, størrelser og produkter først. Når du vet litt mer, er det lett å sende en forespørsel.</p>

            <div className="hero-actions" role="group" aria-label="Hovedhandlinger">
              <Link to="/kontakt" className="btn btn-primary">
                Be om tilbud
              </Link>
              <Link to={priceEstimateLink.path} className="btn btn-secondary">
                {priceEstimateLink.ctaLabel}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            {heroImages.map((image, index) => (
              <picture
                key={index}
                className={`hero-picture hero-slide ${index === activeImageIndex ? 'hero-slide-active' : ''}`}
                aria-hidden={index !== activeImageIndex}
              >
                <source srcSet={image.src} type="image/jpeg" />
                <img
                  src={image.src}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  // eslint-disable-next-line react/no-unknown-property
                  fetchpriority={index === 0 ? 'high' : undefined}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </picture>
            ))}
          </div>
        </div>

        <ul className="hero-highlights" aria-label="Fordeler ved å velge Din Feiring">
          {homeHighlights.map((item) => {
            const Icon = highlightIcons[item.icon] ?? PackageCheck
            const isSimpleOrdering = item.title === 'Enkelt å komme i gang'

            return (
              <li key={item.title} className="hero-highlight-card">
                <span className="hero-highlight-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <div className="hero-highlight-content">
                  <h2 className={`hero-highlight-title ${isSimpleOrdering ? 'hero-highlight-title-break' : ''}`}>
                    {isSimpleOrdering ? (
                      <>
                        Enkelt
                        <br />
                        å komme i gang
                      </>
                    ) : (
                      item.title
                    )}
                  </h2>
                  <p className="hero-highlight-copy">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
