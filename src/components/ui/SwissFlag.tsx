import React from 'react';

interface SwissFlagProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SwissFlag: React.FC<SwissFlagProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`relative inline-block select-none ${sizeMap[size]} ${className}`}
      title="Switzerland"
      aria-label="Swiss Flag"
    >
      <div className="w-full h-full animate-swiss-wave rounded-[3px] overflow-hidden shadow-sm">
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full block"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Official Swiss Red Square Canvas */}
          <rect width="32" height="32" fill="#DA291C" />

          {/* Swiss White Cross (Equilateral arms, official proportions) */}
          <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" rx="0.5" />
          <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" rx="0.5" />

          {/* Gentle fabric specular gradient highlight */}
          <defs>
            <linearGradient id="flagSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#000000" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" fill="url(#flagSheen)" pointerEvents="none" />
        </svg>
      </div>
    </div>
  );
};
