import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function CalculatorPage() {
  return (
    <>
      <SEO
        title="Priskalkulator – Lei partytelt, bord og stoler i Sandefjord"
        description="Regn ut hva det koster å leie partytelt, bord og stoler i Sandefjord og Vestfold. Velg produkter, antall og periode – og se totalen direkte."
        path="/kalkulator"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Kalkulator
        titleAs="h1"
        titleText="Regn ut prisen på din feiring"
        subtitleText="Velg utstyr, antall og periode – så får du totalsummen direkte. Levering og montering legges på ved behov."
      />
      <Priser />
    </>
  )
}
