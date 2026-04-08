import { Link } from 'react-router-dom'
import { Ruler } from 'lucide-react'
import FadeIn from './FadeIn'
import { sizeGuide, priceEstimateLink } from '../data/produkter'
import Eyebrow from './Eyebrow'

export default function SizeGuide({
  titleAs = 'h2',
  titleText = (
    <>
      Finn teltstørrelsen
      <br /> som passer din feiring
    </>
  ),
  subtitleText = 'Tallene under gir et komfortabelt utgangspunkt for stående mingling, langbord, kvadratiske bord og runde bord. I sittende oppsett anbefaler vi maks seks personer per bord. Er du usikker, hjelper vi deg gjerne å finne riktig størrelse.',
}) {
  const TitleTag = titleAs

  return (
    <FadeIn>
      <section className="section section-alt" id="size-guide">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={Ruler} className="badge badge-spaced">
              Størrelsesguide
            </Eyebrow>
            <TitleTag className="section-title">{titleText}</TitleTag>
            <p className="section-subtitle section-subtitle-centered">{subtitleText}</p>
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
