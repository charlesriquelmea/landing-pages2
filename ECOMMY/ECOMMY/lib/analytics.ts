// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-6RGGHPKTLP', {
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for eCommerce landing page
export const trackFormSubmission = (formType: 'contact' | 'trial' | 'newsletter') => {
  trackEvent('form_submit', 'engagement', formType);
};

export const trackButtonClick = (buttonName: string, section: string) => {
  trackEvent('click', 'button', `${section}_${buttonName}`);
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section', sectionName);
};

export const trackPricingInteraction = (plan: string, action: 'view' | 'select') => {
  trackEvent(action, 'pricing', plan);
};

export const trackROICalculation = (calculatedValue: number) => {
  trackEvent('calculate', 'roi', 'roi_calculator', calculatedValue);
};

export const trackWhatsAppClick = () => {
  trackEvent('click', 'contact', 'whatsapp_widget');
};
