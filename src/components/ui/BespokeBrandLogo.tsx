import React from 'react';
import { motion } from 'motion/react';
import { ERMonogramEmblem } from './ERMonogramEmblem';
import { SwissFlag } from './SwissFlag';

export interface BespokeBrandLogoProps {
  className?: string;
  isCompact?: boolean;
}

export const BespokeBrandLogo: React.FC<BespokeBrandLogoProps> = ({
  className = '',
  isCompact = false,
}) => {
  return (
    <div
      className={`group/brand flex items-center gap-2.5 sm:gap-3 select-none cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Avant-Garde Holographic Hex/Orb ER Emblem */}
      <ERMonogramEmblem size="sm" glow={true} />

      {/* Brand Typographic Identity */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-black text-sm sm:text-base tracking-tight text-[#0F1115] dark:text-white leading-none group-hover/brand:text-indigo-600 dark:group-hover/brand:text-indigo-400 transition-colors">
            Elham Rivaz
          </span>
          <SwissFlag size="sm" className="shrink-0" />
        </div>

        {/* Monospaced Sub-label with Pulsing Research Beacon */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-[0_0_6px_#10b981]" />
          <span className="font-mono text-[9px] sm:text-[10px] text-[#272A30] dark:text-white/65 font-bold tracking-wider uppercase leading-none">
            AI/ML Researcher
          </span>
        </div>
      </div>
    </div>
  );
};

