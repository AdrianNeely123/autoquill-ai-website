import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We used to miss 20% of calls during lunch hours. Now every single caller gets helped immediately.",
    author: "Dr. Sarah Jenkins",
    role: "Owner, Oakwood Dental",
    rating: 5
  },
  {
    quote: "It books appointments directly into my calendar. I wake up to a full schedule without lifting a finger.",
    author: "Mark Davis",
    role: "Realtor, Prestige Realty",
    rating: 5
  },
  {
    quote: "The voice is incredibly natural. Clients have no idea they aren't speaking to our front desk.",
    author: "James Miller",
    role: "Partner, Miller Law",
    rating: 5
  },
  {
    quote: "Best investment for our HVAC business. It filters out spam and books urgent repairs instantly.",
    author: "Tom Wilson",
    role: "Manager, GreenLeaf HVAC",
    rating: 4
  },
  {
    quote: "Setup took less than an hour. We uploaded our service menu and it started answering questions correctly.",
    author: "Lisa Chen",
    role: "Director, Bella Spa",
    rating: 5
  },
  {
    quote: "Scales perfectly. Whether we get 5 calls or 50 calls an hour, everyone gets answered.",
    author: "Robert Fox",
    role: "Ops Manager, CityWide",
    rating: 5
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="customers" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Testimonial Header */}
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real businesses. <br/> Real results.
            </h2>
        </div>

        {/* Testimonial Grid - Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:bg-neutral-900/60 hover:border-accent/30 transition-all duration-300 group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-0.5 text-accent">
                             {[...Array(5)].map((_, starIdx) => (
                                 <svg key={starIdx} className={`w-4 h-4 ${starIdx < t.rating ? 'fill-current' : 'text-neutral-800 fill-neutral-800'}`} viewBox="0 0 20 20">
                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                 </svg>
                             ))}
                        </div>
                    </div>
                    <p className="text-neutral-300 mb-6 leading-relaxed font-medium">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:bg-accent group-hover:text-white transition-colors">
                            {t.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-white">{t.author}</div>
                            <div className="text-xs text-neutral-500">{t.role}</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};