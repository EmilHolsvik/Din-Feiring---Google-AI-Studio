import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function About() {
  useDocumentTitle('Om oss | Din Feiring')

  return (
    <>
      <AboutSection variant="full" />
      <WhyChooseUsSection />
    </>
  )
}
