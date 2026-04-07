import SEO from '../components/SEO'
import SeoCollectionLanding from '../components/SeoCollectionLanding'
import { getProductById } from '../data/produkter'
import { partyteltKonfirmasjonFaq, partyteltKonfirmasjonLandingContent } from '../data/seoLandingPages'

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
      name: 'Partytelt til konfirmasjon',
      item: 'https://dinfeiring.no/partytelt-konfirmasjon',
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: partyteltKonfirmasjonFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function PartyteltKonfirmasjonPage() {
  const leadProduct = getProductById('partytelt-5x10')

  return (
    <>
      <SEO
        title="Partytelt til konfirmasjon i Sandefjord og Vestfold"
        description="Planlegg konfirmasjon med partytelt, bord og stoler i Sandefjord og Vestfold. Se anbefalte teltstørrelser, oppsett og veien videre til tilbud."
        path="/partytelt-konfirmasjon"
        ogImage={leadProduct?.bilde}
        ogImageAlt={leadProduct?.imageAlt || leadProduct?.navn}
        jsonLd={[breadcrumbJsonLd, faqJsonLd]}
      />
      <SeoCollectionLanding content={partyteltKonfirmasjonLandingContent} />
    </>
  )
}
