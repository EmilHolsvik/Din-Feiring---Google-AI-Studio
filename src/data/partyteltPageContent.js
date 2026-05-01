import { alleProdukter } from './produkter'

const partyteltOrder = ['partytelt-3x6', 'partytelt-3x8', 'partytelt-5x8', 'partytelt-5x10', 'partytelt-6x12']

export const partyteltProducts = alleProdukter
  .filter((product) => product.kategoriId === 'partytelt')
  .sort((a, b) => partyteltOrder.indexOf(a.id) - partyteltOrder.indexOf(b.id))

export const partyteltBenefits = [
  {
    title: 'Start med middagsoppsettet',
    text: 'Hvis alle skal spise samtidig under teltet, er det middagen – ikke gjestelisten – som styrer størrelsen.',
  },
  {
    title: 'Regn inn det som glemmes',
    text: 'Buffet, kakebord, gavebord og passasjer mellom bordene tar mer plass enn de fleste antar.',
  },
  {
    title: 'Mål før dere låser valget',
    text: 'Sjekk at det er plass til selve teltet, litt arbeidsrom rundt, og et underlag som tåler dagen.',
  },
]

export const partyteltServicePoints = [
  {
    title: 'Middag og ekstra bord under samme tak',
    text: 'Kakebord, gavebord, buffet og kaffestasjon trekker ofte mer plass enn selve gjestetallet.',
  },
  {
    title: 'Romsligere passasjer rundt bordene',
    text: 'Når folk skal sitte lenge, reise seg og bevege seg, merkes ekstra luft mellom bordene gjennom hele dagen.',
  },
  {
    title: 'Teltet brukes hele dagen, ikke bare til middag',
    text: 'Skal teltet være hovedrom fra velkomst til kveld, blir for tett oppsett raskt slitsomt.',
  },
]

export const partyteltFaq = [
  {
    question: 'Hvor stort partytelt til 25–35 gjester?',
    answer:
      '5x8m holder hvis alle skal sitte til middag. Skal kaker, buffet eller bedre luft mellom bordene også inn, lander mange på 5x10m.',
    related: {
      prefix: 'Sammenlign størrelsene: ',
      links: [
        { label: '5 x 8 m', to: '/produkter/partytelt-5x8' },
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
      ],
    },
  },
  {
    question: 'Når bør vi gå opp en størrelse?',
    answer:
      'Med runde bord, flere serveringssoner eller dansegulv: gå opp før dere bestiller. Den ekstra plassen merkes hele kvelden.',
    related: {
      prefix: 'Spesielt relevant hvis dere vurderer ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'bryllup under telt', to: '/partytelt-bryllup' },
      ],
    },
  },
  {
    question: 'Må vi planlegge for mer enn bordene?',
    answer:
      'Ja. Kakebord, gavebord, servering og passasjer mellom bord er det som oftest gjør at et telt som ser stort nok ut blir trangt i praksis.',
    related: {
      prefix: 'Mer om dette: ',
      links: [
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
        { label: 'artikkelen om hvordan du velger riktig partytelt', to: '/artikler/hvordan-velge-riktig-partytelt' },
      ],
    },
  },
  {
    question: 'Hva er forskjellen på 5x8m og 5x10m i praksis?',
    answer:
      'De to ekstra meterne er ofte forskjellen mellom å bare få plass til middagsbordene, og å også få inn kakebord og roligere passasjer.',
    related: {
      prefix: 'Sammenlign størrelsene direkte: ',
      links: [
        { label: '5 x 8 m-siden', to: '/produkter/partytelt-5x8' },
        { label: '5 x 10 m-siden', to: '/produkter/partytelt-5x10' },
      ],
    },
  },
]

export const partyteltInternalLinks = [
  {
    label: 'Leie bord og stoler',
    to: '/bord-og-stoler',
    text: 'Hvis dere vet at gjestene skal sitte til middag – se møblene som passer.',
  },
  {
    label: 'Partytelt til konfirmasjon',
    to: '/partytelt-konfirmasjon',
    text: 'Konkret utgangspunkt når middag, kaker og gavebord skal inn i samme oppsett.',
  },
  {
    label: 'Partytelt til bryllup',
    to: '/partytelt-bryllup',
    text: 'Hvis dere vurderer runde bord, dansegulv og et roligere middagsrom.',
  },
]
