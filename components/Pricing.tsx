import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Sparkles, Shield, TrendingUp, Users, Clock, DollarSign, Calculator } from 'lucide-react';
import { trackCTAClick, trackCalendlyClick, CTA_NAMES } from '../utils/analytics';
import { SpotlightCard } from './ui/SpotlightCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { ShineButton } from './ui/ShineButton';
import { AnimatedCounter } from './ui/AnimatedCounter';

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: string;
  perMinuteRate?: string;
  minutesIncluded?: string;
  overageRate?: string;
  setupType: string;
  bestFor: string;
  features: Array<{
    text: string;
    included: boolean;
    note?: string;
  }>;
  addOns?: Array<{
    name: string;
    price: string;
  }>;
  cta: string;
  ctaLink: string;
  popular?: boolean;
  gradient?: string;
  customerLogos?: Array<{
    name: string;
    logo: string;
  }>;
  customerQuote?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter Agent',
    tagline: 'AI call answering at the lowest price. Billed monthly, cancel anytime.',
    monthlyPrice: '$29',
    perMinuteRate: '$0.50',
    setupType: 'Self-serve template',
    bestFor: 'Solo practitioners & small businesses wanting to try AI receptionist risk-free',
    features: [
      { text: 'Pay only for what you use', included: true, note: '($0.50/min)' },
      { text: 'Self-serve industry templates', included: true },
      { text: 'AI call answering 24/7', included: true },
      { text: 'FAQ answering (configurable)', included: true },
      { text: 'Lead capture & message collection', included: true },
      { text: 'Call routing to your phone', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Email notifications', included: true },
      { text: '1 location included', included: true },
      { text: 'Calendar integration', included: false },
      { text: 'CRM integration', included: false },
    ],
    cta: 'Book a Free Call',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    name: 'Booking Agent',
    tagline: 'Turn missed calls into booked appointments',
    monthlyPrice: '$299',
    minutesIncluded: '600',
    overageRate: '$0.35',
    setupType: 'Custom-built for your business',
    bestFor: 'Dental, HVAC, plumbing, med spas losing leads to missed calls',
    features: [
      { text: '600 minutes included/month', included: true },
      { text: 'Overage: $0.35/min', included: true },
      { text: 'Everything in Starter Agent', included: true },
      { text: 'Custom-built AI agent for YOUR business', included: true },
      { text: 'Calendar integration (Calendly/Acuity/Google)', included: true },
      { text: 'Real-time appointment booking', included: true },
      { text: 'Appointment confirmations & reminders', included: true },
      { text: '1 integration included', included: true },
      { text: 'Advanced analytics & sentiment tracking', included: true },
      { text: 'Priority support (24-hour response)', included: true },
    ],
    addOns: [
      { name: 'Additional location', price: '+$75/mo' },
      { name: 'SMS appointment reminders', price: '+$49/mo' },
    ],
    cta: 'Book Free Demo',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    popular: true,
    gradient: 'from-accent/10 to-purple-500/10',
    customerLogos: [
      { name: 'Brighton Dental', logo: '/dental-logo.svg' },
      { name: 'Thumbs Up Plumbing', logo: '/thumbsup-plumbing-logo.svg' },
    ],
    customerQuote: 'Added $85K revenue in year one. Pays for itself 20x over.',
  },
  {
    name: 'Full-Service Agent',
    tagline: 'Complete AI sales & support system',
    monthlyPrice: '$549',
    minutesIncluded: '1,200',
    overageRate: '$0.30',
    setupType: 'Custom-built with advanced integrations',
    bestFor: 'Law firms & high-volume businesses needing CRM, payments, and custom workflows',
    features: [
      { text: '1,200 minutes included/month', included: true },
      { text: 'Overage: $0.30/min', included: true },
      { text: 'Everything in Booking Agent', included: true },
      { text: 'CRM integration (HubSpot/Salesforce/Zoho)', included: true },
      { text: 'Slack/Teams notifications', included: true },
      { text: 'Customer recognition (new vs returning)', included: true },
      { text: 'Lead qualification & scoring', included: true },
      { text: 'Payment collection (Stripe/Square)', included: true },
      { text: 'Custom workflows & automations', included: true },
      { text: 'Up to 3 integrations included', included: true },
      { text: 'Priority support (4-hour response)', included: true },
    ],
    addOns: [
      { name: 'Additional location', price: '+$75/mo' },
      { name: 'Each additional integration', price: '+$400 setup' },
      { name: 'White-label branding', price: '+$500 setup' },
    ],
    cta: 'Book Free Demo',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-orange-500/10 to-red-500/10',
    customerLogos: [
      { name: 'Abacus Life', logo: '/abacus-logo.svg' },
      { name: 'Kuducom', logo: '/kuducom-logo.svg' },
      { name: 'Camber Partners', logo: '/camber-logo.svg' },
    ],
    customerQuote: '70% more qualified consultations. Our intake is on autopilot.',
  },
  {
    name: 'Enterprise',
    tagline: 'Unlimited scale for high-volume operations',
    monthlyPrice: 'Custom',
    setupType: 'White-glove setup & onboarding',
    bestFor: 'Multi-location franchises & high-volume businesses needing unlimited calls',
    features: [
      { text: 'Unlimited minutes included', included: true },
      { text: 'Everything in Full-Service Agent', included: true },
      { text: 'Unlimited integrations', included: true },
      { text: 'Multi-location & multi-language support', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Custom AI training & voice cloning', included: true },
      { text: 'SLA guarantees (99.9% uptime)', included: true },
      { text: 'White-label branding & custom domains', included: true },
      { text: 'API access for custom integrations', included: true },
      { text: 'Priority feature requests', included: true },
      { text: 'Quarterly business reviews & optimization', included: true },
    ],
    cta: 'Book Strategy Call',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-accent/20 to-blue-500/20',
  },
];

// Analytics tracking function
const getTierCTAName = (tierName: string): string => {
  const tierMap: Record<string, string> = {
    'Starter Agent': CTA_NAMES.PRICING_FAQ_TIER,
    'Booking Agent': CTA_NAMES.PRICING_BOOKING_TIER,
    'Full-Service Agent': CTA_NAMES.PRICING_FULL_SERVICE_TIER,
    'Enterprise': CTA_NAMES.PRICING_ENTERPRISE_TIER,
  };
  return tierMap[tierName] || 'pricing_tier_click';
};

const trackPricingClick = (tierName: string, action: string) => {
  const ctaName = getTierCTAName(tierName);
  trackCTAClick(ctaName, 'pricing_page', {
    tier_name: tierName,
    action: action,
  });
};

const MOST_POPULAR_TIER = 'booking' as const;

export const Pricing: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace(/\D/g, ''));
    if (isNaN(price) || price === 0) return monthlyPrice;
    return `$${Math.round(price * 0.85)}`;
  };

  const getDisplayPrice = (tier: PricingTier) => {
    if (tier.monthlyPrice === 'Custom') return tier.monthlyPrice;
    return billingCycle === 'annual' ? getAnnualPrice(tier.monthlyPrice) : tier.monthlyPrice;
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-white relative overflow-hidden border-t border-gray-200"
      aria-labelledby="pricing-heading"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Loss Aversion Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border-4 border-red-400 rounded-2xl p-8 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                You're Currently Losing <span className="text-red-600">$8,000+/Month</span>
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-2">
              to missed calls. Start capturing them <span className="font-bold text-green-600">from just $29/mo</span> — or go all-in with a custom AI agent from <span className="font-bold text-purple-700">$299/mo</span>.
            </p>
            <p className="text-sm text-gray-600">
              (Based on industry average: 20 missed calls/week x $350 avg customer value)
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <header className="text-center mb-12">
          <ScrollReveal direction="fade" delay={0}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 mb-6 shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span className="text-sm font-bold text-green-700">
                New: Start <span className="text-green-800 text-base">at just $29/mo</span> — pay only for minutes you use
              </span>
            </motion.div>

            <motion.h1
              id="pricing-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Stop Paying $47,500/Year<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                For Someone Who Takes Sick Days
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-4"
            >
              Get a <span className="text-gray-900 font-semibold">24/7 AI receptionist</span> starting at{' '}
              <span className="text-green-600 font-semibold">$29/month</span> — or go custom from{' '}
              <span className="text-purple-700 font-semibold">$299/mo</span> and{' '}
              <span className="text-green-600 font-semibold">pay for itself in 30 days</span> or your money back.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sm text-gray-500 max-w-2xl mx-auto"
            >
              Trusted by businesses across dental, HVAC, plumbing, med spas, and more.
            </motion.p>
          </ScrollReveal>

          {/* ROI Calculator Badge */}
          <motion.a
            href="#roi-calculator"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-600 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all group"
          >
            <Calculator size={16} className="group-hover:scale-110 transition-transform" />
            <span>Not sure which tier? Calculate your potential ROI first</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </header>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap size={18} className="text-green-600" aria-hidden="true" />
            <span>Start at Just $29/mo</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield size={18} className="text-purple-700" aria-hidden="true" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp size={18} className="text-purple-700" aria-hidden="true" />
            <span>90% Cost Savings vs Human</span>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => {
              setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
              trackPricingClick('Billing Toggle', billingCycle === 'monthly' ? 'Annual' : 'Monthly');
            }}
            className="relative w-14 h-7 rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
            aria-label={`Switch to ${billingCycle === 'monthly' ? 'annual' : 'monthly'} billing`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-purple-600 transition-transform ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          <span className="px-3 py-1 bg-purple-600/20 text-purple-700 text-xs font-bold rounded-full">
            Save 15%
          </span>
        </motion.div>

        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 border-2 border-yellow-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Shield size={120} className="text-yellow-500" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
                <Shield size={18} className="text-yellow-600" />
                <span className="text-sm font-bold text-yellow-700 uppercase tracking-wider">Our Promise</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                The Booked Appointment Guarantee
              </h3>

              <p className="text-xl text-gray-800 mb-4 max-w-2xl mx-auto leading-relaxed">
                If we don't book <span className="font-bold text-gray-900">at least 3 qualified appointments</span> in your first 30 days,
                we'll give you <span className="font-bold text-green-600">another month completely free</span> until we do.
              </p>
              <p className="text-sm text-gray-600 mb-6">Applies to all paid plans. Starter Agent: 7-day money-back. Booking & Full-Service: 30-day money-back.</p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-600" />
                  <span>No questions asked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-600" />
                  <span>No hoops to jump through</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-600" />
                  <span>We're all in on your success</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-6">
                We can offer this because 94% of our clients book their first appointment within the first week.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Value Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 text-center border-b border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Here's Everything You Get With Autoquill</h3>
              <p className="text-gray-600 text-sm">The complete AI receptionist package (Booking Agent tier)</p>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  { item: 'Custom AI Agent Built For YOUR Business', value: '$2,500 value' },
                  { item: '24/7/365 Phone Coverage (No Sick Days, Ever)', value: '$15,000/yr value' },
                  { item: 'Unlimited Simultaneous Call Handling', value: '$3,000/yr value' },
                  { item: 'Calendar Integration & Real-Time Booking', value: '$1,200/yr value' },
                  { item: 'Call Analytics & Sentiment Dashboard', value: '$1,800/yr value' },
                  { item: 'Unlimited Updates & Ongoing Optimization', value: '$2,400/yr value' },
                  { item: 'Priority Support (24-hour response)', value: '$600/yr value' },
                  { item: 'HIPAA-Compliant Option (Available Add-On)', value: '$1,200/yr value' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-gray-900">{row.item}</span>
                    </div>
                    <span className="text-gray-600 font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-gray-700">Total Value:</span>
                  <span className="text-2xl font-bold text-gray-900 line-through opacity-60">$27,700/year</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-gray-700">Human Receptionist Cost:</span>
                  <span className="text-2xl font-bold text-red-400 line-through opacity-60">$47,500/year</span>
                </div>
                <div className="border-t border-purple-300/30 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Your Investment Today:</span>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-purple-700">
                        {billingCycle === 'annual' ? '$3,048' : '$3,588'}
                      </span>
                      <span className="text-gray-600 text-sm block">/year (Booking Agent, $0 setup)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 flex-wrap mb-2">
                  <span className="text-2xl font-bold text-gray-900">You Save:</span>
                  <span className="text-5xl font-bold text-green-500">
                    <AnimatedCounter
                      end={billingCycle === 'annual' ? 44452 : 43912}
                      prefix="$"
                      duration={2}
                    />
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  That's <span className="text-gray-900 font-bold">{billingCycle === 'annual' ? '15x' : '12x'} ROI</span> in your first year alone
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Enough to hire another employee, run a marketing campaign, or take a vacation
                  {billingCycle === 'annual' && <span className="text-purple-700 ml-1">(+$540 more with annual!)</span>}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <DollarSign size={24} className="text-green-500 mx-auto mb-2" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {billingCycle === 'annual' ? '$44K+' : '$43K+'}
            </div>
            <div className="text-sm text-gray-700">Saved per year vs. hiring</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
            <Clock size={24} className="text-blue-400 mx-auto mb-2" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-700">Never misses a call</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border border-purple-300/20 rounded-xl p-4 text-center">
            <TrendingUp size={24} className="text-purple-700 mx-auto mb-2" aria-hidden="true" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {billingCycle === 'annual' ? '15x' : '12x'}
            </div>
            <div className="text-sm text-gray-700">Return on investment</div>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => {
            const popularTierMap: Record<string, string> = {
              'booking': 'Booking Agent',
              'full-service': 'Full-Service Agent',
            };
            const isPopular = popularTierMap[MOST_POPULAR_TIER] === tier.name;
            const isStarter = tier.name === 'Starter Agent';

            return (
            <ScrollReveal key={tier.name} delay={index * 100} direction="up">
              <SpotlightCard>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group bg-gray-50/40 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col ${
                    isPopular
                      ? 'border-purple-300/40 shadow-lg shadow-purple-500/10 lg:scale-105'
                      : isStarter
                      ? 'border-green-300/40'
                      : 'border-gray-200 hover:border-purple-300/30'
                  }`}
                >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 rounded-full text-xs font-bold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Free Badge */}
              {isStarter && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-600 rounded-full text-xs font-bold text-white shadow-lg">
                  Lowest Price
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h2>
                  <p className="text-sm text-gray-600">{tier.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  {isStarter ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-green-600">{getDisplayPrice(tier)}</span>
                        <span className="text-gray-600 text-base">/mo</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-xs text-purple-700 font-semibold mb-1">
                          Billed ${Math.round(29 * 0.85 * 12)}/year
                        </div>
                      )}
                      <div className="text-lg font-semibold text-gray-900 mb-1">
                        {tier.perMinuteRate}<span className="text-gray-600 text-sm font-normal">/min — pay only for what you use</span>
                      </div>
                      <div className="text-xs text-green-700 font-medium mt-2">
                        No setup fee. No long-term contract. Cancel anytime.
                      </div>
                      <div className="text-sm font-bold text-gray-900 mt-3 italic">
                        Less than a coffee per day
                      </div>
                    </>
                  ) : tier.monthlyPrice !== 'Custom' ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">{getDisplayPrice(tier)}</span>
                        <span className="text-gray-600 text-base">/mo</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-xs text-purple-700 font-semibold mb-1">
                          Billed ${Math.round(parseInt(tier.monthlyPrice.replace(/\D/g, '')) * 0.85 * 12)}/year
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">{tier.minutesIncluded} min included</span> • {tier.overageRate}/min overage
                      </div>
                      <div className="text-xs text-purple-700 font-medium mt-2">
                        $0 setup — we build your custom agent for free
                      </div>
                      {tier.name === 'Booking Agent' && (
                        <div className="text-sm font-bold text-gray-900 mt-3 italic">
                          For just $10/day
                        </div>
                      )}
                      {tier.name === 'Full-Service Agent' && (
                        <div className="text-sm font-bold text-gray-900 mt-3 italic">
                          For just $18/day
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                      <div className="text-sm text-gray-600">Let's discuss your needs</div>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Zap size={16} className="text-purple-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-gray-600 text-xs mb-1">Agent Setup</div>
                      <div className="text-gray-900 font-medium">{tier.setupType}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Users size={16} className="text-purple-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-gray-600 text-xs mb-1">Ideal For</div>
                      <div className="text-gray-900 font-medium leading-snug">{tier.bestFor}</div>
                    </div>
                  </div>
                </div>

                {/* Customer Logos & Quote */}
                {tier.customerLogos && tier.customerLogos.length > 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Used By</p>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {tier.customerLogos.map((customer, idx) => (
                        <div
                          key={idx}
                          className="h-6 max-w-[80px] flex items-center opacity-70 hover:opacity-100 transition-opacity"
                          title={customer.name}
                        >
                          <img
                            src={customer.logo}
                            alt={`${customer.name} logo`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-auto max-w-full object-contain"
                            style={{ filter: 'brightness(1.1)' }}
                          />
                        </div>
                      ))}
                    </div>
                    {tier.customerQuote && (
                      <p className="text-xs text-gray-600 italic leading-relaxed">
                        "{tier.customerQuote}"
                      </p>
                    )}
                  </div>
                )}

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3" role="list">
                    {tier.features
                      .filter((f) => f.included)
                      .map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-purple-600/20"
                            aria-hidden="true"
                          >
                            <Check size={14} className="text-purple-700" />
                          </div>
                          <span className="text-gray-800 text-[15px] leading-snug">
                            {feature.text}
                            {feature.note && (
                              <span className="text-gray-500 text-xs ml-1">{feature.note}</span>
                            )}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Add-ons */}
                {tier.addOns && tier.addOns.length > 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Popular Add-ons</p>
                    <ul className="space-y-2">
                      {tier.addOns.map((addon, idx) => (
                        <li key={idx} className="flex justify-between items-center text-xs">
                          <span className="text-gray-600">{addon.name}</span>
                          <span className="text-gray-700 font-semibold">{addon.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <ShineButton
                  pulse={isPopular}
                  variant={isPopular || isStarter ? 'primary' : 'outline'}
                  onClick={() => {
                    trackPricingClick(tier.name, 'CTA Click');
                    window.open(tier.ctaLink, '_blank');
                  }}
                  className={`w-full mt-auto ${isStarter ? '!bg-green-600 hover:!bg-green-700' : ''}`}
                  icon
                >
                  {tier.cta}
                </ShineButton>

                {tier.monthlyPrice !== 'Custom' && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      {isStarter
                        ? '7-day money-back guarantee \u00B7 Cancel anytime'
                        : '30-day money-back guarantee \u00B7 Cancel anytime'}
                    </p>
                  </div>
                )}
              </div>
                </motion.article>
              </SpotlightCard>
            </ScrollReveal>
          );
          })}
        </div>

        {/* Quick Math */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-gray-900 font-semibold mb-4 text-center">Quick Math (Booking Agent):</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">$299/mo</div>
                <div className="text-gray-600">&divide; 30 days = <span className="text-purple-700 font-bold">$9.97/day</span></div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">$9.97/day</div>
                <div className="text-gray-600">&divide; 24 hours = <span className="text-purple-700 font-bold">$0.42/hour</span></div>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-2xl font-bold text-green-500 mb-1">1 missed call</div>
                <div className="text-gray-600">= <span className="text-gray-900 font-bold">$200-500</span> lost</div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              Your AI receptionist pays for itself with just <span className="text-gray-900">ONE captured call per month</span>.
            </p>
          </div>
        </motion.div>

        {/* Toggle Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <button
            onClick={() => {
              setShowComparison(!showComparison);
              trackPricingClick('Comparison Table', showComparison ? 'Closed' : 'Opened');
            }}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-purple-300/30 rounded-lg font-medium transition-all inline-flex items-center gap-2"
          >
            {showComparison ? 'Hide' : 'Show'} Detailed Feature Comparison
            <ArrowRight
              size={16}
              className={`transition-transform ${showComparison ? 'rotate-90' : ''}`}
              aria-hidden="true"
            />
          </button>
        </motion.div>

        {/* Comparison Table */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-16 overflow-hidden"
          >
            <div className="bg-gray-50/30 border border-gray-200 rounded-2xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 text-gray-700 font-semibold">Feature</th>
                    <th className="text-center p-4 text-gray-700 font-semibold">
                      Starter
                      <div className="text-xs text-green-600 font-normal mt-1">$29/mo</div>
                    </th>
                    <th className="text-center p-4 text-gray-700 font-semibold bg-purple-600/5">
                      Booking Agent
                      <div className="text-xs text-purple-700 font-normal mt-1">Most Popular</div>
                    </th>
                    <th className="text-center p-4 text-gray-700 font-semibold">Full-Service</th>
                    <th className="text-center p-4 text-gray-700 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Pricing</td>
                    <td className="text-center p-4">$29/mo<br /><span className="text-xs">$0.50/min</span></td>
                    <td className="text-center p-4 bg-purple-600/5">$299/mo<br /><span className="text-xs">600 min included</span></td>
                    <td className="text-center p-4">$549/mo<br /><span className="text-xs">1,200 min included</span></td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Setup Fee</td>
                    <td className="text-center p-4 text-green-600 font-medium">$0</td>
                    <td className="text-center p-4 bg-purple-600/5 text-green-600 font-medium">$0</td>
                    <td className="text-center p-4 text-green-600 font-medium">$0</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Per-Minute Rate</td>
                    <td className="text-center p-4">$0.50/min</td>
                    <td className="text-center p-4 bg-purple-600/5">$0.35/min</td>
                    <td className="text-center p-4">$0.30/min</td>
                    <td className="text-center p-4">N/A (Unlimited)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Agent Setup</td>
                    <td className="text-center p-4">Self-serve template</td>
                    <td className="text-center p-4 bg-purple-600/5">Custom-built</td>
                    <td className="text-center p-4">Custom-built</td>
                    <td className="text-center p-4">White-glove</td>
                  </tr>
                  {[
                    { feature: 'AI Answering 24/7', starter: true, booking: true, full: true, enterprise: true },
                    { feature: 'FAQ Answering', starter: true, booking: true, full: true, enterprise: true },
                    { feature: 'Calendar Integration', starter: false, booking: true, full: true, enterprise: true },
                    { feature: 'Appointment Booking', starter: false, booking: true, full: true, enterprise: true },
                    { feature: 'CRM Integration', starter: false, booking: false, full: true, enterprise: true },
                    { feature: 'Slack/Teams Notifications', starter: false, booking: false, full: true, enterprise: true },
                    { feature: 'Payment Processing', starter: false, booking: false, full: true, enterprise: true },
                    { feature: 'Lead Scoring', starter: false, booking: false, full: true, enterprise: true },
                    { feature: 'Custom Workflows', starter: false, booking: false, full: true, enterprise: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="p-4">{row.feature}</td>
                      <td className="text-center p-4">
                        {row.starter ? <Check size={20} className="text-purple-700 inline" /> : <span className="text-neutral-600">—</span>}
                      </td>
                      <td className="text-center p-4 bg-purple-600/5">
                        {row.booking ? <Check size={20} className="text-purple-700 inline" /> : <span className="text-neutral-600">—</span>}
                      </td>
                      <td className="text-center p-4">
                        {row.full ? <Check size={20} className="text-purple-700 inline" /> : <span className="text-neutral-600">—</span>}
                      </td>
                      <td className="text-center p-4">
                        {row.enterprise ? <Check size={20} className="text-purple-700 inline" /> : <span className="text-neutral-600">—</span>}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Analytics</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4 bg-purple-600/5">Advanced</td>
                    <td className="text-center p-4">Advanced</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Integrations Included</td>
                    <td className="text-center p-4">0</td>
                    <td className="text-center p-4 bg-purple-600/5">1</td>
                    <td className="text-center p-4">3</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Support</td>
                    <td className="text-center p-4">Email (48h)</td>
                    <td className="text-center p-4 bg-purple-600/5">Priority (24h)</td>
                    <td className="text-center p-4">Priority (4h)</td>
                    <td className="text-center p-4">Dedicated Manager</td>
                  </tr>
                  <tr>
                    <td className="p-4">White-Label Options</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">Add-on</td>
                    <td className="text-center p-4"><Check size={20} className="text-purple-700 inline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Why We Charge What We Charge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50/30 border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Why We Charge What We Charge
            </h2>
            <p className="text-gray-600 text-center mb-8 text-sm">(And why it's actually a steal)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Start Small, Scale Up</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our Starter tier is <span className="text-gray-900 font-medium">just $29/month</span> — pick a template,
                  customize it, and pay only $0.50/min for the minutes you use.
                  When you're ready for a custom-built agent with integrations, upgrade to Booking Agent.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Custom-Built For You</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Paid tiers get a <span className="text-gray-900 font-medium">custom AI agent</span> trained on YOUR business,
                  YOUR services, YOUR voice. We spend 15-20 hours building it — and there's <span className="text-gray-900 font-medium">no setup fee</span>.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Always Improving</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your AI gets <span className="text-gray-900 font-medium">smarter every month</span>.
                  We analyze calls, fix edge cases, update for seasonal changes, and optimize
                  booking rates. You never touch it — we handle everything.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                <strong className="text-gray-900">Still have questions?</strong> Book a
                15-minute call. We'll show you exactly what your AI agent will sound like — no pressure.
              </p>
              <button
                onClick={() => {
                  trackPricingClick('Free Consultation', 'Bottom CTA');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-purple-500/20 inline-flex items-center gap-2"
              >
                See My Custom AI Demo (Free)
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            <strong className="text-gray-600">Compare:</strong> A full-time receptionist costs
            $40,000+/year. Our Booking Agent saves you over $43,000 annually — with 24/7
            coverage and zero sick days. Or start from just $29/mo and pay only for what you use.
          </p>
        </motion.div>

        {/* Link to FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-gray-50/30 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Have questions about pricing or features?</h3>
            <p className="text-gray-600 mb-6">
              Check out our comprehensive FAQ section below for answers to common questions, or schedule a call with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#faq"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-purple-300/30 rounded-lg font-medium transition-all inline-flex items-center gap-2"
              >
                View FAQ
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <button
                onClick={() => {
                  trackPricingClick('FAQ Link', 'Contact Click');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20 inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
