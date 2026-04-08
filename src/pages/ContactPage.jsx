import Kontakt from '../components/Kontakt'
import ContactTestimonials from '../components/ContactTestimonials'
import SEO from '../components/SEO'
import { Compass } from 'lucide-react'
import { heroImages } from '../data/produkter'

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Kontakt oss – Be om tilbud på partytelt"
        description="Ta kontakt hvis du vil leie partytelt, bord, stoler eller lyd. Send en forespørsel, så hører du fra oss så fort vi kan."
        path="/kontakt"
        ogImage={heroImages[1]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[1]?.alt || heroImages[0]?.alt}
      />
      <Kontakt
        eyebrow="Kontakt"
        eyebrowIcon={Compass}
        titleAs="h1"
      />
      <ContactTestimonials />
    </>
  )
}
