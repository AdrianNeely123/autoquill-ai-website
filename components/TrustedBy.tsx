import React from 'react';

const companies = [
  "Oakwood Dental", "Prestige Realty", "Miller & Associates", "GreenLeaf HVAC", "CityWide Logistics", "Bella Spa & Salon", "Valley Auto Repair", "Highline Architects"
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-neutral-950 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
            <p className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-10">Trusted by 500+ Local Businesses</p>
            
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