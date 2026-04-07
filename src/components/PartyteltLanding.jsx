import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarDays, CircleHelp, MapPin, Ruler, Truck } from 'lucide-react'
import Eyebrow from './Eyebrow'
import ProduktKort from './ProduktKort'
import { priceEstimateLink } from '../data/produkter'
import {
  partyteltBenefits,
  partyteltFaq,
  partyteltInternalLinks,
  partyteltProducts,
  partyteltServicePoints,
} from '../data/partyteltPageContent'

const quickFacts = [
  {
    title: 'Sandefjord og Vestfold',
    text: 'Lokal base med utleie til både private feiringer og bedriftsarrangementer.',
    icon: MapPin,
  },
  {
    title: 'Fra små til store oppsett',
    text: 'Du finner flere størrelser, fra kompakte telt til de største løsningene våre.',
    icon: Ruler,
  },
  {
    title: 'Plan B som fungerer',
    text: 'Partytelt gjør det enklere å arrangere ute selv når været er usikkert.',
    icon: CalendarDays,
  },
]

export default function PartyteltLanding() {
  return (
    <article className="section section-alt section-tight">
      <div className="container stack-lg" style={{ gap: '72px' }}>
        <div className="section-header section-header-centered">
          <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
            Partytelt til utleie
          </Eyebrow>
          <h1 className="section-title">Leie partytelt i Sandefjord og Vestfold</h1>
          <p className="section-subtitle section-subtitle-centered">
            Hos Din Feiring kan du leie partytelt i flere størrelser, med tydelige priser og enkel vei videre til
            kontakt, prisestimat og teltguide. Vi hjelper deg med å finne et telt som passer antall gjester, plass og
            type arrangement.
          </p>
          <div className="button-row button-row-center">
            <Link to="/kontakt" className="btn btn-primary">
              Be om tilbud
            </Link>
            <Link to={priceEstimateLink.path} className="btn btn-secondary">
              {priceEstimateLink.ctaLabel}
            </Link>
            <Link to="/hvor-stort-partytelt" className="text-link">
              Se teltguiden
            </Link>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {quickFacts.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="surface-card stack-sm" style={{ padding: '24px' }}>
                <span className="product-trust-icon" aria-hidden="true" style={{ marginBottom: '16px' }}>
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <h3 className="product-card-title">{item.title}</h3>
                <p className="product-card-copy">{item.text}</p>
              </div>
            )
          })}
        </div>

        <section>
          <div className="section-header section-header-centered">
            <Eyebrow icon={Ruler} className="badge badge-spaced">
              Størrelser og priser
            </Eyebrow>
            <h2 className="section-title">Velg teltstørrelse ut fra gjester og oppsett</h2>
            <p className="section-subtitle section-subtitle-centered">
              Under finner du de mest populære partyteltene våre. Hver modell har egen produktside med pris, kapasitet
              og mer detaljert informasjon.
            </p>
          </div>

          <div className="grid-3">
            {partyteltProducts.map((product) => (
              <ProduktKort key={product.id} product={product} showBadge={false} />
            ))}
          </div>
        </section>

        <section>
          <div className="section-header section-header-centered">
            <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
              Derfor velger kunder oss
            </Eyebrow>
            <h2 className="section-title">Tydelig, lokalt og enkelt å bestille</h2>
            <p className="section-subtitle section-subtitle-centered">
              Vi forsøker å gjøre leie av partytelt så lite komplisert som mulig, fra første spørsmål til utlevering.
            </p>
          </div>

          <div className="grid-3">
            {partyteltBenefits.map((item) => (
              <div key={item.title} className="surface-card" style={{ padding: '24px' }}>
                <h3 className="product-card-title" style={{ marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p className="product-card-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header section-header-centered">
            <Eyebrow icon={Truck} className="badge badge-spaced">
              Levering og montering
            </Eyebrow>
            <h2 className="section-title">Få teltet dit det skal, klart til bruk</h2>
            <p className="section-subtitle section-subtitle-centered">
              Vi kan gjøre det enkelt å få teltet på plass, enten du vil hente selv eller avtale levering.
            </p>
          </div>

          <div className="grid-3">
            {partyteltServicePoints.map((item) => (
              <div key={item.title} className="surface-card" style={{ padding: '24px' }}>
                <h3 className="product-card-title" style={{ marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p className="product-card-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header section-header-centered">
            <Eyebrow icon={CircleHelp} className="badge badge-spaced">
              Vanlige spørsmål
            </Eyebrow>
            <h2 className="section-title">Svar på det folk ofte lurer på</h2>
            <p className="section-subtitle section-subtitle-centered">
              Her er de viktigste spørsmålene vi får om partytelt, størrelse og bestilling.
            </p>
          </div>

          <div className="faq-list">
            {partyteltFaq.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden>
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header section-header-centered">
            <h2 className="section-title">Neste steg</h2>
            <p className="section-subtitle section-subtitle-centered">
              Bruk en av sidene under for å komme videre med planleggingen.
            </p>
          </div>

          <div className="grid-3">
            {partyteltInternalLinks.map((item) => (
              <Link key={item.to} to={item.to} className="surface-card stack-sm" style={{ padding: '24px', display: 'block' }}>
                <h3 className="product-card-title">
                  {item.label}
                </h3>
                <p className="product-card-copy">
                  {item.text}
                </p>
                <span className="text-link">
                  Gå videre
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
