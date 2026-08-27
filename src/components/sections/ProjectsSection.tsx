import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Filter, Sparkles, FolderGit2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'cv' | 'genai' | 'fundamentals'>('all');

  const filterOptions = [
    { id: 'all', label: t.projects.allFilter },
    { id: 'cv', label: t.projects.cvFilter },
    { id: 'genai', label: t.projects.genAiFilter },
    { id: 'fundamentals', label: t.projects.csAiFilter },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cv') return project.id === 'classifier';
    if (activeFilter === 'genai') return project.id === 'rag' || project.id === 'lostSequence';
    if (activeFilter === 'fundamentals')
      return project.id === 'cs50ai' || project.id === 'indexer' || project.id === 'dataCleaning' || project.id === 'customerAnalysis';
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              {t.projects.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl self-start md:self-auto"
          >
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono rounded-xl transition-colors select-none cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-project-filter"
                      className="absolute inset-0 bg-indigo-500 rounded-xl shadow-md shadow-indigo-500/25"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
