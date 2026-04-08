import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function CalculatorPage() {
  return (
    <>
      <SEO 
        title="Pris på leie av partytelt – Få estimat her"
        description="Bruk kalkulatoren vår for å få en rask pekepinn på pris for partytelt, bord og stoler. Du kan også se prislisten og sende en forespørsel når du vil."
        path="/kalkulator"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Kalkulator
        titleAs="h1"
        titleText="Pris på leie av partytelt, bord og stoler"
        subtitleText="Velg utstyr, antall og periode for å få et raskt overslag. Levering og montering kommer i tillegg ved behov."
      />
      <Priser />
    </>
  )
}
