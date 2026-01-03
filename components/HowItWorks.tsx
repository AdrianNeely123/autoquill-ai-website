import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Cpu, Rocket, ArrowRight, CheckCircle2, Clock, Sparkles, Calculator } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: '15-Minute Setup Call',
      description: 'Tell us about your business, services, and how you want calls handled. We\'ll ask the right questions to understand your unique needs.',
      duration: '15 min',
      highlights: [
        'No technical knowledge required',
        'We guide you through everything',
        'Answer a few simple questions',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'We Build Your AI Agent',
      description: 'Our team creates and trains your custom AI receptionist with your business info, voice preferences, and call handling rules.',
      duration: '24-48 hrs',
      highlights: [
        'Custom trained on your business',
        'Integrates with your calendar & CRM',
        'Sounds natural and professional',
      ],
      color: 'from-accent to-purple-500',
      bgColor: 'from-accent/10 to-purple-500/10',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go Live & Start Capturing Leads',
      description: 'We forward your calls to your new AI agent. Start capturing every lead while you focus on running your business.',
      duration: 'Instant',
      highlights: [
        'Instant call answering',
        '24/7 availability',
        'Real-time notifications',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
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
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            From Setup to Success{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              in 3 Simple Steps
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
          >
            No complex setup, no technical headaches. We handle everything from training to deployment. 
            You just tell us about your business, and we'll have your AI receptionist ready in days.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-white/20 to-transparent hidden md:block z-0" />
                )}

                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Content Side */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <Clock size={14} className="text-accent" />
                        <span className="text-xs text-neutral-400">{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-lg text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {step.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon Side */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} blur-2xl opacity-50 rounded-full`}
                        aria-hidden="true"
                      />
                      
                      {/* Icon Container */}
                      <div
                        className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${step.bgColor} border border-white/10 flex items-center justify-center backdrop-blur-sm`}
                      >
                        <Icon className={`w-16 h-16 bg-gradient-to-br ${step.color} bg-clip-text`} style={{ 
                          color: 'transparent',
                          WebkitTextFillColor: 'transparent',
                          backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                          backgroundClip: 'text',
                        }} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Total Time to Launch
              </h3>
              <p className="text-neutral-400">
                From first call to answering customer calls
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  48hrs
                </div>
                <div className="text-sm text-neutral-500 mt-1">Average setup</div>
              </div>

              <ArrowRight className="text-neutral-600" size={32} />

              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-neutral-500 mt-1">Coverage</div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('roi-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-green-500/20 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Calculator size={18} />
              Calculate Your ROI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

