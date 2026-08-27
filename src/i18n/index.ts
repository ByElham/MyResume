/**
 * @fileoverview Internationalization (i18n) registry and localization utility functions.
 * Maps language codes to dictionaries and determines text directionality.
 * @author Elham Rivaz & AI Studio Team
 */

import { en } from './en';
import { fa } from './fa';
import { de } from './de';
import { LanguageCode } from '../types';

/** Dictionary mapping all supported language locales to their translation trees. */
export const translations = {
  en,
  fa,
  de,
};

/** Deep type definition based on the master English translation schema. */
export type TranslationType = typeof en;

/**
 * Retrieves the translation dictionary for a given language code.
 * Falls back to English if the requested language dictionary is unavailable.
 *
 * @param lang Active language locale code.
 * @return Resolved translation dictionary object.
 */
export function getTranslation(lang: LanguageCode): TranslationType {
  return (translations[lang] as TranslationType) || translations.en;
}

/**
 * Determines whether a given language code requires a Right-to-Left (RTL) layout.
 *
 * @param lang Active language locale code.
 * @return True if language is Persian (fa), otherwise false.
 */
export function isRTL(lang: LanguageCode): boolean {
  return lang === 'fa';
}

/** Metadata descriptors for all supported languages. */
export interface SupportedLanguageItem {
  /** Unique locale identifier code. */
  code: LanguageCode;
  /** Short uppercase 2-letter badge label (e.g. 'EN'). */
  label: string;
  /** Full native language name (e.g. 'English', 'فارسی', 'Deutsch'). */
  name: string;
}

/** Array of all supported languages for selector controls and navigation. */
export const supportedLanguages: SupportedLanguageItem[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fa', label: 'FA', name: 'فارسی' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

