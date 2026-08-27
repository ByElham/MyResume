import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Award,
  GraduationCap,
  Brain,
  Cpu,
  Globe2,
  ChevronRight,
  Code2,
  ExternalLink,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { SwissFlag } from './SwissFlag';
import { ArchLinuxLogo } from './ArchLinuxLogo';
import { ERMonogramEmblem } from './ERMonogramEmblem';

interface ElhamCoverCardProps {
  className?: string;
  variant?: 'hero' | 'tribute' | 'compact';
}

export const ElhamCoverCard: React.FC<ElhamCoverCardProps> = ({
  className = '',
  variant = 'hero',
}) => {
  const { t, language, isRtl } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const displayName = language === 'fa' ? profileData.nameFa : profileData.name;

  const dedicationPrimary = {
    en: 'Dedicated to Elham Rivaz',
    fa: 'تقدیم به الهام ریواز',
    de: 'Elham Rivaz gewidmet',
  }[language] || 'Dedicated to Elham Rivaz';

  const authorAttribution = {
    en: 'Made with care by Mohammad Hussein .G',
    fa: 'ساخته شده با نهایت دقت، از طرف Mohammad Hussein .G',
    de: 'Mit Sorgfalt erstellt von Mohammad Hussein .G',
  }[language] || 'Made with care by Mohammad Hussein .G';

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Rotating Glowing Ambient Aura (Blue, Indigo, Violet & Purple) */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-purple-600/30 dark:from-blue-500/40 dark:via-indigo-500/40 dark:to-purple-500/40 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Rotating Animated Border Frame Wrapper */}
      <div className="relative p-[2.5px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-indigo-500/25">
        {/* Continuous Rotating Conic Gradient (Blue, Indigo, Violet, Purple & Cyan Blend) */}
        <div
          className="absolute -inset-[150%] animate-rotate-gradient opacity-85 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg, #3b82f6 0%, #6366f1 18%, #8b5cf6 36%, #d946ef 54%, #06b6d4 72%, #3b82f6 100%)',
          }}
        />

        {/* Secondary Shimmer Border Layer */}
        <div
          className="absolute -inset-[150%] animate-rotate-gradient-fast opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'conic-gradient(from 180deg, #60a5fa 0%, #a855f7 30%, #ec4899 60%, #38bdf8 100%)',
          }}
        />

        {/* Inner Card Content */}
        <div className="relative z-10 rounded-[22px] bg-neutral-900/95 dark:bg-neutral-950/95 text-white backdrop-blur-2xl overflow-hidden flex flex-col">
          {/* Top macOS-style / Window Header Bar with Arch Linux Indicator */}
          <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-[11px] text-white/60 ltr:ml-2 rtl:mr-2 tracking-wide truncate">
                elham_rivaz_showcase.art
              </span>
            </div>

            {/* Arch Linux Technical Power Badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                <ArchLinuxLogo size="xs" variant="glow" />
                <span className="font-bold tracking-wider">ARCH LINUX</span>
              </div>
            </div>
          </div>

          {/* Main Visual Cover Canvas Container with Controlled Smooth Zoom */}
          <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-neutral-950 flex items-center justify-center select-none">
            {/* Visual Cover Layer (Scale on hover with pin-sharp clarity) */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out transform group-hover:scale-105 will-change-transform flex items-center justify-center"
            >
              {/* Background Generative Neural Grid Art */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-neutral-900 to-purple-950/90" />

              {/* Geometric AI Constellation & Laser-Sharp Neural Mesh */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient Core Glow */}
                <circle cx="400" cy="300" r="220" fill="url(#coreGlow)" />

                {/* Dynamic Neural Mesh Connecting Lines */}
                <g stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
                  <line x1="120" y1="180" x2="280" y2="140" />
                  <line x1="280" y1="140" x2="400" y2="240" />
                  <line x1="400" y1="240" x2="540" y2="160" />
                  <line x1="540" y1="160" x2="680" y2="220" />
                  <line x1="280" y1="140" x2="320" y2="380" />
                  <line x1="400" y1="240" x2="400" y2="440" />
                  <line x1="400" y1="240" x2="520" y2="380" />
                  <line x1="520" y1="380" x2="680" y2="220" />
                  <line x1="120" y1="180" x2="200" y2="360" />
                  <line x1="200" y1="360" x2="320" y2="380" />
                  <line x1="320" y1="380" x2="480" y2="480" />
                  <line x1="520" y1="380" x2="480" y2="480" />
                  <line x1="540" y1="160" x2="640" y2="420" />
                  <line x1="680" y1="220" x2="640" y2="420" />
                </g>

                {/* Glowing Active Nodes */}
                <g fill="#38bdf8">
                  <circle cx="120" cy="180" r="5" className="animate-pulse" />
                  <circle cx="280" cy="140" r="6" />
                  <circle cx="400" cy="240" r="9" fill="#818cf8" />
                  <circle cx="540" cy="160" r="6" />
                  <circle cx="680" cy="220" r="5" />
                  <circle cx="200" cy="360" r="4.5" />
                  <circle cx="320" cy="380" r="6" fill="#c084fc" />
                  <circle cx="400" cy="440" r="7" fill="#818cf8" />
                  <circle cx="520" cy="380" r="6.5" fill="#c084fc" />
                  <circle cx="640" cy="420" r="5" />
                  <circle cx="480" cy="480" r="5.5" />
                </g>

                {/* Swiss Alps Vector Horizon Silhouette */}
                <path
                  d="M0 600 L160 480 L280 540 L420 420 L520 490 L640 410 L760 520 L800 490 L800 600 Z"
                  fill="#0f172a"
                  opacity="0.75"
                />
                <path
                  d="M0 600 L200 520 L360 560 L500 460 L620 530 L740 470 L800 510 L800 600 Z"
                  fill="#1e1b4b"
                  opacity="0.85"
                />
              </svg>

              {/* Central Research Profile Emblem / Silhouette Avatar with High Clarity */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                {/* Avant-Garde Holographic ER Monogram Avatar Ring */}
                <div className="mb-3.5">
                  <ERMonogramEmblem
                    size="xl"
                    glow={true}
                  />
                </div>

                {/* Name Inscription */}
                <h3 className="font-vogue italic font-bold text-xl sm:text-2xl text-white tracking-wide mb-1 drop-shadow-md">
                  {displayName}
                </h3>
                <p className="font-ui text-xs sm:text-sm text-indigo-300/90 font-medium tracking-wide">
                  AI & Computer Vision Engineer • B.Sc. Rank #1
                </p>
              </div>
            </div>

            {/* Diagonal Light Sweep Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Floating Live Badges inside the Cover */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 font-semibold shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                97.86% CV Accuracy
              </span>
            </div>

            <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 font-medium shadow-lg">
                <ArchLinuxLogo size="xs" variant="glow" />
                Linux Native
              </span>
            </div>

            {/* Bottom Inset Ribbon inside Cover */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent p-3 pt-6 z-20 flex items-center justify-between text-xs font-mono text-white/70">
              <span className="flex items-center gap-1 text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                GPA: 19.20 / 20.00
              </span>
              <span className="text-[11px] text-indigo-300">Shiraz University</span>
            </div>
          </div>

          {/* Bottom Card Summary & Clean Professional Dedication Note */}
          <div className="p-4 sm:p-5 bg-neutral-900/90 border-t border-white/10 flex flex-col gap-3.5">
            {/* Dedication Header & Author Attribution */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ArchLinuxLogo size="sm" variant="glow" />
                  <span className="font-editorial text-sm sm:text-base text-neutral-100 font-semibold tracking-tight">
                    {dedicationPrimary}
                  </span>
                </div>
                <p className="font-ui text-xs text-indigo-300/85 font-medium pl-6 rtl:pl-0 rtl:pr-6">
                  {authorAttribution}
                </p>
              </div>

              {/* Refined and Beautifully Scaled Smiley Badge */}
              <div className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors shadow-inner">
                <span className="font-mono text-base sm:text-lg font-bold leading-none select-none tracking-wider text-cyan-300 drop-shadow">
                  :)
                </span>
              </div>
            </div>

            {/* Quick Skills & Specs Pill Row */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-white/5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <ArchLinuxLogo size="xs" variant="cyan" />
                Arch
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/80">
                PyTorch
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/80">
                Deep Learning
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/80">
                RAG Systems
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-semibold ltr:ml-auto rtl:mr-auto">
                ETH / EPFL Bound
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
