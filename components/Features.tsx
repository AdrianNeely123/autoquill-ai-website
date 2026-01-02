import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Users, Clock, Database, Globe, Play } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative group bg-neutral-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-accent/40 overflow-hidden flex flex-col ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 leading-relaxed mb-6 text-sm">{description}</p>
        
        <div className="mt-auto w-full">
            {children}
        </div>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Everything your front desk does. <br/> Without the overhead.
          </h2>
          <p className="text-neutral-400 text-lg">
             A complete communication suite that answers calls, manages your calendar, and learns your business inside out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: Scheduling (Wide) */}
          <FeatureCard
            title="Smart Scheduling"
            description="Connects directly to your Calendly, Acuity, or Google Calendar. The agent checks for conflicts and books slots in real-time."
            icon={<Calendar size={20} />}
            delay={0}
            className="md:col-span-2"
          >
             <div className="w-full bg-neutral-900/50 rounded-lg border border-white/5 p-4 relative overflow-hidden h-32 flex items-center justify-around gap-2">
                {/* Mock Calendar UI */}
                <div className="flex-1 bg-neutral-800 rounded shadow-sm border border-white/5 p-2 h-full opacity-60 scale-90">
                    <div className="w-1/2 h-2 bg-neutral-700 rounded mb-2" />
                    <div className="space-y-1">
                         <div className="h-1.5 w-full bg-neutral-700/50 rounded" />
                         <div className="h-1.5 w-3/4 bg-neutral-700/50 rounded" />
                    </div>
                </div>
                <div className="flex-1 bg-neutral-800 rounded shadow-md border border-accent/40 p-2 h-full z-10 relative">
                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-white text-[8px] border border-neutral-800">✓</div>
                    <div className="w-2/3 h-2 bg-neutral-600 rounded mb-2" />
                    <div className="space-y-2 mt-3">
                         <div className="p-1.5 bg-accent/20 rounded border border-accent/20">
                            <div className="h-1.5 w-2/3 bg-accent/40 rounded" />
                         </div>
                         <div className="p-1.5 bg-neutral-700/50 rounded border border-white/5">
                            <div className="h-1.5 w-1/2 bg-neutral-600 rounded" />
                         </div>
                    </div>
                </div>
                <div className="flex-1 bg-neutral-800 rounded shadow-sm border border-white/5 p-2 h-full opacity-60 scale-90">
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
            title="Human-Like Voice"
            description="Our agents sound indistinguishable from humans. They pause, listen, and interrupt naturally."
            icon={<Mic size={20} />}
            delay={0.1}
            className="md:row-span-2"
          >
             <div className="mt-4 relative h-full min-h-[200px] bg-neutral-900 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group-hover:bg-accent/5 transition-colors border border-white/5">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 to-neutral-950" />
                 
                 {/* Voice Waveform Animation */}
                 <div className="relative z-10 w-full h-32 flex items-center justify-center gap-1.5">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 bg-accent rounded-full"
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
                 <div className="relative z-10 flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                     <Play size={12} className="fill-white text-white" />
                     <span className="text-xs font-medium text-white">Play Sample</span>
                 </div>
             </div>
          </FeatureCard>

          {/* Card 3: CRM Sync */}
          <FeatureCard
            title="Seamless CRM Sync"
            description="Automatically logs call notes, updates lead status, and tags contacts in Salesforce, HubSpot, and more."
            icon={<Database size={20} />}
            delay={0.2}
          >
             <div className="flex items-center justify-center gap-4 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="w-10 h-10 bg-orange-900/20 rounded border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-xs">Hub</div>
                <div className="h-px w-4 bg-neutral-700" />
                <div className="w-10 h-10 bg-blue-900/20 rounded border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-xs">SF</div>
                <div className="h-px w-4 bg-neutral-700" />
                <div className="w-10 h-10 bg-green-900/20 rounded border border-green-500/30 flex items-center justify-center font-bold text-green-400 text-xs">Zoho</div>
             </div>
          </FeatureCard>

          {/* Card 4: Always On (Standard Size, Compact) */}
          <FeatureCard
            title="Always On, 24/7"
            description="Capture every lead, even on weekends. No more voicemail."
            icon={<Clock size={20} />}
            delay={0.3}
          >
              <div className="mt-4 flex items-center justify-between bg-neutral-900 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-medium text-neutral-400">System Status</span>
                  </div>
                  <span className="text-xs font-bold text-accent">Online</span>
              </div>
          </FeatureCard>

          {/* Card 5: Cost Effective (Wide) */}
          <FeatureCard
            title="Fraction of the Cost"
            description="A full-time receptionist costs $40k+/year. Autoquill starts at just $199/mo, with unlimited scalability."
            icon={<Users size={20} />}
            delay={0.4}
            className="md:col-span-2"
          >
             <div className="mt-4 flex items-center gap-4">
                 <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="w-[15%] h-full bg-accent rounded-full" />
                 </div>
                 <div className="text-xs font-medium text-neutral-500 whitespace-nowrap">
                    <span className="text-accent font-bold">90%</span> Savings
                 </div>
             </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};