import { Link } from 'react-router-dom'
import { Download, FileText } from 'lucide-react'
import SEO from '../components/SEO'
import Eyebrow from '../components/Eyebrow'
import { companyInfo, heroImages } from '../data/produkter'

const rentalTermsPdfUrl = `${import.meta.env.BASE_URL}leievilkar_holsvik_co_full.pdf`

const documentIntroLines = ['Utleie av partytelt, bord, stoler og soundbokser', 'Gjelder for privatkunder og bedrifter']

const rentalTermSections = [
  {
    title: 'Kort om disse vilkårene',
    paragraphs: [
      'Disse vilkårene gjelder med mindre noe annet er uttrykkelig avtalt skriftlig. For privatkunder gjelder ufravikelige regler i norsk forbrukerlovgivning foran motstridende vilkår.',
      'Ved fjernsalg til privatkunder, for eksempel bestilling på nett eller på telefon, skal lovpålagte opplysninger og eventuell angrerett håndteres i samsvar med angrerettloven.',
    ],
  },
  {
    title: '1. Avtalens omfang og aksept',
    paragraphs: [
      'Disse leievilkårene regulerer leie av utstyr fra Holsvik & Co, herunder partytelt, bord, stoler, soundbokser og tilhørende utstyr.',
      'Avtalen er bindende når bestillingen er bekreftet av Holsvik & Co, skriftlig eller på annen etterprøvbar måte.',
      'Den som bestiller utstyret anses som leietaker og er økonomisk og rettslig ansvarlig etter avtalen. Privatkunder må være fylt 18 år.',
    ],
  },
  {
    title: '2. Leieperiode, utlevering og retur',
    paragraphs: [
      'Utstyr kan hentes av kunden eller leveres og/eller hentes av Holsvik & Co etter særskilt avtale. Montering og demontering utføres bare når dette er avtalt.',
      'Dersom ikke annet er avtalt, skal utstyret returneres senest siste dag i leieperioden.',
      'Ansvar under transport ligger hos den som faktisk står for transporten. Dersom kunden frakter utstyret selv, bærer kunden risikoen under transporten. Dersom Holsvik & Co står for transporten, bæres risikoen av Holsvik & Co under transporten.',
    ],
  },
  {
    title: '3. Fakturering og betaling',
    paragraphs: [
      'Holsvik & Co tilbyr faktura som betalingsmåte. Faktura utstedes ved henting eller levering av utstyret.',
      'Betalingsfristen er 14 dager fra fakturadato, med mindre annet er avtalt skriftlig.',
      'Ved forsinket betaling kan krav om forsinkelsesrenter og inndrivelseskostnader kreves i samsvar med gjeldende regler. Dersom saken sendes til inkasso, vil kunden også kunne bli belastet lovlige inkassokostnader.',
    ],
  },
  {
    title: '4. Avbestilling og manglende oppmøte',
    paragraphs: [
      'Avbestilling er kostnadsfri frem til 14 dager før avtalt start på leieperioden.',
      'Ved avbestilling senere enn 14 dager før leieperioden faktureres 25 % av avtalt leiebeløp som kompensasjon for reservasjon, planlegging og tapt utleiemulighet.',
      'Dersom kunden ikke møter opp for å hente utstyret eller på annen måte unnlater å benytte avtalt leie uten gyldig avbestilling, kan full leiepris faktureres.',
    ],
  },
  {
    title: '5. Bruk av utstyret',
    paragraphs: [
      'Utstyret skal bare brukes til ordinære og forsvarlige arrangementer og i samsvar med eventuelle instrukser fra Holsvik & Co.',
      'Utstyret kan ikke fremleies, lånes bort til tredjepart eller på annen måte overlates til andre uten forhåndsgodkjenning fra Holsvik & Co.',
      'Kunden er ansvarlig for skade, tap eller ekstra kostnader som skyldes feil bruk, uforsvarlig håndtering eller bruk i strid med disse vilkårene.',
    ],
  },
  {
    title: '6. Særlige regler for partytelt',
    paragraphs: [
      'Dersom kunden selv monterer teltet, har kunden fullt ansvar for at oppsett, forankring, bruk og nedrigging skjer forsvarlig.',
      'Teltet kan brukes ved vind opp til 8 m/s, forutsatt at medfølgende sikringsutstyr brukes korrekt.',
      'Ved varslet eller faktisk vind over 8 m/s, eller andre krevende værforhold, er kunden ansvarlig for ytterligere sikring, stans i bruk, eventuell nedmontering og alle skader som oppstår som følge av manglende tilpasning til forholdene.',
    ],
  },
  {
    title: '7. Særlige regler for soundbokser og annet elektrisk utstyr',
    paragraphs: [
      'Lydutstyr og elektrisk utstyr skal beskyttes mot regn, fukt, søl, støt, overbelastning og annen uforsvarlig bruk.',
      'Kunden er ansvarlig for skade på høyttalere, batterier, ladere, kabler og annet tilbehør som skyldes feil bruk, mangelfull beskyttelse eller uforsvarlig oppbevaring.',
    ],
  },
  {
    title: '8. Rengjøring, tilstand og kontroll',
    paragraphs: [
      'Utstyret skal returneres rengjort og i samme stand som ved utlevering, med unntak av alminnelig og forsvarlig bruksslitasje.',
      'Holsvik & Co kan dokumentere tilstanden ved ut- og innlevering, herunder med bilder eller annen registrering. Slik dokumentasjon kan brukes som grunnlag ved vurdering av skade, rengjøringstilstand og erstatningskrav.',
      'Det beregnes normalt ikke eget rengjøringsgebyr. Dersom manglende rengjøring eller dårlig behandling medfører skade, ekstraarbeid eller at utstyret ikke kan brukes av senere leietaker, kan kunden etterfaktureres for dokumenterte kostnader og tap.',
    ],
  },
  {
    title: '9. Skade, tap, tyveri og erstatningsansvar',
    paragraphs: [
      'Kunden har ansvar for utstyret fra risikoen går over ved utlevering til det er returnert og kontrollert, med de presiseringer som følger av punkt 2 om transport.',
      'Ved skade, bortkomst, ufullstendig retur eller ødeleggelse kan kunden holdes ansvarlig for reparasjonskostnader, nødvendige rengjøringskostnader, verdireduksjon eller gjenanskaffelsesverdi når reparasjon ikke er forsvarlig.',
      'Ved mistanke om tyveri eller underslag kan forholdet politianmeldes.',
    ],
  },
  {
    title: '10. Forsinket tilbakelevering',
    paragraphs: [
      'Dersom utstyret ikke returneres til avtalt tid, kan Holsvik & Co kreve betaling for videre bruk tilsvarende ordinær leie for påbegynt ekstra døgn, samt erstatning for dokumentert tap overfor senere kunder eller andre direkte merkostnader som følger av forsinkelsen.',
      'Holsvik & Co kan også kreve at kunden straks opplyser hvor utstyret befinner seg og når det blir levert tilbake.',
    ],
  },
  {
    title: '11. Mangel ved levering og reklamasjon',
    paragraphs: [
      'Kunden plikter å kontrollere utstyret så snart det er praktisk mulig etter mottak og melde fra uten ugrunnet opphold dersom noe mangler, er skadet eller ikke fungerer som forutsatt.',
      'Holsvik & Co skal, så langt det er praktisk mulig, få anledning til å rette mangelen, levere erstatningsutstyr eller gi forholdsmessig prisavslag dersom det foreligger en faktisk mangel som Holsvik & Co er ansvarlig for.',
      'Holsvik & Co er ikke ansvarlig for indirekte tap, herunder tapt fortjeneste, avbruddstap eller andre følgetap, med mindre annet følger av ufravikelig lov.',
    ],
  },
  {
    title: '12. Force majeure',
    paragraphs: [
      'Holsvik & Co er ikke ansvarlig for manglende eller forsinket oppfyllelse dersom dette skyldes forhold utenfor rimelig kontroll, herunder ekstremvær, ulykker, brann, sykdom, trafikkstans, offentlige pålegg, strømbrudd, leverandørsvikt eller lignende forhold som ikke med rimelighet kunne forutses eller overvinnes.',
      'Ved force majeure kan Holsvik & Co avlyse, utsette eller begrense leveransen uten ansvar for indirekte tap. Eventuell tilbakebetaling begrenses til det kunden har betalt for den delen av leveransen som ikke blir gjennomført, med mindre annet følger av ufravikelig lov.',
    ],
  },
  {
    title: '13. Personvern og kommunikasjon',
    paragraphs: [
      'Holsvik & Co behandler kontaktopplysninger og avtaleopplysninger i den utstrekning det er nødvendig for å administrere bestilling, levering, fakturering, oppfølging og eventuell inndrivelse av krav.',
      'Kunden er ansvarlig for at oppgitte kontaktopplysninger er riktige og oppdaterte.',
    ],
  },
  {
    title: '14. Lovvalg og tvister',
    paragraphs: [
      'Avtalen reguleres av norsk rett.',
      'Tvister skal søkes løst i minnelighet. Dersom dette ikke lykkes, kan saken bringes inn for ordinære domstoler med Vestfold tingrett som verneting, med mindre ufravikelige regler gir privatkunden rett til et annet verneting.',
    ],
  },
]

const deliveryChecklist = [
  { label: 'Ordrenummer / navn kontrollert', note: '........................................' },
  { label: 'Utstyr utlevert i synlig god stand', note: '........................................' },
  { label: 'Antall enheter kontrollert', note: '........................................' },
  { label: 'Tilbehør, kabler og sikringsutstyr medfølger', note: '........................................' },
  { label: 'Leieperiode og returtid bekreftet', note: '........................................' },
  { label: 'Kunden informert om rengjøring og ansvar', note: '........................................' },
  { label: 'Bilder tatt ved behov', note: '........................................' },
]

export default function RentalTermsPage() {
  return (
    <section className="section privacy-page">
      <SEO
        title="Leievilkår for partytelt, bord og stoler"
        description="Les leievilkår for partytelt, bord, stoler og lydutstyr fra Din Feiring i Sandefjord. Her finner du regler for leieperiode, ansvar, betaling og bruk."
        path="/leievilkar"
        ogImage={heroImages[0]?.src}
        ogImageAlt={heroImages[0]?.alt}
      />
      <div className="container narrow-container">
        <div className="page-breadcrumbs">
          <Link to="/">Forside</Link>
          <span>/</span>
          <strong>Leievilkår</strong>
        </div>

        <article className="privacy-content">
          <header className="privacy-header">
            <Eyebrow icon={FileText} className="badge badge-spaced">
              Leievilkår
            </Eyebrow>
            <h1 className="section-title">Leievilkår for Din Feiring</h1>
            <div className="legal-lead-list">
              {documentIntroLines.map((line) => (
                <p key={line} className="section-copy legal-lead-item">
                  {line}
                </p>
              ))}
            </div>
            <div className="legal-download-row">
              <p className="section-copy">Sist oppdatert: 18. mars 2026</p>
              <a
                href={rentalTermsPdfUrl}
                download="leievilkar_holsvik_co_full.pdf"
                className="btn btn-secondary btn-small"
                aria-label="Last ned leievilkår som PDF"
              >
                <Download size={16} />
                Last ned PDF
              </a>
            </div>
          </header>

          <section className="privacy-section">
            <h2 className="privacy-title">Utleier</h2>
            <ul className="legal-meta-list">
              <li>
                <strong>Holsvik &amp; Co</strong>
              </li>
              <li>Org.nr. 935 536 049</li>
              <li>Pinaveien 8 A, 3225 Sandefjord</li>
              <li>
                <a href={companyInfo.emailHref} className="text-link">
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={companyInfo.phoneHref} className="text-link">
                  {companyInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href="https://dinfeiring.no/" className="text-link">
                  dinfeiring.no
                </a>
              </li>
            </ul>
          </section>

          {rentalTermSections.map((section) => (
            <section key={section.title} className="privacy-section">
              <h2 className="privacy-title">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="privacy-section">
            <h2 className="privacy-title">Praktisk sjekkliste ved utlevering</h2>
            <p className="section-copy">
              Denne sjekklisten er ikke en del av selve ansvarsreglene, men kan brukes operativt av Holsvik &amp; Co ved hver
              utleie.
            </p>
            <div className="legal-checklist" role="table" aria-label="Praktisk sjekkliste ved utlevering">
              <div className="legal-checklist-row legal-checklist-row-head" role="row">
                <span role="columnheader">Kontrollpunkt</span>
                <span role="columnheader">Avkrysning / notat</span>
              </div>
              {deliveryChecklist.map((item) => (
                <div key={item.label} className="legal-checklist-row" role="row">
                  <span className="legal-checklist-label" role="cell">
                    {item.label}
                  </span>
                  <span className="legal-checklist-note" role="cell">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
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
