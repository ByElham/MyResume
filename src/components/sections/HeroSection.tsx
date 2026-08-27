import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Mail,
  Award,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Code2,
  Cpu,
  Brain,
  Download,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { WindowChrome } from '../ui/WindowChrome';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { ElhamCoverCard } from '../ui/ElhamCoverCard';
import { HeroStatBadge } from '../ui/HeroStatBadge';

export const HeroSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [activeRightTab, setActiveRightTab] = useState<'cover' | 'terminal'>('cover');
  const [terminalTab, setTerminalTab] = useState<'profile' | 'model'>('profile');

  const displayName = language === 'fa' ? profileData.nameFa : profileData.name;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Floating Mesh Blobs (Frosted Glass glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/[0.03] dark:bg-indigo-500/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Intro & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Terminal prompt header */}
            <div className="flex items-center gap-2 font-mono text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>~/developer/elham-rivaz $ {t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#0F1115] dark:text-white leading-[1.05] mb-6">
              <span className="text-[#272A30] dark:text-white/60 font-medium text-2xl sm:text-3xl md:text-4xl block mb-2 font-display">
                {t.hero.headlinePrefix}{' '}
                <span className="font-vogue italic font-bold text-[#0F1115] dark:text-white">{displayName}</span>
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent font-display">
                {t.hero.headlineSuffix}
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="font-editorial text-base sm:text-xl text-[#1A1A1E] dark:text-white/85 leading-relaxed mb-8 max-w-2xl">
              {t.hero.bio}
            </p>

            {/* Key Academic Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              <HeroStatBadge
                icon={<Award className="w-3.5 h-3.5" />}
                label={t.hero.rankLabel}
                prefix="#1 / "
                countEnd={72}
                suffix="+"
                countDecimals={0}
                delayIndex={0}
              />

              <HeroStatBadge
                icon={<GraduationCap className="w-3.5 h-3.5" />}
                label={t.hero.gpaLabel}
                countEnd={19.2}
                countDecimals={2}
                suffix=" / 20.0"
                delayIndex={1}
              />

              <HeroStatBadge
                icon={<Brain className="w-3.5 h-3.5" />}
                label="Research"
                staticValue="Univ. of Queensland"
                delayIndex={2}
                className="col-span-2 sm:col-span-1"
              />
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                asAnchor
                href="#resume"
                variant="primary"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
              >
                {t.hero.viewResume}
              </Button>

              <Button
                asAnchor
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                {t.hero.getInTouch}
              </Button>

              <Button
                asAnchor
                href="#resume-download"
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                className="hidden sm:inline-flex"
              >
                PDF
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Showcase / Cover & Developer Centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* View Switcher Header between Animated Rotating Cover Card and Terminal Inspector */}
            <div className="flex items-center justify-between p-1.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/15 dark:border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-1 w-full">
                <button
                  onClick={() => setActiveRightTab('cover')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-ui font-medium transition-all duration-200 ${
                    activeRightTab === 'cover'
                      ? 'bg-white dark:bg-neutral-800 text-indigo-700 dark:text-indigo-300 shadow-sm font-bold border border-black/10 dark:border-white/10'
                      : 'text-[#272A30] dark:text-white/70 hover:text-[#0F1115] dark:hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'fa' ? 'کاور اختصاصی الهام ریواز' : 'Dedicated Cover'}</span>
                </button>
                <button
                  onClick={() => setActiveRightTab('terminal')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-mono transition-all duration-200 ${
                    activeRightTab === 'terminal'
                      ? 'bg-white dark:bg-neutral-800 text-indigo-700 dark:text-indigo-300 shadow-sm font-bold border border-black/10 dark:border-white/10'
                      : 'text-[#272A30] dark:text-white/70 hover:text-[#0F1115] dark:hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>eval_metrics.py</span>
                </button>
              </div>
            </div>

            {/* Active View: Dedicated Cover or Terminal */}
            {activeRightTab === 'cover' ? (
              <ElhamCoverCard variant="hero" />
            ) : (
              <WindowChrome
                title="elham_rivaz_dashboard.py"
                actions={
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setTerminalTab('profile')}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                        terminalTab === 'profile'
                          ? 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold'
                          : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      onClick={() => setTerminalTab('model')}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                        terminalTab === 'model'
                          ? 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold'
                          : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'
                      }`}
                    >
                      model_eval.py
                    </button>
                  </div>
                }
                className="border-indigo-500/20 shadow-xl"
              >
                {terminalTab === 'profile' ? (
                  <div className="font-mono text-xs text-neutral-700 dark:text-neutral-300 space-y-2 leading-relaxed">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                      <span className="text-emerald-500">➜</span>
                      <span>{t.hero.terminalPrompt}</span>
                    </div>
                    <div className="pl-3 border-l-2 border-indigo-500/30 text-neutral-600 dark:text-neutral-400 space-y-1">
                      <p className="text-neutral-900 dark:text-neutral-200 font-semibold">{'{'}</p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"engineer"</span>: <span className="text-emerald-600 dark:text-emerald-400">"{displayName}"</span>,
                      </p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"degree"</span>: <span className="text-amber-600 dark:text-amber-400">"B.Sc. Computer Engineering (Rank #1)"</span>,
                      </p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"institution"</span>: <span className="text-neutral-800 dark:text-neutral-200">"Shiraz University"</span>,
                      </p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"research"</span>: <span className="text-violet-600 dark:text-violet-400">"University of Queensland (UQ)"</span>,
                      </p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"specialization"</span>: [
                      </p>
                      <p className="pl-6 text-emerald-600 dark:text-emerald-400">
                        "Computer Vision", "Deep Learning", "RAG Systems", "PyTorch"
                      </p>
                      <p className="pl-3">],</p>
                      <p className="pl-3">
                        <span className="text-indigo-500">"top_metric"</span>: <span className="text-emerald-600 dark:text-emerald-400">"97.86% Accuracy (+39.29% gain)"</span>
                      </p>
                      <p className="text-neutral-900 dark:text-neutral-200 font-semibold">{'}'}</p>
                    </div>
                  </div>
                ) : (
                  <div className="font-mono text-xs text-neutral-700 dark:text-neutral-300 space-y-2 leading-relaxed">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                      <span className="text-emerald-500">➜</span>
                      <span>python evaluate_classifier.py --dataset=dogs_vs_cats</span>
                    </div>
                    <div className="pl-3 border-l-2 border-emerald-500/30 text-neutral-600 dark:text-neutral-400 space-y-1">
                      <p className="text-neutral-500">[INFO] Loading 4 Architectures: CNN, ResNet, VGG, MobileNet</p>
                      <p className="text-neutral-500">[INFO] Baseline Vanilla CNN Validation: 58.57%</p>
                      <p className="text-indigo-500">[INFO] Applying Transfer Learning & Fine-Tuning...</p>
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                        [RESULT] Test Accuracy: 97.86% (Loss: 0.0614, F1-Score: 0.978)
                      </p>
                      <p className="text-neutral-400 text-[11px] mt-2">
                        // Model checkpoints saved to models/best_classifier.pth
                      </p>
                    </div>
                  </div>
                )}
              </WindowChrome>
            )}

            {/* Key Metric Animated Leap Counter */}
            <AnimatedCounter
              baseline={profileData.metrics.baselineAccuracy}
              target={profileData.metrics.improvedAccuracy}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
