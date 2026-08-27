/**
 * @fileoverview Custom hook to monitor document-wide scrolling activity.
 * Sets `data-scrolling="true"` on the root document during scroll events
 * and gracefully fades out custom scrollbars after a debounce window.
 * @author Elham Rivaz & AI Studio Team
 */

import { useEffect } from 'react';

/**
 * Monitors global scroll activity and sets a temporary data attribute on `<html>`.
 * Mimics native macOS overlay scrollbar auto-hiding aesthetics.
 *
 * @param timeoutMs Debounce duration in milliseconds before resetting scroll state (default: 1800ms).
 */
export function useScrollbarActivity(timeoutMs: number = 1800): void {
  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (!document.documentElement.dataset.scrolling) {
        document.documentElement.dataset.scrolling = 'true';
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        delete document.documentElement.dataset.scrolling;
        timeoutId = null;
      }, timeoutMs);
    };

    // Capture scrolling on window and all scrollable child elements (like modals/readers)
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      delete document.documentElement.dataset.scrolling;
    };
  }, [timeoutMs]);
}

