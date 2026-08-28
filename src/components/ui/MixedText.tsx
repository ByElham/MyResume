/**
 * @fileoverview Renders Persian text with automatic Latin font wrapping.
 * Isolates Latin terms, acronyms, grades, and numeric values inside a span
 * with `font-body` (Inter) and `dir="ltr"` to ensure typographic integrity.
 */
import React, { useMemo } from 'react';

interface MixedTextProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

// Matches sequences of Latin letters, numbers, punctuation, grades (e.g., 19.20, #1, 72+)
const LATIN_SEGMENT_REGEX = /([a-zA-Z0-9\-_+.:%/\(\)\[\]\{\}@#&*#]+)/g;

export const MixedText: React.FC<MixedTextProps> = ({ children, text, className = '' }) => {
  const content = typeof children === 'string' ? children : text || '';

  const nodes = useMemo(() => {
    if (!content) return null;
    const segments = content.split(LATIN_SEGMENT_REGEX);
    return segments.map((segment, index) => {
      if (/^[a-zA-Z0-9\-_+.:%/\(\)\[\]\{\}@#&*#]+$/.test(segment)) {
        return (
          <span key={index} dir="ltr" className="font-body inline-block mx-0.5 tracking-normal">
            {segment}
          </span>
        );
      }
      return <React.Fragment key={index}>{segment}</React.Fragment>;
    });
  }, [content]);

  return <span className={className}>{nodes}</span>;
};
