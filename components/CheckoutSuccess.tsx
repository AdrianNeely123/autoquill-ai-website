import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Mail, Phone, ArrowLeft, ExternalLink } from 'lucide-react';

export const CheckoutSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        event_category: 'Purchase',
        event_label: 'Starter Agent Checkout',
        value: 29,
        transaction_id: sessionId,
      });
    }

    document.title = 'Payment Successful | Autoquill AI';
  }, [sessionId]);

  // Render Helmet for noindex
  const helmetElement = (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );

  const steps = [
    {
      icon: Mail,
      title: 'Check your email',
      description: "We'll reach out within a few minutes to confirm your order and next steps.",
    },
    {
      icon: Phone,
      title: 'Book your onboarding call',
      description: 'Hop on a quick call so we can build your AI receptionist exactly how you want it.',
    },
    {
      icon: Sparkles,
      title: 'Go live in 48 hours',
      description: "We'll set up call forwarding and your agent will be answering calls.",
    },
  ];

  return (
    <>
    {helmetElement}
    <div className="w-full min-h-screen pt-32 pb-20 px-6 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Thanks for signing up. <strong className="text-gray-900">Book your onboarding call below</strong> and we'll get your AI receptionist live in 48 hours.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50/50 border border-gray-200 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">What Happens Next</h2>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            Trusted by 25+ businesses &middot; 5.0/5 stars &middot; 60,000+ calls handled
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/adrian-autoquillai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-purple-500/20"
          >
            Book Onboarding Call
            <ExternalLink size={16} />
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default CheckoutSuccess;
