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
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="w-full pt-32 pb-24 px-6 relative overflow-hidden bg-neutral-950">
      
      {/* Background with Meteors - Increased count for "More Stars" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-neutral-300 tracking-wide">
              Join 500+ businesses putting their phone on autopilot
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
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
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
          >
            Autoquill instantly answers every call, qualifies leads, and books appointments directly into your calendar—24/7.
            Replace voicemail with a top-tier receptionist.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary Action: Book Demo Call - Purple */}
            <div className="relative group">
                <button 
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                  className="relative z-10 px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all overflow-hidden min-w-[200px] flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Book a Demo Call
                </button>
                {/* Border Beam Effect */}
                <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-white/30 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-beam [animation-duration:2s]" />
                </div>
            </div>

            {/* Secondary Action: Free FAQ Voice Agent */}
            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                onClick={() => onNavigate('free-agent')}
                className="group px-8 py-4 bg-transparent text-white border border-neutral-700 rounded-xl font-medium hover:bg-white/5 hover:border-neutral-500 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
            >
               <Sparkles size={16} className="text-accent group-hover:rotate-12 transition-transform" /> Free FAQ Voice Agent
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }}
            className="mt-4 text-xs text-neutral-500"
          >
            No credit card required. Customize your free agent in 2 minutes.
          </motion.div>
        </div>

        {/* Hero Visual - "The Automated Office" - Dark Mode Version */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative mx-auto max-w-5xl"
        >
          {/* Main Container Glass Effect */}
          <div className="relative rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden p-1 ring-1 ring-white/5">
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between z-20">
               <div className="flex gap-1.5">
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
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Incoming Call • +1 (555) 012-3456</span>
                </div>

                <div className="space-y-4">
                  {/* Caller Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-neutral-400" />
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-300 max-w-[280px]">
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
                     <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 relative overflow-hidden">
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
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-neutral-400" />
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-300 max-w-[280px]">
                      2:00 PM is perfect.
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: The Actions */}
              <div className="relative">
                 {/* Connecting Beam/Line Effect */}
                 <div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:block hidden" />
                 
                 <div className="space-y-4">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-6">Real-time Actions</div>
                    
                    {/* Action Card 1: CRM Lookup */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-neutral-800/50 border border-white/5 p-4 rounded-xl shadow-sm flex items-start gap-3 backdrop-blur-sm"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
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
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
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
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center">
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
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" />

          </div>
          
          {/* Decorative Elements behind the card */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};