import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="Om oss"
        description="Lær mer om Din Feiring. Vi er din lokale leverandør av partytelt, bord og stoler i Sandefjord og Vestfold."
      />
      <AboutSection variant="full" />
      <WhyChooseUsSection />
    </>
  )
}
