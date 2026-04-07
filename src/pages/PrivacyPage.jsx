import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import SEO from '../components/SEO'
import Eyebrow from '../components/Eyebrow'
import { companyInfo } from '../data/produkter'

export default function PrivacyPage() {
  return (
    <section className="section privacy-page">
      <SEO
        title="Personvern og cookies"
        description="Les hvordan Din Feiring behandler personopplysninger, cookies og kontaktdata når du bruker nettsiden eller sender en forespørsel."
        path="/personvern"
      />
      <div className="container narrow-container">
        <div className="page-breadcrumbs">
          <Link to="/">Forside</Link>
          <span>/</span>
          <strong>Personvern</strong>
        </div>

        <article className="privacy-content">
          <header className="privacy-header">
            <Eyebrow icon={ShieldCheck} className="badge badge-spaced">
              Personvern
            </Eyebrow>
            <h1 className="section-title">Personvernerklæring</h1>
            <p className="section-copy">Sist oppdatert: 18. mars 2026</p>
          </header>

          <p className="section-copy">
            Din Feiring er en leverandør av partytelt, bord, stoler og lydutstyr med lager i Sandefjord. Vi tar
            personvern på alvor og behandler bare personopplysninger i samsvar med gjeldende regelverk, inkludert EUs
            personvernforordning (GDPR) og norsk personopplysningslov.
          </p>

          <p className="section-copy">
            Denne erklæringen forklarer hvilke opplysninger vi samler inn, hvordan de brukes, hvor lenge de lagres og
            hvilke rettigheter du som registrert har.
          </p>

          <section className="privacy-section">
            <h2 className="privacy-title">1. Behandlingsansvarlig</h2>
            <p className="section-copy">
              Behandlingsansvarlig er Din Feiring, org.nr. -, med lageradresse {companyInfo.address}. Har du spørsmål om
              hvordan vi behandler personopplysninger, kan du kontakte oss på{' '}
              <a href={companyInfo.emailHref} className="text-link">
                {companyInfo.email}
              </a>{' '}
              eller på telefon{' '}
              <a href={companyInfo.phoneHref} className="text-link">
                {companyInfo.phoneDisplay}
              </a>
              .
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">2. Hvilke opplysninger samles inn</h2>
            <p className="section-copy">
              Vi henter primært personopplysninger direkte fra deg når du kontakter oss via nettsiden eller per telefon.
              I kontaktskjemaet kan du sende inn navn, telefonnummer, e-postadresse, dato for arrangementet,
              hjemmeadresse og hva du ønsker å leie. I tillegg kan vi få informasjon gjennom dialogen med deg, som
              antall gjester, leveringsadresse og andre preferanser.
            </p>
            <p className="section-copy">
              Når du bruker kontaktskjemaet på nettsiden, kan opplysningene også behandles gjennom en ekstern
              skjematjeneste og e-postleverandør for å sende forespørselen trygt videre til innboksen vår. Dette kan for
              eksempel være en tjeneste som Formspree eller tilsvarende leverandør.
            </p>
            <p className="section-copy">
              Nettsiden bruker informasjonskapsler (cookies) for å forbedre brukeropplevelsen, analysere trafikk og for
              markedsføring. Vi bruker Google Analytics for å samle anonymisert statistikk. Du kan selv velge hvilke
              cookies du vil godta gjennom våre innstillinger.
            </p>
            <div className="privacy-cookie-action">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
                className="btn btn-secondary btn-sm"
              >
                Administrer cookie-innstillinger
              </button>
            </div>
            <p className="section-copy">
              Vi ber aldri om mer informasjon enn det som er nødvendig for å kunne svare på din henvendelse eller inngå
              en avtale.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">3. Formål og rettslig grunnlag</h2>

            <h3 className="privacy-subtitle">3.1 Svar på henvendelser og tilbud</h3>
            <p className="section-copy">
              Opplysningene brukes først og fremst til å svare på din henvendelse, gi prisestimat og avtale henting eller
              levering av utstyr. Det rettslige grunnlaget er vår berettigede interesse i å følge opp forespørsler og
              forberede inngåelse av en avtale, samt at behandlingen er nødvendig for å inngå eller oppfylle en avtale.
            </p>

            <h3 className="privacy-subtitle">3.2 Kundeoppfølging og kontraktsadministrasjon</h3>
            <p className="section-copy">
              Dersom du velger å bestille, brukes opplysningene til å inngå og gjennomføre leieavtaler, håndtere
              betaling, levere utstyr og yte kundeservice. Dette er nødvendig for å oppfylle avtalen.
            </p>

            <h3 className="privacy-subtitle">3.3 Regnskaps- og lovpålagte krav</h3>
            <p className="section-copy">
              Lovverket stiller krav til bokføring og oppbevaring av visse opplysninger. Vi er pålagt å behandle
              informasjon om kjøp og leie for å overholde rettslige forpliktelser.
            </p>

            <h3 className="privacy-subtitle">3.4 Markedsføring og analyse</h3>
            <p className="section-copy">
              Vi sender ikke nyhetsbrev eller reklame uten at du har bedt om det. Dersom du samtykker til å motta
              markedsføring, vil grunnlaget være ditt samtykke. Anonymiserte brukerdata fra cookies benyttes til å
              analysere trafikk og forbedre tjenestene.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">4. Lagringstid og sletting</h2>
            <p className="section-copy">
              Vi lagrer opplysningene så lenge det er nødvendig for å følge opp henvendelsen, administrere avtalen og
              oppfylle lovpålagte krav. Når formålet er oppfylt og lovpålagt lagringstid er utløpt, vil opplysningene
              slettes eller anonymiseres.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">5. Deling av opplysninger</h2>
            <p className="section-copy">
              Vi deler ikke personopplysninger med andre uten gyldig grunn. I noen tilfeller kan det være nødvendig å dele
              begrensede opplysninger med:
            </p>
            <ul className="privacy-list">
              <li>Tjenesteleverandører, som IT-leverandører, skjematjenester, e-posttjenester og regnskapsførere.</li>
              <li>Transport- eller utleiepartnere, dersom det er nødvendig for å levere eller hente utstyr.</li>
              <li>Offentlige myndigheter, når det kreves etter lov.</li>
            </ul>
            <p className="section-copy">Vi selger ikke personopplysninger til tredjeparter for markedsføringsformål.</p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">6. Dine rettigheter</h2>
            <p className="section-copy">Som registrert har du flere rettigheter etter personvernlovgivningen:</p>
            <ul className="privacy-list">
              <li>Innsyn - du kan be om kopi av opplysninger vi behandler om deg.</li>
              <li>Rett til retting - du kan be oss korrigere eller supplere opplysninger som er feil eller misvisende.</li>
              <li>Rett til sletting - du kan be om at opplysningene dine slettes uten ugrunnet opphold, med mindre vi er pålagt å oppbevare dem.</li>
              <li>Begrensning av behandling - i noen situasjoner kan du be oss begrense behandlingen.</li>
              <li>Protestere mot behandling - du kan protestere dersom vi behandler opplysninger på grunnlag av berettiget interesse.</li>
              <li>Dataportabilitet - du kan be om å få opplysningene dine utlevert i et strukturert, maskinlesbart format.</li>
            </ul>
            <p className="section-copy">
              Dersom du ønsker å utøve dine rettigheter, kan du sende oss en e-post til{' '}
              <a href={companyInfo.emailHref} className="text-link">
                {companyInfo.email}
              </a>
              . Du har også rett til å klage til Datatilsynet dersom du mener vår behandling av personopplysninger bryter
              regelverket.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">7. Sikkerhet</h2>
            <p className="section-copy">
              Vi har iverksatt tekniske og organisatoriske tiltak for å beskytte personopplysningene dine mot
              uautorisert tilgang, endring eller tap. Tilgang til opplysninger er begrenset til personer som trenger dem
              for å utføre sine arbeidsoppgaver.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-title">8. Endringer i erklæringen</h2>
            <p className="section-copy">
              Vi kan oppdatere denne personvernerklæringen når vi utvikler tjenestene våre eller dersom regelverket
              endres. Ved vesentlige endringer vil vi varsle om dette på nettsiden vår. Den til enhver tid gjeldende
              versjonen vil være tilgjengelig på dinfeiring.no.
            </p>
          </section>

          <div className="privacy-actions">
            <Link to="/kontakt" className="btn btn-primary">
              Kontakt oss
            </Link>
            <Link to="/" className="btn btn-secondary">
              Tilbake til forsiden
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
