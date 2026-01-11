import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden border-y border-neutral-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-2 ring-purple-200 shadow-lg">
                <img 
                  src="/adrian-founder.png" 
                  alt="Adrian, Founder of Autoquill AI"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <CheckCircle2 size={20} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">
                From the Founder
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Hi, I'm Adrian Neely
              </h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  I built Autoquill after experiencing the same frustration we all have: <span className="font-semibold text-neutral-900">calling businesses and getting sent straight to voicemail</span>. 
                  It happened over and over—agencies, service providers, even my own doctor's office.
                </p>
                <p>
                  Coming from <span className="font-semibold text-neutral-900">10+ years in healthcare economics and analytics</span>, I knew the numbers: 
                  30% of calls go unanswered, costing small businesses thousands in lost revenue each month. When AI voice technology started booming, 
                  I realized I could actually solve this problem.
                </p>
                <p>
                  My mission is simple: <span className="font-semibold text-neutral-900">no one should ever miss an opportunity because they couldn't answer their phone</span>. 
                  Whether you're a dentist, plumber, or lawyer—you deserve the same AI tools that enterprise companies use, without the enterprise price tag.
                </p>
                <p className="text-neutral-600 text-sm italic">
                  Originally from Florida, now helping businesses nationwide capture every call, every time.
                </p>
              </div>
              
              {/* Signature */}
              <div className="mt-6 flex items-center gap-4">
                <div className="text-2xl font-signature text-purple-600" style={{ fontFamily: 'cursive' }}>
                  Adrian Neely
                </div>
                <div className="text-sm text-neutral-500">
                  Founder & CEO, Autoquill AI
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

