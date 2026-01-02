import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, X } from 'lucide-react';

export const DemoVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // TODO: Replace this placeholder URL with your actual demo video
  const videoUrl = "https://www.youtube.com/embed/7yagw55U_bE";

  return (
    <section 
      id="demo-video" 
      className="py-24 bg-neutral-950 relative overflow-hidden"
      aria-labelledby="demo-video-heading"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6"
          >
            <Volume2 size={14} className="text-accent" aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">See It In Action</span>
          </motion.div>
          
          <motion.h2
            id="demo-video-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Watch How Autoquill <br className="hidden sm:block" />
            Handles Real Calls
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            See actual call recordings from our AI receptionist booking appointments, 
            answering questions, and qualifying leads for businesses just like yours.
          </motion.p>
        </header>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl group">
            
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
                {/* Placeholder Thumbnail - Replace with actual video thumbnail */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM1MjUyNTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EZW1vIFZpZGVvIFRodW1ibmFpbDwvdGV4dD48L3N2Zz4=')] bg-cover bg-center opacity-20" />
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-accent/20 rounded-full animate-ping" />
                  <div className="absolute w-24 h-24 bg-accent/30 rounded-full animate-pulse" />
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-white transition-all hover:scale-110 shadow-[0_0_40px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_60px_rgba(139,92,246,0.7)]"
                  aria-label="Play demo video"
                >
                  <Play size={32} className="ml-1" fill="white" aria-hidden="true" />
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                  2:14
                </div>

                {/* Info Badge */}
                <div className="absolute top-6 left-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                  🔊 Real Call Recording
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative w-full h-full">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title="Autoquill AI Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black text-white transition-all z-10"
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
        </motion.div>

        {/* Key Points Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-2">&lt;500ms</div>
            <div className="text-sm text-neutral-400">Response Time</div>
          </div>
          <div className="text-center p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-neutral-400">Natural Voice</div>
          </div>
          <div className="text-center p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-neutral-400">Always Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-400 mb-6">
            Ready to see how it works for your business?
          </p>
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Book Your Personal Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

