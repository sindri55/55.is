import type { Metadata } from 'next';
import { UmOkkurCopy } from '@/components/UmOkkurCopy';
import { SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/um-okkur`;

export const metadata: Metadata = {
  title: 'Um okkur | 55.is - Stafræn markaðsstofa',
  description:
    'Við erum íslenskt teymi sem byggir stafrænar lausnir með áherslu á hraða, gagnadrifna ákvarðanatöku og mælianlegan árangur.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Um 55.is',
    description:
      'Kynntu þér fólkið og ferlana sem keyra vefsíðugerð, SEO og auglýsingaþjónustu okkar.',
  },
};

export default function UmOkkurPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '55.is',
    url: PAGE_URL,
    sameAs: ['https://www.facebook.com', 'https://www.linkedin.com'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IS',
      addressLocality: 'Reykjavík',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UmOkkurCopy />
    </>
  );
}
