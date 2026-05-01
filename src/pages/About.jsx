import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function About() {
  return (
    <>
      <SEO
        title="Om Din Feiring – Lokal utleie fra Sandefjord"
        description="Vi leier ut partytelt, bord, stoler og lyd fra Sandefjord. Åpne priser, vedlikeholdt utstyr og konkrete svar på det dere lurer på."
        path="/om-oss"
        ogImage={heroImages[3]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[3]?.alt || heroImages[0]?.alt}
      />
      <AboutSection variant="full" titleAs="h1" titleText="Lokal utleie fra Sandefjord" />
      <WhyChooseUsSection
        eyebrow="Hva vi står for"
        title="Hva vi står for"
        description="Vedlikeholdt utstyr, åpne priser, og konkrete svar når dere lurer på noe. Det vi leier ut er det vi selv ville hatt på egen feiring."
      />
    </>
  )
}
