import Kontakt from '../components/Kontakt'
import ContactTestimonials from '../components/ContactTestimonials'
import SEO from '../components/SEO'
import { Compass } from 'lucide-react'
import { companyInfo, heroImages } from '../data/produkter'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: '/kontakt' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  url: 'https://dinfeiring.no/',
  logo: '/logo.png',
  email: companyInfo.email,
  telephone: companyInfo.phoneHref.replace('tel:', ''),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: companyInfo.phoneHref.replace('tel:', ''),
      email: companyInfo.email,
      contactType: 'customer service',
      areaServed: ['NO-34', 'NO'],
      availableLanguage: ['nb', 'no', 'en'],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Kontakt Din Feiring – Be om tilbud på partytelt"
        description="Send en forespørsel til Din Feiring i Sandefjord. Del dato og antall gjester – så svarer vi med pris og tilgjengelighet innen 24 timer."
        path="/kontakt"
        ogImage={heroImages[1]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[1]?.alt || heroImages[0]?.alt}
        jsonLd={[breadcrumbJsonLd, organizationJsonLd]}
      />
      <Kontakt
        eyebrow="Kontakt"
        eyebrowIcon={Compass}
        titleAs="h1"
        title="Send oss en forespørsel"
        subtitle="Dato, antall gjester og hva dere tenker å leie holder som start. Du får svar på pris og tilgjengelighet innen 24 timer – og vi finner riktig størrelse sammen om dere er usikre."
      />
      <ContactTestimonials />
    </>
  )
}
