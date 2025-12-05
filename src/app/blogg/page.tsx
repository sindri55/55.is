import type { Metadata } from 'next';
import { BlogCopy } from '@/components/BlogCopy';
import { SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/blogg`;

export const metadata: Metadata = {
  title: 'Blogg | 55.is - Insights & fréttir',
  description:
    'Fróðleikur, leiðbeiningar og nýjustu fréttir um SEO, vefsíðugerð og stafrænar auglýsingar á Íslandi.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Blogg 55.is',
    description:
      'Lesið leiðbeiningar um stafræna markaðssetningu og nýjustu strauma á Íslandi.',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '55.is Blogg',
    url: PAGE_URL,
    description:
      'Blogg frá 55.is sem fjallar um leitarvélabestun, vefsíðugerð og auglýsingar.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogCopy />
    </>
  );
}
