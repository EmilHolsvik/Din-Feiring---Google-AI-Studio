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
    title: 'Send dato, sted og omtrent gjestetall',
    text: 'Da kan vi raskt luke bort størrelser som enten blir for små eller større enn dere trenger.',
  },
  {
    title: 'Skriv om dere skal ha middag, runde bord eller stående mingling',
    text: 'Det er dette som gjør forskjellen på et telt som bare akkurat går opp, og et telt som faktisk fungerer godt.',
  },
  {
    title: 'Nevn om dere også trenger bord, stoler eller levering',
    text: 'Når hele oppsettet planlegges samlet, blir det mye enklere å gi et tilbud som stemmer bedre med behovet deres.',
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
    text: 'Se møblene som oftest kombineres med partytelt når gjestene skal sitte komfortabelt.',
  },
  {
    label: 'Partytelt til konfirmasjon',
    to: '/partytelt-konfirmasjon',
    text: 'Få et mer konkret utgangspunkt hvis teltet skal romme middag, kaker og familie gjennom hele dagen.',
  },
  {
    label: 'Partytelt til bryllup',
    to: '/partytelt-bryllup',
    text: 'Se hvordan telt, runde bord og mer luft i oppsettet ofte planlegges til bryllup.',
  },
]
