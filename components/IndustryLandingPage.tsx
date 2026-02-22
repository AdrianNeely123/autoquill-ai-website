import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  ChevronDown,
  Sparkles,
  TrendingUp,
  FileText,
  Loader2
} from 'lucide-react';
import { getIndustryData, type IndustryData } from '../data/industryData';
import { SpotlightCard } from './ui/SpotlightCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { ShineButton } from './ui/ShineButton';
import { FloatingMockup } from './ui/FloatingMockup';
import { FounderSection } from './FounderSection';

// Lazy load below-the-fold components
const DemoExperience = lazy(() => import('./DemoExperience').then(m => ({ default: m.DemoExperience })));
const HearItLive = lazy(() => import('./HearItLive').then(m => ({ default: m.HearItLive })));
const MetricCounters = lazy(() => import('./MetricCounters').then(m => ({ default: m.MetricCounters })));
const ROIForm = lazy(() => import('./ROIForm').then(m => ({ default: m.ROIForm })));
const MilestoneTimeline = lazy(() => import('./MilestoneTimeline').then(m => ({ default: m.MilestoneTimeline })));
const IntegrationEcosystem = lazy(() => import('./IntegrationEcosystem').then(m => ({ default: m.IntegrationEcosystem })));
const ComparisonTable = lazy(() => import('./ComparisonTable').then(m => ({ default: m.ComparisonTable })));
const TrustBadges = lazy(() => import('./TrustBadges').then(m => ({ default: m.TrustBadges })));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton: React.FC = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-2xl border border-gray-200" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface IndustryLandingPageProps {
  industrySlug: string;
}

const mockupData: Record<string, { callerName: string; callerLabel: string }> = {
  dentists: { callerName: 'New Patient Call', callerLabel: 'Dental Office Line' },
  hvac: { callerName: 'Emergency AC Repair', callerLabel: 'HVAC Service Line' },
  plumbers: { callerName: 'Burst Pipe Emergency', callerLabel: 'Plumbing Hotline' },
  medspa: { callerName: 'Botox Consultation', callerLabel: 'Med Spa Booking' },
};

// Map industry slugs to HearItLive demo card IDs
const slugToHearItLiveId: Record<string, string> = {
  dentists: 'dental',
  hvac: 'hvac',
  plumbers: 'plumbing',
  medspa: 'medspa',
};

declare function gtag(...args: unknown[]): void;

export const IndustryLandingPage: React.FC<IndustryLandingPageProps> = ({ industrySlug }) => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callStatus, setCallStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const industry = getIndustryData(industrySlug);
  const mockup = mockupData[industrySlug] || mockupData.dentists;

  if (!industry) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 hover:underline"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* ============================================ */}
      {/* SECTION 1: Hero with FloatingMockup          */}
      {/* ============================================ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 mb-6"
              >
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-600">{industry.subheadline}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {industry.headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                {industry.heroDescription}
              </motion.p>

              {/* CTA Buttons - Industry Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
              >
                <ShineButton
                  pulse
                  variant="primary"
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                  className="px-8 py-4 text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                  icon
                >
                  {industry.ctaText}
                </ShineButton>
                <ShineButton
                  variant="secondary"
                  onClick={() => navigate('/free-agent')}
                  className="px-8 py-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
                  icon
                >
                  {industry.freeAgentCta}
                </ShineButton>
              </motion.div>

              {/* Lead Magnet Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="max-w-xl mx-auto lg:mx-0 mb-10"
              >
                <a
                  href={`/guide/${industry.slug}`}
                  className="block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h3 className="text-sm font-bold text-gray-900 truncate">{industry.leadMagnet.title}</h3>
                      <p className="text-xs text-gray-600 truncate">{industry.leadMagnet.description}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-500 group-hover:bg-blue-600 text-gray-900 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1">
                      {industry.leadMagnet.buttonText}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Right Side - FloatingMockup (hidden on mobile) */}
            <div className="hidden lg:flex items-center justify-center">
              <FloatingMockup
                callerName={mockup.callerName}
                callerLabel={mockup.callerLabel}
                className="w-[340px]"
                inputArea={
                  <div className="w-full">
                    <p className="text-white/80 text-[11px] font-medium text-center mb-2">
                      {callStatus === 'success' ? 'Call incoming!' : 'Have our AI receptionist call you'}
                    </p>
                    <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                      e.preventDefault();
                      if (!phoneNumber.trim() || callStatus === 'loading') return;
                      setCallStatus('loading');
                      try {
                        const res = await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ type: 'outbound-call', phoneNumber: phoneNumber.trim(), industry: industrySlug })
                        });
                        if (res.ok) {
                          setCallStatus('success');
                          if (typeof gtag !== 'undefined') {
                            gtag('event', 'call_me_now', { event_category: 'conversion', industry: industrySlug });
                          }
                        } else {
                          setCallStatus('error');
                        }
                      } catch {
                        setCallStatus('error');
                      }
                    }}>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (callStatus === 'error') setCallStatus('idle');
                        }}
                        disabled={callStatus === 'loading' || callStatus === 'success'}
                        className="w-full px-3 py-2.5 text-sm bg-white/15 border border-white/15 rounded-lg text-white placeholder-white/50 outline-none focus:border-purple-400 focus:bg-white/20 transition-all disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={callStatus === 'loading' || callStatus === 'success'}
                        className={`w-full mt-2 py-2.5 rounded-lg text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-lg ${
                          callStatus === 'success'
                            ? 'bg-green-600 shadow-green-500/30'
                            : callStatus === 'error'
                            ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30'
                            : 'bg-green-500 hover:bg-green-600 shadow-green-500/30'
                        } disabled:opacity-70`}
                      >
                        {callStatus === 'loading' ? (
                          <><Loader2 size={14} className="animate-spin" /> Connecting...</>
                        ) : callStatus === 'success' ? (
                          <><CheckCircle size={14} /> Your phone will ring!</>
                        ) : callStatus === 'error' ? (
                          <><Phone size={14} /> Try Again</>
                        ) : (
                          <><Phone size={14} /> Call Me Now</>
                        )}
                      </button>
                    </form>
                    <p className="text-white/30 text-[9px] text-center mt-1.5">
                      {callStatus === 'success' ? 'Our AI will call you in ~10 seconds' : 'Free demo · Takes 30 seconds'}
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Trust Stats - Full width below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
          >
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: DemoExperience                    */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <DemoExperience />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 3: Trusted By Marquee (inline)       */}
      {/* ============================================ */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-400">
            Trusted by {industry.name.toLowerCase()} across the country
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap" style={{ '--duration': '25s', '--gap': '0px' } as React.CSSProperties}>
              {[...industry.trustedBy, ...industry.trustedBy].map((name, index) => (
                <div key={index} className="mx-8 inline-flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: HearItLive                        */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <HearItLive
          industryFilter={slugToHearItLiveId[industry.slug]}
          sectionTitle={`Hear Your ${industry.name} AI In Action`}
          sectionSubtitle={`Listen to a real AI conversation for ${industry.name.toLowerCase()}`}
        />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 5: Pain Points                       */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal direction="fade" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Problem With Missed Calls
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every unanswered call is revenue walking out the door. Here's what it's costing your {industry.name.toLowerCase()}.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.painPoints.map((pain, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <SpotlightCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6"
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                      {pain.stat}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                    <p className="text-gray-600 text-sm">{pain.description}</p>
                  </motion.div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: MetricCounters                    */}
      {/* ============================================ */}
      <Suspense fallback={<div className="py-12" />}>
        <MetricCounters
          metrics={industry.industryMetrics.map((m, i) => ({
            value: m.value,
            label: m.label,
            delay: i * 100
          }))}
        />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 7: FounderSection                    */}
      {/* ============================================ */}
      <FounderSection />

      {/* ============================================ */}
      {/* SECTION 8: ROIForm                           */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <ROIForm preselectedIndustry={industry.slug} />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 9: Testimonial / Case Study          */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">Real Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See How It Works in Practice
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-blue-500/10 border border-purple-600/20 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Quote Side */}
              <div className="p-8 md:p-12">
                {industry.testimonial.logo && (
                  <img
                    src={industry.testimonial.logo}
                    alt={`${industry.testimonial.company} logo`}
                    width="120"
                    height="40"
                    loading="lazy"
                    decoding="async"
                    className="h-10 mb-6 opacity-80"
                  />
                )}
                <div className="text-5xl text-purple-600 mb-4">"</div>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                  {industry.testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-600 font-bold">
                    {industry.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{industry.testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {industry.testimonial.role}, {industry.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="bg-white p-8 md:p-12 border-l border-gray-200">
                <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-6">
                  The Results
                </h3>
                <div className="space-y-6">
                  {industry.testimonial.results.map((result, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-gray-900 mb-1">{result.metric}</div>
                      <div className="text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <ShineButton
                    pulse
                    variant="primary"
                    onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                    className="w-full py-4"
                    icon
                  >
                    Get Similar Results
                  </ShineButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: MilestoneTimeline                */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <MilestoneTimeline />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 11: Features                         */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal direction="fade" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for {industry.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Not a generic answering service. Autoquill is trained specifically for {industry.name.toLowerCase()} with features you actually need.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 50} direction="up">
                <SpotlightCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-50/40 border border-gray-200 rounded-xl p-6 hover:border-purple-600/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
                      <CheckCircle className="text-purple-600" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: IntegrationEcosystem             */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <IntegrationEcosystem
          integrations={industry.richIntegrations}
          sectionTitle={`Connects to Your ${industry.name} Tools`}
          sectionSubtitle={`Seamlessly integrate with the software your ${industry.name.toLowerCase()} already uses`}
        />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 13: ComparisonTable                  */}
      {/* ============================================ */}
      <Suspense fallback={<SectionSkeleton />}>
        <ComparisonTable industryContext={industry.comparisonContext} />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 14: TrustBadges                      */}
      {/* ============================================ */}
      <Suspense fallback={<div className="py-6" />}>
        <TrustBadges />
      </Suspense>

      {/* ============================================ */}
      {/* SECTION 15: Pricing CTA (inline)             */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 via-purple-100/50 to-blue-50 border border-purple-200 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {industry.pricingTeaser.headline}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {industry.pricingTeaser.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2">
                View Pricing Plans
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="https://calendly.com/adrian-autoquillai/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2">
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 16: FAQ                              */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal direction="fade" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions About AI for {industry.name}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {industry.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50/40 border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-gray-900 font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-purple-600 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 17: Phone Audit CTA (inline)         */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-300 mb-6">
              <Phone size={16} className="text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Free Phone Audit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {industry.phoneAuditCta.headline}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {industry.phoneAuditCta.description}
            </p>
            <a href="https://calendly.com/adrian-autoquillai/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg shadow-lg transition-all inline-flex items-center gap-2">
              {industry.phoneAuditCta.buttonText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 18: Final CTA                        */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-white border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of {industry.name.toLowerCase()} already using Autoquill to capture every lead and grow their business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ShineButton
                pulse
                variant="primary"
                onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                className="px-8 py-4 text-lg shadow-lg hover:shadow-purple-500/20"
                icon
              >
                Book a Demo Call
              </ShineButton>
              <ShineButton
                variant="secondary"
                onClick={() => navigate('/free-agent')}
                className="px-8 py-4"
              >
                Start with Free Agent
              </ShineButton>
            </div>

            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
              <Shield size={14} className="text-green-500" />
              3 booked appointments in 30 days — guaranteed. Or your next month is free.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span>Live in ~2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                <span>5.0/5 rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
