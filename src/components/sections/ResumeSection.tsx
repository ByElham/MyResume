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
  Eye,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { WindowChrome } from '../ui/WindowChrome';
import { SkillPill } from '../ui/SkillPill';
import { MixedText } from '../ui/MixedText';
import { assetPath } from '../../utils/assetPath';

export const ResumeSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
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

  const handleView = () => {
    // Open the resume PDF in a new browser tab for inline viewing (no download).
    window.open(assetPath('/documents/Elham-Rivaz-Resume.pdf'), '_blank', 'noopener,noreferrer');
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
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
            <motion.div whileHover="hover">
              <Button
                variant="outline"
                size="sm"
                onClick={handleView}
                icon={
                  <motion.span
                    className="inline-flex"
                    variants={{ hover: { scaleY: [1, 0.1, 1] } }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </motion.span>
                }
                className="!border-emerald-500/30 hover:!border-emerald-500/60 !text-emerald-700 dark:!text-emerald-400 hover:!bg-emerald-500/10"
              >
                View
              </Button>
            </motion.div>
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
              <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>verified_academic_record.pdf</span>
              </div>
            }
            className="border-indigo-500/20 shadow-2xl"
          >
            <article className="space-y-12 text-[var(--text-secondary)]">
              {/* Resume Header Banner */}
              <div className="border-b border-[var(--border-subtle)] pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--text-primary)]">
                      {language === 'fa' ? profileData.nameFa : profileData.name}
                    </h1>
                    <p className="text-sm font-mono text-indigo-700 dark:text-indigo-400 font-bold mt-1">
                      {profileData.title}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-[var(--text-tertiary)] font-medium space-y-1 text-left md:text-right rtl:text-right rtl:md:text-left">
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
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <FileText className="w-4 h-4" />
                  <h3>{t.resume.summaryHeading}</h3>
                </div>
                <p className="font-editorial text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  {language === 'fa' ? (
                    <MixedText text={t.resume.summaryText} />
                  ) : (
                    t.resume.summaryText
                  )}
                </p>
              </section>

              {/* 2. Education */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <GraduationCap className="w-4 h-4" />
                  <h3>{t.resume.educationHeading}</h3>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                      {t.resume.educationDetails.degree}
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-tertiary)] font-semibold">
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
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold border border-[var(--border-subtle)]">
                      {t.resume.educationDetails.awardsText}
                    </span>
                  </div>
                </div>
              </section>

              {/* 3. Honors & Awards */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <Award className="w-4 h-4" />
                  <h3>{t.resume.honorsHeading}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {t.resume.honors.map((honor, idx) => {
                    const isCs50 =
                      honor.title.includes('Harvard') ||
                      honor.title.includes('CS50') ||
                      honor.desc.includes('Harvard') ||
                      honor.desc.includes('CS50');
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-display font-bold text-sm text-[var(--text-primary)]">
                              {honor.title}
                            </h4>
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-bold shrink-0 border border-indigo-500/20">
                              {honor.date}
                            </span>
                          </div>
                          <p className="text-xs text-indigo-700 dark:text-indigo-400 font-semibold mb-1.5">
                            {honor.issuer}
                          </p>
                          <p className="font-editorial text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                            {language === 'fa' ? <MixedText text={honor.desc} /> : honor.desc}
                          </p>
                        </div>
                        {isCs50 && (
                          <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-end">
                            <a
                              href={assetPath('/documents/Harvard-CS50x-Puzzle-Day-Silver-Medal-2024.pdf')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer group/cert"
                            >
                              <Award className="w-3.5 h-3.5 text-amber-500 group-hover/cert:scale-110 transition-transform" />
                              <span>{t.projects?.viewCertificate || 'View Certificate (PDF)'}</span>
                              <ExternalLink className={`w-3 h-3 transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 4. Research Contributions */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <BookOpen className="w-4 h-4" />
                  <h3>{t.resume.researchHeading}</h3>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-display font-bold text-sm text-[var(--text-primary)]">
                      {t.resume.researchDetails.title}
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-tertiary)] font-semibold">
                      {t.resume.researchDetails.date}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold mb-2">
                    {t.resume.researchDetails.supervisor}
                  </p>
                  <p className="font-editorial text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {language === 'fa' ? (
                      <MixedText text={t.resume.researchDetails.desc} />
                    ) : (
                      t.resume.researchDetails.desc
                    )}
                  </p>
                </div>
              </section>

              {/* 5. Licenses & Certifications */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3>{t.resume.certificationsHeading}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {t.resume.certifications.map((cert, idx) => {
                    const isCs50Cert = cert.name.includes('CS50') || cert.issuer.includes('Harvard');
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)] flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">▪</span>
                          <div className="flex-1">
                            <span className="font-bold text-[var(--text-primary)] block">
                              {cert.name}
                            </span>
                            <span className="text-[var(--text-tertiary)] font-mono text-[11px] font-medium">
                              {cert.issuer} • {cert.date}
                            </span>
                          </div>
                        </div>
                        {isCs50Cert && (
                          <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-end">
                            <a
                              href={assetPath('/documents/Harvard-CS50x-Puzzle-Day-Silver-Medal-2024.pdf')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 group/cert"
                            >
                              <Award className="w-3 h-3 text-amber-500" />
                              <span>{t.projects?.viewCertificate || 'View Certificate (PDF)'}</span>
                              <ExternalLink className={`w-2.5 h-2.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 6. Languages */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-display font-bold text-lg border-b border-[var(--border-subtle)] pb-2">
                  <Languages className="w-4 h-4" />
                  <h3>{t.resume.languagesHeading}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {t.resume.languagesList.map((lang, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-subtle)] text-center"
                    >
                      <span className="font-display font-bold text-sm text-[var(--text-primary)] block mb-0.5">
                        {lang.lang}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-tertiary)] font-semibold">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom Prominent Download CTA */}
              <div id="resume-download" className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
                <div>
                  <p className="text-sm font-display font-bold text-[var(--text-primary)]">
                    Need an offline copy for recruiting or academic evaluation?
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)] font-medium">
                    Formatted and verified with full academic credentials & publications.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <motion.div className="w-full sm:w-auto" whileHover="hover">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleView}
                      icon={
                        <motion.span
                          className="inline-flex"
                          variants={{
                            hover: { scaleY: [1, 0.1, 1] },
                          }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.span>
                      }
                      className="w-full sm:w-auto !border-emerald-500/30 hover:!border-emerald-500/60 !text-emerald-700 dark:!text-emerald-400 hover:!bg-emerald-500/10"
                    >
                      View
                    </Button>
                  </motion.div>
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
              </div>
            </article>
          </WindowChrome>
        </motion.div>
      </div>
    </section>
  );
};
