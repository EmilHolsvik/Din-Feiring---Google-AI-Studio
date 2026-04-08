import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import SEO from '../components/SEO'
import { ClipboardList } from 'lucide-react'
import { heroImages } from '../data/produkter'

export default function ProductsPage() {
  return (
    <>
      <SEO 
        title="Produkter til utleie i Sandefjord – telt, bord, stoler og lyd"
        description="Se hele utvalget vårt av partytelt, bord, stoler og lydutstyr i Sandefjord og Vestfold. Her kan du sammenligne produkter før du tar kontakt."
        path="/produkter"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Produkter
        titleAs="h1"
        pageTitle="Produkter til utleie i Sandefjord"
        pageDescription="Se hele utvalget vårt av partytelt, bord, stoler og lydutstyr. Dette er siden for å sammenligne produkter før du går videre."
      />
      <Kontakt
        eyebrow="Bestilling"
        eyebrowIcon={ClipboardList}
        title="Send oss en forespørsel"
        subtitle="Legg inn det du vet nå. Resten kan du ta steg for steg."
        compactSpacing
        homeTone
        productSpacing
      />
    </>
  )
}
