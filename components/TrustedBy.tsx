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
    <section className="py-12 bg-neutral-950 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
            {/* Updated Stats Bar with Live Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Users size={16} className="text-accent" aria-hidden="true" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-white">{businessCount}</span>
                </div>
                <span className="text-xs text-neutral-400 font-medium">businesses onboarded</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <TrendingUp size={16} className="text-accent" aria-hidden="true" />
                <span className="text-xs text-accent font-semibold">+47 this month</span>
              </div>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap gap-16" style={{ '--gap': '4rem', '--duration': '40s' } as React.CSSProperties}>
                    {companies.concat(companies).map((name, idx) => (
                        <span key={idx} className="text-xl font-bold font-serif text-neutral-600 flex-shrink-0 hover:text-neutral-400 transition-colors cursor-default">
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