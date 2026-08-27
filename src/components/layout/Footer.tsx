import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Award, Brain, Star, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { BespokeBrandLogo } from '../ui/BespokeBrandLogo';
import { ERMonogramEmblem } from '../ui/ERMonogramEmblem';
import { SwissFlag } from '../ui/SwissFlag';
import { ArchLinuxLogo } from '../ui/ArchLinuxLogo';

export const Footer: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const dedicationTitle = {
    en: 'Dedicated to Elham Rivaz',
    fa: 'تقدیم به الهام ریواز',
    de: 'Elham Rivaz gewidmet',
  }[language] || 'Dedicated to Elham Rivaz';

  const dedicationAuthor = {
    en: 'From Mohammad Hussein .G',
    fa: 'از طرف Mohammad Hussein .G',
    de: 'Von Mohammad Hussein .G',
  }[language] || 'From Mohammad Hussein .G';

  const dedicationSub = {
    en: 'Celebrating academic excellence, innovative AI research, and high aspirations.',
    fa: 'به پاس سال‌ها تلاش علمی درخشان، پژوهش‌های پیشرو در هوش مصنوعی و آرزوهای بلند.',
    de: 'Zur Feier akademischer Spitzenleistungen, innovativer KI-Forschung und hoher Bestrebungen.',
  }[language] || 'Celebrating academic excellence, innovative AI research, and high aspirations.';

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-black/30 backdrop-blur-2xl py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.07] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Special Finale Dedication Card with Animated Rotating Gradient Border & Smooth Hover Zoom */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Ambient Glow behind card */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-purple-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Rotating Animated Gradient Frame */}
          <div className="relative p-[2px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
            <div
              className="absolute -inset-[150%] animate-rotate-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, #3b82f6 0%, #6366f1 20%, #8b5cf6 40%, #d946ef 60%, #06b6d4 80%, #3b82f6 100%)',
              }}
            />

            {/* Inner Card with Smooth Subtle Zoom on Hover */}
            <div className="relative z-10 rounded-[22px] bg-white/95 dark:bg-neutral-950/95 p-6 sm:p-8 backdrop-blur-2xl border border-white/20 dark:border-white/5 transition-transform duration-700 ease-out transform group-hover:scale-[1.015]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left / Center Info */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left rtl:sm:text-right">
                  {/* Ultra-Refined Dynamic Monogram Emblem */}
                  <div className="shrink-0">
                    <ERMonogramEmblem
                      size="lg"
                      glow={true}
                    />
                  </div>

                  {/* Dedication Statement & Attribution */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-start gap-2">
                      <ArchLinuxLogo size="sm" variant="glow" />
                      <span className="font-editorial text-lg sm:text-xl font-bold text-[#0F1115] dark:text-white tracking-tight">
                        {dedicationTitle}
                      </span>
                      <span className="text-[#5C5C63] dark:text-white/40 text-sm font-light">•</span>
                      <span className="font-ui text-sm sm:text-base font-bold text-indigo-700 dark:text-indigo-300">
                        {dedicationAuthor}
                      </span>
                    </div>
                    <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-white/60 max-w-xl leading-relaxed font-normal">
                      {dedicationSub}
                    </p>
                  </div>
                </div>

                {/* Right Column: Badges & Upgraded Clean Smiley Indicator */}
                <div className="flex flex-wrap sm:flex-col lg:flex-row items-center justify-center md:justify-end gap-2.5 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-bold">
                    <ArchLinuxLogo size="xs" variant="cyan" />
                    <span>Arch Linux</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Rank 1 • GPA 19.20</span>
                  </div>

                  {/* Enhanced Styled Smiley Badge */}
                  <div className="flex items-center justify-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:text-cyan-500 transition-colors shadow-inner">
                    <span className="font-mono text-base sm:text-lg font-bold leading-none select-none tracking-wider text-cyan-600 dark:text-cyan-400 drop-shadow">
                      :)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right gap-1.5">
            <BespokeBrandLogo />
            <p className="text-xs text-[#272A30] dark:text-white/40 max-w-sm font-mono font-medium mt-1">
              {profileData.title} • {profileData.location}
            </p>
          </div>

          {/* Social and Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-[#0F1115] dark:text-white/70 hover:text-indigo-600 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer shadow-xs"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-[#0F1115] dark:text-white/70 hover:text-indigo-600 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer shadow-xs"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl glass-panel text-[#0F1115] dark:text-white/70 hover:text-indigo-600 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer shadow-xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-[#272A30] dark:text-white/40 font-mono font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.footer.systemStatus}</span>
          </div>

          <div className="text-center">
            <span>© {new Date().getFullYear()} Elham Rivaz. {t.footer.rights}</span>
          </div>

          <div className="text-right">
            <span>{t.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
