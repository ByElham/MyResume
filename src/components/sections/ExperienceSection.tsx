import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experience';
import { TimelineItem } from '../ui/TimelineItem';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            {t.experience.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
