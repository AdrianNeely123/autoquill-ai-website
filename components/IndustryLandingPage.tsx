import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  Zap,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Calendar,
  FileText
} from 'lucide-react';
import { getIndustryData, type IndustryData } from '../data/industryData';

interface IndustryLandingPageProps {
  industrySlug: string;
  onNavigate: (page: 'home' | 'blog' | 'free-agent' | 'privacy' | 'terms') => void;
}

export const IndustryLandingPage: React.FC<IndustryLandingPageProps> = ({ industrySlug, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const industry = getIndustryData(industrySlug);

  // Update document title for SEO
  useEffect(() => {
    if (industry) {
      document.title = industry.metaTitle;
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', industry.metaDescription);
      }
    }
  }, [industry]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Industry not found</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-accent hover:underline"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-neutral-950">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">{industry.subheadline}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {industry.headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 mb-8 leading-relaxed"
            >
              {industry.heroDescription}
            </motion.p>

            {/* CTA Buttons - Industry Specific */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <button
                onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                {industry.ctaText}
              </button>
              <button
                onClick={() => onNavigate('free-agent')}
                className="px-8 py-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                <Sparkles size={18} />
                {industry.freeAgentCta}
              </button>
            </motion.div>

            {/* Lead Magnet Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="max-w-xl mx-auto mb-10"
            >
              <a
                href={`#/guide/${industry.slug}`}
                className="block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-4 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-sm font-bold text-white truncate">{industry.leadMagnet.title}</h3>
                    <p className="text-xs text-neutral-400 truncate">{industry.leadMagnet.description}</p>
                  </div>
                  <span className="px-4 py-2 bg-blue-500 group-hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1">
                    {industry.leadMagnet.buttonText}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Problem With Missed Calls
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Every unanswered call is revenue walking out the door. Here's what it's costing your {industry.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.painPoints.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                  {pain.stat}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pain.title}</h3>
                <p className="text-neutral-400 text-sm">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for {industry.name}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Not a generic answering service. Autoquill is trained specifically for {industry.name.toLowerCase()} with features you actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-900/40 border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <CheckCircle className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Integrations */}
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-500 mb-4">Integrates with your existing tools</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {industry.integrations.map((integration, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Testimonial Section */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">Real Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              See How It Works in Practice
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/20 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Quote Side */}
              <div className="p-8 md:p-12">
                {industry.testimonial.logo && (
                  <img
                    src={industry.testimonial.logo}
                    alt={`${industry.testimonial.company} logo`}
                    className="h-10 mb-6 opacity-80"
                  />
                )}
                <div className="text-5xl text-accent mb-4">"</div>
                <blockquote className="text-xl text-neutral-200 leading-relaxed mb-6">
                  {industry.testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    {industry.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{industry.testimonial.author}</div>
                    <div className="text-sm text-neutral-400">
                      {industry.testimonial.role}, {industry.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="bg-white/5 p-8 md:p-12 border-l border-white/10">
                <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-6">
                  The Results
                </h3>
                <div className="space-y-6">
                  {industry.testimonial.results.map((result, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-white mb-1">{result.metric}</div>
                      <div className="text-neutral-400">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <button
                    onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                    className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Get Similar Results
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live in 48 Hours
            </h2>
            <p className="text-neutral-400">
              Getting started is simple. No technical skills required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: '15-Minute Setup Call',
                description: 'Tell us about your business, services, and how you want calls handled.',
                icon: Phone,
              },
              {
                step: '02',
                title: 'We Build Your AI',
                description: 'Our team trains your custom AI agent on your business and integrates your tools.',
                icon: Zap,
              },
              {
                step: '03',
                title: 'Go Live',
                description: 'Forward your calls and start capturing every lead. We handle the rest.',
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={28} />
                </div>
                <div className="text-sm font-bold text-accent mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About AI for {industry.name}
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-900/40 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of {industry.name.toLowerCase()} already using Autoquill to capture every lead and grow their business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-accent/20 transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Book a Demo Call
              </button>
              <button
                onClick={() => onNavigate('free-agent')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium transition-all"
              >
                Start with Free Agent
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span>Live in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

