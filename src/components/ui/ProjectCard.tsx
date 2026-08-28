import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star, GitBranch, Layers, Award } from 'lucide-react';
import { ProjectEntry } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SkillPill } from './SkillPill';
import { MixedText } from './MixedText';
import { assetPath } from '../../utils/assetPath';

interface ProjectCardProps {
  project: ProjectEntry;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, isRtl, language } = useLanguage();

  // Helper to resolve translation string safely from the project ID
  const itemData = (t.projects.items as any)[project.id];
  const title = itemData?.title || project.id;
  const category = itemData?.category || '';
  const description = itemData?.description || '';
  const highlights = itemData?.highlights || [];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel window-card-focus rounded-2xl flex flex-col justify-between overflow-hidden group"
    >
      {/* Card Header with macOS Traffic Lights & Category */}
      <div>
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-inset)]">
          <div className="flex items-center gap-1.5">
            <span className="traffic-dot w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="traffic-dot w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="traffic-dot w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex items-center gap-2">
            {project.accuracy && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.accuracy} acc
              </span>
            )}
            {project.stars !== undefined && project.stars > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Star className="w-2.5 h-2.5 fill-amber-500" />
                {project.stars} {t.projects.starsBadge}
              </span>
            )}
            <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
              {project.featured ? '// FEATURED' : '// SYSTEM'}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-1.5 mb-1.5 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? <MixedText text={category} /> : category}</span>
          </div>

          <h3 className="text-lg font-display font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2.5">
            {language === 'fa' ? <MixedText text={title} /> : title}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
            {language === 'fa' ? <MixedText text={description} /> : description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <ul className="space-y-1.5 mb-5 border-t border-[var(--border-subtle)] pt-3">
              {highlights.map((bullet: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[var(--text-secondary)] font-medium"
                >
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold mt-0.5 select-none">▸</span>
                  <span className="leading-snug">
                    {language === 'fa' ? <MixedText text={bullet} /> : bullet}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer: Tech Stack & Repo Link */}
      <div className="p-5 sm:p-6 pt-0 border-t border-[var(--border-subtle)] mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-4 pt-3">
          {project.techStack.map((tech) => (
            <SkillPill key={tech} skill={tech} variant="subtle" />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap items-center gap-3">
            {project.id === 'cs50ai' && (
              <a
                href={assetPath('/documents/Harvard-CS50x-Puzzle-Day-Silver-Medal-2024.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer group/cert"
              >
                <Award className="w-3.5 h-3.5 text-amber-500 group-hover/cert:scale-110 transition-transform" />
                <span>{t.projects.viewCertificate || 'View Certificate (PDF)'}</span>
                <ExternalLink className={`w-3 h-3 transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 group/link transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>{t.projects.viewCode}</span>
                <ExternalLink className={`w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </a>
            ) : (
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                {t.projects.viewPaper}
              </span>
            )}
          </div>

          <span className="font-mono text-[10px] text-[var(--text-muted)]">
            {project.id}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
