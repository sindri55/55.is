import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Skilmálar og skilyrði',
  description: 'Skilmálar 55 Markaðsstofu fyrir þjónustu og notkun vefs.',
};

const termsSections = [
  {
    title: '1. Upplýsingar um félagið',
    body: [
      '55 Markaðsstofa · kt. 571224-3210 · Hafnarstræti 93-95, 600 Akureyri · 55@55.is · 660-5000',
      'Gildir frá 5. desember 2025.',
    ],
  },
  {
    title: '2. Almenn ákvæði',
    body: [
      'Með því að nota 55.is, hafa samband eða kaupa þjónustu samþykkir þú þessa skilmála. Skilmálar geta breyst án fyrirvara og ný útgáfa birtist á 55.is.',
    ],
  },
  {
    title: '3. Verð og gjöld',
    list: [
      'Öll verð eru í ISK nema annað komi fram.',
      'Verð geta breyst án fyrirvara.',
      'Virðisaukaskattur er innifalinn nema annað sé tekið fram.',
    ],
  },
  {
    title: '4. Greiðslur og öryggi',
    list: [
      'Greiðslur fara fram í gegnum öruggar greiðslulausnir.',
      'SSL dulkóðun tryggir örugga miðlun upplýsinga.',
      'Við geymum ekki kortaupplýsingar á vefþjónum.',
    ],
  },
  {
    title: '5. Áskriftir (ef við á)',
    list: [
      'Áskriftargjöld eru gjaldfærð mánaðarlega þar til áskrift er sagt upp.',
      'Uppsögn tekur gildi í lok núverandi greiðslutímabils.',
      'Aðgangur sem áskrift veitir lokast í lok tímabilsins.',
      'Hægt er að senda uppsögn á 55@55.is.',
    ],
  },
  {
    title: '6. Afhending þjónustu',
    body: [
      'Þjónusta er afhent samkvæmt samningi, tilboði eða lýsingu á vef/í tölvupósti. Tímalína og umfang eru skilgreind í hverju verkefni.',
    ],
  },
  {
    title: '7. Endurgreiðslur og afpantanir',
    list: [
      'Endurgreiðsla er almennt ekki veitt eftir að vinna hefst nema annað hafi verið samið.',
      'Áskriftir eru ekki endurgreiddar fyrir þegar greidd tímabil.',
    ],
  },
  {
    title: '8. Ábyrgð og takmörkun',
    body: [
      'Við leggjum áherslu á vandaða þjónustu en ábyrgjumst ekki tiltekin viðskiptaleg úrslit nema slíkt sé sérstaklega samið skriflega.',
    ],
  },
  {
    title: '9. Persónuvernd',
    body: [
      'Meðferð persónuupplýsinga er útskýrð í Persónuverndarstefnu 55.is. Vinsamlegast kynntu þér hana áður en þú sendir inn upplýsingar.',
    ],
  },
  {
    title: '10. Breytingar á skilmálum',
    body: [
      'Við uppfærum skilmála þegar þörf er á. Nýjasta útgáfa er alltaf í gildi og dagsetning uppfærslu kemur fram efst á síðunni.',
    ],
  },
  {
    title: '11. Varnarþing og lög',
    body: [
      'Skilmálar þessir lúta íslenskum lögum. Rísi ágreiningur skal hann höfðaður fyrir íslenskum dómstólum.',
    ],
  },
];

export default function SkilmalarPage() {
  return (
    <div
      className="relative px-6 py-24 sm:py-32"
      style={{ background: COLORS.background.primary, color: COLORS.text.primary }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4 text-center sm:text-left">
          <span
            className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              background: `${COLORS.accent.purple}10`,
              border: `1px solid ${COLORS.accent.purple}40`,
              color: COLORS.accent.purple,
            }}
          >
            Skilmálar
          </span>
          <div>
            <p className="text-sm text-white/60">Yfirfarið 5. desember 2025</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl" style={{ lineHeight: 1.1 }}>
              Skilmálar og skilyrði 55.is
            </h1>
          </div>
        </header>

        <div className="space-y-8">
          {termsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border p-6 sm:p-8"
              style={{
                background: COLORS.background.secondary,
                borderColor: COLORS.border.default,
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base mb-3 text-white/80">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2 text-white/80 text-sm sm:text-base">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8E6EFF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
