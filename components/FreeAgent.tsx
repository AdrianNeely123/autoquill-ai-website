import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export const FreeAgent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessName: '',
    industry: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://adrianworksapce.app.n8n.cloud/webhook/starter-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'starter-checkout' })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.checkoutUrl) {
        setStatus('success');
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout failed', error);
      setStatus('error');
    }
  };

  return (
    <section
      className="pt-24 pb-24 px-6 min-h-screen relative bg-white flex flex-col items-center"
      aria-labelledby="free-agent-heading"
    >
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-8">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-gray-200 shadow-sm mb-6"
          >
             <span className="text-xs font-medium text-accent tracking-wide uppercase">Get Started in Minutes</span>
          </motion.div>
          
          <motion.h1
            id="free-agent-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Get Your AI <br /> Receptionist Live
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Stop answering the same questions 50 times a day. Get a custom <strong className="text-gray-700">AI voice agent</strong> that answers your FAQs instantly—starting at just $29/mo. Perfect for <em>dentists, HVAC companies, plumbers, med spas, law firms</em>, and more.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

            {/* Pricing Box - Left Side */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-br from-accent/10 to-purple-500/10 border-2 border-accent/30 rounded-2xl p-6 h-fit sticky top-24"
              aria-label="Pricing details"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 rounded-full mb-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">What You Get</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">✅ Custom AI Training</span>
                  <span className="font-bold text-gray-900">$300</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">✅ Voice Configuration</span>
                  <span className="font-bold text-gray-900">$150</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">✅ 30-Day Free Maintenance</span>
                  <span className="font-bold text-gray-900">$99</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">✅ Unlimited FAQ Answers</span>
                  <span className="font-bold text-gray-900">Priceless</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">✅ Live Instantly</span>
                  <span className="font-bold text-gray-900">$200</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-gray-200 pt-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Total Value:</span>
                  <span className="text-2xl font-bold text-gray-900 line-through decoration-red-500">$749</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold text-lg">Your Investment Today:</span>
                  <span className="text-4xl font-bold text-accent">$29<span className="text-lg text-gray-600">/mo</span></span>
                </div>
              </div>

              {/* SCARCITY */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-700 font-medium">
                  7-day money-back guarantee · No long-term contract
                </p>
              </div>
            </motion.aside>

            {/* Form Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-3 bg-gray-50/40 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
                {/* Subtle animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />

                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 space-y-6" role="status" aria-live="polite">
                        <Loader2 size={40} className="animate-spin text-accent" aria-hidden="true" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to Stripe...</h2>
                            <p className="text-gray-700 max-w-sm mx-auto leading-relaxed">
                                You are being redirected to our secure payment page. If you are not redirected automatically,{' '}
                                <button onClick={() => setStatus('idle')} className="text-accent underline">click here to try again</button>.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10" aria-label="Request free FAQ voice agent">
                        <div className="mb-6 border-b border-white/5 pb-4">
                          <h2 className="text-xl font-bold text-gray-900 mb-2">Get Started in 30 Seconds</h2>
                          <div className="flex items-center gap-2 text-xs text-green-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span>We'll build your agent based on your website</span>
                          </div>
                        </div>
                        
                        {/* Simplified 3-field form */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Your Name</label>
                                <input 
                                    required
                                    id="name"
                                    name="name"
                                    type="text" 
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-base"
                                    autoComplete="name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Email Address</label>
                                <input 
                                    required
                                    id="email"
                                    name="email"
                                    type="email" 
                                    placeholder="jane@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-base"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="website" className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Your Website</label>
                                <input 
                                    required
                                    id="website"
                                    name="website"
                                    type="text" 
                                    placeholder="yourcompany.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-base"
                                    autoComplete="url"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="businessName" className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Business Name</label>
                                <input
                                    required
                                    id="businessName"
                                    name="businessName"
                                    type="text"
                                    placeholder="Acme Dental"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-base"
                                    autoComplete="organization"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="industry" className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Industry</label>
                                <select
                                    required
                                    id="industry"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-base"
                                >
                                    <option value="" disabled>Select your industry</option>
                                    <option value="dentist">Dental Practice</option>
                                    <option value="hvac">HVAC Company</option>
                                    <option value="plumber">Plumbing Company</option>
                                    <option value="medspa">Medical Spa</option>
                                    <option value="law">Law Firm</option>
                                    <option value="realestate">Real Estate</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="w-full bg-neutral-900 text-white hover:bg-neutral-800 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                                aria-describedby="submit-description"
                            >
                                {status === 'loading' ? (
                                    <>
                                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                                      <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        Continue to Payment — $29/mo <Send size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    </>
                                )}
                            </button>
                            <p id="submit-description" className="sr-only">Submit form to request your free FAQ voice agent</p>
                        </div>
                        
                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-xs justify-center mt-2" role="alert">
                                <AlertCircle size={14} aria-hidden="true" />
                                <span>Something went wrong. Please try again later.</span>
                            </div>
                        )}
                        
                        <div className="space-y-2 mt-4">
                          <p className="text-center text-[10px] text-neutral-600">
                            By submitting, you'll be redirected to Stripe for secure payment.
                          </p>
                          <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Secure Stripe checkout
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Cancel anytime
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Live instantly
                            </span>
                          </div>

                          {/* Social Proof Line */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                              Trusted by 25+ businesses · 5.0/5 stars · 60,000+ calls handled
                            </p>
                          </div>
                        </div>
                    </form>
                )}
            </motion.div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Free AI Voice Agent for Small Business</h2>
          <p>
            Get a free FAQ voice agent for your business. Perfect for dental practices, HVAC companies, 
            plumbers, med spas, law firms, real estate agents, and other service businesses. 
            Our AI receptionist answers common questions about your hours, pricing, services, and policies 24/7.
            No credit card required. We build the agent based on your website content.
          </p>
        </div>
      </div>
    </section>
  );
};
