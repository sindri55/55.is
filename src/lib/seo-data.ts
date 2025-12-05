// Leitarvélabestun (SEO) Copy Page Data Constants

// Industry chips for hero personalization
export interface IndustryChip {
  id: string;
  label: string;
  exampleText: string;
}

export const industryChips: IndustryChip[] = [
  {
    id: 'tourism',
    label: 'Ferðaþjónusta',
    exampleText: 'Fyrir ferðaþjónustu hjálpum við að lyfta bookable keywords upp í sæti sem skila reservations fyrir high season.',
  },
  {
    id: 'service',
    label: 'Þjónustufyrirtæki',
    exampleText: 'Fyrir þjónustufyrirtæki förum við í local SEO og long-tail keywords sem skila phone calls og form submissions.',
  },
  {
    id: 'ecommerce',
    label: 'Netverslun',
    exampleText: 'Fyrir netverslun optimize-um við product pages og category pages fyrir keywords með commercial intent.',
  },
];

// Common SEO problems for reactive chips
export interface SEOProblem {
  id: string;
  label: string;
  solutions: string[];
}

export const seoProblems: SEOProblem[] = [
  {
    id: 'stuck',
    label: 'Stuck á síðu 2',
    solutions: [
      'Quick audit á technical issues og innri linking',
      'Uppfærsla á 3–5 lykilsíðum með betri content',
      'Clear report á hvað þarf að gerast næstu 90 daga',
    ],
  },
  {
    id: 'traffic',
    label: 'Traffík án leads',
    solutions: [
      'Search intent analysis á keywords sem eru að draga traffic',
      'CRO audit á landing pages',
      'Optimization á fyrir keywords með actual purchase intent',
    ],
  },
  {
    id: 'unclear',
    label: 'Óskýrt SEO verkefni',
    solutions: [
      'Gagnsæ 90 daga roadmap með priorities',
      'Weekly/bi-weekly check-ins á plain language',
      'Live dashboard með rankings, traffic og conversions',
    ],
  },
];

export interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

export const problemCards: ProblemCard[] = [
  {
    icon: 'Eye',
    title: 'Föst á síðu þrjú eða neðar í Google',
    description:
      'Þú veist að síðan gæti rankað hærra, en hún bara mjakast ekki áfram sama hvað þú gerir.',
  },
  {
    icon: 'Activity',
    title: 'Umferð sem skilar engu',
    description:
      'Síðan fær heimsóknir, en enginn kaupir, bókar eða sendir fyrirspurn. Þá er eitthvað að klikka í ferlinu.',
  },
  {
    icon: 'AlertCircle',
    title: 'Engin áætlun eða gegnsæi',
    description:
      'Þú hefur borgað fyrir SEO áður, en veistu nákvæmlega hvað var gert? Eða af hverju? Eða hvort það virkaði?',
  },
  {
    icon: 'Clock',
    title: '"SEO tekur svo langan tíma"',
    description:
      'Nei, ekki alltaf. Fyrstu lagfæringarnar geta skilað árangri innan nokkurra vikna.',
  },
];

export interface SEOPillar {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

// Simplified pillars max 3 bullets each
export const seoPillars: SEOPillar[] = [
  {
    icon: 'Code',
    color: '#00B8FF',
    title: 'Technical SEO',
    subtitle: 'Grunnurinn sem lætur síðuna virka eins og hún á að gera',
    bullets: [
      'Hraði og Core Web Vitals',
      'Mobile lagfæringar',
      'Schema og crawl villur lagaðar',
    ],
  },
  {
    icon: 'FileText',
    color: '#8E6EFF',
    title: 'Efni og uppsetning',
    subtitle: 'Textinn og uppsetningin sem hjálpa fólki að finna þig',
    bullets: [
      'Leitarorðagreining sem skilar árangri',
      'Efni sem svarar spurningunum sem fólk hefur',
      'Titlar, lýsingar og uppsetning sem skila hærra ranki',
    ],
  },
  {
    icon: 'Link2',
    color: '#00FFC2',
    title: 'Authority & Links',
    subtitle: 'Trúverðugleiki sem Google tekur eftir',
    bullets: [
      'Digital PR og viðtökustafir sem telja',
      'Samstarfstenglar sem passa við þinn geira',
      'Greining á tengla og hreinsum upp rusl tengla',
    ],
  },
  {
    icon: 'Target',
    color: '#FFB800',
    title: 'Search Intent & Conversions',
    subtitle: 'Röðun sem skilar raunverulegum viðskiptum',
    bullets: [
      'Intent mapping svo þú hittir rétt orð fyrir rétta manneskju',
      'Lagfæringar á landing pages til að auka umbreytingar',
      'Mælingar sem sýna nákvæmlega hvað virkar',
    ],
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Audit & Áætlun',
    description:
      'Við tékkum á stöðunni og búum til plan sem actually meikar sense. Greining á technical, content og link stöðunni. Skýr 90 daga roadmap sem sýnir nákvæmlega hvað kemur næst.',
    duration: 'Vika 1',
  },
  {
    step: 2,
    title: 'Quick Wins',
    description:
      'Löguðum það sem hægt er að laga strax. Technical fixes, meta tags og annað low hanging fruits sem byrjar að skila árangri án þess að bíða í mánuði.',
    duration: 'Vikur 2-4',
  },
  {
    step: 3,
    title: 'Content & Authority',
    description:
      'Við byggjum grunninn: gott efni og trúverðugleika. Content sem fólk finnur, smá keyword expansion og fyrsta umferð PR/backlink verkefna.',
    duration: 'Vikur 5-12',
  },
  {
    step: 4,
    title: 'Scale & Optimize',
    description:
      'Þegar grunnurinn er klár, þá förum við í stækkun. Meira efni, fleiri keywords, betra intent match og hærri conversions.',
    duration: 'Mánuðir 4-6',
  },
  {
    step: 5,
    title: 'Review & Aðlögun',
    description:
      'SEO er lifandi við lögum og fínstillum reglulega. Mánaðarlegar skýrslur, quarterly reviews og stöðug fínstilling eftir raunverulegum gögnum.',
    duration: 'Ongoing',
  },
];

export interface CaseStudy {
  industry: string;
  context: string;
  mainMetric: {
    label: string;
    value: string;
    timeframe: string;
  };
  supportingMetric: {
    label: string;
    value: string;
  };
  result: string;
}

// Simplified to 2 strong cases
export const caseStudies: CaseStudy[] = [
  {
    industry: 'Ferðaþjónusta · Reykjavík',
    context: 'Fyrirtæki í ferðaþjónustu föst í sæti 5-8 á Google fyrir keyword "northern lights tour".',
    mainMetric: {
      label: 'Organic clicks:',
      value: '+340%',
      timeframe: 'á 4 mánuðum',
    },
    supportingMetric: {
      label: 'Rank:',
      value: 'Sæti 8 → Sæti 1',
    },
    result: 'Hættu að kaupa Google Ads á keywordinu og sparaðu ~200k/mánuði.',
  },
  {
    industry: 'Hvalaskoðun · Norðurland',
    context: 'Fyrirtæki með hvalaskoðun á norðurlandi föst í 7-10 sæti á Google fyrir mörg há volume keywords. Vandinn: hægur mobile hraði, of lítið content og backlink gap.',
    mainMetric: {
      label: 'Organic clicks',
      value: '+265%',
      timeframe: 'á 5 mánuðum',
    },
    supportingMetric: {
      label: 'Keywords in Top 3',
      value: '4 → 17',
    },
    result: '40% af hagnaði kemur núna úr náttúrulegum leitum.',
  },
];

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Focused on 5 key objections
export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Hversu langan tíma tekur SEO að skila árangri?',
    answer:
      'Heiðarlega? 3-6 mánuðir fyrir raunverulegan momentum. En fyrstu hækkanir sjást innan 4-8 vikna ef við lögum tæknileg vandamál og fínstillum núverandi efni.',
  },
  {
    id: 2,
    question: 'Þarf ég að búa til nýtt efni sjálf/ur?',
    answer:
      'Nei. Við getum skrifað allt efnið. Eða þú sendir bullet points og við klárum. Þú velur.',
  },
  {
    id: 3,
    question: 'Hvernig er binding og pricing?',
    answer:
      'Engin binding, ekkert vesen. 30 dagar og þú ert út. Verkefnin okkar eru vanalega 150k-400k/mán. Við gefum þér plan, ekki "SEO pakka" með óljósum atriðum sem enginn skilur.',
  },
  {
    id: 4,
    question: 'Hvernig mælum við árangur?',
    answer:
      'Rankings. Organic traffic. Sölur og bókanir. Það er það sem þú vilt sjá, og það er það sem við sýnum. Ekkert bull.',
  },
  {
    id: 5,
    question: 'Hversu oft förum við yfir árangur?',
    answer:
      'Live dashboard uppfærist daglega. Við höfum stuttan check-in á 2 vikna fresti og stærri review í lok hvers mánaðar.',
  },
];

export interface SERPPosition {
  position: number;
  label: string;
  week: string;
}

export const serpPositions: SERPPosition[] = [
  { position: 10, label: 'Sæti 10', week: 'Vika 1' },
  { position: 7, label: 'Sæti 7', week: 'Vika 4' },
  { position: 5, label: 'Sæti 5', week: 'Vika 8' },
  { position: 3, label: 'Sæti 3', week: 'Vika 12' },
  { position: 1, label: 'Sæti 1', week: 'Vika 16' },
];