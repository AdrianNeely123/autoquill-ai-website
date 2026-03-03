import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Shield, Clock, ArrowRight, TrendingDown, PhoneOff, DollarSign } from 'lucide-react';

const ROIForm = lazy(() => import('./ROIForm').then(m => ({ default: m.ROIForm })));

const SectionSkeleton: React.FC = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-xl">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
        <div className="h-96 bg-gray-100 rounded-2xl border border-gray-200" />
      </div>
    </div>
  </div>
);

export const CalculatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Missed Call Revenue Calculator | How Much Are You Losing? | Autoquill AI</title>
        <meta
          name="description"
          content="Calculate how much revenue your business loses to missed calls every month. Free calculator for plumbers, HVAC, dentists, and med spas. See your ROI in 30 seconds."
        />
        <link rel="canonical" href="https://autoquillai.com/calculator" />
        <meta property="og:url" content="https://autoquillai.com/calculator" />
        <meta property="og:title" content="Missed Call Revenue Calculator | Autoquill AI" />
        <meta
          property="og:description"
          content="Calculate how much revenue your business loses to missed calls. Free tool for service businesses."
        />
        <meta property="og:type" content="website" />
        {/* Schema.org structured data for the calculator tool */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Missed Call Revenue Calculator',
            url: 'https://autoquillai.com/calculator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description:
              'Free calculator that shows service businesses how much revenue they lose to missed phone calls every month.',
          })}
        </script>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much revenue do missed calls cost a small business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The average service business loses $10,000-$30,000 per month to missed calls. Each missed call represents a potential job worth $250-500, and 80% of callers who reach voicemail do not leave a message or call back.',
                },
              },
              {
                '@type': 'Question',
                name: 'What percentage of business calls go unanswered?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industry data shows that 25-40% of calls to small service businesses go unanswered. During peak hours and after business hours, this rate can exceed 60%. Solo operators miss even more calls while on active jobs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I calculate the cost of missed calls for my business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Multiply your estimated missed calls per month by your average job value, then multiply by your typical close rate on answered calls (usually 60-75%). This gives you the monthly revenue lost to unanswered phones. Our free calculator does this math automatically.',
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero - straight to the point */}
      <section className="pt-32 pb-8 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
              <Phone size={16} className="text-red-500" />
              <span className="text-sm font-medium text-red-600">Free Revenue Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How much revenue are missed calls{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                costing you?
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Most service businesses lose $5,000 to $15,000 per month to unanswered calls. Find out
              your exact number in 30 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <Suspense fallback={<SectionSkeleton />}>
        <ROIForm />
      </Suspense>

      {/* Stats strip */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <PhoneOff size={24} className="text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">62%</div>
              <div className="text-sm text-gray-600">of calls to small businesses go unanswered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-3">
                <TrendingDown size={24} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">85%</div>
              <div className="text-sm text-gray-600">
                of callers who hit voicemail never call back
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-3">
                <DollarSign size={24} className="text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$500-2K</div>
              <div className="text-sm text-gray-600">
                average job value lost per missed call
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stop losing revenue to missed calls
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Autoquill AI answers every call in under 2 rings, 24/7. Books appointments, qualifies
              leads, and texts you the details. Setup takes 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/adrian-autoquillai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-purple-400 rounded-xl font-medium transition-all inline-flex items-center gap-2"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-500" />
                <span>3 booked appointments in 30 days, guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-500" />
                <span>From $299/mo, no contracts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
