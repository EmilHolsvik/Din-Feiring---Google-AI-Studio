import { Link } from 'react-router-dom'
import { Building2, ClipboardCheck, MapPinned, Tent } from 'lucide-react'
import FadeIn from './FadeIn'
import Eyebrow from './Eyebrow'

const sellingPoints = [
  {
    title: 'Lager i Sandefjord',
    text: 'Lokal base med tydelig sted for henting, levering og praktisk planlegging.',
    icon: MapPinned,
  },
  {
    title: 'Telt og utstyr samlet',
    text: 'Telt, bord, stoler og lyd kan samles i samme bestilling hos én leverandør.',
    icon: Tent,
  },
  {
    title: 'Enkel bestilling',
    text: 'Prisnivå, kapasitet og størrelser er tilgjengelige før du sender en forespørsel.',
    icon: ClipboardCheck,
  },
]

const copyByVariant = {
  teaser: {
    title: 'Lokal utleie med lager i Sandefjord',
    badge: 'Om oss',
    paragraphs: [
      'Vi vil gjøre det enkelt å leie telt og utstyr. Du skal slippe å lure på priser, størrelser eller hva som passer.',
      'Fra vårt lager i Sandefjord hjelper vi med telt, bord, stoler og lyd til alt fra hagefest og konfirmasjon til bryllup og firmaarrangement.',
    ],
    ctas: [
      { label: 'Be om tilbud', to: '/kontakt', className: 'btn btn-primary' },
      { label: 'Les mer om oss', to: '/om-oss', className: 'btn btn-secondary' },
    ],
  },
  full: {
    title: 'Din Feiring skal være lett å planlegge med',
    badge: 'Om Din Feiring',
    paragraphs: [
      'Din Feiring er bygget rundt en enkel idé: det skal være lettere å finne riktig telt og utstyr uten å måtte gjette på pris eller kapasitet.',
      'Vi holder lager i Sandefjord og hjelper både private og bedrifter med utstyr til alt fra mindre hagefester til store markeringer.',
    ],
    ctas: [
      { label: 'Se produkter', to: '/produkter', className: 'btn btn-secondary' },
      { label: 'Be om tilbud', to: '/kontakt', className: 'btn btn-primary' },
    ],
  },
}

export default function AboutSection({ variant = 'teaser', titleAs = 'h2', titleText }) {
  const content = copyByVariant[variant] ?? copyByVariant.teaser
  const isFull = variant === 'full'
  const hasAside = Boolean(content.asideTitle && content.asideCopy?.length)
  const showFacts = !isFull
  const TitleTag = titleAs

  return (
    <FadeIn>
      <section id="om-oss" className={`section ${variant === 'full' ? 'section-alt about-section-full' : 'about-section'}`}>
        <div className="container">
          <div className={`about-layout ${isFull ? 'about-layout-centered' : ''}`}>
            <div
              className={`about-intro ${hasAside ? 'about-intro-with-aside' : 'about-intro-single'} ${
                isFull ? 'about-intro-centered' : ''
              }`}
            >
              <div className={`about-body ${isFull ? 'about-body-centered' : ''}`}>
                <Eyebrow icon={Building2} className="badge badge-spaced">
                  {content.badge}
                </Eyebrow>
                <TitleTag className="section-title about-title">
                  {titleText ? (
                    titleText
                  ) : isFull ? (
                    <>
                      Din Feiring skal <br /> være lett å planlegge med
                    </>
                  ) : (
                    content.title
                  )}
                </TitleTag>

                {content.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`about-copy ${index === content.paragraphs.length - 1 ? 'about-copy-last' : ''}`}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className={`button-row ${isFull ? 'button-row-center' : ''}`}>
                  {content.ctas.map((cta) => (
                    <Link key={cta.to} to={cta.to} className={cta.className}>
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>

              {hasAside && (
                <aside className="about-story-card surface-card" aria-label={content.asideTitle}>
                  <Eyebrow icon={Building2}>{content.asideEyebrow}</Eyebrow>
                  <h3 className="about-story-title">{content.asideTitle}</h3>
                  {content.asideCopy.map((paragraph) => (
                    <p key={paragraph} className="about-story-copy">
                      {paragraph}
                    </p>
                  ))}
                </aside>
              )}
            </div>

            {showFacts ? (
              <ul className="about-facts" aria-label="Tre grunner til å velge Din Feiring">
                {sellingPoints.map((point) => {
                  const Icon = point.icon

                  return (
                    <li key={point.title} className="about-fact">
                      <span className="about-fact-icon" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.9} />
                      </span>
                      <div className="about-fact-content">
                        <div className="about-fact-value">{point.title}</div>
                        <p className="about-fact-copy">{point.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
