import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCalendlyClick } from '../utils/analytics';

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
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-gradient-to-r from-transparent via-accent/5 to-transparent rotate-12 blur-3xl transform" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 
          id="cta-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8"
        >
          Ready to put your phone <br/> on autopilot?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          Join thousands of <strong className="text-neutral-300">dentists, HVAC companies, plumbers, med spas</strong>, and other small businesses saving 20+ hours a week. Set up your <em>AI receptionist</em> in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Primary CTA with Border Beam */}
            <div className="relative group w-full sm:w-auto">
                <button 
                  onClick={() => {
                    trackCalendlyClick('cta_section');
                    window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                  }}
                  className="relative z-10 w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20"
                  aria-label="Book a demo call to see AI receptionist in action"
                >
                    Book a Demo Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-white/50 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-border-beam [animation-duration:3s]" />
                </div>
            </div>
            
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
                data-url="https://calendly.com/adrian-autoquillai/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=916aea" 
                style={{ minWidth: '320px', height: '700px' }} 
             />
        </div>

        <div 
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center opacity-60"
          role="list"
          aria-label="Key statistics"
        >
            <div role="listitem">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Businesses</div>
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
