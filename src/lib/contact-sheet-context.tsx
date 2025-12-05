'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ContactSheetContext = 
  | 'general'
  | 'markadsuttekt'
  | 'verdskra'
  | 'ads'
  | 'seo'
  | 'vefsidugerd';

interface ContactSheetState {
  isOpen: boolean;
  context: ContactSheetContext;
  openSheet: (context: ContactSheetContext) => void;
  closeSheet: () => void;
}

const ContactSheetContext = createContext<ContactSheetState | undefined>(undefined);

export function ContactSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ContactSheetContext>('general');

  const openSheet = (newContext: ContactSheetContext) => {
    setContext(newContext);
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <ContactSheetContext.Provider value={{ isOpen, context, openSheet, closeSheet }}>
      {children}
    </ContactSheetContext.Provider>
  );
}

export function useContactSheet() {
  const context = useContext(ContactSheetContext);
  if (!context) {
    throw new Error('useContactSheet must be used within ContactSheetProvider');
  }
  return context;
}
