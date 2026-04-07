import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { companyInfo, navigationLinks } from '../data/produkter'
import logoUrl from '../images/image_42.png'

export default function Footer() {
  const footerNavigationLinks = navigationLinks.filter((item) => item.path !== '/kontakt')
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&z=15&output=embed`

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="stack-md footer-brand-column">
            <div className="brand-lockup-footer">
              <img src={logoUrl} alt="Din Feiring" className="brand-logo footer-logo" width="184" height="84" referrerPolicy="no-referrer" />
            </div>

            <p className="footer-copy">Utleie av telt, bord, stoler og lyd fra vårt lager i Sandefjord.</p>

            <Link to="/kontakt" className="btn btn-primary btn-small btn-inline footer-cta">
              Be om tilbud
              <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <h2 className="footer-title">Lenker</h2>
            <ul className="footer-list">
              {footerNavigationLinks.map((item) => (
                <li key={item.path}>
                  {item.isExternal ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="footer-link">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} className="footer-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Kontakt</h2>
            <ul className="footer-list footer-list-spacious">
              <li>
                <a href={companyInfo.phoneHref} className="footer-contact">
                  <Phone size={16} />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={companyInfo.emailHref} className="footer-contact">
                  <Mail size={16} />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li className="footer-contact footer-contact-static">
                <MapPin size={16} />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>

          <div className="footer-map-column">
            <h2 className="footer-title">Vårt lager</h2>
            <div className="footer-map-frame">
              <iframe
                title={`Kart over ${companyInfo.address}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer-map"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Link to="/leievilkar" className="footer-meta-link footer-bottom-left">
            Leievilkår
          </Link>
          <span className="footer-bottom-copy">© 2026 Din Feiring. Alle rettigheter reservert.</span>
          <Link to="/personvern" className="footer-meta-link footer-bottom-right">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  )
}
