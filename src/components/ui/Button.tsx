import React, { useState, useRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface RippleInfo {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  shimmer?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  download,
  shimmer,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState<RippleInfo[]>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  // Auto-enable shimmer for primary CTA buttons or when explicitly requested
  const showShimmer = shimmer ?? (variant === 'primary' || variant === 'outline');

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-4.5 py-2.5 text-sm gap-2 rounded-xl',
    lg: 'px-6 py-3 text-base gap-2.5 rounded-2xl font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-neutral-900 hover:bg-neutral-800 text-white shadow-xl shadow-black/10 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:shadow-white/5 border border-transparent font-semibold',
    secondary:
      'bg-black/[0.04] hover:bg-black/[0.08] text-neutral-900 border border-black/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/10 backdrop-blur-xl font-semibold shadow-sm',
    outline:
      'border border-indigo-500/30 hover:border-indigo-500/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/10 backdrop-blur-md font-semibold',
    ghost:
      'text-neutral-600 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 backdrop-blur-md',
  };

  const baseClasses = `relative inline-flex items-center justify-center font-ui font-medium cursor-pointer select-none no-underline overflow-hidden group/btn ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Handle click to create a subtle radial ripple burst from the click point
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const targetEl = e.currentTarget;
    const rect = targetEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const newRipple: RippleInfo = { id: Date.now() + Math.random(), x, y, size };

    setRipples((prev) => [...prev.slice(-2), newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 550);
  };

  const content = (
    <>
      {/* Click Ripple Effect */}
      <span className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]">
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '50%',
              backgroundColor:
                variant === 'primary'
                  ? 'rgba(255, 255, 255, 0.45)'
                  : 'rgba(99, 102, 241, 0.35)',
            }}
            className="pointer-events-none"
          />
        ))}
      </span>

      {/* Subtle Shimmer Sheen Sweep on Hover */}
      {showShimmer && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 motion-reduce:hidden"
          aria-hidden="true"
        >
          <motion.span
            initial={{ x: '-100%' }}
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 dark:via-white/30 to-transparent skew-x-[-20deg]"
          />
        </span>
      )}

      {/* Button Content with subtle relative z-index */}
      {icon && iconPosition === 'left' && <span className="shrink-0 relative z-10">{icon}</span>}
      <span className="truncate relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 relative z-10">{icon}</span>}
    </>
  );

  if (asAnchor && href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onPointerDown={handlePointerDown}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onPointerDown={handlePointerDown}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
