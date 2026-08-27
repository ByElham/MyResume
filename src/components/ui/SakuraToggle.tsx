import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flower2 } from 'lucide-react';
import { useSakura } from '../../context/SakuraContext';
import { useLanguage } from '../../context/LanguageContext';

export const SakuraToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { sakuraMode, toggleSakuraMode } = useSakura();
  const { language } = useLanguage();
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const tooltipText = {
    en: sakuraMode ? 'Sakura Mode: ON' : 'Sakura Blossom Mode',
    fa: sakuraMode ? 'تم ساکورا: روشن' : 'جلوه شکوفه‌های ساکورا',
    de: sakuraMode ? 'Sakura-Modus: AN' : 'Sakura-Blütenmodus',
  }[language] || 'Sakura Mode';

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => [...prev.slice(-1), newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 450);
  };

  return (
    <motion.button
      onClick={toggleSakuraMode}
      onPointerDown={handlePointerDown}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      aria-label={tooltipText}
      title={tooltipText}
      className={`relative p-2 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-xl overflow-hidden ${
        sakuraMode
          ? 'bg-rose-500/15 border border-rose-400/40 text-rose-600 dark:text-rose-300 shadow-sm shadow-rose-500/20'
          : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 hover:text-rose-500 dark:text-white/70 dark:hover:text-rose-300 hover:bg-rose-500/5'
      } ${className}`}
    >
      {/* Ripple */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.45 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 114, 182, 0.4)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Sakura Flower SVG Icon with Petal Pulse */}
      <div className="relative flex items-center justify-center">
        <motion.svg
          animate={
            sakuraMode
              ? { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }
              : { rotate: 0, scale: 1 }
          }
          transition={
            sakuraMode
              ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3 }
          }
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 5-Petal Cherry Blossom Path */}
          <g
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={sakuraMode ? 'currentColor' : 'none'}
            fillOpacity={sakuraMode ? 0.35 : 0}
          >
            <path d="M12 7.5C10.5 4 13.5 2 12 2C10.5 2 13.5 4 12 7.5Z" />
            <path d="M15.5 10C19 8.5 21 11.5 21 10C21 8.5 19 11.5 15.5 10Z" />
            <path d="M14.5 14.5C17 17.5 14.5 20.5 15 20C15.5 19.5 17 17.5 14.5 14.5Z" />
            <path d="M9.5 14.5C7 17.5 9.5 20.5 9 20C8.5 19.5 7 17.5 9.5 14.5Z" />
            <path d="M8.5 10C5 8.5 3 11.5 3 10C3 8.5 5 11.5 8.5 10Z" />
            {/* Center pistil */}
            <circle cx="12" cy="12" r="2.2" fill={sakuraMode ? '#f43f5e' : 'currentColor'} stroke="none" />
          </g>
        </motion.svg>

        {/* Tiny Active Sparkle */}
        {sakuraMode && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-neutral-900"
          />
        )}
      </div>
    </motion.button>
  );
};
