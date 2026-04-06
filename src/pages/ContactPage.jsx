import Kontakt from '../components/Kontakt'
import ContactTestimonials from '../components/ContactTestimonials'
import SEO from '../components/SEO'
import { Compass } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Kontakt oss – Be om tilbud på partytelt"
        description="Har du spørsmål om leie av partytelt, bord eller stoler? Kontakt Din Feiring i Sandefjord for et uforpliktende tilbud til ditt arrangement."
      />
      <Kontakt
        eyebrow="Kontakt"
        eyebrowIcon={Compass}
        title="Send oss en forespørsel"
        subtitle="Fyll inn det viktigste først, så kan resten tas steg for steg. Vi holder skjemaet kort og bruker opplysningene kun for å svare på henvendelsen din."
        showSellingPoints
        homeTone
      />
      <ContactTestimonials />
    </>
  )
}
