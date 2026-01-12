// Centralized Google Analytics tracking utilities

/**
 * Standard CTA names for consistent tracking across the site
 */
export const CTA_NAMES = {
  // Primary CTAs
  GET_FREE_AGENT: 'get_free_faq_agent',
  GET_STARTED: 'get_started_risk_free',
  CALL_DEMO: 'call_demo_agent',
  BOOK_CALL: 'book_demo_call',
  
  // Secondary CTAs
  CALCULATE_ROI: 'calculate_roi',
  TRY_DEMO: 'try_demo_first',
  SEE_PRICING: 'see_full_pricing',
  FREE_TRIAL: 'start_free_trial',
  
  // Pricing CTAs
  PRICING_FAQ_TIER: 'pricing_faq_agent',
  PRICING_BOOKING_TIER: 'pricing_booking_agent',
  PRICING_FULL_SERVICE_TIER: 'pricing_full_service_agent',
  PRICING_ENTERPRISE_TIER: 'pricing_enterprise',
  
  // Industry CTAs
  INDUSTRY_GET_AGENT: 'industry_get_agent',
  
  // Other CTAs
  READ_ARTICLE: 'read_blog_article',
  DOWNLOAD_LEAD_MAGNET: 'download_lead_magnet',
} as const;

/**
 * Track a CTA click event
 * @param ctaName - Standardized CTA name from CTA_NAMES
 * @param location - Where on the page the CTA was clicked (e.g., 'hero', 'pricing', 'footer')
 * @param additionalParams - Any additional tracking parameters
 */
export const trackCTAClick = (
  ctaName: string,
  location: string,
  additionalParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      cta_name: ctaName,
      cta_location: location,
      event_category: 'CTA',
      event_label: `${ctaName} - ${location}`,
      ...additionalParams,
    });
  }
  
  // Console log for debugging
  console.log(`[Analytics] CTA Click: ${ctaName} from ${location}`, additionalParams);
};

/**
 * Track phone number click
 * @param location - Where the phone number was clicked
 */
export const trackPhoneClick = (location: string) => {
  trackCTAClick(CTA_NAMES.CALL_DEMO, location, {
    phone_number: '+1 (513) 845-8466',
  });
};

/**
 * Track external link click (Calendly)
 * @param location - Where the link was clicked
 */
export const trackCalendlyClick = (location: string) => {
  trackCTAClick(CTA_NAMES.BOOK_CALL, location, {
    destination: 'calendly',
  });
};

/**
 * Track form submission
 * @param formName - Name of the form
 * @param formData - Form data being submitted
 */
export const trackFormSubmission = (
  formName: string,
  formData?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_name: formName,
      event_category: 'Form',
      event_label: formName,
      ...formData,
    });
  }
  
  console.log(`[Analytics] Form Submission: ${formName}`, formData);
};

/**
 * Track page view
 * @param pageName - Name of the page
 * @param pageUrl - URL of the page
 */
export const trackPageView = (pageName: string, pageUrl: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: pageName,
      page_location: pageUrl,
      page_path: pageUrl,
    });
  }
  
  console.log(`[Analytics] Page View: ${pageName} at ${pageUrl}`);
};

/**
 * Track ROI calculator usage
 * @param calculatedROI - The calculated ROI value
 * @param inputs - Input values used in calculation
 */
export const trackROICalculation = (
  calculatedROI: number,
  inputs: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'roi_calculation', {
      roi_value: calculatedROI,
      event_category: 'Calculator',
      event_label: 'ROI Calculator',
      ...inputs,
    });
  }
  
  console.log(`[Analytics] ROI Calculation: $${calculatedROI}`, inputs);
};

/**
 * Track video play
 * @param videoName - Name/title of the video
 * @param location - Where the video was played
 */
export const trackVideoPlay = (videoName: string, location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'video_play', {
      video_name: videoName,
      video_location: location,
      event_category: 'Video',
      event_label: `${videoName} - ${location}`,
    });
  }
  
  console.log(`[Analytics] Video Play: ${videoName} from ${location}`);
};

