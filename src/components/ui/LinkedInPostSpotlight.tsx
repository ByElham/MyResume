import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  GraduationCap,
  Share2,
  Check,
  ZoomIn,
  X,
  Copy,
  Info,
  Maximize2,
  Bookmark,
  Calendar,
  Users,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { supportedLanguages } from '../../i18n';
import { LanguageCode } from '../../types';

export interface LinkedInSlide {
  id: string;
  order: number;
  fileName: string;
  imagePathJpeg: string;
  imagePathJpg: string;
  imagePathPng: string;
  imagePathWebp: string;
  fallbackSvg: string;
  titleKey: string;
  subtitleKey: string;
  captionKey: string;
}

export const defaultLinkedInSlides: LinkedInSlide[] = [
  {
    id: 'slide-1',
    order: 1,
    fileName: 'slide-1.jpeg',
    imagePathJpeg: '/media/linkedin/graduation/slide-1.jpeg',
    imagePathJpg: '/media/linkedin/graduation/slide-1.jpg',
    imagePathPng: '/media/linkedin/graduation/slide-1.png',
    imagePathWebp: '/media/linkedin/graduation/slide-1.webp',
    fallbackSvg: '/media/linkedin/graduation/slide-1.svg',
    titleKey: 'linkedinSlide1Title',
    subtitleKey: 'linkedinSlide1Sub',
    captionKey: 'linkedinSlide1Caption',
  },
  {
    id: 'slide-2',
    order: 2,
    fileName: 'slide-2.jpeg',
    imagePathJpeg: '/media/linkedin/graduation/slide-2.jpeg',
    imagePathJpg: '/media/linkedin/graduation/slide-2.jpg',
    imagePathPng: '/media/linkedin/graduation/slide-2.png',
    imagePathWebp: '/media/linkedin/graduation/slide-2.webp',
    fallbackSvg: '/media/linkedin/graduation/slide-2.svg',
    titleKey: 'linkedinSlide2Title',
    subtitleKey: 'linkedinSlide2Sub',
    captionKey: 'linkedinSlide2Caption',
  },
  {
    id: 'slide-3',
    order: 3,
    fileName: 'slide-3.jpeg',
    imagePathJpeg: '/media/linkedin/graduation/slide-3.jpeg',
    imagePathJpg: '/media/linkedin/graduation/slide-3.jpg',
    imagePathPng: '/media/linkedin/graduation/slide-3.png',
    imagePathWebp: '/media/linkedin/graduation/slide-3.webp',
    fallbackSvg: '/media/linkedin/graduation/slide-3.svg',
    titleKey: 'linkedinSlide3Title',
    subtitleKey: 'linkedinSlide3Sub',
    captionKey: 'linkedinSlide3Caption',
  },
];

interface LinkedInPostSpotlightProps {
  postUrl?: string;
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
}

export const LinkedInPostSpotlight: React.FC<LinkedInPostSpotlightProps> = ({
  postUrl = 'https://lnkd.in/p/du8nF6yC',
  onClose,
  isModal = false,
  className = '',
}) => {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [activeSlide, setActiveSlide] = useState(0);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState<{ [key: number]: boolean }>({});

  const slides = defaultLinkedInSlides;
  const currentSlide = slides[activeSlide];

  // Auto handle slide navigation keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (isRtl) {
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
        } else {
          setActiveSlide((prev) => (prev + 1) % slides.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) {
          setActiveSlide((prev) => (prev + 1) % slides.length);
        } else {
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
      } else if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else if (onClose) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, onClose, slides.length, isRtl]);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCopyText = () => {
    const fullText = (t.linkedinPost as any)?.fullShareText || `As my first LinkedIn post, I am deeply honored to share that I have officially graduated with a Bachelor's Degree in Computer Engineering, achieving the Rank #1 standing across our entire cohort of 72+ students.\n\nPost: ${postUrl}`;
    navigator.clipboard.writeText(fullText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  // Image source with safe multi-format fallback (.jpeg -> .jpg -> .png -> .webp -> .svg)
  const getSlideSrc = (index: number) => {
    if (imageLoadError[index]) {
      return slides[index].fallbackSvg;
    }
    return slides[index].imagePathJpeg;
  };

  const handleImgError = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const src = target.src;
    if (src.endsWith('.jpeg')) {
      target.src = slides[index].imagePathJpg;
    } else if (src.endsWith('.jpg')) {
      target.src = slides[index].imagePathPng;
    } else if (src.endsWith('.png')) {
      target.src = slides[index].imagePathWebp;
    } else if (src.endsWith('.webp')) {
      target.src = slides[index].fallbackSvg;
      setImageLoadError((prev) => ({ ...prev, [index]: true }));
    } else {
      target.src = slides[index].fallbackSvg;
      setImageLoadError((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl border border-indigo-500/20 dark:border-white/10 bg-white dark:bg-[#121318] shadow-2xl overflow-hidden ${className}`}
    >
      {/* Top Professional Header Bar with In-Dashboard Theme & Language Shortcuts */}
      <div className="px-4 sm:px-6 py-3.5 border-b border-black/[0.08] dark:border-white/10 bg-gradient-to-r from-indigo-500/5 via-rose-500/5 to-amber-500/5 dark:from-indigo-950/40 dark:via-neutral-900/40 dark:to-neutral-900 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Brand Identity & Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-bold text-sm select-none">
            in
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base text-[#0F1115] dark:text-white">
                {(t.linkedinPost as any)?.headlineTitle || 'LinkedIn Official Milestone'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-[#0A66C2] dark:text-blue-400 border border-blue-500/20">
                Verified Post
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#272A30] dark:text-white/50 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-indigo-500" />
              <span>June 2025 • Cohort of 72+ Students</span>
            </p>
          </div>
        </div>

        {/* Right Controls: In-Dashboard Theme, Language, Share & Close */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Shortcut */}
          <div className="flex items-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-0.5">
            {supportedLanguages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code as LanguageCode)}
                className={`px-2 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                  language === l.code
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-[#272A30] dark:text-white/60 hover:text-neutral-950 dark:hover:text-white'
                }`}
                title={`زبان / Language: ${l.name}`}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Switcher Shortcut */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/80 transition-colors cursor-pointer"
            title={isDark ? 'تغییر به تم روشن / Switch to Light Mode' : 'تغییر به تم تاریک / Switch to Dark Mode'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
          </button>

          {/* External LinkedIn Link */}
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold font-mono transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20"
          >
            <span>{(t.linkedinPost as any)?.viewOnLinkedIn || 'View on LinkedIn'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-rose-600 hover:text-white text-neutral-600 dark:text-white transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Layout: Grid with Left/Top Slide Visualizer + Right/Bottom Professional Copy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Top: Interactive 3-Slide Carousel Canvas (Resilient to ANY image size) */}
        <div className="lg:col-span-7 bg-neutral-950 p-4 sm:p-6 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-black/10 dark:border-white/10 min-h-[380px] sm:min-h-[480px]">
          {/* Top Bar inside Slide Viewer */}
          <div className="flex items-center justify-between z-10 mb-3">
            {/* Slide Indicator Pills (slide-1, slide-2, slide-3) */}
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeSlide === idx
                      ? 'bg-white text-neutral-950 font-bold shadow-lg scale-105'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>slide-{s.order}</span>
                </button>
              ))}
            </div>

            {/* Lightbox Zoom Trigger */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title="نمای تمام‌صفحه / Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5 text-indigo-300" />
              <span className="hidden sm:inline">Zoom</span>
            </button>
          </div>

          {/* Main Slide Display with Ambient Blur Background (Adapts seamlessly to any aspect ratio) */}
          <div
            className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center group cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            {/* Background Ambient Glow using the current image */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-30 scale-110 pointer-events-none transition-all duration-700"
              style={{ backgroundImage: `url(${getSlideSrc(activeSlide)})` }}
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Foreground Scaled Image with Object-Contain (Guarantees zero crop & zero distortion) */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                src={getSlideSrc(activeSlide)}
                alt={`Slide ${currentSlide.order}`}
                onError={(e) => handleImgError(activeSlide, e)}
                className="relative z-10 max-h-[380px] sm:max-h-[440px] w-auto max-w-full object-contain drop-shadow-2xl rounded-lg"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[1px]">
              <div className="px-4 py-2 rounded-full bg-white/95 text-neutral-900 text-xs font-bold flex items-center gap-2 shadow-2xl">
                <ZoomIn className="w-4 h-4 text-indigo-600" />
                <span>{(t.linkedinPost as any)?.zoomHint || 'کلیک برای بزرگ‌نمایی'}</span>
              </div>
            </div>

            {/* Slide Navigation Arrow Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevSlide();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20 cursor-pointer backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-105"
              title="اسلاید قبلی"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Navigation Arrow Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextSlide();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20 cursor-pointer backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-105"
              title="اسلاید بعدی"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption Strip for the Current Slide */}
          <div className="mt-3.5 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/80 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                Slide {currentSlide.order} of {slides.length}
              </span>
              <span className="text-white/90 font-semibold truncate">
                {(t.linkedinPost as any)?.[currentSlide.titleKey] || `Slide #${currentSlide.order}`}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-white/50">
              <Info className="w-3 h-3 text-indigo-400" />
              <span>/public/media/linkedin/graduation/{currentSlide.fileName}</span>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Full Elevated Post Copy & Professional Statement */}
        <div className="lg:col-span-5 p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-[#121318]">
          {/* Post Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/25 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Rank #1 Valedictorian</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-semibold border border-indigo-500/20 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>GPA: 19.20 / 20.0</span>
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0F1115] dark:text-white leading-snug">
              {(t.linkedinPost as any)?.postHeading ||
                'Graduation from Shiraz University & Academic Milestone'}
            </h3>

            {/* Elevated, Emotionally Rich Post Body (Structured & Polished) */}
            <div className="space-y-3.5 text-xs sm:text-sm font-editorial text-[#1A1A1E] dark:text-white/85 leading-relaxed font-normal">
              <p className="p-3 rounded-xl bg-indigo-500/[0.04] dark:bg-indigo-500/10 border-l-3 rtl:border-l-0 rtl:border-r-3 border-indigo-600 dark:border-indigo-400 font-medium">
                {(t.linkedinPost as any)?.paragraph1 ||
                  'As my first LinkedIn post, I am deeply honored to share that I have officially completed my Bachelor’s degree in Computer Engineering, achieving the Rank #1 standing across our entire cohort of 72+ students.'}
              </p>

              <p>
                {(t.linkedinPost as any)?.paragraph2 ||
                  'This achievement is the fruit of 4 years of relentless curiosity, continuous learning, and unwavering dedication through every complex algorithmic and mathematical challenge. Beyond technical rigors, this journey has taught me invaluable life lessons in perseverance, resilience, and collaborative growth.'}
              </p>

              <p>
                {(t.linkedinPost as any)?.paragraph3 ||
                  'I would like to express my sincere gratitude to our esteemed professors and the university administration for their mentorship, guidance, and continuous support throughout these formative years. I am equally thankful to my dear friends and peers who walked this path alongside me—inspiring and elevating each other every day.'}
              </p>

              <p className="font-semibold text-indigo-700 dark:text-indigo-300">
                {(t.linkedinPost as any)?.paragraph4 ||
                  'While this undergraduate chapter comes to an end, the story of learning, advanced AI research, and lifelong exploration continues forward.'}
              </p>
            </div>

            {/* Hashtag Cloud */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {[
                'Graduation',
                'ComputerEngineering',
                'RankedFirst',
                'TopStudent',
                'AIResearch',
                'ShirazUniversity',
                'LifelongLearning',
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/5 text-[#272A30] dark:text-white/60 font-semibold hover:text-[#0A66C2] dark:hover:text-blue-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="pt-4 border-t border-black/[0.08] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3.5 py-2 rounded-xl bg-black/[0.05] dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#0F1115] dark:text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                title="کپی متن کامل پست"
              >
                {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedText ? (t.linkedinPost as any)?.textCopied || 'Copied!' : (t.linkedinPost as any)?.copyText || 'Copy Text'}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="px-3 py-2 rounded-xl bg-black/[0.05] dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#0F1115] dark:text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                title="کپی لینک پست"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Link'}</span>
              </button>
            </div>

            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-blue-500/25"
            >
              <span>{t.contact.linkedinText || 'LinkedIn'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for any slide */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full flex flex-col items-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/15 hover:bg-rose-600 text-white transition-all cursor-pointer shadow-lg flex items-center gap-1 text-xs font-mono px-3"
                title="بستن (Esc)"
              >
                <X className="w-4 h-4" />
                <span>Esc</span>
              </button>

              {/* Navigation Left / Right */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 cursor-pointer shadow-lg backdrop-blur-md"
                title="قبلی"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 cursor-pointer shadow-lg backdrop-blur-md"
                title="بعدی"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Frame */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl flex flex-col">
                <div className="relative max-h-[70vh] min-h-[280px] flex items-center justify-center bg-black p-4">
                  <img
                    src={getSlideSrc(activeSlide)}
                    alt={`Slide ${currentSlide.order}`}
                    onError={(e) => handleImgError(activeSlide, e)}
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Thumbnails in Lightbox */}
                <div className="px-4 py-3 bg-neutral-900 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {slides.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSlide(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          activeSlide === idx
                            ? 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        slide-{s.order}
                      </button>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-white/60 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Upload: /public/media/linkedin/graduation/{currentSlide.fileName} (.jpeg / .jpg / .png)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
