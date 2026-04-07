import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function CalculatorPage() {
  return (
    <>
      <SEO 
        title="Pris på leie av partytelt – Få estimat her"
        description="Bruk vår priskalkulator for å få et raskt estimat på leie av partytelt, bord og stoler til din fest. Se våre faste priser og be om tilbud."
        path="/kalkulator"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Kalkulator
        titleAs="h1"
        titleText="Pris på leie av partytelt, bord og stoler"
        subtitleText="Velg produkter, antall og periode for å få et raskt estimat. Levering, montering og eventuelle tillegg avtales ved behov."
      />
      <Priser />
    </>
  )
}
