import SEO from '../components/SEO'
import SeoCollectionLanding from '../components/SeoCollectionLanding'
import { getProductById } from '../data/produkter'
import { partyteltBryllupFaq, partyteltBryllupLandingContent } from '../data/seoLandingPages'

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
      name: 'Partytelt til bryllup',
      item: 'https://dinfeiring.no/partytelt-bryllup',
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: partyteltBryllupFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function PartyteltBryllupPage() {
  const leadProduct = getProductById('partytelt-6x12')

  return (
    <>
      <SEO
        title="Partytelt til bryllup i Sandefjord – Leie og priser"
        description="Lei partytelt til bryllup i Vestfold. Vi tilbyr runde bord og telt i flere størrelser – og hjelper deg finne oppsettet som gir god plass til middag og dans."
        path="/partytelt-bryllup"
        ogImage={leadProduct?.bilde}
        ogImageAlt={leadProduct?.imageAlt || leadProduct?.navn}
        jsonLd={[breadcrumbJsonLd, faqJsonLd]}
      />
      <SeoCollectionLanding content={partyteltBryllupLandingContent} />
    </>
  )
}
