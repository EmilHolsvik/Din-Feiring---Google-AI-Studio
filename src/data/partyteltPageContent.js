import { alleProdukter } from './produkter'

const partyteltOrder = ['partytelt-3x6', 'partytelt-3x8', 'partytelt-5x8', 'partytelt-5x10', 'partytelt-6x12']

export const partyteltProducts = alleProdukter
  .filter((product) => product.kategoriId === 'partytelt')
  .sort((a, b) => partyteltOrder.indexOf(a.id) - partyteltOrder.indexOf(b.id))

export const partyteltBenefits = [
  {
    title: 'Ta utgangspunkt i middagsoppsettet',
    text: 'Hvis alle skal spise under teltet samtidig, er det dette som bør styre størrelsen, ikke bare hvor mange som er invitert.',
  },
  {
    title: 'Legg inn plass til det som ofte glemmes',
    text: 'Buffet, kakebord, gavebord og passasjer mellom bordene gjør større utslag enn mange forventer.',
  },
  {
    title: 'Mål området før dere låser valget',
    text: 'Det må være plass til teltet, litt arbeidsrom rundt og et underlag som faktisk fungerer gjennom hele dagen.',
  },
]

export const partyteltServicePoints = [
  {
    title: 'Når både middag og ekstra bord skal inn under samme tak',
    text: 'Kaker, gavebord, buffet eller kaffestasjon gjør ofte større utslag enn selve gjestetallet.',
  },
  {
    title: 'Når dere ønsker roligere passasjer mellom bordene',
    text: 'Litt ekstra luft merkes godt når folk skal sitte lenge, reise seg og bevege seg mellom bordene gjennom dagen.',
  },
  {
    title: 'Når teltet skal brukes lenge, ikke bare til en kort middag',
    text: 'Jo mer teltet skal fungere som hovedrom for dagen, desto mer merkes det hvis oppsettet blir for tett.',
  },
]

export const partyteltFaq = [
  {
    question: 'Hvilken teltstørrelse passer ofte til 25 til 35 gjester?',
    answer:
      'Hvis alle skal sitte til middag under teltet, er 5 x 8 m et vanlig startpunkt. Skal dere også ha kaker, buffet eller litt ekstra luft, ender mange heller på 5 x 10 m.',
  },
  {
    question: 'Når bør vi gå opp en størrelse?',
    answer:
      'Hvis dere vil ha runde bord, flere serveringssoner eller unngå et tett oppsett, lønner det seg ofte å gå opp en størrelse før dere låser bestillingen.',
  },
  {
    question: 'Må vi regne med plass til mer enn selve bordene?',
    answer:
      'Ja, som regel. Det er nettopp kakebord, gavebord, servering og passasjer som gjør at et telt som ser stort nok ut på papiret kan bli trangt i praksis.',
  },
  {
    question: 'Kan dere hjelpe oss med telt, bord og stoler samlet?',
    answer:
      'Ja. Det er ofte den enkleste løsningen, fordi vi da kan se teltstørrelse og bordoppsett i samme runde i stedet for at dere må gjette dere fram hver for dere.',
  },
]

export const partyteltInternalLinks = [
  {
    label: 'Leie bord og stoler',
    to: '/bord-og-stoler',
    text: 'Nyttig hvis du allerede vet at gjestene skal sitte til middag og du vil se møblene som passer best.',
  },
  {
    label: 'Partytelt til konfirmasjon',
    to: '/partytelt-konfirmasjon',
    text: 'Et mer konkret utgangspunkt hvis dere prøver å få plass til middag, kaker og gavebord i samme oppsett.',
  },
  {
    label: 'Partytelt til bryllup',
    to: '/partytelt-bryllup',
    text: 'Nyttig hvis dere vurderer runde bord, et roligere middagsrom og litt mer luft i oppsettet.',
  },
]
