import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Clock,
  Share2,
  Check,
  X,
  Sparkles,
  Quote,
  Code2,
  Compass,
  ExternalLink,
  Image as ImageIcon,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from '../../data/blogPosts';
import { BlogPost } from '../../types';
import { BlogCard } from '../ui/BlogCard';
import { WindowChrome } from '../ui/WindowChrome';
import { SwissFlag } from '../ui/SwissFlag';
import { SwissAspirationCard } from '../ui/SwissAspirationCard';
import { SwissVisionGallery } from '../ui/SwissVisionGallery';
import { LinkedInPostSpotlight } from '../ui/LinkedInPostSpotlight';

export const BlogSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  // Lock body scroll and add Escape key listener when activePost modal is opened
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActivePost(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activePost]);

  const categories = [
    { id: 'all', label: t.blog.categories.all, categoryKey: null },
    { id: 'dream', label: t.blog.categories.dreamCategory, categoryKey: 'dreamCategory' },
    { id: 'cv', label: t.blog.categories.cvCategory, categoryKey: 'cvCategory' },
    { id: 'rag', label: t.blog.categories.ragCategory, categoryKey: 'ragCategory' },
    { id: 'algo', label: t.blog.categories.algoCategory, categoryKey: 'algoCategory' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => {
          const cat = categories.find((c) => c.id === selectedCategory);
          return cat?.categoryKey ? p.categoryKey === cat.categoryKey : true;
        });

  const handleShare = (post: BlogPost) => {
    const url = window.location.href.split('#')[0] + `#blog-${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blog" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.blog.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F1115] dark:text-white mb-4"
          >
            {t.blog.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-[#1A1A1E] dark:text-white/70 max-w-2xl font-editorial font-normal"
          >
            {t.blog.subtitle}
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const isDreamPill = cat.id === 'dream';
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? isDreamPill
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-500/25 dark:bg-rose-500'
                        : 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 dark:bg-indigo-500'
                      : isDreamPill
                      ? 'glass-panel text-rose-700 dark:text-rose-400 hover:border-rose-500/40'
                      : 'glass-panel text-[#0F1115] dark:text-white/70 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {isDreamPill && <SwissFlag size="sm" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Swiss Flight & Academic Destination Card & LinkedIn Milestone Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-10">
          <div className="lg:col-span-7">
            <SwissAspirationCard
              onOpenDreamPost={() => {
                const dreamPost = blogPosts.find((p) => p.isDreamPost) || blogPosts[0];
                setActivePost(dreamPost);
              }}
            />
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full p-5 sm:p-6 rounded-2xl glass-panel border border-indigo-500/25 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.06] via-blue-500/[0.04] to-transparent flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      in
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0A66C2] dark:text-blue-400">
                      LinkedIn Graduation Post
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                    Rank #1 Valedictorian
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-[#0F1115] dark:text-white leading-snug mb-2">
                  {(t.blog as any)?.graduationPost || 'Bachelor Graduation & Rank #1 Valedictorian: 4 Years of Dedication'}
                </h3>
                <p className="font-editorial text-xs sm:text-sm text-[#1A1A1E] dark:text-white/75 leading-relaxed line-clamp-3 mb-4">
                  {(t.blog as any)?.graduationExcerpt || 'Officially completed Bachelor’s degree in Computer Engineering, ranking first among 72+ students.'}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400 font-semibold">
                  3 Slides • Verified Post
                </span>
                <button
                  onClick={() => {
                    const post = blogPosts.find((p) => p.isLinkedInPost) || blogPosts[1];
                    setActivePost(post);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-500/20 cursor-pointer"
                >
                  <span>{(t.linkedinPost as any)?.headlineTitle || 'View 3 Slides'}</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <BlogCard
              key={post.id}
              post={post}
              featured={post.featured || (idx === 0 && selectedCategory === 'all')}
              onSelect={(p) => setActivePost(p)}
            />
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal (macOS window style with sticky top access) */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-start min-h-screen"
            onClick={() => setActivePost(null)}
          >
            {/* If LinkedIn Post, show the dedicated LinkedIn Spotlight component */}
            {activePost.isLinkedInPost ? (
              <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 15 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl my-auto py-6"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedInPostSpotlight
                  isModal={true}
                  onClose={() => setActivePost(null)}
                  postUrl={activePost.linkedinUrl || 'https://lnkd.in/p/du8nF6yC'}
                />
              </motion.div>
            ) : (
              /* Main Standard Window Card */
              <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 15 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl flex flex-col shadow-2xl rounded-2xl my-auto py-6"
                onClick={(e) => e.stopPropagation()}
              >
                <WindowChrome
                  title={`note://${activePost.slug}.md`}
                  onClose={() => setActivePost(null)}
                  className="w-full flex flex-col border border-black/15 dark:border-white/10 bg-white dark:bg-[#151517] shadow-2xl"
                  contentClassName="p-0 flex flex-col"
                  actions={
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(activePost)}
                        className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-neutral-800 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                        title={copied ? t.blog.linkCopied : t.blog.shareArticle}
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setActivePost(null)}
                        className="p-1.5 rounded-lg bg-black/[0.06] hover:bg-red-500 hover:text-white dark:bg-white/10 dark:hover:bg-red-500 text-neutral-800 dark:text-white transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold px-2.5"
                        title="Close (Esc)"
                      >
                        <X className="w-4 h-4" />
                        <span className="hidden sm:inline text-[11px] font-mono">Esc</span>
                      </button>
                    </div>
                  }
                >
                  <div className="p-5 sm:p-7 md:p-9 lg:p-10 space-y-6 sm:space-y-8 bg-white dark:bg-[#151517]">
                    {/* Article Meta Header */}
                    <div className="border-b border-black/[0.08] dark:border-white/10 pb-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#272A30] dark:text-white/50 mb-4 font-semibold">
                        {activePost.isDreamPost ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-500/15 text-rose-700 dark:text-rose-400 font-bold border border-rose-500/30">
                            <SwissFlag size="sm" />
                            <span>{t.blog.dreamBadge}</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-bold border border-indigo-500/20">
                            {(t.blog.categories as any)[activePost.categoryKey] || activePost.categoryKey}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 opacity-75" />
                          {(t.blog as any)[activePost.readTimeKey] || '5 min read'}
                        </span>
                        <span>•</span>
                        <span>By Elham Rivaz</span>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        {activePost.isDreamPost && (
                          <div className="shrink-0 mt-1 sm:mt-2">
                            <SwissFlag size="lg" />
                          </div>
                        )}
                        <h1 className={`text-2xl sm:text-3xl md:text-4xl text-[#0F1115] dark:text-white leading-tight ${
                          activePost.isDreamPost ? 'font-vogue italic font-bold tracking-tight' : 'font-display font-extrabold'
                        }`}>
                          {(t.blog as any)[activePost.titleKey] || activePost.titleKey}
                        </h1>
                      </div>

                      <p className="font-editorial text-base sm:text-lg md:text-xl text-[#1A1A1E] dark:text-white/85 leading-relaxed max-w-4xl font-normal">
                        {(t.blog as any)[activePost.excerptKey] || activePost.excerptKey}
                      </p>

                      {/* Dream Tracker Ribbon in Header if Dream Post */}
                      {activePost.isDreamPost && (
                        <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-transparent border border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold">
                            <Compass className="w-4 h-4 text-rose-600" />
                            <span>{t.blog.dreamTracker}</span>
                          </div>
                          <div className="text-[#272A30] dark:text-white/70 font-mono text-[11px] font-bold">
                            {t.blog.dreamTrackerSub}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pull Quote Highlight */}
                    {activePost.pullQuoteKey && (t.blog as any)[activePost.pullQuoteKey] && (
                      <div className={`p-5 sm:p-6 rounded-2xl border-l-4 rtl:border-l-0 rtl:border-r-4 flex items-start gap-3.5 ${
                        activePost.isDreamPost
                          ? 'bg-rose-500/[0.06] dark:bg-rose-500/10 border-rose-500'
                          : 'bg-indigo-500/[0.06] dark:bg-indigo-500/10 border-indigo-500'
                      }`}>
                        <Quote className={`w-6 h-6 shrink-0 mt-0.5 ${
                          activePost.isDreamPost ? 'text-rose-600' : 'text-indigo-600'
                        }`} />
                        <p className="font-editorial text-base sm:text-lg italic text-[#0F1115] dark:text-neutral-200 leading-relaxed font-medium">
                          "{(t.blog as any)[activePost.pullQuoteKey]}"
                        </p>
                      </div>
                    )}

                    {/* Swiss Airline & Academic Gateway Card in Dream Post */}
                    {activePost.isDreamPost && (
                      <SwissAspirationCard />
                    )}

                    {/* High-Resolution Interactive Vision Board Gallery Grid for Switzerland Dream Post */}
                    {activePost.isDreamPost && activePost.gallery && (
                      <SwissVisionGallery items={activePost.gallery as any} />
                    )}

                    {/* Technical Architectural Diagram for Tech Posts */}
                    {!activePost.isDreamPost && activePost.coverMediaUrl && (
                      <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-950 p-2 sm:p-4 shadow-xl">
                        <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-neutral-400 border-b border-white/10 mb-2">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Architectural Pipeline & Model Flow</span>
                          </div>
                          <span className="text-[11px] text-indigo-400 font-semibold">SVG Vector Diagram</span>
                        </div>
                        <div className="relative rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                          <img
                            src={activePost.coverMediaUrl}
                            alt="Technical Diagram"
                            className="w-full max-h-[380px] object-contain rounded-lg"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    )}

                    {/* Code Snippet Highlight if available */}
                    {activePost.codeSnippet && (
                      <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-950 text-neutral-200">
                        <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                          <div className="flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{activePost.codeSnippet.filename}</span>
                          </div>
                          <span className="uppercase text-[10px] text-neutral-500">{activePost.codeSnippet.language}</span>
                        </div>
                        <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-indigo-200/90">
                          <code>{activePost.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Structured Body Sections */}
                    <div className="space-y-6 text-[#1A1A1E] dark:text-white/85 leading-relaxed text-base sm:text-lg max-w-4xl">
                      {activePost.sectionsKey.map((section, idx) => (
                        <div key={idx} className="space-y-2.5">
                          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0F1115] dark:text-white flex items-center gap-2">
                            <span className={`font-mono text-xs font-bold ${activePost.isDreamPost ? 'text-rose-600' : 'text-indigo-600 dark:text-indigo-400'}`}>
                              #0{idx + 1}
                            </span>
                            <span>{(t.blog as any)[section.headingKey] || section.headingKey}</span>
                          </h2>
                          <p className="font-editorial leading-relaxed text-[#1A1A1E] dark:text-white/80 font-normal">
                            {(t.blog as any)[section.contentKey] || section.contentKey}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tags & Action Footer */}
                    <div className="pt-6 border-t border-black/[0.08] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {activePost.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`font-mono text-xs px-2.5 py-1 rounded ${
                              activePost.isDreamPost && (tag.includes('ETH') || tag.includes('EPFL') || tag.includes('Vision'))
                                ? 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/20 font-bold'
                                : 'bg-black/[0.05] dark:bg-white/5 text-[#272A30] dark:text-white/60 font-semibold'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActivePost(null)}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0F1115] text-white dark:bg-white dark:text-[#0F1115] hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                      >
                        <X className="w-4 h-4" />
                        <span>{t.blog.backToAll}</span>
                      </button>
                    </div>
                  </div>
                </WindowChrome>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

