import React from 'react';
import { motion } from 'framer-motion';
import { Plug, ArrowRight } from 'lucide-react';

interface Integration {
  name: string;
  category: string;
  logo: string;
  color: string;
}

const integrations: Integration[] = [
  // Calendars
  { name: 'Google Calendar', category: 'Calendar', logo: '📅', color: 'from-blue-500/20 to-blue-600/20' },
  { name: 'Calendly', category: 'Calendar', logo: '📆', color: 'from-blue-400/20 to-cyan-500/20' },
  { name: 'Acuity', category: 'Calendar', logo: '🗓️', color: 'from-green-500/20 to-emerald-500/20' },
  // CRMs
  { name: 'HubSpot', category: 'CRM', logo: '🟠', color: 'from-orange-500/20 to-orange-600/20' },
  { name: 'Salesforce', category: 'CRM', logo: '☁️', color: 'from-blue-500/20 to-blue-700/20' },
  { name: 'Zoho', category: 'CRM', logo: '🔴', color: 'from-red-500/20 to-red-600/20' },
  // Communication
  { name: 'Slack', category: 'Communication', logo: '💬', color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Microsoft Teams', category: 'Communication', logo: '👥', color: 'from-indigo-500/20 to-purple-500/20' },
  // Payments
  { name: 'Stripe', category: 'Payments', logo: '💳', color: 'from-violet-500/20 to-indigo-500/20' },
  { name: 'Square', category: 'Payments', logo: '⬛', color: 'from-neutral-500/20 to-neutral-600/20' },
  // Practice Management
  { name: 'Dentrix', category: 'Practice', logo: '🦷', color: 'from-cyan-500/20 to-blue-500/20' },
  { name: 'ServiceTitan', category: 'Field Service', logo: '🔧', color: 'from-orange-500/20 to-yellow-500/20' },
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Plug size={14} className="text-accent" />
            <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Seamless Integrations</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Works With Your Existing Tools
          </h2>
          
          <p className="text-neutral-400 max-w-xl mx-auto text-sm">
            Connect to 5,000+ apps via Zapier, or use our native integrations with the most popular business tools.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className={`bg-gradient-to-br ${integration.color} border border-white/10 rounded-xl p-4 text-center hover:border-white/20 hover:scale-105 transition-all cursor-default group`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {integration.logo}
              </div>
              <p className="text-xs font-medium text-white truncate">{integration.name}</p>
              <p className="text-[10px] text-neutral-500">{integration.category}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-neutral-500 mb-3">
            Don't see your tool? We integrate with <span className="text-white">5,000+ apps</span> via Zapier
          </p>
          <a
            href="https://calendly.com/adrian-autoquillai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
          >
            Ask about custom integrations
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

