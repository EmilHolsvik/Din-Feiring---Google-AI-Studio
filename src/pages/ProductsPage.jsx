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
        description="Se hele utvalget av produkter til utleie hos Din Feiring, med partytelt, bord, stoler og lydutstyr i Sandefjord og Vestfold."
        path="/produkter"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Produkter
        titleAs="h1"
        pageTitle="Produkter til utleie i Sandefjord"
        pageDescription="Se hele utvalget vårt av partytelt, bord, stoler og lydutstyr. Bruk denne siden som en oversikt over produktene, og gå videre til kategorisidene når du vil sammenligne løsninger mer målrettet."
      />
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
