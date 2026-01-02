import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 border-t border-white/5 bg-neutral-950 relative overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-gradient-to-r from-transparent via-accent/5 to-transparent rotate-12 blur-3xl transform" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
          Ready to put your phone <br/> on autopilot?
        </h2>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
          Join thousands of small businesses saving 20+ hours a week. Set up your AI receptionist in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Primary CTA with Border Beam */}
            <div className="relative group w-full sm:w-auto">
                <button 
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                  className="relative z-10 w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20"
                >
                    Book a Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent border-t-white/50 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-border-beam [animation-duration:3s]" />
                </div>
            </div>
            
            {/* Secondary CTA - Subtle & Delayed */}
            <button className="text-neutral-400 font-medium hover:text-white transition-colors py-2 px-6 text-sm">
                Contact Sales
            </button>
        </div>

        {/* Calendly Widget */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/30 shadow-2xl relative mb-16">
             <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/adrian-autoquillai/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=916aea" 
                style={{ minWidth: '320px', height: '700px' }} 
             />
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center opacity-60">
            <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Businesses</div>
            </div>
            <div className="w-px h-8 bg-neutral-800 hidden md:block" />
            <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Availability</div>
            </div>
             <div className="w-px h-8 bg-neutral-800 hidden md:block" />
            <div>
                <div className="text-2xl font-bold text-white">30 Day</div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mt-1">Money Back Guarantee</div>
            </div>
        </div>
      </div>
    </section>
  );
};