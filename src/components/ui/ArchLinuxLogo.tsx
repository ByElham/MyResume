import React from 'react';

export interface ArchLinuxLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gradient' | 'cyan' | 'monochrome' | 'glow' | 'badge';
  showText?: boolean;
}

/**
 * Official Arch Linux Brand Mark Component
 *
 * Features:
 * - Authentic official Simple Icons brand silhouette (viewBox 0 0 24 24)
 * - Deep cyan-to-navy brand gradient with internal crystal sheen
 * - Dual-layer ambient breathing aura (sky cyan + electric Arch blue)
 * - Dynamic tactile hover physics with micro-sheen reflection
 */
export const ArchLinuxLogo: React.FC<ArchLinuxLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'gradient',
  showText = false,
}) => {
  const sizeMap: Record<NonNullable<ArchLinuxLogoProps['size']>, string> = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-9 h-9',
  };

  const id = React.useId();
  const safeId = id.replace(/[^a-zA-Z0-9-_]/g, '');
  const gradientId = `arch-brand-grad-${safeId}`;
  const sheenGradId = `arch-sheen-grad-${safeId}`;
  const maskId = `arch-mask-${safeId}`;

  const officialPath =
    'M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554c-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.6 6.6 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973c1.426.12 2.534 2.096 2.478 4.409a6.5 6.5 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844c-.702-1.293-1.33-2.459-1.929-3.57c-.943-.73-1.926-1.682-3.933-2.713c1.38.359 2.367.772 3.137 1.234c-6.09-11.334-6.582-12.84-8.67-17.74z';

  return (
    <div
      className={`inline-flex items-center gap-1.5 select-none ${className}`}
      title="Arch Linux"
    >
      <div
        className={`relative ${sizeMap[size]} shrink-0 flex items-center justify-center group/arch`}
      >
        {/* Soft Ambient Cyan Backlight (breathes smoothly without clutter) */}
        <div className="absolute -inset-1 rounded-full bg-cyan-400/20 dark:bg-cyan-400/35 blur-[3px] opacity-80 group-hover/arch:opacity-100 group-hover/arch:scale-125 transition-all duration-300 pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/arch:-rotate-6 group-hover/arch:scale-110 motion-reduce:group-hover/arch:rotate-0 motion-reduce:group-hover/arch:scale-100 animate-arch-glow overflow-visible"
          style={{
            transformOrigin: 'center center',
          }}
          aria-hidden="true"
        >
          <defs>
            {/* Primary Rich Brand Gradient: Vivid Sky Cyan -> Signature Arch Cyan-Blue -> Deep Alpine Navy */}
            <linearGradient
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="35%" stopColor="#1793D1" />
              <stop offset="75%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0B192C" />
            </linearGradient>

            {/* Micro Top-Edge Specular Sheen (Gives a crisp high-tech crystal apex) */}
            <linearGradient
              id={sheenGradId}
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>

            {/* Mask for perfectly clipped internal crystal highlight */}
            <mask id={maskId}>
              <path d={officialPath} fill="#ffffff" />
            </mask>
          </defs>

          {/* Base Arch Brand Silhouette */}
          <path
            d={officialPath}
            fill={variant === 'monochrome' ? 'currentColor' : `url(#${gradientId})`}
          />

          {/* Crisp Specular Apex Highlight Overlay (Masked to silhouette for maximum sharpness) */}
          {variant !== 'monochrome' && (
            <g mask={`url(#${maskId})`}>
              <path
                d="M 12 0 L 24 0 L 12 14 L 0 24 L 0 0 Z"
                fill={`url(#${sheenGradId})`}
                className="opacity-75 group-hover/arch:opacity-100 transition-opacity duration-300"
              />
            </g>
          )}
        </svg>
      </div>

      {showText && (
        <span className="font-mono text-xs tracking-wider text-cyan-400 dark:text-cyan-300 font-bold uppercase">
          Arch Linux
        </span>
      )}
    </div>
  );
};
