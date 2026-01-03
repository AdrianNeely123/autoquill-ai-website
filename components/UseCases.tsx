import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Wrench, Droplet, Sparkles, TrendingUp, Phone as PhoneIcon, Calendar, DollarSign, Calculator } from 'lucide-react';

interface UseCase {
  industry: string;
  icon: React.ElementType;
  company: string;
  location: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    label: string;
  }[];
  quote: string;
  author: string;
  color: string;
  bgColor: string;
  logo?: string;
}

export const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const useCases: UseCase[] = [
    {
      industry: 'Dental Practice',
      icon: Stethoscope,
      company: 'Brighton Dental',
      location: 'Colorado',
      logo: '/dental-logo.svg',
      problem: 'Missing 40+ calls per week while staff was busy with patients. Lost potential patients to competitors who answered first.',
      solution: 'Implemented Booking Agent tier with Google Calendar integration. AI handles appointment scheduling, insurance questions, and emergency triage.',
      results: [
        { metric: '40%', value: 'increase', label: 'in new patient bookings' },
        { metric: '0', value: 'missed', label: 'calls during business hours' },
        { metric: '$85K', value: 'added', label: 'annual revenue captured' },
      ],
      quote: 'We went from missing 30% of calls to answering every single one. The AI even books appointments while we\'re with patients. It\'s like having 3 front desk staff for the price of one.',
      author: 'Dr. Sarah Mitchell',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      industry: 'HVAC Company',
      icon: Wrench,
      company: 'Johnson HVAC',
      location: 'Texas',
      logo: '/kuducom-logo.svg',
      problem: 'During peak summer season, 60% of emergency calls went to voicemail. Customers needed immediate help and couldn\'t wait.',
      solution: 'Deployed Full-Service Agent with CRM integration and priority emergency routing. AI qualifies leads and dispatches urgent calls instantly.',
      results: [
        { metric: '95%', value: 'answered', label: 'in under 10 seconds' },
        { metric: '500+', value: 'calls', label: 'handled monthly' },
        { metric: '$120K', value: 'revenue', label: 'from emergency calls' },
      ],
      quote: 'Emergency calls used to go to voicemail and customers would call someone else. Now we capture every emergency job. The ROI paid for itself in the first month.',
      author: 'Mike Johnson, Owner',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
    },
    {
      industry: 'Plumbing Business',
      icon: Droplet,
      company: 'Thumbs Up Plumbing',
      location: 'Florida',
      logo: '/thumbsup-plumbing-logo.svg',
      problem: 'Working in the field meant missing calls. Lost 20-30 jobs per month to competitors. After-hours emergencies were completely missed.',
      solution: 'Implemented Booking Agent with SMS notifications. AI handles scheduling, gives price estimates, and routes emergencies 24/7.',
      results: [
        { metric: '60%', value: 'more', label: 'jobs booked per month' },
        { metric: '24/7', value: 'coverage', label: 'including weekends' },
        { metric: '$95K', value: 'annual', label: 'revenue increase' },
      ],
      quote: 'I can focus on the job I\'m on without worrying about missing the next one. The AI even schedules appointments while I\'m under a sink. Game changer.',
      author: 'Carlos Rodriguez, Owner',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      industry: 'Med Spa',
      icon: Sparkles,
      company: 'Radiant Med Spa',
      location: 'California',
      logo: '/camber-logo.svg',
      problem: 'High-value clients expect immediate response. Missing calls during treatments meant losing $5K+ consultations.',
      solution: 'Full-Service Agent with payment processing and detailed consultation booking. AI answers treatment questions and collects deposits.',
      results: [
        { metric: '85%', value: 'more', label: 'consultation bookings' },
        { metric: '$8K', value: 'average', label: 'consultation value' },
        { metric: '100%', value: 'payment', label: 'collection rate' },
      ],
      quote: 'Our clients expect luxury service. The AI sounds professional, books consultations perfectly, and even processes deposits. It\'s elevated our entire client experience.',
      author: 'Jessica Chen, Owner',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-500/10 to-rose-500/10',
    },
  ];

  const activeUseCase = useCases[activeCase];
  const Icon = activeUseCase.icon;

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
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
            <span className="text-sm font-medium text-accent">Real Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            See How Businesses Like Yours{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Capture Every Lead
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
          >
            Real businesses, real results. See how companies in your industry transformed 
            their customer experience and revenue with AI phone answering.
          </motion.p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCase === index
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {useCase.industry}
            </button>
          ))}
        </div>

        {/* Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Story */}
              <div className="p-8 md:p-12">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeUseCase.bgColor} flex items-center justify-center`}
                  >
                    {activeUseCase.logo ? (
                      <img
                        src={activeUseCase.logo}
                        alt={`${activeUseCase.company} logo`}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 object-contain"
                        style={{ filter: 'brightness(1.2)' }}
                      />
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeUseCase.company}</h3>
                    <p className="text-neutral-400">{activeUseCase.location}</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">The Problem</h4>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeUseCase.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider">The Solution</h4>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeUseCase.solution}
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-5xl text-accent mb-4 leading-none">"</div>
                  <p className="text-neutral-200 italic leading-relaxed mb-4">
                    {activeUseCase.quote}
                  </p>
                  <p className="text-neutral-400 font-medium">
                    — {activeUseCase.author}
                  </p>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className={`p-8 md:p-12 bg-gradient-to-br ${activeUseCase.bgColor} border-l border-white/10`}>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider">The Results</h4>
                </div>

                <div className="space-y-8">
                  {activeUseCase.results.map((result, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center gap-4 mb-2">
                        {index === 0 && <TrendingUp className="text-green-400" size={24} />}
                        {index === 1 && <PhoneIcon className="text-blue-400" size={24} />}
                        {index === 2 && <DollarSign className="text-yellow-400" size={24} />}
                        <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${activeUseCase.color} bg-clip-text text-transparent`}>
                          {result.metric}
                        </div>
                      </div>
                      <div className="ml-10">
                        <div className="text-xl font-semibold text-white mb-1">
                          {result.value}
                        </div>
                        <div className="text-neutral-400">
                          {result.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA - Varied by Industry */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-neutral-300 mb-4 font-medium">
                    Want similar results for your {activeUseCase.industry.toLowerCase()}?
                  </p>
                  {activeCase === 0 ? (
                    // Dental Practice - Free Agent
                    <button
                      onClick={() => window.location.hash = '/free-agent'}
                      className="w-full px-6 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center justify-center gap-2"
                    >
                      <Sparkles size={18} />
                      Get Your Free FAQ Agent
                    </button>
                  ) : activeCase === 1 ? (
                    // HVAC - ROI Calculator
                    <button
                      onClick={() => {
                        const element = document.getElementById('roi-calculator');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-green-500/20 inline-flex items-center justify-center gap-2"
                    >
                      <Calculator size={18} />
                      Calculate Your ROI
                    </button>
                  ) : activeCase === 2 ? (
                    // Plumbing - Mystery Call
                    <button
                      onClick={() => {
                        const element = document.getElementById('phone-audit');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 inline-flex items-center justify-center gap-2"
                    >
                      <PhoneIcon size={18} />
                      Get Free Mystery Call Audit
                    </button>
                  ) : (
                    // Med Spa - Free Agent
                    <button
                      onClick={() => window.location.hash = '/free-agent'}
                      className="w-full px-6 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center justify-center gap-2"
                    >
                      <Sparkles size={18} />
                      Get Your Free FAQ Agent
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 text-sm mb-6">
            Also trusted by leading businesses across the country
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="h-8 max-w-[100px] flex items-center">
              <img
                src="/abacus-logo.svg"
                alt="Abacus Life"
                loading="lazy"
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
            <div className="h-8 max-w-[100px] flex items-center">
              <img
                src="/powell-mma-logo.svg"
                alt="Powell MMA"
                loading="lazy"
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

