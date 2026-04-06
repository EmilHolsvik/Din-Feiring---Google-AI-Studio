import Kontakt from '../components/Kontakt'
import ContactTestimonials from '../components/ContactTestimonials'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { Compass } from 'lucide-react'

export default function ContactPage() {
  useDocumentTitle('Kontakt | Din Feiring')

  return (
    <>
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
