import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { articles } from '../data/articles';
import type { ArticleSlug, Page } from '../types';

interface BlogProps {
  onArticleClick: (slug: ArticleSlug) => void;
}

export const Blog: React.FC<BlogProps> = ({ onArticleClick }) => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative bg-white">
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-gray-200 shadow-sm mb-6"
          >
             <span className="text-xs font-medium text-purple-700 tracking-wide uppercase">The Autoquill Blog</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Insights on Voice AI <br /> & Automation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            News, tutorials, and strategies to help you build the automated workforce of the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              onClick={() => onArticleClick(post.slug)}
              className="group bg-gray-50/30 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Cover Image */}
              <div className="h-48 w-full bg-gray-50 relative overflow-hidden">
                 {post.heroImage ? (
                   <>
                     <img 
                       src={post.heroImage} 
                       alt={post.title}
                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                   </>
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950" />
                     <div className={`absolute top-0 right-0 w-32 h-32 bg-accent/${10 + (idx * 5)} rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-accent/20 transition-colors`} />
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                   </>
                 )}
                 
                 <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-gray-900 border border-gray-200">
                        {post.category}
                    </span>
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                    </div>
                    <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 flex items-center gap-1 group/btn group-hover:text-purple-700 transition-colors">
                        Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <button className="px-6 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/5 transition-all">
                 View All Articles
             </button>
        </div>
      </div>
    </div>
  );
};