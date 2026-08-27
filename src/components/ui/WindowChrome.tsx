import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface WindowChromeProps {
  title?: string;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  showDots?: boolean;
  hoverZoom?: boolean;
  onClose?: () => void;
}

export const WindowChrome: React.FC<WindowChromeProps> = ({
  title,
  className = '',
  contentClassName,
  children,
  actions,
  showDots = true,
  hoverZoom = false,
  onClose,
}) => {
  const { isRtl } = useLanguage();

  return (
    <div
      className={`rounded-2xl glass-panel overflow-hidden shadow-2xl ${
        hoverZoom ? 'window-card-focus' : ''
      } ${className}`}
    >
      {/* macOS Window Titlebar */}
      <div className="h-11 px-4 sm:px-5 border-b border-black/[0.08] dark:border-white/10 bg-black/[0.03] dark:bg-white/5 flex items-center justify-between backdrop-blur-md select-none shrink-0">
        {/* Traffic Light Dots */}
        <div className={`flex items-center gap-2 ${isRtl ? 'order-last' : 'order-first'}`}>
          {showDots && (
            <div className="flex items-center gap-1.5 group">
              <button
                type="button"
                onClick={onClose}
                className="traffic-dot w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/15 hover:opacity-90 active:scale-95 transition-all duration-150 cursor-pointer flex items-center justify-center p-0"
                title="Close"
                aria-label="Close window"
              />
              <span
                className="traffic-dot w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/15 transition-transform duration-150"
                title="Minimize"
              />
              <span
                className="traffic-dot w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/15 transition-transform duration-150"
                title="Expand"
              />
            </div>
          )}
        </div>

        {/* Center / Window Title */}
        {title && (
          <div className="font-mono text-xs sm:text-xs text-neutral-700 dark:text-white/60 uppercase tracking-widest px-2 truncate font-semibold">
            {title}
          </div>
        )}

        {/* Optional Actions on the other side */}
        <div className={`flex items-center gap-2 ${isRtl ? 'order-first' : 'order-last'}`}>
          {actions}
        </div>
      </div>

      {/* Content Area */}
      <div className={contentClassName ?? 'p-4 sm:p-6 md:p-8'}>{children}</div>
    </div>
  );
};
