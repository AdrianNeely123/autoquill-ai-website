import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const features = [
    { feature: 'Monthly Cost', ai: '$199/mo', human: '$3,500/mo', advantage: 'ai' },
    { feature: 'Availability', ai: '24/7/365', human: '40 hrs/week', advantage: 'ai' },
    { feature: 'Sick Days', ai: 'Never', human: '10 days/year', advantage: 'ai' },
    { feature: 'Training Time', ai: '48 hours', human: '2-4 weeks', advantage: 'ai' },
    { feature: 'Error Rate', ai: '0.3%', human: '15-20%', advantage: 'ai' },
    { feature: 'Handles Multiple Calls', ai: 'Unlimited', human: '1 at a time', advantage: 'ai' },
    { feature: 'Appointment Booking', ai: 'Instant', human: 'Manual entry', advantage: 'ai' },
    { feature: 'Call Transcripts', ai: 'Every call', human: 'Handwritten notes', advantage: 'ai' },
    { feature: 'Setup Cost', ai: '$1,500 one-time', human: '$0', advantage: 'human' },
    { feature: 'Emotional Connection', ai: 'Professional', human: 'Personal touch', advantage: 'human' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 mb-6"
          >
            <Zap size={16} className="text-purple-700" />
            <span className="text-sm font-medium text-purple-700">The Honest Comparison</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            AI Agent vs. Human Receptionist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We're not here to replace humans entirely—but for answering calls 24/7, 
            the numbers don't lie.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-gray-200">
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">
              Feature
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg">
                <Zap size={16} className="text-white" />
                <span className="text-sm font-bold text-white">AutoQuill AI</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg">
                <span className="text-sm font-bold text-gray-700">Human Receptionist</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  item.advantage === 'ai' ? 'bg-purple-50/30' : 'bg-white'
                }`}
              >
                {/* Feature Name */}
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{item.feature}</span>
                </div>

                {/* AI Value */}
                <div className="flex items-center justify-center">
                  <div className={`flex items-center gap-2 ${
                    item.advantage === 'ai' ? 'text-purple-700 font-bold' : 'text-gray-700'
                  }`}>
                    {item.advantage === 'ai' && <Check size={18} className="text-green-600" />}
                    <span className="text-sm">{item.ai}</span>
                  </div>
                </div>

                {/* Human Value */}
                <div className="flex items-center justify-center">
                  <div className={`flex items-center gap-2 ${
                    item.advantage === 'human' ? 'text-gray-900 font-bold' : 'text-gray-600'
                  }`}>
                    {item.advantage === 'human' && <Check size={18} className="text-green-600" />}
                    {item.advantage === 'ai' && <X size={18} className="text-red-400" />}
                    <span className="text-sm">{item.human}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
            <p className="text-white font-bold text-lg mb-2">
              💡 The Reality: You don't have to choose just one
            </p>
            <p className="text-purple-100 text-sm max-w-2xl mx-auto">
              Use AI for after-hours, overflow calls, and basic questions. 
              Let your human team focus on high-value conversations and complex cases.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => window.location.hash = '/free-agent'}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2"
          >
            Get Started Risk-Free
            <span className="text-sm font-normal">→</span>
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Live in 48 hours • No credit card • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

