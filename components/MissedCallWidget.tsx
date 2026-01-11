import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneOff, X } from 'lucide-react';

export const MissedCallWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show widget after 8 seconds of page load (less intrusive)
    const showTimer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('missedCallWidgetDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 8000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('missedCallWidgetDismissed', 'true');
  };

  const handleCTA = () => {
    // Scroll to phone audit section
    const element = document.getElementById('phone-audit');
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40"
          role="complementary"
          aria-label="Help bubble"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              /* Collapsed State - Small bubble */
              <motion.div
                key="collapsed"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative cursor-pointer"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-20" />
                
                <div className="relative w-14 h-14 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg flex items-center justify-center transition-colors">
                  <PhoneOff size={24} className="text-white" />
                </div>
                
                {/* Notification badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </motion.div>
            ) : (
              /* Expanded State - Tooltip */
              <motion.div
                key="expanded"
                initial={{ width: 56, height: 56 }}
                animate={{ width: 'auto', height: 'auto' }}
                exit={{ width: 56, height: 56 }}
                className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-4 min-w-[280px]">
                  {/* Close button */}
                  <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Dismiss"
                  >
                    <X size={16} />
                  </button>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <PhoneOff size={20} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900 mb-1">
                        Missing calls?
                      </div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Get a free audit to see how you're handling them
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCTA}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-sm transition-all"
                  >
                    Free Call Audit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

