import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Phone, ArrowRight, Sparkles, Clock, MessageSquare } from 'lucide-react';

interface ThankYouProps {
  onNavigate: (page: 'home' | 'blog' | 'free-agent' | 'privacy' | 'terms') => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onNavigate }) => {
  // Fire Google Ads conversion event
  useEffect(() => {
    // Google Analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'event_category': 'Lead',
        'event_label': 'Form Submission',
        'value': 1
      });
    }

    // Update page title
    document.title = 'Thank You | Autoquill AI';
  }, []);

  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 bg-neutral-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            You're All Set! 🎉
          </h1>
          <p className="text-xl text-neutral-400 max-w-xl mx-auto">
            Thank you for your interest in Autoquill AI. We've received your information and will be in touch shortly.
          </p>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="text-accent" size={24} />
            What Happens Next
          </h2>
          
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'We review your submission',
                description: 'Our team will look at your business details within 24 hours.',
                time: 'Within 24 hours',
              },
              {
                step: '2',
                title: 'Personalized outreach',
                description: 'We\'ll reach out via email or phone to discuss your specific needs.',
                time: '1-2 business days',
              },
              {
                step: '3',
                title: 'Custom demo or setup',
                description: 'See exactly how Autoquill works for your industry and business.',
                time: 'Scheduled at your convenience',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-xs text-neutral-500">{item.time}</span>
                  </div>
                  <p className="text-sm text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Can't Wait? Book Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-accent/20 to-blue-500/20 border border-accent/30 rounded-2xl p-8 text-center mb-8"
        >
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Can't Wait? Skip the Line!
          </h2>
          <p className="text-neutral-300 mb-6">
            Book a call right now and we'll get you set up faster.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-accent/20 transition-all inline-flex items-center gap-2"
          >
            <Calendar size={20} />
            Book a Demo Call Now
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <button
            onClick={() => onNavigate('home')}
            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-left group"
          >
            <Phone className="text-accent mb-2" size={20} />
            <h3 className="font-semibold text-white mb-1">Try the AI Demo</h3>
            <p className="text-xs text-neutral-500">Call our live AI agent</p>
          </button>
          
          <a
            href="mailto:adrian@autoquillai.com"
            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-left group"
          >
            <MessageSquare className="text-accent mb-2" size={20} />
            <h3 className="font-semibold text-white mb-1">Have Questions?</h3>
            <p className="text-xs text-neutral-500">Email us directly</p>
          </a>
          
          <button
            onClick={() => onNavigate('home')}
            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-left group"
          >
            <ArrowRight className="text-accent mb-2" size={20} />
            <h3 className="font-semibold text-white mb-1">Back to Home</h3>
            <p className="text-xs text-neutral-500">Explore more features</p>
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 text-sm mb-4">Trusted by 500+ businesses</p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-neutral-400 text-sm">4.9/5 from 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

