import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import SEO from '../components/SEO'

export default function CalculatorPage() {
  return (
    <>
      <SEO 
        title="Pris på leie av partytelt – Få estimat her"
        description="Bruk vår priskalkulator for å få et raskt estimat på leie av partytelt, bord og stoler til din fest. Se våre faste priser og be om tilbud."
      />
      <Kalkulator />
      <Priser />
    </>
  )
}
