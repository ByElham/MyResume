/**
 * @fileoverview Language and localization context provider.
 * Manages active language state, direction (LTR/RTL), and persistent storage.
 * @author Elham Rivaz & AI Studio Team
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LanguageCode } from '../types';
import { getTranslation, isRTL, TranslationType } from '../i18n';

/** Interface defining language context state and dispatcher functions. */
export interface LanguageContextType {
  /** Currently active language code ('en' | 'fa' | 'de'). */
  language: LanguageCode;
  /** Sets active language and synchronizes HTML attributes & localStorage. */
  setLanguage: (lang: LanguageCode) => void;
  /** Whether active language uses Right-to-Left writing direction. */
  isRtl: boolean;
  /** Resolved translation dictionary for active language. */
  t: TranslationType;
  /** HTML `dir` attribute value ('ltr' | 'rtl'). */
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_STORAGE_KEY = 'elham_portfolio_lang';

/**
 * Context provider for internationalization and document direction.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANG_STORAGE_KEY) as LanguageCode | null;
      if (stored === 'en' || stored === 'fa' || stored === 'de') {
        return stored;
      }
    }
    return 'en'; // default to English
  });

  const isRtl = isRTL(language);
  const dir = isRtl ? 'rtl' : 'ltr';
  const t = getTranslation(language);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', dir);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // ignore storage write errors
    }
  }, [language, dir]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to consume the language context.
 *
 * @throws Error if used outside of a `LanguageProvider`.
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

