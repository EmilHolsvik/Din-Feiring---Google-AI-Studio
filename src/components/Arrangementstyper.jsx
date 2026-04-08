import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Ruler, Tent } from 'lucide-react'
import FadeIn from './FadeIn'
import Eyebrow from './Eyebrow'

const navigationIdeas = [
  {
    title: 'Se partytelt og størrelser',
    text: 'Se oversikten over teltstørrelser, kapasitet og vanlige oppsett.',
    path: '/partytelt',
    Icon: Tent,
  },
  {
    title: 'Bruk teltguiden',
    text: 'Start med antall gjester og finn størrelsen som passer best.',
    path: '/hvor-stort-partytelt',
    Icon: Ruler,
  },
  {
    title: 'Les guider og tips',
    text: 'Les artikler om planlegging, plassbehov og valg av utstyr.',
    path: '/artikler',
    Icon: FileText,
  },
]

export default function Arrangementstyper() {
  return (
    <FadeIn>
      <section className="section arrangement-section-home">
        <div className="container">
          <div className="section-header section-header-centered">
            <Eyebrow icon={ArrowRight} className="badge badge-spaced">
              Finn frem
            </Eyebrow>
            <h2 className="section-title">Hva trenger du hjelp til?</h2>
            <p className="section-subtitle section-subtitle-centered">
              Velg om du vil se partytelt, bruke teltguiden eller lese deg litt opp først.
            </p>
          </div>

          <ul className="arrangement-list arrangement-list-simple" aria-label="Veier videre på nettsiden">
            {navigationIdeas.map(({ title, text, path, Icon }) => (
              <li key={title} className="arrangement-feature">
                <span className="arrangement-feature-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.9} />
                </span>
                <h3 className="arrangement-feature-title">{title}</h3>
                <p className="arrangement-feature-copy">{text}</p>
                <Link to={path} className="text-link" style={{ marginTop: '10px' }}>
                  Gå videre
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </FadeIn>
  )
}
