import type { Metadata } from 'next';
import { VerdskraCopy } from '@/components/VerdskraCopy';
import { SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/verdskra`;

export const metadata: Metadata = {
  title: 'Verðskrá | 55.is - Pakkaðar lausnir',
  description:
    'Skýr verðskrá fyrir vefsíðugerð, SEO þjónustu og stafrænar auglýsingar. Engin falin gjöld.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Verðskrá | 55.is',
    description:
      'Veldu þjónustupakka sem hentar fyrirtækinu þínu og sjáðu hvað fylgir með.',
  },
};

export default function VerdskraPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Verðskrá 55.is',
    url: PAGE_URL,
    itemListElement: [
      { '@type': 'Offer', name: 'Vefsíðugerð', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Leitarvélabestun', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Stafrænar auglýsingar', availability: 'https://schema.org/InStock' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerdskraCopy />
    </>
  );
}
