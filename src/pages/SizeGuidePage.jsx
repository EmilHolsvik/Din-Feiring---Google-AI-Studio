import SizeGuide from '../components/SizeGuide'
import SEO from '../components/SEO'

export default function SizeGuidePage() {
  return (
    <>
      <SEO 
        title="Hvor stort partytelt trenger jeg? – Se vår teltguide"
        description="Finn riktig størrelse på partytelt til din fest. Vår teltguide viser deg hvor mange personer som får plass i ulike teltstørrelser, fra 18 til 72 kvm."
      />
      <SizeGuide />
    </>
  )
}
