import Hero from '../components/Hero'
import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import Leieprosess from '../components/Leieprosess'
import FAQ from '../components/FAQ'
import Arrangementstyper from '../components/Arrangementstyper'
import ArticlesPreview from '../components/ArticlesPreview'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Leie partytelt, bord og stoler i Sandefjord"
        description="Din Feiring leier ut partytelt, bord, stoler og lydutstyr i Sandefjord og Vestfold. Se priser, finn riktig teltstørrelse og be om tilbud i dag."
      />
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
