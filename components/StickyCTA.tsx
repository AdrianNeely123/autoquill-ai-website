import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles, X } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-0 left-0 right-0 z-[9998] bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          role="banner"
        >
          <div className="container mx-auto px-4 py-3 max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              
              {/* Left: Message */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-xs font-semibold text-accent">Limited Offer</span>
                </div>
                <p className="text-sm md:text-base text-white font-medium truncate">
                  <span className="hidden md:inline">Stop losing revenue to missed calls. </span>
                  <span className="font-bold text-accent">Get your free FAQ agent</span>
                  <span className="hidden lg:inline"> in 2 minutes</span>
                </p>
              </div>

              {/* Right: CTAs */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-all"
                  aria-label="Book a demo call"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span className="hidden md:inline">Book Demo</span>
                </button>

                <button
                  onClick={() => {
                    const freeAgentSection = document.getElementById('free-agent-section');
                    if (freeAgentSection) {
                      freeAgentSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Navigate to free agent page
                      window.location.href = '#free-agent';
                    }
                  }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-accent hover:bg-accent-dark text-white rounded-lg text-sm font-bold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all whitespace-nowrap"
                  aria-label="Get free FAQ agent"
                >
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Get Free Agent</span>
                </button>

                <button
                  onClick={handleDismiss}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

