import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ExperienceEntry } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SkillPill } from './SkillPill';

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  entry,
  index,
  isLast = false,
}) => {
  const { t, isRtl } = useLanguage();

  const roleData = (t.experience.roles as any)[entry.id];
  const role = roleData?.role || entry.id;
  const org = roleData?.organization || '';
  const period = roleData?.period || '';
  const location = roleData?.location || '';
  const bullets = roleData?.bullets || [];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isRtl ? 20 : -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-6 sm:pl-8 rtl:pl-0 rtl:pr-6 rtl:sm:pr-8 pb-10 group"
    >
      {/* Vertical Connecting Line */}
      {!isLast && (
        <div className="absolute top-3 left-2.5 rtl:left-auto rtl:right-2.5 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 transition-colors group-hover:bg-indigo-500/40" />
      )}

      {/* Timeline Node Icon / Dot */}
      <div className="absolute top-1.5 left-0 rtl:left-auto rtl:right-0 w-5 h-5 rounded-full bg-white dark:bg-neutral-900 border-2 border-indigo-500 flex items-center justify-center shadow-sm z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      </div>

      {/* Card Content */}
      <div className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold font-display text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {role}
            </h3>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400 mt-0.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{org}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-[var(--text-tertiary)]">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
              <Calendar className="w-3 h-3" />
              {period}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4 text-sm text-[var(--text-secondary)] font-normal">
          {bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start gap-2.5 leading-relaxed">
              <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        {entry.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
            {entry.techStack.map((tech) => (
              <SkillPill key={tech} skill={tech} variant="subtle" />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
