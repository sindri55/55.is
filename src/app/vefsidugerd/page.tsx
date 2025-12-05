import type { Metadata } from 'next';
import { VefsidugerdCopy } from '@/components/VefsidugerdCopy';
import { buildServiceJsonLd, SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/vefsidugerd`;

export const metadata: Metadata = {
  title: 'Vefsíðugerð | 55.is - Hraðvirk vefhönnun',
  description:
    'Ódýr og hröð vefsíðugerð með áherslu á hraða, SEO og umbreytingar. Fyrstu niðurstöður á 7 dögum.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Vefsíðugerð | 55.is',
    description:
      'Hraðvirk vefhönnun sem skilar árangri með SEO og hraðavottuðum lausnum.',
  },
};

export default function VefsidugerdPage() {
  const jsonLd = buildServiceJsonLd({
    name: 'Vefsíðugerð',
    description:
      'Hraðvirk vefsíðugerð með áherslu á SEO, hraða og umbreytingar.',
    url: PAGE_URL,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VefsidugerdCopy />
    </>
  );
}
