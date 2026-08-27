import React from 'react';
import { motion } from 'motion/react';

export interface ERMonogramEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export const ERMonogramEmblem: React.FC<ERMonogramEmblemProps> = ({
  size = 'md',
  className = '',
  glow = true,
}) => {
  const sizeMap = {
    sm: {
      container: 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl',
      inner: 'rounded-[10px]',
      text: 'text-sm sm:text-base',
      period: 'w-1 h-1 mb-0.5',
    },
    md: {
      container: 'w-11 h-11 sm:w-12 sm:h-12 rounded-2xl',
      inner: 'rounded-[14px]',
      text: 'text-base sm:text-lg',
      period: 'w-1.5 h-1.5 mb-1',
    },
    lg: {
      container: 'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl',
      inner: 'rounded-[14px]',
      text: 'text-xl sm:text-2xl',
      period: 'w-1.5 h-1.5 mb-1',
    },
    xl: {
      container: 'w-20 h-20 sm:w-24 sm:h-24 rounded-3xl',
      inner: 'rounded-[22px]',
      text: 'text-3xl sm:text-4xl',
      period: 'w-2 h-2 mb-1.5',
    },
  };

  const cfg = sizeMap[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none group/emblem ${className}`}>
      {/* 1. Ambient Multi-layer Spectral Soft Glow */}
      {glow && (
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.65, 0.95, 0.65],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-indigo-600/40 via-cyan-400/25 to-violet-600/40 blur-md pointer-events-none"
        />
      )}

      {/* 2. Outer Rotating Precision Gradient Border Ring */}
      <div className={`relative ${cfg.container} p-[1.5px] transition-transform duration-300 group-hover/emblem:scale-105`}>
        {/* Animated Conic Border Gradient */}
        <div
          className={`absolute inset-0 ${cfg.container} rounded-[inherit] overflow-hidden`}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-[200%] h-[200%] -top-1/2 -left-1/2 absolute"
            style={{
              background:
                'conic-gradient(from 0deg, #6366f1 0%, #06b6d4 25%, #8b5cf6 50%, #ec4899 75%, #6366f1 100%)',
            }}
          />
        </div>

        {/* 3. Inner Glass/Onyx Core Vault */}
        <div
          className={`relative z-10 w-full h-full ${cfg.inner} bg-[#0D0F14] dark:bg-[#0B0C10] flex items-center justify-center overflow-hidden border border-white/15 dark:border-white/10 shadow-lg`}
        >
          {/* Subtle Cyber Micro Grid Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:5px_5px] pointer-events-none" />

          {/* Dynamic Laser Sheen Streak */}
          <motion.div
            animate={{
              x: ['-130%', '230%'],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none z-20"
          />

          {/* Monogram Typography */}
          <div className="relative z-10 flex items-center justify-center">
            <span
              className={`font-vogue italic font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-100 to-cyan-300 dark:from-white dark:via-indigo-100 dark:to-cyan-200 drop-shadow-[0_2px_10px_rgba(99,102,241,0.6)] ${cfg.text}`}
            >
              ER
            </span>
            {/* Tiny Diamond Precision Dot */}
            <span className={`rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] ml-0.5 mt-auto ${cfg.period}`} />
          </div>

          {/* Clean High-Tech Corner Accent Notches */}
          <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-cyan-400/50 pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-indigo-400/50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
