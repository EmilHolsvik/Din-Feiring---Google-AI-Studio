import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import SEO from '../components/SEO'
import { ClipboardList } from 'lucide-react'

export default function ProductsPage() {
  return (
    <>
      <SEO 
        title="Leie partytelt i Sandefjord – Se utvalg og priser"
        description="Vi leier ut partytelt i mange størrelser, fra 3x6 til 6x12 meter. Se vårt utvalg av telt, bord og stoler til din neste feiring i Sandefjord."
      />
      <Produkter />
      <Kontakt
        eyebrow="Bestilling"
        eyebrowIcon={ClipboardList}
        title="Send oss en forespørsel"
        subtitle="Legg inn det du vet nå, så kan du sende en forespørsel uten å fylle ut alt på én gang."
        compactSpacing
        homeTone
        productSpacing
      />
    </>
  )
}
