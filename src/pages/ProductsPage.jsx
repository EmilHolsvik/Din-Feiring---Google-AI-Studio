import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ClipboardList } from 'lucide-react'

export default function ProductsPage() {
  useDocumentTitle('Produkter | Din Feiring')

  return (
    <>
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
