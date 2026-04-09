import Produkter from '../components/Produkter'
import Kontakt from '../components/Kontakt'
import SEO from '../components/SEO'
import { ClipboardList } from 'lucide-react'
import { heroImages } from '../data/produkter'

export default function ProductsPage() {
  return (
    <>
      <SEO 
        title="Våre produkter – Alt innen telt, møbler og lydutleie i Sandefjord"
        description="Utforsk vårt utvalg av utleieutstyr. Fra kompakte 3x6m telt til store 6x12m telt, samt Soundboks og møbler til festen din i Vestfold."
        path="/produkter"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <Produkter
        titleAs="h1"
        pageTitle="Utstyr til din neste feiring"
        pageDescription="Her finner du en komplett oversikt over alt utstyret vi leier ut. Sammenlign størrelser på partytelt, finn de rette bordene, eller legg til en Soundboks for å sikre feststemningen. Alle priser er oppgitt per døgn, helg eller uke for full oversikt."
      />
      <Kontakt
        eyebrow="Bestilling"
        eyebrowIcon={ClipboardList}
        title="Send oss en forespørsel"
        subtitle="Send inn en forespørsel, så hører du fra oss. Velg gjerne dato, utstyr og antall, så blir det enklere for oss å hjelpe deg raskt. Er du usikker på hvilket utstyr du trenger, hjelper vi deg gjerne."
        compactSpacing
        homeTone
        productSpacing
      />
    </>
  )
}
