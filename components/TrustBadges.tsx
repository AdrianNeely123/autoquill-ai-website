import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Healthcare data protection',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: Lock,
      title: 'SSL Encrypted',
      description: '256-bit encryption',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Award,
      title: 'SOC 2 Type II',
      description: 'Enterprise security',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime',
      description: 'SLA guaranteed',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
  ];

  return (
    <section className="py-12 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">
            Enterprise-Grade Security & Compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${badge.bgColor} ${badge.borderColor} border rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-default`}
              >
                <div className={`w-10 h-10 mx-auto mb-3 rounded-full ${badge.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${badge.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{badge.title}</h3>
                <p className="text-xs text-neutral-500">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <span>Bank-level data protection</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>GDPR & CCPA compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <span>Regular security audits</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

