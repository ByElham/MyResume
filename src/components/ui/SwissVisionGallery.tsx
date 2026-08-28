import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  MapPin,
  ZoomIn,
  GraduationCap,
  Building2,
  Waves,
  Landmark,
  Mountain,
  Sparkles,
  Cpu,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SwissFlag } from './SwissFlag';
import { MediaLightbox, LightboxMediaItem } from './MediaLightbox';

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
  const { t } = useLanguage();
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

  // Convert filtered items to unified LightboxMediaItem list
  const lightboxMediaItems: LightboxMediaItem[] = filteredItems.map((item) => ({
    id: item.id,
    imagePath: item.imagePath,
    fallbackSvg: item.fallbackSvg,
    title: (t.blog as any)[item.titleKey] || item.titleKey,
    description: (t.blog as any)[item.descriptionKey] || item.descriptionKey,
    location: (t.blog as any)[item.locationKey] || item.locationKey,
    category: item.category,
    number: item.number,
    fileName: item.fileName,
  }));

  return (
    <div className="rounded-2xl p-4 sm:p-7 bg-[var(--bg-inset)]/30 border border-[var(--border-subtle)] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <SwissFlag size="sm" />
            <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] flex items-center gap-2">
              <span>{t.blog.galleryHeading}</span>
            </h3>
          </div>
          <p className="font-editorial text-xs sm:text-sm text-[var(--text-secondary)] font-normal">
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
              type="button"
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs transition-all flex items-center gap-1.5 select-none cursor-pointer ${
                isSelected
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20 font-bold'
                  : 'bg-[var(--bg-inset)] text-[var(--text-primary)] hover:bg-[var(--bg-inset)]/80 font-semibold'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-1">
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
              className="group relative rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-neutral-900/80 hover:border-rose-500/40 hover:shadow-xl hover:shadow-rose-500/10 transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Card Image Area with Zoom Trigger */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.imagePath}
                  alt={itemTitle}
                  loading="lazy"
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
                    <span>{t.blog.galleryViewFull || 'بزرگ‌نمایی و مشاهده کامل'}</span>
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
                    <span>{t.blog.galleryViewFull || 'بزرگ‌نمایی'}</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Unified High-Performance Media Lightbox Modal */}
      {lightboxIndex !== null && (
        <MediaLightbox
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          items={lightboxMediaItems}
          initialIndex={lightboxIndex}
        />
      )}
    </div>
  );
};
