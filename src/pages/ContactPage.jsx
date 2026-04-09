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
        description="Har du spørsmål eller ønsker et uforpliktende tilbud? Kontakt Din Feiring i Sandefjord. Vi hjelper deg med telt, bord og stoler til din fest."
        path="/kontakt"
        ogImage={heroImages[1]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[1]?.alt || heroImages[0]?.alt}
      />
      <Kontakt
        eyebrow="Kontakt"
        eyebrowIcon={Compass}
        titleAs="h1"
        title="Vi gleder oss til å høre fra deg"
        subtitle="Uansett om du vet nøyaktig hva du trenger, eller om du vil ha en anbefaling til ditt arrangement, er det bare å ta kontakt. Send oss en forespørsel via skjemaet, eller nå oss direkte på telefon og e-post."
      />
      <ContactTestimonials />
    </>
  )
}
