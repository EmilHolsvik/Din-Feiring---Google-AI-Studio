import SizeGuide from '../components/SizeGuide'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Teltguide', item: '/hvor-stort-partytelt' },
  ],
}

export default function SizeGuidePage() {
  return (
    <>
      <SEO
        title="Hvor stort partytelt trenger du? – Teltguide for Sandefjord"
        description="Antall gjester per teltstørrelse – ved langbord, runde bord og stående mingling. Finn riktig størrelse før dere bestiller."
        path="/hvor-stort-partytelt"
        ogImage={heroImages[2]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[2]?.alt || heroImages[0]?.alt}
        jsonLd={breadcrumbJsonLd}
      />
      <SizeGuide
        titleAs="h1"
        titleText="Hvor stort partytelt trenger du?"
        subtitleText="Antall gjester ved ulike bordoppsett, per teltstørrelse. Skal kakebord, buffet eller gavebord også inn under teltet, regn med 10–20 % ekstra plass."
      />
    </>
  )
}
