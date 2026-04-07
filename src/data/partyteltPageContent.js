import { alleProdukter } from './produkter'

const partyteltOrder = ['partytelt-3x6', 'partytelt-3x8', 'partytelt-5x8', 'partytelt-5x10', 'partytelt-6x12']

export const partyteltProducts = alleProdukter
  .filter((product) => product.kategoriId === 'partytelt')
  .sort((a, b) => partyteltOrder.indexOf(a.id) - partyteltOrder.indexOf(b.id))

export const partyteltBenefits = [
  {
    title: 'Antall gjester er bare startpunktet',
    text: 'Det viktigste er hvor mange som faktisk skal sitte eller oppholde seg i teltet samtidig. Et telt til stående mingling kan være for lite hvis samme gjester også skal spise der.',
  },
  {
    title: 'Bordoppsettet endrer kapasiteten mye',
    text: 'Runde bord krever mer plass enn langbord, og buffet, gavebord eller serveringsbord må også regnes inn. Derfor kan samme gjestetall trenge forskjellige teltstørrelser.',
  },
  {
    title: 'Plassering og underlag må fungere i praksis',
    text: 'Mål området før du bestiller. Det må være nok plass til selve teltet, litt arbeidsrom rundt, og et underlag som fungerer for både oppsett og bruk gjennom dagen.',
  },
]

export const partyteltServicePoints = [
  {
    title: 'Start med dato, sted og gjestetall',
    text: 'Når vi vet hvor og når arrangementet skal være, og omtrent hvor mange som kommer, er det mye enklere å peke dere mot riktig teltstørrelse.',
  },
  {
    title: 'Beskriv hvordan teltet skal brukes',
    text: 'Si fra om dere skal ha middag, runde bord, buffet, gavebord eller bare stående mingling. Det er slike detaljer som avgjør om et telt blir akkurat passe eller for trangt.',
  },
  {
    title: 'Avklar henting, levering og montering tidlig',
    text: 'Noen henter selv, andre vil ha levering eller teltet satt opp klart. Når dette avklares tidlig, blir både planlegging og tilbud mer presist.',
  },
]

export const partyteltFaq = [
  {
    question: 'Hvor mange personer får plass i et partytelt?',
    answer:
      'Det avhenger av om teltet skal brukes til stående mingling, langbord eller runde bord. Et 5 x 10 m telt kan for eksempel fungere fint til rundt 55 til 60 stående, men merkbart færre dersom dere skal ha sittende oppsett med god luft mellom bordene.',
  },
  {
    question: 'Hva bør vi tenke på før vi velger teltstørrelse?',
    answer:
      'Tenk gjennom gjestetall, bordoppsett, om dere trenger buffet eller gavebord, og om alle skal være under teltet samtidig. Det er ofte disse tingene som gjør at man bør gå opp en størrelse.',
  },
  {
    question: 'Kan dere hjelpe oss å velge riktig partytelt?',
    answer:
      'Ja. Send oss dato, sted, omtrent antall gjester og hvordan dere tenker å bruke teltet, så kan vi anbefale en størrelse som passer bedre enn et rent kvadratmeteranslag.',
  },
  {
    question: 'Kan vi bestille partytelt sammen med bord og stoler?',
    answer:
      'Ja. Mange bestiller telt, bord og stoler samlet, særlig til konfirmasjon, bryllup og større hagefester. Det gjør det enklere å vurdere helheten og planlegge levering eller henting.',
  },
]

export const partyteltInternalLinks = [
  {
    label: 'Leie bord og stoler',
    to: '/bord-og-stoler',
    text: 'Se møblene som oftest kombineres med partytelt når arrangementet skal ha sittende oppsett.',
  },
  {
    label: 'Partytelt til konfirmasjon',
    to: '/partytelt-konfirmasjon',
    text: 'Få et mer konkret utgangspunkt for konfirmasjon med telt, bord, stoler og plass til kaker og gavebord.',
  },
  {
    label: 'Partytelt til bryllup',
    to: '/partytelt-bryllup',
    text: 'Se hvordan telt, runde bord og bedre luft i oppsettet ofte planlegges til bryllup under telt.',
  },
  {
    label: 'Finn riktig størrelse',
    to: '/hvor-stort-partytelt',
    text: 'Bruk teltguiden hvis du vil sammenligne størrelser, kapasitet og hva som passer til ulike oppsett.',
  },
]
