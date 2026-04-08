// All routes to pre-render at build time for SEO
// Used by the prerender script to generate static HTML

const cities = [
  'cincinnati', 'columbus', 'indianapolis', 'louisville', 'nashville',
  'charlotte', 'atlanta', 'tampa', 'jacksonville', 'raleigh',
  'pittsburgh', 'st-louis', 'denver', 'phoenix', 'houston',
  'dallas', 'austin', 'san-antonio', 'richmond', 'charleston',
];

const industries = ['plumber', 'hvac', 'electrician'];
const competitors = ['ruby-receptionists', 'smith-ai', 'answering-service', 'answerconnect', 'patlive', 'davinci-virtual', 'map-communications'];

const articles = [
  'voicemail-is-dead', 'hubspot-integration', 'oakwood-dental-case-study',
  'ethics-of-ai-voice-agents', 'top-5-voice-agent-features',
  'dental-front-desk-overwhelmed', 'hvac-emergency-calls-after-hours',
  'plumber-one-man-operation-scaling', 'medspa-consultation-no-shows',
  'law-firm-intake-after-hours', 'small-business-phone-anxiety',
  'ai-receptionist-vs-answering-service', 'veterinary-clinic-phone-overwhelm',
  'real-estate-lead-response-time', 'google-reviews-phone-experience',
  'ai-receptionist-cost-complete-guide-2026', 'ai-vs-human-receptionist-comparison',
  'best-ai-receptionist-for-dentists', 'hvac-answering-service-24-7-guide',
  'how-ai-phone-agents-increase-appointment-bookings',
  'ai-receptionist-for-medical-spa-guide',
  'what-to-ask-ai-receptionist-provider-before-buying',
  'ai-phone-system-vs-traditional-phone-system',
  'plumbing-answering-service-ai-vs-human',
  'how-to-reduce-no-shows-with-ai-appointment-reminders',
  'best-ai-answering-service-plumbers-2026',
  'how-much-missed-calls-cost-plumbers',
  'ai-receptionist-vs-answering-service-complete-guide',
];

export const routes: string[] = [
  // Core pages
  '/',
  '/pricing',
  '/calculator',
  '/blog',
  '/dentists',
  '/hvac',
  '/plumbers',
  '/medspa',
  // '/free-agent', // self-serve flow temporarily disabled — route now redirects to /
  '/privacy',
  '/terms',

  // Competitor pages
  ...competitors.map((c) => `/vs/${c}`),

  // City pages
  ...cities.flatMap((city) =>
    industries.map((ind) => `/answering-service/${city}-${ind}`)
  ),

  // Blog articles
  ...articles.map((a) => `/article/${a}`),

  // Integration pages
  '/integrations/housecall-pro',
  '/integrations/go-high-level',
];

export default routes;
