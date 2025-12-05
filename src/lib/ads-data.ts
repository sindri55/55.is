// Stafrænar auglýsingar (Digital Advertising) Copy Page Data Constants

// Scenario toggle for ROAS card
export interface ROASScenario {
  id: string;
  label: string;
  budget: string;
  roas: string;
  revenue: string;
  description: string;
}

export const roasScenarios: ROASScenario[] = [
  {
    id: 'small',
    label: 'Lítið fyrirtæki',
    budget: '200k/mán',
    roas: '3.8x',
    revenue: '760k/mán',
    description: 'Typical setup fyrir þjónustufyrirtæki eða smá e-commerce',
  },
  {
    id: 'medium',
    label: 'Meðalstórt',
    budget: '600k/mán',
    roas: '4.2x',
    revenue: '2.5M/mán',
    description: 'Ferðaþjónusta eða vaxandi netverslun',
  },
  {
    id: 'large',
    label: 'Stórt',
    budget: '1.5M/mán',
    roas: '3.6x',
    revenue: '5.4M/mán',
    description: 'Stærri brands með multi-platform campaigns',
  },
];

export interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

// Simplified to 4 strong problems
export const problemCards: ProblemCard[] = [
  {
    icon: 'DollarSign',
    title: 'Þú eyðir í auglýsingar, en veist ekki hvað kemur til baka',
    description:
      'Líka þegar "allt lítur fínt út" í Ads Manager, en salan segir eitthvað annað.',
  },
  {
    icon: 'Eye',
    title: 'Þú notar mest efla-hnappinn',
    description:
      'Það getur virkað stundum, en sjaldan sem áætlun til að fá stöðugar fyrirspurnir eða sölu.',
  },
  {
    icon: 'MessageSquare',
    title: 'Þú færð skýrslur, en enginn segir þér í mannamáli hvað á að gera næst',
    description:
      'Birtingar og smell eru í lagi. En hvað þýðir þetta fyrir tekjurnar?',
  },
  {
    icon: 'AlertCircle',
    title: 'Tracking er óljóst, þannig að þú ert í raun að giska',
    description:
      'Mælitækin, Google Analytics og umbreytingamæling þurfa að vera í lagi áður en við skölum upp.',
  },
];

export interface AdsService {
  icon: string;
  color: string;
  title: string;
  benefit: string;
  bullets: string[];
}

// Simplified to 4 core focus areas, outcome-led
export const adsServices: AdsService[] = [
  {
    icon: 'Target',
    color: '#00FFC2',
    title: 'Stefna og leiðin til sölu',
    benefit: 'Rétt skilaboð á réttum tíma í customer journey',
    bullets: [
      'Skilgreinum markmið (fyrirspurnir, bókanir, sala)',
      'Kortleggjum leiðina frá smelli í sölu og lendingarsíðurnar',
      'Byggjum herferðauppsetingu sem er auðvelt að bæta við',
    ],
  },
  {
    icon: 'Sparkles',
    color: '#8E6EFF',
    title: 'Auglýsingahönnun og prófanir',
    benefit: 'Auglýsingar sem stoppa scroll og selja',
    bullets: [
      'Skýrt message og tilboð sem passar markhópnum',
      'Prófum auglýsingar í litlum lotum',
      'Halda því sem virkar, henda hinu, ekkert drama',
    ],
  },
  {
    icon: 'Activity',
    color: '#00B8FF',
    title: 'Bestun og stýring',
    benefit: 'Dagleg attention á því sem skiptir máli',
    bullets: [
      'Budget fer þangað sem gefur mest',
      'Leitum að "low hanging fruit" og vinnum svo dýpra',
      'Skölum upp þegar gögnin segja okkur að það sé tímabært',
    ],
  },
  {
    icon: 'BarChart3',
    color: '#FFB800',
    title: 'Skýrslur sem þú skilur',
    benefit: 'Skýrt yfirlit, ekki bara tölur',
    bullets: [
      'Skýrt yfirlit, ekki bara tölur',
      'Regluleg yfirferð á því sem breyttist og af hverju',
      'Næstu skref, alltaf í lokin',
    ],
  },
];

export interface Platform {
  name: string;
  subtitle: string;
  color: string;
  description: string;
  useCases: string[];
  typicalResult: string;
  metric: string;
}

// Main platforms with 3D tilt - Meta & Google
export const mainPlatforms: Platform[] = [
  {
    name: 'Meta Ads',
    subtitle: 'Facebook & Instagram',
    color: '#0084FF',
    description: 'Fyrir fyrirtæki sem þurfa fyrirspurnir, sölur eða bókanir – ekki bara umferð. Við setjum upp auglýsingar, mælingar og markhópa þannig að algoritminn fái gott hráefni til að vinna með.',
    useCases: [
      'Fyrirspurna- og söluherferðir sem keyra á raunverulegum niðurstöðum',
      'Vöruauglýsingar sem \"elta\" rétta fólkið á réttum stundum',
      'Lookalike markhópar sem eru byggðir á raunverulegum gögnum, ekki tilfinningu',
    ],
    metric: '',
    typicalResult: 'Algengt ROAS: 4–6x þegar uppsetningin er í lagi',
  },
  {
    name: 'Google Ads',
    subtitle: 'Search, Display & YouTube',
    color: '#34A853',
    description: 'Fyrir fólk sem er nú þegar að leita – eða þarf að sjá þig áður en það byrjar að leita. Við finnum réttu leitarorðin, gerum hreina uppsetningu og tryggjum að þú borgir ekki fyrir bara umferð heldur fáir sölur.',
    useCases: [
      'Leitarherferðir sem ná bæði vörumerkjaleit og almennri leit',
      'Performance Max fyrir netverslun eða marglaga leiðir',
      'Leitarfyrirspurnir hreinsaðar vikulega',
    ],
    metric: '',
    typicalResult: 'Algengt ROAS: 4.5-6.5x, hæst á brand search',
  },
];

// Secondary platforms - flat badges, no 3D tilt
export interface SecondaryPlatform {
  name: string;
  description: string;
}

export const secondaryPlatforms: SecondaryPlatform[] = [
  {
    name: 'TikTok Ads',
    description: 'Fyrir brands sem target-a yngri audience með video content',
  },
  {
    name: 'LinkedIn Ads',
    description: 'B2B lead generation og talent acquisition',
  },
  {
    name: 'Snapchat',
    description: 'Niche fyrir smá íslenska brands með ungt target',
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

// Simplified to 5 clear steps
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Audit & Goal Setting',
    description: 'Förum yfir núverandi setup, tracking, historical data. Skýr conversion goals.',
    duration: 'Vika 1',
  },
  {
    step: 2,
    title: 'Account Cleanup & Tracking Fix',
    description: 'Lögum píxel, GA4, conversion tracking. Hendum út waste.',
    duration: 'Vikur 1–2',
  },
  {
    step: 3,
    title: 'New Campaigns & Creative Testing',
    description: 'Keyrum structured campaigns með A/B tests á audiences og creative.',
    duration: 'Vikur 2-4',
  },
  {
    step: 4,
    title: 'Ongoing Optimization & Scaling',
    description: 'Daglegar checks, vikulegar tweaks, mánaðarlegar adjustments.',
    duration: 'Mánuðir 2-4',
  },
  {
    step: 5,
    title: 'Regular Review & Next Steps',
    description: 'Ársfjórðungslegar reviews á hvað virkaði og hvernig við sköluðum upp.',
    duration: 'Quarterly',
  },
];

export interface CaseStudy {
  industry: string;
  situation: string;
  whatWeDid: string[];
  results: Array<{
    label: string;
    before: string;
    after: string;
  }>;
  timeframe: string;
  outcome: string;
}

// Simplified to 2-3 strong cases only
export const caseStudies: CaseStudy[] = [
  {
    industry: 'Ferðaþjónusta · Reykjavík',
    situation: 'Túristafyrirtæki var að eyða 650k á mánuði í Meta ads með 1.8x ROAS. Tracking var brotið og allt keyrt í einni campaign.',
    whatWeDid: [
      'Fixuðum tracking og píxel',
      'Skipulegðum campaigns í funnel stages',
      'Testuðum 12 creative variants',
    ],
    results: [
      { label: 'ROAS', before: '1.8x', after: '4.2x' },
      { label: 'CPA', before: '12.400 kr', after: '6.800 kr' },
    ],
    timeframe: '4 mánuðir',
    outcome: 'Fyrirtækið þrefaldar ad spend því hver króna skilar meira.',
  },
  {
    industry: 'E-commerce · Íslandi',
    situation: 'Vefverslun með 50+ vörur. Boosting posts og ekki targetað rétt. Conversion tracking ekki tengt við Shopify.',
    whatWeDid: [
      'Setjum upp dynamic product ads',
      'Catalog campaigns',
      'Proper remarketing funnel',
    ],
    results: [
      { label: 'ROAS', before: '2.1x', after: '5.3x' },
      { label: 'Orders', before: '+40%', after: '+220%' },
    ],
    timeframe: '3 mánuðir',
    outcome: 'Meta ads urðu stærsti revenue channel, fram úr organic og email samanlagt.',
  },
  {
    industry: 'Ferðaþjónusta · USA & UK targeting',
    situation: 'Íslenskt túristafyrirtæki var að kaupa Meta ads á USA/UK markað með of breiðu targeting og veikri innihaldslínu. Hár kostnaður á bókun.',
    whatWeDid: [
      'Segmentuðum markhópinn (solo, couples, adventure)',
      'Byggðum video-based cold funnel',
      'Google Ads: Search + PMax með raunverulegum intent',
    ],
    results: [
      { label: 'Cost per booking', before: '19.000 kr', after: '7.800 kr' },
      { label: 'Lead → booking conversion', before: 'lág', after: 'hækkaði verulega' },
    ],
    timeframe: '2 mánuðir',
    outcome: 'Bókanir urðu stöðugar og áræðilegar',
  },
];

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Focused on 5 key buyer questions
export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Hvað er eðlilegt byrjunarbudget?',
    answer:
      'Fer eftir markmiði og samkeppni. Við byrjum oft á test-fasa og stillum upp budgeti sem gefur næg gögn án þess að brenna allt í einu.',
  },
  {
    id: 2,
    question: 'Hversu fljótt sést árangur?',
    answer:
      'Stundum strax, en oftast tekur 2 til 4 vikur að ná stöðugum gögnum. Svo kemur fínstilling og skölun.',
  },
  {
    id: 3,
    question: 'Hvað þarf að vera til staðar til að þetta virki?',
    answer:
      'Tracking sem virkar, skýr tilboð eða message, og landing síða sem getur "lokið sölunni".',
  },
  {
    id: 4,
    question: 'Hver á ad account og gögnin?',
    answer:
      'Þú. Alltaf. Við vinnum inni í þínum account og þú hefur fullan aðgang.',
  },
  {
    id: 5,
    question: 'Er binding?',
    answer:
      'Nei, engin langtímabinding. Við viljum vinna okkur inn, ekki læsa þig inni.',
  },
];