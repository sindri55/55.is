import type { Metadata } from 'next';
import { AAAPage } from '@/components/AAAPage';

export const metadata: Metadata = {
  title: 'Heimasíða',
  description:
    '55.is hjálpar íslenskum fyrirtækjum að byggja hraðar vefi, SEO árangur og auglýsingaherferðir sem skila tekjum á örfáum dögum.',
  alternates: {
    canonical: 'https://55.is/',
  },
  openGraph: {
    url: 'https://55.is/',
    title: '55.is | Hraðvirk vefsíðugerð og markaðsherferðir',
    description:
      'Fáðu hannaða vefsíðu, leitarvélabestun og árangursmiðaðar auglýsingar sem byggja á íslenskum markaði.',
  },
};

export default function HomePage() {
  return <AAAPage />;
}
