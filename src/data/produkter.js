import heroPrimary from '../../images/IMG_9960-qs8wbk0h4cabr5045bbm78uw4tgtcyalt3gzvvbfoo.jpg.jpeg'
import heroSecondary from '../../images/IMG_9199-qs8vyx2l8izjnvcxxuo6ofnsmbr5vg4iqjpzly1zc8.jpg.jpeg'
import tentMain from '../../images/IMG_8458-qs8vw2m6jl3aidhrk4dumnijvbs5kfts0gm2as9w6g.jpg.jpeg'
import tentFloor from '../../images/296_3e25fae5-9223-4f6f-be2d-81ed7c31591c-1024x768.jpg.jpeg'
import tentLong from '../../images/IMG_1079-qufh5v033b8z6x6kyzczk7cyzzf85cb29wp63cnay0.jpg.jpeg'
import tentSide from '../../images/IMG_0720.jpg.jpeg'
import tentOpen from '../../images/IMG_9933-qs8wa596vacuc71udpdrglo020eztap3m48ryxep0o.jpg.jpeg'
import tableDinner from '../../images/IMG_0246-qs8w6cylcb69kqjthkgux225x52rt6o0rdnddt0s2w.jpg.jpeg'
import tableLayout from '../../images/IMG_0721-qti55x2qe9s9bvicaki16k51eqfuphj3i1n7btmrs8.jpg.jpeg'
import chairLayout from '../../images/IMG_9197-2-768x1024.jpg.jpeg'
import soundboksPair from '../../images/482_147393514-768x1024.jpg.jpeg'

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
  { label: 'Om oss', path: '/om-oss' },
  { label: 'Produkter', path: '/produkter' },
  { label: 'Teltguide', path: '/teltguide' },
  { label: 'Artikler', path: '/artikler' },
  { label: priceEstimateLink.navLabel, path: priceEstimateLink.path },
  { label: 'Kontakt', path: '/kontakt' },
]

export const homeHighlights = [
  {
    title: 'Transparente priser',
    text: 'Du kan se priser og beregne litt selv før du tar kontakt.',
    icon: 'price',
  },
  {
    title: 'Lager i Sandefjord',
    text: 'Du vet hvor utstyret skal hentes, og hvor det kommer fra.',
    icon: 'warehouse',
  },
  {
    title: 'Én samlet bestilling',
    text: 'Du kan sende én samlet forespørsel for telt, bord, stoler og lyd.',
    icon: 'bundle',
  },
  {
    title: 'Enkel bestilling',
    text: 'Prisnivå, kapasitet og størrelser er tilgjengelige før du sender en forespørsel.',
    icon: 'simple',
  },
]

export const serviceValues = [
  {
    title: 'Kort vei til tilbud',
    text: 'Du ser pris og hvor mye plass produktene har tidlig, så det er lett å komme i gang.',
  },
  {
    title: 'Utstyr som henger sammen',
    text: 'Telt, bord, stoler og lyd er valgt for å fungere godt sammen.',
  },
  {
    title: 'Lokalt og forutsigbart',
    text: 'Vi holder til i Sandefjord og gjør avtaler som er enkle og tydelige.',
  },
]

export const processSteps = [
  {
    title: 'Velg utstyr',
    text: 'Se på produkter, priser og størrelser for å finne det som passer best.',
  },
  {
    title: 'Send forespørsel',
    text: 'Bruk skjemaet eller kontakt oss direkte når du er klar.',
  },
  {
    title: 'Vi bekrefter detaljene',
    text: 'Du får svar på tilgjengelighet, pris og om det blir henting eller levering.',
  },
  {
    title: 'Hent eller få levert',
    text: 'Utstyret er klart til avtalt tid, slik at du kan fokusere på dagen.',
  },
]

export const eventIdeas = [
  {
    title: 'Bryllup og jubileum',
    text: 'Passer når du trenger godt med plass til middag, gjester og en lang dag utendørs.',
  },
  {
    title: 'Konfirmasjon og hagefest',
    text: 'Et godt valg når du vil være trygg på været, sitteplasser og servering.',
  },
  {
    title: 'Firmaarrangement og sommerfest',
    text: 'En enkel måte å samle telt, møbler og lyd i én og samme bestilling.',
  },
]

export const faqItems = [
  {
    question: 'Kan vi hente utstyret selv?',
    answer: 'Ja. Du kan hente utstyret fra vårt lager i Sandefjord.',
  },
  {
    question: 'Leverer og monterer dere?',
    answer: 'Ja, det kan avtales. Skriv hvor arrangementet er, så tar vi det med i tilbudet.',
  },
  {
    question: 'Er prisene på nettsiden endelige?',
    answer: 'Prisene gjelder for leie av utstyret. Levering og eventuelle tillegg kommer i tillegg ved behov.',
  },
  {
    question: 'Hva bør vi opplyse om i forespørselen?',
    answer: 'Oppgi dato, sted, antall gjester og hva du ønsker å leie. Da kan vi svare mer presist.',
  },
  {
    question: 'Hvordan velger vi riktig teltstørrelse?',
    answer:
      'Se teltguiden og kapasiteten for stående, langbord, kvadratiske bord og runde bord på produktsidene. I sittende oppsett anbefaler vi maksimalt seks personer per bord. Er du usikker, hjelper vi deg gjerne med å velge.',
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
    ingress: 'Når du trenger god plass til mange gjester.',
    kortBeskrivelse: 'Vårt største telt, passer til bryllup, firmafester og andre store anledninger.',
    langBeskrivelse:
      'Dette teltet gir deg mye plass og passer godt når mange skal sitte under tak. Det har god takhøyde, solide vegger og vinduer som slipper inn lys.',
    pris: 'Fra 3 500 kr',
    priser: { dogn: 3500, helg: 3950, uke: 4500 },
    bilde: heroPrimary,
    galleri: [heroPrimary, tentMain, tentFloor],
    ...tentCapacityById['partytelt-6x12'],
    passerTil: ['Bryllup', 'Firmafest', 'Store jubileum'],
    montering: 'Kan hentes selv eller leveres etter avtale.',
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
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Populær',
    seoTitle: 'Lei partytelt 5 x 10 meter',
    ingress: 'Et stort telt som passer til mange typer selskaper.',
    kortBeskrivelse: 'Et populært valg for konfirmasjoner, jubileer og større hagefester.',
    langBeskrivelse:
      'Med 50 kvadratmeter får du et telt med god plass til bord, stoler og gjester. Det passer fint når du vil ha mye plass uten å velge den største modellen.',
    pris: 'Fra 2 500 kr',
    priser: { dogn: 2500, helg: 2950, uke: 3500 },
    bilde: tentMain,
    galleri: [tentMain, heroSecondary, tentOpen],
    ...tentCapacityById['partytelt-5x10'],
    passerTil: ['Konfirmasjon', 'Jubileum', 'Større hagefest'],
    montering: 'Kan hentes selv eller leveres etter avtale.',
    spesifikasjoner: [
      '50 kvm gulvflate',
      'Sidehøyde ca. 2 meter',
      'Mønehøyde ca. 2,8 meter',
      'Solid stålramme',
      'Vanntett duk med vindusvegger',
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
    seoTitle: 'Lei partytelt 5 x 8 meter',
    ingress: 'Et mellomstort telt som passer mange vanlige selskaper.',
    kortBeskrivelse:
      'En størrelse som gir god plass uten å ta like mye plass som de største teltene.',
    langBeskrivelse:
      'Dette teltet gir deg god plass og beskytter godt mot vær. Vindusveggene slipper inn lys og gjør teltet lyst og åpent.',
    pris: 'Fra 2 150 kr',
    priser: { dogn: 2150, helg: 2500, uke: 2950 },
    bilde: tentSide,
    galleri: [tentSide, tableLayout, heroSecondary],
    ...tentCapacityById['partytelt-5x8'],
    passerTil: ['Bursdag', 'Konfirmasjon', 'Hagefest'],
    montering: 'Et fint valg hvis du vil hente selv.',
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
    seoTitle: 'Lei partytelt 3 x 8 meter',
    ingress: 'Et godt valg når plassen er smal eller litt trang.',
    kortBeskrivelse: 'Langt og smalt telt som passer godt ved terrassen, oppkjørselen eller husveggen.',
    langBeskrivelse:
      'Denne modellen passer godt når du vil ha tak over gjestene uten å bruke hele uteområdet. Den er enkel å plassere der plassen er mer avlang.',
    pris: 'Fra 1 450 kr',
    priser: { dogn: 1450, helg: 1850, uke: 2200 },
    bilde: tentLong,
    galleri: [tentLong, heroPrimary, tentOpen],
    ...tentCapacityById['partytelt-3x8'],
    passerTil: ['Mindre konfirmasjon', 'Terrassefest', 'Oppkjørsel'],
    montering: 'Enkel å planlegge med og enkel å hente selv.',
    spesifikasjoner: ['24 kvm gulvflate', 'Smal bredde for avlange områder', 'Vanntett duk', 'Vindusfelt som slipper inn lys'],
    inkludert: ['Komplett teltduk og ramme', 'Side- og endevegger', 'Stropping / barduner og jordspyd for sikring av teltet'],
    relatedIds: ['bord', 'stoler'],
  },
  {
    id: 'partytelt-3x6',
    navn: 'Partytelt 3 x 6 m',
    kategoriId: 'partytelt',
    kategori: 'Partytelt',
    badge: 'Kompakt',
    seoTitle: 'Lei partytelt 3 x 6 meter',
    ingress: 'For mindre samlinger eller som ekstratelt.',
    kortBeskrivelse: 'Et lite telt som er enkelt å plassere og lett å planlegge med.',
    langBeskrivelse:
      'Dette teltet passer når du trenger et mindre område med tak til gjester, servering eller utstyr.',
    pris: 'Fra 1 250 kr',
    priser: { dogn: 1250, helg: 1650, uke: 1950 },
    bilde: tentOpen,
    galleri: [tentOpen, tentLong, heroSecondary],
    ...tentCapacityById['partytelt-3x6'],
    passerTil: ['Mindre bursdag', 'Buffetområde', 'Ekstra teltflate'],
    montering: 'Greit å håndtere for to personer.',
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
    seoTitle: 'Lei sammenleggbare bord',
    ingress: 'Praktiske bord som er enkle å ta med, frakte og sette opp.',
    kortBeskrivelse: 'Klappbord som passer til middag, servering og buffet.',
    langBeskrivelse:
      'Disse bordene er solide og enkle å sette opp. De passer godt når du trenger bord som fungerer til det meste.',
    pris: 'Fra 115 kr / stk',
    priser: { dogn: 115, helg: 125, uke: 140 },
    bilde: tableDinner,
    galleri: [tableDinner, tableLayout, heroSecondary],
    kapasitet: 'Anbefalt maksimum seks personer per bord',
    passerTil: ['Middag', 'Buffet', 'Servering'],
    montering: 'Beina slås raskt ut.',
    spesifikasjoner: [
      'Lengde 180 cm',
      'Bredde 76 cm',
      'Høyde ca. 74 cm',
      'Vi anbefaler maksimalt seks gjester per bord',
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
    seoTitle: 'Lei rundt bord til selskap',
    ingress: 'For deg som ønsker runde bord i selskapet.',
    kortBeskrivelse: 'Runde bord passer godt til bryllup, jubileum og andre middager.',
    langBeskrivelse:
      'Runde bord gir en annen bordsetting enn vanlige klappbord. De passer godt når gjestene skal sitte lenge og prate sammen rundt bordet.',
    pris: 'Fra 250 kr / stk',
    priser: { dogn: 250, helg: 300, uke: 400 },
    bilde: tableDinner,
    galleri: [tableDinner, heroSecondary],
    kapasitet: 'Anbefalt maksimum seks personer per bord',
    passerTil: ['Bryllup', 'Jubileum', 'Middagsselskap'],
    montering: 'Klart til bruk og enkelt å sette ut.',
    spesifikasjoner: ['Diameter 152 cm', 'Vi anbefaler maksimalt seks gjester per bord', 'Passer godt til middag og selskap'],
    inkludert: ['Klargjort rundt bord'],
    relatedIds: ['stoler', 'partytelt-6x12', 'partytelt-5x10'],
  },
  {
    id: 'stoler',
    navn: 'Klappstoler',
    kategoriId: 'mobler',
    kategori: 'Bord og stoler',
    badge: 'Fleksibel rigg',
    seoTitle: 'Lei klappstoler',
    ingress: 'Enkle å ta med, sette ut og rydde bort.',
    kortBeskrivelse: 'Praktiske stoler som gjør det enkelt å få nok sitteplasser.',
    langBeskrivelse:
      'Klappstoler er en enkel løsning når du trenger mange plasser på kort tid. De passer godt sammen med både vanlige og runde bord.',
    pris: 'Fra 30 kr / stk',
    priser: { dogn: 30, helg: 35, uke: 40 },
    bilde: chairLayout,
    galleri: [chairLayout, heroSecondary, tableLayout],
    kapasitet: 'Antall stoler etter behov',
    passerTil: ['Konfirmasjon', 'Firmafest', 'Ekstra sitteplasser'],
    montering: 'Stolene er enkle og raske å sette opp.',
    spesifikasjoner: ['Stål og plast/vinyl', 'Tar lite plass når de er slått sammen', 'Passer godt til teltoppsett med bord'],
    inkludert: ['Stoler som er klare for henting eller levering'],
    relatedIds: ['bord', 'runde-bord', 'partytelt-5x10'],
  },
  {
    id: 'soundboks',
    navn: 'Soundboks',
    kategoriId: 'lyd',
    kategori: 'Lyd',
    badge: 'Enkel lydpakke',
    seoTitle: 'Lei Soundboks',
    ingress: 'For deg som vil ha god lyd uten mye styr.',
    kortBeskrivelse: 'Batteridrevet høyttaler med enkel Bluetooth-tilkobling.',
    langBeskrivelse:
      'En Soundboks passer godt til mange vanlige selskaper alene. Den er enkel å bruke og krever lite oppsett, og vi kan også legge ved mikrofon hvis du ønsker det.',
    pris: 'Fra 500 kr',
    priser: { dogn: 500, helg: 1000, uke: 1500 },
    bilde: soundboksPair,
    galleri: [soundboksPair],
    kapasitet: 'Opptil 126 dB',
    passerTil: ['Bursdag', 'Hagefest', 'Telt med mindre sceneoppsett'],
    montering: 'Kobles enkelt til med Bluetooth.',
    spesifikasjoner: ['Opptil 126 dB', 'Går på batteri', 'Lang batteritid ved vanlig bruk', 'Mikrofon kan legges ved ved behov'],
    inkludert: ['1 stk ladet høyttaler', 'Lader til batteriet', 'Ryggsekk', 'Mikrofon ved behov'],
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
  'Prisene på nettsiden gjelder leie av utstyret.',
  'Levering, montering og andre tillegg avtales ved behov.',
  'Bruk prisestimatet for å få et raskt overslag før du tar kontakt.',
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
  'Dato eller ønsket periode',
  'Hjemmeadresse',
  'Leveringsadresse ved behov',
  'Ca. hvor mange gjester dere blir',
  'Hva du ønsker å leie',
  'Om du vil hente selv eller få levert',
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
    title: 'Enkelt å finne frem',
    text: 'Du ser priser, størrelser og produkter tydelig før du tar kontakt.',
    icon: 'guide',
  },
  {
    title: 'Lokalt i Sandefjord',
    text: 'Vi holder til i Sandefjord og hjelper kunder med utstyr til både små og store arrangementer.',
    icon: 'local',
  },
  {
    title: 'Lett å bestille',
    text: 'Det skal være enkelt å forstå hva du kan leie og hva som skjer videre.',
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
