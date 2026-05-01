import SEO from '../components/SEO'
import PartyteltLanding from '../components/PartyteltLanding'
import { companyInfo, heroImages } from '../data/produkter'
import { partyteltFaq } from '../data/partyteltPageContent'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Partytelt', item: '/partytelt' },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dinfeiring.no/#localbusiness',
  name: 'Din Feiring',
  url: '/',
  telephone: companyInfo.phoneHref.replace('tel:', ''),
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pinaveien 8A',
    postalCode: '3225',
    addressLocality: 'Sandefjord',
    addressRegion: 'Vestfold',
    addressCountry: 'NO',
  },
  areaServed: [
    { '@type': 'City', name: 'Sandefjord' },
    { '@type': 'AdministrativeArea', name: 'Vestfold' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: partyteltFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function PartyteltPage() {
  return (
    <>
      <SEO
        title="Lei partytelt i Sandefjord – Størrelser, priser og kapasitet"
        description="Partytelt fra 3x6 til 6x12 meter. Se kapasitet, priser per døgn og helg, og finn teltet som faktisk passer antall gjester."
        path="/partytelt"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
        jsonLd={[breadcrumbJsonLd, localBusinessJsonLd, faqJsonLd]}
      />
      <PartyteltLanding />
    </>
  )
}
