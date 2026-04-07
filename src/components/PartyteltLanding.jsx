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
    title: 'Utgangspunktet er ikke bare antall gjester',
    text: 'Bordoppsett, buffet, gavebord og hvor lenge dere skal sitte under teltet betyr ofte like mye som gjestetallet.',
    icon: MapPin,
  },
  {
    title: 'Runde bord og ekstra soner krever mer plass',
    text: 'Et telt som fungerer til mingling kan bli trangt til middag. Derfor bør oppsettet vurderes før størrelse velges.',
    icon: Ruler,
  },
  {
    title: 'Plan B for været fungerer best når alt er avklart tidlig',
    text: 'Levering, montering og plassering er lettere å få riktig når dato, sted og oppsett er tenkt gjennom på forhånd.',
    icon: CalendarDays,
  },
]

export default function PartyteltLanding() {
  return (
    <article className="seo-landing-page">
      <section className="section section-tight seo-landing-hero">
        <div className="container">
          <div className="seo-landing-hero-shell">
            <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
              Partytelt til utleie
            </Eyebrow>
            <h1 className="section-title">Leie partytelt i Sandefjord og Vestfold</h1>
            <p className="section-subtitle section-subtitle-centered">
              Finn teltstørrelser som passer gjestetall, bordoppsett og arrangementstype. Her får du et tydelig
              utgangspunkt før du går videre til teltguide, prisestimat eller forespørsel.
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

          <ul className="grid-3 arrangement-list-simple seo-landing-facts" aria-label="Hva som påvirker valg av partytelt">
            {quickFacts.map((item) => {
              const Icon = item.icon

              return (
                <li key={item.title} className="arrangement-feature seo-landing-fact">
                  <span className="arrangement-feature-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                  <p className="arrangement-feature-title seo-landing-fact-title">{item.title}</p>
                  <p className="arrangement-feature-copy seo-landing-fact-copy">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section seo-landing-band seo-landing-band-white">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={Ruler} className="badge badge-spaced">
              Størrelser og priser
            </Eyebrow>
            <h2 className="section-title">Velg teltstørrelse ut fra hvordan arrangementet faktisk skal brukes</h2>
            <p className="section-subtitle section-subtitle-centered">
              Hver teltstørrelse har egen produktside med kapasitet, pris og praktisk informasjon om oppsett og bruk.
            </p>
          </div>

          <div className="grid-3">
            {partyteltProducts.map((product) => (
              <ProduktKort key={product.id} product={product} showBadge={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="section seo-landing-band seo-landing-band-warm">
        <div className="container seo-landing-split">
          <div className="seo-landing-copy-column">
            <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
              Før dere velger telt
            </Eyebrow>
            <h2 className="section-title">Tre ting som nesten alltid avgjør om teltet blir riktig</h2>
            <p className="section-subtitle">
              De fleste bommer ikke på teltvalg fordi de teller feil gjester, men fordi de undervurderer hvordan teltet
              faktisk skal brukes gjennom dagen.
            </p>
          </div>

          <div className="seo-landing-lines">
            {partyteltBenefits.map((item) => (
              <article key={item.title} className="seo-landing-line-item">
                <h3 className="seo-landing-line-title">{item.title}</h3>
                <p className="seo-landing-line-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section seo-landing-band seo-landing-band-soft">
        <div className="container">
          <div className="section-header section-header-centered section-header-sm">
            <Eyebrow icon={Truck} className="badge badge-spaced">
              Praktisk planlegging
            </Eyebrow>
            <h2 className="section-title">Slik blir bestillingen enklere og mer presis</h2>
            <p className="section-subtitle section-subtitle-centered">
              Når de viktigste detaljene er avklart tidlig, er det mye enklere å få riktig telt og et tilbud som faktisk
              passer arrangementet.
            </p>
          </div>

          <div className="grid-3 seo-landing-steps">
            {partyteltServicePoints.map((item, index) => (
              <article key={item.title} className="seo-landing-step">
                <span className="seo-landing-step-number">{`0${index + 1}`}</span>
                <h3 className="seo-landing-step-title">{item.title}</h3>
                <p className="seo-landing-step-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section seo-landing-band seo-landing-band-plain">
        <div className="container narrow-container">
          <div className="section-header section-header-centered section-header-sm">
            <Eyebrow icon={CircleHelp} className="badge badge-spaced">
              Vanlige spørsmål
            </Eyebrow>
            <h2 className="section-title">Svar på det folk oftest lurer på før de leier partytelt</h2>
            <p className="section-subtitle section-subtitle-centered">
              Spørsmålene under går igjen når folk skal velge størrelse, planlegge oppsett og finne ut hvordan dagen
              blir enklest å gjennomføre.
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
        </div>
      </section>

      <section className="section section-tight seo-landing-band seo-landing-band-links">
        <div className="container">
          <div className="section-header section-header-centered section-header-sm">
            <h2 className="section-title">Relaterte sider</h2>
            <p className="section-subtitle section-subtitle-centered">
              Gå videre til sidene som hjelper mest når du skal finjustere oppsettet.
            </p>
          </div>

          <div className="grid-3 seo-landing-link-grid">
            {partyteltInternalLinks.map((item) => (
              <Link key={item.to} to={item.to} className="seo-landing-link">
                <h3 className="seo-landing-link-title">{item.label}</h3>
                <p className="seo-landing-link-copy">{item.text}</p>
                <span className="text-link">
                  Gå videre
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
