import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import Produkt from './pages/Produkt'
import CalculatorPage from './pages/CalculatorPage'
import ContactPage from './pages/ContactPage'
import SizeGuidePage from './pages/SizeGuidePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import RentalTermsPage from './pages/RentalTermsPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFound from './pages/NotFound'

function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
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
      <div className="app-shell">
        <Navbar />
        <main id="hovedinnhold" className="app-main">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
