/**
 * @fileoverview Custom animation hook for numeric count-up and benchmark metrics.
 * Uses requestAnimationFrame with an exponential easing curve (expo-out).
 * @author Elham Rivaz & AI Studio Team
 */

import { useState, useEffect, useRef } from 'react';

/** Configuration options for the `useCountUp` hook. */
export interface UseCountUpOptions {
  /** Starting initial value (default: 0). */
  start?: number;
  /** Target final value to count up to. */
  end: number;
  /** Animation duration in milliseconds (default: 1600ms). */
  duration?: number;
  /** Decimal precision places (default: 2). */
  decimals?: number;
  /** Whether animation triggers automatically on component mount (default: true). */
  startOnMount?: boolean;
  /** Optional delay before initiating count-up in ms. */
  delay?: number;
  /** Optional callback fired when target value is reached. */
  onComplete?: () => void;
}

/** Return object containing animated numerical value and execution controls. */
export interface UseCountUpReturn {
  /** Current interpolated numeric value. */
  value: number;
  /** Current value formatted to the configured decimal places. */
  formatted: string;
  /** Imperative function to trigger/restart the animation. */
  startAnimation: () => void;
  /** Whether the animation is currently progressing. */
  isAnimating: boolean;
  /** Whether the animation has concluded and reached the final value. */
  isSettled: boolean;
}

/**
 * Animates a numeric transition from `start` to `end` with an exponential easing curve.
 *
 * @param options Configuration parameters for the count-up behavior.
 * @return State object containing the animated value and control methods.
 */
export function useCountUp({
  start = 0,
  end,
  duration = 1600,
  decimals = 2,
  startOnMount = true,
  delay = 0,
  onComplete,
}: UseCountUpOptions): UseCountUpReturn {
  const [value, setValue] = useState<number>(start);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    setIsAnimating(true);
    setIsSettled(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Refined Expo-out with smooth tail: 1 - Math.pow(2, -10 * progress)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = start + (end - start) * easeOut;

        setValue(currentVal);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setValue(end);
          setIsAnimating(false);
          setIsSettled(true);
          if (onComplete) {
            onComplete();
          }
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }, delay);
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [end, startOnMount, delay]);

  return {
    value: Number(value.toFixed(decimals)),
    formatted: value.toFixed(decimals),
    startAnimation,
    isAnimating,
    isSettled,
  };
}

