import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Sparkles, Phone } from 'lucide-react';

import type { Page } from '../types';
import { LiveCallCounter } from './LiveCallCounter';
import { trackCTAClick, trackPhoneClick, trackVideoPlay, CTA_NAMES } from '../utils/analytics';

interface DemoExperienceProps {
  onNavigate?: (page: Page) => void;
}

export const DemoExperience: React.FC<DemoExperienceProps> = ({ onNavigate }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Video URL
  const videoUrl = "https://www.youtube.com/embed/7yagw55U_bE";

  return (
    <section 
      id="demo-experience"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-labelledby="demo-experience-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <header className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 mb-6"
          >
            <Play size={16} className="text-purple-700" />
            <span className="text-sm font-medium text-purple-700">See It In Action</span>
          </motion.div>

          {/* Live Call Counter */}
          <div className="mb-6 flex justify-center">
            <LiveCallCounter />
          </div>

          <motion.h2
            id="demo-experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Watch Our AI Agent In Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See how naturally our AI handles calls, books appointments, and never misses a lead.
          </motion.p>
        </header>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200"
        >
          {!isVideoPlaying ? (
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group cursor-pointer" onClick={() => {
              trackVideoPlay('Demo Video', 'demo_experience_section');
              setIsVideoPlaying(true);
            }}>
              {/* Thumbnail Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
              
              {/* Play Button */}
              <button className="relative z-10 w-24 h-24 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-purple-500/50">
                <Play size={40} className="text-white ml-2" fill="white" />
              </button>

              {/* Video Duration Badge */}
              <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                2:14
              </div>

              {/* Real Call Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-purple-600/90 backdrop-blur-sm rounded-full text-white text-sm font-bold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Watch Full Demo
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Autoquill AI Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black text-white transition-all z-10"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-700 mb-1">&lt;500ms</div>
            <div className="text-xs text-gray-600">Response Time</div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-700 mb-1">97%</div>
            <div className="text-xs text-gray-600">Can't Tell It's AI</div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-700 mb-1">50+</div>
            <div className="text-xs text-gray-600">Voice Options</div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-700 mb-1">24/7</div>
            <div className="text-xs text-gray-600">Always Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to get your own AI receptionist? <strong className="text-gray-900">Live in 48 hours.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                trackCTAClick(CTA_NAMES.GET_STARTED, 'demo_experience');
                onNavigate?.('free-agent');
              }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
            >
              <Sparkles size={20} />
              Get Started Risk-Free
            </button>
            <a
              href="tel:+15138458466"
              onClick={() => trackPhoneClick('demo_experience')}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-purple-300 rounded-xl font-medium transition-all inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Call Our Demo: (513) 845-8466
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
