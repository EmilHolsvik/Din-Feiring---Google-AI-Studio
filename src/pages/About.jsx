import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function About() {
  return (
    <>
      <SEO 
        title="Om Din Feiring – Din lokale utleiepartner i Sandefjord"
        description="Din Feiring brenner for å gjøre festplanlegging enklere. Les om vår visjon og hvorfor vi er det foretrukne valget for utleie i Vestfold."
        path="/om-oss"
        ogImage={heroImages[3]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[3]?.alt || heroImages[0]?.alt}
      />
      <AboutSection variant="full" titleAs="h1" titleText="Vi gjør det enkelt å arrangere fest" />
      <WhyChooseUsSection
        eyebrow="Hva vi står for"
        title="Hva vi står for"
        description="Vårt lager i Pinaveien 8A i Sandefjord er alltid klart for å hjelpe deg med din neste markering."
      />
    </>
  )
}
