import { Link } from 'react-router-dom'
import { CircleHelp } from 'lucide-react'
import FadeIn from './FadeIn'
import { faqItems } from '../data/produkter'
import Eyebrow from './Eyebrow'
import FaqAnswer from './FaqAnswer'

export default function FAQ({ homeTone = false }) {
  return (
    <FadeIn>
      <section className={`section ${homeTone ? 'faq-section-home' : ''}`} id="faq">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={CircleHelp} className="badge badge-spaced">
              Spørsmål og svar
            </Eyebrow>
            <h2 className="section-title">Vanlige spørsmål</h2>
            <p className="section-subtitle section-subtitle-centered">
              Her finner du svar på det mange lurer på når de planlegger telt, bord, stoler og oppsett.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => (
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

          <div className="faq-footer">
            <p className="mini-copy">Fant du ikke det du lurte på? Ta kontakt, så hjelper vi deg gjerne.</p>
            <div className="arrangement-footer faq-footer-actions">
              <Link to="/kontakt" className="btn btn-primary">
                Be om tilbud
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
