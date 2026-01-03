import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Upload, CheckCircle2, Loader2, AlertCircle, FileAudio, Sparkles } from 'lucide-react';

export const PhoneAudit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    audioFile: null as File | null,
    audioUrl: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [uploadMethod, setUploadMethod] = useState<'upload' | 'url'>('upload');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, audioFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Create FormData for file upload if file is present
      const submitData = new FormData();
      submitData.append('leadMagnet', 'phone-audit'); // Identifier for lead magnet type
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('businessName', formData.businessName);
      
      if (uploadMethod === 'upload' && formData.audioFile) {
        submitData.append('audioFile', formData.audioFile);
      } else {
        submitData.append('audioUrl', formData.audioUrl);
      }

      await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
        method: 'POST',
        body: submitData,
      });
      
      setStatus('success');
      // Redirect to thank you page
      setTimeout(() => {
        window.location.hash = '/thank-you';
      }, 2000);
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  return (
    <section 
      id="phone-audit" 
      className="py-24 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden border-t border-white/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Headphones size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">
              Free AI Analysis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Is Your Voicemail{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Costing You Customers?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Get a free AI-powered audit of your current phone greeting or voicemail. 
            We'll analyze tone, clarity, professionalism, and conversion potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get:
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle2,
                    title: 'Professional Analysis',
                    description: 'AI-powered evaluation of your current phone experience',
                  },
                  {
                    icon: Sparkles,
                    title: 'Improvement Recommendations',
                    description: 'Specific suggestions to increase call-to-booking rate',
                  },
                  {
                    icon: FileAudio,
                    title: 'Comparison Report',
                    description: 'See how your greeting compares to industry standards',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-neutral-400">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-300 mb-2">
                    100% Free • No Obligation
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Over 200+ businesses have improved their phone experience with our audit. 
                    Average improvement: 35% more calls converted to bookings.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Audit Submitted!</h3>
                <p className="text-neutral-400 max-w-xs">
                  We've received your recording. Our AI is analyzing it now. 
                  You'll receive your detailed report via email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Your Free Audit
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Takes 2 minutes • Results in 24 hours
                  </p>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">
                      Full Name
                    </label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">
                      Email
                    </label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">
                      Business Name
                    </label>
                    <input 
                      required
                      name="businessName"
                      type="text" 
                      placeholder="Acme Dental"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">
                      Phone Number
                    </label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Upload Method Toggle */}
                <div className="space-y-3">
                  <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1">
                    Provide Your Greeting/Voicemail
                  </label>
                  
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setUploadMethod('upload')}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        uploadMethod === 'upload'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                      }`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadMethod('url')}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        uploadMethod === 'url'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                      }`}
                    >
                      Provide URL
                    </button>
                  </div>

                  {uploadMethod === 'upload' ? (
                    <div className="relative">
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="audio-upload"
                      />
                      <label
                        htmlFor="audio-upload"
                        className="block w-full bg-neutral-950/50 border-2 border-dashed border-white/10 rounded-lg px-4 py-8 text-center cursor-pointer hover:border-blue-500/50 transition-all"
                      >
                        <Upload size={32} className="text-neutral-600 mx-auto mb-3" />
                        {formData.audioFile ? (
                          <div className="text-sm text-white font-medium">
                            {formData.audioFile.name}
                          </div>
                        ) : (
                          <>
                            <div className="text-sm text-neutral-400 mb-1">
                              Click to upload or drag and drop
                            </div>
                            <div className="text-xs text-neutral-600">
                              MP3, WAV, or M4A (max 10MB)
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                  ) : (
                    <input
                      name="audioUrl"
                      type="url"
                      placeholder="https://example.com/voicemail.mp3"
                      value={formData.audioUrl}
                      onChange={handleChange}
                      className="w-full bg-neutral-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50 transition-all text-sm"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/20"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Headphones size={18} />
                        Get My Free Audit
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
                  We respect your privacy. Your recording is only used for analysis and deleted after 30 days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

