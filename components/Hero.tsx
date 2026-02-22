import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Loader2, CheckCircle } from 'lucide-react';
import { LeadQuiz } from './LeadQuiz';
import { trackCTAClick, CTA_NAMES } from '../utils/analytics';
import { BlobBackground } from './ui/BlobBackground';
import { TypewriterText } from './ui/TypewriterText';
import { FloatingMockup } from './ui/FloatingMockup';
import { ShineButton } from './ui/ShineButton';

declare function gtag(...args: unknown[]): void;

// Industry badges for SEO and social proof
const industries = [
  { name: 'Dental Practices', slug: 'dentists' },
  { name: 'HVAC Companies', slug: 'hvac' },
  { name: 'Plumbers', slug: 'plumbers' },
  { name: 'Med Spas', slug: 'medspa' },
];

export const Hero: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callStatus, setCallStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  return (
    <>
      {/* Lead Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <LeadQuiz
            onClose={() => setShowQuiz(false)}
          />
        )}
      </AnimatePresence>

      <section
        id="main-content"
        className="w-full pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
        aria-labelledby="hero-heading"
      >
        {/* Animated Background */}
        <BlobBackground opacity={0.25} />
        <div className="bg-grid-animated absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Two-column layout: content left, phone mockup right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── Left Column: Content ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Enterprise Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-col items-center lg:items-start gap-3 mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 backdrop-blur-md">
                  <span className="flex h-2 w-2 relative" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
                  </span>
                  <span className="text-sm font-bold text-purple-700 uppercase tracking-widest">
                    24/7 AI Phone Receptionist
                  </span>
                </div>
                {/* Offer Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-md backdrop-blur-md">
                  <span className="flex h-2 w-2 relative" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm font-bold text-green-700 tracking-wide">
                    $0 setup fee — limited time
                  </span>
                </div>
              </motion.div>

              {/* Headline with TypewriterText */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
              >
                <span className="sr-only">AI Receptionist - </span>
                Stop Missing{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
                    <TypewriterText
                      words={['Calls', 'Sales', 'Leads', 'Jobs']}
                      typingSpeed={60}
                      deletingSpeed={35}
                      pauseDelay={1200}
                    />
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-purple-200 -z-10 -rotate-1"
                    aria-hidden="true"
                  />
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed"
              >
                <strong className="text-gray-900">Autoquill builds AI receptionists</strong> that answer your calls 24/7,
                qualify leads, and book appointments directly into your calendar—automatically.{' '}
                <span className="text-gray-600">Replace voicemail with a receptionist that never sleeps.</span>
              </motion.p>

              {/* Industry Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 max-w-2xl"
                role="list"
                aria-label="Industries we serve"
              >
                {industries.map((industry, idx) => (
                  <Link
                    key={idx}
                    to={`/${industry.slug}`}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-700 hover:text-purple-700 hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-pointer"
                    role="listitem"
                  >
                    {industry.name}
                  </Link>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              >
                {/* Primary CTA */}
                <ShineButton
                  pulse
                  className="px-10 py-5 text-xl shadow-lg shadow-purple-500/30"
                  onClick={() => {
                    trackCTAClick(CTA_NAMES.BOOK_CALL, 'hero');
                    navigate('/free-agent');
                  }}
                >
                  <Sparkles size={22} aria-hidden="true" />
                  Get Started — $29/mo
                </ShineButton>

                {/* Secondary CTA */}
                <ShineButton
                  variant="outline"
                  className="px-8 py-5 text-lg"
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                >
                  <Phone size={18} aria-hidden="true" />
                  Schedule Your AI Demo
                </ShineButton>
              </motion.div>

              {/* Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 shadow-md"
              >
                <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-yellow-700">3 Appointments in 30 Days — Guaranteed</span>
              </motion.div>

              {/* Quick Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>97% Caller Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Live in 48 Hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>60,000+ Calls Handled</span>
                </div>
              </motion.div>
            </div>

            {/* ── Right Column: Floating Phone Mockup ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
            >
              <FloatingMockup
                callerName="Incoming Lead"
                callerLabel="AI Receptionist"
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
                          body: JSON.stringify({ type: 'outbound-call', phoneNumber: phoneNumber.trim() })
                        });
                        if (res.ok) {
                          setCallStatus('success');
                          if (typeof gtag !== 'undefined') {
                            gtag('event', 'call_me_now', { event_category: 'conversion' });
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
            </motion.div>
          </div>

          {/* ── Full-width sections below the two-column hero ── */}

          {/* Powered By Logo Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium text-center mb-4">
              Powering the best voice agents
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="flex animate-marquee whitespace-nowrap"
                style={{ '--duration': '25s', '--gap': '0px' } as React.CSSProperties}
                aria-hidden="true"
              >
                {['VAPI', 'Calendly', 'HubSpot', 'Google Calendar', 'Salesforce', 'Zapier', 'Stripe', 'Twilio'].map((logo, i) => (
                  <div key={`a-${i}`} className="mx-8 inline-flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">{logo}</span>
                  </div>
                ))}
                {['VAPI', 'Calendly', 'HubSpot', 'Google Calendar', 'Salesforce', 'Zapier', 'Stripe', 'Twilio'].map((logo, i) => (
                  <div key={`b-${i}`} className="mx-8 inline-flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>AI Receptionist Services for Small Businesses</h2>
          <p>Autoquill provides AI-powered phone answering services for dental practices, HVAC companies, plumbers, electricians, med spas, law firms, real estate agents, auto repair shops, and veterinary clinics. Our virtual receptionist answers calls 24/7, books appointments automatically, qualifies leads, and integrates with your existing CRM and calendar systems. Stop losing customers to voicemail and missed calls. Book a free demo today.</p>
          <ul>
            <li>AI receptionist for dentists - Handle patient scheduling and insurance inquiries</li>
            <li>HVAC answering service - 24/7 emergency dispatch and service booking</li>
            <li>Plumber call answering - Never miss an emergency call again</li>
            <li>Med spa receptionist AI - Book treatments and consultations automatically</li>
            <li>Law firm intake - Qualify leads and schedule consultations</li>
            <li>After hours answering service - Capture every lead, even at 2 AM</li>
          </ul>
        </div>
      </section>
    </>
  );
};
