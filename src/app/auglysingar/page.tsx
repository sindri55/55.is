import type { Metadata } from 'next';
import { DigitalAdvertisingCopy } from '@/components/DigitalAdvertisingCopy';
import { buildServiceJsonLd, SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/auglysingar`;

export const metadata: Metadata = {
  title: 'Stafrænar auglýsingar | 55.is - Google & samfélagsmiðlar',
  description:
    'Við byggjum árangursdrifnar Google, Meta og LinkedIn herferðir með gagnadrifnu eftirfylgni fyrir íslensk fyrirtæki.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Stafrænar auglýsingar | 55.is',
    description:
      'Google Ads, Meta Ads og LinkedIn herferðir með gagnadrifinni hagræðingu.',
  },
};

export default function AuglysingarPage() {
  const jsonLd = buildServiceJsonLd({
    name: 'Stafrænar auglýsingar',
    description:
      'Gagnadrifnar auglýsingar á Google, Meta og LinkedIn fyrir íslensk fyrirtæki.',
    url: PAGE_URL,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalAdvertisingCopy />
    </>
  );
}
