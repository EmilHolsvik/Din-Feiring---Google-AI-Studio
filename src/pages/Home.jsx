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
  name: companyInfo.name,
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
        title="Din Feiring i Sandefjord – partytelt, bord, stoler og lyd"
        description="Din Feiring leier ut partytelt, bord, stoler og lydutstyr i Sandefjord og Vestfold. Se kategorier, finn riktig teltstørrelse og send en forespørsel."
        path="/"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
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
