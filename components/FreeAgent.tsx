import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle, HelpCircle, Zap, ShieldCheck } from 'lucide-react';

export const FreeAgent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    industry: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'free-faq-agent-request' })
      });
      setStatus('success');
      // Redirect to thank you page for conversion tracking
      setTimeout(() => {
        window.location.hash = '/thank-you';
      }, 1000);
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  return (
    <section 
      className="pt-32 pb-24 px-6 min-h-screen relative bg-neutral-950 flex flex-col items-center"
      aria-labelledby="free-agent-heading"
      itemScope
      itemType="https://schema.org/Offer"
    >
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6"
          >
             <span className="text-xs font-medium text-accent tracking-wide uppercase">Limited Time Offer</span>
          </motion.div>
          
          <motion.h1
            id="free-agent-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            itemProp="name"
          >
            Claim Your Free <br /> FAQ Voice Agent
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
            itemProp="description"
          >
            Stop answering the same questions 50 times a day. We will build you a custom <strong className="text-neutral-300">AI voice agent</strong> that answers your FAQs instantly—completely free. Perfect for <em>dentists, HVAC companies, plumbers, med spas, law firms</em>, and more.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            
            {/* Value Props Sidebar */}
            <aside className="md:col-span-2 space-y-6" aria-label="Benefits of free FAQ agent">
                <motion.article 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5"
                >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4" aria-hidden="true">
                        <HelpCircle size={20} />
                    </div>
                    <h2 className="text-white font-semibold mb-2">Instant FAQ Answers</h2>
                    <p className="text-sm text-neutral-400">Your AI agent learns your hours, pricing, services, and policies to answer customer questions immediately—24/7.</p>
                </motion.article>

                <motion.article 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5"
                >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4" aria-hidden="true">
                        <Zap size={20} />
                    </div>
                    <h2 className="text-white font-semibold mb-2">Ultra-Low Latency</h2>
                    <p className="text-sm text-neutral-400">Powered by our ultra-fast infrastructure for natural, human-like conversation. Response time under 500ms.</p>
                </motion.article>

                <motion.article 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5"
                >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4" aria-hidden="true">
                        <ShieldCheck size={20} />
                    </div>
                    <h2 className="text-white font-semibold mb-2">No Setup Cost</h2>
                    <p className="text-sm text-neutral-400">We build the initial configuration for you based on your website. Just plug it in and start saving time.</p>
                </motion.article>

                {/* Industries we serve */}
                <div className="p-4 rounded-xl bg-neutral-900/20 border border-white/5">
                  <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">Industries We Serve</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Dental Practices • HVAC Companies • Plumbers • Med Spas • Law Firms • Real Estate • Auto Repair • Veterinary Clinics • Electricians • Chiropractors
                  </p>
                </div>
            </aside>

            {/* Form Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-3 bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
                {/* Subtle animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />

                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 space-y-6" role="status" aria-live="polite">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2 ring-1 ring-green-500/20" aria-hidden="true">
                            <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
                            <p className="text-neutral-300 max-w-sm mx-auto leading-relaxed">
                                We are building your FAQ agent now. You will receive an email shortly with your unique <span className="text-white font-semibold">FAQ Number</span> and setup instructions.
                            </p>
                        </div>
                        <button 
                            onClick={() => window.location.reload()}
                            className="mt-6 text-sm text-neutral-500 hover:text-white transition-colors"
                        >
                            Return to Home
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10" aria-label="Request free FAQ voice agent">
                        <h2 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">Agent Configuration</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Full Name</label>
                                <input 
                                    required
                                    id="name"
                                    name="name"
                                    type="text" 
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                    autoComplete="name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Email Address</label>
                                <input 
                                    required
                                    id="email"
                                    name="email"
                                    type="email" 
                                    placeholder="jane@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Phone Number <span className="text-neutral-600 normal-case tracking-normal">(Optional)</span></label>
                            <input 
                                id="phone"
                                name="phone"
                                type="tel" 
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                autoComplete="tel"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="companyName" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Company Name</label>
                            <input 
                                required
                                id="companyName"
                                name="companyName"
                                type="text" 
                                placeholder="Acme Inc."
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                autoComplete="organization"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                             <div className="space-y-2">
                                <label htmlFor="website" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Company Website</label>
                                <input 
                                    required
                                    id="website"
                                    name="website"
                                    type="text" 
                                    placeholder="example.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                    autoComplete="url"
                                />
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="industry" className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Industry</label>
                                <input 
                                    required
                                    id="industry"
                                    name="industry"
                                    type="text" 
                                    placeholder="e.g. Dental, HVAC, Plumbing"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div className="pt-6">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="w-full bg-white text-neutral-950 hover:bg-neutral-200 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                aria-describedby="submit-description"
                            >
                                {status === 'loading' ? (
                                    <>
                                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                                      <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        Build My Free Agent <Send size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
                        
                        <p className="text-center text-[10px] text-neutral-600 mt-4">
                            By submitting, you agree to receive emails regarding your agent status.
                        </p>
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
