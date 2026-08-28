import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Briefcase,
  Layers,
  BookOpen,
  FileText,
  Mail,
  ArrowUpRight,
  Sparkles,
  Award,
  ExternalLink,
  X,
  Compass,
  GraduationCap,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SakuraToggle } from '../ui/SakuraToggle';
import { BespokeBrandLogo } from '../ui/BespokeBrandLogo';
import { ArchLinuxLogo } from '../ui/ArchLinuxLogo';
import { SwissFlag } from '../ui/SwissFlag';
import { profileData } from '../../data/profile';
import { ScrollProgressBar } from '../ui/ScrollProgressBar';

export const Navbar: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['about', 'experience', 'projects', 'blog', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 180) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t.nav.about, href: '#about', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: t.nav.experience, href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: t.nav.projects, href: '#projects', icon: <Layers className="w-4 h-4" /> },
    { id: 'blog', label: t.nav.blog, href: '#blog', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'resume', label: t.nav.resume, href: '#resume', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleMobileNavigate = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 shadow-sm'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Avant-Garde Bespoke Brand Logo */}
            <a
              href="#"
              className="group transition-opacity hover:opacity-95 cursor-pointer select-none"
            >
              <BespokeBrandLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/90 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-xs font-ui">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-ui font-semibold rounded-full transition-colors duration-200 select-none ${
                      isActive
                        ? 'text-indigo-700 dark:text-white font-bold'
                        : 'text-neutral-800 hover:text-black dark:text-white/70 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-indigo-500/10 dark:bg-white/15 rounded-full shadow-xs border border-indigo-500/20 dark:border-white/20"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: SakuraToggle + LanguageSwitcher + ThemeToggle + Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <SakuraToggle />
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <ThemeToggle />

              {/* Bespoke Luxury Morphing Hamburger Button */}
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Bespoke Navigation Menu"
                aria-expanded={mobileMenuOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className={`md:hidden relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-md cursor-pointer transition-all duration-200 ${
                  mobileMenuOpen
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 border border-indigo-400'
                    : 'bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/10 text-[#0F1115] dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {/* Top line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 7.5, width: 18 }
                      : { rotate: 0, y: 0, width: 18 }
                  }
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[2px] bg-current rounded-full origin-center"
                />
                {/* Middle line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1, width: 13 }
                  }
                  transition={{ duration: 0.15 }}
                  className="h-[2px] bg-current rounded-full self-start rtl:self-end origin-left rtl:origin-right"
                />
                {/* Bottom line */}
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -7.5, width: 18 }
                      : { rotate: 0, y: 0, width: 18 }
                  }
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[2px] bg-current rounded-full origin-center"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Top Reading Scroll Progress Line */}
        <ScrollProgressBar />
      </header>

      {/* Luxury Bespoke Full-Screen Mobile Drawer Modal (Zero-bug, High-contrast) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[999] md:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Floating Top-Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-3.5 mt-16 max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121216] border border-black/15 dark:border-white/15 shadow-2xl p-5 flex flex-col gap-4 text-[#0F1115] dark:text-white"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold flex items-center gap-1.5">
                    <ArchLinuxLogo size="xs" variant="glow" />
                    <span>Arch Linux</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 text-red-700 dark:text-red-300 font-mono text-xs font-bold">
                    <SwissFlag size="sm" />
                    <span>CH Aspirant</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 text-[#0F1115] dark:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Navigation Grid Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.035 }}
                      onClick={(e) => handleMobileNavigate(e, item.href)}
                      className={`p-3.5 rounded-2xl flex flex-col justify-between gap-3 border transition-all duration-200 cursor-pointer min-h-[82px] ${
                        isActive
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25'
                          : 'bg-neutral-50 dark:bg-white/[0.04] border-black/10 dark:border-white/10 text-[#0F1115] dark:text-white/90 hover:bg-indigo-50/50 hover:border-indigo-300 dark:hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`p-2 rounded-xl ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-black/5 dark:bg-white/5 text-indigo-600 dark:text-indigo-400'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <ArrowUpRight
                          className={`w-4 h-4 ${
                            isActive ? 'text-white' : 'text-[#272A30] dark:text-white/40'
                          }`}
                        />
                      </div>
                      <span className="font-ui font-bold text-xs text-left rtl:text-right">
                        {item.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Quick Contact & Academic Banner */}
              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#272A30] dark:text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Rank #1 • GPA 19.20</span>
                  </span>
                  <span>{profileData.location}</span>
                </div>

                <a
                  href={`mailto:${profileData.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-ui font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-500/25 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.contact.sendMailButton || 'Contact Elham Rivaz'}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

