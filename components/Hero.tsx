import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, User, Clock, Phone, Play } from 'lucide-react';
import type { HeroProps } from '../types';

const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%", // Random vertical position
      left: Math.floor(Math.random() * 100) + "%", // Random horizontal position
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={style}
          aria-hidden="true"
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

// Industry badges for SEO and social proof
const industries = [
  'Dental Practices',
  'HVAC Companies', 
  'Plumbers',
  'Med Spas',
  'Law Firms',
  'Real Estate',
  'Auto Repair',
  'Veterinary'
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section 
      id="main-content"
      className="w-full pt-32 pb-24 px-6 relative overflow-hidden bg-neutral-950"
      aria-labelledby="hero-heading"
      itemScope 
      itemType="https://schema.org/Service"
    >
      
      {/* Background with Meteors - Increased count for "More Stars" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Meteors number={60} />
        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950" />
        {/* Subtle purple glow bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/20 blur-[120px] rounded-full mix-blend-screen opacity-30" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-neutral-300 tracking-wide">
              Join 500+ businesses putting their phone on autopilot
            </span>
          </motion.div>

          {/* Headline - SEO Optimized */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            itemProp="name"
          >
            <span className="sr-only">AI Receptionist - </span>
            Stop Missing Calls. <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Stop Losing Revenue.
              </span>
              {/* Purple Underline Highlight */}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-accent/50 -z-10 -rotate-1 blur-sm"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subheadline - SEO Optimized with Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-6 leading-relaxed"
            itemProp="description"
          >
            <strong className="text-neutral-300">Autoquill AI receptionist</strong> instantly answers every call, qualifies leads, and books appointments directly into your calendar—<em>24/7</em>.
            Replace voicemail with a top-tier virtual receptionist.
          </motion.p>

          {/* Industry Tags for SEO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl"
            role="list"
            aria-label="Industries we serve"
          >
            {industries.map((industry, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                role="listitem"
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary Action: Free FAQ Voice Agent - More Prominent */}
            <div className="relative group">
                <button 
                  onClick={() => onNavigate('free-agent')}
                  className="relative z-10 px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all overflow-hidden min-w-[240px] flex items-center justify-center gap-2"
                  aria-label="Get a free FAQ voice agent for your business"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" /> 
                  Get Your Free Agent
                </button>
                {/* Border Beam Effect */}
                <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-white/30 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-beam [animation-duration:2s]" />
                </div>
            </div>

            {/* Secondary Action: Book Demo Call */}
            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                className="group px-8 py-4 bg-transparent text-white border border-neutral-700 rounded-xl font-medium hover:bg-white/5 hover:border-neutral-500 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                aria-label="Book a demo call to see AI receptionist in action"
            >
               <Phone size={16} aria-hidden="true" /> Book a Demo
            </motion.button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }}
            className="mt-4 text-sm text-neutral-400"
          >
            <span className="font-semibold text-white">100% Free.</span> No credit card required. Setup in 2 minutes.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money-Back</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Stars</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Live in 48 Hours</span>
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
          <div className="relative rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden p-1 ring-1 ring-white/5">
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between z-20">
               <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
               </div>
               <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Autoquill Dashboard • Live</div>
            </div>

            <div className="pt-16 pb-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* Left Column: The Conversation */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                   <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Incoming Call • +1 (555) 012-3456</span>
                </div>

                <div className="space-y-4" role="log" aria-label="Sample AI receptionist conversation">
                  {/* Caller Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User size={14} className="text-neutral-400" />
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-300 max-w-[280px]">
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
                     <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 relative overflow-hidden" aria-hidden="true">
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
                    <div className="bg-accent/20 border border-accent/30 text-white p-3 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[280px]">
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
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User size={14} className="text-neutral-400" />
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-300 max-w-[280px]">
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
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-6">Real-time Actions</div>
                    
                    {/* Action Card 1: CRM Lookup */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-neutral-800/50 border border-white/5 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center" aria-hidden="true">
                        <User size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-neutral-200">Contact Found</span>
                          <span className="text-[10px] text-neutral-500">0.4s</span>
                        </div>
                        <div className="text-xs text-neutral-400">
                          Identified "Sarah Jenkins" from caller ID. History: 3 past visits.
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Card 2: Knowledge Base */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3 }}
                      className="bg-neutral-800/50 border border-white/5 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center" aria-hidden="true">
                        <Clock size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-neutral-200">Availability Check</span>
                          <span className="text-[10px] text-neutral-500">0.2s</span>
                        </div>
                        <div className="text-xs text-neutral-400">
                          Scanned "Dr. Smith's Calendar". Found slots: 2:00 PM, 4:30 PM.
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Card 3: Booking */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 5.5 }}
                      className="bg-accent/10 border border-accent/20 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center" aria-hidden="true">
                        <Check size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-white">Appointment Booked</span>
                          <span className="text-[10px] text-accent/70">Just now</span>
                        </div>
                        <div className="text-xs text-neutral-300">
                          Scheduled "Consultation" for Tomorrow, 2:00 PM. Confirmation sent.
                        </div>
                      </div>
                    </motion.div>

                 </div>
              </div>

            </div>
            
            {/* Bottom Fade - to neutral-950 */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" aria-hidden="true" />

          </div>
          
          {/* Decorative Elements behind the card */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
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
  );
};
