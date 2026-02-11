'use client';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import frMessages from '../messages/fr.json';
import enMessages from '../messages/en.json';

type Locale = 'fr' | 'en';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

const messagesByLocale: Record<Locale, Record<string, unknown>> = {
  fr: frMessages as Record<string, unknown>,
  en: enMessages as Record<string, unknown>,
};

export default function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  const languageValue = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  const messages = messagesByLocale[locale as Locale];

  return (
    <LanguageContext.Provider value={languageValue}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

