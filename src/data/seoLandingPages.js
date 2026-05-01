import {
  BadgeCheck,
  CalendarDays,
  CircleHelp,
  Heart,
  MapPin,
  PackageCheck,
  Ruler,
  Sparkles,
  Truck,
  Users,
} from 'lucide-react'

export const bordOgStolerFaq = [
  {
    question: 'Hvor mange får plass per bord?',
    answer:
      'Inntil seks per bord – på både klappbordene og de runde. Da er det fortsatt rom til kuverter, servering og litt luft mellom gjestene.',
    related: {
      prefix: 'Vil dere se bordene konkret? Gå til ',
      links: [
        { label: 'klappbordet', to: '/produkter/bord' },
        { label: 'det runde bordet', to: '/produkter/runde-bord' },
      ],
    },
  },
  {
    question: 'Klappbord eller runde bord – hva er forskjellen?',
    answer:
      'Klappbord utnytter plassen best og passer når mange skal sitte samlet til middag. Runde bord trenger mer gulvflate, men gjør det enklere å snakke på tvers av bordet. Begge tar inntil seks personer.',
    related: {
      prefix: 'Forskjellen blir tydeligst når dere ser ',
      links: [
        { label: 'partytelt-siden', to: '/partytelt' },
        { label: 'bryllup under telt', to: '/partytelt-bryllup' },
      ],
    },
  },
  {
    question: 'Hvor mange ekstra bord trenger vi?',
    answer:
      'Tenk gjennom kakebord, kaffestasjon, gavebord og buffet i tillegg til middagen. Dette er bordene som oftest blir glemt når man regner ut oppsettet første gang.',
    related: {
      prefix: 'For å se totalen før dere bestiller, prøv ',
      links: [
        { label: 'priskalkulatoren', to: '/kalkulator' },
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
      ],
    },
  },
  {
    question: 'Får bordene plass i teltet?',
    answer:
      'Det avhenger av bordtype, antall gjester og om dere skal ha servering eller passasjer mellom bordene. Runde bord trenger mer plass rundt seg enn de fleste antar – både stoler og bevegelse.',
    related: {
      prefix: 'For å se sammenhengen, gå til ',
      links: [
        { label: 'partytelt', to: '/partytelt' },
        { label: 'artikkelen om hvordan du velger riktig partytelt', to: '/artikler/hvordan-velge-riktig-partytelt' },
      ],
    },
  },
]

export const bordOgStolerLandingContent = {
  hero: {
    icon: PackageCheck,
    eyebrow: 'Bord og stoler til utleie',
    title: 'Bord og stoler til din feiring',
    description:
      'Klappbord, runde bord og klappstoler – alle sammenleggbare og raske å rigge. Priser og kapasitet ligger åpent på produktsidene.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
    tertiaryCta: { label: 'Se partytelt', to: '/partytelt' },
  },
  quickFacts: [
    {
      title: 'Sammenleggbare langbord (180 cm)',
      text: 'Stødige bord som utnytter plassen effektivt – seks per bord.',
      icon: Users,
    },
    {
      title: 'Runde bord (152 cm)',
      text: 'Plass til seks gjester. Lettere å snakke på tvers av bordet.',
      icon: Sparkles,
    },
    {
      title: 'Klappstoler',
      text: 'Slåes ut og er klare. Stables flatt i kasser etterpå.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vårt utvalg',
    title: 'Møblene vi leier ut mest',
    description: 'Tenk også på kakebord, kaffestasjon og gavebord – disse glemmes ofte i første runde.',
    productIds: ['bord', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: CalendarDays,
      eyebrow: 'Velg riktig oppsett',
      title: 'Velg bordtype før dere teller gjester',
      description: 'Det viktigste valget: skal plassen brukes effektivt, eller skal middagen ha en roligere atmosfære?',
      cards: [
        {
          title: 'Klappbord når plassen skal brukes effektivt',
          text: 'Vanligst til konfirmasjon, hagefest og selskaper der mange skal sitte samtidig til middag.',
        },
        {
          title: 'Runde bord når middagen er det viktigste',
          text: 'Mykere uttrykk og enklere å snakke på tvers. Krever 30–40 % mer gulvflate per bord.',
        },
        {
          title: 'Ekstrabord til servering, kaffe og kaker',
          text: 'Disse avgjør om oppsettet føles ryddig eller overfylt når gjestene kommer inn i teltet.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Tre grep som funker',
      title: 'Slik blir oppsettet faktisk roligere',
      description: 'Disse merkes mer av gjestene enn av den som planlegger.',
      cards: [
        {
          title: 'Gi servering og kaker en egen sone',
          text: 'Da slipper dere fat, kakeesker og servietter på middagsbordene halvveis ut i kvelden.',
        },
        {
          title: 'Bordtype etter stemning, ikke vane',
          text: 'Klappbord når mange skal sitte samlet. Runde bord når praten rundt bordet betyr mer enn antall plasser.',
        },
        {
          title: 'La gjestene få plass til å bevege seg',
          text: 'Når stoler står for tett og passasjene blir for smale, merkes det med en gang. Litt margin gjør hele kvelden mer behagelig.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om bord, stoler og oppsett',
    description: 'Svar på det folk lurer på når riktig bordtype og nok plass skal henge sammen.',
  },
  faq: bordOgStolerFaq,
  contactSection: {
    icon: PackageCheck,
    eyebrow: 'Få hjelp med oppsettet',
    title: 'Send oss kort hva dere skal dekke til',
    subtitle:
      'Antall gjester, bordtype (klappbord eller runde) og om dere også trenger telt – så foreslår vi et oppsett som passer. Svar innen 24 timer.',
  },
  linksHeading: {
    title: 'Hvis dere vil se hele oppsettet sammen',
    description: 'Tre sider som er nyttige når bordene skal passe inn i resten av arrangementet.',
  },
  internalLinks: [
    {
      label: 'Se partytelt',
      to: '/partytelt',
      text: 'Hvis middagen også skal stå ute – se hvilke teltstørrelser som passer til ulike sittende oppsett.',
    },
    {
      label: 'Partytelt til bryllup',
      to: '/partytelt-bryllup',
      text: 'Se hvordan runde bord og telt kombineres når middagen skal ha et roligere uttrykk.',
    },
    {
      label: 'Bruk priskalkulatoren',
      to: '/kalkulator',
      text: 'Få totalen direkte før dere bestemmer dere.',
    },
  ],
}

export const partyteltKonfirmasjonFaq = [
  {
    question: 'Hvor stort partytelt til 25–35 gjester?',
    answer:
      '5x8m holder hvis alle skal spise under teltet. Skal kakebord, gavebord eller kaffestasjon også inn, er 5x10m et tryggere valg.',
    related: {
      prefix: 'Sammenlign de to: ',
      links: [
        { label: '5 x 8 m', to: '/produkter/partytelt-5x8' },
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
      ],
    },
  },
  {
    question: 'Hvor stort partytelt til 40–50 gjester?',
    answer:
      '5x10m eller 6x12m. Riktig størrelse avhenger av bordoppsett, om alle skal sitte samtidig, og hvor mye ekstra som skal inn under teltet.',
    related: {
      prefix: 'Naturlig neste steg er å sammenligne ',
      links: [
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
        { label: '6 x 12 m', to: '/produkter/partytelt-6x12' },
        { label: 'hele partytelt-utvalget', to: '/partytelt' },
      ],
    },
  },
  {
    question: 'Må kakebord, gaver og kaffe regnes med?',
    answer:
      'Ja. Det er disse sonene som gjør at et telt som ser stort nok ut på papiret blir for tett i praksis.',
    related: {
      prefix: 'Planlegg sonene før dere bestemmer størrelse: ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
      ],
    },
  },
  {
    question: 'Klappbord eller runde bord til konfirmasjon?',
    answer:
      'Klappbord er praktisk når familien skal sitte samlet og plassen skal utnyttes. Runde bord fungerer fint, men trenger mer plass og blir sjelden førstevalget når kakebord og kaffe også skal inn.',
    related: {
      prefix: 'Sammenlign oppsettene: ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'partytelt-siden', to: '/partytelt' },
      ],
    },
  },
]

export const partyteltKonfirmasjonLandingContent = {
  hero: {
    icon: BadgeCheck,
    eyebrow: 'Konfirmasjon under telt',
    title: 'Partytelt til konfirmasjon',
    description:
      'Telt over middagen betyr at hele familien får sitte sammen – med plass til kaker, gaver og kaffe under samme tak. Du er sikret mot vær, og oppsettet blir slik dere vil ha det.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se teltguiden', to: '/hvor-stort-partytelt' },
    tertiaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
  },
  quickFacts: [
    {
      title: '25–35 gjester',
      text: '5x8m holder til middag. 5x10m hvis kakebord skal med.',
      icon: MapPin,
    },
    {
      title: '40–50 gjester',
      text: '5x10m hvis familiekaffeen også skal inn under teltet.',
      icon: CalendarDays,
    },
    {
      title: 'Bord og stoler',
      text: 'Sammenleggbare bord og stoler – riggen tar minutter, ikke timer.',
      icon: Users,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Mange starter her',
    description: 'Det folk vurderer først når familien skal samles til middag og kaffe ute.',
    productIds: ['partytelt-5x8', 'partytelt-5x10', 'bord'],
  },
  sections: [
    {
      icon: BadgeCheck,
      eyebrow: 'Hva som avgjør valget',
      title: 'Hva som faktisk avgjør størrelsen',
      description: 'Gjestetallet er bare halve historien. Hvordan dagen skal brukes betyr mer.',
      cards: [
        {
          title: 'Skal alle spise samtidig?',
          text: 'Hvis hele selskapet skal sitte samlet, start med middagsoppsettet som utgangspunkt.',
        },
        {
          title: 'Kakebord, gaver og kaffe må også inn',
          text: 'Disse sonene er det som oftest gjør at dere trenger litt mer plass enn dere først tenkte.',
        },
        {
          title: 'Litt ekstra plass merkes hele dagen',
          text: 'Når folk skal sitte lenge, reise seg og hente kaffe, gjør romslige oppsett at dagen flyter roligere.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Det som hever opplevelsen',
      title: 'Tre ting som gjør konfirmasjonsteltet bedre å være i',
      description: 'Disse merkes mest av familien og gjestene – ikke av den som sender forespørselen.',
      cards: [
        {
          title: 'Egen sone til kaker og kaffe',
          text: 'Da slipper middagsbordene å fylles opp av kakefat og servietter halvveis ut i kvelden.',
        },
        {
          title: 'Plass å reise seg på',
          text: 'Familie i flere aldre skal sette seg, reise seg og hente kaffe gjennom hele dagen. Smale passasjer merkes raskt.',
        },
        {
          title: 'Alle samlet, uansett vær',
          text: 'Hvis noen må flyttes ut når været snur, mister teltet poenget. Heller litt for stort enn for lite.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om konfirmasjon under telt',
    description: 'Svar på det familier lurer på når middag, kaker og plass til alle skal henge sammen.',
  },
  faq: partyteltKonfirmasjonFaq,
  contactSection: {
    icon: BadgeCheck,
    eyebrow: 'Snakk med oss',
    title: 'Fortell kort om konfirmasjonen',
    subtitle:
      'Dato, sted, antall gjester og om kakebord skal inn under teltet – så foreslår vi størrelse som passer. Svar innen 24 timer.',
  },
  linksHeading: {
    title: 'Hvis dere vil se hele bildet',
    description: 'Tre sider som er nyttige når konfirmasjonsoppsettet skal henge sammen med resten av valgene.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign teltstørrelsene side om side hvis dere fortsatt er i tvil.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Bord og stoler som vanligvis brukes når konfirmasjonsteltet skal romme middag, kaffe og kakeservering.',
    },
    {
      label: 'Bruk priskalkulatoren',
      to: '/kalkulator',
      text: 'Se totalen før dere går videre.',
    },
  ],
}

export const partyteltBryllupFaq = [
  {
    question: 'Hvor stort partytelt til 50–70 gjester i bryllup?',
    answer:
      '5x10m eller 6x12m, avhengig av bordtype, hvor mye luft dere vil ha rundt bordene, og om teltet også skal romme velkomst, kaffesone eller dansegulv.',
    related: {
      prefix: 'Sammenlign forskjellen i praksis: ',
      links: [
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
        { label: '6 x 12 m', to: '/produkter/partytelt-6x12' },
      ],
    },
  },
  {
    question: 'Runde bord eller langbord til bryllupsmiddagen?',
    answer:
      'Avhenger av uttrykket dere vil ha. Runde bord gir mykere middagsrom og enklere prat på tvers, men trenger 30–40 % mer gulvflate per bord enn langbord.',
    related: {
      prefix: 'Hvis dette betyr mye, se ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'det runde bordet', to: '/produkter/runde-bord' },
      ],
    },
  },
  {
    question: 'Trenger vi ekstra plass til velkomst og dans?',
    answer:
      'Ja, hvis teltet skal brukes til mer enn middag. Romsligere oppsett gir bedre flyt gjennom kvelden – fra velkomst til dansegulv.',
    related: {
      prefix: 'Regn på det før dere bestemmer dere: ',
      links: [
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
        { label: 'artikkelen om hvordan du velger riktig partytelt', to: '/artikler/hvordan-velge-riktig-partytelt' },
      ],
    },
  },
  {
    question: 'Hvor mye mer plass krever runde bord?',
    answer:
      'Mer enn de fleste regner med – ikke bare bordet selv, men også stolene rundt og passasjene gjestene skal bevege seg i. Skal middagsrommet føles rolig, øker behovet ytterligere.',
    related: {
      prefix: 'Se det opp mot teltstørrelsene: ',
      links: [
        { label: 'det runde bordet', to: '/produkter/runde-bord' },
        { label: 'partytelt-siden', to: '/partytelt' },
      ],
    },
  },
]

export const partyteltBryllupLandingContent = {
  hero: {
    icon: Heart,
    eyebrow: 'Bryllup under telt',
    title: 'Bryllup under eget telt',
    description:
      'Eget telt betyr eget oppsett: dere bestemmer bordtype, dansegulv og hvor velkomsten skal være. Ingen sal som dikterer rommet – bare plassen dere vil ha den, slik dere vil ha det.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se partytelt', to: '/partytelt' },
    tertiaryCta: { label: 'Leie bord og stoler', to: '/bord-og-stoler' },
  },
  quickFacts: [
    {
      title: 'Runde bord',
      text: 'Lettere prat på tvers – mykere middagsrom enn langbord.',
      icon: Sparkles,
    },
    {
      title: '6x12m telt',
      text: 'Plass til middag, dansegulv og velkomst under samme tak.',
      icon: Users,
    },
    {
      title: 'Egne soner',
      text: 'Velkomst, middag og dans kan ligge der dere vil ha det.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Det par vurderer først til bryllup under telt',
    description: 'Vanlig utgangspunkt når middagen står ute og uttrykket betyr like mye som kapasiteten.',
    productIds: ['partytelt-6x12', 'partytelt-5x10', 'runde-bord'],
  },
  sections: [
    {
      icon: Heart,
      eyebrow: 'Hva som avgjør valget',
      title: 'Start med bordtype og uttrykk',
      description: 'Bryllup handler ikke bare om gjestetallet. Det handler om hvordan rommet føles når gjestene setter seg.',
      cards: [
        {
          title: 'Runde bord gir et mykere middagsrom',
          text: 'Samme antall gjester krever mer plass enn ved langbord. Det er prisen for at praten flyter på tvers.',
        },
        {
          title: 'Teltet brukes til mer enn middag',
          text: 'Velkomst, kaffesone og dans hører ofte med. Tenk gjennom hvilke soner dere vil ha før dere låser størrelsen.',
        },
        {
          title: 'Romslighet betaler seg gjennom kvelden',
          text: 'Når bordene står for tett, merkes det – både i middagsroen og i hvordan kvelden flyter videre.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Det som hever opplevelsen',
      title: 'Tre grep som hever bryllupsteltet',
      description: 'Det merkes først og fremst på hvordan kvelden oppleves – ikke på planleggingsskjemaet.',
      cards: [
        {
          title: 'Romsligere bord, roligere middag',
          text: 'Litt ekstra avstand mellom bord og stoler gjør middagsrommet både penere og roligere hele kvelden.',
        },
        {
          title: 'Velkomst og dans i egne soner',
          text: 'Dansegulvet trenger sin egen flate. Velkomst og kaffe likeså – heller separate soner enn at alt skvises inn i middagsbordet.',
        },
        {
          title: 'Bordtype etter uttrykket dere vil ha',
          text: 'Runde bord er verdt den ekstra plassen hvis dere vil ha et lunere middagsoppsett.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om bryllup under telt',
    description: 'Svar på det par lurer på når bordoppsett, teltstørrelse og flyt gjennom kvelden skal henge sammen.',
  },
  faq: partyteltBryllupFaq,
  contactSection: {
    icon: Heart,
    eyebrow: 'Snakk med oss',
    title: 'Fortell oss kort om bryllupet',
    subtitle:
      'Dato, sted, antall gjester og bordtype – så foreslår vi størrelse og oppsett. Svar med pris og tilgjengelighet innen 24 timer.',
  },
  linksHeading: {
    title: 'Hvis dere vil se hele bildet',
    description: 'Tre sider som henger sammen med bryllupsoppsettet.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign teltstørrelsene før dere låser oppsettet.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Runde bord, stoler og øvrige møbler som er vanlige i bryllupstelt.',
    },
    {
      label: 'Bruk priskalkulatoren',
      to: '/kalkulator',
      text: 'Se totalen før dere går videre.',
    },
  ],
}
