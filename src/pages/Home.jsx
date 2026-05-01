import Hero from '../components/Hero'
import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import Leieprosess from '../components/Leieprosess'
import FAQ from '../components/FAQ'
import Arrangementstyper from '../components/Arrangementstyper'
import ArticlesPreview from '../components/ArticlesPreview'
import SEO from '../components/SEO'
import { companyInfo, faqItems, heroImages } from '../data/produkter'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dinfeiring.no/#localbusiness',
  name: companyInfo.name,
  url: 'https://dinfeiring.no/',
  logo: '/logo.png',
  image: '/logo.png',
  telephone: companyInfo.phoneHref.replace('tel:', ''),
  email: companyInfo.email,
  priceRange: '500–4500 NOK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pinaveien 8A',
    postalCode: '3225',
    addressLocality: 'Sandefjord',
    addressRegion: 'Vestfold',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.1297,
    longitude: 10.2167,
  },
  areaServed: [
    { '@type': 'City', name: 'Sandefjord' },
    { '@type': 'AdministrativeArea', name: 'Vestfold' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dinfeiring.no/#website',
  name: companyInfo.name,
  url: 'https://dinfeiring.no/',
  inLanguage: 'nb-NO',
  publisher: { '@id': 'https://dinfeiring.no/#localbusiness' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function Home() {
  return (
    <>
      <SEO 
        title="Din Feiring Sandefjord – Utleie av partytelt, bord, stoler og lyd"
        description="Lei partytelt, bord, stoler og Soundboks i Sandefjord og Vestfold. Åpne priser på nett og svar på forespørselen din innen 24 timer."
        path="/"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
        jsonLd={[localBusinessJsonLd, websiteJsonLd, faqJsonLd]}
      />
      <Hero />
      <Arrangementstyper />
      <Produkter variant="home" />
      <Leieprosess />
      <FAQ homeTone />
      <ArticlesPreview />
      <Kontakt homeTone />
    </>
  )
}
