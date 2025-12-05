'use client';

import { ReactNode } from 'react';
import { ParticleSystem } from './ParticleSystem';
import { SmartHeader } from './SmartHeader';
import { ModernFooter } from './ModernFooter';
import { ContactSheet } from './ContactSheet';
import { ContactSheetProvider } from '@/lib/contact-sheet-context';
import { Toaster } from './ui/sonner';
import { COLORS } from '@/lib/constants';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <ContactSheetProvider>
      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{
          background: COLORS.background.primary,
          color: COLORS.text.primary,
        }}
      >
        <ParticleSystem />
        <SmartHeader />
        <main className="relative z-10">{children}</main>
        <ModernFooter />
        <ContactSheet />
        <Toaster />
      </div>
    </ContactSheetProvider>
  );
}
