/**
 * @fileoverview Type definitions and data interfaces for Elham Rivaz's Portfolio.
 * Follows Google TypeScript Style Guide standards with explicit interfaces and strict types.
 * @author Elham Rivaz & AI Studio Team
 */

/** Supported language locale codes: English, Persian (Farsi), and German. */
export type LanguageCode = 'en' | 'fa' | 'de';

/** Supported theme color modes. */
export type ThemeMode = 'light' | 'dark';

/**
 * Personal profile details and performance metrics.
 */
export interface ProfileData {
  /** Full name in English. */
  name: string;
  /** Full name in Persian script. */
  nameFa: string;
  /** Professional title in English. */
  title: string;
  /** Professional title in Persian. */
  titleFa: string;
  /** Professional title in German. */
  titleDe: string;
  /** Primary contact email address. */
  email: string;
  /** Geographic location in English. */
  location: string;
  /** Geographic location in Persian. */
  locationFa: string;
  /** Geographic location in German. */
  locationDe: string;
  /** Direct GitHub profile URL. */
  githubUrl: string;
  /** Direct LinkedIn profile URL. */
  linkedinUrl: string;
  /** Key quantifiable achievement and benchmark metrics. */
  metrics: {
    /** Baseline model accuracy percentage (e.g. 58.57). */
    baselineAccuracy: number;
    /** Improved model accuracy percentage (e.g. 97.86). */
    improvedAccuracy: number;
    /** Academic Grade Point Average (e.g. 19.20/20). */
    gpa: string;
    /** Academic graduation class ranking (e.g. #1 / 72+). */
    rank: string;
  };
}

/**
 * Category grouping for technical skills.
 */
export interface SkillCategory {
  /** Unique category identifier. */
  id: string;
  /** Localization key for category label. */
  labelKey: string;
  /** List of technologies or skills. */
  skills: string[];
}

/**
 * Professional work experience entry.
 */
export interface ExperienceEntry {
  /** Unique identifier for the experience item. */
  id: string;
  /** Localization key for role title. */
  roleKey: string;
  /** Localization key for employer or lab organization. */
  organizationKey: string;
  /** Localization key for duration/timeframe. */
  periodKey: string;
  /** Localization key for location. */
  locationKey: string;
  /** Array of localization keys for achievement bullet points. */
  bulletsKey: string[];
  /** Array of technology stack items used in this role. */
  techStack: string[];
  /** Whether this is a current active position. */
  current?: boolean;
}

/**
 * Portfolio project entry.
 */
export interface ProjectEntry {
  /** Unique project identifier. */
  id: string;
  /** Localization key for project title. */
  titleKey: string;
  /** Localization key for project category. */
  categoryKey: string;
  /** Localization key for brief summary. */
  descriptionKey: string;
  /** Array of localization keys for bullet highlights. */
  highlightsKey: string[];
  /** Technology stack used in the project. */
  techStack: string[];
  /** Benchmark accuracy or performance leap (e.g. "97.86%"). */
  accuracy?: string;
  /** GitHub repository star count if applicable. */
  stars?: number;
  /** Direct URL to GitHub repository. */
  githubUrl?: string;
  /** Direct live demo or interactive deployment URL. */
  demoUrl?: string;
  /** Whether this project is featured in hero/top highlights. */
  featured?: boolean;
}

/**
 * Academic education milestone.
 */
export interface EducationEntry {
  /** Unique identifier. */
  id: string;
  /** Localization key for degree name. */
  degreeKey: string;
  /** Localization key for university name. */
  institutionKey: string;
  /** Localization key for study duration. */
  periodKey: string;
  /** Final GPA string (e.g. "19.20 / 20.00"). */
  gpa: string;
  /** Localization key for academic rank. */
  rankKey: string;
  /** Array of localization keys for honors or special recognitions. */
  awardsKey: string[];
}

/**
 * Academic and competitive honor/award.
 */
export interface HonorEntry {
  /** Unique identifier. */
  id: string;
  /** Localization key for award title. */
  titleKey: string;
  /** Localization key for issuing institution. */
  issuerKey: string;
  /** Localization key for issuance date. */
  dateKey: string;
  /** Localization key for detailed award description. */
  descriptionKey: string;
  /** Optional badge text or identifier. */
  badge?: string;
}

/**
 * Professional certification record.
 */
export interface CertificationEntry {
  /** Unique identifier. */
  id: string;
  /** Localization key for certification name. */
  nameKey: string;
  /** Localization key for issuing authority. */
  issuerKey: string;
  /** Localization key for date of certification. */
  dateKey: string;
  /** Verification or credential link. */
  credentialUrl?: string;
  /** Skills validated by this certificate. */
  skills?: string[];
}

/**
 * Academic research project or publication entry.
 */
export interface ResearchEntry {
  /** Unique identifier. */
  id: string;
  /** Localization key for research project title. */
  titleKey: string;
  /** Localization key for supervising professor/lab. */
  supervisorKey: string;
  /** Localization key for timeframe. */
  dateKey: string;
  /** Localization key for abstract or description. */
  descriptionKey: string;
  /** List of primary research focus areas. */
  focusAreas: string[];
}

/**
 * Blog article or milestone post representation.
 */
export interface BlogPost {
  /** Unique post identifier. */
  id: string;
  /** URL slug for the article. */
  slug: string;
  /** Localization key for post title. */
  titleKey: string;
  /** Localization key for post excerpt. */
  excerptKey: string;
  /** Localization key for post category. */
  categoryKey: string;
  /** Publication date string. */
  date: string;
  /** Localization key for estimated reading time. */
  readTimeKey: string;
  /** Cover media visual format. */
  coverType: 'video' | 'gradient' | 'image';
  /** Tailwind gradient CSS classes for cover background. */
  coverGradient: string;
  /** Cover image or video URL path. */
  coverMediaUrl?: string;
  /** Primary accent color hex code. */
  accentColor: string;
  /** List of tags for categorization and search. */
  tags: string[];
  /** Whether the post is pinned or featured. */
  featured?: boolean;
  /** Whether this post represents the Switzerland Academic Vision post. */
  isDreamPost?: boolean;
  /** Whether this post represents the LinkedIn Graduation milestone spotlight. */
  isLinkedInPost?: boolean;
  /** Whether this post represents the Harvard CS50x Certificate milestone showcase. */
  isCertificatePost?: boolean;
  /** Direct URL to certificate PDF document. */
  certificatePdfUrl?: string;
  /** Direct URL to certificate preview image. */
  certificateImageUrl?: string;
  /** Direct LinkedIn post URL if applicable. */
  linkedinUrl?: string;
  /** Localization key for dream badge label. */
  dreamBadgeKey?: string;
  /** Localization key for dream tracker subtitle. */
  dreamTrackerKey?: string;
  /** Interactive gallery items associated with this post. */
  gallery?: {
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
  }[];
  /** Optional interactive code snippet block. */
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  /** Localization key for highlighted pull quote. */
  pullQuoteKey?: string;
  /** Structured body section keys for multilingual rendering. */
  sectionsKey: {
    headingKey: string;
    contentKey: string;
  }[];
}

