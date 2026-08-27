/**
 * @fileoverview Sakura Falling Petals context provider.
 * Controls the Japanese cherry blossom canvas animation overlay.
 * @author Elham Rivaz & AI Studio Team
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

/** Interface defining Sakura particle animation state and toggles. */
export interface SakuraContextType {
  /** Whether the falling sakura petals animation is active. */
  sakuraMode: boolean;
  /** Toggles the sakura petals animation on/off. */
  toggleSakuraMode: () => void;
  /** Explicitly enables or disables sakura petals. */
  setSakuraMode: (enabled: boolean) => void;
}

const SakuraContext = createContext<SakuraContextType | undefined>(undefined);

const SAKURA_STORAGE_KEY = 'elham_portfolio_sakura';

/**
 * Context provider managing Sakura petals overlay animation.
 */
export const SakuraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sakuraMode, setSakuraModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(SAKURA_STORAGE_KEY);
      return stored === 'true';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (sakuraMode) {
      root.classList.add('sakura-mode');
      root.setAttribute('data-sakura', 'true');
    } else {
      root.classList.remove('sakura-mode');
      root.removeAttribute('data-sakura');
    }
    try {
      localStorage.setItem(SAKURA_STORAGE_KEY, String(sakuraMode));
    } catch {
      // ignore storage errors
    }
  }, [sakuraMode]);

  const toggleSakuraMode = () => {
    setSakuraModeState((prev) => !prev);
  };

  const setSakuraMode = (enabled: boolean) => {
    setSakuraModeState(enabled);
  };

  return (
    <SakuraContext.Provider value={{ sakuraMode, toggleSakuraMode, setSakuraMode }}>
      {children}
    </SakuraContext.Provider>
  );
};

/**
 * Custom hook to consume the Sakura context.
 *
 * @throws Error if used outside of a `SakuraProvider`.
 */
export const useSakura = (): SakuraContextType => {
  const context = useContext(SakuraContext);
  if (!context) {
    throw new Error('useSakura must be used within a SakuraProvider');
  }
  return context;
};

