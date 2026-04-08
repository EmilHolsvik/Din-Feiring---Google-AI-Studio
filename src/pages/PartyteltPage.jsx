import SEO from '../components/SEO'
import PartyteltLanding from '../components/PartyteltLanding'
import { companyInfo, heroImages } from '../data/produkter'
import { partyteltFaq } from '../data/partyteltPageContent'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Forside',
      item: 'https://dinfeiring.no/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Partytelt',
      item: 'https://dinfeiring.no/partytelt',
    },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Din Feiring',
  url: 'https://dinfeiring.no/',
  telephone: companyInfo.phoneHref.replace('tel:', ''),
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pinaveien 8A',
    postalCode: '3225',
    addressLocality: 'Sandefjord',
    addressCountry: 'NO',
  },
  areaServed: ['Sandefjord', 'Vestfold'],
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
        title="Leie partytelt i Sandefjord og Vestfold"
        description="Se partytelt, størrelser og priser før du bestemmer deg. Her får du et godt utgangspunkt for konfirmasjon, bryllup, hagefest og andre selskap ute."
        path="/partytelt"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
        jsonLd={[breadcrumbJsonLd, localBusinessJsonLd, faqJsonLd]}
      />
      <PartyteltLanding />
    </>
  )
}
