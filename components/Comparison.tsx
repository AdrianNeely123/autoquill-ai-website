import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  const alternatives = [
    {
      name: 'Autoquill AI',
      isRecommended: true,
      price: '$99-399/mo',
      setup: '$500-3K one-time',
      features: [
        { text: '24/7 phone coverage', included: true },
        { text: 'Instant call answering', included: true },
        { text: 'Appointment scheduling', included: true },
        { text: 'Calendar integration', included: true },
        { text: 'CRM integration', included: true },
        { text: 'Payment processing', included: true },
        { text: 'Unlimited availability', included: true },
        { text: 'Never calls in sick', included: true },
        { text: 'Handles multiple calls simultaneously', included: true },
        { text: 'Natural conversation', included: true },
        { text: 'Real-time notifications', included: true },
        { text: 'Call transcripts & analytics', included: true },
      ],
      pros: [
        { icon: DollarSign, text: '90% cheaper than full-time staff', color: 'text-green-400' },
        { icon: Clock, text: 'Live in 48 hours', color: 'text-blue-400' },
        { icon: Zap, text: 'Zero training required', color: 'text-accent' },
      ],
    },
    {
      name: 'Full-Time Receptionist',
      price: '$40K+/year',
      setup: '$5K+ recruiting & training',
      features: [
        { text: '24/7 phone coverage', included: false },
        { text: 'Instant call answering', included: false },
        { text: 'Appointment scheduling', included: true },
        { text: 'Calendar integration', included: true },
        { text: 'CRM integration', included: true },
        { text: 'Payment processing', included: false },
        { text: 'Unlimited availability', included: false },
        { text: 'Never calls in sick', included: false },
        { text: 'Handles multiple calls simultaneously', included: false },
        { text: 'Natural conversation', included: true },
        { text: 'Real-time notifications', included: false },
        { text: 'Call transcripts & analytics', included: false },
      ],
      cons: [
        'Sick days & vacation time',
        'Can only handle 1 call at a time',
        'Requires management & training',
        'Benefits & overhead costs',
      ],
    },
    {
      name: 'Answering Service',
      price: '$200-500/mo',
      setup: '$0-200 setup',
      features: [
        { text: '24/7 phone coverage', included: true },
        { text: 'Instant call answering', included: true },
        { text: 'Appointment scheduling', included: false },
        { text: 'Calendar integration', included: false },
        { text: 'CRM integration', included: false },
        { text: 'Payment processing', included: false },
        { text: 'Unlimited availability', included: true },
        { text: 'Never calls in sick', included: true },
        { text: 'Handles multiple calls simultaneously', included: true },
        { text: 'Natural conversation', included: false },
        { text: 'Real-time notifications', included: true },
        { text: 'Call transcripts & analytics', included: false },
      ],
      cons: [
        'Generic, scripted responses',
        'No business-specific knowledge',
        'Can\'t book appointments',
        'No integration with your tools',
      ],
    },
    {
      name: 'Voicemail',
      price: '$0/mo',
      setup: '$0',
      features: [
        { text: '24/7 phone coverage', included: false },
        { text: 'Instant call answering', included: false },
        { text: 'Appointment scheduling', included: false },
        { text: 'Calendar integration', included: false },
        { text: 'CRM integration', included: false },
        { text: 'Payment processing', included: false },
        { text: 'Unlimited availability', included: true },
        { text: 'Never calls in sick', included: true },
        { text: 'Handles multiple calls simultaneously', included: true },
        { text: 'Natural conversation', included: false },
        { text: 'Real-time notifications', included: false },
        { text: 'Call transcripts & analytics', included: false },
      ],
      cons: [
        'Customers won\'t wait',
        'Lose 80% of callers to competitors',
        'No interaction or qualification',
        'Looks unprofessional',
      ],
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <TrendingUp size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Honest Comparison</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
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
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
          >
            We believe in transparency. Here's an honest comparison of AI phone answering 
            vs. traditional solutions. You decide what's best for your business.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternatives.map((alternative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                alternative.isRecommended
                  ? 'lg:scale-105 z-10'
                  : ''
              }`}
            >
              {/* Recommended Badge */}
              {alternative.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-bold text-white shadow-lg z-20">
                  Recommended
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-neutral-900/40 backdrop-blur-sm border rounded-2xl p-6 h-full flex flex-col ${
                  alternative.isRecommended
                    ? 'border-accent/40 shadow-lg shadow-accent/10'
                    : 'border-white/10'
                }`}
              >
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {alternative.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-accent">
                      {alternative.price}
                    </div>
                    <div className="text-xs text-neutral-500">
                      + {alternative.setup}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3">
                    {alternative.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <X size={16} className="text-neutral-600" />
                          )}
                        </div>
                        <span
                          className={feature.included ? 'text-neutral-300' : 'text-neutral-600'}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pros/Cons */}
                {alternative.isRecommended && alternative.pros && (
                  <div className="mt-4 p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                    <div className="space-y-2">
                      {alternative.pros.map((pro, idx) => {
                        const Icon = pro.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon size={16} className={pro.color} />
                            <span className="text-sm text-neutral-300">{pro.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {alternative.cons && (
                  <div className="mt-4 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                      Drawbacks
                    </div>
                    <ul className="space-y-1">
                      {alternative.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                          <span className="text-red-400 flex-shrink-0">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-500/5 via-accent/5 to-blue-500/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The Bottom Line
          </h3>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-8">
            AI phone answering gives you the availability of an answering service, the intelligence 
            of a trained receptionist, and the reliability of automation—at a fraction of the cost 
            of hiring staff. Plus, it integrates with your existing tools and scales with your business.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
          >
            See It in Action
            <TrendingUp size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

