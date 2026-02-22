import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import AnimatedCounter from './ui/AnimatedCounter';

interface MetricCountersProps {
  metrics?: { value: React.ReactNode | string; label: string; delay?: number }[];
}

export const MetricCounters: React.FC<MetricCountersProps> = ({ metrics: customMetrics }) => {
  const defaultMetrics = [
    {
      value: <AnimatedCounter end={60000} suffix="+" className="text-4xl md:text-5xl font-bold text-white" />,
      label: 'Calls Handled',
      delay: 0
    },
    {
      value: <AnimatedCounter end={97} suffix="%" className="text-4xl md:text-5xl font-bold text-white" />,
      label: 'Caller Satisfaction',
      delay: 100
    },
    {
      value: <span className="text-4xl md:text-5xl font-bold text-white">&lt;500ms</span>,
      label: 'Average Response Time',
      delay: 200
    },
    {
      value: <span className="text-4xl md:text-5xl font-bold text-white">24/7</span>,
      label: 'Always Available',
      delay: 300
    }
  ];

  const metrics = customMetrics
    ? customMetrics.map((m, i) => ({
        value: typeof m.value === 'string'
          ? <span className="text-4xl md:text-5xl font-bold text-white">{m.value}</span>
          : m.value,
        label: m.label,
        delay: m.delay ?? i * 100
      }))
    : defaultMetrics;

  return (
    <section className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <ScrollReveal key={index} delay={metric.delay} direction="up">
              <div className="text-center">
                <div className="mb-2">
                  {metric.value}
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricCounters;
