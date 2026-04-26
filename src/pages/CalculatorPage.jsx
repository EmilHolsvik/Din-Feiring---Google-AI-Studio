import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function CalculatorPage() {
  return (
    <>
      <SEO 
        title="Pris på leie av partytelt – Få estimat raskt og enkelt"
        description="Bruk vår priskalkulator for å se hva det koster å leie telt, bord og stoler. Få full oversikt over leiepriser i Sandefjord og Vestfold."
        path="/kalkulator"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Kalkulator
        titleAs="h1"
        titleText="Beregn pris for din feiring"
        subtitleText="Velg produkter, antall og periode for å få et raskt overslag. Levering og montering kommer i tillegg ved behov."
      />
      <Priser />
    </>
  )
}
