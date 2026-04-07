import SizeGuide from '../components/SizeGuide'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function SizeGuidePage() {
  return (
    <>
      <SEO 
        title="Teltguide for partytelt – finn riktig størrelse"
        description="Bruk teltguiden vår for å finne riktig partytelt ut fra antall gjester, bordoppsett og ønsket plass. Se komfortable kapasiteter fra 18 til 72 kvm."
        path="/hvor-stort-partytelt"
        ogImage={heroImages[2]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[2]?.alt || heroImages[0]?.alt}
      />
      <SizeGuide
        titleAs="h1"
        titleText="Finn riktig størrelse på partytelt"
        subtitleText="Bruk størrelsesguiden vår for å finne riktig partytelt ut fra antall gjester, bordoppsett og hvor mye plass du vil ha i teltet."
      />
    </>
  )
}
