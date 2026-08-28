import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * High-performance, GPU-accelerated Scroll Reading Progress Bar.
 * Sits seamlessly at the bottom edge of the navbar or top of the viewport.
 * Resilient to dynamic content resizing and supports RTL/LTR reading direction.
 */
export const ScrollProgressBar: React.FC = () => {
  const { isRtl } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const totalScrollable = documentHeight - windowHeight;

      if (totalScrollable <= 0) {
        setScrollProgress(0);
      } else {
        const progress = Math.min(100, Math.max(0, (scrollTop / totalScrollable) * 100));
        setScrollProgress(progress);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    // Calculate initial progress & attach listeners
    calculateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="absolute bottom-0 inset-x-0 h-[2.5px] bg-transparent pointer-events-none overflow-hidden z-50"
      aria-hidden="true"
    >
      {/* Background track indicator subtle line */}
      <div className="w-full h-full bg-black/5 dark:bg-white/5" />

      {/* Dynamic Animated Gradient Progress Line */}
      <div
        className="absolute top-0 bottom-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 dark:from-indigo-400 dark:via-purple-400 dark:to-rose-400 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-75 ease-out will-change-transform"
        style={{
          width: `${scrollProgress}%`,
          left: isRtl ? 'auto' : 0,
          right: isRtl ? 0 : 'auto',
        }}
      />
    </div>
  );
};
