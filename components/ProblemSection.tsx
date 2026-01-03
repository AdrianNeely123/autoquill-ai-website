import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, DollarSign, Users, Clock, AlertTriangle, Phone } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: PhoneOff,
      stat: '30%',
      label: 'of calls go unanswered',
      description: 'Missing critical opportunities while you\'re busy, after hours, or on weekends',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10',
    },
    {
      icon: DollarSign,
      stat: '$50K+',
      label: 'lost annually per business',
      description: 'Each missed call is a potential customer choosing your competitor instead',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-500/10 to-amber-500/10',
    },
    {
      icon: Clock,
      stat: '20+ hrs',
      label: 'wasted on phone tag weekly',
      description: 'Your team spending valuable time playing phone tag and answering basic questions',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Users,
      stat: '$40K+',
      label: 'yearly for full-time staff',
      description: 'Plus benefits, training, sick days, and the constant challenge of finding reliable help',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-sm font-medium text-red-300">The Hidden Cost of Missed Calls</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Every Missed Call Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Lost Revenue
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
          >
            Your phone is the lifeline of your business. But when calls go unanswered, 
            customers don't wait—they call your competitor.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-neutral-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 bg-gradient-to-br ${problem.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                    </div>

                    {/* Stat */}
                    <div className="mb-3">
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}>
                        {problem.stat}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {problem.label}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section - Mystery Call Audit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500/5 via-accent/5 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Phone className="text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Think Your Phone System is Fine?
            </h3>
          </div>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Most businesses don't realize they have a problem until it's too late. 
            Let us call your business like a customer and show you what's really happening.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('phone-audit');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/20 transition-all inline-flex items-center gap-3"
          >
            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
            Get Your Free Mystery Call Audit
          </button>
          <p className="text-sm text-neutral-500 mt-4">
            100% free • We'll call within 24 hours • Detailed report delivered to your inbox
          </p>
        </motion.div>
      </div>
    </section>
  );
};

