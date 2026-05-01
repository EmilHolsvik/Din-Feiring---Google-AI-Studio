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
  }

  const toggleConsent = (key) => {
    setConsent((current) => ({ ...current, [key]: !current[key] }))
  }

  const saveConsent = (newConsent) => {
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    updateGtag(newConsent)
    setShowBanner(false)
    setShowModal(false)
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
                    <h3 className="cookie-banner-title">Cookies på nettsiden</h3>
                    <p className="cookie-banner-description">
                      Vi bruker cookies til analyse og målrettede annonser. Velg hva du vil tillate – eller godta alle.
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
                    Godkjenn alle
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
                  Velg hva du vil tillate. Nødvendige cookies kan ikke slås av – de kreves for at nettsiden skal fungere.
                </p>

                <div className="cookie-options">
                  <div className="cookie-option">
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Nødvendige</h4>
                      <p className="cookie-option-desc">Kreves for sikkerhet og skjemaer på nettsiden.</p>
                    </div>
                    <button type="button" className="cookie-toggle disabled" disabled aria-label="Nødvendige cookies er alltid aktive">
                      <Check size={16} className="text-white" />
                    </button>
                  </div>

                  <div className="cookie-option">
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Analyse</h4>
                      <p className="cookie-option-desc">Måler bruk av nettsiden slik at vi vet hva som funker.</p>
                    </div>
                    <button
                      type="button"
                      className={`cookie-toggle ${consent.analytics ? 'active' : ''}`}
                      role="switch"
                      aria-checked={consent.analytics}
                      aria-label="Slå analysecookies av eller på"
                      onClick={() => toggleConsent('analytics')}
                    >
                      <div className="toggle-handle" />
                    </button>
                  </div>

                  <div className="cookie-option">
                    <div className="cookie-option-info">
                      <h4 className="cookie-option-title">Markedsføring</h4>
                      <p className="cookie-option-desc">Brukes til relevante annonser og måling av annonse-effekt.</p>
                    </div>
                    <button
                      type="button"
                      className={`cookie-toggle ${consent.marketing ? 'active' : ''}`}
                      role="switch"
                      aria-checked={consent.marketing}
                      aria-label="Slå markedsføringscookies av eller på"
                      onClick={() => toggleConsent('marketing')}
                    >
                      <div className="toggle-handle" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={handleAcceptAll} className="btn btn-secondary">
                  Godkjenn alle
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
        .cookie-banner .container {
          max-width: none;
          padding: 0;
        }
        @media (min-width: 768px) {
          .cookie-banner {
            left: auto;
            right: 1.5rem;
            width: min(380px, calc(100vw - 3rem));
            padding: 0;
          }
        }
        .cookie-banner-content {
          background: var(--white);
          border-radius: 0.875rem;
          padding: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .cookie-banner-text {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .cookie-icon-wrapper {
          background: var(--cream-light);
          padding: 0.5rem;
          border-radius: 0.5rem;
          color: var(--primary);
          flex-shrink: 0;
        }
        .cookie-banner-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.125rem;
        }
        .cookie-banner-description {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .cookie-banner-actions {
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
        }
        .cookie-banner-actions .btn {
          flex: 1;
          min-width: 80px;
          padding: 6px 10px;
          font-size: 0.75rem;
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
          background: var(--white);
          border-radius: 1.25rem;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
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
          color: var(--primary);
        }
        .modal-close {
          appearance: none;
          border: 0;
          background: transparent;
          color: var(--primary-light);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
          cursor: pointer;
        }
        .modal-close:hover {
          background: var(--cream-light);
          color: var(--primary);
        }
        .modal-body {
          padding: 1.5rem;
        }
        .modal-description {
          font-size: 0.9375rem;
          color: var(--text-muted);
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
          background: var(--cream-light);
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .cookie-option:hover {
          border-color: var(--border-dark);
        }
        .cookie-option-title {
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.125rem;
        }
        .cookie-option-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
        .cookie-toggle {
          appearance: none;
          border: 0;
          padding: 0;
          display: inline-flex;
          align-items: center;
          width: 3rem;
          height: 1.5rem;
          background: var(--border-dark);
          border-radius: 1rem;
          position: relative;
          transition: all 0.3s;
          flex-shrink: 0;
          cursor: pointer;
        }
        .cookie-toggle.active {
          background: var(--primary);
        }
        .cookie-toggle.disabled {
          background: #a7b3c5;
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
          background: var(--cream-light);
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }
      `}</style>
    </>
  )
}
