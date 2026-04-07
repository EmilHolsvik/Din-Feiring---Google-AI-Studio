import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Eyebrow from './Eyebrow'
import Kontakt from './Kontakt'
import ProduktKort from './ProduktKort'
import { getProductById } from '../data/produkter'

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

export default function SeoCollectionLanding({ content }) {
  const products = (content.productSection?.productIds ?? []).map((id) => getProductById(id)).filter(Boolean)
  const primarySection = content.sections?.[0]
  const secondarySection = content.sections?.[1]

  return (
    <article className="seo-landing-page">
      <section className="section section-tight seo-landing-hero">
        <div className="container">
          <div className="seo-landing-hero-shell">
            <Eyebrow icon={content.hero.icon} className="badge badge-spaced">
              {content.hero.eyebrow}
            </Eyebrow>
            <h1 className="section-title">{content.hero.title}</h1>
            <p className="section-subtitle section-subtitle-centered">{content.hero.description}</p>

            <div className="button-row button-row-center seo-landing-hero-actions">
              {content.hero.primaryCta ? (
                <ActionLink to={content.hero.primaryCta.to} className="btn btn-primary">
                  {content.hero.primaryCta.label}
                </ActionLink>
              ) : null}
              {content.hero.secondaryCta ? (
                <ActionLink to={content.hero.secondaryCta.to} className="btn btn-secondary">
                  {content.hero.secondaryCta.label}
                </ActionLink>
              ) : null}
              {content.hero.tertiaryCta ? (
                <ActionLink to={content.hero.tertiaryCta.to} className="text-link">
                  {content.hero.tertiaryCta.label}
                </ActionLink>
              ) : null}
            </div>
          </div>

          {content.quickFacts?.length ? (
            <ul className="grid-3 arrangement-list-simple seo-landing-facts" aria-label="Hurtigoversikt">
              {content.quickFacts.map((item) => {
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
          ) : null}
        </div>
      </section>

      {content.productSection ? (
        <section className="section seo-landing-band seo-landing-band-white">
          <div className="container">
            <div className="section-header section-header-centered">
              <Eyebrow icon={content.productSection.icon} className="badge badge-spaced">
                {content.productSection.eyebrow}
              </Eyebrow>
              <h2 className="section-title">{content.productSection.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{content.productSection.description}</p>
            </div>

            <div className="grid-3">
              {products.map((product) => (
                <ProduktKort key={product.id} product={product} showBadge={false} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {primarySection ? (
        <section className="section seo-landing-band seo-landing-band-warm">
          <div className="container seo-landing-split">
            <div className="seo-landing-copy-column">
              <Eyebrow icon={primarySection.icon} className="badge badge-spaced">
                {primarySection.eyebrow}
              </Eyebrow>
              <h2 className="section-title">{primarySection.title}</h2>
              <p className="section-subtitle">{primarySection.description}</p>
            </div>

            <div className="seo-landing-lines">
              {primarySection.cards.map((item) => (
                <article key={item.title} className="seo-landing-line-item">
                  <h3 className="seo-landing-line-title">{item.title}</h3>
                  <p className="seo-landing-line-copy">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {secondarySection ? (
        <section className="section seo-landing-band seo-landing-band-soft">
          <div className="container">
            <div className="section-header section-header-centered section-header-sm">
              <Eyebrow icon={secondarySection.icon} className="badge badge-spaced">
                {secondarySection.eyebrow}
              </Eyebrow>
              <h2 className="section-title">{secondarySection.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{secondarySection.description}</p>
            </div>

            <div className="grid-3 seo-landing-steps">
              {secondarySection.cards.map((item, index) => (
                <article key={item.title} className="seo-landing-step">
                  <span className="seo-landing-step-number">{`0${index + 1}`}</span>
                  <h3 className="seo-landing-step-title">{item.title}</h3>
                  <p className="seo-landing-step-copy">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.faq?.length ? (
        <section className="section seo-landing-band seo-landing-band-plain">
          <div className="container narrow-container">
            <div className="section-header section-header-centered section-header-sm">
              <Eyebrow icon={content.faqHeading.icon} className="badge badge-spaced">
                {content.faqHeading.eyebrow}
              </Eyebrow>
              <h2 className="section-title">{content.faqHeading.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{content.faqHeading.description}</p>
            </div>

            <div className="faq-list">
              {content.faq.map((item) => (
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
      ) : null}

      {content.contactSection ? (
        <Kontakt
          eyebrow={content.contactSection.eyebrow}
          eyebrowIcon={content.contactSection.icon}
          title={content.contactSection.title}
          subtitle={content.contactSection.subtitle}
          compactSpacing
          homeTone
          presetItems={content.contactSection.presetItems}
        />
      ) : null}

      {content.internalLinks?.length ? (
        <section className="section section-tight seo-landing-band seo-landing-band-links">
          <div className="container">
            <div className="section-header section-header-centered section-header-sm">
              <h2 className="section-title">{content.linksHeading.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{content.linksHeading.description}</p>
            </div>

            <div className="grid-3 seo-landing-link-grid">
              {content.internalLinks.map((item) => (
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
      ) : null}
    </article>
  )
}
