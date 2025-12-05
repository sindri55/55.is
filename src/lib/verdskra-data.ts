// Verðskrá Page Data Constants

export interface MonthlyPackage {
  id: string;
  title: string;
  price: string;
  forWho: string;
  bullets: string[];
  note: string;
  popular?: boolean;
}

export const monthlyPackages: MonthlyPackage[] = [
  {
    id: 'synileiki',
    title: 'Sýnileiki',
    price: 'Frá 129.900 kr./mán + vsk',
    forWho: 'Fyrir einyrkja og lítil fyrirtæki.',
    bullets: [
      'Fókus á eitt: auglýsingar eða SEO',
      'Grunnstillingar og uppsetning (GA4 og Pixel)',
      '1 til 2 herferðir með einföldu auglýsingaefni eða laga helstu tæknivillur í SEO',
      'Einfaldar breytingar á forsíðu eða lendingarsíðu ef þörf (fyrirsagnir, texti, CTA)',
      'Mánaðarlegt yfirlit og spjall',
    ],
    note: 'Góður grunnpakki til að "ná öllu í lag" og sjá hvort stemmningin er rétt.',
  },
  {
    id: 'voxtur',
    title: 'Vöxtur',
    price: 'Frá 199.900 kr./mán + vsk',
    forWho: 'Lítil og meðalstór fyrirtæki fyrir stöðugan vöxt.',
    bullets: [
      'Meta og Google auglýsingar með reglulegri fínstillingu',
      'SEO lagfæringar og uppbygging sem styður við auglýsingarnar',
      'Nýtt auglýsingaefni mánaðarlega, 3 til 5 útgáfur',
      'Prófanir á texta og auglýsingaefni, með skýrri niðurstöðu',
      'Lendingarsíðu vinna og einfaldar bætingar á flæði',
      'Mælaborð með helstu tölum sem tengjast umferð, fyrirspurnum og sölu',
      '1 fundur á mánuði og plan fyrir næsta mánuð',
    ],
    note: 'Besta verðmæti fyrir flesta sem eru með eitthvað umferð og vilja taka árangurinn upp á næsta stig.',
    popular: true,
  },
  {
    id: 'framurskarandi',
    title: 'Framúrskarandi',
    price: 'Frá 349.900 kr./mán + vsk',
    forWho: 'Fyrir fyrirtæki sem vilja sitt markaðsteymi.',
    bullets: [
      'Auglýsingar á fleiri platforms, valið eftir markhóp og markmiði',
      'Nýtt auglýsingaefni mánaðarlega, 8 til 12 útgáfur',
      'SEO og efni, 2 til 3 efni á mánuði með skýrum áherslum',
      'Heildaryfirferð á mælingum (GA4, GTM, GSC, markmið) og lagfæringar',
      'Lendingarsíður, nýjar eða uppfærðar eftir þörf og forgangi',
      'Fundir annan hvern viku og skýr verkáætlun á milli funda',
      'Stjórnendamælaborð og samskipti í Slack eða Teams',
    ],
    note: 'Hentar best þegar stafrænt markaðsstarf er stór partur af viðskiptaáætlun – ekki bara "smá auglýsingar on the side".',
  },
];

export interface WebProject {
  id: string;
  title: string;
  price: string;
  forWho: string;
  bullets: string[];
  note: string;
}

export const webProjects: WebProject[] = [
  {
    id: 'ai-landing',
    title: 'AI Landing page hraðleið',
    price: 'Frá 450.000–750.000 kr. + vsk',
    forWho: 'Fyrir fyrirtæki sem þurfa eina sterka sölu- eða skráningarsíðu fyrir herferð, nýja þjónustu eða einfalt tilboð.',
    bullets: [
      'Nútímaleg lendingarsíða fyrir tölvu og síma',
      'Hönnun + smíði + grunn SEO + mælingar',
      'Tengingar við greiningarverkfæri og auglýsingar, tilbúið fyrir árangur',
      'Yfirleitt klárt á 1–2 vikum ef efni er tilbúið',
    ],
    note: 'Mjög góð leið til að prófa nýtt tilboð eða testa rás án þess að fara í stóra vefsmíði.',
  },
  {
    id: 'company-web',
    title: 'Company vefur 3–10 síður',
    price: 'Frá 900.000–1.800.000 kr. + vsk',
    forWho: 'Fyrir þjónustufyrirtæki, ferðaþjónustu, klínikur o.fl. sem þurfa almennilegan fyrirtækjavef sem styður auglýsingar og SEO.',
    bullets: [
      '3–10 lykilsíður (forsíða, þjónustur, um okkur, samband o.s.frv.)',
      'Hrein uppsetning sem er auðvelt að uppfæra (t.d. einfalt CMS)',
      'Grunn SEO og góður grunnárangur innbyggður frá byrjun',
      'Mælingar, atburðir og umbreytingamarkmið stillt upp fyrir markaðsstarf',
    ],
    note: 'Sterk miðlausn sem lítur vel út, er hagnýt og vinnur vel með auglýsinga- og SEO-pökkunum.',
  },
  {
    id: 'wordpress-shopify',
    title: 'WordPress / Shopify & stærri lausnir',
    price: 'Frá 1.800.000 kr. + vsk (metið sérstaklega)',
    forWho: 'Fyrir netverslanir og stærri vefi með mikið efni, blogg, fleiri tungumál eða flóknar samþættingar.',
    bullets: [
      'WordPress, Shopify eða annar pallur eftir því sem hentar',
      'Netverslun, blogg, mikið efni og sérsniðin flæði eftir þörf',
      'Samþættingar við greiðslur, birgðir, CRM o.fl.',
      'Árangur og öryggi tekin alvarlega frá fyrsta degi',
    ],
    note: 'Hér þurfum við alltaf stutt spjall og skriflegt umfang áður en við sendum verð – það er of mikið undir til að giska.',
  },
];

export const includedItems = [
  'Stefnumótun og uppsetning',
  'Daglegt eftirlit og fínstilling',
  'Mánaðarlegar prófanir á texta og efni',
  'Skýrslur og fundir eftir áætlun',
  'Grunnráðgjöf um síður og flæði',
  'Aðgangur að mælaborði',
  'Tölvupóstur og Slack/Teams samskipti',
];

export const notIncludedItems = [
  'Auglýsingakostnaður (greitt beint til Meta, Google o.s.frv.)',
  'Fagleg myndataka eða myndbandasgerð',
  'Vefhýsing, lén og utanaðkomandi verkfæri',
  'Tölvupóstkerfi (Mailchimp, Klaviyo)',
  'Greiðslukerfi og birgðasamþættingar',
  'Premium CMS viðbætur og leyfisgjöld',
];

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Af hverju sýnið þið "frá" verð en ekki nákvæm verð?',
    answer:
      'Af því tvö fyrirtæki sem "þurfa vef" eða "vilja SEO" eru sjaldan að biðja um sama hlut. Við sýnum verðbil hér til að þú sjáir nokkurn veginn hvort við erum á sama stigi – svo tölum við stutt saman, fáum mynd af þínu verkefni og sendum skýrt tilboð.',
  },
  {
    id: 2,
    question: 'Er einhver binding á mánaðarlegu pakkunum?',
    answer:
      'Nei, engin langtímabinding. Við vinnum með 30 daga uppsagnarfresti svo við klárum yfirstandandi verkefni og skila snyrtilega frá okkur.',
  },
  {
    id: 3,
    question: 'Get ég byrjað í ódýrari pakka og hoppað svo upp?',
    answer:
      'Já, það er mjög eðlilegt. Margir byrja í Sýnileika til að ná öllu í lag og færa sig svo í Vöxt þegar þeir sjá að árangurinn er að skila.',
  },
  {
    id: 4,
    question: 'Hvað ef vefverkefnið reynist stærra en við héldum?',
    answer:
      'Þá stoppum við, túnum umfangið og uppfærum tilboðið áður en þú situr eftir með óvæntan reikning. Engar óþægilegar uppgjörskvaðningar, takk.',
  },
  {
    id: 5,
    question: 'Get ég bara keypt vef án þess að nota ykkur í Ads/SEO?',
    answer:
      'Já, alveg hægt. En hreinskilnislega – vefur sem fær ekki umferð eða árangursáherslu er meira eins og fallegt PDF í vafra. Flestir sem fá vef hjá okkur enda samt í einhverri minnstu auglýsinga-/SEO-samvinnu til að fá sem mest út úr fjárfestingunni.',
  },
];
