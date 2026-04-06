import Hero from '../components/Hero'
import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import Leieprosess from '../components/Leieprosess'
import FAQ from '../components/FAQ'
import Arrangementstyper from '../components/Arrangementstyper'
import ArticlesPreview from '../components/ArticlesPreview'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle('Din Feiring | Telt, bord, stoler og lyd fra lager i Sandefjord')

  return (
    <>
      <Hero />
      <Arrangementstyper />
      <Produkter variant="home" />
      <Leieprosess />
      <FAQ homeTone />
      <ArticlesPreview />
      <Kontakt homeTone />
    </>
  )
}
