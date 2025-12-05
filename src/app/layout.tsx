import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://55.is'),
  title: {
    default: '55.is | Stafræn vef-og markaðsstofa í Reykjavík',
    template: '%s | 55.is',
  },
  description:
    '55.is er íslensk stafræn markaðsstofa sem sérhæfir sig í vefsíðugerð, leitarvélabestun og árangursdrifnum auglýsingum.',
  openGraph: {
    type: 'website',
    locale: 'is_IS',
    url: 'https://55.is',
    siteName: '55.is',
    title: '55.is | Stafræn vef-og markaðsstofa í Reykjavík',
    description:
      '55.is er íslensk stafræn markaðsstofa sem sérhæfir sig í vefsíðugerð, leitarvélabestun og árangursdrifnum auglýsingum.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '55.is | Stafræn vef-og markaðsstofa í Reykjavík',
    description:
      '55.is er íslensk stafræn markaðsstofa sem sérhæfir sig í vefsíðugerð, leitarvélabestun og árangursdrifnum auglýsingum.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="is">
      <body className={inter.variable}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
