import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Sparkles, Shield, TrendingUp, Users, Clock, DollarSign, Calculator } from 'lucide-react';

interface PricingTier {
  name: string;
  tagline: string;
  setupPrice: string;
  monthlyPrice: string;
  setupTime: string;
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
    name: 'FAQ Agent',
    tagline: 'Stop losing callers to "we\'ll call you back"',
    setupPrice: '$500 - $800',
    monthlyPrice: '$99',
    setupTime: '1-2 days',
    bestFor: 'Solo practitioners losing $2K+/month to basic unanswered questions',
    features: [
      { text: 'FAQ answering (unlimited questions)', included: true },
      { text: 'Business hours & location info', included: true },
      { text: 'Call routing & message collection', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Email notifications for missed questions', included: true },
      { text: 'Calendar integration', included: false },
      { text: 'CRM integration', included: false },
      { text: 'Payment processing', included: false },
    ],
    cta: 'Get Started Risk-Free',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    customerLogos: [
      { name: 'Powell MMA', logo: '/powell-mma-logo.svg' },
    ],
    customerQuote: 'Stopped losing students who just wanted to know our class schedule.',
  },
  {
    name: 'Booking Agent',
    tagline: 'Turn missed calls into booked appointments',
    setupPrice: 'Starting at $1,500',
    monthlyPrice: '$199',
    setupTime: '3-5 days',
    bestFor: 'Dental, HVAC, plumbing, med spas losing $8K+/month to missed bookings',
    features: [
      { text: 'Everything in FAQ Agent', included: true },
      { text: 'Calendar integration (Calendly/Acuity/Google)', included: true },
      { text: 'Real-time appointment booking', included: true },
      { text: 'Appointment confirmations & reminders', included: true },
      { text: 'Availability checking', included: true },
      { text: '1 integration included', included: true, note: '(Calendar or CRM)' },
      { text: 'Advanced analytics & sentiment tracking', included: true },
      { text: 'CRM integration', included: false },
      { text: 'Payment processing', included: false },
    ],
    addOns: [
      { name: 'Google Calendar integration', price: '+$300 setup' },
      { name: 'SMS appointment reminders', price: '+$200 setup' },
    ],
    cta: 'Get Started Risk-Free',
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
    setupPrice: 'Starting at $3,000',
    monthlyPrice: '$399',
    setupTime: '1-2 weeks',
    bestFor: 'Law firms & sales teams losing $20K+/month to unqualified leads',
    features: [
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
      { name: 'Each additional integration', price: '+$400 setup' },
      { name: 'Advanced analytics dashboard', price: '+$100/mo' },
      { name: 'White-label branding', price: '+$500 setup' },
    ],
    cta: 'Get Started Risk-Free',
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
    tagline: 'Scale across locations without scaling headcount',
    setupPrice: 'Custom quote',
    monthlyPrice: 'Custom',
    setupTime: 'Custom timeline',
    bestFor: 'Multi-location franchises needing unified AI across 5+ locations',
    features: [
      { text: 'Everything in Full-Service Agent', included: true },
      { text: 'Unlimited integrations', included: true },
      { text: 'Multi-location & multi-language support', included: true },
      { text: 'Dedicated success manager & technical support', included: true },
      { text: 'Custom AI training & voice cloning', included: true },
      { text: 'SLA guarantees (99.9% uptime)', included: true },
      { text: 'White-label branding & custom domains', included: true },
      { text: 'API access for custom integrations', included: true },
      { text: 'Priority feature requests', included: true },
      { text: 'Quarterly business reviews & optimization', included: true },
      { text: 'Advanced reporting & custom dashboards', included: true },
      { text: 'On-demand training sessions', included: true },
    ],
    cta: 'Book Strategy Call',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-accent/20 to-blue-500/20',
  },
];

// Analytics tracking function
const trackPricingClick = (tierName: string, action: string) => {
  // Google Analytics tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'pricing_tier_click', {
      tier_name: tierName,
      action: action,
      event_category: 'Pricing',
      event_label: `${tierName} - ${action}`,
    });
  }
  
  // Console log for debugging
  console.log(`[Analytics] Pricing Click: ${tierName} - ${action}`);
};

// A/B Test Config: Change this to test different "Most Popular" badges
// Options: 'faq' | 'booking' | 'full-service' | 'none'
const MOST_POPULAR_TIER = 'booking' as const;

export const Pricing: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Calculate discounted price for annual billing (15% off)
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace(/\D/g, ''));
    if (isNaN(price)) return 'Custom';
    const annualMonthly = Math.round(price * 0.85);
    return `$${annualMonthly}`;
  };

  const getDisplayPrice = (tier: PricingTier) => {
    if (tier.monthlyPrice === 'Custom') return 'Custom';
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header - Hormozi Style Dream Outcome Focus */}
        <header className="text-center mb-12">
          {/* Scarcity Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-red-300">
              Only accepting <span className="font-bold text-gray-900">7 new clients</span> this month
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
            Get a <span className="text-gray-900 font-semibold">24/7 AI receptionist</span> that answers every call, 
            books appointments, and <span className="text-green-400 font-semibold">pays for itself in 30 days</span>—or your money back.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-gray-500 max-w-2xl mx-auto"
          >
            Join 500+ dental practices, HVAC companies, plumbers, and med spas who've already made the switch.
          </motion.p>

          {/* ROI Calculator Badge */}
          <motion.a
            href="#roi-calculator"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all group"
          >
            <Calculator size={16} className="group-hover:scale-110 transition-transform" />
            <span>💡 Not sure which tier? Calculate your potential ROI first</span>
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
            <Shield size={18} className="text-purple-700" aria-hidden="true" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={18} className="text-purple-700" aria-hidden="true" />
            <span>500+ Happy Customers</span>
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
            className="relative w-14 h-7 rounded-full bg-gray-100 transition-colors hover:bg-neutral-700"
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

        {/* HORMOZI VALUE STACK - What You Actually Get */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-950 border-2 border-purple-300/30 rounded-2xl overflow-hidden shadow-2xl shadow-accent/10">
            {/* Value Stack Header */}
            <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 p-6 text-center border-b border-purple-300/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Here's Everything You Get With Autoquill</h3>
              <p className="text-gray-600 text-sm">The complete AI receptionist package (Booking Agent tier)</p>
            </div>

            <div className="p-8">
              {/* Value Stack Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Custom AI Agent Built For YOUR Business</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$2,500 value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">24/7/365 Phone Coverage (No Sick Days, Ever)</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$15,000/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Unlimited Simultaneous Call Handling</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$3,000/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Calendar Integration & Real-Time Booking</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$1,200/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Call Analytics & Sentiment Dashboard</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$1,800/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Unlimited Updates & Ongoing Optimization</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$2,400/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">Priority Support (12-hour response)</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$600/yr value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="text-gray-900">HIPAA-Compliant Call Recording & Transcripts</span>
                  </div>
                  <span className="text-gray-600 font-semibold">$1,200/yr value</span>
                </div>
              </div>

              {/* Total Value */}
              <div className="bg-gray-1000 rounded-xl p-6 mb-6">
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
                        {billingCycle === 'annual' ? '$3,528' : '$3,888'}
                      </span>
                      <span className="text-gray-600 text-sm block">Year 1 total (setup + 12 months)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 flex-wrap mb-2">
                  <span className="text-2xl font-bold text-gray-900">💰 You Save:</span>
                  <span className="text-5xl font-bold text-green-400">
                    {billingCycle === 'annual' ? '$43,972' : '$43,612'}
                  </span>
                </div>
                <p className="text-green-300 font-medium">
                  That's <span className="text-gray-900 font-bold">{billingCycle === 'annual' ? '12x' : '11x'} ROI</span> in your first year alone
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Enough to hire another employee, run a marketing campaign, or take a vacation
                  {billingCycle === 'annual' && <span className="text-purple-700 ml-1">(+$360 more with annual!)</span>}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IRON-CLAD GUARANTEE - Hormozi Style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-yellow-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Shield Icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Shield size={120} className="text-yellow-500" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
                <Shield size={18} className="text-yellow-400" />
                <span className="text-sm font-bold text-yellow-300 uppercase tracking-wider">Iron-Clad Guarantee</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Pay-For-Performance Guarantee
              </h3>
              
              <p className="text-xl text-gray-800 mb-6 max-w-2xl mx-auto leading-relaxed">
                If Autoquill doesn't <span className="text-yellow-400 font-bold">capture at least $1,000 in revenue</span> you would have lost 
                in your first 30 days, we'll refund <span className="text-gray-900 font-bold">100% of your setup fee</span> AND 
                give you your first month <span className="text-green-400 font-bold">completely free</span>. We're betting on our results, not just offering a trial.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-400" />
                  <span>No questions asked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-400" />
                  <span>No hoops to jump through</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-400" />
                  <span>Refund within 48 hours</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">
                We can offer this because 97% of our clients see ROI in the first week. We're betting on ourselves.
              </p>
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
            <DollarSign size={24} className="text-green-400 mx-auto mb-2" aria-hidden="true" />
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
              {billingCycle === 'annual' ? '12x' : '11x'}
            </div>
            <div className="text-sm text-gray-700">Return on investment</div>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => {
            // Determine if this tier should show "Most Popular" based on A/B test config
            const popularTierMap: Record<string, string> = {
              'faq': 'FAQ Agent',
              'booking': 'Booking Agent',
              'full-service': 'Full-Service Agent',
            };
            const isPopular = popularTierMap[MOST_POPULAR_TIER] === tier.name;
            
            return (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-gray-50/40 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col ${
                isPopular
                  ? 'border-purple-300/40 shadow-lg shadow-accent/10 lg:scale-105'
                  : 'border-gray-200 hover:border-purple-300/30'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 rounded-full text-xs font-bold text-gray-900 shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Tier Name & Tagline */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h2>
                  <p className="text-sm text-gray-600">{tier.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  {tier.setupPrice !== 'Custom quote' ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-gray-900">{getDisplayPrice(tier)}</span>
                        {tier.monthlyPrice !== 'Custom' && (
                          <span className="text-gray-600 text-base">/mo</span>
                        )}
                      </div>
                      {billingCycle === 'annual' && tier.monthlyPrice !== 'Custom' && (
                        <div className="text-xs text-purple-700 font-semibold mb-2">
                          Billed ${Math.round(parseInt(tier.monthlyPrice.replace(/\D/g, '')) * 0.85 * 12)}/year
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">{tier.setupPrice}</span> one-time setup
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                      <div className="text-sm text-gray-600">Let's discuss your needs</div>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="mb-6 p-4 bg-gray-1000 rounded-lg border border-gray-200 space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Clock size={16} className="text-purple-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-gray-600 text-xs mb-1">Setup Time</div>
                      <div className="text-gray-900 font-medium">{tier.setupTime}</div>
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
                  <div className="mb-6 p-4 bg-gray-1000 rounded-lg border border-gray-200">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                      Used By
                    </p>
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
                      .filter((feature) => feature.included) // Only show included features
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
                  <div className="mb-6 p-4 bg-gray-1000 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                      Popular Add-ons
                    </p>
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

                {/* CTA Button */}
                <button
                  onClick={() => {
                    trackPricingClick(tier.name, 'CTA Click');
                    window.open(tier.ctaLink, '_blank');
                  }}
                  className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group/btn mt-auto ${
                    isPopular
                      ? 'bg-purple-600 hover:bg-purple-700 text-gray-900 shadow-lg hover:shadow-accent/20'
                      : 'bg-gray-100 hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-purple-300/30'
                  }`}
                  aria-label={`${tier.cta} - ${tier.name}`}
                >
                  {tier.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          );
          })}
        </div>

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

        {/* Detailed Comparison Table */}
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
                    <th className="text-center p-4 text-gray-700 font-semibold">FAQ Agent</th>
                    <th className="text-center p-4 text-gray-700 font-semibold bg-purple-600/5">
                      Booking Agent
                      {MOST_POPULAR_TIER === 'booking' && (
                        <div className="text-xs text-purple-700 font-normal mt-1">Most Popular</div>
                      )}
                    </th>
                    <th className="text-center p-4 text-gray-700 font-semibold">
                      Full-Service
                    </th>
                    <th className="text-center p-4 text-gray-700 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {/* Pricing Row */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Starting Price</td>
                    <td className="text-center p-4">$500 setup<br />$99/mo</td>
                    <td className="text-center p-4 bg-purple-600/5">$1,500 setup<br />$199/mo</td>
                    <td className="text-center p-4">$3,000 setup<br />$399/mo</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  {/* Setup Time */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Setup Time</td>
                    <td className="text-center p-4">1-2 days</td>
                    <td className="text-center p-4 bg-purple-600/5">3-5 days</td>
                    <td className="text-center p-4">1-2 weeks</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  {/* FAQ Answering */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">FAQ Answering</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4 bg-purple-600/5">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Calendar Integration */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Calendar Integration</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Appointment Booking */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Appointment Booking</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* CRM Integration */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">CRM Integration</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Slack/Teams Notifications */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Slack/Teams Notifications</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Payment Processing */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Payment Processing</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Customer Recognition */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Customer Recognition</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* Analytics & Sentiment */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Analytics & Sentiment Tracking</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4 bg-purple-600/5">Advanced</td>
                    <td className="text-center p-4">Advanced</td>
                    <td className="text-center p-4">Custom Dashboards</td>
                  </tr>
                  {/* Support */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Support Response Time</td>
                    <td className="text-center p-4">24 hours</td>
                    <td className="text-center p-4 bg-purple-600/5">12 hours</td>
                    <td className="text-center p-4">4 hours</td>
                    <td className="text-center p-4">Dedicated Manager</td>
                  </tr>
                  {/* Integrations Included */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Integrations Included</td>
                    <td className="text-center p-4">0</td>
                    <td className="text-center p-4 bg-purple-600/5">1</td>
                    <td className="text-center p-4">3</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  {/* Custom Workflows */}
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Custom Workflows</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                  {/* White Label */}
                  <tr>
                    <td className="p-4">White-Label Options</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-purple-600/5 text-neutral-600">—</td>
                    <td className="text-center p-4">Add-on</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-purple-700 inline" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Why We Charge What We Charge - The "Reason Why" */}
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
            <p className="text-gray-600 text-center mb-8 text-sm">
              (And why it's actually a steal)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">One-Time Setup Fee</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We spend <span className="text-gray-900 font-medium">15-20 hours</span> custom-building your AI agent. 
                  This isn't a template—it's trained on YOUR business, YOUR services, YOUR voice. 
                  That's why it sounds like you, not a robot.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Monthly Maintenance</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your AI gets <span className="text-gray-900 font-medium">smarter every month</span>. 
                  We analyze calls, fix edge cases, update for seasonal changes, and optimize 
                  booking rates. You never touch it—we handle everything.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">No Hidden Fees</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You keep your existing Calendly, CRM, and payment accounts. 
                  We <span className="text-gray-900 font-medium">never charge extra</span> for third-party tools. 
                  What you see is what you pay. Period.
                </p>
              </div>
            </div>

            {/* Quick Math */}
            <div className="bg-gray-1000 rounded-xl p-6 mb-8">
              <h4 className="text-gray-900 font-semibold mb-4 text-center">Quick Math:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">$199/mo</div>
                  <div className="text-gray-600">÷ 30 days = <span className="text-purple-700 font-bold">$6.63/day</span></div>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">$6.63/day</div>
                  <div className="text-gray-600">÷ 24 hours = <span className="text-purple-700 font-bold">$0.28/hour</span></div>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">1 missed call</div>
                  <div className="text-gray-600">= <span className="text-gray-900 font-bold">$200-500</span> lost</div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-xs mt-4">
                Your AI receptionist pays for itself with just <span className="text-gray-900">ONE captured call per month</span>.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                <strong className="text-gray-900">Still have questions?</strong> Book a 
                15-minute call. We'll show you exactly what your AI agent will sound like—no pressure.
              </p>
              <button
                onClick={() => {
                  trackPricingClick('Free Consultation', 'Bottom CTA');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-gray-900 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
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
            💡 <strong className="text-gray-600">Compare:</strong> A full-time receptionist costs
            $40,000+/year. Even our Full-Service tier saves you over $35,000 annually—with 24/7
            coverage and zero sick days.
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
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-gray-900 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
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

