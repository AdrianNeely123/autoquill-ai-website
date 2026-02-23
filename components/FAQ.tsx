import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does it cost?",
    answer: "We have four tiers to fit any budget. Starter Agent is $29/month plus $0.50 per minute of call time — the easiest way to get started. Booking Agent is $299/month with 600 minutes included and $0.35/min overage. Full-Service Agent is $549/month with 1,200 minutes included and $0.30/min overage. Enterprise is custom pricing with unlimited minutes. All tiers have $0 setup fees. Each tier includes 1 location with additional locations at +$75/mo each."
  },
  {
    question: "How does the Starter tier work?",
    answer: "The Starter Agent is just $29/month with no setup fee and no long-term contract. You pick an industry template (dental, HVAC, plumbing, med spa, etc.), customize it with your business info, and your AI receptionist goes live. You pay $0.50 per minute of actual call time. It's perfect for testing AI call answering before committing to a custom-built agent."
  },
  {
    question: "When should I upgrade from Starter to Booking Agent?",
    answer: "If you're using more than about 540 minutes per month (roughly 18 calls per day at 3 minutes each), the Booking Agent at $299/month becomes more cost-effective than the Starter's $29/month plus per-minute rate. Plus, you get a custom-built AI agent tailored to your business, calendar integration for real-time appointment booking, and advanced analytics — features not available on the Starter tier."
  },
  {
    question: "How long does setup actually take?",
    answer: "Starter Agent: Instant. Self-serve templates, ready in minutes. Booking Agent: ~2 weeks. Custom-built and trained on your business. Full-Service/Enterprise: 2-4 weeks. Advanced integrations and custom workflows. The process is simple: (1) You fill out a 10-minute questionnaire about your business, (2) We build and train your AI agent, (3) You test it and request changes, (4) We give you a phone number and it goes live."
  },
  {
    question: "What if callers hang up when they realize it's AI?",
    answer: "This almost never happens. Less than 1% of callers hang up. Across 60,000+ calls handled, the vast majority of callers don't even realize they're speaking with AI. The AI identifies itself professionally ('Hi, I'm the AI assistant for [Your Business]'), and callers appreciate the immediate answer over voicemail. Industry research shows 89% of callers prefer instant AI service to being put on hold."
  },
  {
    question: "Can I customize the voice and personality?",
    answer: "Absolutely! You can choose the voice gender, accent, speaking speed, and personality (professional, friendly, casual). We'll also train it on your specific terminology, greetings, and brand voice. During setup, you can test different voices and request changes until it sounds exactly how you want."
  },
  {
    question: "What happens if the AI messes up or says something wrong?",
    answer: "We have safeguards in place: (1) The AI only answers questions it's been trained on, (2) If unsure, it collects info and escalates to you, (3) You get a transcript of every call to review, (4) We monitor for errors and fix them immediately. We maintain a near-zero error rate with built-in safeguards. When the AI encounters a question outside its training, it smoothly escalates to your team rather than guessing."
  },
  {
    question: "Will my customers be upset they're talking to AI?",
    answer: "Actually, the opposite is true. Industry research shows 89% of callers prefer an AI that answers immediately over waiting on hold or being sent to voicemail. Our AI is patient, never rushed, remembers every detail, and provides consistent service. Most callers don't even realize it's AI—they just appreciate the fast, helpful service. You can choose whether to disclose it's AI; many of our clients do, and customers love the innovation."
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "Your AI agent is trained on your specific business, but if it encounters something outside its knowledge, it will: (1) Collect the caller's info, (2) Let them know someone will call back, and (3) Immediately notify you via text/email with the question and contact details. You'll get a full transcript so you know exactly what was asked."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use enterprise-grade encryption, and never share your data with third parties. All calls are encrypted in transit and at rest. For healthcare practices requiring HIPAA compliance, we offer a HIPAA-compliant add-on with BAA signing."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! All plans are month-to-month with no long-term commitments. The Starter tier is pay-as-you-go with no commitment at all. Paid plans can be cancelled anytime with 30 days notice. We also offer a 30-day money-back guarantee on Booking Agent and Full-Service Agent plans."
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-white border-t border-gray-200 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        
        {/* Header */}
        <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 shadow-sm mb-6">
            <HelpCircle size={14} className="text-purple-700" aria-hidden="true" />
            <span className="text-xs font-medium text-gray-700 tracking-wide uppercase">Got Questions?</span>
          </div>
          
          <h2 
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Autoquill AI receptionist including pricing, setup, and features. 
            Still have questions? <a href="mailto:adrian@autoquillai.com" className="text-purple-600 hover:underline ml-1">Contact us</a>.
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 hover:shadow-md transition-all"
              role="listitem"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-gray-900 font-semibold text-base md:text-lg pr-8 group-hover:text-purple-700 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    size={20} 
                    className={`${openIndex === index ? 'text-purple-700' : 'text-gray-400'} transition-colors`}
                    aria-hidden="true"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Book a Demo */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-purple-50 via-purple-100/50 to-blue-50 border border-purple-200 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            Book a free 15-minute call. We'll show you exactly how Autoquill works for your business—no pressure, no obligation.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            Book a Free Demo Call
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Or email us at <a href="mailto:adrian@autoquillai.com" className="text-purple-600 hover:underline">adrian@autoquillai.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

