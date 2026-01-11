import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, Loader2, AlertCircle, Sparkles } from 'lucide-react';

interface ROIResults {
  missedCallsPerWeek: number;
  missedCallsPerMonth: number;
  missedCallsPerYear: number;
  lostRevenuePerMonth: number;
  lostRevenuePerYear: number;
  aiCostPerYear: number;
  receptionistCostPerYear: number;
  savingsVsReceptionist: number;
  roiMultiple: number;
}

export const ROIForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callsPerWeek: '',
    leadValue: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [results, setResults] = useState<ROIResults | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate we have the required calculation fields
    if (!formData.callsPerWeek || !formData.leadValue) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    // Calculate ROI
    const calls = parseInt(formData.callsPerWeek) || 0;
    const value = parseInt(formData.leadValue) || 0;
    
    const missedCallsPerWeek = Math.round(calls * 0.62); // 62% missed rate
    const missedCallsPerMonth = missedCallsPerWeek * 4;
    const missedCallsPerYear = missedCallsPerWeek * 52;
    
    const lostRevenuePerMonth = missedCallsPerMonth * value;
    const lostRevenuePerYear = missedCallsPerYear * value;
    
    const aiCostPerYear = 199 * 12 + 1500; // Booking Agent tier = $3,888
    const receptionistCostPerYear = 45000;
    const savingsVsReceptionist = receptionistCostPerYear - aiCostPerYear;
    const roiMultiple = aiCostPerYear > 0 ? Math.round((lostRevenuePerYear / aiCostPerYear) * 10) / 10 : 0;
    
    const calculatedResults: ROIResults = {
      missedCallsPerWeek,
      missedCallsPerMonth,
      missedCallsPerYear,
      lostRevenuePerMonth,
      lostRevenuePerYear,
      aiCostPerYear,
      receptionistCostPerYear,
      savingsVsReceptionist,
      roiMultiple
    };
    
    // Show calculation after brief loading animation
    setTimeout(() => {
      setResults(calculatedResults);
      setStatus('success');
    }, 800);
    
    // Send to backend in background
    try {
      await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'roi-calculator',
          results: results
        })
      });
    } catch (error) {
      console.error('Submission failed', error);
    }
  };
  
  const handleReset = () => {
    setResults(null);
    setStatus('idle');
    setFormData({ name: '', email: '', phone: '', callsPerWeek: '', leadValue: '' });
  };

  return (
    <section id="roi-calculator" className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-xl relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-gray-200 shadow-sm mb-6 backdrop-blur-md">
            <Calculator size={14} className="text-accent" />
            <span className="text-xs font-medium text-gray-700 tracking-wide uppercase">Revenue Impact Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How much revenue are missed calls <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">costing your business?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            62% of calls to small businesses go unanswered. Enter your details to get a personalized report on your potential revenue leakage.
          </p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
        >
            {/* Subtle animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {results ? (
                <div className="space-y-6 py-4">
                    {/* INSTANT CALCULATION RESULTS */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                            <AlertCircle size={16} className="text-red-400" />
                            <span className="text-sm font-bold text-red-400 uppercase tracking-wider">Revenue Alert</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            You're Losing{' '}
                            <span className="text-red-400">
                              ${results.lostRevenuePerMonth.toLocaleString()}
                            </span>
                            /month
                        </h3>
                        <p className="text-gray-600 text-sm">
                            That's <span className="text-gray-900 font-bold">${results.lostRevenuePerYear.toLocaleString()}/year</span> walking out the door
                        </p>
                    </div>

                    {/* Breakdown Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-1">
                                {results.missedCallsPerWeek}
                            </div>
                            <div className="text-xs text-neutral-500">Missed calls/week</div>
                        </div>
                        <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-red-400 mb-1">
                                {results.missedCallsPerYear}
                            </div>
                            <div className="text-xs text-neutral-500">Lost opportunities/year</div>
                        </div>
                        <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-accent mb-1">
                                {results.roiMultiple}x
                            </div>
                            <div className="text-xs text-neutral-500">ROI with Autoquill</div>
                        </div>
                    </div>

                    {/* Cost Comparison */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                            💰 Your Savings with Autoquill AI
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 text-sm">Receptionist Cost/Year:</span>
                                <span className="font-bold text-gray-900 line-through decoration-red-500">${results.receptionistCostPerYear.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 text-sm">Autoquill AI Cost/Year:</span>
                                <span className="font-bold text-accent">${results.aiCostPerYear.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-green-500/20 pt-3 mt-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-900 font-bold">You Save:</span>
                                    <span className="text-2xl font-bold text-green-400">
                                        ${results.savingsVsReceptionist.toLocaleString()}/year
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Primary CTA: Free Agent */}
                    <div className="bg-purple-600/5 border border-accent/20 rounded-xl p-6 text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                            Ready to Stop the Bleeding?
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                            Get your free FAQ agent and start capturing every lead today.
                        </p>
                        <button
                            onClick={() => { window.location.hash = '/free-agent'; }}
                            className="w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2"
                        >
                            <Sparkles size={18} />
                            Get Your Free Agent Now
                        </button>
                        <p className="text-xs text-neutral-500 mt-3">
                            Setup in 48 hours • No credit card • $749 value
                        </p>
                    </div>

                    <button 
                        onClick={handleReset}
                        className="w-full text-sm text-neutral-500 hover:text-gray-900 underline transition-colors"
                    >
                        ← Calculate for another business
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Full Name</label>
                            <input 
                                required
                                name="name"
                                type="text" 
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Email Address</label>
                            <input 
                                required
                                name="email"
                                type="email" 
                                placeholder="jane@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Phone Number <span className="text-neutral-600 normal-case tracking-normal">(Optional)</span></label>
                        <input 
                            name="phone"
                            type="tel" 
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="space-y-2 relative group/input">
                             <div className="absolute -left-px top-8 bottom-0 w-0.5 bg-purple-600/50 opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                            <label className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Weekly Calls</label>
                            <input 
                                required
                                name="callsPerWeek"
                                type="number" 
                                placeholder="e.g. 50"
                                value={formData.callsPerWeek}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-2 relative group/input">
                             <div className="absolute -left-px top-8 bottom-0 w-0.5 bg-purple-600/50 opacity-0 group-focus-within/input:opacity-100 transition-opacity" />
                            <label className="text-xs font-medium text-gray-600 uppercase tracking-wider ml-1">Avg. Lead Value ($)</label>
                            <input 
                                required
                                name="leadValue"
                                type="number" 
                                placeholder="e.g. 250"
                                value={formData.leadValue}
                                onChange={handleChange}
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent/50 transition-all text-sm"
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
                            <span>Please fill in all required fields to calculate your savings.</span>
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