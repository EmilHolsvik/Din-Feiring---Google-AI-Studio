import { Link } from 'react-router-dom'
import { Ruler } from 'lucide-react'
import FadeIn from './FadeIn'
import { sizeGuide, priceEstimateLink } from '../data/produkter'
import Eyebrow from './Eyebrow'

export default function SizeGuide() {
  return (
    <FadeIn>
      <section className="section section-alt" id="size-guide">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={Ruler} className="badge badge-spaced">
              Størrelsesguide
            </Eyebrow>
            <h2 className="section-title">
              Finn teltstørrelsen
              <br /> som passer din feiring
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Tallene under viser komfortabel kapasitet for stående mingling, langbord eller kvadratiske bord og runde
              bord. I sittende oppsett anbefaler vi maks seks personer per bord. Er du usikker, hjelper vi deg gjerne å
              velge riktig størrelse.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
              <a 
                href="https://dinfeiring.no/hvor-stort-partytelt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ background: 'var(--primary-light)', borderColor: 'var(--primary-light)' }}
              >
                Se vår fulle teltguide her
              </a>
            </div>
          </div>

          <div className="size-guide-card surface-card">
            <div className="size-guide-sheet">
              <div className="size-guide-sheet-header">
                <span>Størrelse</span>
                <span>Kapasitet</span>
                <span>Scenario</span>
              </div>

              {sizeGuide.map((item) => (
                <article key={item.title} className="size-guide-row">
                  <div className="size-guide-size">
                    <h3 className="size-guide-title">{item.recommendation}</h3>
                  </div>

                  <ul className="size-guide-capacity-list">
                    {item.capacities.map((capacity) => (
                      <li key={capacity}>{capacity}</li>
                    ))}
                  </ul>

                  <p className="size-guide-copy">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="arrangement-footer arrangement-footer-inline-mobile">
            <Link to={priceEstimateLink.path} className="btn btn-primary">
              {priceEstimateLink.ctaLabel}
            </Link>
            <Link to="/kontakt" className="btn btn-secondary">
              Få hjelp til å velge
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
