import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useLanguage } from '../../context/LanguageContext';

interface AnimatedCounterProps {
  baseline?: number;
  target?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  baseline = 58.57,
  target = 97.86,
  className = '',
}) => {
  const { t, isRtl } = useLanguage();
  const countUp = useCountUp({
    start: baseline,
    end: target,
    duration: 1800,
    decimals: 2,
  });

  const delta = (target - baseline).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel p-4 sm:p-5 rounded-2xl relative overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.04] to-transparent ${className}`}
    >
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <TrendingUp className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {t.hero.statLabel}
            </span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm">
            {t.hero.statSubtext}
          </p>
        </div>

        {/* Counter Display & Progress */}
        <div className={`flex items-baseline gap-3 shrink-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="text-right">
            <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {countUp.formatted}%
            </span>
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              +{delta}%
            </span>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
              {t.hero.statBaseline}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar Visualization */}
      <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex flex-col gap-1.5">
        <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
          {/* Baseline indicator */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-neutral-400/40 dark:bg-neutral-600/40 rounded-full"
            style={{ width: `${baseline}%` }}
            title={`Baseline: ${baseline}%`}
          />
          {/* Optimized filled bar */}
          <motion.div
            initial={{ width: `${baseline}%` }}
            whileInView={{ width: `${target}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 rounded-full shadow-sm"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            {t.hero.statBaseline}
          </span>
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            {t.hero.statAchieved}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
