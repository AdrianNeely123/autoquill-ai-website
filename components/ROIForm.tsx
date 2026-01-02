import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export const ROIForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callsPerWeek: '',
    leadValue: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  return (
    <section id="roi-calculator" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-xl relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 backdrop-blur-md">
            <Calculator size={14} className="text-accent" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Revenue Impact Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How much revenue are missed calls <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">costing your business?</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            62% of calls to small businesses go unanswered. Enter your details to get a personalized report on your potential revenue leakage.
          </p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
        >
            {/* Subtle animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Analysis Submitted</h3>
                    <p className="text-neutral-400 max-w-xs">
                        We've received your data. Our team is generating your ROI report and will email it to you shortly.
                    </p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-neutral-500 hover:text-white underline transition-colors"
                    >
                        Calculate for another business
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Full Name</label>
                            <input 
                                required
                                name="name"
                                type="text" 
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Email Address</label>
                            <input 
                                required
                                name="email"
                                type="email" 
                                placeholder="jane@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Phone Number <span className="text-neutral-600 normal-case tracking-normal">(Optional)</span></label>
                        <input 
                            name="phone"
                            type="tel" 
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="space-y-2 relative group/input">
                             <div className="absolute -left-px top-8 bottom-0 w-0.5 bg-accent/50 opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Weekly Calls</label>
                            <input 
                                required
                                name="callsPerWeek"
                                type="number" 
                                placeholder="e.g. 50"
                                value={formData.callsPerWeek}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-2 relative group/input">
                             <div className="absolute -left-px top-8 bottom-0 w-0.5 bg-accent/50 opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">Avg. Lead Value ($)</label>
                            <input 
                                required
                                name="leadValue"
                                type="number" 
                                placeholder="e.g. 250"
                                value={formData.leadValue}
                                onChange={handleChange}
                                className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full bg-white text-neutral-950 hover:bg-neutral-200 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            {status === 'loading' ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <>
                                    Calculate My Savings <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                    
                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400 text-xs justify-center mt-2">
                            <AlertCircle size={14} />
                            <span>Something went wrong. Please try again later.</span>
                        </div>
                    )}
                    
                    <p className="text-center text-[10px] text-neutral-600 mt-4">
                        By submitting, you agree to receive your report and occasional updates. We never share your data.
                    </p>
                </form>
            )}
        </motion.div>
      </div>
    </section>
  );
};