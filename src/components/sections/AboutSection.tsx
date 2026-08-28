import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code, Brain, Database, Cpu, Layers, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { WindowChrome } from '../ui/WindowChrome';
import { SkillPill } from '../ui/SkillPill';
import { MixedText } from '../ui/MixedText';
import { skillCategories } from '../../data/skills';
import { assetPath } from '../../utils/assetPath';

export const AboutSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
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
              <div className="space-y-4 font-editorial text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                <p>
                  {language === 'fa' ? <MixedText text={t.about.summaryP1} /> : t.about.summaryP1}
                </p>
                <p>
                  {language === 'fa' ? <MixedText text={t.about.summaryP2} /> : t.about.summaryP2}
                </p>
                <p className="text-[var(--text-tertiary)] font-medium">
                  {language === 'fa' ? <MixedText text={t.about.summaryP3} /> : t.about.summaryP3}
                </p>
              </div>

              {/* Quick Academic Highlight Box */}
              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] block mb-1 font-semibold">
                    Shiraz University Honors
                  </span>
                  <span className="font-display font-bold text-indigo-700 dark:text-indigo-400 text-sm block">
                    GPA 19.20 • Rank #1 / 72+
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] block mb-1 font-semibold">
                    Language Excellence
                  </span>
                  <span className="font-display font-bold text-indigo-700 dark:text-indigo-400 text-sm block">
                    6x Top Student (EN/DE)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-amber-500/[0.06] dark:bg-amber-500/10 border border-amber-500/20 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-amber-700 dark:text-amber-300 block mb-1 font-semibold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Harvard CS50x
                    </span>
                    <span className="font-display font-bold text-[var(--text-primary)] dark:text-amber-200 text-xs block mb-2">
                      Silver Medal 2024
                    </span>
                  </div>
                  <a
                    href={assetPath('/documents/Harvard-CS50x-Puzzle-Day-Silver-Medal-2024.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-700 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-200 group/link"
                  >
                    <span>{t.projects?.viewCertificate || 'View Certificate (PDF)'}</span>
                    <ExternalLink className={`w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform ${isRtl ? 'scale-x-[-1]' : ''}`} />
                  </a>
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
              <div className="flex items-center gap-2 mb-6 text-sm font-display font-bold text-[var(--text-primary)]">
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
