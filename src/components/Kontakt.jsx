import { useState } from 'react'
import { BadgeCheck, ClipboardList, Mail, MapPin, PackageCheck, Phone } from 'lucide-react'
import FadeIn from './FadeIn'
import Eyebrow from './Eyebrow'
import QuoteForm from './QuoteForm'
import { companyInfo } from '../data/produkter'

const contactSellingPoints = [
  {
    title: 'Enkel start',
    text: 'Start med navn, telefon og e-post. Resten kan du fylle inn steg for steg.',
    Icon: ClipboardList,
  },
  {
    title: 'Alt i samme forespørsel',
    text: 'Du kan ta med telt, bord, stoler og lyd i samme skjema hvis du vil samle alt på ett sted.',
    Icon: PackageCheck,
  },
  {
    title: 'Lokalt og tydelig',
    text: 'Vi holder til i Sandefjord og avklarer pris, henting og levering på en ryddig måte.',
    Icon: MapPin,
  },
]

const contactHeading = 'Send oss en forespørsel'
const contactDescription =
  'Send inn en forespørsel, så hører du fra oss. Velg gjerne dato, utstyr og antall, så blir det enklere for oss å hjelpe deg raskt. Er du usikker på hvilket utstyr du trenger, hjelper vi deg gjerne.'

export default function Kontakt({
  eyebrow = 'Kontakt',
  eyebrowIcon = Mail,
  presetItems = [],
  showSellingPoints = false,
  compactSpacing = false,
  homeTone = false,
  productSpacing = false,
  titleAs = 'h2',
  title = contactHeading,
  subtitle = contactDescription,
}) {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const TitleTag = titleAs

  return (
    <FadeIn>
      <section
        id="kontakt"
        className={`section ${compactSpacing ? 'section-tight' : ''} ${homeTone ? 'kontakt-section-home' : ''} ${
          productSpacing ? 'kontakt-section-product' : ''
        } ${hasSubmitted ? 'kontakt-section-submitted' : ''}`}
      >
        <div className="container kontakt-section">
          {hasSubmitted ? (
            <div className="kontakt-success-shell">
              <div className="kontakt-success-card" role="status" aria-live="polite">
                <span className="kontakt-success-icon" aria-hidden="true">
                  <BadgeCheck size={28} strokeWidth={1.9} />
                </span>
                <h3 className="kontakt-success-title">Vi har mottatt henvendelsen din</h3>
                <p className="kontakt-success-copy">
                  Takk. Vi ser gjennom det du har sendt og svarer deg så fort vi kan.
                </p>
                <p className="kontakt-success-copy kontakt-success-copy-muted">
                  Hvis det haster, kan du ringe <a href={companyInfo.phoneHref}>{companyInfo.phoneDisplay}</a> eller sende
                  e-post til <a href={companyInfo.emailHref}>{companyInfo.email}</a>.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className={`kontakt-layout ${showSellingPoints ? 'kontakt-layout-emphasized' : ''}`}>
                <div className="kontakt-copy">
                  <div className="section-header kontakt-header">
                    <Eyebrow icon={eyebrowIcon} className="badge badge-spaced">
                      {eyebrow}
                    </Eyebrow>
                    <TitleTag className="section-title">{title}</TitleTag>
                    <p className="section-subtitle kontakt-subtitle">{subtitle}</p>
                  </div>

                  <div className="contact-intro-clean">
                    <div className="contact-direct-row" aria-label="Kontaktinformasjon">
                      <a href={companyInfo.phoneHref} className="contact-direct-link">
                        <Phone size={16} />
                        <span>{companyInfo.phoneDisplay}</span>
                      </a>

                      <a href={companyInfo.emailHref} className="contact-direct-link">
                        <Mail size={16} />
                        <span>{companyInfo.email}</span>
                      </a>

                      <div className="contact-direct-link contact-direct-link-static">
                        <MapPin size={16} />
                        <span>{companyInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="kontakt-form-column">
                  <QuoteForm
                    showIntro={false}
                    surface
                    dense
                    presetItems={presetItems}
                    onSuccessfulSubmit={() => setHasSubmitted(true)}
                  />
                </div>
              </div>

              {showSellingPoints ? (
                <div className="kontakt-benefits" aria-labelledby="kontakt-benefits-title">
                  <div className="section-header section-header-centered section-header-sm kontakt-benefits-header">
                    <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
                      Derfor er det enkelt
                    </Eyebrow>
                    <h3 id="kontakt-benefits-title" className="section-title">
                      Det skal være enkelt å komme videre
                    </h3>
                    <p className="section-subtitle section-subtitle-centered compact-copy">
                      Kontaktsiden skal gjøre det lett å komme i gang, enten du vet hva du trenger eller vil ha hjelp til
                      å finne riktig oppsett.
                    </p>
                  </div>

                  <ul className="kontakt-benefits-grid" aria-label="Fordeler ved å sende en forespørsel">
                    {contactSellingPoints.map(({ title: itemTitle, text, Icon }) => (
                      <li key={itemTitle} className="kontakt-benefit">
                        <span className="kontakt-benefit-icon" aria-hidden="true">
                          <Icon size={24} strokeWidth={1.8} />
                        </span>
                        <h4 className="kontakt-benefit-title">{itemTitle}</h4>
                        <p className="kontakt-benefit-copy">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </FadeIn>
  )
}
