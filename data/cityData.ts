// ============================================
// Programmatic SEO: City + Industry Landing Pages
// URL pattern: /answering-service/{city}-{industry}/
// ============================================

export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  localInsight: string; // Unique paragraph about this city's service market
}

export interface CityIndustryPage {
  urlSlug: string; // e.g. "cincinnati-plumber"
  city: CityInfo;
  industry: IndustryTemplate;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: { stat: string; title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  roiPreset: string; // Maps to ROIForm industry preset
}

export interface IndustryTemplate {
  slug: string; // URL slug: "plumber", "hvac", "electrician"
  name: string; // Display: "Plumbers", "HVAC Companies", "Electricians"
  nameSingular: string; // "Plumber", "HVAC Company", "Electrician"
  roiPreset: string; // ROIForm preset key
  avgJobValue: string;
  emergencyExample: string;
  afterHoursScenario: string;
  jobsiteSituation: string;
}

// ============================================
// 20 Target Cities
// ============================================

export const cities: CityInfo[] = [
  {
    slug: 'cincinnati',
    name: 'Cincinnati',
    state: 'Ohio',
    stateAbbr: 'OH',
    localInsight:
      'Cincinnati homeowners deal with aging plumbing infrastructure and extreme seasonal temperature swings. From frozen pipes in January to AC failures in August, service businesses in the Tri-State area handle a steady stream of emergency calls year-round.',
  },
  {
    slug: 'columbus',
    name: 'Columbus',
    state: 'Ohio',
    stateAbbr: 'OH',
    localInsight:
      "As Ohio's fastest-growing metro, Columbus is adding thousands of new homes each year. That growth means more service calls, more competition, and more pressure to answer the phone before someone else does.",
  },
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    state: 'Indiana',
    stateAbbr: 'IN',
    localInsight:
      "Indianapolis service businesses serve a sprawling metro of nearly 2 million people. With long drive times between jobs, contractors spend hours on the road where they can't answer calls. The first company to pick up wins the job.",
  },
  {
    slug: 'louisville',
    name: 'Louisville',
    state: 'Kentucky',
    stateAbbr: 'KY',
    localInsight:
      "Louisville's older housing stock means constant demand for repairs and upgrades. Homeowners in the Highlands, St. Matthews, and surrounding neighborhoods expect fast responses when something breaks.",
  },
  {
    slug: 'nashville',
    name: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    localInsight:
      "Nashville's construction boom has created fierce competition among service businesses. With the metro growing by 80+ people per day, there's plenty of work, but only if you answer the phone when it rings.",
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    localInsight:
      "Charlotte's rapid growth means new subdivisions, new commercial buildings, and non-stop demand for service professionals. The challenge isn't finding work, it's making sure you capture every opportunity that calls in.",
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    localInsight:
      "Atlanta's massive metro area stretches across multiple counties with millions of potential customers. Service businesses here juggle high call volume with long commute times, making it nearly impossible to answer every call personally.",
  },
  {
    slug: 'tampa',
    name: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    localInsight:
      "Tampa Bay's humid climate creates year-round demand for HVAC, plumbing, and electrical services. Storm season adds emergency call spikes that can overwhelm any front desk.",
  },
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    state: 'Florida',
    stateAbbr: 'FL',
    localInsight:
      "As the largest city by area in the continental US, Jacksonville service businesses cover enormous territory. When you're on a job across town, those incoming calls go straight to voicemail and straight to your competitor.",
  },
  {
    slug: 'raleigh',
    name: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    localInsight:
      "The Research Triangle region is one of the fastest-growing metros in the country. Tech-savvy homeowners in Raleigh, Durham, and Chapel Hill expect quick responses and will move on fast if they hit voicemail.",
  },
  {
    slug: 'pittsburgh',
    name: 'Pittsburgh',
    state: 'Pennsylvania',
    stateAbbr: 'PA',
    localInsight:
      "Pittsburgh's aging housing stock and harsh winters create steady demand for emergency repairs. When a pipe bursts at midnight in Shadyside or a furnace dies in Squirrel Hill, homeowners need someone who answers immediately.",
  },
  {
    slug: 'st-louis',
    name: 'St. Louis',
    state: 'Missouri',
    stateAbbr: 'MO',
    localInsight:
      "St. Louis service businesses compete across a metro that spans two states. With extreme temperature swings from brutal summers to freezing winters, the call volume is real, and so is the competition.",
  },
  {
    slug: 'denver',
    name: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    localInsight:
      "Denver's booming population and high cost of living mean homeowners expect premium service. They also expect someone to answer the phone. In a competitive market along the Front Range, response time separates the winners from the rest.",
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    localInsight:
      "Phoenix summers push AC systems to their limits, creating massive seasonal demand spikes. When it's 115 degrees and the AC dies, homeowners are calling every company they can find. The first one to answer gets the $8K+ replacement job.",
  },
  {
    slug: 'houston',
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    localInsight:
      "Houston's massive footprint and extreme heat create non-stop demand for service professionals. With 7 million people in the metro area, the opportunity is enormous, but only for businesses that capture every call.",
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    localInsight:
      "The DFW metroplex is one of the fastest-growing regions in America. New construction, scorching summers, and a massive population base mean constant call volume for service businesses.",
  },
  {
    slug: 'austin',
    name: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    localInsight:
      "Austin's tech-forward population expects instant responses. They'll Google, call, and if nobody answers, they'll call the next business within seconds. In this market, speed to answer is everything.",
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    localInsight:
      "San Antonio's affordable housing market has driven steady population growth. More homes means more service calls, and local businesses need to capture every one to keep up with demand.",
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    state: 'Virginia',
    stateAbbr: 'VA',
    localInsight:
      "Richmond's mix of historic homes and new developments keeps service professionals busy year-round. Older homes need constant maintenance, and new builds need installations. Every missed call is money left on the table.",
  },
  {
    slug: 'charleston',
    name: 'Charleston',
    state: 'South Carolina',
    stateAbbr: 'SC',
    localInsight:
      "Charleston's coastal climate, tourism-driven economy, and rapid growth create strong demand for service businesses. Humidity, salt air, and storms keep the phones ringing for anyone who can answer them.",
  },
];

// ============================================
// Industry Templates
// ============================================

export const industryTemplates: Record<string, IndustryTemplate> = {
  plumber: {
    slug: 'plumber',
    name: 'Plumbers',
    nameSingular: 'Plumber',
    roiPreset: 'plumbers',
    avgJobValue: '$300-2,000',
    emergencyExample: 'a burst pipe at 11 PM',
    afterHoursScenario: 'a flooded basement on a Saturday night',
    jobsiteSituation: "under a house fixing a slab leak and can't reach your phone",
  },
  hvac: {
    slug: 'hvac',
    name: 'HVAC Companies',
    nameSingular: 'HVAC Company',
    roiPreset: 'hvac',
    avgJobValue: '$3,000-10,000',
    emergencyExample: 'an AC failure in the middle of July',
    afterHoursScenario: 'a furnace that died at 2 AM in January',
    jobsiteSituation: "on a rooftop replacing a condenser and can't get to the phone",
  },
  electrician: {
    slug: 'electrician',
    name: 'Electricians',
    nameSingular: 'Electrician',
    roiPreset: 'other',
    avgJobValue: '$200-5,000',
    emergencyExample: 'a power outage in half the house',
    afterHoursScenario: 'sparking outlets at 10 PM on a weeknight',
    jobsiteSituation: "in a crawlspace running wire and can't hear the phone",
  },
};

// ============================================
// Content Generator
// ============================================

export function generateCityIndustryPage(
  citySlug: string,
  industrySlug: string
): CityIndustryPage | null {
  const city = cities.find((c) => c.slug === citySlug);
  const industry = industryTemplates[industrySlug];
  if (!city || !industry) return null;

  const urlSlug = `${city.slug}-${industry.slug}`;

  return {
    urlSlug,
    city,
    industry,
    metaTitle: `AI Answering Service for ${city.name} ${industry.name} | 24/7 Call Handling | Autoquill AI`,
    metaDescription: `Never miss another call in ${city.name}, ${city.stateAbbr}. Autoquill AI answers phone calls for ${industry.name.toLowerCase()} 24/7, books jobs, and captures every lead. From $299/mo. Free demo.`,
    headline: `${city.name} ${industry.name}: Stop Losing Jobs to Missed Calls`,
    subheadline: `AI Answering Service for ${industry.name} in ${city.name}, ${city.stateAbbr}`,
    heroDescription: `When a homeowner in ${city.name} calls about ${industry.emergencyExample}, they need someone to answer now. If that's not your business, it's the next ${industry.nameSingular.toLowerCase()} on Google. Autoquill AI answers every call for ${city.name} ${industry.name.toLowerCase()}, 24/7.`,

    painPoints: [
      {
        stat: '62%',
        title: 'Calls Go Unanswered',
        description: `Most ${industry.name.toLowerCase()} in ${city.name} miss more than half their incoming calls. Every one of those is a potential ${industry.avgJobValue} job going to a competitor.`,
      },
      {
        stat: '85%',
        title: 'Never Call Back',
        description: `When a ${city.name} homeowner hits your voicemail, 85% of them never call back. They call the next company on Google instead.`,
      },
      {
        stat: '24/7',
        title: 'Emergencies Never Wait',
        description: `${city.name} homeowners dealing with ${industry.afterHoursScenario} need help right now. They're calling until someone picks up. If it's not you, it's your competitor.`,
      },
    ],

    howItWorks: [
      {
        step: '1',
        title: 'Connect Your Phone Number',
        description: `We set up call forwarding on your existing ${city.name} business number. No new number, no porting. Takes 5 minutes.`,
      },
      {
        step: '2',
        title: 'AI Answers Every Call',
        description: `Our AI picks up in under 2 rings, sounds natural, handles questions about your services, and books the job on your calendar.`,
      },
      {
        step: '3',
        title: 'You Get the Details',
        description: `Every call is logged. You get a text with the customer's name, issue, and appointment time. Show up and do the work.`,
      },
    ],

    faqs: [
      {
        question: `How does AI phone answering work for ${city.name} ${industry.name.toLowerCase()}?`,
        answer: `We forward your existing ${city.name} business phone number to our AI when you can't answer. The AI picks up in under 2 rings, sounds like a real person, handles common questions about your services, and books appointments on your calendar. You get a text with every detail. When you're available again, calls go directly to you.`,
      },
      {
        question: `What does Autoquill cost for ${industry.name.toLowerCase()} in ${city.name}?`,
        answer: `Plans start at $299/month with 600 minutes included. That's a fraction of what you'd pay for a receptionist or traditional answering service, and the AI never calls in sick or puts callers on hold. No contracts, cancel anytime.`,
      },
      {
        question: `Can the AI handle ${industry.slug === 'plumber' ? 'emergency plumbing' : industry.slug === 'hvac' ? 'emergency HVAC' : 'emergency electrical'} calls?`,
        answer: `Yes. The AI is trained to handle urgent calls, gather the right information (address, issue description, severity), and either book an emergency appointment or escalate to your on-call number based on your rules. It knows the difference between a dripping faucet and ${industry.emergencyExample}.`,
      },
      {
        question: `How fast can I get set up in ${city.name}?`,
        answer: `Most ${industry.name.toLowerCase()} are fully live within 48 hours. We configure the AI to your specific services, service area within ${city.name}, and scheduling preferences. You just need to set up call forwarding on your current number.`,
      },
      {
        question: `Will callers know they're talking to an AI?`,
        answer: `Our AI uses natural, conversational language trained specifically for ${industry.name.toLowerCase()}. Most callers don't notice the difference. It handles small talk, answers service questions, provides pricing ranges you set, and books appointments naturally.`,
      },
      {
        question: `What if I already have a receptionist or answering service?`,
        answer: `Many ${city.name} ${industry.name.toLowerCase()} use Autoquill as overflow and after-hours coverage. When your receptionist is on another call, at lunch, or after 5 PM, the AI takes over seamlessly. It costs a fraction of hiring a second receptionist.`,
      },
    ],

    roiPreset: industry.roiPreset,
  };
}

// ============================================
// URL slug parser
// ============================================

export function parseCityIndustrySlug(
  slug: string
): { citySlug: string; industrySlug: string } | null {
  // Try matching against known industry slugs from the end
  for (const indSlug of Object.keys(industryTemplates)) {
    if (slug.endsWith(`-${indSlug}`)) {
      const citySlug = slug.slice(0, -(indSlug.length + 1));
      if (cities.some((c) => c.slug === citySlug)) {
        return { citySlug, industrySlug: indSlug };
      }
    }
  }
  return null;
}

// ============================================
// Generate all valid URL slugs (for sitemap / prerendering)
// ============================================

export function getAllCityIndustrySlugs(): string[] {
  const slugs: string[] = [];
  for (const city of cities) {
    for (const indKey of Object.keys(industryTemplates)) {
      slugs.push(`${city.slug}-${industryTemplates[indKey].slug}`);
    }
  }
  return slugs;
}
