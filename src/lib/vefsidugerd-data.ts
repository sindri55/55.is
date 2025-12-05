// Vefsíðugerð Copy Page Data Constants

// Common web problems for reactive chips
export interface WebProblem {
  id: string;
  label: string;
  solutions: string[];
}

export const webProblems: WebProblem[] = [
  {
    id: 'old',
    label: 'Gamall vefur sem er orðinn þreyttur',
    solutions: [
      'Audit á UX og modern design refresh',
      'Quick wins: speed fixes og mobile optimization',
      'One new landing page concept fyrir test',
    ],
  },
  {
    id: 'traffic',
    label: 'Fær traffík en lítið af leads',
    solutions: [
      'Conversion rate audit á existing pages',
      'A/B testing á CTAs og forms',
      'Tracking setup til að sjá hvar fólk er að hoppa af',
    ],
  },
  {
    id: 'update',
    label: 'Erfitt að breyta og uppfæra',
    solutions: [
      'Migrate á modern CMS (WordPress/Contentful)',
      'Custom admin panel þar sem þú getur breytt öllu',
      'Video walkthrough þannig að þú getur gert þetta sjálf/ur',
    ],
  },
];

export interface ProblemPoint {
  icon: string;
  title: string;
  description: string;
}

// Simplified to 6 focused problems
export const problemPoints: ProblemPoint[] = [
  {
    icon: 'Zap',
    title: 'Vefurinn er hægur',
    description: 'Fólk yfirgefur vefsíður sem taka meira en 3 sekúndur að opna. Sölurnar fara með þeim.',
  },
  {
    icon: 'Eye',
    title: 'Hönnunin er úrelt',
    description: 'Nútíma notendur treysta ekki vefsíður sem líta gamaldags út. Fyrstu fimm sekúndurnar skipta öllu máli.',
  },
  {
    icon: 'Layout',
    title: 'Virkar illa í símanum',
    description: 'Um 64% umferðar kemur úr símanum. Ef síma-upplifunin klikkar, þá klikkar vefurinn.',
  },
  {
    icon: 'Users',
    title: 'Vefurinn selur ekki',
    description: 'Fólk skoðar… en gerir ekkert. Engar fyrirspurnir, engin símtöl, engar pantanir.',
  },
  {
    icon: 'Shield',
    title: 'Erfitt að uppfæra',
    description: 'Einfaldar breytingar þurfa forritara og taka daga eða vikur. Það hamlar markaðsstarfinu.',
  },
  {
    icon: 'Target',
    title: 'Óskýrt hvað þú býður',
    description: 'Notendur lenda í vegg þegar næsta skref er óljóst: lendingarsíður og hnappar verða að leiða fólk áfram.',
  },
];

export interface UseCase {
  icon: string;
  color: string;
  title: string;
  description: string;
  benefits: string[];
}

// 4 focused use case cards
export const useCases: UseCase[] = [
  {
    icon: 'Briefcase',
    color: '#00FFC2',
    title: 'Fyrirtækjasíður',
    description: 'Fyrirtækjasíður sem byggja traust',
    benefits: [
      'Skýr kynning, stafrænt presence og vefur sem selur þig áður en þú talar við neinn',
    ],
  },
  {
    icon: 'Users',
    color: '#00B8FF',
    title: 'Þjónustusíður',
    description: 'Vefir sem keyra bókanir og fyrirspurnir',
    benefits: [
      'Stafrænar þjónustuveitur, bókunarflæði og flæði sem breyta umferð í sölur',
    ],
  },
  {
    icon: 'ShoppingBag',
    color: '#8E6EFF',
    title: 'E-commerce / Vefverslanir',
    description: 'Nútímalegar verslanir sem hreyfa vörur',
    benefits: [
      'Hraði, UX og checkout sem skila meiri tekjum og minni yfirgefnum körfum',
    ],
  },
  {
    icon: 'Hotel',
    color: '#FFB800',
    title: 'Ferðaþjónusta & bókanir',
    description: 'Vefir sem selja túra og upplifanir',
    benefits: [
      'Bókunarkerfi, upsell-flæði og SEO-ready uppsetning sem skilar lífrænum bókunum',
    ],
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
    title: 'Discovery & Planning',
    description: 'Skiljum markmiðin, target audience og key requirements.',
    duration: '1-2 vikur',
  },
  {
    step: 2,
    title: 'UX & Design',
    description: 'Wireframes og high-fidelity design sem passar brand.',
    duration: '2-3 vikur',
  },
  {
    step: 3,
    title: 'Development & Integration',
    description: 'Byggjum vefinn með modern tech, CMS og tracking.',
    duration: '3-5 vikur',
  },
  {
    step: 4,
    title: 'Testing & Launch',
    description: 'QA á öllum tækjum, speed test og launch checklist.',
    duration: '1 vika',
  },
  {
    step: 5,
    title: 'Follow-up & Tweaks',
    description: 'Fylgjumst með fyrstu vikum og gerum smávægilegar lagfæringar.',
    duration: '2-4 vikur',
  },
];

export interface Package {
  icon: string;
  color: string;
  name: string;
  priceRange: string;
  forWho: string;
  includes: string[];
  popular?: boolean;
}

// Simplified packages with cleaner structure
export const packages: Package[] = [
  {
    icon: 'Layout',
    color: '#00FFC2',
    name: 'Landing Page',
    priceRange: '350-500k',
    forWho: 'Þjónustufyrirtæki og smærri fyrirtæki',
    includes: [
      'Responsive fyrir öll tæki',
      'SEO frá grunni',
      'Contact form með tracking',
    ],
  },
  {
    icon: 'Globe',
    color: '#8E6EFF',
    name: 'Multi-Page Vefur',
    priceRange: '750k-1.2M',
    forWho: 'Heilsa, ferðir, verktakar',
    includes: [
      'CMS til að uppfæra',
      'Booking/inquiry system',
      'Blog og analytics',
    ],
    popular: true,
  },
  {
    icon: 'ShoppingBag',
    color: '#00B8FF',
    name: 'Netverslun',
    priceRange: '1.2M-2M',
    forWho: 'Vörumerki og smásala',
    includes: [
      'Shopify/WooCommerce',
      'Greiðslulausnir',
      'Inventory management',
    ],
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
    question: 'Hversu langan tíma tekur það?',
    answer:
      'Landing page: 1-2 vikur. Fyrirtækjavefur: 3-4 vikur. Netverslun: 5-6 vikur. Við höldum þig uppfærðan á hverju stigi.',
  },
  {
    id: 2,
    question: 'Hver skrifar textann og sér um myndir?',
    answer:
      'Við skrifum grunntexta út frá viðtali. Þú ferð yfir og lagar. Myndir: þú sendir okkur eða við getum notað stock/AI. Flest fyrirtæki eyða 2-3 klst í content part.',
  },
  {
    id: 3,
    question: 'Hvaða platform/tech notið þið?',
    answer:
      'React/Next.js fyrir custom verk. WordPress fyrir CMS. Shopify fyrir e-commerce. Alltaf modern, hratt og SEO optimized frá grunni.',
  },
  {
    id: 4,
    question: 'Hver á vefinn og content?',
    answer:
      'Þú átt allt 100%. Við gefum þér kóða og aðgang að hosting. Þú getur tekið vefinn hvert sem er ef þú hættir samstarfi.',
  },
  {
    id: 5,
    question: 'Hvað með viðhald og support eftir launch?',
    answer:
      'Fyrsta 3 mánuðina er hýsing innifalið. Eftir það kostar viðhald 5.990kr á mánuði. Við erum alltaf til ef þú þarft hjálp eða breytingar.',
  },
];