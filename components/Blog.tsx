import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why Voicemail is Dead: The Rise of AI Receptionists",
    excerpt: "Customers today expect instant answers. Discover how voice AI is replacing traditional voicemail and recovering lost revenue for small businesses.",
    date: "Oct 12, 2024",
    author: "Adrian",
    category: "Industry Trends",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Integrate Autoquill with HubSpot",
    excerpt: "A step-by-step guide to syncing your voice agent with your CRM. Ensure every call is logged and every lead is tracked automatically.",
    date: "Oct 08, 2024",
    author: "Tech Team",
    category: "Tutorials",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Case Study: Saving 20 Hours a Week for Oakwood Dental",
    excerpt: "Dr. Jenkins was spending 2 hours a day returning calls. See how implementing an AI agent transformed her practice efficiency.",
    date: "Sep 28, 2024",
    author: "Sarah",
    category: "Case Studies",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "The Ethics of AI Voice Agents",
    excerpt: "Transparency is key. How to disclose AI usage to your customers while maintaining a personal and human-like connection.",
    date: "Sep 15, 2024",
    author: "Adrian",
    category: "Thought Leadership",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Top 5 Features to Look for in a Voice Agent",
    excerpt: "Not all AI is created equal. From latency to interruption handling, here is what matters most for a natural conversation.",
    date: "Sep 02, 2024",
    author: "Product Team",
    category: "Product",
    readTime: "7 min read"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative bg-neutral-950">
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6"
          >
             <span className="text-xs font-medium text-accent tracking-wide uppercase">The Autoquill Blog</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Insights on Voice AI <br /> & Automation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400"
          >
            News, tutorials, and strategies to help you build the automated workforce of the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="group bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Abstract Cover Image */}
              <div className="h-48 w-full bg-neutral-900 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950" />
                 {/* Decorative shapes based on index to vary them */}
                 <div className={`absolute top-0 right-0 w-32 h-32 bg-accent/${10 + (idx * 5)} rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-accent/20 transition-colors`} />
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                 
                 <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
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

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-400">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-neutral-400">{post.author}</span>
                    </div>
                    <button className="text-sm font-medium text-white flex items-center gap-1 group/btn hover:text-accent transition-colors">
                        Read more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <button className="px-6 py-3 border border-white/10 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                 View All Articles
             </button>
        </div>
      </div>
    </div>
  );
};