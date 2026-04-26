import SizeGuide from '../components/SizeGuide'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function SizeGuidePage() {
  return (
    <>
      <SEO 
        title="Teltguide – Hvor stort partytelt trenger du egentlig?"
        description="Usikker på teltstørrelsen? Se vår guide for antall gjester ved langbord, runde bord og stående mingling. Finn riktig partytelt i Sandefjord."
        path="/hvor-stort-partytelt"
        ogImage={heroImages[2]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[2]?.alt || heroImages[0]?.alt}
      />
      <SizeGuide
        titleAs="h1"
        titleText="Hvor stort partytelt trenger du?"
        subtitleText="Her ser du hvor mange personer hvert telt rommer ved ulike bordoppsett. Legg gjerne til 10–20 % ekstra hvis dere skal ha buffet, kakebord eller gavebord inne i teltet."
      />
    </>
  )
}
