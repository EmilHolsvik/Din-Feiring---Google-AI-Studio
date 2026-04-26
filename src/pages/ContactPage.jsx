import Kontakt from '../components/Kontakt'
import ContactTestimonials from '../components/ContactTestimonials'
import SEO from '../components/SEO'
import { Compass } from 'lucide-react'
import { heroImages } from '../data/produkter'

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Kontakt Din Feiring – Be om tilbud på partytelt i dag"
        description="Send en forespørsel til Din Feiring i Sandefjord. Fortell oss hva du trenger og når – så svarer vi med pris og tilgjengelighet."
        path="/kontakt"
        ogImage={heroImages[1]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[1]?.alt || heroImages[0]?.alt}
      />
      <Kontakt
        eyebrow="Kontakt"
        eyebrowIcon={Compass}
        titleAs="h1"
        title="Send oss en forespørsel"
        subtitle="Fortell oss dato, hva du tenker å leie og ca. antall gjester. Det holder som start – vi svarer med pris og tilgjengelighet. Er du usikker på størrelse eller oppsett, hjelper vi deg å lande det."
      />
      <ContactTestimonials />
    </>
  )
}
