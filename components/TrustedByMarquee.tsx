import React from 'react';

const businesses = [
  'Abacus Life',
  'Kuducom',
  'Powell MMA',
  'Camber Partners',
  'Brighton Dental',
  'Thumbs Up Plumbing',
  'Valley Auto Repair',
  'Highline Architects',
];

export const TrustedByMarquee: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-400">
          Trusted by businesses across every sector
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade on edges */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Scrolling container */}
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ '--duration': '30s', '--gap': '0px' } as React.CSSProperties}
            aria-hidden="true"
          >
            {/* First set */}
            {businesses.map((name, index) => (
              <div
                key={`biz-1-${index}`}
                className="mx-8 inline-flex items-center justify-center"
              >
                <span className="font-serif text-lg font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                  {name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {businesses.map((name, index) => (
              <div
                key={`biz-2-${index}`}
                className="mx-8 inline-flex items-center justify-center"
              >
                <span className="font-serif text-lg font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
