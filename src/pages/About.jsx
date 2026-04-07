import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function About() {
  return (
    <>
      <SEO 
        title="Om oss"
        description="Lær mer om Din Feiring. Vi er din lokale leverandør av partytelt, bord og stoler i Sandefjord og Vestfold."
        path="/om-oss"
        ogImage={heroImages[3]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[3]?.alt || heroImages[0]?.alt}
      />
      <AboutSection variant="full" titleAs="h1" titleText="Om Din Feiring" />
      <WhyChooseUsSection />
    </>
  )
}
