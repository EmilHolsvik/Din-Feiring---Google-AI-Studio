import { useState, useEffect } from 'react'
import { Cookie, X, Check, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [consent, setConsent] = useState({
    analytics: false,
    marketing: false,
    necessary: true,
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent)
      setConsent(parsed)
      updateGtag(parsed)
    } else {
      setShowBanner(true)
    }

    const handleOpenSettings = () => setShowModal(true)
    window.addEventListener('open-cookie-settings', handleOpenSettings)
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings)
  }, [])

  const updateGtag = (consentData) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: consentData.analytics ? 'granted' : 'denied',
        ad_storage: consentData.marketing ? 'granted' : 'denied',
        ad_user_data: consentData.marketing ? 'granted' : 'denied',
        ad_personalization: consentData.marketing ? 'granted' : 'denied',
      })
    }
  }

  const handleAcceptAll = () => {
    const newConsent = { analytics: true, marketing: true, necessary: true }
    saveConsent(newConsent)
  }

  const handleDeclineAll = () => {
    const newConsent = { analytics: false, marketing: false, necessary: true }
    saveConsent(newConsent)
  }

  const handleSaveCustom = () => {
    saveConsent(consent)
    setShowModal(false)
  }

  const saveConsent = (newConsent) => {
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    updateGtag(newConsent)
    setShowBanner(false)
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="cookie-banner"
          >
            <div className="container">
              <div className="cookie-banner-content">
                <div className="cookie-banner-text">
                  <div className="cookie-icon-wrapper">
                    <Cookie className="cookie-icon" size={24} />
                  </div>
                  <div>
                    <h3 className="cookie-banner-title">Vi bruker informasjonskapsler</h3>
                    <p className="cookie-banner-description">
                      Vi bruker cookies for å forbedre din opplevelse, analysere trafikk og vise relevante annonser. 
                      Du kan velge å godta alle eller administrere dine innstillinger.
                    </p>
                  </div>
                </div>
                <div className="cookie-banner-actions">
                  <button onClick={() => setShowModal(true)} className="btn btn-ghost btn-sm">
                    Administrer
                  </button>
                  <button onClick={handleDeclineAll} className="btn btn-secondary btn-sm">
                    Avslå alle
                  </button>
                  <button onClick={handleAcceptAll} className="btn btn-primary btn-sm">
                    Godta alle
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content cookie-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title-wrapper">
                  <Shield className="text-primary" size={24} />
                  <h2 className="modal-title">Cookie-innstillinger</h2>
                </div>
                <button onClick={() => setShowModal(false)} className="modal-close">
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-description">
                  Her kan du velge hvilke informasjonskapsler du tillater oss å bruke. 
                  Nødvendige cookies kan ikke slås av da de kreves for at nettsiden skal fungere.
                </p>

                <div className="cookie-options">
                  <div className="cookie-option">
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Nødvendige</h4>
                      <p className="cookie-option-desc">Kreves for grunnleggende funksjonalitet som sikkerhet og skjemaer.</p>
                    </div>
                    <div className="cookie-toggle disabled">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="cookie-option" onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}>
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Analyse</h4>
                      <p className="cookie-option-desc">Hjelper oss å forstå hvordan besøkende bruker nettsiden slik at vi kan forbedre den.</p>
                    </div>
                    <button className={`cookie-toggle ${consent.analytics ? 'active' : ''}`}>
                      <div className="toggle-handle" />
                    </button>
                  </div>

                  <div className="cookie-option" onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}>
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Markedsføring</h4>
                      <p className="cookie-option-desc">Brukes for å vise relevante annonser og måle effekten av markedsføring.</p>
                    </div>
                    <button className={`cookie-toggle ${consent.marketing ? 'active' : ''}`}>
                      <div className="toggle-handle" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={handleAcceptAll} className="btn btn-secondary">
                  Godta alle
                </button>
                <button onClick={handleSaveCustom} className="btn btn-primary">
                  Lagre valg
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 1.5rem;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .cookie-banner {
            left: 1.5rem;
            right: auto;
            width: 420px;
            padding: 0;
          }
        }
        .cookie-banner-content {
          background: white;
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cookie-banner-text {
          display: flex;
          gap: 0.875rem;
          align-items: flex-start;
        }
        .cookie-icon-wrapper {
          background: #f1f5f9;
          padding: 0.625rem;
          border-radius: 0.625rem;
          color: #0f172a;
          flex-shrink: 0;
        }
        .cookie-banner-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.125rem;
        }
        .cookie-banner-description {
          font-size: 0.8125rem;
          color: #64748b;
          line-height: 1.5;
        }
        .cookie-banner-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .cookie-banner-actions .btn {
          flex: 1;
          min-width: 100px;
          padding: 8px 12px;
          font-size: 0.8125rem;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
          padding: 1rem;
        }
        .cookie-modal {
          background: white;
          border-radius: 1.25rem;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .modal-title-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }
        .modal-close {
          color: #94a3b8;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        .modal-close:hover {
          background: #f1f5f9;
          color: #0f172a;
        }
        .modal-body {
          padding: 1.5rem;
        }
        .modal-description {
          font-size: 0.9375rem;
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .cookie-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cookie-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 0.75rem;
          border: 1px solid #f1f5f9;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cookie-option:hover {
          border-color: #cbd5e1;
        }
        .cookie-option-title {
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.125rem;
        }
        .cookie-option-desc {
          font-size: 0.8125rem;
          color: #64748b;
        }
        .cookie-toggle {
          width: 3rem;
          height: 1.5rem;
          background: #e2e8f0;
          border-radius: 1rem;
          position: relative;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .cookie-toggle.active {
          background: #0f172a;
        }
        .cookie-toggle.disabled {
          background: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: not-allowed;
        }
        .toggle-handle {
          width: 1.125rem;
          height: 1.125rem;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 0.1875rem;
          left: 0.1875rem;
          transition: all 0.3s;
        }
        .cookie-toggle.active .toggle-handle {
          left: 1.6875rem;
        }
        .modal-footer {
          padding: 1.5rem;
          background: #f8fafc;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }
      `}</style>
    </>
  )
}
