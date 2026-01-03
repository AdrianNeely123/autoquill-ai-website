import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingUp, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  const features = [
    '24/7 Coverage',
    'Instant Answering',
    'Books Appointments',
    'Integrations',
    'Multiple Calls',
    'Never Sick',
    'Natural Conversation',
    'Analytics',
  ];

  const alternatives = [
    {
      name: 'Autoquill AI',
      price: '$99-399',
      period: '/mo',
      values: [true, true, true, true, true, true, true, true],
      highlight: true,
    },
    {
      name: 'Receptionist',
      price: '$40K+',
      period: '/year',
      values: [false, false, true, true, false, false, true, false],
      highlight: false,
    },
    {
      name: 'Answering Service',
      price: '$200-500',
      period: '/mo',
      values: [true, true, false, false, true, true, false, false],
      highlight: false,
    },
    {
      name: 'Voicemail',
      price: 'Free',
      period: '',
      values: [false, false, false, false, true, true, false, false],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
              Honest Comparison
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How We Stack Up{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Against the Alternatives
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-neutral-400 max-w-2xl mx-auto"
          >
            We believe in transparency. Here's an honest comparison—you decide what's best.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-950/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-neutral-400 font-medium text-sm">Feature</th>
                  {alternatives.map((alt, idx) => (
                    <th
                      key={idx}
                      className={`text-center p-4 font-semibold text-sm ${
                        alt.highlight
                          ? 'bg-accent/10 text-accent border-x border-accent/20'
                          : 'text-neutral-300'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {alt.highlight && (
                          <div className="px-2 py-0.5 bg-accent rounded-full text-[10px] font-bold text-white mb-1">
                            BEST VALUE
                          </div>
                        )}
                        <div>{alt.name}</div>
                        <div className="text-xs font-normal text-neutral-400">
                          {alt.price}
                          <span className="text-[10px]">{alt.period}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIdx) => (
                  <tr
                    key={featureIdx}
                    className={`border-b border-white/5 ${
                      featureIdx % 2 === 0 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <td className="p-4 text-neutral-300 text-sm font-medium">{feature}</td>
                    {alternatives.map((alt, altIdx) => (
                      <td
                        key={altIdx}
                        className={`text-center p-4 ${
                          alt.highlight ? 'bg-accent/5 border-x border-accent/10' : ''
                        }`}
                      >
                        {alt.values[featureIdx] ? (
                          <Check size={18} className="text-green-400 inline-block" />
                        ) : (
                          <X size={18} className="text-neutral-600 inline-block" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Summary - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-neutral-950/50 border border-white/10 rounded-2xl p-6">
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-white mb-2">The Bottom Line</h3>
              <p className="text-sm text-neutral-400">
                AI gives you 24/7 coverage, smart integrations, and instant answers—at 90% less than hiring staff.
              </p>
            </div>
            <button
              onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
              className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2 whitespace-nowrap"
            >
              See It in Action
              <TrendingUp size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

