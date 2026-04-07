import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { companyInfo, navigationLinks } from '../data/produkter'
import logoUrl from '../images/ChatGPT_Image_18_mars_2026_08_06_10_1_Photoroom.png'

export default function Navbar() {
  const headerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [viewportMode, setViewportMode] = useState('desktop')
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isMobileViewport = viewportMode === 'mobile'
  const isTabletViewport = viewportMode === 'tablet'
  const isCompactDesktopViewport = viewportMode === 'desktop-compact'
  const isFullDesktopViewport = viewportMode === 'desktop'
  const isCompactDropdownViewport = !isMobileViewport
  const headerNavigationLinks = navigationLinks
  const mobileNavigationLinks = headerNavigationLinks.filter((link) => link.path !== '/kontakt')
  const menuNavigationLinks = isMobileViewport ? mobileNavigationLinks : headerNavigationLinks
  const isCurrentPath = (path) => {
    if (path === '/') {
      return location.pathname === path
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateViewportMode = () => {
      if (window.innerWidth <= 768) {
        setViewportMode('mobile')
        return
      }

      if (window.innerWidth <= 1024) {
        setViewportMode('tablet')
        return
      }

      if (window.innerWidth <= 1180) {
        setViewportMode('desktop-compact')
        return
      }

      setViewportMode('desktop')
    }

    updateViewportMode()
    window.addEventListener('resize', updateViewportMode)
    return () => window.removeEventListener('resize', updateViewportMode)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.style.overflow = isOpen && isMobileViewport ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isMobileViewport])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)')
    const handleViewportChange = (event) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleViewportChange)
      return () => mediaQuery.removeEventListener('change', handleViewportChange)
    }

    mediaQuery.addListener(handleViewportChange)
    return () => mediaQuery.removeListener(handleViewportChange)
  }, [])

  useEffect(() => {
    if (!isOpen || !isCompactDropdownViewport) {
      return undefined
    }

    const closeDropdown = () => setIsOpen(false)
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeDropdown()
      }
    }

    window.addEventListener('scroll', closeDropdown, { passive: true })
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('scroll', closeDropdown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen, isCompactDropdownViewport])

  return (
    <header ref={headerRef} className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <a href="#hovedinnhold" className="skip-link">
        Hopp til hovedinnhold
      </a>
      <div className="container">
        <div className="site-header-row">
          {isMobileViewport ? (
            <a
              href={companyInfo.phoneHref}
              className="mobile-call-action mobile-utility mobile-utility-call"
              aria-label={`Ring oss på ${companyInfo.phoneDisplay}`}
            >
              <Phone size={18} />
              <span className="mobile-utility-label">Ring</span>
            </a>
          ) : (
            <div className="header-menu-slot">
              <button
                type="button"
                className="mobile-menu-toggle"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
                aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
                <span className="mobile-menu-label">Meny</span>
              </button>
            </div>
          )}

          <Link to="/" className="brand-lockup" aria-label="Din Feiring forsiden">
            <img src={logoUrl} alt="Din Feiring" className="brand-logo brand-logo-header" width="176" height="80" referrerPolicy="no-referrer" />
          </Link>

          {isFullDesktopViewport ? (
            <div className="desktop-actions">
              <a
                href={companyInfo.phoneHref}
                className="utility-link utility-link-phone"
                aria-label={`Ring oss på ${companyInfo.phoneDisplay}`}
              >
                <Phone size={16} />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
            </div>
          ) : isTabletViewport || isCompactDesktopViewport ? (
            <div className="desktop-actions">
              <a
                href={companyInfo.phoneHref}
                className="mobile-utility mobile-utility-call header-call-action"
                aria-label={`Ring oss på ${companyInfo.phoneDisplay}`}
              >
                <Phone size={18} />
                <span className="mobile-utility-label">Ring</span>
              </a>
            </div>
          ) : null}

          {isMobileViewport ? (
            <div className="mobile-actions">
              <button
                type="button"
                className="mobile-menu-toggle"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
                aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
                <span className="mobile-menu-label">Meny</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav-panel ${isOpen ? 'mobile-nav-panel-open' : ''} ${
          isCompactDropdownViewport ? 'mobile-nav-panel-compact' : ''
        }`}
        aria-hidden={!isOpen}
        onClick={(event) => {
          if (event.target.id === 'mobile-nav-panel') {
            setIsOpen(false)
          }
        }}
      >
        <div className="container mobile-nav-inner">
          <nav className={`mobile-nav ${isCompactDropdownViewport ? 'mobile-nav-compact' : ''}`} aria-label="Mobilnavigasjon">
            {!isCompactDropdownViewport ? <p className="mobile-nav-eyebrow">{isHome ? 'Utforsk' : 'Navigasjon'}</p> : null}
            <ul className={`mobile-nav-list ${isCompactDropdownViewport ? 'mobile-nav-list-compact' : ''}`}>
              {menuNavigationLinks.map((link) => (
                <li key={link.path}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isCompactDropdownViewport ? 'compact-nav-link' : 'mobile-nav-link'}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      aria-current={isCurrentPath(link.path) ? 'page' : undefined}
                      className={({ isActive }) =>
                        `${isCompactDropdownViewport ? 'compact-nav-link' : 'mobile-nav-link'} ${
                          isActive ? (isCompactDropdownViewport ? 'compact-nav-link-active' : 'mobile-nav-link-active') : ''
                        }`
                      }
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            {!isCompactDropdownViewport ? (
              <div className="mobile-nav-contact-section">
                <p className="mobile-nav-eyebrow">Kontakt oss</p>
                <div className="mobile-nav-contact-list" aria-label="Kontaktvalg">
                  <a
                    href={companyInfo.phoneHref}
                    className="mobile-nav-link mobile-nav-contact-link"
                    aria-label={`Ring oss på ${companyInfo.phoneDisplay}`}
                  >
                    <Phone size={18} />
                    <span>{companyInfo.phoneDisplay}</span>
                  </a>

                  <a
                    href={companyInfo.emailHref}
                    className="mobile-nav-link mobile-nav-contact-link"
                    aria-label={`Send e-post til ${companyInfo.email}`}
                  >
                    <Mail size={16} />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  )
}
