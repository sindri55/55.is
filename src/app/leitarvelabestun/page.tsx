import type { Metadata } from 'next';
import { LeitarvelabestunCopy } from '@/components/LeitarvelabestunCopy';
import { buildServiceJsonLd, SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/leitarvelabestun`;

export const metadata: Metadata = {
  title: 'Leitarvélabestun | 55.is - SEO fyrir íslenskan markað',
  description:
    'Leitarvélabestun fyrir íslensk fyrirtæki með áherslu á Local SEO, tæknilega vefi og efni sem tryggir betri sýnileika.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Leitarvélabestun | 55.is',
    description:
      'Full þjónusta í SEO, tækni- og efnisvinnu fyrir íslenskan markað.',
  },
};

export default function LeitarvelabestunPage() {
  const jsonLd = buildServiceJsonLd({
    name: 'Leitarvélabestun',
    description:
      'SEO þjónusta sem nær árangri á íslenskum markaði með tæknilegum úrbótum og efnisgerð.',
    url: PAGE_URL,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LeitarvelabestunCopy />
    </>
  );
}
