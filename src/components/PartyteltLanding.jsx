import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarDays, CircleHelp, MapPin, Ruler, Truck } from 'lucide-react'
import Eyebrow from './Eyebrow'
import FaqAnswer from './FaqAnswer'
import Kontakt from './Kontakt'
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
    title: '25 til 35 gjester med middag',
    text: 'Mange starter med 5 x 8 m. Skal dere også ha kaker, kaffe eller gavebord under teltet, er 5 x 10 m ofte tryggere.',
    icon: Ruler,
  },
  {
    title: '40 til 50 gjester eller runde bord',
    text: 'Da ender mange på 5 x 10 m eller større. Runde bord og ekstra servering spiser fort mer plass enn man tror.',
    icon: CalendarDays,
  },
  {
    title: 'Usikker på størrelse? Send oss rammene',
    text: 'Send dato, sted, gjestetall og litt om oppsettet, så kan vi peke dere i riktig retning.',
    icon: MapPin,
  },
]

function ActionLink({ to, className, children }) {
  if (!to) return null

  if (to.startsWith('#')) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

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
              Skal dere ha middag, gjester og servering ute, er det som regel bordoppsett og ekstra soner som avgjør om
              teltet blir passe. Her er et godt sted å starte.
            </p>

            <div className="button-row button-row-center seo-landing-hero-actions">
              <ActionLink to="#kontakt" className="btn btn-primary">
                Be om tilbud
              </ActionLink>
              <ActionLink to={priceEstimateLink.path} className="btn btn-secondary">
                {priceEstimateLink.ctaLabel}
              </ActionLink>
              <ActionLink to="/hvor-stort-partytelt" className="text-link">
                Se teltguiden
              </ActionLink>
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
            <h2 className="section-title">Et godt sted å starte når du skal velge telt</h2>
            <p className="section-subtitle section-subtitle-centered">
              Velg størrelse ut fra hvordan teltet faktisk skal brukes, ikke bare hvor mange som er invitert.
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
            <h2 className="section-title">Det som oftest avgjør om teltet blir passe</h2>
            <p className="section-subtitle">
              De fleste bommer ikke fordi de teller gjestene feil, men fordi de undervurderer hvor mye plass middag,
              servering og bevegelse faktisk krever.
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
              Når det er verdt å ha litt mer plass
            </Eyebrow>
            <h2 className="section-title">Tre tegn på at dere bør vurdere en større teltstørrelse</h2>
            <p className="section-subtitle section-subtitle-centered">
              Dette handler ikke om hva som er lettest for oss, men om hva som gjør at oppsettet faktisk føles bedre når gjestene kommer.
            </p>
          </div>

          <div className="grid-3 seo-landing-steps">
            {partyteltServicePoints.map((item) => (
              <article key={item.title} className="seo-landing-step">
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
            <h2 className="section-title">Vanlige spørsmål når folk skal velge partytelt</h2>
            <p className="section-subtitle section-subtitle-centered">
              Korte svar på det som vanligvis avgjør størrelse, oppsett og hva som faktisk får plass.
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
                <FaqAnswer item={item} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <Kontakt
        eyebrow="Få hjelp med teltvalget"
        eyebrowIcon={Truck}
        title="Fortell oss kort hva dere planlegger"
        subtitle="Send dato, sted, gjestetall og om dere skal ha middag, buffet eller runde bord. Da kan vi foreslå en teltstørrelse som passer bedre."
        compactSpacing
      />

      <section className="section section-tight seo-landing-band seo-landing-band-links">
        <div className="container">
          <div className="section-header section-header-centered section-header-sm">
            <h2 className="section-title">Videre hvis du vil sammenligne</h2>
            <p className="section-subtitle section-subtitle-centered">
              Disse sidene er mest nyttige hvis du står mellom flere oppsett og vil se noe mer konkret.
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
