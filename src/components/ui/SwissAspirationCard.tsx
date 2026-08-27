import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, ExternalLink, GraduationCap, MapPin, Sparkles, ChevronRight, Award, Compass, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SwissFlag } from './SwissFlag';

interface SwissAspirationCardProps {
  onOpenDreamPost?: () => void;
  compact?: boolean;
  className?: string;
}

export const SwissAspirationCard: React.FC<SwissAspirationCardProps> = ({
  onOpenDreamPost,
  compact = false,
  className = '',
}) => {
  const { language, isRtl } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const texts = {
    en: {
      badge: 'Academic Flight Path',
      airlineLabel: 'SWISS International Air Lines',
      airlineLinkText: 'swiss.com',
      destination: 'Switzerland • Zurich & Lausanne',
      routeOrigin: 'Tehran (THR)',
      routeDest: 'Zurich (ZRH) / Geneva (GVA)',
      academicTargets: 'ETH Zurich & EPFL AI Labs',
      description: 'Driven by a lifelong aspiration to conduct world-class AI and Computer Vision research in Switzerland.',
      milestone: 'EPFL Fellowship Finalist • Rank #1 CE',
      viewVisionText: 'Explore Research Vision & Dream',
      visitSwissAirlines: 'Visit Swiss Air Lines (swiss.com)',
      flightStatus: 'Future Boarding • Scheduled',
    },
    fa: {
      badge: 'مسیر پرواز علمی و آکادمیک',
      airlineLabel: 'هواپیمایی بین‌المللی سوئیس (SWISS)',
      airlineLinkText: 'swiss.com',
      destination: 'سوئیس • زوریخ و لوزان',
      routeOrigin: 'تهران (THR)',
      routeDest: 'زوریخ (ZRH) / ژنو (GVA)',
      academicTargets: 'آزمایشگاه‌های هوش مصنوعی ETH زوریخ و EPFL',
      description: 'با انگیزه و اشتیاق قلبی عمیق برای ورود به مراکز پیشگام هوش مصنوعی و بینایی ماشین کشور سوئیس.',
      milestone: 'فینالیست بورسیه EPFL • رتبه ۱ مهندسی کامپیوتر',
      viewVisionText: 'مشاهده یادداشت و چشم‌انداز کامل سوئیس',
      visitSwissAirlines: 'مشاهده وبسایت رسمی هواپیمایی سوئیس (swiss.com)',
      flightStatus: 'پرواز آینده • در مسیر آمادگی علمی',
    },
    de: {
      badge: 'Akademische Flugroute',
      airlineLabel: 'SWISS International Air Lines',
      airlineLinkText: 'swiss.com',
      destination: 'Schweiz • Zürich & Lausanne',
      routeOrigin: 'Teheran (THR)',
      routeDest: 'Zürich (ZRH) / Genf (GVA)',
      academicTargets: 'ETH Zürich & EPFL KI-Labore',
      description: 'Mit unermüdlicher Leidenschaft für Spitzenforschung in Künstlicher Intelligenz und Computer Vision in der Schweiz.',
      milestone: 'EPFL-Stipendien-Finalistin • Jahrgangsbeste #1',
      viewVisionText: 'Schweiz-Vision & Zukunftsplan lesen',
      visitSwissAirlines: 'Swiss International Air Lines besuchen (swiss.com)',
      flightStatus: 'Zukunftskorridor • In Vorbereitung',
    },
  }[language] || {
    badge: 'Academic Flight Path',
    airlineLabel: 'SWISS International Air Lines',
    airlineLinkText: 'swiss.com',
    destination: 'Switzerland • Zurich & Lausanne',
    routeOrigin: 'Tehran (THR)',
    routeDest: 'Zurich (ZRH) / Geneva (GVA)',
    academicTargets: 'ETH Zurich & EPFL AI Labs',
    description: 'Driven by a lifelong aspiration to conduct world-class AI and Computer Vision research in Switzerland.',
    milestone: 'EPFL Fellowship Finalist • Rank #1 CE',
    viewVisionText: 'Explore Research Vision & Dream',
    visitSwissAirlines: 'Visit Swiss Air Lines (swiss.com)',
    flightStatus: 'Future Boarding • Scheduled',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isHovered
          ? 'border-red-500/40 shadow-xl shadow-red-500/10'
          : 'border-red-500/20 shadow-md shadow-black/5 dark:shadow-black/20'
      } bg-gradient-to-br from-white via-white to-red-50/40 dark:from-[#181114] dark:via-[#161214] dark:to-[#221216] ${className}`}
    >
      {/* Decorative ambient background blur & Swiss flight vector trail */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 rounded-full bg-red-500/10 dark:bg-red-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-36 h-36 rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-2xl pointer-events-none" />

      <div className="relative p-4 sm:p-5 flex flex-col justify-between gap-4">
        {/* Top Header: Airline & Academic Destination Status */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-red-600 text-white shadow-sm flex items-center justify-center">
              <SwissFlag size="sm" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-ui font-bold text-xs sm:text-sm text-[#0F1115] dark:text-white">
                  {texts.airlineLabel}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20">
                  {texts.badge}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#272A30] dark:text-white/60 font-semibold">
                {texts.destination}
              </span>
            </div>
          </div>

          {/* Direct Link to swiss.com */}
          <a
            href="https://www.swiss.com/"
            target="_blank"
            rel="noopener noreferrer"
            title={texts.visitSwissAirlines}
            aria-label={texts.visitSwissAirlines}
            className="group/link flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/5 border border-black/15 dark:border-white/10 hover:border-red-500/40 text-xs font-mono font-bold text-[#0F1115] dark:text-white/90 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 cursor-pointer shadow-xs"
          >
            <Plane className="w-3.5 h-3.5 text-red-600 dark:text-red-400 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5" />
            <span>swiss.com</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100" />
          </a>
        </div>

        {/* Middle Route Flight corridor visualization */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
          {/* Flight trajectory graphic */}
          <div className="md:col-span-7 flex flex-col gap-2">
            <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/5 flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#272A30] dark:text-white/50 font-bold uppercase">Origin</span>
                <span className="font-display font-bold text-xs sm:text-sm text-[#0F1115] dark:text-white">
                  {texts.routeOrigin}
                </span>
              </div>

              {/* Animated flight connector */}
              <div className="flex-1 px-3 flex flex-col items-center justify-center relative">
                <div className="w-full h-[2px] bg-gradient-to-r from-neutral-300 via-red-500 to-neutral-300 dark:from-neutral-700 dark:via-red-400 dark:to-neutral-700 relative">
                  <motion.div
                    animate={{ x: isRtl ? [-40, 40] : [40, -40] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                    className="absolute -top-1.5 left-1/2 -ml-2"
                  >
                    <Plane className="w-3.5 h-3.5 text-red-600 dark:text-red-400 rotate-90 rtl:-rotate-90" />
                  </motion.div>
                </div>
                <span className="text-[9px] font-mono text-red-700 dark:text-red-400 mt-1.5 font-bold">
                  {texts.academicTargets}
                </span>
              </div>

              <div className="flex flex-col text-right rtl:text-left">
                <span className="text-[10px] font-mono text-[#272A30] dark:text-white/50 font-bold uppercase">Target Hub</span>
                <span className="font-display font-bold text-xs sm:text-sm text-red-700 dark:text-red-300 flex items-center gap-1 justify-end rtl:justify-start">
                  <SwissFlag size="xs" />
                  <span>{texts.routeDest}</span>
                </span>
              </div>
            </div>

            <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-white/75 leading-relaxed font-normal">
              {texts.description}
            </p>
          </div>

          {/* Academic milestone highlight & CTA button */}
          <div className="md:col-span-5 flex flex-col justify-between gap-2.5 h-full">
            <div className="p-2.5 rounded-xl bg-red-500/[0.06] dark:bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-xs">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-mono text-[11px] font-bold text-[#0F1115] dark:text-white/90">
                {texts.milestone}
              </span>
            </div>

            {onOpenDreamPost && (
              <button
                type="button"
                onClick={onOpenDreamPost}
                className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-ui font-semibold text-xs flex items-center justify-center gap-2 shadow-sm shadow-red-500/20 transition-all duration-200 cursor-pointer group/btn"
              >
                <Compass className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-45" />
                <span>{texts.viewVisionText}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5 rtl:rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
