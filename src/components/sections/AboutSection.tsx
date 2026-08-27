import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code, Brain, Database, Cpu, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { WindowChrome } from '../ui/WindowChrome';
import { SkillPill } from '../ui/SkillPill';
import { skillCategories } from '../../data/skills';

export const AboutSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 relative">
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
            {t.about.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Summary Window Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <WindowChrome title={t.about.cardTitle} className="h-full">
              <div className="space-y-4 font-editorial text-base sm:text-lg text-[#1A1A1E] dark:text-neutral-300 leading-relaxed font-normal">
                <p>{t.about.summaryP1}</p>
                <p>{t.about.summaryP2}</p>
                <p className="text-[#272A30] dark:text-neutral-400 font-medium">{t.about.summaryP3}</p>
              </div>

              {/* Quick Academic Highlight Box */}
              <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/5 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5">
                  <span className="font-mono text-[11px] text-[#272A30] dark:text-neutral-400 block mb-1 font-semibold">
                    Shiraz University Honors
                  </span>
                  <span className="font-display font-bold text-indigo-700 dark:text-indigo-400 text-sm">
                    GPA 19.20 • Rank #1 / 72+
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5">
                  <span className="font-mono text-[11px] text-[#272A30] dark:text-neutral-400 block mb-1 font-semibold">
                    Language Excellence
                  </span>
                  <span className="font-display font-bold text-indigo-700 dark:text-indigo-400 text-sm">
                    6x Top Student (EN/DE)
                  </span>
                </div>
              </div>
            </WindowChrome>
          </motion.div>

          {/* Categorized Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="glass-panel p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-6 text-sm font-display font-bold text-neutral-900 dark:text-white">
                <Cpu className="w-4 h-4 text-indigo-500" />
                <span>{t.about.skillsTitle}</span>
              </div>

              <div className="space-y-5">
                {skillCategories.map((cat, idx) => {
                  const categoryTitle =
                    (t.about.categories as any)[cat.id] || cat.id;

                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div className="font-mono text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                        // {categoryTitle}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <SkillPill
                            key={skill}
                            skill={skill}
                            variant={cat.id === 'aiMl' || cat.id === 'genAi' ? 'accent' : 'default'}
                          />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
