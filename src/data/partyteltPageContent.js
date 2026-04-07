import { alleProdukter } from './produkter'

const partyteltOrder = ['partytelt-3x6', 'partytelt-3x8', 'partytelt-5x8', 'partytelt-5x10', 'partytelt-6x12']

export const partyteltProducts = alleProdukter
  .filter((product) => product.kategoriId === 'partytelt')
  .sort((a, b) => partyteltOrder.indexOf(a.id) - partyteltOrder.indexOf(b.id))

export const partyteltBenefits = [
  {
    title: 'Lager i Sandefjord',
    text: 'Du vet hvor utstyret kommer fra, og du får en lokal leverandør som er enkel å forholde seg til.',
  },
  {
    title: 'Tydelige priser',
    text: 'Prisene er synlige før du tar kontakt, slik at du kan sammenligne størrelser og planlegge budsjettet tidlig.',
  },
  {
    title: 'Alt til feiringen samlet',
    text: 'Du kan bestille telt, bord, stoler og lyd fra samme sted og slippe å koordinere flere leverandører.',
  },
  {
    title: 'Hjelp til riktig størrelse',
    text: 'Er du usikker på kapasitet, hjelper vi deg med å velge et telt som passer antall gjester og type arrangement.',
  },
]

export const partyteltServicePoints = [
  {
    title: 'Henting eller levering',
    text: 'Du kan hente selv i Sandefjord, eller avtale levering hvis det passer bedre for arrangementet ditt.',
  },
  {
    title: 'Montering og trygg sikring',
    text: 'Vi legger vekt på at teltet skal stå trygt og fungere godt gjennom hele dagen, ikke bare se bra ut på bilder.',
  },
  {
    title: 'Tilpasset ulike arrangementer',
    text: 'Vi leverer ofte til konfirmasjon, dåp, bryllup, sommerfest og firmaarrangementer i Sandefjord og Vestfold.',
  },
  {
    title: 'Enkel vei videre',
    text: 'Du kan lese teltguiden, regne på prisestimatet eller sende en forespørsel når du er klar.',
  },
]

export const partyteltFaq = [
  {
    question: 'Hvilken størrelse partytelt bør vi velge?',
    answer:
      'Det kommer an på hvor mange som skal være under teltet samtidig og hvordan dere skal bruke plassen. Som regel anbefaler vi å velge litt mer plass enn du tror du trenger, spesielt hvis dere skal ha bord, servering eller ekstra soner.',
  },
  {
    question: 'Kan vi hente teltet selv?',
    answer:
      'Ja, du kan hente selv i Sandefjord. Hvis du vil slippe logistikk og montering, kan levering avtales etter behov.',
  },
  {
    question: 'Passer partytelt til bryllup og konfirmasjon?',
    answer:
      'Ja. Mange bruker partytelt til konfirmasjon, bryllup, dåp, jubileum og hagefest fordi det gir fleksibilitet og en trygg plan B ved usikkert vær.',
  },
  {
    question: 'Kan vi få hjelp til å finne riktig størrelse?',
    answer:
      'Ja. Du kan bruke teltguiden vår eller sende en forespørsel med antall gjester og type oppsett, så hjelper vi deg videre.',
  },
]

export const partyteltInternalLinks = [
  {
    label: 'Se bord og stoler',
    to: '/bord-og-stoler',
    text: 'Kombiner teltet med klappbord, runde bord og stoler som passer oppsettet ditt.',
  },
  {
    label: 'Se partytelt til konfirmasjon',
    to: '/partytelt-konfirmasjon',
    text: 'Få en mer konkret oversikt over telt, bord og stoler som ofte passer til konfirmasjon.',
  },
  {
    label: 'Se partytelt til bryllup',
    to: '/partytelt-bryllup',
    text: 'Se telt, runde bord og bryllupsnære oppsett med bedre plass og flyt.',
  },
  {
    label: 'Se teltguiden',
    to: '/hvor-stort-partytelt',
    text: 'Få hjelp til å velge riktig størrelse og se kapasitet per modell.',
  },
  {
    label: 'Bruk prisestimatet',
    to: '/kalkulator',
    text: 'Regn raskt på pris før du sender en forespørsel.',
  },
  {
    label: 'Ta kontakt',
    to: '/kontakt',
    text: 'Send oss dato, sted og antall gjester, så svarer vi så presist vi kan.',
  },
  {
    label: 'Les artiklene våre',
    to: '/artikler',
    text: 'Se korte guider om valg av partytelt, montering og planlegging av feiring.',
  },
]
