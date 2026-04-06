import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Package } from 'lucide-react'
import Eyebrow from './Eyebrow'
import ProduktKort from './ProduktKort'
import { alleProdukter } from '../data/produkter'

const POPULAR_IDS = ['partytelt-5x10', 'partytelt-6x12', 'partytelt-3x8', 'stoler', 'bord', 'soundboks']

export default function Produkter({ variant = 'page' }) {
  const [isMobile, setIsMobile] = useState(false)
  const isHome = variant === 'home'

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mediaQuery.matches)
    update()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update)
      return () => mediaQuery.removeEventListener('change', update)
    }

    mediaQuery.addListener(update)
    return () => mediaQuery.removeListener(update)
  }, [])

  const products = useMemo(() => {
    if (!isHome) return alleProdukter
    const popular = alleProdukter.filter((produkt) => POPULAR_IDS.includes(produkt.id))
    return popular
  }, [isHome])

  const visibleProducts = isHome && isMobile ? products.slice(0, 4) : products

  return (
    <section id="produkter" className={`section ${isHome ? 'products-home-section' : ''}`}>
      <div className="container">
        <div className={`section-header ${isHome ? 'section-header-centered' : 'products-page-header'}`}>
          <Eyebrow icon={Package}>{isHome ? 'Produkter til feiringen' : 'Produkter'}</Eyebrow>
          <h2 className="section-title">
            {isHome ? (
              <>
                Utvalgt utstyr
                <br className="products-home-title-break" />
                {' '}
                til de fleste anledninger
              </>
            ) : (
              'Vårt sortiment'
            )}
          </h2>
          <p className={`section-subtitle ${isHome ? 'section-subtitle-centered' : 'products-page-copy'}`}>
            {isHome
              ? 'Her ser du noen av produktene vi leier ut oftest.'
              : 'Trykk deg inn på et produkt for å se priser, størrelse og mer informasjon, eller send en samlet forespørsel nederst på siden.'}
          </p>
        </div>

        <div className="grid-3">
          {visibleProducts.map((produkt) => (
            <ProduktKort key={produkt.id} product={produkt} />
          ))}
        </div>

        {isHome && (
          <div className="section-cta-center">
            <Link to="/produkter" className="btn btn-primary products-home-cta">
              Se alle produkter
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
