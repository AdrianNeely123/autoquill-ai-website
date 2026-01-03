import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Sparkles, Shield, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

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
    tagline: 'Perfect for answering common questions',
    setupPrice: '$500 - $800',
    monthlyPrice: '$99',
    setupTime: '1-2 days',
    bestFor: 'Solo practitioners who need basic FAQ coverage',
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
    cta: 'Start with FAQ Agent',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    customerLogos: [
      { name: 'Powell MMA', logo: '/powell-mma-logo.svg' },
    ],
    customerQuote: 'Perfect for handling common questions about hours and services.',
  },
  {
    name: 'Booking Agent',
    tagline: 'Perfect for appointment-based businesses',
    setupPrice: 'Starting at $1,500',
    monthlyPrice: '$199',
    setupTime: '3-5 days',
    bestFor: 'Dental offices, HVAC, plumbing, med spas needing appointment scheduling',
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
    cta: 'Get Booking Agent',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    popular: true,
    gradient: 'from-accent/10 to-purple-500/10',
    customerLogos: [
      { name: 'Brighton Dental', logo: '/dental-logo.svg' },
      { name: 'Thumbs Up Plumbing', logo: '/thumbsup-plumbing-logo.svg' },
    ],
    customerQuote: 'Went from missing 30% of calls to answering every single one.',
  },
  {
    name: 'Full-Service Agent',
    tagline: 'Perfect for complex sales operations',
    setupPrice: 'Starting at $3,000',
    monthlyPrice: '$399',
    setupTime: '1-2 weeks',
    bestFor: 'Sales teams, law firms needing CRM integration & payment processing',
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
    cta: 'Get Full-Service Agent',
    ctaLink: 'https://calendly.com/adrian-autoquillai/30min',
    gradient: 'from-orange-500/10 to-red-500/10',
    customerLogos: [
      { name: 'Abacus Life', logo: '/abacus-logo.svg' },
      { name: 'Kuducom', logo: '/kuducom-logo.svg' },
      { name: 'Camber Partners', logo: '/camber-logo.svg' },
    ],
    customerQuote: 'Exceeded our booking rate by 70% with full CRM integration.',
  },
  {
    name: 'Enterprise',
    tagline: 'Perfect for multi-location businesses',
    setupPrice: 'Custom quote',
    monthlyPrice: 'Custom',
    setupTime: 'Custom timeline',
    bestFor: 'Multi-location franchises, enterprise operations requiring dedicated support',
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
    cta: 'Book Enterprise Consultation',
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
const MOST_POPULAR_TIER: 'faq' | 'booking' | 'full-service' | 'none' = 'booking';

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
      className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5"
      aria-labelledby="pricing-heading"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            id="pricing-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Simple, Honest Pricing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              No Hidden Fees.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Choose the plan that fits your business. All plans include unlimited updates,
            performance analytics, and ongoing support.
          </motion.p>
        </header>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Shield size={18} className="text-accent" aria-hidden="true" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Users size={18} className="text-accent" aria-hidden="true" />
            <span>500+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <TrendingUp size={18} className="text-accent" aria-hidden="true" />
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
          <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => {
              setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
              trackPricingClick('Billing Toggle', billingCycle === 'monthly' ? 'Annual' : 'Monthly');
            }}
            className="relative w-14 h-7 rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
            aria-label={`Switch to ${billingCycle === 'monthly' ? 'annual' : 'monthly'} billing`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-accent transition-transform ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-neutral-500'}`}>
            Annual
          </span>
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
            Save 15%
          </span>
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
            <div className="text-2xl font-bold text-white mb-1">$35K+</div>
            <div className="text-sm text-neutral-300">Saved per year vs. hiring</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
            <Clock size={24} className="text-blue-400 mx-auto mb-2" aria-hidden="true" />
            <div className="text-2xl font-bold text-white mb-1">20+ hrs</div>
            <div className="text-sm text-neutral-300">Saved weekly on calls</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-4 text-center">
            <TrendingUp size={24} className="text-accent mx-auto mb-2" aria-hidden="true" />
            <div className="text-2xl font-bold text-white mb-1">30%+</div>
            <div className="text-sm text-neutral-300">Increase in bookings</div>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => {
            // Determine if this tier should show "Most Popular" based on A/B test config
            const isPopular = 
              (MOST_POPULAR_TIER === 'faq' && tier.name === 'FAQ Agent') ||
              (MOST_POPULAR_TIER === 'booking' && tier.name === 'Booking Agent') ||
              (MOST_POPULAR_TIER === 'full-service' && tier.name === 'Full-Service Agent');
            
            return (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-neutral-900/40 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col ${
                isPopular
                  ? 'border-accent/40 shadow-lg shadow-accent/10 lg:scale-105'
                  : 'border-white/10 hover:border-accent/30'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-bold text-white shadow-lg">
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
                  <h2 className="text-2xl font-bold text-white mb-2">{tier.name}</h2>
                  <p className="text-sm text-neutral-400">{tier.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  {tier.setupPrice !== 'Custom quote' ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-white">{getDisplayPrice(tier)}</span>
                        {tier.monthlyPrice !== 'Custom' && (
                          <span className="text-neutral-400 text-base">/mo</span>
                        )}
                      </div>
                      {billingCycle === 'annual' && tier.monthlyPrice !== 'Custom' && (
                        <div className="text-xs text-accent font-semibold mb-2">
                          Billed ${Math.round(parseInt(tier.monthlyPrice.replace(/\D/g, '')) * 0.85 * 12)}/year
                        </div>
                      )}
                      <div className="text-sm text-neutral-400">
                        <span className="font-medium text-neutral-300">{tier.setupPrice}</span> one-time setup
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-white mb-2">Custom</div>
                      <div className="text-sm text-neutral-400">Let's discuss your needs</div>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="mb-6 p-4 bg-neutral-950/50 rounded-lg border border-white/5 space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Clock size={16} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-neutral-400 text-xs mb-1">Setup Time</div>
                      <div className="text-white font-medium">{tier.setupTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Users size={16} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-neutral-400 text-xs mb-1">Ideal For</div>
                      <div className="text-white font-medium leading-snug">{tier.bestFor}</div>
                    </div>
                  </div>
                </div>

                {/* Customer Logos & Quote */}
                {tier.customerLogos && tier.customerLogos.length > 0 && (
                  <div className="mb-6 p-4 bg-neutral-950/50 rounded-lg border border-white/5">
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-3">
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
                      <p className="text-xs text-neutral-400 italic leading-relaxed">
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
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-accent/20"
                            aria-hidden="true"
                          >
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-neutral-200 text-[15px] leading-snug">
                            {feature.text}
                            {feature.note && (
                              <span className="text-neutral-500 text-xs ml-1">{feature.note}</span>
                            )}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Add-ons */}
                {tier.addOns && tier.addOns.length > 0 && (
                  <div className="mb-6 p-4 bg-neutral-950/50 rounded-lg border border-white/5">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">
                      Popular Add-ons
                    </p>
                    <ul className="space-y-2">
                      {tier.addOns.map((addon, idx) => (
                        <li key={idx} className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400">{addon.name}</span>
                          <span className="text-neutral-300 font-semibold">{addon.price}</span>
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
                      ? 'bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-accent/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent/30'
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
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent/30 rounded-lg font-medium transition-all inline-flex items-center gap-2"
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
            <div className="bg-neutral-900/30 border border-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-neutral-300 font-semibold">Feature</th>
                    <th className="text-center p-4 text-neutral-300 font-semibold">FAQ Agent</th>
                    <th className="text-center p-4 text-neutral-300 font-semibold bg-accent/5">
                      Booking Agent
                      {MOST_POPULAR_TIER === 'booking' && (
                        <div className="text-xs text-accent font-normal mt-1">Most Popular</div>
                      )}
                    </th>
                    <th className="text-center p-4 text-neutral-300 font-semibold">
                      Full-Service
                    </th>
                    <th className="text-center p-4 text-neutral-300 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  {/* Pricing Row */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium text-white">Starting Price</td>
                    <td className="text-center p-4">$500 setup<br />$99/mo</td>
                    <td className="text-center p-4 bg-accent/5">$1,500 setup<br />$199/mo</td>
                    <td className="text-center p-4">$3,000 setup<br />$399/mo</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  {/* Setup Time */}
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium text-white">Setup Time</td>
                    <td className="text-center p-4">1-2 days</td>
                    <td className="text-center p-4 bg-accent/5">3-5 days</td>
                    <td className="text-center p-4">1-2 weeks</td>
                    <td className="text-center p-4">Custom</td>
                  </tr>
                  {/* FAQ Answering */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">FAQ Answering</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4 bg-accent/5">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Calendar Integration */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Calendar Integration</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Appointment Booking */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Appointment Booking</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* CRM Integration */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">CRM Integration</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Slack/Teams Notifications */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Slack/Teams Notifications</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Payment Processing */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Payment Processing</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Customer Recognition */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Customer Recognition</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* Analytics & Sentiment */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Analytics & Sentiment Tracking</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4 bg-accent/5">Advanced</td>
                    <td className="text-center p-4">Advanced</td>
                    <td className="text-center p-4">Custom Dashboards</td>
                  </tr>
                  {/* Support */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Support Response Time</td>
                    <td className="text-center p-4">24 hours</td>
                    <td className="text-center p-4 bg-accent/5">12 hours</td>
                    <td className="text-center p-4">4 hours</td>
                    <td className="text-center p-4">Dedicated Manager</td>
                  </tr>
                  {/* Integrations Included */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Integrations Included</td>
                    <td className="text-center p-4">0</td>
                    <td className="text-center p-4 bg-accent/5">1</td>
                    <td className="text-center p-4">3</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  {/* Custom Workflows */}
                  <tr className="border-b border-white/5">
                    <td className="p-4">Custom Workflows</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                  {/* White Label */}
                  <tr>
                    <td className="p-4">White-Label Options</td>
                    <td className="text-center p-4 text-neutral-600">—</td>
                    <td className="text-center p-4 bg-accent/5 text-neutral-600">—</td>
                    <td className="text-center p-4">Add-on</td>
                    <td className="text-center p-4">
                      <Check size={20} className="text-accent inline" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* How Our Pricing Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              How Our Pricing Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">One-Time Setup Fee</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We build and configure your AI agent custom to your business. You keep all your
                  existing accounts—we just connect them.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Monthly Maintenance</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Includes unlimited agent updates, performance analytics, call transcripts,
                  sentiment tracking, and ongoing optimization.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">You Own Your Data</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We never charge monthly for third-party tools. You maintain your Calendly, CRM,
                  and payment accounts directly. We just handle the AI.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 text-center">
              <p className="text-neutral-400 mb-6">
                <strong className="text-white">Not sure which tier you need?</strong> Book a
                15-minute consultation and we'll recommend the right package for your business.
              </p>
              <button
                onClick={() => {
                  trackPricingClick('Free Consultation', 'Bottom CTA');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
              >
                Book Free Consultation
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
          <p className="text-neutral-500 text-sm">
            💡 <strong className="text-neutral-400">Compare:</strong> A full-time receptionist costs
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
          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Have questions about pricing or features?</h3>
            <p className="text-neutral-400 mb-6">
              Check out our comprehensive FAQ section below for answers to common questions, or schedule a call with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#faq"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent/30 rounded-lg font-medium transition-all inline-flex items-center gap-2"
              >
                View FAQ
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <button
                onClick={() => {
                  trackPricingClick('FAQ Link', 'Contact Click');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
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

