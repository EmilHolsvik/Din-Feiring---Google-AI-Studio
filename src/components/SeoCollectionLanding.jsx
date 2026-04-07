import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Eyebrow from './Eyebrow'
import ProduktKort from './ProduktKort'
import { getProductById } from '../data/produkter'

export default function SeoCollectionLanding({ content }) {
  const products = (content.productSection?.productIds ?? []).map((id) => getProductById(id)).filter(Boolean)

  return (
    <article className="section section-alt section-tight">
      <div className="container stack-lg" style={{ gap: '72px' }}>
        <div className="section-header section-header-centered">
          <Eyebrow icon={content.hero.icon} className="badge badge-spaced">
            {content.hero.eyebrow}
          </Eyebrow>
          <h1 className="section-title">{content.hero.title}</h1>
          <p className="section-subtitle section-subtitle-centered">{content.hero.description}</p>

          <div className="button-row button-row-center">
            {content.hero.primaryCta ? (
              <Link to={content.hero.primaryCta.to} className="btn btn-primary">
                {content.hero.primaryCta.label}
              </Link>
            ) : null}
            {content.hero.secondaryCta ? (
              <Link to={content.hero.secondaryCta.to} className="btn btn-secondary">
                {content.hero.secondaryCta.label}
              </Link>
            ) : null}
            {content.hero.tertiaryCta ? (
              <Link to={content.hero.tertiaryCta.to} className="text-link">
                {content.hero.tertiaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        {content.quickFacts?.length ? (
          <div className="grid-3">
            {content.quickFacts.map((item) => {
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
        ) : null}

        {content.productSection ? (
          <section>
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
          </section>
        ) : null}

        {content.sections?.map((section) => (
          <section key={section.title}>
            <div className="section-header section-header-centered">
              <Eyebrow icon={section.icon} className="badge badge-spaced">
                {section.eyebrow}
              </Eyebrow>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{section.description}</p>
            </div>

            <div className="grid-3">
              {section.cards.map((item) => (
                <div key={item.title} className="surface-card" style={{ padding: '24px' }}>
                  <h3 className="product-card-title" style={{ marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p className="product-card-copy">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {content.faq?.length ? (
          <section>
            <div className="section-header section-header-centered">
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
          </section>
        ) : null}

        {content.internalLinks?.length ? (
          <section>
            <div className="section-header section-header-centered">
              <h2 className="section-title">{content.linksHeading.title}</h2>
              <p className="section-subtitle section-subtitle-centered">{content.linksHeading.description}</p>
            </div>

            <div className="grid-3">
              {content.internalLinks.map((item) => (
                <Link key={item.to} to={item.to} className="surface-card stack-sm" style={{ padding: '24px', display: 'block' }}>
                  <h3 className="product-card-title">{item.label}</h3>
                  <p className="product-card-copy">{item.text}</p>
                  <span className="text-link">
                    Gå videre
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}
