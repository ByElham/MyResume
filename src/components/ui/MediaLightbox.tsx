import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  MapPin,
  Info,
  Download,
  Share2,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface LightboxMediaItem {
  id: string;
  imagePath: string;
  fallbackSvg?: string;
  title: string;
  subtitle?: string;
  description?: string;
  location?: string;
  category?: string;
  number?: string | number;
  badge?: string;
  fileName?: string;
}

interface MediaLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxMediaItem[];
  initialIndex?: number;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  isOpen,
  onClose,
  items,
  initialIndex = 0,
}) => {
  const { t, isRtl } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Sync initial index
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.max(0, Math.min(initialIndex, items.length - 1)));
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex, items.length]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Reset zoom & pan when index changes
  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    resetZoom();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length, resetZoom]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    resetZoom();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length, resetZoom]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomLevel > 1) {
          resetZoom();
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(z + 0.5, 3.5));
      } else if (e.key === '-') {
        setZoomLevel((z) => {
          const next = Math.max(z - 0.5, 1);
          if (next === 1) setPanPosition({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0') {
        resetZoom();
      } else if (e.key === 'i' || e.key === 'I') {
        setShowInfo((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, zoomLevel, isRtl, handleNext, handlePrev, onClose, resetZoom]);

  const handleZoomIn = () => {
    setZoomLevel((z) => Math.min(z + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((z) => {
      const next = Math.max(z - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const toggleDoubleTapZoom = (clientX: number, clientY: number) => {
    if (zoomLevel > 1) {
      resetZoom();
    } else {
      setZoomLevel(2);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = (rect.width / 2 - (clientX - rect.left)) * 0.8;
        const offsetY = (rect.height / 2 - (clientY - rect.top)) * 0.8;
        setPanPosition({ x: offsetX, y: offsetY });
      }
    }
  };

  // Mouse drag to pan when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch gestures (swipe next/prev when not zoomed, pan when zoomed)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
      if (zoomLevel > 1) {
        setIsDragging(true);
        setDragStart({ x: touch.clientX - panPosition.x, y: touch.clientY - panPosition.y });
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (zoomLevel > 1 && isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPanPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (zoomLevel === 1 && touchStartRef.current) {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Detect horizontal swipe if deltaX is significant and not vertical scroll
      if (Math.abs(deltaX) > 45 && Math.abs(deltaY) < 70 && deltaTime < 400) {
        if (deltaX < 0) {
          // Swiped left
          if (isRtl) handlePrev();
          else handleNext();
        } else {
          // Swiped right
          if (isRtl) handleNext();
          else handlePrev();
        }
      }
    }
    touchStartRef.current = null;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentItem?.title || 'Gallery Image',
        text: currentItem?.description || '',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/96 backdrop-blur-2xl text-white select-none overflow-hidden touch-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar (Always visible & inside viewport, Safe Area compliant) */}
        <div className="relative z-30 flex items-center justify-between px-3 sm:px-6 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-md border-b border-white/10 shrink-0 gap-2">
          {/* Left: Info & Counter */}
          <div className="flex items-center gap-2.5 min-w-0">
            {currentItem?.number && (
              <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold shrink-0">
                #{currentItem.number}
              </span>
            )}
            <div className="truncate flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base text-white truncate">
                {currentItem?.title}
              </span>
              <span className="hidden md:inline-block text-xs font-mono text-white/50">
                ({currentIndex + 1} / {items.length})
              </span>
            </div>
          </div>

          {/* Right: Interactive Tools & Close Button */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center bg-white/10 rounded-xl p-0.5 border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="px-2 py-1 text-[11px] font-mono font-bold text-white/90 hover:text-white hover:bg-white/15 rounded-md transition-all cursor-pointer min-w-[46px] text-center"
                title="Reset Zoom (0)"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3.5}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Reset Pan if zoomed */}
            {zoomLevel > 1 && (
              <button
                type="button"
                onClick={resetZoom}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-300/30 transition-all cursor-pointer"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Toggle Info Button */}
            <button
              type="button"
              onClick={() => setShowInfo((prev) => !prev)}
              className={`p-2 rounded-xl transition-all cursor-pointer hidden sm:flex items-center gap-1 text-xs font-mono border ${
                showInfo
                  ? 'bg-rose-600/30 text-rose-300 border-rose-500/40'
                  : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20'
              }`}
              title="Toggle Details (I)"
            >
              <Info className="w-4 h-4" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 transition-all cursor-pointer hidden md:block"
              title="Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Share / Copy */}
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 transition-all cursor-pointer"
              title="Share"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Prominent, highly accessible Close Button with 44px touch area */}
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-rose-600/30 active:scale-95"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
              <span className="text-xs font-semibold">بستن</span>
            </button>
          </div>
        </div>

        {/* Center Stage: Image Canvas with Zoom & Pan */}
        <div
          className={`relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6 cursor-${
            zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onDoubleClick={(e) => toggleDoubleTapZoom(e.clientX, e.clientY)}
        >
          {/* Navigation Arrows (Desktop & Tablet) */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  isRtl ? handleNext() : handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title={isRtl ? 'تصویر بعدی' : 'Previous (Left Arrow)'}
              >
                <ChevronLeft className={`w-6 h-6 sm:w-7 sm:h-7 ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  isRtl ? handlePrev() : handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title={isRtl ? 'تصویر قبلی' : 'Next (Right Arrow)'}
              >
                <ChevronRight className={`w-6 h-6 sm:w-7 sm:h-7 ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </button>
            </>
          )}

          {/* Main Hero Image */}
          <div
            className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${
                panPosition.y / zoomLevel
              }px)`,
              cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            }}
          >
            <img
              ref={imageRef}
              src={currentItem?.imagePath}
              alt={currentItem?.title || 'Preview'}
              className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-[94vw] object-contain rounded-xl shadow-2xl pointer-events-none select-none"
              draggable={false}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const src = target.src;
                if (src.endsWith('.jpeg')) {
                  target.src = currentItem.imagePath.replace(/\.jpeg$/i, '.jpg');
                } else if (src.endsWith('.jpg')) {
                  target.src = currentItem.imagePath.replace(/\.jpg$/i, '.png');
                } else if (src.endsWith('.png')) {
                  target.src = currentItem.imagePath.replace(/\.png$/i, '.webp');
                } else if (currentItem.fallbackSvg) {
                  target.src = currentItem.fallbackSvg;
                }
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile Double-tap hint */}
          {zoomLevel === 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-white/70 pointer-events-none z-10 text-center whitespace-nowrap opacity-75">
              {isRtl ? 'دو بار ضربه بزنید برای بزرگ‌نمایی • کشیدن به چپ و راست برای پیمایش' : 'Double-tap to zoom • Swipe left/right to navigate'}
            </div>
          )}
        </div>

        {/* Bottom Drawer: Caption, Story & Thumbnail Navigation */}
        <div className="relative z-30 flex flex-col bg-gradient-to-t from-black via-black/95 to-black/80 backdrop-blur-xl border-t border-white/10 shrink-0">
          {/* Collapsible Info Drawer */}
          <AnimatePresence>
            {showInfo && (currentItem?.description || currentItem?.location) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden px-4 sm:px-6 py-2.5 sm:py-3.5 border-b border-white/10 text-white"
              >
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {currentItem.location && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-rose-300 font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{currentItem.location}</span>
                        </span>
                      )}
                      {currentItem.category && (
                        <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-white/10 text-white/70 capitalize">
                          {currentItem.category}
                        </span>
                      )}
                    </div>
                    {currentItem.description && (
                      <p className="font-editorial text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal max-w-3xl">
                        {currentItem.description}
                      </p>
                    )}
                  </div>

                  {currentItem.fileName && (
                    <div className="text-[11px] font-mono text-white/40 shrink-0 hidden lg:block">
                      {currentItem.fileName}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thumbnail Carousel Bar */}
          {items.length > 1 && (
            <div className="px-3 sm:px-6 py-2.5 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
              {items.map((item, idx) => {
                const isSelected = currentIndex === idx;
                return (
                  <button
                    key={item.id || idx}
                    type="button"
                    onClick={() => {
                      resetZoom();
                      setCurrentIndex(idx);
                    }}
                    className={`relative shrink-0 h-10 sm:h-12 w-14 sm:w-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-rose-500 ring-2 ring-rose-500/50 scale-105 opacity-100 shadow-md'
                        : 'border-white/15 opacity-50 hover:opacity-85 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={item.imagePath}
                      alt={item.title || `Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {item.number && (
                      <span className="absolute bottom-0.5 right-0.5 px-1 py-0.2 rounded text-[9px] font-mono font-bold bg-black/80 text-white">
                        {item.number}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
