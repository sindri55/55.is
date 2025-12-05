// AAA Page Data Constants

// Simplified problem points (3-4 strong ones)
export const problemPoints = [
  "Þú ert að eyða í auglýsingar, en það er óljóst hvað kemur til baka.",
  "Fólk kemur inn á vefinn, en það er lítið um símtöl, fyrirspurnir eða bókanir.",
  "SEO vinnan situr fast á síðu 2 í marga mánuði og þú sérð engan raunverulegan mun.",
  "Þú færð fallegar skýrslur, en ert samt ekki alveg viss hvað er að virka og hvað ekki.",
];

// Industry chips for hero personalization
export interface IndustryChip {
  id: string;
  label: string;
  serviceId: string; // Which service to highlight
  exampleText: string; // Personalized text under trust line
}

export const industryChips: IndustryChip[] = [
  {
    id: 'tourism',
    label: 'Ferðaþjónusta',
    serviceId: 'seo',
    exampleText: 'Fyrir ferðaþjónustu hjálpum við með bókanir og fyrirspurnir með auglýsingum og SEO fyrir háannatímabilið.',
  },
  {
    id: 'service',
    label: 'Þjónustufyrirtæki',
    serviceId: 'digital-ads',
    exampleText: 'Fyrir þjónustufyrirtæki förum við beint í auglýsingar og SEO sem gera það auðveldara fyrir fólk að finna þig, hringja, senda fyrirspurn eða bóka.',
  },
  {
    id: 'ecommerce',
    label: 'Netverslun',
    serviceId: 'digital-ads',
    exampleText: 'Fyrir netverslun keyrum við auglýsingar á Meta og Google sem ná til rétta fólksins og sýnum hvað virkar.',
  },
  {
    id: 'health',
    label: 'Klínikur',
    serviceId: 'web-design',
    exampleText: 'Fyrir klínikur smíðum við vefi þar sem fólk getur bókað auðveldlega og keyrum auglýsingar í kringum staðsetningu þína.',
  },
];

// Common problems for reactive micro-outline
export interface CommonProblem {
  id: string;
  label: string;
  solutions: string[];
}

export const commonProblems: CommonProblem[] = [
  {
    id: 'ads',
    label: 'Eyðir í ads',
    solutions: [
      'Audit á targeting, creative og bidding strategy',
      'Fix tracking og conversion setup',
      'Test structured campaigns með clear KPIs',
    ],
  },
  {
    id: 'seo',
    label: 'Stuck á síðu 2',
    solutions: [
      'Technical SEO audit og quick wins',
      'Content gap analysis og keyword expansion',
      'Backlink strategy með real outreach',
    ],
  },
  {
    id: 'web',
    label: 'Vefur sem selur ekki',
    solutions: [
      'Conversion audit og UX fixes',
      'A/B testing á CTAs og copy',
      'Speed optimization og mobile polish',
    ],
  },
];

export interface Service {
  id: string;
  icon: string;
  color: string;
  title: string;
  outcome: string; // Outcome-focused line
  bullets: string[];
  priceHint: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 'digital-ads',
    icon: 'Target',
    color: '#8E6EFF',
    title: 'Stafrænar auglýsingar',
    outcome: 'Auglýsingar sem skila fleiri viðskiptum og fyrirspurnum, ekki bara smelli.',
    bullets: [
      'Auglýsingar á Meta og Google sem ná til rétta fólksins.',
      'Dagleg eftirfylgni og fínstilling svo peningurinn nýtist betur.',
      'Skýr yfirsýn yfir hvað auglýsingafjármagnið er að skila.',
    ],
    priceHint: 'Frá 129 þúsund krónur á mánuði',
    link: '/auglysingar',
  },
  {
    id: 'seo',
    icon: 'Search',
    color: '#00FFC2',
    title: 'Leitarvélabestun',
    outcome: 'Betri sæti í Google sem skila fleiri viðskiptavinum með tímanum.',
    bullets: [
      'Tæknilegt SEO og efni sem fólk er í alvöru að leita að.',
      'Backlinks sem byggir upp trúverðugleika hjá Google.',
      'Raunhæfur tímarammi og plan sem er útskýrt frá byrjun.',
    ],
    priceHint: 'Frá 129 þúsund krónur á mánuði',
    link: '/leitarvelabestun',
  },
  {
    id: 'web-design',
    icon: 'Monitor',
    color: '#00B8FF',
    title: 'Vefsíðugerð',
    outcome: 'Vefir og lendingarsíður sem breyta gestum í viðskiptavini.',
    bullets: [
      'Hannað með viðskipti í huga, ekki bara fallegt útlit.',
      'Virkar vel í síma, spjaldtölvu og tölvu.',
      'Hleðst hratt svo fólk gefst ekki upp á leiðinni.',
    ],
    priceHint: 'Frá 139 þúsund krónur',
    link: '/vefsidugerd',
  },
];

export interface WhyPoint {
  icon: string;
  title: string;
  description: string;
}

// Simplified to 4-6 core differentiators
export const whyPoints: WhyPoint[] = [
  {
    icon: 'MessageSquare',
    title: 'Skýrt mál',
    description: 'Við útskýrum tölurnar þannig að þú skilur þær og getir tekið ákvarðanir út frá þeim. Ekki endalausar glærur sem enginn fer í gegn.',
  },
  {
    icon: 'Shield',
    title: 'Engin langtímabinding',
    description: 'Þú ert hjá okkur af því það borgar sig, ekki af því þú festist í samningi. Uppsagnarfrestur er þrjátíu dagar.',
  },
  {
    icon: 'Database',
    title: 'Þú átt gögnin',
    description: 'Auglýsingareikningar, mælaborð og vefurinn sjálfur eru á þínu nafni. Við setjum allt upp þannig að þú eigir auðvelt með að taka yfir eða skipta um aðila ef þú vilt það síðar.',
  },
  {
    icon: 'BarChart3',
    title: 'Árangur í fyrirrúmi',
    description: 'Við byrjum á því að skilja hvað skiptir þig mestu máli, til dæmis bókanir, fyrirspurnir eða sala, og stillum allt upp í kringum það.',
  },
  {
    icon: 'Users',
    title: 'Reynsla af íslenskum markaði',
    description: 'Við vinnum með ferðaþjónustu, þjónustufyrirtækjum, netverslunum og klíníkum um allt land og vitum hvað virkar hér heima.',
  },
  {
    icon: 'Zap',
    title: 'Stutt í okkur',
    description: 'Þú talar beint við fólk sem er að vinna í verkefninu, ekki gegnum þrjú lög af account managerum. Við svörum fljótt og höldum hlutunum einföldum.',
  },
];

export interface ClientLogo {
  name: string;
  logo: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Fara', logo: 'https://cdn.prod.website-files.com/683991f975f058409fb2cce3/6853effae6883208c24ed0af_Fara_logo.svg' },
  { name: 'Coach Clean', logo: 'https://coachclean.is/wp-content/uploads/2024/06/Coach-Clean-logo.png' },
  { name: 'Málningarvörur', logo: 'https://www.malningarvorur.is/wp-content/uploads/2021/02/Malningarvorur_Logo.png' },
  { name: 'Hotel Ranga', logo: 'https://cdn-hpiaf.nitrocdn.com/oLvgWhjfpxBPzQJDFPflFBYOrOPphCDJ/assets/images/optimized/rev-daf578c/hotelranga.is/wp-content/uploads/2021/01/Fyrirflugvel_Logo_hvitt21.png' },
  { name: 'Iceland Premium Tours', logo: 'https://res.cloudinary.com/getlocal/image/upload/w_600,h_112,f_auto,c_lfill/v1681211890/org/j0c4DedjpdXnGfdNxj1n/vlgdjlpstqmrcl31nwyw.png' },
  { name: 'Brand', logo: 'https://lirp.cdn-website.com/5aa23f2f/dms3rep/multi/opt/BRAND_logo_ny-tt_Brand_Logo-258w.png' },
  { name: 'Viking Women', logo: 'https://static.wixstatic.com/media/a008a8_2c304b3988dc44e0b0f0c973b3a80496~mv2.png/v1/fill/w_316,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VikingWomen_Logo-White.png' },
  { name: 'Asgard Beyond', logo: 'https://scontent.frkv3-1.fna.fbcdn.net/v/t39.30808-6/272052398_342862447840894_1748556316177439808_n.png?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AvEsq0uBZ0UQ7kNvgH7Z6Ay&_nc_zt=23&_nc_ht=scontent.frkv3-1.fna&_nc_gid=ANYf2kXMxT7hS5lKE9QLcMV&oh=00_AYAgqHNTQTSoQMKBD3dEPzKg7nv0eQlUxssPzE9K2uDjxQ&oe=67997ED5' },
  { name: 'Laugin', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQ2UXwDlcIwaac_s2y6A9r4uOaGOk4cei4g&s' },
  { name: 'Aspire', logo: 'https://aspire.is/wp-content/uploads/2024/01/aspire-logo-vect.svg' },
  { name: 'Arctic Exposure', logo: 'https://arcticexposure.is/wp-content/uploads/Arctic_Exposure_logo_light.png' },
  { name: 'Verdi Travel', logo: 'https://www.verditravel.is/static/themes/main/images/logo.svg?v=51ad085240' },
  { name: 'Iceland Private Tours', logo: 'https://icelandprivatetours.is/wp-content/uploads/2025/03/logo2.png' },
  { name: 'Nonni Travel', logo: 'https://nonnitravel.is/wp-content/uploads/2018/07/logo-2.png' },
  { name: 'Kolumbus', logo: 'https://kolumbus.is/wp-content/uploads/2024/01/Kolumbus-1114px.png' },
  { name: 'Iceland Discovery', logo: 'https://icelanddiscovery.is/wp-content/uploads/2022/12/logo-new-new.webp' },
  { name: 'Bakkaflot', logo: 'https://bakkaflot.is/wp-content/uploads/2024/04/bakkaflot_logo.png' },
  { name: 'Infoguard', logo: 'https://infoguard.is/wp-content/uploads/2025/09/cropped-cropped-Black-and-Blue-Business-Consulting-Logo-1.png' },
  { name: 'Eik Fasteignafélag', logo: 'https://www.moneycontroller.co.uk/upload/aziende/eik-fasteignaflag-hf_20210414132804.png' },
  { name: 'Kompani', logo: 'https://kompani.is/wp-content/uploads/2025/09/komp.png.webp' },
  { name: 'Reykjavik Erupts', logo: 'https://reykjavikerupts.is/wp-content/uploads/2024/09/logo.svg' },
  { name: 'Tannlind', logo: 'https://tannlind.is/wp-content/themes/tannlind/assets/img/tannlind-logo.svg' },
  { name: 'Brosandi', logo: 'https://cdn.prod.website-files.com/5fe86bb1d5862739178334af/620916b4460a08561b453680_Asset%201.svg' },
  { name: 'Tannlækningar', logo: 'https://cdn.vectorstock.com/i/1000v/62/25/dental-care-icon-tooth-symbol-vector-24016225.jpg' },
  { name: 'Kringlubros', logo: 'https://kringlubros.is/wp-content/uploads/2020/03/60657-1472482903.png' },
  { name: 'Tennur', logo: 'https://www.tennur.is/wp-content/uploads/2019/01/logo-vefur.png' },
  { name: 'Delta', logo: 'https://i0.wp.com/www.delta.is/wp-content/uploads/2023/06/cropped-277753649_446948463898958_5870880275585279403_n.jpg?fit=512%2C512&ssl=1' },
  { name: 'Rettur', logo: 'https://rettur.is/wp-content/uploads/2014/04/rettur-logo-hvitt1.png' },
  { name: 'Smart Socks', logo: 'https://smartsocks.is/wp-content/uploads/2024/12/SS-long@4x-8.png' },
  { name: 'Zetor', logo: 'https://static.wixstatic.com/media/6b0bd2_2eb5e4d3b8d64f3fb89398d4e0b3b68f~mv2.png/v1/fill/w_560,h_184,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ZETOR.png' },
];
