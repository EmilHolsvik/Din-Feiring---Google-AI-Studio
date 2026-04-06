import { Link } from 'react-router-dom'
import { TriangleAlert } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Fant ikke siden | Din Feiring')

  return (
    <section className="section">
      <div className="container narrow-container">
        <div className="surface-card centered-card stack-lg">
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
