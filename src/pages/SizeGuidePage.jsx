import SizeGuide from '../components/SizeGuide'
import SEO from '../components/SEO'
import { heroImages } from '../data/produkter'

export default function SizeGuidePage() {
  return (
    <>
      <SEO 
        title="Teltguide for partytelt – finn riktig størrelse"
        description="Bruk teltguiden for å finne riktig størrelse ut fra gjestetall, bordoppsett og hvor mye plass dere vil ha. Her ser du komfortable utgangspunkt, ikke bare maks kapasitet."
        path="/hvor-stort-partytelt"
        ogImage={heroImages[2]?.src || heroImages[0]?.src}
        ogImageAlt={heroImages[2]?.alt || heroImages[0]?.alt}
      />
      <SizeGuide
        titleAs="h1"
        titleText="Finn riktig størrelse på partytelt"
        subtitleText="Bruk størrelsesguiden for å finne riktig størrelse ut fra gjestetall, bordoppsett og hvor mye plass dere vil ha i teltet."
      />
    </>
  )
}
