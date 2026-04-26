import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function About() {
  return (
    <>
      <SEO 
        title="Om Din Feiring – Din lokale utleiepartner i Sandefjord"
        description="Din Feiring leier ut partytelt, bord, stoler og lyd fra Sandefjord. Vi holder prisene åpne, utstyret vedlikeholdt og svarer på spørsmål uten salgssnakk."
        path="/om-oss"
        ogImage={heroImages[3]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[3]?.alt || heroImages[0]?.alt}
      />
      <AboutSection variant="full" titleAs="h1" titleText="Vi gjør det enkelt å arrangere fest" />
      <WhyChooseUsSection
        eyebrow="Hva vi står for"
        title="Hva vi står for"
        description="Vi leier ut utstyr vi selv ville valgt til egne feiringer. Vedlikeholdt, rent og klart til bruk – og prisene finner du på nettsiden."
      />
    </>
  )
}
