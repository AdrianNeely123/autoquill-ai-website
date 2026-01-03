import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, X, ArrowRight } from 'lucide-react';

export const MissedCallWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [lostAmount, setLostAmount] = useState(0);

  useEffect(() => {
    // Show widget after 5 seconds of page load
    const showTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('missedCallWidgetDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Average business loses $47/hour from missed calls
    // Updates every 5 seconds to show loss accumulation
    const lostPerSecond = 47 / 3600; // $47/hour converted to per second
    
    const interval = setInterval(() => {
      setLostAmount((prev) => prev + (lostPerSecond * 5));
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('missedCallWidgetDismissed', 'true');
  };

  const handleCTA = () => {
    // Scroll to ROI calculator
    const element = document.getElementById('roi-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleDismiss();
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-24 right-6 z-40 max-w-sm md:bottom-6 md:right-24"
          role="complementary"
          aria-label="Missed call cost alert"
        >
          <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white transition-colors z-10"
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>

            {/* Animated background pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent animate-pulse" />

            <div className="relative p-6">
              {/* Icon and Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <TrendingDown size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                    Revenue Leak Alert
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Based on industry averages
                  </div>
                </div>
              </div>

              {/* Dynamic Loss Amount */}
              <div className="mb-4">
                <div className="text-sm text-neutral-400 mb-1">
                  Your business has lost approximately:
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-red-400">
                    ${lostAmount.toFixed(2)}
                  </span>
                  <span className="text-sm text-neutral-500">
                    while you're on this page
                  </span>
                </div>
                <div className="text-xs text-neutral-600 mt-1">
                  From missed calls • 62% of calls go unanswered
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleCTA}
                className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 group"
              >
                Calculate Your Actual Loss
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-neutral-600 text-center mt-3">
                62% of small business calls go unanswered. Each missed call is a lost opportunity.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

