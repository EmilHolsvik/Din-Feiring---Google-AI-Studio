import Kalkulator from '../components/Kalkulator'
import Priser from '../components/Priser'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function CalculatorPage() {
  useDocumentTitle('Prisestimat | Din Feiring')

  return (
    <>
      <Kalkulator />
      <Priser />
    </>
  )
}
