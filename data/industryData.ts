// Industry-specific landing page data
export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo?: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: {
    stat: string;
    title: string;
    description: string;
  }[];
  features: IndustryFeature[];
  integrations: string[];
  testimonial: IndustryTestimonial;
  stats: IndustryStat[];
  faqs: IndustryFAQ[];
  ctaText: string;
  freeAgentCta: string; // Industry-specific free agent CTA
  leadMagnet: {
    title: string;
    description: string;
    buttonText: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export const industryData: Record<string, IndustryData> = {
  dentists: {
    slug: 'dentists',
    name: 'Dental Practices',
    headline: 'Never Miss a Patient Call Again',
    subheadline: 'AI Receptionist for Dental Practices',
    heroDescription: 'Your front desk is overwhelmed. Patients are going to voicemail. New patient opportunities are slipping away. Autoquill AI answers every call, schedules appointments, and handles insurance questions—24/7.',
    painPoints: [
      {
        stat: '40%',
        title: 'of new patient calls go unanswered',
        description: 'When your front desk is busy with check-ins, calls go to voicemail. Those patients call the next dentist on Google.',
      },
      {
        stat: '$200+',
        title: 'average lifetime value per patient',
        description: 'Every missed call isn\'t just one appointment—it\'s years of cleanings, procedures, and referrals walking out the door.',
      },
      {
        stat: '67%',
        title: 'of patients won\'t leave a voicemail',
        description: 'They\'ll just call the next practice. Your voicemail isn\'t capturing leads—it\'s losing them.',
      },
    ],
    features: [
      { title: 'Appointment Scheduling', description: 'Books cleanings, exams, consultations, and emergency visits directly into your practice management software.' },
      { title: 'Insurance Questions', description: 'Answers common insurance questions, explains coverage, and collects insurance info from new patients.' },
      { title: 'Emergency Triage', description: 'Identifies dental emergencies and routes urgent calls to your on-call staff immediately.' },
      { title: 'New Patient Intake', description: 'Collects patient information, medical history basics, and schedules new patient exams.' },
      { title: 'Appointment Reminders', description: 'Sends confirmation texts and handles rescheduling requests automatically.' },
      { title: 'After-Hours Coverage', description: 'Captures every call nights, weekends, and holidays—when 30% of patients try to book.' },
    ],
    integrations: ['Dentrix', 'Eaglesoft', 'Open Dental', 'Curve Dental', 'Google Calendar', 'Calendly'],
    testimonial: {
      quote: 'We went from missing 30% of calls to answering every single one. The AI even books appointments while we\'re with patients. It\'s like having 3 front desk staff for the price of one.',
      author: 'Dr. Sarah Mitchell',
      role: 'Practice Owner',
      company: 'Brighton Dental',
      logo: '/dental-logo.svg',
      results: [
        { metric: '40%', label: 'increase in new patient bookings' },
        { metric: '0', label: 'missed calls during business hours' },
        { metric: '$85K', label: 'additional annual revenue' },
      ],
    },
    stats: [
      { value: '500+', label: 'Dental practices served' },
      { value: '24/7', label: 'Patient call coverage' },
      { value: '< 1 sec', label: 'Average answer time' },
      { value: '40%', label: 'Avg. booking increase' },
    ],
    faqs: [
      {
        question: 'Does it integrate with my practice management software?',
        answer: 'Yes! We integrate with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most major dental practice management systems. We can also connect via API or Zapier for custom setups.',
      },
      {
        question: 'Can it handle insurance questions?',
        answer: 'Absolutely. The AI is trained to answer common insurance questions, explain what\'s typically covered, and collect insurance information from new patients. Complex questions get routed to your team.',
      },
      {
        question: 'What about dental emergencies?',
        answer: 'The AI identifies emergency situations (severe pain, trauma, swelling) and immediately routes those calls to your on-call staff or emergency line. Non-emergencies get scheduled appropriately.',
      },
      {
        question: 'Will patients know they\'re talking to AI?',
        answer: 'Most patients can\'t tell. Our voice AI sounds natural, handles interruptions, and responds in under 500ms. Many practices don\'t disclose it\'s AI, but you can configure a disclosure if required.',
      },
    ],
    ctaText: 'Get Your Dental AI Receptionist',
    freeAgentCta: 'Get Free Patient Scheduling Agent',
    leadMagnet: {
      title: '7 Questions Your Front Desk Should Never Miss',
      description: 'Free checklist: The exact questions that turn callers into booked patients',
      buttonText: 'Get Free Checklist',
    },
    metaTitle: 'AI Receptionist for Dentists | Never Miss a Patient Call | Autoquill',
    metaDescription: 'Stop losing patients to voicemail. Autoquill AI receptionist answers every call 24/7, schedules appointments, and handles insurance questions for dental practices.',
  },

  hvac: {
    slug: 'hvac',
    name: 'HVAC Companies',
    headline: 'Capture Every Emergency Call',
    subheadline: 'AI Answering Service for HVAC Companies',
    heroDescription: 'When the AC breaks at 2 AM in July, homeowners don\'t leave voicemails—they call the next company. Autoquill AI answers every call instantly, qualifies the job, and dispatches your team for emergencies.',
    painPoints: [
      {
        stat: '60%',
        title: 'of emergency calls go to voicemail',
        description: 'During peak season, your office can\'t keep up. Every missed emergency call goes straight to your competitor.',
      },
      {
        stat: '$500+',
        title: 'average emergency service ticket',
        description: 'Emergency calls are your highest-margin jobs. Missing them doesn\'t just cost revenue—it costs reputation.',
      },
      {
        stat: '35%',
        title: 'of calls come after hours',
        description: 'HVAC emergencies don\'t wait for business hours. Neither should your phone coverage.',
      },
    ],
    features: [
      { title: 'Emergency Dispatch', description: 'Identifies urgent situations (no heat in winter, no AC in summer) and immediately notifies your on-call technician.' },
      { title: 'Job Qualification', description: 'Asks the right questions: equipment type, age, symptoms, warranty status. Your tech arrives prepared.' },
      { title: 'Service Scheduling', description: 'Books maintenance visits, tune-ups, and installations directly into your calendar.' },
      { title: 'Quote Requests', description: 'Collects project details for new installations and replacements, sends to your sales team.' },
      { title: 'Seasonal Surge Handling', description: 'Handles 10x call volume during heat waves and cold snaps without missing a beat.' },
      { title: '24/7 Coverage', description: 'Nights, weekends, holidays—every call answered in under 1 second.' },
    ],
    integrations: ['ServiceTitan', 'Housecall Pro', 'Jobber', 'FieldEdge', 'Google Calendar', 'Salesforce'],
    testimonial: {
      quote: 'Emergency calls used to go to voicemail and customers would call someone else. Now we capture every emergency job. The ROI paid for itself in the first month.',
      author: 'Mike Johnson',
      role: 'Owner',
      company: 'Johnson HVAC',
      logo: '/kuducom-logo.svg',
      results: [
        { metric: '95%', label: 'of calls answered in under 10 seconds' },
        { metric: '500+', label: 'calls handled monthly' },
        { metric: '$120K', label: 'revenue from emergency calls' },
      ],
    },
    stats: [
      { value: '300+', label: 'HVAC companies served' },
      { value: '< 1 sec', label: 'Average answer time' },
      { value: '95%', label: 'Emergency capture rate' },
      { value: '$120K', label: 'Avg. revenue recovered' },
    ],
    faqs: [
      {
        question: 'How does emergency dispatch work?',
        answer: 'The AI identifies emergencies based on keywords and urgency (no heat, no AC, gas smell, flooding). It immediately sends an SMS/call to your on-call technician with customer details and job info.',
      },
      {
        question: 'Does it integrate with ServiceTitan?',
        answer: 'Yes! We integrate with ServiceTitan, Housecall Pro, Jobber, FieldEdge, and most major field service management platforms. Appointments sync automatically.',
      },
      {
        question: 'Can it handle the summer/winter rush?',
        answer: 'Absolutely. Unlike humans, the AI handles unlimited simultaneous calls. During a heat wave, it can manage 50+ calls at once without any degradation in quality.',
      },
      {
        question: 'What questions does it ask callers?',
        answer: 'It\'s customized to your business, but typically: equipment type/brand, age of system, what\'s happening, when it started, warranty status, and preferred appointment times.',
      },
    ],
    ctaText: 'Get Your HVAC AI Receptionist',
    freeAgentCta: 'Get Free Emergency Dispatch Agent',
    leadMagnet: {
      title: 'Emergency Call Handling Scripts',
      description: 'Free guide: How to qualify and dispatch emergency calls in under 60 seconds',
      buttonText: 'Get Free Scripts',
    },
    metaTitle: 'AI Answering Service for HVAC Companies | 24/7 Emergency Dispatch | Autoquill',
    metaDescription: 'Never miss an emergency call again. Autoquill AI answers HVAC calls 24/7, dispatches emergencies instantly, and books service appointments automatically.',
  },

  plumbers: {
    slug: 'plumbers',
    name: 'Plumbing Businesses',
    headline: 'Answer Calls While You\'re Under the Sink',
    subheadline: 'AI Call Answering for Plumbers',
    heroDescription: 'You can\'t answer the phone when you\'re elbow-deep in a repair. But that ringing phone is your next job—or your competitor\'s. Autoquill AI answers every call, books jobs, and routes emergencies to you instantly.',
    painPoints: [
      {
        stat: '20-30',
        title: 'jobs lost per month to missed calls',
        description: 'When you\'re on a job, calls go unanswered. Each one is a potential customer calling someone else.',
      },
      {
        stat: '$300+',
        title: 'average service call value',
        description: 'That\'s $6,000-9,000 in monthly revenue walking away because you couldn\'t pick up the phone.',
      },
      {
        stat: '45%',
        title: 'of plumbing calls are emergencies',
        description: 'Burst pipes and backed-up sewers can\'t wait. If you don\'t answer, they\'re calling the next plumber.',
      },
    ],
    features: [
      { title: 'Emergency Routing', description: 'Burst pipes, sewage backups, no hot water—emergencies get routed to your cell immediately with full details.' },
      { title: 'Job Booking', description: 'Schedules drain cleaning, water heater service, fixture installs, and inspections into your calendar.' },
      { title: 'Price Estimates', description: 'Gives ballpark pricing for common jobs based on your rates. Sets proper expectations before you arrive.' },
      { title: 'Lead Qualification', description: 'Asks about the problem, property type, and urgency. You know what you\'re walking into.' },
      { title: 'After-Hours Coverage', description: 'Captures every call nights and weekends—when most plumbing emergencies happen.' },
      { title: 'SMS Notifications', description: 'Get instant texts with caller details, job type, and urgency level.' },
    ],
    integrations: ['Housecall Pro', 'Jobber', 'ServiceTitan', 'Google Calendar', 'Calendly', 'Zapier'],
    testimonial: {
      quote: 'I can focus on the job I\'m on without worrying about missing the next one. The AI even schedules appointments while I\'m under a sink. Game changer.',
      author: 'Carlos Rodriguez',
      role: 'Owner',
      company: 'Thumbs Up Plumbing',
      logo: '/thumbsup-plumbing-logo.svg',
      results: [
        { metric: '60%', label: 'more jobs booked per month' },
        { metric: '24/7', label: 'coverage including weekends' },
        { metric: '$95K', label: 'annual revenue increase' },
      ],
    },
    stats: [
      { value: '200+', label: 'Plumbing businesses served' },
      { value: '60%', label: 'Avg. increase in bookings' },
      { value: '24/7', label: 'Emergency coverage' },
      { value: '$95K', label: 'Avg. revenue increase' },
    ],
    faqs: [
      {
        question: 'How fast will I know about emergency calls?',
        answer: 'Instantly. When the AI identifies an emergency (burst pipe, sewage backup, gas smell), you get an immediate SMS and/or phone call with all the details.',
      },
      {
        question: 'Can it give price quotes?',
        answer: 'Yes! You provide your standard rates for common jobs, and the AI gives callers ballpark estimates. For complex jobs, it collects details and lets them know you\'ll provide a quote on-site.',
      },
      {
        question: 'What if I\'m a one-person operation?',
        answer: 'Perfect! Solo plumbers benefit the most. The AI acts as your full-time office staff—answering calls, booking jobs, and handling scheduling while you focus on the work.',
      },
      {
        question: 'Does it work with Housecall Pro?',
        answer: 'Yes! We integrate with Housecall Pro, Jobber, ServiceTitan, and other popular field service apps. New bookings appear directly in your schedule.',
      },
    ],
    ctaText: 'Get Your Plumbing AI Receptionist',
    freeAgentCta: 'Get Free After-Hours Agent',
    leadMagnet: {
      title: 'The Plumber\'s Call Capture Checklist',
      description: 'Free guide: 5 questions to ask every caller that double your booking rate',
      buttonText: 'Get Free Checklist',
    },
    metaTitle: 'AI Call Answering for Plumbers | Never Miss a Job | Autoquill',
    metaDescription: 'Stop losing jobs to missed calls. Autoquill AI answers plumbing calls 24/7, books appointments, routes emergencies, and works while you\'re on the job.',
  },

  medspa: {
    slug: 'medspa',
    name: 'Med Spas',
    headline: 'Convert Every Inquiry Into a Consultation',
    subheadline: 'AI Receptionist for Med Spas',
    heroDescription: 'Your clients expect luxury service from the first call. When inquiries go to voicemail, they book with your competitor. Autoquill AI delivers a premium phone experience 24/7—answering questions, booking consultations, and collecting deposits.',
    painPoints: [
      {
        stat: '$5,000+',
        title: 'average client lifetime value',
        description: 'Med spa clients return for years. One missed consultation call can cost you tens of thousands in lifetime revenue.',
      },
      {
        stat: '70%',
        title: 'of inquiries call outside business hours',
        description: 'People research treatments at night. If you can\'t book them then, they\'ll find someone who can.',
      },
      {
        stat: '40%',
        title: 'of consultations no-show without deposits',
        description: 'Free consultations get forgotten. Collecting deposits upfront dramatically improves show rates.',
      },
    ],
    features: [
      { title: 'Treatment Inquiries', description: 'Answers questions about Botox, fillers, laser treatments, body contouring, and more with accurate, on-brand information.' },
      { title: 'Consultation Booking', description: 'Schedules consultations for all services, checks provider availability, and sends confirmation details.' },
      { title: 'Deposit Collection', description: 'Processes consultation deposits via Stripe or Square to reduce no-shows and qualify serious clients.' },
      { title: 'Pricing Information', description: 'Provides treatment pricing ranges and package options based on your rate card.' },
      { title: 'VIP Client Recognition', description: 'Identifies returning clients and provides personalized service based on their history.' },
      { title: 'After-Hours Booking', description: 'Captures high-intent leads when they\'re researching at 10 PM and ready to book.' },
    ],
    integrations: ['Vagaro', 'Booker', 'Zenoti', 'Boulevard', 'Stripe', 'Square', 'Google Calendar'],
    testimonial: {
      quote: 'Our clients expect luxury service. The AI sounds professional, books consultations perfectly, and even processes deposits. It\'s elevated our entire client experience.',
      author: 'Jessica Chen',
      role: 'Owner',
      company: 'Radiant Med Spa',
      logo: '/camber-logo.svg',
      results: [
        { metric: '85%', label: 'more consultation bookings' },
        { metric: '$8K', label: 'average consultation value' },
        { metric: '100%', label: 'deposit collection rate' },
      ],
    },
    stats: [
      { value: '150+', label: 'Med spas served' },
      { value: '85%', label: 'Increase in bookings' },
      { value: '$8K', label: 'Avg. client value' },
      { value: '24/7', label: 'Luxury service coverage' },
    ],
    faqs: [
      {
        question: 'Can it answer detailed treatment questions?',
        answer: 'Yes! The AI is trained on your specific treatments, pricing, and protocols. It can explain procedures, recovery times, expected results, and contraindications accurately.',
      },
      {
        question: 'How does deposit collection work?',
        answer: 'When booking a consultation, the AI can collect a deposit via Stripe or Square. You set the amount. This dramatically reduces no-shows and qualifies serious clients.',
      },
      {
        question: 'Will it match our luxury brand voice?',
        answer: 'Absolutely. We customize the AI\'s tone, vocabulary, and personality to match your brand. It can be warm and welcoming, clinical and professional, or exclusive and high-end.',
      },
      {
        question: 'Does it integrate with Vagaro/Booker?',
        answer: 'Yes! We integrate with Vagaro, Booker, Zenoti, Boulevard, and other med spa booking platforms. Appointments sync automatically.',
      },
    ],
    ctaText: 'Get Your Med Spa AI Receptionist',
    freeAgentCta: 'Get Free Consultation Booking Agent',
    leadMagnet: {
      title: 'Med Spa Inquiry Response Templates',
      description: 'Free templates: Luxury responses that convert inquiries into $5K+ consultations',
      buttonText: 'Get Free Templates',
    },
    metaTitle: 'AI Receptionist for Med Spas | Book More Consultations | Autoquill',
    metaDescription: 'Deliver luxury service 24/7. Autoquill AI answers med spa inquiries, books consultations, collects deposits, and converts more leads into clients.',
  },

  lawyers: {
    slug: 'lawyers',
    name: 'Law Firms',
    headline: 'Never Miss a Potential Client',
    subheadline: 'AI Receptionist for Law Firms',
    heroDescription: 'When someone needs a lawyer, they need one now. If your phone goes to voicemail, they\'re calling the next firm. Autoquill AI answers every call, qualifies potential clients, and schedules consultations—24/7.',
    painPoints: [
      {
        stat: '35%',
        title: 'of legal inquiries call after hours',
        description: 'Accidents, arrests, and legal emergencies don\'t follow business hours. Neither should your intake.',
      },
      {
        stat: '$3,000+',
        title: 'average case value',
        description: 'Every missed intake call is potentially thousands in legal fees going to your competitor.',
      },
      {
        stat: '79%',
        title: 'of people call only one law firm',
        description: 'Most people hire the first firm that answers and seems competent. Be that firm.',
      },
    ],
    features: [
      { title: 'Client Intake', description: 'Collects essential case information: type of matter, timeline, opposing parties, and urgency level.' },
      { title: 'Consultation Scheduling', description: 'Books initial consultations based on attorney availability and practice area.' },
      { title: 'Case Qualification', description: 'Screens calls based on your criteria: case type, jurisdiction, potential value, and conflicts.' },
      { title: 'Urgent Matter Routing', description: 'Criminal arrests, restraining orders, and time-sensitive matters get routed immediately.' },
      { title: 'Conflict Checking', description: 'Collects party names upfront so you can check conflicts before the consultation.' },
      { title: 'After-Hours Coverage', description: 'Captures leads when people are searching "lawyer near me" at midnight.' },
    ],
    integrations: ['Clio', 'MyCase', 'PracticePanther', 'Lawmatics', 'Google Calendar', 'Calendly'],
    testimonial: {
      quote: 'We were missing 40% of intake calls during busy court days. Now every potential client gets answered immediately, qualified, and scheduled. Our consultation bookings doubled.',
      author: 'Michael Torres',
      role: 'Managing Partner',
      company: 'Torres & Associates',
      results: [
        { metric: '100%', label: 'of calls answered' },
        { metric: '2x', label: 'consultation bookings' },
        { metric: '35%', label: 'more signed clients' },
      ],
    },
    stats: [
      { value: '100+', label: 'Law firms served' },
      { value: '100%', label: 'Call answer rate' },
      { value: '2x', label: 'Consultation increase' },
      { value: '24/7', label: 'Intake coverage' },
    ],
    faqs: [
      {
        question: 'Is it compliant with legal ethics rules?',
        answer: 'Yes. The AI is configured to avoid giving legal advice, clearly identifies as an answering service, and follows intake best practices. We can customize disclosures for your jurisdiction.',
      },
      {
        question: 'Can it screen for case types we don\'t handle?',
        answer: 'Absolutely. You define your practice areas and criteria. The AI politely declines matters outside your scope and can provide referral information if desired.',
      },
      {
        question: 'How does conflict checking work?',
        answer: 'The AI collects all party names during intake. You receive this information before any consultation so you can run conflict checks in your practice management system.',
      },
      {
        question: 'Does it integrate with Clio?',
        answer: 'Yes! We integrate with Clio, MyCase, PracticePanther, Lawmatics, and other legal practice management platforms. New intakes sync automatically.',
      },
    ],
    ctaText: 'Get Your Law Firm AI Receptionist',
    freeAgentCta: 'Get Free Client Intake Agent',
    leadMagnet: {
      title: 'Legal Intake Best Practices',
      description: 'Free guide: How to qualify cases and book consultations on the first call',
      buttonText: 'Get Free Guide',
    },
    metaTitle: 'AI Receptionist for Law Firms | 24/7 Client Intake | Autoquill',
    metaDescription: 'Capture every potential client. Autoquill AI answers law firm calls 24/7, qualifies leads, schedules consultations, and handles intake professionally.',
  },
};

export const getIndustryData = (slug: string): IndustryData | undefined => {
  return industryData[slug];
};

export const getAllIndustries = (): IndustryData[] => {
  return Object.values(industryData);
};

