import { Link } from 'react-router-dom'
import { Route } from 'lucide-react'
import FadeIn from './FadeIn'
import { processSteps, priceEstimateLink } from '../data/produkter'
import Eyebrow from './Eyebrow'

export default function Leieprosess() {
  return (
    <FadeIn>
      <section className="section leieprosess-section-home">
        <div className="container">
          <div className="section-header section-header-centered section-header-sm">
            <Eyebrow icon={Route} className="badge badge-spaced">
              Slik fungerer det
            </Eyebrow>
            <h2 className="section-title">Slik bestiller du</h2>
            <p className="section-subtitle section-subtitle-centered">
              Fire steg fra forespørsel til arrangement.
            </p>
          </div>

          <ol className="process-list" aria-label="Bestillingsprosess">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-row">
                <span className="process-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="process-step-copy">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="arrangement-footer">
            <Link to="/kontakt" className="btn btn-primary">
              Be om tilbud
            </Link>
            <Link to={priceEstimateLink.path} className="btn btn-secondary">
              {priceEstimateLink.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
