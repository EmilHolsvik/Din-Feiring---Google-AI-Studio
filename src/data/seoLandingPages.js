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
    question: 'Hvor mange sitter komfortabelt per bord?',
    answer:
      'På både klappbordene og de runde bordene anbefaler vi normalt seks personer per bord. Da er det fortsatt plass til kuverter, servering og litt luft rundt hver gjest.',
    related: {
      prefix: 'Hvis du vil se bordene nærmere, kan du gå videre til ',
      links: [
        { label: 'klappbordet', to: '/produkter/bord' },
        { label: 'det runde bordet', to: '/produkter/runde-bord' },
      ],
    },
  },
  {
    question: 'Når velger folk klappbord fremfor runde bord?',
    answer:
      'Klappbord er som regel smartest når dere vil få plass til mange på en ryddig måte. Runde bord velges oftere når uttrykket rundt middagen betyr mer enn maksimal plassutnyttelse.',
    related: {
      prefix: 'Dette blir ekstra tydelig hvis du ser på ',
      links: [
        { label: 'partytelt-siden', to: '/partytelt' },
        { label: 'bryllup under telt', to: '/partytelt-bryllup' },
      ],
    },
  },
  {
    question: 'Bør vi beregne noen ekstrabord i tillegg?',
    answer:
      'Ja, ofte. Kakebord, kaffestasjon, gavebord og buffet er det mange som glemmer første gang de prøver å regne ut oppsettet sitt.',
    related: {
      prefix: 'Hvis du vil kjenne litt på helheten, kan du bruke ',
      links: [
        { label: 'prisestimatet', to: '/kalkulator' },
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
      ],
    },
  },
  {
    question: 'Hvordan vet vi om bordene faktisk får plass i teltet?',
    answer:
      'Det kommer først og fremst an på bordtype, antall gjester og om dere også trenger plass til servering og passasjer. Runde bord krever mer plass enn mange forventer når alt skal fungere godt i praksis.',
    related: {
      prefix: 'For å se dette i sammenheng, er det nyttig å se ',
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
    title: 'Leie bord og stoler i Sandefjord og Vestfold',
    description:
      'Her får dere et godt utgangspunkt for hva som fungerer best til middag, kaker, kaffe og servering, uten at oppsettet blir unødvendig trangt.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
    tertiaryCta: { label: 'Se partytelt', to: '/partytelt' },
  },
  quickFacts: [
    {
      title: 'Klappbord er ofte smartest når mange skal spise samtidig',
      text: 'De er enkle å plassere i telt, lokale eller hage, og gjør det lettere å lage et ryddig oppsett.',
      icon: Users,
    },
    {
      title: 'Runde bord gir et roligere uttrykk, men trenger mer plass',
      text: 'Det er ofte et godt valg til bryllup og jubileum, men telt og gulvflate må planlegges deretter.',
      icon: Sparkles,
    },
    {
      title: 'Det er ofte ekstrabordene som blir glemt',
      text: 'Kakebord, gavebord og buffet bør med i regnestykket fra start hvis oppsettet skal føles komfortabelt.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Et godt startpunkt',
    title: 'Produkter mange bruker når de skal dekke opp',
    description: 'Start med bordtypen og antall sitteplasser. Da blir resten av oppsettet mye enklere å lande.',
    productIds: ['bord', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: CalendarDays,
      eyebrow: 'Velg riktig oppsett',
      title: 'Start med bordtypen, ikke bare antall gjester',
      description: 'Det første valget er ofte om dere vil prioritere plassutnyttelse eller et roligere middagsuttrykk.',
      cards: [
        {
          title: 'Klappbord når dere vil bruke plassen effektivt',
          text: 'Dette er ofte det vanligste valget til konfirmasjon, hagefest og andre selskaper der mange skal spise samtidig.',
        },
        {
          title: 'Runde bord når stemningen rundt middagen betyr mest',
          text: 'De gir et mykere uttrykk og en mer sosial bordsetting, men krever også mer gulvflate rundt hvert bord.',
        },
        {
          title: 'Ekstrabord til servering, kaffe og kaker',
          text: 'Det er ofte disse bordene som avgjør om oppsettet føles ryddig eller overfylt når gjestene kommer.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Det som gjør oppdekkingen bedre',
      title: 'Tre valg som ofte gjør bordoppsettet mer behagelig',
      description: 'Dette er grep som først og fremst merkes av gjestene rundt bordet, ikke bare i planleggingen.',
      cards: [
        {
          title: 'Gi servering og kaker en egen sone',
          text: 'Da slipper dere at middagsbordene blir fulle av fat, kakeesker og ting som egentlig burde stå et annet sted.',
        },
        {
          title: 'Velg bordtype ut fra stemning, ikke vane',
          text: 'Klappbord er ofte smartest når mange skal sitte samlet, mens runde bord gir et roligere uttrykk når praten rundt bordet betyr mer.',
        },
        {
          title: 'La gjestene få litt luft rundt bordene',
          text: 'Det merkes fort når stoler står for tett eller passasjene blir for smale. Litt margin gir et langt roligere oppsett.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om bord, stoler og oppsett',
    description: 'Svar på det folk som regel vil vite når de skal finne riktig bordtype og nok plass rundt den.',
  },
  faq: bordOgStolerFaq,
  contactSection: {
    icon: PackageCheck,
    eyebrow: 'Få hjelp med oppsettet',
    title: 'Fortell kort hva dere skal dekke opp til',
    subtitle:
      'Send antall gjester, om dere ønsker klappbord eller runde bord, og om dere også trenger telt. Så kan vi foreslå et oppsett som passer.',
  },
  linksHeading: {
    title: 'Videre hvis dere vil sammenligne',
    description: 'Disse sidene er mest nyttige når bordene også skal passe inn i resten av oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se partytelt',
      to: '/partytelt',
      text: 'Nyttig hvis middagen også skal stå ute og dere vil se hvilke teltstørrelser som passer til sittende oppsett.',
    },
    {
      label: 'Partytelt til bryllup',
      to: '/partytelt-bryllup',
      text: 'Se hvordan runde bord og telt ofte kombineres når middagen skal ha et roligere og mer sosialt uttrykk.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få en rask pekepinn hvis dere vil kjenne litt på nivået før dere bestemmer dere.',
    },
  ],
}

export const partyteltKonfirmasjonFaq = [
  {
    question: 'Hva er et godt startpunkt for 25 til 35 gjester?',
    answer:
      'Hvis alle skal spise under teltet, starter mange med 5 x 8 m. Skal dere også ha kaker, gavebord eller kaffestasjon inne i teltet, kan 5 x 10 m være et tryggere valg.',
    related: {
      prefix: 'Hvis du vil sammenligne det konkret, kan du se ',
      links: [
        { label: '5 x 8 m', to: '/produkter/partytelt-5x8' },
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
      ],
    },
  },
  {
    question: 'Hva er et godt startpunkt for 40 til 50 gjester?',
    answer:
      'Da ser mange på 5 x 10 m eller større. Riktig størrelse avhenger særlig av bordoppsett, om alle skal sitte samtidig og hvor mye ekstra som også skal inn under teltet.',
    related: {
      prefix: 'Et naturlig neste steg er å sammenligne ',
      links: [
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
        { label: '6 x 12 m', to: '/produkter/partytelt-6x12' },
        { label: 'hele partytelt-utvalget', to: '/partytelt' },
      ],
    },
  },
  {
    question: 'Må kaker, gavebord og kaffe regnes med fra start?',
    answer:
      'Ja, helst. Det er ofte disse delene som gjør at et telt som virker stort nok på papiret blir for tett i praksis.',
    related: {
      prefix: 'Hvis du vil planlegge dette bedre, kan du se ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
      ],
    },
  },
  {
    question: 'Hva slags bordoppsett fungerer ofte best til konfirmasjon?',
    answer:
      'Klappbord er ofte det mest praktiske når mange i familien skal sitte samlet og dere vil bruke plassen godt. Runde bord kan fungere fint, men de krever mer plass og blir sjelden førstevalget hvis teltet også skal romme kaker og kaffe.',
    related: {
      prefix: 'Hvis du vil sammenligne oppsettene, kan du se ',
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
    title: 'Partytelt til konfirmasjon i Sandefjord og Vestfold',
    description:
      'Skal dere ha middag, kaker og kaffe ute, er det som regel litt ekstra plass som avgjør om dagen føles rolig. Her er et godt sted å starte.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se teltguiden', to: '/hvor-stort-partytelt' },
    tertiaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
  },
  quickFacts: [
    {
      title: '25 til 35 gjester med middag',
      text: 'Mange starter med 5 x 8 m. Trenger dere også kakebord og gavebord under teltet, er 5 x 10 m ofte tryggere.',
      icon: MapPin,
    },
    {
      title: '40 til 50 gjester eller mye servering',
      text: 'Da går mange rett til 5 x 10 m eller større, særlig hvis alle skal sitte samtidig.',
      icon: CalendarDays,
    },
    {
      title: 'Telt, bord og stoler bør planlegges samlet',
      text: 'Da slipper dere å gjette dere fram til et oppsett som i verste fall blir for tett på selve dagen.',
      icon: Users,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Et godt startpunkt for mange konfirmasjoner',
    description: 'Dette er produktene mange ser på først når de skal samle familie til middag og kaffe ute.',
    productIds: ['partytelt-5x8', 'partytelt-5x10', 'bord'],
  },
  sections: [
    {
      icon: BadgeCheck,
      eyebrow: 'Hva som avgjør valget',
      title: 'Det som vanligvis avgjør om teltet blir passe',
      description: 'Det er sjelden bare gjestetallet. Det er hvordan dagen faktisk skal brukes som teller mest.',
      cards: [
        {
          title: 'Alle som skal spise samtidig',
          text: 'Hvis hele selskapet skal sitte samlet under teltet, bør middagsoppsettet være utgangspunktet deres.',
        },
        {
          title: 'Kakebord, gavebord og kaffe må også inn',
          text: 'Det er disse sonene som ofte gjør at dere bør ha litt mer plass enn dere først tror.',
        },
        {
          title: 'Litt ekstra luft gjør dagen roligere',
          text: 'Når folk skal sitte lenge, reise seg og bevege seg mellom bordene, merkes det fort om oppsettet er for tett.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Det som ofte gjør dagen roligere',
      title: 'Tre ting som ofte gjør konfirmasjonsteltet bedre å være i',
      description: 'Dette er grep som vanligvis merkes mer av familien og gjestene enn av den som sender inn skjemaet.',
      cards: [
        {
          title: 'Egen plass til kaker og kaffe',
          text: 'Når dette får sin egen sone, slipper dere at middagsbordene blir fylt av ting som skaper uro senere på dagen.',
        },
        {
          title: 'Litt luft mellom bordene',
          text: 'Det merkes fort når familie i flere aldre skal sette seg, reise seg og hente kaffe gjennom et langt selskap.',
        },
        {
          title: 'Plass til at alle faktisk kan sitte samlet',
          text: 'Hvis noen må flyttes ut av teltet når været snur, føles oppsettet fort mindre trygt enn det så ut på forhånd.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om konfirmasjon under telt',
    description: 'Svar på det familier som oftest lurer på når de planlegger middag, kaker og plass til alle.',
  },
  faq: partyteltKonfirmasjonFaq,
  contactSection: {
    icon: BadgeCheck,
    eyebrow: 'Snakk med oss',
    title: 'Fortell oss litt om konfirmasjonen',
    subtitle:
      'Send dato, sted, antall gjester og om dere vil ha middag og kakebord under teltet. Så kan vi foreslå en størrelse som gir mening.',
  },
  linksHeading: {
    title: 'Videre hvis dere vil sammenligne',
    description: 'Disse sidene er mest nyttige hvis dere vil se konfirmasjonsoppsettet i en litt større sammenheng.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign størrelsene side om side hvis dere fortsatt er usikre på hvor mye plass dere egentlig trenger.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Se bord og stoler som ofte brukes når konfirmasjonsteltet også skal romme middag, kaffe og kakeservering.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få en rask pekepinn hvis dere vil vite nivået før dere går videre.',
    },
  ],
}

export const partyteltBryllupFaq = [
  {
    question: 'Hva er et godt startpunkt for 50 til 70 gjester i bryllup?',
    answer:
      'Mange ser på 5 x 10 m eller 6 x 12 m, men riktig valg avhenger særlig av bordtype, hvor mye luft dere vil ha rundt bordene og om teltet også skal brukes til velkomst, kaffe eller andre soner.',
    related: {
      prefix: 'Hvis du vil se forskjellen i praksis, kan du sammenligne ',
      links: [
        { label: '5 x 10 m', to: '/produkter/partytelt-5x10' },
        { label: '6 x 12 m', to: '/produkter/partytelt-6x12' },
      ],
    },
  },
  {
    question: 'Er runde bord eller langbord best i bryllupstelt?',
    answer:
      'Det kommer an på uttrykket dere ønsker. Runde bord gir ofte et mykere og mer sosialt middagsrom, men de krever også mer plass enn et enklere langbordoppsett.',
    related: {
      prefix: 'Hvis dette er viktig for dere, er det nyttig å se ',
      links: [
        { label: 'bord og stoler', to: '/bord-og-stoler' },
        { label: 'det runde bordet', to: '/produkter/runde-bord' },
      ],
    },
  },
  {
    question: 'Bør vi planlegge ekstra plass til mingling og kaffe?',
    answer:
      'Ja, hvis teltet skal brukes til mer enn bare selve middagen. Litt ekstra plass merkes ofte godt gjennom hele kvelden.',
    related: {
      prefix: 'Hvis du vil regne på dette før dere bestemmer dere, kan du bruke ',
      links: [
        { label: 'teltguiden', to: '/hvor-stort-partytelt' },
        { label: 'artikkelen om hvordan du velger riktig partytelt', to: '/artikler/hvordan-velge-riktig-partytelt' },
      ],
    },
  },
  {
    question: 'Hvor mye mer plass krever runde bord i praksis?',
    answer:
      'Som regel mer enn mange først tror. Det er ikke bare selve bordet som tar plass, men også stolene, passasjene rundt og ønsket om at middagsrommet skal føles rolig og pent hele kvelden.',
    related: {
      prefix: 'Hvis dere vil se dette opp mot teltstørrelsene, kan dere gå videre til ',
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
    title: 'Partytelt til bryllup i Sandefjord og Vestfold',
    description:
      'Skal teltet romme middag, runde bord og god flyt gjennom kvelden, er det bedre å planlegge litt romslig enn for trangt. Her er et godt sted å starte.',
    primaryCta: { label: 'Be om tilbud', to: '#kontakt' },
    secondaryCta: { label: 'Se partytelt', to: '/partytelt' },
    tertiaryCta: { label: 'Leie bord og stoler', to: '/bord-og-stoler' },
  },
  quickFacts: [
    {
      title: 'Runde bord trenger mer plass enn langbord',
      text: 'Det påvirker både hvor stort telt dere trenger og hvordan middagen oppleves når alle sitter samlet.',
      icon: Sparkles,
    },
    {
      title: 'Mange bryllup bruker teltet til mer enn middag',
      text: 'Velkomst, kaffe og naturlige overganger gjennom dagen bør med i vurderingen fra start.',
      icon: Users,
    },
    {
      title: 'Litt ekstra luft merkes hele kvelden',
      text: 'Når gjestene skal sitte lenge, bevege seg og bli sittende utover kvelden, er et rolig oppsett verdt mye.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Vanlige valg',
    title: 'Produkter mange vurderer først til bryllup under telt',
    description: 'Dette er et vanlig utgangspunkt når middagen skal foregå ute og uttrykket betyr like mye som kapasiteten.',
    productIds: ['partytelt-6x12', 'partytelt-5x10', 'runde-bord'],
  },
  sections: [
    {
      icon: Heart,
      eyebrow: 'Hva som påvirker valget mest',
      title: 'Start med bordtype og ønsket uttrykk',
      description: 'Bryllup handler sjelden bare om hvor mange som får plass. Det handler også om hvordan det føles når gjestene setter seg.',
      cards: [
        {
          title: 'Runde bord gir et mykere middagsrom',
          text: 'Det er ofte derfor samme gjestetall krever litt mer plass i bryllup enn i et enklere selskapsoppsett.',
        },
        {
          title: 'Teltet brukes ofte til mer enn selve middagen',
          text: 'Hvis dere vil ha plass til velkomst, kaffe eller andre overganger, bør dette inn i vurderingen før størrelsen låses.',
        },
        {
          title: 'Det er bedre med litt romslighet enn et tett oppsett',
          text: 'Når bordene står for tett, merkes det fort på både roen i rommet og flyten gjennom kvelden.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Det som ofte løfter opplevelsen',
      title: 'Tre valg som ofte gjør bryllupsteltet roligere',
      description: 'Dette er grep som først og fremst handler om hvordan bryllupet oppleves når gjestene setter seg.',
      cards: [
        {
          title: 'Litt ekstra luft rundt bordene',
          text: 'Når bordene står romsligere, føles middagsrommet både penere og roligere gjennom hele kvelden.',
        },
        {
          title: 'Egen plass til velkomst eller kaffe',
          text: 'Det gir en mykere flyt enn når alt skal presses inn i den samme middagsflaten.',
        },
        {
          title: 'Bordtype som passer uttrykket dere vil ha',
          text: 'Runde bord kan være verdt den ekstra plassen når dere ønsker et lunere og mer sosialt middagsoppsett.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Vanlige spørsmål om bryllup under telt',
    description: 'Svar på det mange vil avklare når bordoppsett, teltstørrelse og flyt gjennom kvelden skal henge sammen.',
  },
  faq: partyteltBryllupFaq,
  contactSection: {
    icon: Heart,
    eyebrow: 'Snakk med oss',
    title: 'Fortell oss litt om bryllupet deres',
    subtitle:
      'Send dato, sted, gjestetall og om dere ser for dere runde bord eller langbord. Så kan vi foreslå et oppsett som passer kvelden bedre.',
  },
  linksHeading: {
    title: 'Videre hvis dere vil sammenligne',
    description: 'Disse sidene er mest nyttige hvis dere vil se bryllupsoppsettet opp mot resten av valgene.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign teltstørrelsene hvis dere vil vurdere hele utvalget før dere låser oppsettet.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Se runde bord, stoler og øvrige møbler som ofte brukes når bryllupsmiddagen skal foregå under telt.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få en rask pekepinn hvis dere vil kjenne på nivået før dere går videre.',
    },
  ],
}
