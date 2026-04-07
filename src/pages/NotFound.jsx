import { Link } from 'react-router-dom'
import { TriangleAlert } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <section className="section not-found-page">
      <SEO title="Siden ble ikke funnet" noindex />
      <div className="container narrow-container">
        <div className="surface-card centered-card stack-lg not-found-card">
          <Eyebrow icon={TriangleAlert}>404</Eyebrow>
          <h1 className="section-title">Siden finnes ikke</h1>
          <p className="section-copy">
            Lenken kan være gammel, eller siden kan ha blitt flyttet. Gå til forsiden eller se produktene våre.
          </p>
          <div className="button-row button-row-center">
            <Link to="/" className="btn btn-primary">
              Til forsiden
            </Link>
            <Link to="/produkter" className="btn btn-secondary">
              Se produkter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
