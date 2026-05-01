import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import SEO from '../components/SEO'
import { ClipboardList } from 'lucide-react'
import { alleProdukter, heroImages } from '../data/produkter'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Produkter', item: '/produkter' },
  ],
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Utleieprodukter fra Din Feiring',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: alleProdukter.length,
  itemListElement: alleProdukter.map((produkt, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `/produkter/${produkt.id}`,
    name: produkt.navn,
  })),
}

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Våre produkter – Partytelt, bord, stoler og lyd i Sandefjord"
        description="Partytelt i fem størrelser, klappbord og runde bord, stoler og Soundboks. Priser, mål og kapasitet ligger åpent på hver produktside."
        path="/produkter"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
        jsonLd={[breadcrumbJsonLd, itemListJsonLd]}
      />
      <Produkter
        titleAs="h1"
        pageTitle="Utstyr til din neste feiring"
        pageDescription="Hele sortimentet samlet på én side. Sammenlign teltstørrelser, finn riktig bord, eller legg en Soundboks i bestillingen. Priser per døgn, helg og uke ligger åpent."
      />
      <Kontakt
        eyebrow="Bestilling"
        eyebrowIcon={ClipboardList}
        title="Send oss en forespørsel"
        subtitle="Del dato, utstyr og antall – så svarer vi med pris og tilgjengelighet innen 24 timer. Er du usikker på hva som passer, send forespørselen likevel."
        compactSpacing
        homeTone
        productSpacing
      />
    </>
  )
}
