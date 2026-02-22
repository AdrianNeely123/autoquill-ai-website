import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const logos = [
  'VAPI',
  'Calendly',
  'HubSpot',
  'Google Calendar',
  'Salesforce',
  'Zapier',
  'Stripe',
  'Twilio'
];

export const PressLogoMarquee: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal direction="fade" delay={100}>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Powering the best voice agents
          </p>
        </ScrollReveal>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade on edges */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Scrolling container */}
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ '--duration': '25s', '--gap': '0px' } as React.CSSProperties}
            aria-hidden="true"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="mx-8 inline-flex items-center justify-center"
              >
                <span className="font-serif text-2xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                  {logo}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="mx-8 inline-flex items-center justify-center"
              >
                <span className="font-serif text-2xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressLogoMarquee;
