import React from 'react';
import { motion } from 'motion/react';

interface SkillPillProps {
  skill: string;
  category?: string;
  className?: string;
  variant?: 'default' | 'accent' | 'subtle';
}

export const SkillPill: React.FC<SkillPillProps> = ({
  skill,
  className = '',
  variant = 'default',
}) => {
  const variantStyles = {
    default:
      'bg-black/[0.05] dark:bg-white/5 text-[#0F1115] dark:text-indigo-300 border-black/15 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-white/20 hover:bg-black/[0.08] dark:hover:bg-white/10 backdrop-blur-md font-semibold',
    accent:
      'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20 backdrop-blur-md font-bold',
    subtle:
      'bg-black/[0.04] dark:bg-white/[0.03] text-[#1A1A1E] dark:text-white/70 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 backdrop-blur-sm font-medium',
  };

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-full border transition-colors duration-150 select-none ${variantStyles[variant]} ${className}`}
    >
      {skill}
    </motion.span>
  );
};
