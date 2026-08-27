/**
 * @fileoverview Theme context provider for Light and Dark modes.
 * Synchronizes HTML `data-theme` attribute, `dark` class, and localStorage.
 * @author Elham Rivaz & AI Studio Team
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types';

/** Interface defining theme context state and control functions. */
export interface ThemeContextType {
  /** Active theme mode ('light' | 'dark'). */
  theme: ThemeMode;
  /** Toggles between light and dark mode. */
  toggleTheme: () => void;
  /** Sets a specific theme mode. */
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'elham_portfolio_theme';

/**
 * Context provider managing application color theme.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage write errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to consume the theme context.
 *
 * @throws Error if used outside of a `ThemeProvider`.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

