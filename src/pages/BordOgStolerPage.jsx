import SEO from '../components/SEO'
import SeoCollectionLanding from '../components/SeoCollectionLanding'
import { bordOgStolerFaq, bordOgStolerLandingContent } from '../data/seoLandingPages'
import { getProductById } from '../data/produkter'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Bord og stoler', item: '/bord-og-stoler' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: bordOgStolerFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function BordOgStolerPage() {
  const leadProduct = getProductById('runde-bord') ?? getProductById('bord')

  return (
    <>
      <SEO
        title="Utleie av bord og stoler i Sandefjord – Klappbord og runde bord"
        description="Klappbord, runde bord og klappstoler til hagefest, konfirmasjon og bryllup. Henting i Sandefjord eller levering i Vestfold."
        path="/bord-og-stoler"
        ogImage={leadProduct?.bilde}
        ogImageAlt={leadProduct?.imageAlt || leadProduct?.navn}
        jsonLd={[breadcrumbJsonLd, faqJsonLd]}
      />
      <SeoCollectionLanding content={bordOgStolerLandingContent} />
    </>
  )
}
