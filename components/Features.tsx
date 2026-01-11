import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Users, Clock, Database, Globe, Play, Pause, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay, className, children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative group bg-gray-50/40 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-accent/40 overflow-hidden flex flex-col ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">{description}</p>
        
        <div className="mt-auto w-full">
            {children}
        </div>
      </div>
    </motion.article>
  );
};

export const Features: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlaySample = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      id="features" 
      className="py-24 bg-white relative"
      aria-labelledby="features-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h2 
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4"
            itemProp="name"
          >
            Everything your front desk does. <br/> Without the overhead.
          </h2>
          <p className="text-gray-600 text-lg" itemProp="description">
             A complete <strong className="text-gray-700">AI phone answering</strong> suite that answers calls, manages your calendar, and learns your business inside out. Perfect for <em>dentists, HVAC companies, plumbers, med spas, law firms</em>, and more.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]" role="list">
          
          {/* Card 1: Scheduling (Wide) */}
          <FeatureCard
            title="Smart Appointment Scheduling"
            description="Connects directly to your Calendly, Acuity, Google Calendar, or practice management software. The AI receptionist checks for conflicts and books appointments in real-time—no double bookings, no back-and-forth emails."
            icon={<Calendar size={20} />}
            delay={0}
            className="md:col-span-2"
          >
             <div className="w-full bg-gray-50/50 rounded-lg border border-white/5 p-4 relative overflow-hidden h-32 flex items-center justify-around gap-2" aria-hidden="true">
                {/* Mock Calendar UI */}
                <div className="flex-1 bg-gray-100 rounded shadow-sm border border-white/5 p-2 h-full opacity-60 scale-90">
                    <div className="w-1/2 h-2 bg-neutral-700 rounded mb-2" />
                    <div className="space-y-1">
                         <div className="h-1.5 w-full bg-neutral-700/50 rounded" />
                         <div className="h-1.5 w-3/4 bg-neutral-700/50 rounded" />
                    </div>
                </div>
                <div className="flex-1 bg-gray-100 rounded shadow-md border border-accent/40 p-2 h-full z-10 relative">
                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-[8px] border border-neutral-800">✓</div>
                    <div className="w-2/3 h-2 bg-neutral-600 rounded mb-2" />
                    <div className="space-y-2 mt-3">
                         <div className="p-1.5 bg-purple-600/20 rounded border border-accent/20">
                            <div className="h-1.5 w-2/3 bg-purple-600/40 rounded" />
                         </div>
                         <div className="p-1.5 bg-neutral-700/50 rounded border border-white/5">
                            <div className="h-1.5 w-1/2 bg-neutral-600 rounded" />
                         </div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-100 rounded shadow-sm border border-white/5 p-2 h-full opacity-60 scale-90">
                    <div className="w-1/2 h-2 bg-neutral-700 rounded mb-2" />
                    <div className="space-y-1">
                         <div className="h-1.5 w-full bg-neutral-700/50 rounded" />
                         <div className="h-1.5 w-3/4 bg-neutral-700/50 rounded" />
                    </div>
                </div>
             </div>
          </FeatureCard>

          {/* Card 2: Natural Voice (Tall) */}
          <FeatureCard
            title="Human-Like Voice AI"
            description="Our AI voice agents sound indistinguishable from humans. They pause, listen, and handle interruptions naturally. Callers won't know they're speaking with an AI—response time under 500ms."
            icon={<Mic size={20} />}
            delay={0.1}
            className="md:row-span-2"
          >
             <div className="mt-4 relative h-full min-h-[200px] bg-gray-50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group-hover:bg-purple-600/5 transition-colors border border-white/5" aria-hidden="true">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 to-neutral-950" />
                 
                 {/* Voice Waveform Animation */}
                 <div className="relative z-10 w-full h-32 flex items-center justify-center gap-1.5">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 bg-purple-600 rounded-full"
                            animate={{ 
                                height: [20, 60, 20],
                                opacity: [0.5, 1, 0.5] 
                            }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 1.5, 
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                 </div>
                 <button 
                   onClick={handlePlaySample}
                   className="relative z-10 flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-gray-200 cursor-pointer hover:bg-white/20 transition-colors"
                   aria-label={isPlaying ? "Pause voice sample" : "Play voice sample"}
                 >
                     {isPlaying ? (
                       <Pause size={12} className="fill-white text-white" />
                     ) : (
                       <Play size={12} className="fill-white text-white" />
                     )}
                     <span className="text-xs font-medium text-white">
                       {isPlaying ? "Pause Sample" : "Play Sample"}
                     </span>
                 </button>
                 
                 {/* Hidden Audio Element */}
                 <audio 
                   ref={audioRef}
                   onEnded={handleAudioEnded}
                   preload="metadata"
                   className="hidden"
                 >
                   <source src="/audio/voice-sample.mp3" type="audio/mpeg" />
                   <source src="/audio/voice-sample.ogg" type="audio/ogg" />
                   Your browser does not support the audio element.
                 </audio>
             </div>
          </FeatureCard>

          {/* Card 3: CRM Sync */}
          <FeatureCard
            title="Seamless CRM Integration"
            description="Automatically logs call notes, updates lead status, and tags contacts in Salesforce, HubSpot, Zoho, and more. Every call becomes actionable data—no manual entry required."
            icon={<Database size={20} />}
            delay={0.2}
          >
             <div className="flex items-center justify-center gap-4 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500" aria-label="Integrates with HubSpot, Salesforce, and Zoho CRM">
                <div className="w-10 h-10 bg-orange-900/20 rounded border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-xs" title="HubSpot">Hub</div>
                <div className="h-px w-4 bg-neutral-700" aria-hidden="true" />
                <div className="w-10 h-10 bg-blue-900/20 rounded border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-xs" title="Salesforce">SF</div>
                <div className="h-px w-4 bg-neutral-700" aria-hidden="true" />
                <div className="w-10 h-10 bg-green-900/20 rounded border border-green-500/30 flex items-center justify-center font-bold text-green-400 text-xs" title="Zoho">Zoho</div>
             </div>
          </FeatureCard>

          {/* Card 4: Always On (Standard Size, Compact) */}
          <FeatureCard
            title="24/7 After-Hours Answering"
            description="Capture every lead, even on weekends and holidays. Your AI receptionist never sleeps—no more voicemail, no more missed opportunities. Perfect for emergency services like HVAC and plumbing."
            icon={<Clock size={20} />}
            delay={0.3}
          >
              <div className="mt-4 flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" aria-hidden="true" />
                      <span className="text-xs font-medium text-gray-600">System Status</span>
                  </div>
                  <span className="text-xs font-bold text-purple-700">Online 24/7</span>
              </div>
          </FeatureCard>

          {/* Card 5: Cost Effective (Wide) */}
          <FeatureCard
            title="90% Cost Savings vs. Human Receptionist"
            description="A full-time receptionist costs $40,000+/year plus benefits and training. Autoquill AI receptionist starts at just $199/month with unlimited scalability—handle 5 calls or 500 calls simultaneously."
            icon={<Users size={20} />}
            delay={0.4}
            className="md:col-span-2"
          >
             <div className="mt-4 flex items-center gap-4">
                 <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} aria-label="Cost comparison: Autoquill is 90% cheaper">
                    <div className="w-[15%] h-full bg-purple-600 rounded-full" />
                 </div>
                 <div className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    <span className="text-purple-700 font-bold">90%</span> Savings
                 </div>
             </div>
          </FeatureCard>

        </div>

        {/* Bottom CTA - Free FAQ Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-accent/5 via-purple-500/5 to-blue-500/5 border border-accent/20 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Try It Yourself?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Get a free FAQ agent for your business. No credit card, no commitment—just see how it works for yourself.
            </p>
            <button
              onClick={() => window.location.hash = '/free-agent'}
              className="group px-8 py-4 bg-purple-600 hover:bg-purple-600-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-accent/20 transition-all inline-flex items-center gap-3"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              Get Your Free FAQ Agent
            </button>
            <p className="text-sm text-gray-500 mt-4">
              100% free • Setup in 2 minutes • No credit card required
            </p>
          </div>
        </motion.div>

        {/* Additional SEO Content */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed">
            Whether you're a <strong className="text-gray-600">dental practice</strong> handling patient scheduling, an <strong className="text-gray-600">HVAC company</strong> managing emergency calls, a <strong className="text-gray-600">plumber</strong> capturing after-hours leads, or a <strong className="text-gray-600">med spa</strong> booking consultations—Autoquill's AI receptionist adapts to your industry's specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};
