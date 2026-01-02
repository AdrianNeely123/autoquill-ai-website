import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We used to miss 20% of calls during lunch hours. Now every single caller gets helped immediately.",
    author: "Dr. Sarah Jenkins",
    role: "Owner, Oakwood Dental",
    industry: "Dental Practice",
    rating: 5
  },
  {
    quote: "It books appointments directly into my calendar. I wake up to a full schedule without lifting a finger.",
    author: "Mark Davis",
    role: "Realtor, Prestige Realty",
    industry: "Real Estate",
    rating: 5
  },
  {
    quote: "The voice is incredibly natural. Clients have no idea they aren't speaking to our front desk.",
    author: "James Miller",
    role: "Partner, Miller Law",
    industry: "Law Firm",
    rating: 5
  },
  {
    quote: "Best investment for our HVAC business. It filters out spam and books urgent repairs instantly.",
    author: "Tom Wilson",
    role: "Manager, GreenLeaf HVAC",
    industry: "HVAC Company",
    rating: 4
  },
  {
    quote: "Setup took less than an hour. We uploaded our service menu and it started answering questions correctly.",
    author: "Lisa Chen",
    role: "Director, Bella Spa",
    industry: "Med Spa",
    rating: 5
  },
  {
    quote: "Scales perfectly. Whether we get 5 calls or 50 calls an hour, everyone gets answered.",
    author: "Robert Fox",
    role: "Ops Manager, CityWide Plumbing",
    industry: "Plumbing",
    rating: 5
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section 
      id="customers" 
      className="py-24 bg-neutral-950 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Testimonial Header */}
        <header className="flex flex-col items-center text-center mb-16">
            <h2 
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              itemProp="name"
            >
              Real businesses. <br/> Real results.
            </h2>
            <p className="text-neutral-400 max-w-xl" itemProp="description">
              See how <strong className="text-neutral-300">dentists, HVAC companies, plumbers, med spas, law firms</strong>, and more are saving 20+ hours per week with Autoquill AI receptionist.
            </p>
        </header>

        {/* Testimonial Grid - Staggered Reveal */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Customer testimonials"
        >
            {testimonials.map((t, i) => (
                <motion.article 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:bg-neutral-900/60 hover:border-accent/30 transition-all duration-300 group"
                    itemScope
                    itemType="https://schema.org/Review"
                    role="listitem"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div 
                          className="flex gap-0.5 text-accent"
                          role="img"
                          aria-label={`Rating: ${t.rating} out of 5 stars`}
                          itemProp="reviewRating"
                          itemScope
                          itemType="https://schema.org/Rating"
                        >
                            <meta itemProp="ratingValue" content={String(t.rating)} />
                            <meta itemProp="bestRating" content="5" />
                             {[...Array(5)].map((_, starIdx) => (
                                 <svg 
                                   key={starIdx} 
                                   className={`w-4 h-4 ${starIdx < t.rating ? 'fill-current' : 'text-neutral-800 fill-neutral-800'}`} 
                                   viewBox="0 0 20 20"
                                   aria-hidden="true"
                                 >
                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                 </svg>
                             ))}
                        </div>
                        <span className="text-[10px] text-neutral-600 uppercase tracking-wider">{t.industry}</span>
                    </div>
                    <blockquote>
                      <p className="text-neutral-300 mb-6 leading-relaxed font-medium" itemProp="reviewBody">
                        "{t.quote}"
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <div 
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:bg-accent group-hover:text-white transition-colors"
                          aria-hidden="true"
                        >
                            {t.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-white" itemProp="name">{t.author}</div>
                            <div className="text-xs text-neutral-500" itemProp="jobTitle">{t.role}</div>
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>

        {/* Additional SEO text */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-sm">
            Trusted by 500+ businesses including dental practices, HVAC contractors, plumbing companies, medical spas, law firms, real estate agencies, auto repair shops, and veterinary clinics.
          </p>
        </div>
      </div>
    </section>
  );
};
