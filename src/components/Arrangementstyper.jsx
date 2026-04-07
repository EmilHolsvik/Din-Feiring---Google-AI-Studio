import { Link } from 'react-router-dom'
import { Building2, CalendarDays, Heart, Leaf } from 'lucide-react'
import FadeIn from './FadeIn'
import { eventIdeas } from '../data/produkter'
import Eyebrow from './Eyebrow'

const eventIcons = [Heart, Leaf, Building2]

export default function Arrangementstyper() {
  return (
    <FadeIn>
      <section className="section arrangement-section-home">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={CalendarDays} className="badge badge-spaced">
              Typiske arrangementer
            </Eyebrow>
            <h2 className="section-title">
              Utstyr til både
              <br />
              små og store arrangementer
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Her er noen vanlige anledninger vi ofte leverer til.
            </p>
          </div>

          <ul className="arrangement-list arrangement-list-simple" aria-label="Typiske arrangementer">
            {eventIdeas.map((item, index) => {
              const Icon = eventIcons[index] ?? Heart

              return (
                <li key={item.title} className="arrangement-feature">
                  <span className="arrangement-feature-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                  <h3 className="arrangement-feature-title">{item.title}</h3>
                  <p className="arrangement-feature-copy">{item.text}</p>
                  {item.path ? (
                    <Link to={item.path} className="text-link" style={{ marginTop: '10px' }}>
                      Les mer
                    </Link>
                  ) : null}
                </li>
              )
            })}
          </ul>

          <div className="arrangement-footer">
            <Link to="/produkter" className="btn btn-secondary">
              Se produkter
            </Link>
            <Link to="/kontakt" className="btn btn-primary">
              Be om tilbud
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
