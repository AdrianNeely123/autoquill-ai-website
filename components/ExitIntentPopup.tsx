import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingDown, ArrowRight } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasShownRef = useRef(false);
  const timeOnPageRef = useRef(0);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) {
      hasShownRef.current = true;
      return;
    }

    // Track time on page
    const timeInterval = setInterval(() => {
      timeOnPageRef.current += 1;
    }, 1000);

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      maxScrollDepth = Math.max(maxScrollDepth, scrollPercentage);
    };

    // Exit intent handler
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if:
      // 1. Mouse leaves from the TOP (exit intent)
      // 2. User has scrolled at least 30% (engaged)
      // 3. Been on page for at least 30 seconds
      // 4. Popup hasn't been shown yet
      if (
        e.clientY <= 5 && 
        maxScrollDepth >= 30 &&
        timeOnPageRef.current >= 30 && 
        !hasShownRef.current
      ) {
        hasShownRef.current = true;
        sessionStorage.setItem('exitPopupShown', 'true');
        setIsVisible(true);
      }
    };

    // Alternative trigger: After 60 seconds if deeply engaged
    const deepEngagementTimer = setTimeout(() => {
      if (maxScrollDepth >= 50 && !hasShownRef.current) {
        hasShownRef.current = true;
        sessionStorage.setItem('exitPopupShown', 'true');
        setIsVisible(true);
      }
    }, 60000); // 60 seconds

    document.addEventListener('scroll', handleScroll);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(timeInterval);
      clearTimeout(deepEngagementTimer);
      document.removeEventListener('scroll', handleScroll);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
            onClick={() => setIsVisible(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
            role="dialog"
            aria-labelledby="exit-popup-heading"
            aria-modal="true"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg pointer-events-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>

              {/* Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-red-500 via-accent to-red-500" aria-hidden="true" />

              <div className="p-8 md:p-10">
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <TrendingDown size={32} className="text-red-400" />
                </div>

                {/* Heading */}
                <h2 
                  id="exit-popup-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3"
                >
                  Wait! Before You Go... <br className="hidden sm:block" />
                  Are You Losing Money?
                </h2>

                {/* Subheading */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  <strong className="text-gray-900">62% of calls</strong> to small businesses go unanswered. 
                  Find out <span className="text-purple-700 font-semibold">exactly how much revenue</span> you're losing 
                  to missed calls every month.
                </p>

                {/* What You'll Get Banner */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-5 mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3 text-center">
                    📊 Get Your Free Revenue Impact Report
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight size={12} className="text-purple-600" />
                      </div>
                      <span>See your <strong>exact monthly revenue loss</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight size={12} className="text-purple-600" />
                      </div>
                      <span>Compare <strong>AI vs. human receptionist costs</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight size={12} className="text-purple-600" />
                      </div>
                      <span>Get <strong>industry-specific recommendations</strong></span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setIsVisible(false);
                    // Scroll to ROI calculator
                    const roiSection = document.getElementById('roi-calculator');
                    if (roiSection) {
                      roiSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2 mb-3"
                >
                  Calculate My Revenue Loss (Free) <ArrowRight size={18} aria-hidden="true" />
                </button>

                <p className="text-center text-xs text-gray-600">
                  ⚡ Takes 60 seconds • No credit card required
                </p>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

