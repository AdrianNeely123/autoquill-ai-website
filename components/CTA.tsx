import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCalendlyClick } from '../utils/analytics';
import { BlobBackground } from './ui/BlobBackground';
import { ShineButton } from './ui/ShineButton';
import { ScrollReveal } from './ui/ScrollReveal';

export const CTA: React.FC = () => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      className="py-24 border-t border-white/5 bg-gray-50 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <BlobBackground opacity={0.15} />

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-gradient-to-r from-transparent via-accent/5 to-transparent rotate-12 blur-3xl transform" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <ScrollReveal>
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8"
          >
            Ready to put your phone <br/> on autopilot?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Join <strong className="text-gray-900">dentists, HVAC companies, plumbers, med spas</strong>, and other small businesses saving 20+ hours a week. Set up your <em>AI receptionist</em> in minutes.
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Primary CTA with Shine Effect */}
            <ShineButton
              pulse
              className="w-full sm:w-auto px-8 py-4 text-lg shadow-lg"
              onClick={() => {
                trackCalendlyClick('cta_section');
                window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
              }}
            >
              Book a Demo Call <ArrowRight size={20} />
            </ShineButton>
            
            {/* Secondary CTA - Subtle & Delayed */}
            <a 
              href="mailto:adrian@autoquillai.com"
              className="text-gray-600 font-medium hover:text-gray-900 transition-colors py-2 px-6 text-sm"
            >
                Contact Sales
            </a>
        </div>

        {/* Calendly Widget */}
        <div 
          className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl relative mb-16"
          role="region"
          aria-label="Schedule a demo appointment"
        >
             <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/adrian-autoquillai/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f9fafb&text_color=111827&primary_color=7c3aed" 
                style={{ minWidth: '320px', height: '700px' }} 
             />
        </div>

        <div 
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center opacity-60"
          role="list"
          aria-label="Key statistics"
        >
            <div role="listitem">
                <div className="text-2xl font-bold text-gray-900">60,000+</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Calls Handled</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" aria-hidden="true" />
            <div role="listitem">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Availability</div>
            </div>
             <div className="w-px h-8 bg-gray-200 hidden md:block" aria-hidden="true" />
            <div role="listitem">
                <div className="text-2xl font-bold text-gray-900">30 Day</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Money Back Guarantee</div>
            </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>AI Receptionist for Small Business</h3>
          <p>
            Autoquill provides AI-powered phone answering services for service-based businesses. 
            Our virtual receptionist handles calls for dental practices, HVAC contractors, plumbers, 
            electricians, med spas, law firms, real estate agents, auto repair shops, and veterinary clinics.
            Features include 24/7 call answering, automatic appointment scheduling, lead qualification,
            CRM integration with HubSpot and Salesforce, and natural human-like voice AI.
            Start with a free FAQ agent or book a demo to see how we can help your business never miss a call again.
          </p>
        </div>
      </div>
    </section>
  );
};
