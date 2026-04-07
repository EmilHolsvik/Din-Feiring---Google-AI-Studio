import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const BordOgStolerPage = lazy(() => import('./pages/BordOgStolerPage'))
const PartyteltPage = lazy(() => import('./pages/PartyteltPage'))
const PartyteltBryllupPage = lazy(() => import('./pages/PartyteltBryllupPage'))
const PartyteltKonfirmasjonPage = lazy(() => import('./pages/PartyteltKonfirmasjonPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const Produkt = lazy(() => import('./pages/Produkt'))
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const SizeGuidePage = lazy(() => import('./pages/SizeGuidePage'))
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const RentalTermsPage = lazy(() => import('./pages/RentalTermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <section className="section section-tight">
      <div className="container">
        <p className="section-copy">Laster side...</p>
      </div>
    </section>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/partytelt" element={<PartyteltPage />} />
      <Route path="/bord-og-stoler" element={<BordOgStolerPage />} />
      <Route path="/partytelt-konfirmasjon" element={<PartyteltKonfirmasjonPage />} />
      <Route path="/partytelt-bryllup" element={<PartyteltBryllupPage />} />
      <Route path="/om-oss" element={<About />} />
      <Route path="/produkter" element={<ProductsPage />} />
      <Route path="/produkter/:id" element={<Produkt />} />
      <Route path="/hvor-stort-partytelt" element={<SizeGuidePage />} />
      <Route path="/teltguide" element={<Navigate to="/hvor-stort-partytelt" replace />} />
      <Route path="/artikler" element={<ArticlesPage />} />
      <Route path="/artikler/:slug" element={<ArticlePage />} />
      <Route path="/priser" element={<Navigate to="/kalkulator" replace />} />
      <Route path="/kalkulator" element={<CalculatorPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/leievilkar" element={<RentalTermsPage />} />
      <Route path="/personvern" element={<PrivacyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <CookieConsent />
      <div className="app-shell">
        <Navbar />
        <main id="hovedinnhold" className="app-main">
          <Suspense fallback={<RouteFallback />}>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
