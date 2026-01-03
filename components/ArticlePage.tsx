import React, { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { getArticleBySlug } from '../data/articles';
import type { ArticleSlug, Page } from '../types';

// Analytics helper function
const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log(`[Analytics] ${eventName}:`, params);
};

interface ArticlePageProps {
  slug: ArticleSlug;
  onNavigate: (page: Page) => void;
}

// Map internal paths to page names
const internalRoutes: Record<string, Page> = {
  '/free-agent': 'free-agent',
  '/roi': 'home', // ROI section is on home page
  '/blog': 'blog',
  '/': 'home',
};

export const ArticlePage: React.FC<ArticlePageProps> = ({ slug, onNavigate }) => {
  const article = getArticleBySlug(slug);
  const startTimeRef = useRef<number>(Date.now());
  const hasTrackedViewRef = useRef<boolean>(false);
  const scrollDepthRef = useRef<number>(0);

  // Track article view on mount
  useEffect(() => {
    if (article && !hasTrackedViewRef.current) {
      hasTrackedViewRef.current = true;
      startTimeRef.current = Date.now();
      
      trackEvent('article_view', {
        article_slug: slug,
        article_title: article.title,
        article_category: article.category,
        article_author: article.author,
      });

      // Scroll to top when article loads
      window.scrollTo(0, 0);
    }
  }, [slug, article]);

  // Track scroll depth
  useEffect(() => {
    if (!article) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && scrollDepthRef.current < milestone) {
          scrollDepthRef.current = milestone;
          trackEvent('article_scroll_depth', {
            article_slug: slug,
            article_title: article.title,
            scroll_depth: milestone,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, article]);

  // Track time on page when leaving
  useEffect(() => {
    return () => {
      if (article && hasTrackedViewRef.current) {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        trackEvent('article_time_spent', {
          article_slug: slug,
          article_title: article.title,
          time_seconds: timeSpent,
          scroll_depth_reached: scrollDepthRef.current,
        });
      }
    };
  }, [slug, article]);

  // Handle clicks on internal links
  const handleContentClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const href = target.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        const page = internalRoutes[href];
        if (page) {
          onNavigate(page);
          // Scroll to ROI section if that's the target
          if (href === '/roi') {
            setTimeout(() => {
              const roiSection = document.getElementById('roi-calculator');
              if (roiSection) {
                roiSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }
      }
      // External links (mailto:, https://) will work normally
    }
  }, [onNavigate]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-neutral-400 mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const renderContent = (content: string[]) => {
    return content.map((block, index) => {
      // Handle standalone images: ![alt](url) or ![alt](url "caption")
      const imageMatch = block.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
      if (imageMatch) {
        const [, alt, src, caption] = imageMatch;
        return (
          <figure key={index} className="my-8">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {caption && (
              <figcaption className="mt-3 text-center text-sm text-neutral-500 italic">
                {caption}
              </figcaption>
            )}
          </figure>
        );
      }

      // Handle headings
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-white mt-8 mb-3">
            {block.replace('### ', '')}
          </h3>
        );
      }

      // Handle horizontal rules
      if (block === '---') {
        return <hr key={index} className="border-white/10 my-12" />;
      }

      // Handle code blocks
      if (block.startsWith('```')) {
        const codeContent = block.replace(/```\w*\n?/g, '').replace(/```$/, '');
        return (
          <pre key={index} className="bg-neutral-900 border border-white/10 rounded-lg p-4 my-6 overflow-x-auto">
            <code className="text-sm text-neutral-300 font-mono">{codeContent}</code>
          </pre>
        );
      }

      // Handle tables
      if (block.includes('|') && block.includes('---')) {
        const rows = block.split('\n').filter(row => row.trim() && !row.includes('---'));
        const headers = rows[0]?.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        const dataRows = rows.slice(1).map(row => 
          row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
        );

        return (
          <div key={index} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {headers?.map((header, i) => (
                    <th key={i} className="text-left py-3 px-4 text-sm font-semibold text-white">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-white/5">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="py-3 px-4 text-sm text-neutral-400">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Handle lists
      if (block.startsWith('- ') || block.match(/^\d+\./)) {
        const items = block.split('\n');
        const isOrdered = block.match(/^\d+\./);
        const ListTag = isOrdered ? 'ol' : 'ul';
        
        return (
          <ListTag key={index} className={`my-4 space-y-2 ${isOrdered ? 'list-decimal' : 'list-disc'} list-inside`}>
            {items.map((item, i) => {
              const cleanItem = item.replace(/^[-\d.]+\s*/, '');
              return (
                <li key={i} className="text-neutral-400 leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: formatInlineStyles(cleanItem) }} />
                </li>
              );
            })}
          </ListTag>
        );
      }

      // Handle checkboxes
      if (block.includes('- [ ]') || block.includes('- [x]')) {
        const items = block.split('\n');
        return (
          <ul key={index} className="my-4 space-y-2">
            {items.map((item, i) => {
              const isChecked = item.includes('[x]');
              const cleanItem = item.replace(/- \[[ x]\]\s*/, '');
              return (
                <li key={i} className="flex items-start gap-3 text-neutral-400">
                  <span className={`mt-1 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${isChecked ? 'bg-accent border-accent' : 'border-white/20'}`}>
                    {isChecked && <span className="text-white text-xs">✓</span>}
                  </span>
                  <span>{cleanItem}</span>
                </li>
              );
            })}
          </ul>
        );
      }

      // Regular paragraphs
      return (
        <p 
          key={index} 
          className="text-neutral-400 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: formatInlineStyles(block) }}
        />
      );
    });
  };

  const formatInlineStyles = (text: string): string => {
    return text
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`(.+?)`/g, '<code class="bg-neutral-800 px-1.5 py-0.5 rounded text-sm text-accent font-mono">$1</code>')
      // Links
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative bg-neutral-950">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-neutral-400 mb-8">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">
                {article.author.charAt(0)}
              </div>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"
        >
          {article.heroImage ? (
            <>
              <img 
                src={article.heroImage} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl transform -translate-x-10 translate-y-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-white/5">
                  {article.id.toString().padStart(2, '0')}
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none"
          onClick={handleContentClick}
        >
          {renderContent(article.content)}
        </motion.article>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <Share2 size={16} />
              <span className="text-sm font-medium">Share this article</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  trackEvent('article_share', {
                    article_slug: slug,
                    article_title: article.title,
                    platform: 'twitter',
                  });
                  const tweetText = encodeURIComponent(`${article.title} - Great read from @autoquillai`);
                  const tweetUrl = encodeURIComponent(`https://autoquillai.com/#/article/${slug}`);
                  window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`, '_blank');
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </button>
              <button 
                onClick={() => {
                  trackEvent('article_share', {
                    article_slug: slug,
                    article_title: article.title,
                    platform: 'linkedin',
                  });
                  const linkedinUrl = encodeURIComponent(`https://autoquillai.com/#/article/${slug}`);
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${linkedinUrl}`, '_blank');
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Related Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-2">Enjoyed this article?</h3>
          <p className="text-neutral-400 mb-6">
            Explore more insights on voice AI and automation on our blog.
          </p>
          <button
            onClick={() => onNavigate('blog')}
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors"
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

