import { Link } from 'react-router-dom'
import { BadgeCheck, ClipboardCheck, Compass, MapPinned } from 'lucide-react'
import FadeIn from './FadeIn'
import Eyebrow from './Eyebrow'
import { aboutBlocks } from '../data/produkter'

const aboutBlockIcons = {
  guide: Compass,
  local: MapPinned,
  simple: ClipboardCheck,
}

export default function WhyChooseUsSection({
  eyebrow = 'Derfor velger kunder oss',
  title = 'Derfor velger kunder oss',
  description = 'Åpne priser, lokalt lager og konkrete svar på det du faktisk lurer på.',
}) {
  return (
    <FadeIn>
      <section className="section about-points-section">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
              {eyebrow}
            </Eyebrow>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle section-subtitle-centered">{description}</p>
          </div>

          <ul className="grid-3 about-points-list" aria-label="Tre grunner til å velge Din Feiring">
            {aboutBlocks.map((item) => {
              const Icon = aboutBlockIcons[item.icon] ?? ClipboardCheck

              return (
                <li key={item.title} className="arrangement-feature">
                  <span className="arrangement-feature-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                  <h3 className="arrangement-feature-title">{item.title}</h3>
                  <p className="arrangement-feature-copy">{item.text}</p>
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
