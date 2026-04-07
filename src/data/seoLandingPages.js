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
    question: 'Kan vi leie bare bord og stoler uten telt?',
    answer:
      'Ja. Du kan leie bare bord, runde bord eller stoler hvis det er det du trenger. Mange kombinerer dette med eget lokale, terrasse eller et arrangement som allerede har telt på plass.',
  },
  {
    question: 'Hvor mange personer får plass rundt bordene?',
    answer:
      'På klappbordene anbefaler vi maksimalt seks personer per bord. På de runde bordene våre anbefaler vi også seks personer for et komfortabelt oppsett.',
  },
  {
    question: 'Hva passer best til bryllup og middagsselskap?',
    answer:
      'Runde bord brukes ofte når man vil ha en mer sosial og rolig bordsetting, mens klappbord er et praktisk valg til konfirmasjon, hagefest og andre oppsett med langbord.',
  },
  {
    question: 'Kan bord og stoler leveres sammen med partytelt?',
    answer:
      'Ja. Hvis du også skal leie partytelt, kan vi samle bord, stoler og telt i samme forespørsel, slik at det blir enklere å planlegge levering og henting.',
  },
]

export const bordOgStolerLandingContent = {
  hero: {
    icon: PackageCheck,
    eyebrow: 'Bord og stoler til utleie',
    title: 'Leie bord og stoler i Sandefjord og Vestfold',
    description:
      'Lei klappbord, runde bord og stoler til konfirmasjon, bryllup, hagefest og firmaarrangement. Hos Din Feiring kan du kombinere møbler og partytelt i én samlet bestilling.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
    tertiaryCta: { label: 'Se partytelt', to: '/partytelt' },
  },
  quickFacts: [
    {
      title: 'Fra enkel oppdekking til store selskap',
      text: 'Møblene passer både til mindre middager hjemme og større arrangementer med mange gjester.',
      icon: Users,
    },
    {
      title: 'Velg bordtype etter stemning',
      text: 'Klappbord er praktiske og fleksible, mens runde bord passer godt når du vil skape et mer sosialt middagsoppsett.',
      icon: Sparkles,
    },
    {
      title: 'Enkelt å kombinere med telt',
      text: 'Du kan samle bord, stoler og partytelt i samme forespørsel og slippe å koordinere flere leverandører.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Produkter',
    title: 'Velg bord og stoler som passer oppsettet ditt',
    description:
      'Her finner du møblene vi leier ut oftest til middag, buffet, konfirmasjon, bryllup og større selskaper.',
    productIds: ['bord', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: CalendarDays,
      eyebrow: 'Typiske oppsett',
      title: 'Slik bruker mange bord og stoler i praksis',
      description:
        'Det riktige oppsettet handler ikke bare om antall plasser, men om hvordan gjestene skal bevege seg og bruke rommet gjennom hele arrangementet.',
      cards: [
        {
          title: 'Konfirmasjon med langbord',
          text: 'Klappbord og stoler er et vanlig valg når mange skal spise samtidig og du vil holde oppsettet ryddig og oversiktlig.',
        },
        {
          title: 'Bryllup med runde bord',
          text: 'Runde bord gir en roligere og mer sosial bordsetting, og brukes ofte når middagen skal være en større del av opplevelsen.',
        },
        {
          title: 'Buffet, gavebord og ekstra soner',
          text: 'Ekstra bord er nyttige til kaker, gavebord, kaffe, servering eller andre soner som gjør arrangementet mer flytende.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk bestilling',
      title: 'Gjør møblene til en enkel del av totalen',
      description:
        'Når du bestiller bord og stoler sammen med resten av oppsettet, blir planleggingen enklere og tilbudet mer presist.',
      cards: [
        {
          title: 'Regn ut antall tidlig',
          text: 'Send oss antall gjester og hvilken type bordoppsett du ønsker, så blir det lettere å lande riktig antall møbler fra start.',
        },
        {
          title: 'Henting eller levering',
          text: 'Du kan hente selv i Sandefjord, eller avtale levering hvis du vil ha en enklere arrangementsdag.',
        },
        {
          title: 'Samlet forespørsel',
          text: 'Vil du ha telt, bord og stoler i samme bestilling, kan vi sette det opp samlet så du slipper flere runder.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det folk ofte lurer på',
    description: 'Her er de vanligste spørsmålene vi får om leie av bord og stoler.',
  },
  faq: bordOgStolerFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Bruk disse sidene for å planlegge resten av oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se partytelt',
      to: '/partytelt',
      text: 'Finn teltstørrelser, kapasitet og priser hvis du også trenger tak over hele arrangementet.',
    },
    {
      label: 'Partytelt til bryllup',
      to: '/partytelt-bryllup',
      text: 'Se hvordan runde bord, stoler og telt ofte kombineres i bryllupsoppsett.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Regn raskt på pris for bord, stoler og annet utstyr før du sender en forespørsel.',
    },
  ],
}

export const partyteltKonfirmasjonFaq = [
  {
    question: 'Hvilket partytelt passer best til konfirmasjon?',
    answer:
      'Det kommer mest an på hvor mange gjester som skal sitte under teltet samtidig, og om du også trenger plass til buffet, kaker eller gavebord. Mange ender på 5 x 8 m eller 5 x 10 m, men det varierer med oppsettet.',
  },
  {
    question: 'Bør vi velge litt større telt enn vi tror?',
    answer:
      'Som regel ja. Til konfirmasjon blir det ofte både middag, kaffe, kaker og bevegelser gjennom hele dagen, og litt ekstra plass gjør arrangementet mer komfortabelt.',
  },
  {
    question: 'Kan vi kombinere telt med bord og stoler i samme bestilling?',
    answer:
      'Ja. Det er vanlig å sende én forespørsel for telt, bord og stoler slik at vi kan hjelpe med en mer helhetlig løsning.',
  },
  {
    question: 'Kan dere levere og montere før selve dagen?',
    answer:
      'Ja, det kan avtales. Mange ønsker å ha teltet klart i god tid før gjestene kommer, og da finner vi en løsning som passer arrangementet.',
  },
]

export const partyteltKonfirmasjonLandingContent = {
  hero: {
    icon: BadgeCheck,
    eyebrow: 'Konfirmasjon under telt',
    title: 'Partytelt til konfirmasjon i Sandefjord og Vestfold',
    description:
      'Planlegg konfirmasjon med partytelt, bord og stoler som gir plass til middag, kaker og gjester gjennom hele dagen. Vi hjelper deg med størrelse, oppsett og en enklere vei fra forespørsel til ferdig løsning.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se teltguiden', to: '/hvor-stort-partytelt' },
    tertiaryCta: { label: 'Se prisestimat', to: '/kalkulator' },
  },
  quickFacts: [
    {
      title: 'Plan B for været',
      text: 'Et partytelt gjør det enklere å planlegge konfirmasjon ute uten å bli like sårbar for regn og skiftende vær.',
      icon: MapPin,
    },
    {
      title: 'Plass til hele dagen',
      text: 'Konfirmasjon handler ofte om både middag, kaffe, kaker og mange gjester over flere timer. Da er flyt og plass ekstra viktig.',
      icon: CalendarDays,
    },
    {
      title: 'Lett å kombinere med møbler',
      text: 'Telt, bord og stoler kan settes opp som én samlet løsning, så du slipper å planlegge alt hver for seg.',
      icon: Users,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Anbefalt utgangspunkt',
    title: 'Produkter mange velger til konfirmasjon',
    description:
      'Dette er noen av produktene som ofte passer godt når konfirmasjonen skal foregå ute eller delvis ute.',
    productIds: ['partytelt-5x8', 'partytelt-5x10', 'bord', 'stoler'],
  },
  sections: [
    {
      icon: BadgeCheck,
      eyebrow: 'Hva som ofte er viktig',
      title: 'Slik tenker mange familier når de velger telt',
      description:
        'Det viktigste er sjelden bare hvor mange gjester dere er, men hvordan dere vil bruke teltet gjennom hele dagen.',
      cards: [
        {
          title: 'Plass til middag og kaffe',
          text: 'Konfirmasjoner varer ofte lenge, og da er det viktig at teltet ikke bare rommer stolene, men også en behagelig flyt mellom bordene.',
        },
        {
          title: 'Ekstra plass til kaker og gavebord',
          text: 'Mange trenger også plass til servering, kaffebord eller andre soner, og det bør tas med i vurderingen når teltet velges.',
        },
        {
          title: 'Litt ekstra margin gir ro',
          text: 'Et telt som er akkurat stort nok på papiret kan fort bli trangt i praksis. Litt mer plass gjør dagen enklere å gjennomføre.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk gjennomføring',
      title: 'Gjør arrangementsdagen enklere',
      description:
        'Når teltet og møblene er avklart tidlig, blir det lettere å planlegge resten av konfirmasjonen rundt en trygg ramme.',
      cards: [
        {
          title: 'Hjelp til størrelse',
          text: 'Send oss antall gjester og ønsket oppsett, så kan vi peke deg mot en teltstørrelse som gir bedre marginer.',
        },
        {
          title: 'Levering og montering ved behov',
          text: 'Hvis du vil slippe logistikken, kan vi avtale levering og montering så teltet står klart når dere trenger det.',
        },
        {
          title: 'Samlet bestilling',
          text: 'Konfirmasjon blir ofte enklere når telt, bord og stoler bestilles samlet i stedet for å deles opp.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det mange lurer på før konfirmasjonen',
    description: 'Her er noen av spørsmålene vi får oftest når folk planlegger konfirmasjon under telt.',
  },
  faq: partyteltKonfirmasjonFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Disse sidene gjør det enklere å planlegge resten av oppsettet.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign alle teltstørrelsene før du bestemmer deg for hva som passer best til konfirmasjonen.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Finn bord og stoler som passer til sittende oppsett, kaker, buffet og servering.',
    },
    {
      label: 'Ta kontakt',
      to: '/kontakt',
      text: 'Send dato, sted og antall gjester, så hjelper vi deg med en løsning som passer dagen deres.',
    },
  ],
}

export const partyteltBryllupFaq = [
  {
    question: 'Hvilket partytelt passer best til bryllup?',
    answer:
      'Bryllup trenger ofte mer plass enn man først tror, fordi man gjerne vil ha både middagsoppsett, servering, litt luft mellom bordene og gode overgangssoner. Derfor velger mange et større telt enn de først hadde sett for seg.',
  },
  {
    question: 'Passer runde bord godt i partytelt?',
    answer:
      'Ja. Runde bord er et populært valg til bryllup fordi de gir en mer sosial og rolig bordsetting, men de krever også litt mer plass enn et enklere langbordoppsett.',
  },
  {
    question: 'Kan teltet brukes til både middag og mingling?',
    answer:
      'Ja, men da bør oppsettet planlegges med litt ekstra luft. Mange bruker teltet til middag, velkomstdrinker, kaffe eller en kombinasjon av flere soner i løpet av dagen.',
  },
  {
    question: 'Kan vi få hjelp med hele oppsettet?',
    answer:
      'Ja. Vi kan hjelpe deg med telt, bord, stoler og praktiske vurderinger rundt oppsett, levering og hva som bør tenkes gjennom før dagen.',
  },
]

export const partyteltBryllupLandingContent = {
  hero: {
    icon: Heart,
    eyebrow: 'Bryllup under telt',
    title: 'Partytelt til bryllup i Sandefjord og Vestfold',
    description:
      'Lei partytelt til bryllup med plass til middag, mingling og et oppsett som føles gjennomtenkt hele dagen. Vi hjelper deg med teltstørrelse, bordvalg og en løsning som passer bryllupets flyt.',
    primaryCta: { label: 'Be om tilbud', to: '/kontakt' },
    secondaryCta: { label: 'Se partytelt', to: '/partytelt' },
    tertiaryCta: { label: 'Leie bord og stoler', to: '/bord-og-stoler' },
  },
  quickFacts: [
    {
      title: 'Bryllup trenger ofte mer luft',
      text: 'Når gjestene skal sitte lenge og opplevelsen skal føles rolig, er litt ekstra plass ofte en stor fordel.',
      icon: Sparkles,
    },
    {
      title: 'Plass til flere soner',
      text: 'Mange vil ha både middag, kaffe, gavebord, mingling og kanskje lyd i samme helhetlige oppsett.',
      icon: Users,
    },
    {
      title: 'Tydelig plan for været',
      text: 'Teltet blir ofte det som gjør at hele dagen kan gjennomføres ute uten å være like sårbar for værskifter.',
      icon: MapPin,
    },
  ],
  productSection: {
    icon: Ruler,
    eyebrow: 'Anbefalt utgangspunkt',
    title: 'Produkter mange vurderer til bryllup',
    description:
      'Bryllupsoppsett varierer mye, men disse produktene er ofte et godt sted å starte når dere skal sette sammen en løsning.',
    productIds: ['partytelt-6x12', 'partytelt-5x10', 'runde-bord', 'stoler'],
  },
  sections: [
    {
      icon: Heart,
      eyebrow: 'Hva som ofte betyr mest',
      title: 'Bryllup handler om mer enn bare antall plasser',
      description:
        'Et godt teltoppsett til bryllup må fungere både praktisk og stemningsmessig, ikke bare romme et bestemt antall gjester.',
      cards: [
        {
          title: 'En rolig ramme rundt middagen',
          text: 'Når gjestene skal sitte lenge, merkes det godt om oppsettet er for tett. Litt ekstra plass gir en mer avslappet opplevelse.',
        },
        {
          title: 'Runde bord gir en annen stemning',
          text: 'Runde bord brukes ofte når man vil skape et mykere og mer sosialt middagsoppsett med mer kontakt rundt hvert bord.',
        },
        {
          title: 'Tenk på flyt mellom sonene',
          text: 'Mange ønsker plass til velkomst, middag, kaffe eller andre små overganger. Det er ofte dette som avgjør om teltet føles romslig.',
        },
      ],
    },
    {
      icon: Truck,
      eyebrow: 'Praktisk gjennomføring',
      title: 'Gjør logistikken enklere før den store dagen',
      description:
        'Når telt og møbler er planlagt godt, blir det langt lettere å fokusere på resten av bryllupet i stedet for praktikken.',
      cards: [
        {
          title: 'Start med gjester og bordvalg',
          text: 'Fortell oss hvor mange dere blir og om dere ser for dere runde bord eller et annet oppsett, så blir anbefalingen mer presis.',
        },
        {
          title: 'Levering og montering ved behov',
          text: 'Mange vil ha teltet klart i god tid, og da kan levering og montering være en stor avlastning før bryllupet.',
        },
        {
          title: 'Samle alt i én forespørsel',
          text: 'Når telt, bord og stoler planlegges samlet, blir både tilbud, logistikk og vurdering av plass mye enklere.',
        },
      ],
    },
  ],
  faqHeading: {
    icon: CircleHelp,
    eyebrow: 'Vanlige spørsmål',
    title: 'Svar på det mange lurer på før bryllup under telt',
    description: 'Her er noen av spørsmålene vi får oftest når folk planlegger bryllup med partytelt.',
  },
  faq: partyteltBryllupFaq,
  linksHeading: {
    title: 'Relaterte sider',
    description: 'Disse sidene hjelper dere videre med planleggingen.',
  },
  internalLinks: [
    {
      label: 'Se alle partytelt',
      to: '/partytelt',
      text: 'Sammenlign teltstørrelser og finn ut hvilke modeller som gir riktig plass og flyt til bryllupet.',
    },
    {
      label: 'Leie bord og stoler',
      to: '/bord-og-stoler',
      text: 'Se bord og stoler som ofte brukes til middag, kaffe og øvrige soner i bryllupsoppsettet.',
    },
    {
      label: 'Bruk prisestimatet',
      to: '/kalkulator',
      text: 'Få et raskt overslag før dere sender inn en samlet forespørsel.',
    },
  ],
}
