import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCountUp } from '../../hooks/useCountUp';

interface HeroStatBadgeProps {
  icon: React.ReactNode;
  label: string;
  countEnd?: number;
  countDecimals?: number;
  prefix?: string;
  suffix?: string;
  staticValue?: string;
  delayIndex?: number;
  className?: string;
}

export const HeroStatBadge: React.FC<HeroStatBadgeProps> = ({
  icon,
  label,
  countEnd,
  countDecimals = 0,
  prefix = '',
  suffix = '',
  staticValue,
  delayIndex = 0,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [settledBounce, setSettledBounce] = useState(false);

  const countUp = useCountUp({
    start: 0,
    end: countEnd ?? 0,
    duration: 1600,
    decimals: countDecimals,
    delay: 200 + delayIndex * 120,
    startOnMount: countEnd !== undefined,
    onComplete: () => {
      setSettledBounce(true);
      setTimeout(() => setSettledBounce(false), 450);
    },
  });

  // Staggered delay for entrance
  const entranceDelay = 0.15 + delayIndex * 0.09;
  // Staggered delay for icon idle float
  const iconFloatDelay = delayIndex * 0.45;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        opacity: { duration: 0.4, delay: entranceDelay },
        y: { type: 'spring', stiffness: 340, damping: 20, delay: entranceDelay },
        scale: {
          type: 'spring',
          stiffness: 320,
          damping: 18,
          delay: entranceDelay,
        },
      }}
      whileHover={{
        y: -3,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 450, damping: 22 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`glass-panel p-3.5 rounded-xl border border-black/[0.06] dark:border-white/10 relative overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-default select-none ${className}`}
    >
      {/* Subtle Shimmer Sweep on Hover */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={isHovered ? { x: ['-100%', '220%'] } : { x: '-100%' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-white/25 dark:via-white/35 to-transparent skew-x-[-22deg]"
        />
      </div>

      {/* Label and Bobbing Icon */}
      <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-tertiary)] font-mono font-semibold mb-1 uppercase tracking-wider relative z-10">
        <motion.span
          animate={{ y: [0, -2.5, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: iconFloatDelay,
          }}
          className="shrink-0 text-indigo-600 dark:text-indigo-400 motion-reduce:animate-none"
        >
          {icon}
        </motion.span>
        <span className="truncate">{label}</span>
      </div>

      {/* Value with Count-Up & Settle Bounce */}
      <motion.div
        animate={
          settledBounce
            ? { scale: [1, 1.06, 1] }
            : { scale: 1 }
        }
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)] truncate relative z-10"
      >
        {staticValue ? (
          staticValue
        ) : (
          <span>
            {prefix}
            {countUp.formatted}
            {suffix}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
