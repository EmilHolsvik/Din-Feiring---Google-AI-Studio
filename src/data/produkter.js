import img1 from '../images/IMG_0246-qs8w6cylcb69kqjthkgux225x52rt6o0rdnddt0s2w.jpg.jpeg'
import img2 from '../images/IMG_0720.jpg.jpeg'
import img3 from '../images/IMG_0721-qti55x2qe9s9bvicaki16k51eqfuphj3i1n7btmrs8.jpg.jpeg'
import img4 from '../images/IMG_1079-qufh5v033b8z6x6kyzczk7cyzzf85cb29wp63cnay0.jpg.jpeg'
import img5 from '../images/IMG_1093-qufh83u7f2bmxdx5uyawimym34csjb7z90sxd5bg2w.jpg.jpeg'
import img6 from '../images/IMG_2823-768x1024.jpg.jpeg'
import img7 from '../images/IMG_6603-1024x768.jpg.jpeg'
import img8 from '../images/IMG_6604-qspgwc8lsidv4erxt9t9m5k49j4rawmzlb3525h4q0.jpg.jpeg'
import img9 from '../images/IMG_8449-2-qs8vvyuts8y57xn862rccogphsaopneuny04dofgvc.jpg.jpeg'
import img10 from '../images/IMG_9199-qs8vyx2l8izjnvcxxuo6ofnsmbr5vg4iqjpzly1zc8.jpg.jpeg'
import img11 from '../images/IMG_9146-2-qs8vyaigoi4nx89plkx50lcqd2ucqpmyng2c3azfhk.jpg.jpeg'
import img12 from '../images/IMG_9599-768x1024.jpg.jpeg'
import img13 from '../images/IMG_9982-768x1024.jpg.jpeg'

const heroPrimary = img1
const heroSecondary = img2
const tentMain = img3
const tentFloor = img4
const tentLong = img5
const tentSide = img6
const tentOpen = img7
const tableDinner = img8
const tableLayout = img9
const chairLayout = img10
const soundboksPair = img11
const tableStraight = img12
const roundTableSetting = img13

export const companyInfo = {
  name: 'Din Feiring',
  phoneDisplay: '+47 405 36 266',
  phoneHref: 'tel:+4740536266',
  email: 'hei@dinfeiring.no',
  emailHref: 'mailto:hei@dinfeiring.no',
  address: 'Pinaveien 8A, 3225 Sandefjord',
  pickupNote: 'Lager i Sandefjord',
  city: 'Sandefjord',
  region: 'Vestfold',
}

export const priceEstimateLink = {
  path: '/kalkulator',
  navLabel: 'Prisestimat',
  ctaLabel: 'Se prisestimat',
}

export const navigationLinks = [
  { label: 'Forside', path: '/' },
  { label: 'Partytelt', path: '/partytelt' },
  { label: 'Om oss', path: '/om-oss' },
  { label: 'Produkter', path: '/produkter' },
  { label: 'Teltguide', path: '/hvor-stort-partytelt' },
  { label: 'Artikler', path: '/artikler' },
  { label: priceEstimateLink.navLabel, path: priceEstimateLink.path },
  { label: 'Kontakt', path: '/kontakt' },
]

export const homeHighlights = [
  {
    title: 'Prisene står her',
    text: 'Hva alt koster ligger åpent på nettsiden. Bruk kalkulatoren hvis du vil ha et raskt overslag før du tar kontakt.',
    icon: 'price',
  },
  {
    title: 'Lager i Sandefjord',
    text: 'Hent selv i Pinaveien, eller få teltet levert og montert der dere skal feire.',
    icon: 'warehouse',
  },
  {
    title: 'Alt i én bestilling',
    text: 'Telt, bord, stoler og Soundboks kan samles i samme forespørsel – ett kontaktpunkt, en avtale.',
    icon: 'bundle',
  },
  {
    title: 'Hjelp til størrelsen',
    text: 'Si hvor mange dere er og hvordan dere vil sitte. Vi sier hvilket telt som faktisk passer.',
    icon: 'simple',
  },
]

export const serviceValues = [
  {
    title: 'Åpne priser',
    text: 'Priser og kapasitet ligger på nettsiden. Du regner selv før du sender en forespørsel.',
  },
  {
    title: 'Utstyr som passer sammen',
    text: 'Telt, bord, stoler og lyd er valgt for å virke ihop. Du slipper flere leverandører å koordinere.',
  },
  {
    title: 'Lokalt og enkelt',
    text: 'Lager i Sandefjord. Henting og levering blir kortere vei og lettere å avtale.',
  },
]

export const processSteps = [
  {
    title: 'Se hva som passer',
    text: 'Priser, størrelser og kapasitet ligger åpent. Bruk kalkulatoren hvis du vil ha et raskt overslag.',
  },
  {
    title: 'Send forespørsel',
    text: 'Dato, antall gjester og hva dere tenker å leie holder som start.',
  },
  {
    title: 'Få svar innen 24 timer',
    text: 'Du får tilbake hva som er ledig, hva det koster og om vi kan levere på adressen.',
  },
  {
    title: 'Hent eller få levert',
    text: 'Utstyret er klargjort til henting i Sandefjord, eller levert og montert til avtalt tid.',
  },
]

export const eventIdeas = [
  {
    title: 'Bryllup og jubileum',
    text: 'Eget telt betyr eget oppsett – middag, dansegulv og velkomst kan ligge der dere vil ha det. Hele dagen, uansett vær.',
    path: '/partytelt-bryllup',
  },
  {
    title: 'Konfirmasjon og hagefest',
    text: 'Når dere vet hvor mange som skal sitte og hvordan, blir det enkelt å velge teltet som passer hagen.',
    path: '/partytelt-konfirmasjon',
  },
  {
    title: 'Firmaarrangement og sommerfest',
    text: 'Sommerfest, teamdag eller kundekveld ute – telt, møbler og lyd i én bestilling, ferdig levert til stedet.',
    path: '/partytelt',
  },
]

export const faqItems = [
  {
    question: 'Kan vi hente utstyret selv?',
    answer:
      'Ja. Det meste kan hentes fra lageret i Sandefjord. På større telt – eller når dere har mye utstyr samtidig – er det vanligvis enklere å la oss levere.',
    related: {
      prefix: 'Du kan se hva som kan kombineres på ',
      links: [
        { label: 'produktsiden', to: '/produkter' },
        { label: 'partytelt-siden', to: '/partytelt' },
      ],
    },
  },
  {
    question: 'Leverer og monterer dere partytelt?',
    answer:
      'Ja, hvis dere vil. Når teltet skal brukes til middag eller stå oppe en hel dag, er sikring og plassering viktigere enn mange tenker – da er levering og montering det tryggeste valget.',
    related: {
      prefix: 'Mer om dette finner du i ',
      links: [
        { label: 'artikkelen om montering og sikring', to: '/artikler/montering-og-sikring-av-partytelt' },
        { label: 'leievilkårene', to: '/leievilkar' },
      ],
    },
  },
  {
    question: 'Hvordan finner vi riktig teltstørrelse?',
    answer:
      'Tre ting avgjør: hvor mange som skal sitte samtidig, hva slags bord dere bruker, og om kakebord, gavebord eller buffet skal stå inne i teltet. Når disse er på plass, er størrelsen nesten gitt.',
    related: {
      prefix: 'Enkleste vei er via ',
      links: [
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
        { label: 'artikkelen om hvordan du velger riktig partytelt', to: '/artikler/hvordan-velge-riktig-partytelt' },
      ],
    },
  },
  {
    question: 'Klappbord eller runde bord – hva er forskjellen?',
    answer:
      'Klappbord utnytter plassen best og passer når dere vil samle mange rundt middagen. Runde bord gjør det lettere å snakke på tvers, men trenger mer gulvflate rundt seg. Begge tar inntil seks personer.',
    related: {
      prefix: 'Vil du se bordene konkret? ',
      links: [
        { label: 'Bord og stoler', to: '/bord-og-stoler' },
        { label: 'Partytelt til bryllup', to: '/partytelt-bryllup' },
      ],
    },
  },
  {
    question: 'Hvor begynner vi hvis vi bare vil orientere oss?',
    answer:
      'Begynn med teltguiden hvis dere vil ha størrelsen klar først. Vil dere heller se oppsett, anledninger og priser, går det også an å lande først på kategori- eller artikkelsiden.',
    related: {
      prefix: 'Disse er fine inngangsporter: ',
      links: [
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
        { label: 'artiklene våre', to: '/artikler' },
        { label: 'partytelt-siden', to: '/partytelt' },
      ],
    },
  },
]

export const productCategories = [
  {
    id: 'partytelt',
    name: 'Partytelt',
    eyebrow: 'Til arrangementer ute',
    summary: 'Telt i flere størrelser, fra små oppsett til store feiringer.',
  },
  {
    id: 'mobler',
    name: 'Bord og stoler',
    eyebrow: 'Til oppdekking og sitteplasser',
    summary: 'Bord og stoler som gjør det enkelt å dekke opp.',
  },
  {
    id: 'lyd',
    name: 'Lyd',
    eyebrow: 'Til tale og musikk',
    summary: 'Enkle lydløsninger som er raske å sette opp.',
  },
]

const tentCapacityRows = [
  {
    id: 'partytelt-3x6',
    size: '3 x 6 m',
    standing: '20',
    longTables: '16',
    roundTables: '16',
    guideTitle: 'Kompakt oppsett',
    guideText: 'Passer som et mindre telt til små selskaper, servering eller en ekstra takflate i hagen.',
  },
  {
    id: 'partytelt-3x8',
    size: '3 x 8 m',
    standing: '28',
    longTables: '21-22',
    roundTables: '18-20',
    guideTitle: 'Smal løsning',
    guideText: 'Et fint valg når teltet må stå avlangt langs terrasse, husvegg eller oppkjørsel.',
  },
  {
    id: 'partytelt-5x8',
    size: '5 x 8 m',
    standing: '45-50',
    longTables: '36-38',
    roundTables: '32-34',
    guideTitle: 'Mellomstort selskap',
    guideText: 'Passer til vanlige familieselskaper og hagefester der du vil ha litt luft mellom bordene.',
  },
  {
    id: 'partytelt-5x10',
    size: '5 x 10 m',
    standing: '55-60',
    longTables: '45-48',
    roundTables: '40',
    guideTitle: 'Stor feiring',
    guideText: 'Et populært valg når teltet skal romme middag, gjester og litt ekstra flyt i oppsettet.',
  },
  {
    id: 'partytelt-6x12',
    size: '6 x 12 m',
    standing: '80-90',
    longTables: '60-65',
    roundTables: '56-58',
    guideTitle: 'Mange gjester',
    guideText: 'Vårt største telt og et godt valg når teltet skal være hovedplassen for hele selskapet.',
  },
]

function buildTentCapacityShort({ standing, longTables, roundTables }) {
  return `${standing} stående / ${longTables} langbord / ${roundTables} runde bord`
}

function buildTentCapacityDetails({ standing, longTables, roundTables }) {
  return [
    { label: 'Stående mingling', value: `ca. ${standing} personer` },
    { label: 'Langbord / kvadratiske bord', value: `ca. ${longTables} personer` },
    { label: 'Runde bord (152 cm)', value: `ca. ${roundTables} personer` },
  ]
}

const tentCapacityById = Object.fromEntries(
  tentCapacityRows.map((row) => [
    row.id,
    {
      kapasitet: buildTentCapacityShort(row),
      kapasitetKort: buildTentCapacityShort(row),
      kapasitetDetaljer: buildTentCapacityDetails(row),
      kapasitetNotat:
        'Komfortable tall uten buffet, bar, dansegulv eller andre ekstra soner i teltet, og med maks seks personer per bord i sittende oppsett.',
    },
  ])
)

const inquiryHiddenProductIds = new Set()
const soundboksBundlePrices = { dogn: 900, helg: 1650, uke: 2500 }

export function normalizeInquiryItems(items = []) {
  const mergedItems = new Map()

  items.forEach((item) => {
    if (!item || typeof item.productId !== 'string') return

    const parsedQuantity = Math.trunc(Number(item.quantity))
    if (!Number.isFinite(parsedQuantity) || parsedQuantity <= 0) return

    const normalizedProductId = item.productId === 'soundboks-2' || item.productId === 'soundboks-1' ? 'soundboks' : item.productId
    const normalizedQuantity = item.productId === 'soundboks-2' ? parsedQuantity * 2 : parsedQuantity

    mergedItems.set(normalizedProductId, (mergedItems.get(normalizedProductId) ?? 0) + normalizedQuantity)
  })

  return Array.from(mergedItems, ([productId, quantity]) => ({
    productId,
    quantity: Math.min(getCalculatorMaxQuantity(productId), quantity),
  }))
}

export const alleProdukter = [
  {
    id: 'partytelt-6x12',
    navn: 'Partytelt 6 x 12 m',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Størst kapasitet',
    seoTitle: 'Lei partytelt 6 x 12 meter i Sandefjord',
    ingress: 'Vårt største telt – plass til 60–90 gjester avhengig av oppsett.',
    kortBeskrivelse: 'Til bryllup, firmafester og store jubileer der teltet skal romme middag, mingling og dansegulv.',
    langBeskrivelse:
      '72 kvadratmeter er nok til å skille middagsoppsett, bar og dansegulv – uten at det blir tett. Egner seg når hele selskapet skal være under teltet en hel dag.',
    pris: 'Fra 3 500 kr',
    priser: { dogn: 3500, helg: 3950, uke: 4500 },
    imageAlt: 'Partytelt 6 x 12 meter satt opp for stort selskap eller bryllup',
    bilde: heroPrimary,
    galleri: [heroPrimary, tentMain, tentFloor],
    ...tentCapacityById['partytelt-6x12'],
    passerTil: ['Bryllup', 'Firmafest', 'Store jubileum'],
    montering: 'Henting i Sandefjord eller levering – si fra hva som passer.',
    spesifikasjoner: [
      '72 kvm gulvflate',
      'Sidehøyde ca. 2 meter',
      'Mønehøyde ca. 3,0 meter',
      'Solid stålramme',
      'Vanntett duk med vegger og vinduer',
    ],
    inkludert: [
      'Takduk og sidevegger',
      'Gavlvegger med glidelås',
      'Stropping / barduner og jordspyd for sikring av teltet',
      'Monteringsanvisning',
    ],
    relatedIds: ['bord', 'stoler', 'soundboks'],
  },
  {
    id: 'partytelt-5x10',
    navn: 'Partytelt 5 x 10 m',
    pageTitle: 'Partytelt 5 x 10 m – Vår bestselger',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Populær',
    seoTitle: 'Lei partytelt 5 x 10 meter i Sandefjord – Plass til 50+ gjester',
    ingress: '50 kvadratmeter – nok til 45–50 gjester ved langbord, og fortsatt rom til å bevege seg.',
    kortBeskrivelse: 'Den vi leier ut mest. Standard for konfirmasjon, store jubileer og familieselskaper i Vestfold.',
    langBeskrivelse:
      'Plass til 45–50 ved langbord eller 40 ved runde bord, med rom igjen til servering og passering. Vinduene gjør at teltet ikke føles innelukket.',
    pris: 'Fra 2 500 kr',
    priser: { dogn: 2500, helg: 2950, uke: 3500 },
    imageAlt: 'Partytelt 5 x 10 meter klart for konfirmasjon eller større hagefest',
    bilde: tentMain,
    galleri: [tentMain, heroSecondary, tentOpen],
    ...tentCapacityById['partytelt-5x10'],
    passerTil: ['Konfirmasjon', 'Jubileum', 'Større hagefest'],
    montering: 'Henting i Sandefjord eller levering ferdig montert.',
    spesifikasjoner: [
      '50 kvm gulvflate',
      'Kraftig stålramme og 100 % vanntett duk',
      'Store vindusfelt langs sidene',
    ],
    inkludert: ['Tak og sidevegger', 'Stropping / barduner og jordspyd for sikring av teltet', 'Monteringsanvisning'],
    relatedIds: ['bord', 'stoler', 'soundboks'],
  },
  {
    id: 'partytelt-5x8',
    navn: 'Partytelt 5 x 8 m',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Allround',
    seoTitle: 'Lei partytelt 5 x 8 meter i Sandefjord',
    ingress: '40 kvadratmeter – mellomstørrelsen som passer de fleste hagefester.',
    kortBeskrivelse: 'Vanlig valg til bursdager, mindre konfirmasjoner og hagefester med 30–40 gjester.',
    langBeskrivelse:
      'Teltet skjermer godt mot vær og vind, og vindusveggene slipper inn nok lys til at det ikke føles innelukket. Greit format å håndtere selv hvis dere vil hente.',
    pris: 'Fra 2 150 kr',
    priser: { dogn: 2150, helg: 2500, uke: 2950 },
    imageAlt: 'Partytelt 5 x 8 meter med vindusvegger til hagefest og konfirmasjon',
    bilde: tentSide,
    galleri: [tentSide, tableLayout, heroSecondary],
    ...tentCapacityById['partytelt-5x8'],
    passerTil: ['Bursdag', 'Konfirmasjon', 'Hagefest'],
    montering: 'Greit å håndtere selv – eller velg levering.',
    spesifikasjoner: ['40 kvm gulvflate', 'Sidehøyde ca. 2 meter', 'Mønehøyde ca. 2,8 meter', 'Vindusfelt langs sidene'],
    inkludert: ['Komplett ramme og duk', 'Vegger med vinduer', 'Stropping / barduner og jordspyd for sikring av teltet'],
    relatedIds: ['bord', 'stoler'],
  },
  {
    id: 'partytelt-3x8',
    navn: 'Partytelt 3 x 8 m',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Smalt oppsett',
    seoTitle: 'Lei partytelt 3 x 8 meter i Sandefjord',
    ingress: '24 kvadratmeter, smalt format – plass til 20–28 gjester.',
    kortBeskrivelse: 'Smalt telt som står naturlig langs terrasse, husvegg eller oppkjørsel.',
    langBeskrivelse:
      'Når plassen er avlang og dere ikke vil bruke hele plenen, gjør formatet 3x8 jobben. Tak over middagen uten at teltet tar over hele uteområdet.',
    pris: 'Fra 1 450 kr',
    priser: { dogn: 1450, helg: 1850, uke: 2200 },
    imageAlt: 'Partytelt 3 x 8 meter i smalt oppsett ved terrasse eller oppkjøring',
    bilde: tentLong,
    galleri: [tentLong, heroPrimary, tentOpen],
    ...tentCapacityById['partytelt-3x8'],
    passerTil: ['Mindre konfirmasjon', 'Terrassefest', 'Oppkjørsel'],
    montering: 'Lett å hente selv – får plass i de fleste biler med tilhenger.',
    spesifikasjoner: ['24 kvm gulvflate', 'Smalt format for avlange områder', 'Vanntett duk', 'Vindusfelt som slipper inn lys'],
    inkludert: ['Komplett teltduk og ramme', 'Side- og endevegger', 'Stropping / barduner og jordspyd for sikring av teltet'],
    relatedIds: ['bord', 'stoler'],
  },
  {
    id: 'partytelt-3x6',
    navn: 'Partytelt 3 x 6 m',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Kompakt',
    seoTitle: 'Lei partytelt 3 x 6 meter i Sandefjord',
    ingress: '18 kvadratmeter – kompakt og rask å sette opp.',
    kortBeskrivelse: 'Mindre selskaper, serveringssone, eller ekstra takflate ved siden av et større telt.',
    langBeskrivelse:
      'Når dere bare trenger litt skjerming – over buffeten, gavebordet eller en røykfri sone – holder dette formatet. To personer setter det opp på under en time.',
    pris: 'Fra 1 250 kr',
    priser: { dogn: 1250, helg: 1650, uke: 1950 },
    imageAlt: 'Partytelt 3 x 6 meter som kompakt løsning til mindre samling',
    bilde: tentOpen,
    galleri: [tentOpen, tentLong, heroSecondary],
    ...tentCapacityById['partytelt-3x6'],
    passerTil: ['Mindre bursdag', 'Buffetområde', 'Ekstra teltflate'],
    montering: 'To personer setter det opp på under en time.',
    spesifikasjoner: ['18 kvm gulvflate', 'Kompakt fotavtrykk', 'Vanntett duk og ramme'],
    inkludert: ['Komplett ramme og duk', 'Stropping / barduner og jordspyd for sikring av teltet', 'Monteringsanvisning'],
    relatedIds: ['bord', 'stoler'],
  },
  {
    id: 'bord',
    navn: 'Sammenleggbart bord',
    kategoriId: 'mobler',
    kategori: 'Bord og stoler',
    badge: 'Maks 6 plasser',
    seoTitle: 'Leie sammenleggbare bord i Sandefjord',
    ingress: '180 cm klappbord – seks gjester per bord, beina ned på sekunder.',
    kortBeskrivelse: 'Stødige klappbord til middag, buffet og servering. Den vanligste løsningen i partytelt.',
    langBeskrivelse:
      'Du får mest plass per bord uten at det føles trangt. Førstevalget når dere vil ha mange gjester rundt samme middag.',
    pris: 'Fra 115 kr / stk',
    priser: { dogn: 115, helg: 125, uke: 140 },
    imageAlt: 'Sammenleggbart bord satt opp til middag i partytelt',
    bilde: tableStraight,
    galleri: [tableStraight, tableLayout, tableDinner],
    kapasitet: 'Inntil seks personer per bord',
    passerTil: ['Middag', 'Buffet', 'Servering'],
    montering: 'Beina slås ut – klart på sekunder.',
    spesifikasjoner: [
      'Lengde 180 cm',
      'Bredde 76 cm',
      'Høyde ca. 74 cm',
      'Bordplate i hardplast med stålunderstell',
    ],
    inkludert: ['Rengjort og klargjort bord'],
    relatedIds: ['stoler', 'partytelt-5x10', 'partytelt-5x8'],
  },
  {
    id: 'runde-bord',
    navn: 'Runde bord',
    kategoriId: 'mobler',
    kategori: 'Bord og stoler',
    badge: 'Maks 6 plasser',
    seoTitle: 'Leie runde bord i Sandefjord – Til bryllup og selskap',
    ingress: '152 cm runde bord – seks gjester per bord, lett å snakke på tvers.',
    kortBeskrivelse: 'Til bryllup, jubileum og middager der dere skal sitte lenge og snakke mye.',
    langBeskrivelse:
      'Runde bord trenger litt mer gulvflate rundt seg, men gjør det enklere for gjestene å snakke på tvers. Velg dette hvis middagen er det viktigste på programmet.',
    pris: 'Fra 250 kr / stk',
    priser: { dogn: 250, helg: 300, uke: 400 },
    imageAlt: 'Runde bord dekket opp i partytelt til bryllup eller jubileum',
    bilde: roundTableSetting,
    galleri: [roundTableSetting, tableDinner],
    kapasitet: 'Inntil seks personer per bord',
    passerTil: ['Bryllup', 'Jubileum', 'Middagsselskap'],
    montering: 'Står klart fra første øyeblikk – ingen montering.',
    spesifikasjoner: ['Diameter 152 cm', 'Plass til seks gjester rundt bordet'],
    inkludert: ['Klargjort rundt bord'],
    relatedIds: ['stoler', 'partytelt-6x12', 'partytelt-5x10'],
  },
  {
    id: 'stoler',
    navn: 'Klappstoler',
    kategoriId: 'mobler',
    kategori: 'Bord og stoler',
    badge: 'Fleksibel rigg',
    seoTitle: 'Leie klappstoler i Sandefjord',
    ingress: 'Klappstoler som tar minimalt plass når de ikke er i bruk.',
    kortBeskrivelse: 'Sitteplasser til hele selskapet – passer både klappbord og runde bord.',
    langBeskrivelse:
      'Når dere trenger mange stoler, men ikke vil bruke en hel kveld på rigging. Stables flatt og kjapt etterpå.',
    pris: 'Fra 30 kr / stk',
    priser: { dogn: 30, helg: 35, uke: 40 },
    imageAlt: 'Klappstoler satt opp til selskap med bord i telt eller hage',
    bilde: chairLayout,
    galleri: [chairLayout, heroSecondary, tableLayout],
    kapasitet: 'Antall stoler etter behov',
    passerTil: ['Konfirmasjon', 'Firmafest', 'Ekstra sitteplasser'],
    montering: 'Slåes ut og er klare – stables flatt etterpå.',
    spesifikasjoner: ['Stål og plast/vinyl', 'Stables flatt for transport', 'Passer både klappbord og runde bord'],
    inkludert: ['Stoler klargjort for henting eller levering'],
    relatedIds: ['bord', 'runde-bord', 'partytelt-5x10'],
  },
  {
    id: 'soundboks',
    navn: 'Soundboks',
    kategoriId: 'lyd',
    kategori: 'Lyd',
    badge: 'Enkel lydpakke',
    seoTitle: 'Leie Soundboks i Sandefjord – Kraftig lyd til festen',
    ingress: 'Batteridrevet, kobles via Bluetooth – ingen kabler eller strømuttak.',
    kortBeskrivelse: 'Til hagefest, bryllup og mindre arrangementer der dere trenger lyd som faktisk når frem.',
    langBeskrivelse:
      'Du slipper å lete etter strømuttak ute, og batteritiden holder kvelden ut. Mikrofon kan legges ved hvis det skal holdes tale.',
    pris: 'Fra 500 kr',
    priser: { dogn: 500, helg: 1000, uke: 1500 },
    imageAlt: 'Soundboks høyttaler til fest, tale og musikk i telt eller utearrangement',
    bilde: soundboksPair,
    galleri: [soundboksPair],
    kapasitet: 'Opptil 126 dB',
    passerTil: ['Bursdag', 'Hagefest', 'Telt med mindre sceneoppsett'],
    montering: 'Bluetooth fra mobilen – klar på under et minutt.',
    spesifikasjoner: ['Opptil 126 dB', 'Batteridrevet', 'Holder en hel kveld på én lading', 'Mikrofon kan legges ved'],
    inkludert: ['Ladet høyttaler', 'Lader', 'Ryggsekk', 'Mikrofon ved behov'],
    relatedIds: ['partytelt-3x8', 'partytelt-5x8', 'stoler'],
  },
]

export const featuredProductIds = ['partytelt-5x10', 'partytelt-6x12', 'partytelt-3x8', 'bord', 'stoler', 'soundboks']

export const sizeGuide = tentCapacityRows.map((row) => ({
  title: row.guideTitle,
  recommendation: row.size,
  capacities: [
    `Stående: ca. ${row.standing}`,
    `Langbord / kvadratiske bord: ca. ${row.longTables}`,
    `Runde bord: ca. ${row.roundTables}`,
  ],
  text: row.guideText,
}))

export const priceNotes = [
  'Prisene gjelder leie av utstyret.',
  'Levering, montering og andre tillegg kommer i tillegg ved behov.',
  'Kalkulatoren gir et raskt overslag før dere tar kontakt.',
]

export const calculatorQuantityRules = {
  defaultMax: 500,
  categoryMax: {
    partytelt: 4,
  },
  groupMax: {
    bord: 40,
    'runde-bord': 8,
  },
  productMax: {
    stoler: 200,
    soundboks: 2,
  },
}

export const contactChecklist = [
  'Dato eller periode',
  'Hjemmeadresse',
  'Leveringsadresse hvis det er aktuelt',
  'Antall gjester',
  'Hva dere vil leie',
  'Henting selv eller levering',
]

export const contactTestimonials = [
  {
    quote:
      'Anbefaler dette firmaet, her var det service på alle punkter fra start til slutt. Vi bestilte med levering, montering og demontering. Vi fikk styrtregn midt under festen, men det var ikke noe problem. 10 av 10 fra oss.',
    name: 'Ingrid Aasvik',
    details: '40-årslag - 9. august 2025',
  },
  {
    quote:
      'Vi leide telt, bord og stoler til en konfirmasjon. Alt ble levert dagen før og montert profesjonelt. Det regnet på kvelden, men teltet holdt seg helt tett. Vi er kjempefornøyde!',
    name: 'Thomas Eikelund',
    details: 'Konfirmasjon - 20. mai 2025',
  },
  {
    quote:
      'Vi trengte kun bord og stoler til en mindre samling. Det var veldig enkelt å hente utstyret selv, og levering tilbake gikk like greit. Utstyret var rent, pent og i god stand. Praktisk løsning, og vi kommer til å bruke samme firma igjen.',
    name: 'Silje Nordli',
    details: '30-årslag - 7. juni 2025',
  },
  {
    quote:
      'Veldig fornøyd med både service og utstyr. Vi leide telt til hagefest, og alt ble satt opp raskt og profesjonelt. Kommunikasjonen var god hele veien, og vi følte oss godt ivaretatt.',
    name: 'Henrik Volden',
    details: 'Hagefest - 14. juni 2024',
  },
  {
    quote:
      'Vi bestilte bord, stoler og duker til en dåp, og alt kom til avtalt tid. Utstyret var rent og pent, og hele prosessen var enkel fra bestilling til levering. Anbefales!',
    name: 'Camilla Tangen',
    details: 'Dåp - 11. mai 2024',
  },
  {
    quote:
      'Kjempegod opplevelse fra start til slutt. Vi leide utstyr til sommerfest, og alt fungerte akkurat som avtalt. Det gjorde planleggingen mye enklere for oss.',
    name: 'Marius Solberg',
    details: 'Sommerfest - 5. juli 2025',
  },
  {
    quote:
      'Vi leide telt og stoler til et jubileum, og er veldig fornøyde med både kvaliteten og servicen. Alt ble levert presist, montert fint og hentet uten problemer etterpå.',
    name: 'Elise Haugnes',
    details: 'Jubileum - 16. august 2024',
  },
]

export const aboutBlocks = [
  {
    title: 'Åpne priser',
    text: 'Hva alt koster ligger på nettsiden. Du regner selv – uten å ringe for pris.',
    icon: 'guide',
  },
  {
    title: 'Utstyr som ser bra ut',
    text: 'Vedlikeholdt, rent, klart til bruk. Det vi leier ut er det vi selv ville hatt på egen feiring.',
    icon: 'local',
  },
  {
    title: 'Konkrete svar',
    text: 'Spør om størrelse, plassering eller oppsett – så svarer vi rett på det. Ingen salgsmonolog.',
    icon: 'simple',
  },
]

export const legalSummary = [
  {
    title: 'Hvilke opplysninger vi kan få',
    text: 'Du kan sende inn navn, telefon, e-post, dato, hjemmeadresse, leveringsadresse ved behov og hva du ønsker å leie.',
  },
  {
    title: 'Hva vi bruker dem til',
    text: 'Vi bruker opplysningene for å svare deg, lage tilbud og avtale henting eller levering.',
  },
  {
    title: 'Dine rettigheter',
    text: 'Du kan be om innsyn, retting eller sletting av opplysninger du har sendt inn.',
  },
]

export const heroImages = [
  {
    src: tentMain,
    alt: 'Stort partytelt oppsatt i hage',
  },
  {
    src: heroPrimary,
    alt: 'Partytelt rigget klart for arrangement utendørs',
  },
  {
    src: heroSecondary,
    alt: 'Partytelt med god plass til gjester og oppdekking',
  },
  {
    src: tentOpen,
    alt: 'Partytelt sett fra siden i åpent uteområde',
  },
  {
    src: tentLong,
    alt: 'Partytelt sett fra innsiden med langbord og god plass',
  },
  {
    src: tentFloor,
    alt: 'Partytelt med gulv og klargjort oppsett til arrangement',
  },
]

export function formatCurrency(value) {
  return `${new Intl.NumberFormat('nb-NO').format(value)} kr`
}

export function getCalculatorLimitGroup(productId) {
  const product = getProductById(productId)
  if (!product) return productId

  if (product.id === 'bord') {
    return 'bord'
  }

  if (product.id === 'runde-bord') {
    return 'runde-bord'
  }

  if (product.kategoriId === 'partytelt') {
    return product.id
  }

  return product.id
}

export function getCalculatorMaxQuantity(productId) {
  const product = getProductById(productId)
  if (!product) return calculatorQuantityRules.defaultMax

  const limitGroup = getCalculatorLimitGroup(productId)

  if (limitGroup in calculatorQuantityRules.groupMax) {
    return calculatorQuantityRules.groupMax[limitGroup]
  }

  if (product.id in calculatorQuantityRules.productMax) {
    return calculatorQuantityRules.productMax[product.id]
  }

  if (product.kategoriId in calculatorQuantityRules.categoryMax) {
    return calculatorQuantityRules.categoryMax[product.kategoriId]
  }

  return calculatorQuantityRules.defaultMax
}

export function getCalculatorLimitCopy(productId) {
  const product = getProductById(productId)
  if (!product) return `Maks ${calculatorQuantityRules.defaultMax} stk i prisestimatet.`

  if (product.kategoriId === 'partytelt') {
    return 'Maks 4 stk per teltmodell i prisestimatet.'
  }

  if (product.id === 'bord') {
    return 'Maks 40 bord i prisestimatet.'
  }

  if (product.id === 'runde-bord') {
    return 'Maks 8 runde bord i prisestimatet.'
  }

  if (product.id === 'stoler') {
    return 'Maks 200 stoler i prisestimatet.'
  }

  if (product.id === 'soundboks') {
    return 'Maks 2 soundbokser i prisestimatet. Velger du 2 stk, brukes pakkeprisen automatisk.'
  }

  return `Maks ${getCalculatorMaxQuantity(productId)} stk i prisestimatet.`
}

export function formatPriceFrom(product) {
  return `Fra ${formatCurrency(product.priser.dogn)}`
}

export function getProductById(id) {
  if (id === 'soundboks-1' || id === 'soundboks-2') {
    return alleProdukter.find((product) => product.id === 'soundboks')
  }

  return alleProdukter.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId) {
  return alleProdukter.filter((product) => product.kategoriId === categoryId)
}

export function getFeaturedProducts() {
  return featuredProductIds.map((id) => getProductById(id)).filter(Boolean)
}

export function getRelatedProducts(product, limit = 3) {
  const explicitRelated = (product.relatedIds ?? [])
    .map((id) => getProductById(id))
    .filter(Boolean)

  const sameCategoryFallback = alleProdukter.filter(
    (candidate) =>
      candidate.id !== product.id &&
      candidate.kategoriId === product.kategoriId &&
      !explicitRelated.some((relatedProduct) => relatedProduct.id === candidate.id)
  )

  const generalFallback = alleProdukter.filter(
    (candidate) =>
      candidate.id !== product.id &&
      !explicitRelated.some((relatedProduct) => relatedProduct.id === candidate.id) &&
      !sameCategoryFallback.some((fallbackProduct) => fallbackProduct.id === candidate.id)
  )

  return [...explicitRelated, ...sameCategoryFallback, ...generalFallback].slice(0, limit)
}

export function getInquirySelectableProducts() {
  return alleProdukter.filter((product) => !inquiryHiddenProductIds.has(product.id))
}

export function serializeInquiryItems(items) {
  return encodeURIComponent(JSON.stringify(items))
}

export function parseInquiryItems(value) {
  if (!value) return []

  try {
    const parsed = JSON.parse(decodeURIComponent(value))
    if (!Array.isArray(parsed)) return []
    return normalizeInquiryItems(parsed)
  } catch {
    return []
  }
}

export function getInquiryProducts(formState) {
  return normalizeInquiryItems(formState.items ?? [])
    .map((item) => {
      const product = getProductById(item.productId)
      return product ? { id: product.id, label: product.navn, quantity: item.quantity } : null
    })
    .filter(Boolean)
}

export function getCalculatorLinePrice(productId, period, quantity) {
  const product = getProductById(productId)
  if (!product) return 0

  const normalizedQuantity = Math.max(0, Math.trunc(Number(quantity) || 0))
  if (normalizedQuantity <= 0) return 0

  if (product.id === 'soundboks') {
    const pairCount = Math.floor(normalizedQuantity / 2)
    const singleCount = normalizedQuantity % 2

    return pairCount * (soundboksBundlePrices[period] ?? 0) + singleCount * (product.priser[period] ?? 0)
  }

  return (product.priser[period] ?? 0) * normalizedQuantity
}

export function buildInquiryDraft(formState) {
  const selectedProducts = getInquiryProducts(formState)
  const productLines = selectedProducts.map((item) => `- ${item.label}: ${item.quantity} stk`)
  const subject =
    productLines.length > 0
      ? `Forespørsel - ${productLines[0].replace('- ', '')}`
      : 'Forespørsel fra nettsiden'

  const message = [
    'Hei!',
    '',
    'Jeg ønsker tilbud på dette:',
    ...(productLines.length > 0 ? productLines : ['- Jeg skriver detaljer under']),
    '',
    `Navn: ${formState.name || '-'}`,
    `Telefon: ${formState.phone || '-'}`,
    `E-post: ${formState.email || '-'}`,
    `Dato: ${formState.date || '-'}`,
    `Hjemmeadresse: ${formState.homeAddress || '-'}`,
    `Leveringsadresse: ${formState.deliveryAddress || '-'}`,
    `Antall gjester: ${formState.guestCount || '-'}`,
    `Henting eller levering: ${formState.fulfillment || '-'}`,
    '',
    'Mer info:',
    formState.message || '-',
    '',
    'Sendt fra nettsiden til Din Feiring.',
  ].join('\n')

  return {
    selectedProducts,
    productLines,
    productSummary: productLines.length > 0 ? productLines.join('\n') : '- Ikke spesifisert',
    subject,
    message,
  }
}

export function buildInquirySubmissionPayload(formState, options = {}) {
  const draft = buildInquiryDraft(formState)
  const timestamp = options.timestamp || new Date().toISOString()

  return {
    access_key: options.accessKey || '',
    form_name: 'Din Feiring - forespørsel',
    source: options.source || 'dinfeiring.no',
    timestamp,
    from_name: 'Din Feiring nettside',
    subject: draft.subject,
    _subject: draft.subject,
    replyto: formState.email || companyInfo.email,
    name: formState.name || '',
    phone: formState.phone || '',
    email: formState.email || '',
    date: formState.date || '',
    homeAddress: formState.homeAddress || '',
    deliveryAddress: formState.deliveryAddress || '',
    guestCount: formState.guestCount || '',
    fulfillment: formState.fulfillment || '',
    products: draft.productSummary,
    items: JSON.stringify(draft.selectedProducts),
    message: draft.message,
  }
}

export function buildInquiryMailto(formState) {
  const draft = buildInquiryDraft(formState)

  return `mailto:${companyInfo.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.message)}`
}
