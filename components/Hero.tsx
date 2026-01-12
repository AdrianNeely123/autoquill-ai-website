import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Check, User, Clock, Phone, HelpCircle } from 'lucide-react';
import type { HeroProps } from '../types';
import { LeadQuiz } from './LeadQuiz';

const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile for reduced animations
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reduce meteor count on mobile for better performance
    const actualNumber = isMobile ? Math.floor(number / 3) : number;
    const styles = [...new Array(actualNumber)].map(() => {
      // Generate random positions across the full viewport
      const randomTop = Math.floor(Math.random() * 100);
      const randomLeft = Math.floor(Math.random() * 100);
      
      return {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        animationDelay: Math.random() * 1 + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      };
    });
    setMeteorStyles(styles);
  }, [number, isMobile]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={style}
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

// Industry badges for SEO and social proof - with links where landing pages exist
const industries = [
  { name: 'Dental Practices', slug: 'dentists' },
  { name: 'HVAC Companies', slug: 'hvac' },
  { name: 'Plumbers', slug: 'plumbers' },
  { name: 'Med Spas', slug: 'medspa' },
  { name: 'Real Estate', slug: 'home' },
  { name: 'Law Firms', slug: 'home' },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {/* Lead Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <LeadQuiz 
            onNavigate={onNavigate} 
            onClose={() => setShowQuiz(false)} 
          />
        )}
      </AnimatePresence>
    <section 
      id="main-content"
      className="w-full pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
      aria-labelledby="hero-heading"
      itemScope 
      itemType="https://schema.org/Service"
    >
      
      {/* Background with Meteors - Light mode version */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Subtle purple glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-300/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-300/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Category Badge - Clear "What We Do" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-col items-center gap-3 mb-6"
          >
            <div className="px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 backdrop-blur-md">
              <span className="text-sm font-bold text-purple-700 uppercase tracking-widest">
                24/7 AI Phone Receptionist
              </span>
            </div>
            {/* Urgency + Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 shadow-md backdrop-blur-md">
              <span className="flex h-2 w-2 relative" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-sm font-bold text-red-700 tracking-wide">
                Only 3 spots left this month
              </span>
              <span className="text-xs text-gray-600 ml-1">• 523+ businesses trust us</span>
            </div>
          </motion.div>

          {/* Headline - SEO Optimized */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
            itemProp="name"
          >
            <span className="sr-only">AI Receptionist - </span>
            Stop Missing Calls. <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
                Stop Losing Revenue.
              </span>
              {/* Purple Underline Highlight */}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-purple-200 -z-10 -rotate-1"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subheadline - SEO Optimized with Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed"
            itemProp="description"
          >
            <strong className="text-gray-900">Autoquill builds AI receptionists</strong> that answer your calls 24/7, 
            qualify leads, and book appointments directly into your calendar—automatically. 
            <span className="text-gray-600"> Replace voicemail with a receptionist that never sleeps.</span>
          </motion.p>

          {/* Industry Tags for SEO - Clickable where landing pages exist */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl"
            role="list"
            aria-label="Industries we serve"
          >
            {industries.map((industry, idx) => (
              industry.slug ? (
                <a 
                  key={idx}
                  href={`#/${industry.slug}`}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-700 hover:text-purple-700 hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-pointer"
                  role="listitem"
                >
                  {industry.name}
                </a>
              ) : (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-700 cursor-default"
                  role="listitem"
                >
                  {industry.name}
                </span>
              )
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Primary Action: Clear and Direct */}
            <div className="relative group">
                <button 
                  onClick={() => onNavigate('free-agent')}
                  className="relative z-10 px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col items-center justify-center gap-1"
                  aria-label="Get your free FAQ voice agent"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={22} className="group-hover:rotate-12 transition-transform" aria-hidden="true" /> 
                    Get Your Free FAQ Agent
                  </div>
                  <span className="text-xs font-normal text-purple-100">Live in 48 hours • No credit card</span>
                </button>
                {/* Border Beam Effect */}
                <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-white/30 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-beam [animation-duration:2s]" />
                </div>
            </div>

            {/* Secondary Actions in Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Call Demo Agent with Context */}
              <motion.a 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  href="tel:+15138458466"
                  className="group px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors flex flex-col items-center justify-center gap-1 shadow-sm"
                  aria-label="Call our demo AI agent now"
              >
                 <div className="flex items-center gap-2">
                   <Phone size={16} aria-hidden="true" /> Call Our Demo Agent
                 </div>
                 <span className="text-sm font-bold text-purple-600">+1 (513) 845-8466</span>
                 <span className="text-xs text-gray-500">Ask: "What do you cost?"</span>
              </motion.a>

              {/* Or Book a Demo */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Or Book a Demo Call</span>
              </motion.button>
            </div>
          </motion.div>

          {/* GUARANTEE BOX - MOVED UP */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Booked Appointment Promise</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    If we don't book <span className="font-bold text-gray-900">at least 3 appointments</span> in your first 30 days, 
                    we'll give you <span className="font-bold text-green-600">another month completely free</span> until we do. 
                    No questions asked.
                  </p>
                  <p className="text-xs text-gray-600 italic mb-3">
                    *Based on typical call volume of 10+ calls/week. Works for any business receiving regular inquiries.
                  </p>
                  
                  {/* RISK REVERSAL STACK */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">30-Day Money Back</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">3 Appointments or Free</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">Live in 48 Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WHAT HAPPENS NEXT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              What Happens Next
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-purple-600">1</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">1-Min Quiz</h4>
                <p className="text-xs text-gray-600">Answer quick questions about your business</p>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center -mt-8">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-purple-600">2</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">We Build (48hrs)</h4>
                <p className="text-xs text-gray-600">Custom AI trained on your business</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center -mt-8">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Goes Live</h4>
                <p className="text-xs text-gray-600">Start capturing calls 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Stars (187 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Live in 48 Hours</span>
            </div>
          </motion.div>

          {/* Trust & Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="mt-8"
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium text-center mb-4">
              Trusted & Compliant
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* HIPAA Compliant */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">HIPAA Compliant</span>
              </div>

              {/* SSL Encrypted */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">SSL Encrypted</span>
              </div>

              {/* SOC 2 */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">SOC 2 Type II</span>
              </div>

              {/* 99.9% Uptime */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">99.9% Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* Trusted By - Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 pt-8 border-t border-gray-200"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium text-center mb-4">
              Trusted by 523+ businesses nationwide • 37 joined this week
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['Abacus Life', 'Kuducom', 'Powell MMA', 'Brighton Dental', 'Thumbs Up Plumbing'].map((company, idx) => (
                <span key={idx} className="text-sm font-bold font-serif text-gray-500 hover:text-gray-700 transition-colors">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - "The Automated Office" - Dark Mode Version */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative mx-auto max-w-5xl"
            role="img"
            aria-label="AI receptionist dashboard showing live call handling, CRM lookup, and automatic appointment booking"
        >
          {/* Main Container Glass Effect */}
          <div className="relative rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden p-1 ring-1 ring-gray-200">
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 justify-between z-20">
               <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <div className="w-3 h-3 rounded-full bg-gray-400" />
               </div>
               <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Autoquill Dashboard • Live</div>
            </div>

            <div className="pt-16 pb-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* Left Column: The Conversation */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" aria-hidden="true" />
                   <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Incoming Call • +1 (555) 012-3456</span>
                </div>

                <div className="space-y-4" role="log" aria-label="Sample AI receptionist conversation">
                  {/* Caller Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User size={14} className="text-neutral-400" />
                    </div>
                    <div className="bg-gray-100 border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[280px]">
                      <span className="sr-only">Caller says: </span>
                      Hi, do you have any appointments available for a consultation tomorrow afternoon?
                    </div>
                  </motion.div>

                  {/* Agent Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex gap-4 flex-row-reverse"
                  >
                     <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 relative overflow-hidden" aria-hidden="true">
                       {/* Animated Waveform in Avatar */}
                       <div className="absolute inset-0 flex items-center justify-center gap-0.5">
                         {[1,2,3].map(i => (
                           <motion.div 
                             key={i}
                             animate={{ height: [4, 12, 4] }}
                             transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                             className="w-0.5 bg-white/90 rounded-full"
                           />
                         ))}
                       </div>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 text-gray-900 p-3 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[280px]">
                      <span className="sr-only">AI receptionist responds: </span>
                      Yes, I have an opening at 2:00 PM and another at 4:30 PM. Which works best for you?
                    </div>
                  </motion.div>

                   {/* Caller Bubble 2 */}
                   <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User size={14} className="text-gray-600" />
                    </div>
                    <div className="bg-gray-100 border border-gray-300 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[280px]">
                      <span className="sr-only">Caller says: </span>
                      2:00 PM is perfect.
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: The Actions */}
              <div className="relative">
                 {/* Connecting Beam/Line Effect */}
                 <div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:block hidden" aria-hidden="true" />
                 
                 <div className="space-y-4">
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-6">Real-time Actions</div>
                    
                    {/* Action Card 1: CRM Lookup */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center" aria-hidden="true">
                        <User size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-gray-900">Contact Found</span>
                          <span className="text-[10px] text-gray-500">0.4s</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Identified "Sarah Jenkins" from caller ID. History: 3 past visits.
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Card 2: Knowledge Base */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3 }}
                      className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center" aria-hidden="true">
                        <Clock size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-gray-900">Availability Check</span>
                          <span className="text-[10px] text-gray-500">0.2s</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Scanned "Dr. Smith's Calendar". Found slots: 2:00 PM, 4:30 PM.
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Card 3: Booking */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 5.5 }}
                      className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center" aria-hidden="true">
                        <Check size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-gray-900">Appointment Booked</span>
                          <span className="text-[10px] text-purple-700">Just now</span>
                        </div>
                        <div className="text-xs text-gray-700">
                          Scheduled "Consultation" for Tomorrow, 2:00 PM. Confirmation sent.
                        </div>
                      </div>
                    </motion.div>

                 </div>
              </div>

            </div>
            
            {/* Bottom Fade - to neutral-950 */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" aria-hidden="true" />

          </div>
          
          {/* Decorative Elements behind the card */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl" aria-hidden="true" />
        </motion.div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>AI Receptionist Services for Small Businesses</h2>
          <p>Autoquill provides AI-powered phone answering services for dental practices, HVAC companies, plumbers, electricians, med spas, law firms, real estate agents, auto repair shops, and veterinary clinics. Our virtual receptionist answers calls 24/7, books appointments automatically, qualifies leads, and integrates with your existing CRM and calendar systems. Stop losing customers to voicemail and missed calls. Start your free trial today.</p>
          <ul>
            <li>AI receptionist for dentists - Handle patient scheduling and insurance inquiries</li>
            <li>HVAC answering service - 24/7 emergency dispatch and service booking</li>
            <li>Plumber call answering - Never miss an emergency call again</li>
            <li>Med spa receptionist AI - Book treatments and consultations automatically</li>
            <li>Law firm intake - Qualify leads and schedule consultations</li>
            <li>After hours answering service - Capture every lead, even at 2 AM</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};
