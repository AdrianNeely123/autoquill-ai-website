import React, { useState, useEffect } from 'react';
import { TrendingUp, Users } from 'lucide-react';

const companies = [
  "Abacus Life", "Kuducom", "Powell MMA", "Camber Partners", "Brighton Dental", "Thumbs Up Plumbing", "Valley Auto Repair", "Highline Architects"
];

export const TrustedBy: React.FC = () => {
  const [businessCount, setBusinessCount] = useState(523);

  // Simulate live counter (increments occasionally)
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increment between 0-1 every 30 seconds
      if (Math.random() > 0.5) {
        setBusinessCount(prev => prev + 1);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Updated Stats Bar with Live Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-200 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Users size={16} className="text-accent" aria-hidden="true" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{businessCount}</span>
                </div>
                <span className="text-xs text-gray-600 font-medium">businesses powered</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <TrendingUp size={16} className="text-accent" aria-hidden="true" />
                <span className="text-xs text-accent font-semibold">+47 joined this month</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-200 backdrop-blur-sm">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs text-gray-600 font-medium">4.9/5 rating</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">
                Trusted by businesses nationwide
              </p>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap gap-16" style={{ '--gap': '4rem', '--duration': '40s' } as React.CSSProperties}>
                    {companies.concat(companies).map((name, idx) => (
                        <span key={idx} className="text-xl font-bold font-serif text-neutral-600 flex-shrink-0 hover:text-gray-600 transition-colors cursor-default">
                            {name}
                        </span>
                    ))}
                </div>
                 {/* Fade edges for dark mode */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
            </div>
      </div>
    </section>
  );
};