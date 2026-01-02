import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MapPin } from 'lucide-react';

interface Signup {
  business: string;
  location: string;
  industry: string;
  timeAgo: string;
}

const recentSignups: Signup[] = [
  { business: 'Smile Dental Care', location: 'Austin, TX', industry: 'Dental Practice', timeAgo: '2 minutes ago' },
  { business: 'Elite HVAC Services', location: 'Phoenix, AZ', industry: 'HVAC', timeAgo: '5 minutes ago' },
  { business: 'Clear Flow Plumbing', location: 'Denver, CO', industry: 'Plumbing', timeAgo: '8 minutes ago' },
  { business: 'Glow Med Spa', location: 'Miami, FL', industry: 'Med Spa', timeAgo: '12 minutes ago' },
  { business: 'Thompson Law Group', location: 'Chicago, IL', industry: 'Law Firm', timeAgo: '15 minutes ago' },
  { business: 'Premier Auto Repair', location: 'Seattle, WA', industry: 'Auto Repair', timeAgo: '18 minutes ago' },
  { business: 'Bright Smiles Orthodontics', location: 'Los Angeles, CA', industry: 'Dental Practice', timeAgo: '22 minutes ago' },
  { business: 'Comfort Air Solutions', location: 'Houston, TX', industry: 'HVAC', timeAgo: '25 minutes ago' },
  { business: 'Serenity Wellness Spa', location: 'San Diego, CA', industry: 'Med Spa', timeAgo: '30 minutes ago' },
  { business: 'Quick Fix Plumbing', location: 'Atlanta, GA', industry: 'Plumbing', timeAgo: '35 minutes ago' },
];

export const RecentSignups: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Initial delay before showing first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 8000); // Show after 8 seconds on page

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-hide after 5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next notification after hide + delay
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % recentSignups.length);
      setIsVisible(true);
    }, 20000); // Show new notification every 20 seconds

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, currentIndex]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  // Don't show if user has dismissed
  if (hasInteracted) return null;

  const signup = recentSignups[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-24 left-4 z-50 max-w-sm"
        >
          <div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl shadow-black/50">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-semibold text-white truncate">
                  {signup.business}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  just signed up for Autoquill AI
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <MapPin size={10} />
                    <span>{signup.location}</span>
                  </div>
                  <span className="text-neutral-700">•</span>
                  <span className="text-xs text-neutral-500">{signup.timeAgo}</span>
                </div>
                <span className="inline-block mt-2 px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded-full">
                  {signup.industry}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

