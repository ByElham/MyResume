import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  MapPin,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
  GraduationCap,
  Building2,
  Waves,
  Landmark,
  Mountain,
  Sparkles,
  Cpu,
  Info,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SwissFlag } from './SwissFlag';

export interface GalleryItem {
  id: string;
  number: string;
  fileName: string;
  titleKey: string;
  locationKey: string;
  descriptionKey: string;
  imagePath: string;
  fallbackSvg: string;
  type: 'eth' | 'epfl' | 'bern' | 'rhine' | 'alps' | 'zurich' | 'lake' | 'lucerne' | 'interlaken' | 'lab' | 'pathway' | 'vision';
  category: 'academic' | 'nature' | 'heritage' | 'vision';
}

interface SwissVisionGalleryProps {
  items: GalleryItem[];
}

export const SwissVisionGallery: React.FC<SwissVisionGalleryProps> = ({ items }) => {
  const { t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'academic' | 'nature' | 'heritage' | 'vision'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: t.blog.galleryFilterAll || 'همه ۱۲ تصویر', count: items.length },
    {
      id: 'academic',
      label: t.blog.galleryFilterAcademic || 'دانشگاه‌ها و پژوهش',
      count: items.filter((i) => i.category === 'academic').length,
      icon: GraduationCap,
    },
    {
      id: 'nature',
      label: t.blog.galleryFilterNature || 'طبیعت و آبشار راین',
      count: items.filter((i) => i.category === 'nature').length,
      icon: Waves,
    },
    {
      id: 'heritage',
      label: t.blog.galleryFilterHeritage || 'شهرها و جاذبه‌های تاریخی',
      count: items.filter((i) => i.category === 'heritage').length,
      icon: Landmark,
    },
    {
      id: 'vision',
      label: t.blog.galleryFilterVision || 'مسیر و چشم‌انداز علمی',
      count: items.filter((i) => i.category === 'vision').length,
      icon: Sparkles,
    },
  ];

  const filteredItems =
    selectedFilter === 'all' ? items : items.filter((item) => item.category === selectedFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        if (isRtl) {
          setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
        } else {
          setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) {
          setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
        } else {
          setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length, isRtl]);

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'eth':
        return <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />;
      case 'epfl':
        return <Building2 className="w-3.5 h-3.5 text-rose-400" />;
      case 'rhine':
        return <Waves className="w-3.5 h-3.5 text-cyan-400" />;
      case 'bern':
      case 'zurich':
      case 'lucerne':
        return <Landmark className="w-3.5 h-3.5 text-amber-400" />;
      case 'alps':
      case 'lake':
      case 'interlaken':
        return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      case 'lab':
        return <Cpu className="w-3.5 h-3.5 text-teal-400" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  };

  return (
    <div className="rounded-2xl p-5 sm:p-7 bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] dark:border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <SwissFlag size="sm" />
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F1115] dark:text-white flex items-center gap-2">
              <span>{t.blog.galleryHeading}</span>
            </h3>
          </div>
          <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-white/70 font-normal">
            {t.blog.gallerySub}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20 font-bold self-start sm:self-auto flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>12 Curated Visuals</span>
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {filterTabs.map((tab) => {
          const isSelected = selectedFilter === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 select-none cursor-pointer ${
                isSelected
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20 font-bold'
                  : 'bg-black/[0.05] dark:bg-white/5 text-[#0F1115] dark:text-white/70 hover:text-neutral-950 dark:hover:text-white hover:bg-black/[0.09] dark:hover:bg-white/10 font-semibold'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-white/25 text-white font-bold' : 'bg-black/10 dark:bg-white/10 text-[#0F1115] dark:text-white/60 font-semibold'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
        {filteredItems.map((item, idx) => {
          const itemTitle = (t.blog as any)[item.titleKey] || item.titleKey;
          const itemLoc = (t.blog as any)[item.locationKey] || item.locationKey;
          const itemDesc = (t.blog as any)[item.descriptionKey] || item.descriptionKey;

          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-neutral-900/80 hover:border-rose-500/40 hover:shadow-xl hover:shadow-rose-500/5 transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Card Image Area with Zoom Trigger */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.imagePath}
                  alt={itemTitle}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const src = target.src;
                    if (src.endsWith('.jpeg')) {
                      target.src = item.imagePath.replace(/\.jpeg$/i, '.jpg');
                    } else if (src.endsWith('.jpg')) {
                      target.src = item.imagePath.replace(/\.jpg$/i, '.png');
                    } else if (src.endsWith('.png')) {
                      target.src = item.imagePath.replace(/\.png$/i, '.webp');
                    } else {
                      target.src = item.fallbackSvg;
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                {/* Top Ribbons: Number & Category Icon */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white/95 border border-white/20">
                    #{item.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/20">
                    {getCategoryIcon(item.type)}
                  </div>
                </div>

                {/* Hover Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-neutral-900 text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                    <ZoomIn className="w-3.5 h-3.5 text-rose-600" />
                    <span>{t.blog.galleryViewFull || 'مشاهده تصویر و جزئیات'}</span>
                  </div>
                </div>

                {/* Bottom Location Overlay */}
                <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] font-mono text-white/95">
                  <span className="flex items-center gap-1 drop-shadow-sm">
                    <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                    <span className="truncate font-semibold">{itemLoc}</span>
                  </span>
                </div>
              </div>

              {/* Card Body with Detailed Text */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#0F1115] dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                    {itemTitle}
                  </h4>
                  <p className="font-editorial text-xs text-[#1A1A1E] dark:text-white/80 leading-relaxed font-normal">
                    {itemDesc}
                  </p>
                </div>

                {/* Clean Category Label & View Action */}
                <div className="pt-2.5 border-t border-black/[0.08] dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#272A30] dark:text-white/50 font-semibold">
                  <span className="capitalize px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/5 border border-black/5 dark:border-white/5">
                    {item.category}
                  </span>
                  <div className="text-rose-700 dark:text-rose-400 group-hover:underline flex items-center gap-1 font-bold">
                    <span>{t.blog.galleryViewFull || 'مشاهده جزئیات'}</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-xl overflow-y-auto"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full flex flex-col items-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 sm:right-0 p-2 rounded-full bg-white/15 hover:bg-rose-600 text-white transition-all cursor-pointer shadow-lg flex items-center gap-1 text-xs font-mono px-3"
                title="بستن (Esc)"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Esc</span>
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 cursor-pointer shadow-lg backdrop-blur-md"
                title="قبلی"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 cursor-pointer shadow-lg backdrop-blur-md"
                title="بعدی"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image & Info Container */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl flex flex-col">
                <div className="relative max-h-[62vh] min-h-[260px] flex items-center justify-center bg-black p-2 sm:p-4">
                  <img
                    src={filteredItems[lightboxIndex].imagePath}
                    alt={(t.blog as any)[filteredItems[lightboxIndex].titleKey] || filteredItems[lightboxIndex].titleKey}
                    className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const item = filteredItems[lightboxIndex];
                      const src = target.src;
                      if (src.endsWith('.jpeg')) {
                        target.src = item.imagePath.replace(/\.jpeg$/i, '.jpg');
                      } else if (src.endsWith('.jpg')) {
                        target.src = item.imagePath.replace(/\.jpg$/i, '.png');
                      } else if (src.endsWith('.png')) {
                        target.src = item.imagePath.replace(/\.png$/i, '.webp');
                      } else {
                        target.src = item.fallbackSvg;
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Thumbnail Strip */}
                <div className="px-4 py-2.5 bg-neutral-950/90 border-t border-white/10 flex items-center gap-2 overflow-x-auto">
                  {filteredItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative shrink-0 w-12 h-9 rounded-md overflow-hidden border transition-all cursor-pointer ${
                        lightboxIndex === idx
                          ? 'border-rose-500 ring-2 ring-rose-500/40 scale-105 opacity-100'
                          : 'border-white/10 opacity-50 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={item.imagePath}
                        alt={item.number}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const src = target.src;
                          if (src.endsWith('.jpeg')) {
                            target.src = item.imagePath.replace(/\.jpeg$/i, '.jpg');
                          } else if (src.endsWith('.jpg')) {
                            target.src = item.imagePath.replace(/\.jpg$/i, '.png');
                          } else if (src.endsWith('.png')) {
                            target.src = item.imagePath.replace(/\.png$/i, '.webp');
                          } else {
                            target.src = item.fallbackSvg;
                          }
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Lightbox Caption & Detailed Story */}
                <div className="p-5 sm:p-6 bg-neutral-900 border-t border-white/10 text-white space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                        <SwissFlag size="sm" />
                        <span>#{filteredItems[lightboxIndex].number} / {filteredItems.length}</span>
                      </span>
                      <span className="font-mono text-xs text-neutral-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        {(t.blog as any)[filteredItems[lightboxIndex].locationKey] || filteredItems[lightboxIndex].locationKey}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-neutral-400 capitalize px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {filteredItems[lightboxIndex].category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {(t.blog as any)[filteredItems[lightboxIndex].titleKey] || filteredItems[lightboxIndex].titleKey}
                  </h3>

                  <p className="font-editorial text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {(t.blog as any)[filteredItems[lightboxIndex].descriptionKey] || filteredItems[lightboxIndex].descriptionKey}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                      <Info className="w-3 h-3 text-rose-400" />
                      <span>{filteredItems[lightboxIndex].fileName}</span>
                    </span>
                    <span className="text-[11px] text-neutral-500 hidden sm:inline">
                      Use Arrow Keys ← → to navigate
                    </span>
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
