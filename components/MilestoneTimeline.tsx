import React from 'react';
import { Phone, Sparkles, CheckCircle, Rocket } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import ShineButton from './ui/ShineButton';

interface Milestone {
  day: string;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

export const MilestoneTimeline: React.FC = () => {
  const milestones: Milestone[] = [
    {
      day: 'Day 1',
      title: 'Discovery Call',
      description: 'Tell us about your business and how you handle calls',
      icon: Phone,
      delay: 0
    },
    {
      day: 'Day 2-5',
      title: 'AI Build',
      description: 'We train your AI on your business, FAQs, and scheduling',
      icon: Sparkles,
      delay: 150
    },
    {
      day: 'Day 6-10',
      title: 'Testing',
      description: 'Review and test your AI agent with real scenarios',
      icon: CheckCircle,
      delay: 300
    },
    {
      day: '~Day 14',
      title: 'Go Live',
      description: 'Your AI receptionist starts answering calls 24/7',
      icon: Rocket,
      delay: 450
    }
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0} direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              From Signup to Live in Days
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="up">
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined setup process gets your AI receptionist answering calls in about two weeks
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 transform -translate-y-1/2"
               style={{ top: '80px' }}>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLast = index === milestones.length - 1;

              return (
                <ScrollReveal key={index} delay={milestone.delay} direction="up">
                  <div className="relative">
                    {/* Mobile Vertical Line */}
                    {!isLast && (
                      <div className="md:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-purple-400 transform translate-y-4"></div>
                    )}

                    {/* Milestone Card */}
                    <div className="bg-white rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 hover:shadow-lg relative z-10">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4 mx-auto shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Day Label */}
                      <div className="text-sm font-semibold text-purple-600 mb-2 text-center">
                        {milestone.day}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <ScrollReveal delay={600} direction="up">
            <a
              href="https://calendly.com/adrian-autoquillai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ShineButton pulse variant="primary">
                Start Your Setup
              </ShineButton>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MilestoneTimeline;
