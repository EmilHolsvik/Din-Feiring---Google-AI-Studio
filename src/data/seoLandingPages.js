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
    question: 'Hvor mange personer sitter rundt bordene deres?',
    answer:
      'På både klappbordene og de runde bordene anbefaler vi normalt seks personer for et komfortabelt oppsett. Da får dere plass til kuverter, servering og litt luft rundt bordet.',
  },
  {
    question: 'Hva velger folk oftest til konfirmasjon?',
    answer:
      'Til konfirmasjon er klappbord og stoler det vanligste valget, særlig når mange skal spise samtidig og man vil holde oppsettet ryddig og enkelt å plassere i telt eller hage.',
  },
  {
    question: 'Hva velger folk oftest til bryllup?',
    answer:
      'Til bryllup er runde bord et vanlig valg fordi de gir en roligere og mer sosial bordsetting. Mange kombinerer dem med partytelt når middagen skal foregå utendørs.',
  },
  {
    question: 'Kan bord og stoler leveres sammen med partytelt?',
    answer:
      'Ja. Hvis dere også skal leie partytelt, kan bord og stoler legges inn i samme forespørsel, slik at vi kan se hele oppsettet samlet og planlegge levering eller henting mer presist.',
  },
]

export const bordOgStolerLandingContent = {
  hero: {
    icon: PackageCheck,
    eyebrow: 'Bord og stoler til utleie',
    title: 'Leie bord og stoler i Sandefjord og Vestfold',
    description:
      'Finn klappbord, runde bord og stoler som passer til konfirmasjon, bryllup, hagefest og andre arrangementer der oppdekking og flyt betyr like mye som antall sitteplasser.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
    tertiaryCta: { label: 'Se partytelt', to: '/partytelt' },
  },
  quickFacts: [
    {
      title: 'Klappbord passer ofte best til konfirmasjon og hagefest',
      text: 'De er enkle å plassere i telt og gjør det lett å få mange sitteplasser på en ryddig måte.',
      icon: Users,
    },
    {
      title: 'Runde bord brukes ofte når stemningen rundt middagen er viktig',
      text: 'De gir et mykere oppsett og brukes ofte til bryllup eller roligere middagsselskap.',
      icon: Sparkles,
    },
    {
      title: 'Ekstrabord er ofte like viktige som sitteplassene',
      text: 'Mange trenger egne bord til buffet, kaker, gaver eller servering i tillegg til selve middagsoppsettet.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Produkter',
    title: 'Produkter mange bruker når de skal dekke opp',
    description:
      'Her ser du møblene som oftest brukes til middag, servering og ekstra soner rundt arrangementet.',
    productIds: ['bord', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: CalendarDays,
      eyebrow: 'Velg riktig oppsett',
      title: 'Hva bør dere velge før dere teller antall bord?',
      description:
        'Det viktigste er ikke bare hvor mange plasser dere trenger, men hvordan dere vil at måltidet og bevegelsen i rommet skal fungere.',
      cards: [
        {
          title: 'Klappbord når dere vil utnytte plassen effektivt',
          text: 'Klappbord passer godt når mange skal sitte samtidig, og når bordene må tilpasses telt, terrasse eller et avlangt område.',
        },
        {
          title: 'Runde bord når middagen skal føles roligere',
          text: 'Runde bord brukes ofte når praten rundt bordet og et mer åpent uttrykk betyr mye for opplevelsen.',
        },
        {
          title: 'Ekstrabord til buffet, kaker og servering',
          text: 'Mange glemmer hvor mye plass som går til kaker, kaffe, gavebord eller serveringsflater. Det er smart å planlegge disse bordene samtidig.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk gjennomføring',
      title: 'Slik gjør dere bestillingen enklere',
      description:
        'Når dere har oversikt over gjester, bordtype og behov for ekstra soner, blir det lettere å få et tilbud som faktisk passer oppsettet.',
      cards: [
        {
          title: 'Start med hvor mange som skal sitte samtidig',
          text: 'Det er dette som avgjør hvor mange hovedbord og stoler dere trenger før dere legger til buffet eller andre ekstrabord.',
        },
        {
          title: 'Tenk på bæring og levering tidlig',
          text: 'Hvis bord og stoler skal inn i hage, telt eller lokale med litt avstand, er det lurt å tenke gjennom logistikken før bestilling.',
        },
        {
          title: 'Bestill samlet hvis dere også trenger telt',
          text: 'Når telt, bord og stoler planlegges i samme runde, blir det enklere å se helheten og unngå at oppsettet blir for tett.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det folk oftest lurer på',
    description: 'Her er spørsmålene som går igjen når noen skal leie bord og stoler til arrangement.',
  },
  faq: bordOgStolerFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Disse sidene hjelper videre når dere skal sette sammen hele oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se partytelt',
      to: '/partytelt',
      text: 'Gå videre hvis dere også trenger telt og vil se hvilke størrelser som passer til sittende oppsett.',
    },
    {
      label: 'Partytelt til bryllup',
      to: '/partytelt-bryllup',
      text: 'Se hvordan runde bord, stoler og telt ofte kombineres når bryllupsmiddagen skal holdes ute.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få et raskt overslag på telt, bord og stoler før dere sender inn en forespørsel.',
    },
  ],
}

export const partyteltKonfirmasjonFaq = [
  {
    question: 'Hvilket telt passer ofte til 25 til 35 gjester i konfirmasjon?',
    answer:
      'For mange konfirmasjoner i denne størrelsen er 5 x 8 m et naturlig sted å starte. Skal dere også ha kakebord, gavebord eller litt ekstra luft mellom bordene, kan 5 x 10 m være et bedre valg.',
  },
  {
    question: 'Hvilket telt passer ofte til 40 til 50 gjester?',
    answer:
      'Da er 5 x 10 m ofte aktuelt, men riktig størrelse avhenger av om alle skal sitte under teltet samtidig, og hvor mye plass som går til servering, kaker og bevegelser gjennom dagen.',
  },
  {
    question: 'Trenger vi mer plass enn bare til spisebordene?',
    answer:
      'Som regel ja. Til konfirmasjon går det ofte mer plass enn man tror til kaker, kaffe, gavebord, servering og passasjer mellom bordene. Derfor lønner det seg ofte å ha litt margin.',
  },
  {
    question: 'Kan vi bestille telt, bord og stoler samlet?',
    answer:
      'Ja. Det er ofte den enkleste løsningen, fordi vi da kan vurdere teltstørrelse og bordoppsett i samme runde i stedet for at dere må gjette dere fram hver for seg.',
  },
]

export const partyteltKonfirmasjonLandingContent = {
  hero: {
    icon: BadgeCheck,
    eyebrow: 'Konfirmasjon under telt',
    title: 'Partytelt til konfirmasjon i Sandefjord og Vestfold',
    description:
      'Planlegg konfirmasjon med telt, bord og stoler som faktisk gir plass til middag, kaker og gjester gjennom hele dagen. Her får dere et tydelig utgangspunkt før dere bestiller.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se teltguiden', to: '/hvor-stort-partytelt' },
    tertiaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
  },
  quickFacts: [
    {
      title: 'Konfirmasjon trenger ofte mer plass enn et vanlig middagsselskap',
      text: 'Det er sjelden bare spisebordene som skal inn i teltet. Kaker, gaver og kaffedelen må ofte også få plass.',
      icon: MapPin,
    },
    {
      title: 'Mange ender på 5 x 8 m eller 5 x 10 m',
      text: 'Hvilken størrelse som passer best avhenger av gjestetall, bordoppsett og hvor mye ekstra plass dere vil ha i teltet.',
      icon: CalendarDays,
    },
    {
      title: 'Det er vanlig å bestille telt og møbler samlet',
      text: 'Når alt sees i sammenheng, blir det lettere å velge en størrelse som faktisk fungerer på selve dagen.',
      icon: Users,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Produkter mange starter med til konfirmasjon',
    description:
      'Dette er produkter som ofte er relevante når konfirmasjonen skal foregå helt eller delvis under telt.',
    productIds: ['partytelt-5x8', 'partytelt-5x10', 'bord', 'stoler'],
  },
  sections: [
    {
      icon: BadgeCheck,
      eyebrow: 'Hva avgjør størrelsen',
      title: 'Teltvalget handler ofte om mer enn antall gjester',
      description:
        'Konfirmasjon blir fort en lang dag med flere faser, og det er nettopp det som gjør at litt ekstra plass ofte blir verdt det.',
      cards: [
        {
          title: 'Tenk på hvor mange som faktisk skal sitte under teltet',
          text: 'Hvis alle gjestene skal spise i teltet samtidig, trenger dere en annen størrelse enn hvis deler av selskapet sitter inne eller i flere soner.',
        },
        {
          title: 'Kaker, gavebord og servering må også få plass',
          text: 'Mange opplever at teltet føles fullt når disse tingene først kommer på plass. Derfor bør de være med i vurderingen fra start.',
        },
        {
          title: 'Litt ekstra luft gjør hele dagen roligere',
          text: 'Når folk skal sitte lenge, reise seg, hente kaffe og bevege seg mellom bordene, merkes det godt om oppsettet er for tett.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk gjennomføring',
      title: 'Slik gjør mange familier det i praksis',
      description:
        'Jo tidligere telt, bord og logistikk er avklart, desto enklere blir det å planlegge resten av konfirmasjonen rundt en trygg ramme.',
      cards: [
        {
          title: 'Start med gjester og ønsket bordoppsett',
          text: 'Da blir det lettere å vurdere om dere trenger 5 x 8 m, 5 x 10 m eller noe større når kaker og servering også skal få plass.',
        },
        {
          title: 'Sett opp teltet i god tid hvis dere kan',
          text: 'Mange vil ha teltet klart før selve dagen, slik at borddekking, pynting og siste forberedelser kan gjøres uten tidspress.',
        },
        {
          title: 'Avklar levering eller montering tidlig',
          text: 'Hvis dere vil slippe logistikken helt, er det lurt å ta dette med i planleggingen fra starten av i stedet for rett før konfirmasjonen.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det folk ofte lurer på før konfirmasjon under telt',
    description: 'Her er spørsmålene som går igjen når familier prøver å lande riktig teltstørrelse og oppsett.',
  },
  faq: partyteltKonfirmasjonFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Bruk disse sidene hvis dere vil sammenligne størrelser eller legge til resten av oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign størrelsene side om side hvis dere vil se hele utvalget før dere bestemmer dere.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Gå videre hvis dere vil se bord og stoler som passer til middag, kaffe og kakebord i teltet.',
    },
    {
      label: 'Ta kontakt',
      to: '/kontakt',
      text: 'Send dato, sted og antall gjester, så kan vi hjelpe dere med et mer presist utgangspunkt.',
    },
  ],
}

export const partyteltBryllupFaq = [
  {
    question: 'Hvilket telt passer ofte til 50 til 70 gjester i bryllup?',
    answer:
      'For mange bryllup i denne størrelsen er 6 x 12 m eller 5 x 10 m aktuelle utgangspunkt, men riktig valg avhenger av bordtype, om dere vil ha ekstra luft mellom bordene, og om teltet også skal romme velkomst, kaffe eller andre soner.',
  },
  {
    question: 'Er runde bord eller langbord best i partytelt til bryllup?',
    answer:
      'Det kommer an på uttrykket dere ønsker. Runde bord gir ofte et roligere og mer sosialt middagsoppsett, men de bruker også mer plass enn et enklere langbordoppsett.',
  },
  {
    question: 'Bør vi planlegge ekstra plass til mingling og kaffe?',
    answer:
      'Ja, hvis teltet skal brukes til mer enn bare selve middagen. Mange bryllup trenger litt ekstra luft til velkomst, kaffe, gavebord eller naturlige overganger i løpet av dagen.',
  },
  {
    question: 'Kan teltet settes opp i god tid før bryllupet?',
    answer:
      'Ja, det kan avtales. Mange ønsker å ha teltet klart før bryllupsdagen, slik at oppdekking og resten av forberedelsene kan gjøres i roligere tempo.',
  },
]

export const partyteltBryllupLandingContent = {
  hero: {
    icon: Heart,
    eyebrow: 'Bryllup under telt',
    title: 'Partytelt til bryllup i Sandefjord og Vestfold',
    description:
      'Finn partytelt og bordoppsett som gir nok plass til middag, mingling og et rolig bryllupsuttrykk. Her får dere et tydelig utgangspunkt før dere sender inn forespørsel.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se partytelt', to: '/partytelt' },
    tertiaryCta: { label: 'Leie bord og stoler', to: '/bord-og-stoler' },
  },
  quickFacts: [
    {
      title: 'Bryllup trenger ofte mer luft enn man først tror',
      text: 'Når gjestene skal sitte lenge, og oppsettet også skal se godt ut, blir litt ekstra plass ofte en stor fordel.',
      icon: Sparkles,
    },
    {
      title: 'Runde bord gir et annet uttrykk enn langbord',
      text: 'Det kan påvirke både stemningen og hvor stort telt dere faktisk trenger til middagen.',
      icon: Users,
    },
    {
      title: 'Teltet brukes ofte til mer enn bare middagen',
      text: 'Mange vil også ha plass til velkomst, kaffe, mingling eller andre overganger gjennom dagen.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Produkter mange vurderer til bryllup under telt',
    description:
      'Dette er et vanlig utgangspunkt når bryllupsmiddagen eller store deler av dagen skal foregå utendørs.',
    productIds: ['partytelt-6x12', 'partytelt-5x10', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: Heart,
      eyebrow: 'Hva som påvirker valget mest',
      title: 'Bryllupstelt bør planlegges rundt flyt og uttrykk, ikke bare kapasitet',
      description:
        'Et telt kan ha plass til et visst antall gjester på papiret, men opplevelsen av bryllupet avgjøres ofte av hvor romslig og rolig oppsettet faktisk føles.',
      cards: [
        {
          title: 'Runde bord trenger mer plass, men gir et mykere middagsrom',
          text: 'Det er ofte derfor samme gjestetall kan kreve et større telt til bryllup enn til et enklere selskapsoppsett.',
        },
        {
          title: 'Tenk på overgangene i løpet av dagen',
          text: 'Velkomst, middag, kaffe og mingling krever litt forskjellig bruk av plassen. Det er smart å planlegge dette før teltstørrelsen låses.',
        },
        {
          title: 'Litt ekstra luft gjør oppsettet penere og roligere',
          text: 'Når gjestene skal sitte lenge, merkes det fort hvis bordene står for tett eller passasjene blir for smale.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk planlegging',
      title: 'Slik gjør dere logistikken enklere før bryllupet',
      description:
        'Når telt, bord og praktiske avklaringer tas tidlig, blir det lettere å fokusere på resten av planleggingen uten unødvendig stress mot slutten.',
      cards: [
        {
          title: 'Start med gjestetall og ønsket bordtype',
          text: 'Det gir et langt bedre grunnlag for å vurdere teltstørrelse enn å begynne med kvadratmeter alene.',
        },
        {
          title: 'Ta stilling til hvilke soner teltet skal romme',
          text: 'Hvis teltet også skal brukes til velkomst, kaffe eller servering, bør dette tas med før dere bestemmer størrelse.',
        },
        {
          title: 'Avklar oppsett i god tid før dagen',
          text: 'Mange vil ha teltet klart tidlig, slik at borddekking, pynting og siste forberedelser kan gjøres i roligere tempo.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det folk oftest lurer på før bryllup under telt',
    description: 'Her er spørsmålene som går igjen når noen planlegger bryllup med telt, runde bord og middag ute.',
  },
  faq: partyteltBryllupFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Disse sidene hjelper dere videre når dere skal finjustere oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign teltstørrelsene hvis dere vil vurdere hele utvalget før dere bestemmer dere.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Se runde bord, stoler og øvrige møbler som ofte brukes til middag og servering i bryllupstelt.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få et raskt overslag før dere sender inn en samlet forespørsel på telt og møbler.',
    },
  ],
}
