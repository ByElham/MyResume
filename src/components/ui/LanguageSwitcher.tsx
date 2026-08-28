import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { supportedLanguages } from '../../i18n';
import { LanguageCode } from '../../types';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="radiogroup"
      aria-label={t.accessibility.langToggle}
      className={`relative inline-flex items-center p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl ${className}`}
    >
      {supportedLanguages.map((lang) => {
        const isActive = language === lang.code;

        return (
          <motion.button
            key={lang.code}
            role="radio"
            aria-checked={isActive}
            aria-label={`${lang.name} (${lang.label})`}
            onClick={() => setLanguage(lang.code as LanguageCode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className={`relative z-10 px-2.5 py-1 text-[11px] font-mono font-bold transition-colors duration-200 rounded-full cursor-pointer select-none ${
              isActive
                ? 'text-white'
                : 'text-neutral-800 hover:text-black dark:text-white/60 dark:hover:text-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-lang-indicator"
                className="absolute inset-0 bg-indigo-500 rounded-full shadow-md shadow-indigo-500/25"
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 32,
                }}
              />
            )}
            <span className="relative z-10">{lang.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};
