import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does setup take?",
    answer: "Most businesses are up and running in under 2 hours. You provide us with your business info, calendar access, and common questions. We configure your AI agent, test it, and give you a phone number. That's it."
  },
  {
    question: "What if my CRM or calendar isn't supported?",
    answer: "We integrate with all major platforms: Google Calendar, Calendly, Acuity, Salesforce, HubSpot, Zoho, and more. If you use something custom, we can connect via API or Zapier. Over 5,000+ integrations available."
  },
  {
    question: "Can callers tell it's AI?",
    answer: "Our voice AI has sub-500ms latency and sounds completely natural. It handles interruptions, uses natural pauses, and even adapts tone. Most callers have no idea they're speaking with AI. You can hear samples on our demo page."
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "Your AI agent is trained on your specific business, but if it encounters something outside its knowledge, it will: (1) Collect the caller's info, (2) Let them know someone will call back, and (3) Immediately notify you via text/email with the question and contact details."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, absolutely. No long-term contracts. Cancel anytime with 30 days notice. We also offer a 30-day money-back guarantee if you're not satisfied with the results."
  },
  {
    question: "How much does it cost?",
    answer: "Plans start at $199/month for unlimited incoming calls. This replaces a $40,000+/year receptionist. Most businesses save 90% on their front desk costs. Book a demo to get a custom quote for your call volume."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in service-based businesses: dental practices, HVAC companies, plumbers, electricians, med spas, law firms, real estate agencies, auto repair shops, veterinary clinics, and more. Any business that relies on phone bookings."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We're HIPAA compliant, use enterprise-grade encryption, and never share your data with third parties. All calls are encrypted in transit and at rest. We can sign BAAs for medical practices."
  },
  {
    question: "Can the AI handle multiple calls at once?",
    answer: "Yes! Unlike a human receptionist, your AI can handle 5, 50, or 500 simultaneous calls without any degradation in quality. No more busy signals or voicemail during peak hours."
  },
  {
    question: "What about after-hours and weekends?",
    answer: "Your AI agent works 24/7/365. It never takes breaks, never calls in sick, and never goes on vacation. Perfect for emergency services or businesses that want to capture leads outside business hours."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
            <HelpCircle size={14} className="text-accent" aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Got Questions?</span>
          </div>
          
          <h2 
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </h2>
          
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about Autoquill AI receptionist. Still have questions? 
            <a href="mailto:adrian@autoquillai.com" className="text-accent hover:underline ml-1">Contact us</a>.
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
              className="bg-neutral-900/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              role="listitem"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-semibold text-base md:text-lg pr-8 group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    size={20} 
                    className={`${openIndex === index ? 'text-accent' : 'text-neutral-400'} transition-colors`}
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
                      <p className="text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-neutral-900/30 border border-white/5 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-neutral-400 mb-6">
            Book a 15-minute demo call and we'll answer everything specific to your business.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
            className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Book a Demo Call
          </button>
        </div>
      </div>
    </section>
  );
};

