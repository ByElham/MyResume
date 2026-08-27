import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  FileText,
  Printer,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Languages,
  BookOpen,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { WindowChrome } from '../ui/WindowChrome';
import { SkillPill } from '../ui/SkillPill';
import { assetPath } from '../../utils/assetPath';

export const ResumeSection: React.FC = () => {
  const { t } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger download of the actual resume PDF file (served from /public/documents).
    const link = document.createElement('a');
    link.href = assetPath('/documents/Elham-Rivaz-Resume.pdf');
    link.download = 'Elham-Rivaz-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
    <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
    {t.resume.tag}
    </div>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
    {t.resume.title}
    </h2>
    </motion.div>

    {/* Top Action Buttons */}
    <div className="flex items-center gap-2.5 no-print">
    <Button
    variant="outline"
    size="sm"
    onClick={handlePrint}
    icon={<Printer className="w-3.5 h-3.5" />}
    >
    Print
    </Button>
    <Button
    variant="primary"
    size="sm"
    onClick={handleDownload}
    icon={downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
    >
    {downloaded ? 'Saved!' : 'Download'}
    </Button>
    </div>
    </div>

    {/* Long-Form Post Inside macOS Floating Window */}
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
    <WindowChrome
    title={t.resume.windowTitle}
    actions={
      <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
      <span className="w-2 h-2 rounded-full bg-emerald-500" />
      <span>verified_academic_record.pdf</span>
      </div>
    }
    className="border-indigo-500/20 shadow-2xl"
    >
    <article className="space-y-12 text-[#1A1A1E] dark:text-neutral-200">
    {/* Resume Header Banner */}
    <div className="border-b border-black/10 dark:border-white/[0.08] pb-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
    <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F1115] dark:text-white">
    {profileData.name}
    </h1>
    <p className="text-sm font-mono text-indigo-700 dark:text-indigo-400 font-bold mt-1">
    {profileData.title}
    </p>
    </div>

    <div className="text-xs font-mono text-[#272A30] dark:text-neutral-400 font-medium space-y-1 text-left md:text-right rtl:text-right rtl:md:text-left">
    <p>{profileData.email}</p>
    <p>{profileData.location}</p>
    <p className="text-indigo-700 dark:text-indigo-400 font-bold">
    GPA: 19.20 / 20.0 • Rank #1 / 72+
    </p>
    </div>
    </div>
    </div>

    {/* 1. Professional Summary */}
    <section className="space-y-3">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <FileText className="w-4 h-4" />
    <h3>{t.resume.summaryHeading}</h3>
    </div>
    <p className="font-editorial text-base sm:text-lg text-[#1A1A1E] dark:text-neutral-300 leading-relaxed font-normal">
    {t.resume.summaryText}
    </p>
    </section>

    {/* 2. Education */}
    <section className="space-y-4">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <GraduationCap className="w-4 h-4" />
    <h3>{t.resume.educationHeading}</h3>
    </div>

    <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
    <h4 className="font-display font-bold text-base text-[#0F1115] dark:text-white">
    {t.resume.educationDetails.degree}
    </h4>
    <span className="font-mono text-xs text-[#272A30] dark:text-neutral-400 font-semibold">
    {t.resume.educationDetails.period}
    </span>
    </div>

    <p className="text-sm text-indigo-700 dark:text-indigo-400 font-bold mb-3">
    {t.resume.educationDetails.institution}
    </p>

    <div className="flex flex-wrap gap-2 text-xs font-mono">
    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/20">
    {t.resume.educationDetails.gpaText}
    </span>
    <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 font-bold border border-indigo-500/20">
    {t.resume.educationDetails.rankText}
    </span>
    <span className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#0F1115] dark:text-neutral-300 font-semibold border border-black/10">
    {t.resume.educationDetails.awardsText}
    </span>
    </div>
    </div>
    </section>

    {/* 3. Honors & Awards */}
    <section className="space-y-4">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <Award className="w-4 h-4" />
    <h3>{t.resume.honorsHeading}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
    {t.resume.honors.map((honor, idx) => (
      <div
      key={idx}
      className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 flex flex-col justify-between"
      >
      <div>
      <div className="flex items-start justify-between gap-2 mb-1">
      <h4 className="font-display font-bold text-sm text-[#0F1115] dark:text-white">
      {honor.title}
      </h4>
      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-bold shrink-0 border border-indigo-500/20">
      {honor.date}
      </span>
      </div>
      <p className="text-xs text-indigo-700 dark:text-indigo-400 font-semibold mb-1.5">
      {honor.issuer}
      </p>
      <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-neutral-400 leading-relaxed font-normal">
      {honor.desc}
      </p>
      </div>
      </div>
    ))}
    </div>
    </section>

    {/* 4. Research Contributions */}
    <section className="space-y-3">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <BookOpen className="w-4 h-4" />
    <h3>{t.resume.researchHeading}</h3>
    </div>

    <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
    <h4 className="font-display font-bold text-sm text-[#0F1115] dark:text-white">
    {t.resume.researchDetails.title}
    </h4>
    <span className="font-mono text-xs text-[#272A30] dark:text-neutral-400 font-semibold">
    {t.resume.researchDetails.date}
    </span>
    </div>
    <p className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold mb-2">
    {t.resume.researchDetails.supervisor}
    </p>
    <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-neutral-400 leading-relaxed font-normal">
    {t.resume.researchDetails.desc}
    </p>
    </div>
    </section>

    {/* 5. Licenses & Certifications */}
    <section className="space-y-4">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <CheckCircle2 className="w-4 h-4" />
    <h3>{t.resume.certificationsHeading}</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    {t.resume.certifications.map((cert, idx) => (
      <div
      key={idx}
      className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 flex items-start gap-2"
      >
      <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">▪</span>
      <div className="flex-1">
      <span className="font-bold text-[#0F1115] dark:text-white block">
      {cert.name}
      </span>
      <span className="text-[#272A30] dark:text-neutral-400 font-mono text-[11px] font-medium">
      {cert.issuer} • {cert.date}
      </span>
      </div>
      </div>
    ))}
    </div>
    </section>

    {/* 6. Languages */}
    <section className="space-y-4">
    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-black/10 dark:border-white/5 pb-2">
    <Languages className="w-4 h-4" />
    <h3>{t.resume.languagesHeading}</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {t.resume.languagesList.map((lang, idx) => (
      <div
      key={idx}
      className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 text-center"
      >
      <span className="font-display font-bold text-sm text-[#0F1115] dark:text-white block mb-0.5">
      {lang.lang}
      </span>
      <span className="text-xs font-mono text-[#272A30] dark:text-neutral-400 font-semibold">
      {lang.level}
      </span>
      </div>
    ))}
    </div>
    </section>

    {/* Bottom Prominent Download CTA */}
    <div id="resume-download" className="pt-8 border-t border-black/10 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
    <div>
    <p className="text-sm font-display font-bold text-[#0F1115] dark:text-white">
    Need an offline copy for recruiting or academic evaluation?
    </p>
    <p className="text-xs text-[#272A30] dark:text-neutral-400 font-medium">
    Formatted and verified with full academic credentials & publications.
    </p>
    </div>

    <Button
    variant="primary"
    size="lg"
    onClick={handleDownload}
    icon={downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
    className="w-full sm:w-auto"
    >
    {downloaded ? t.resume.downloadSuccess : t.resume.downloadButton}
    </Button>
    </div>
    </article>
    </WindowChrome>
    </motion.div>
    </div>
    </section>
  );
};
