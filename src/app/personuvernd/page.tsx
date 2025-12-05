import type { Metadata } from 'next';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Persónuvernd',
  description: 'Stefna 55 Markaðsstofu um meðferð persónuupplýsinga.',
};

const sections = [
  {
    title: 'Almennt',
    body: [
      '55 Markaðsstofa leggur áherslu á persónuvernd og vinnur upplýsingar í samræmi við persónuverndarlög nr. 90/2018. Við vinnum aðeins með gögn í skýrum tilgangi og með gagnsæjum hætti.',
      'Í þessari stefnu er útskýrt hvaða gögn við vinnum, af hverju og hvernig, auk þess sem réttindi þín eru færð til bókar.',
    ],
  },
  {
    title: 'Hver er ábyrgur?',
    body: [
      'Ábyrgðaraðili vinnslu er 55 Markaðsstofa, kt. 571224-3210, Hafnarstræti 93-95, 600 Akureyri.',
      'Hafa má samband á 55@55.is eða í síma 660-5000 varðandi fyrirspurnir um persónuvernd.',
    ],
  },
  {
    title: 'Hvaða upplýsingum er safnað?',
    listTitle: 'Við vinnum m.a. eftirfarandi upplýsingar:',
    list: [
      'Samskiptaupplýsingar þegar þú fyllir út form eða sendir okkur tölvupóst (nafn, netfang, sími, skilaboð).',
      'Upplýsingar um þjónustu sem þú hefur áhuga á, sé þess óskað.',
      'Tæknilegar upplýsingar við heimsókn á 55.is, s.s. IP-tölu, vafragerð og atvikaskráningu sem þjónar öryggi vefsins.',
    ],
  },
  {
    title: 'Hvernig eru upplýsingarnar notaðar?',
    list: [
      'Til að svara fyrirspurnum og eiga samskipti.',
      'Til að undirbúa eða veita þjónustu og standa við samninga.',
      'Til að mæta lagaskyldum, tryggja rekjanleika atvika og öryggi vefsins.',
    ],
  },
  {
    title: 'Vinnsluaðilar og varðveisla',
    body: [
      'Upplýsingum er aðeins miðlað til vinnsluaðila eins og hýsingaraðila eða tölvupóstkerfa þegar nauðsynlegt er. Við gerum tæknilegar og skipulagslegar ráðstafanir til að tryggja öryggi við miðlun.',
      'Gögnum er ekki haldið lengur en þörf krefur miðað við tilgang vinnslunnar eða lagaskyldur.',
    ],
  },
  {
    title: 'Réttindi einstaklinga',
    list: [
      'Rétt til að fá upplýsingar og afrit af gögnum.',
      'Rétt til leiðréttingar, eyðingar eða takmörkunar vinnslu þegar skilyrði eru uppfyllt.',
      'Rétt til að mótmæla vinnslu eða draga samþykki til baka þegar vinnsla byggir á samþykki.',
      'Rétt til að leggja fram kvörtun til Persónuverndar ef þú telur vinnslu ekki samræmast lögum.',
    ],
  },
];

export default function PersonuverndPage() {
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
              background: `${COLORS.accent.cyan}10`,
              border: `1px solid ${COLORS.accent.cyan}40`,
              color: COLORS.accent.cyan,
            }}
          >
            Persónuvernd
          </span>
          <div>
            <p className="text-sm text-white/60">Útgáfa 1.0 · uppfært 5. desember 2025</p>
            <h1
              className="mt-2 text-4xl font-bold sm:text-5xl"
              style={{ color: COLORS.text.primary, lineHeight: 1.1 }}
            >
              Persónuverndarstefna 55.is
            </h1>
          </div>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
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
                <p key={paragraph} className="text-sm sm:text-base mb-4 text-white/80">
                  {paragraph}
                </p>
              ))}
              {section.listTitle && (
                <p className="text-sm font-semibold text-white/70">{section.listTitle}</p>
              )}
              {section.list && (
                <ul className="mt-3 space-y-2 text-white/80 text-sm sm:text-base">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00FFC2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer
          className="rounded-3xl border p-6 sm:p-8 text-center sm:text-left"
          style={{
            borderColor: `${COLORS.accent.cyan}30`,
            background: `${COLORS.accent.cyan}05`,
          }}
        >
          <p className="text-sm text-white/80">
            Spurningar? Sendu okkur línu á{' '}
            <Link href="mailto:55@55.is" className="text-[#00FFC2] underline">
              55@55.is
            </Link>{' '}
            eða hringdu í 660-5000. Ef þú telur að vinnsla fari ekki fram í samræmi við lög getur þú
            haft samband við Persónuvernd.
          </p>
        </footer>
      </div>
    </div>
  );
}
