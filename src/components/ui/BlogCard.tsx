import React from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight, Sparkles, Compass, Milestone, Waves } from 'lucide-react';
import { BlogPost } from '../../types';
import { assetPath } from '../../utils/assetPath';
import { useLanguage } from '../../context/LanguageContext';
import { SwissFlag } from './SwissFlag';
import { MixedText } from './MixedText';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (post: BlogPost) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect, featured = false }) => {
  const { t, isRtl, language } = useLanguage();

  const title = (t.blog as any)[post.titleKey] || post.titleKey;
  const excerpt = (t.blog as any)[post.excerptKey] || post.excerptKey;
  const category = (t.blog.categories as any)[post.categoryKey] || post.categoryKey;
  const readTime = (t.blog as any)[post.readTimeKey] || '5 min read';
  const isDream = post.isDreamPost;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl glass-panel window-card-focus cursor-pointer overflow-hidden flex flex-col justify-between ${
        featured
          ? 'md:col-span-2 lg:col-span-3 p-6 sm:p-8 bg-gradient-to-br from-rose-500/[0.04] via-amber-500/[0.03] to-transparent border-rose-500/25 dark:border-rose-500/20'
          : 'p-6 sm:p-7'
      }`}
      onClick={() => onSelect(post)}
    >
      <div>
        {/* Featured Dream Post Hero Header / Cover Media */}
        {featured && isDream ? (
          <div className="mb-6 rounded-xl overflow-hidden relative border border-black/[0.06] dark:border-white/10 h-44 sm:h-52 bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 flex flex-col justify-between p-5 text-white shadow-inner group-hover:shadow-lg transition-shadow">
            {/* Scenic Background Cover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={post.coverMediaUrl || assetPath('/media/blog/03-rhine-falls-waterfall.jpg')}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = assetPath('/media/blog/03-rhine-falls-waterfall.svg');
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
            </div>

            {/* Top Vision Ribbon */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/30 backdrop-blur-md text-white border border-rose-400/40">
                <SwissFlag size="sm" />
                <span>{t.blog.dreamBadge}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/15 backdrop-blur-md text-white/95 border border-white/20">
                <Milestone className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-semibold">{t.blog.dreamTracker}</span>
              </div>
            </div>

            {/* Bottom Media Label */}
            <div className="relative z-10 flex items-center justify-between text-xs text-white/90 font-mono">
              <span className="flex items-center gap-1.5 font-medium">
                <Waves className="w-3.5 h-3.5 text-cyan-300" />
                <span>Rhine Falls & Swiss Research Vision</span>
              </span>
              <span className="text-white/70 text-[11px]">{readTime}</span>
            </div>
          </div>
        ) : post.coverMediaUrl ? (
          <div className="mb-5 rounded-xl overflow-hidden relative border border-black/[0.06] dark:border-white/10 h-36 bg-slate-900 flex flex-col justify-between p-3.5 text-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={post.coverMediaUrl}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (post.isLinkedInPost) {
                    if (target.src.endsWith('.jpeg')) {
                      target.src = assetPath('/media/linkedin/graduation/slide-1.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = assetPath('/media/linkedin/graduation/slide-1.png');
                    } else {
                      target.src = assetPath('/media/linkedin/graduation/slide-1.svg');
                    }
                  } else if (post.coverMediaUrl) {
                    if (target.src.endsWith('.jpeg')) {
                      target.src = post.coverMediaUrl.replace(/\.jpeg$/i, '.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = post.coverMediaUrl.replace(/\.jpg$/i, '.png');
                    } else {
                      target.src = post.coverMediaUrl.replace(/\.(jpg|png|jpeg)$/i, '.svg');
                    }
                  }
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            </div>
            <div className="relative z-10 flex items-center justify-between gap-2">
              {post.isLinkedInPost ? (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0A66C2] text-white flex items-center gap-1 shadow-sm">
                  <span>in</span>
                  <span>LinkedIn Milestone</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-500/30 backdrop-blur-md text-indigo-200 border border-indigo-400/30">
                  {category}
                </span>
              )}
              <span className="text-[11px] font-mono text-white/80 flex items-center gap-1">
                <Clock className="w-3 h-3 opacity-75" />
                {readTime}
              </span>
            </div>
          </div>
        ) : (
          /* Card Header: Category & Read Time (for standard / non-hero cards) */
          <div className="flex items-center justify-between gap-3 text-xs text-[var(--text-tertiary)] font-mono mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {category}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <Clock className="w-3.5 h-3.5 opacity-60" />
              <span>{readTime}</span>
            </div>
          </div>
        )}

        {/* Title */}
        <div className="flex items-start gap-2.5 mb-3">
          {isDream && (
            <div className="shrink-0 mt-1">
              <SwissFlag size="md" />
            </div>
          )}
          <h3
            className={`font-display font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug ${
              featured && isDream
                ? 'font-vogue text-2xl sm:text-3xl md:text-4xl italic font-bold tracking-tight'
                : featured
                ? 'text-xl sm:text-2xl md:text-3xl'
                : 'text-lg sm:text-xl'
            }`}
          >
            {language === 'fa' ? <MixedText text={title} /> : title}
          </h3>
        </div>

        {/* Excerpt - Editorial Serif Typography */}
        <p
          className={`font-editorial text-[var(--text-secondary)] leading-relaxed mb-6 font-normal ${
            featured ? 'text-base sm:text-lg line-clamp-3' : 'text-sm line-clamp-3'
          }`}
        >
          {language === 'fa' ? <MixedText text={excerpt} /> : excerpt}
        </p>

        {/* Dream Tracker Milestone Subtext if Dream Post */}
        {isDream && (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-rose-500/[0.06] dark:bg-rose-500/10 border border-rose-500/20 flex items-center gap-2.5 text-xs text-[var(--text-primary)] dark:text-rose-200">
            <Compass className="w-4 h-4 text-rose-600 shrink-0" />
            <span className="font-semibold">{t.blog.dreamTrackerSub}</span>
          </div>
        )}
      </div>

      {/* Footer: Tags & Read CTA */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, featured ? 5 : 3).map((tag, i) => (
            <span
              key={i}
              className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                isDream && (tag.includes('ETH') || tag.includes('EPFL') || tag.includes('Vision'))
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-semibold'
                  : 'bg-[var(--bg-inset)] text-[var(--text-tertiary)]'
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform whitespace-nowrap">
          <span>{t.blog.readArticle}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
        </div>
      </div>
    </motion.article>
  );
};
