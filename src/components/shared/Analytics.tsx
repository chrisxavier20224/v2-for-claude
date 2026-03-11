import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Add your tracking IDs here
const GA_MEASUREMENT_ID = "G-YWR9JZCZP1";
const GOOGLE_ADS_ID = "AW-344295012";
const HUBSPOT_ID = "20314482";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    _hsq: unknown[];
  }
}

// Initialize Google Analytics
const initializeGA = () => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;

  // Load gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll track page views manually
  });

  // Also configure Google Ads for conversion tracking
  if (GOOGLE_ADS_ID) {
    window.gtag("config", GOOGLE_ADS_ID);
  }
};

// Initialize HubSpot
const initializeHubSpot = () => {
  if (!HUBSPOT_ID || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = `//js.hs-scripts.com/${HUBSPOT_ID}.js`;
  document.head.appendChild(script);

  window._hsq = window._hsq || [];
};

// Track page view for GA
const trackPageView = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track page view for HubSpot
const trackHubSpotPageView = (url: string) => {
  if (!HUBSPOT_ID || typeof window === "undefined" || !window._hsq) return;
  
  window._hsq.push(["setPath", url]);
  window._hsq.push(["trackPageView"]);
};

// Custom event tracking
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// HubSpot form tracking
export const trackHubSpotEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  if (HUBSPOT_ID && window._hsq) {
    window._hsq.push(["trackCustomBehavioralEvent", {
      name: eventName,
      properties,
    }]);
  }
};

// Google Ads conversion tracking
export const trackGoogleAdsConversion = (
  conversionLabel: string,
  value?: number,
  currency?: string
) => {
  if (GOOGLE_ADS_ID && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value ?? 1,
      currency: currency ?? "GBP",
    });
  }
};

// Identify user for HubSpot
export const identifyUser = (email: string, properties?: Record<string, unknown>) => {
  if (HUBSPOT_ID && window._hsq) {
    window._hsq.push(["identify", {
      email,
      ...properties,
    }]);
  }
};

const Analytics = () => {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    initializeGA();
    initializeHubSpot();
  }, []);

  // Track page views on route change
  useEffect(() => {
    const url = location.pathname + location.search;
    trackPageView(url);
    trackHubSpotPageView(url);

    // Fire Google Ads conversion on thank-you page
    // Matches the "Conversion Page Availability Checker" action (page load: /thankyou)
    if (location.pathname === "/thankyou") {
      trackGoogleAdsConversion("1TUjCO6M2LsZEOSMlqQB", 1, "GBP");
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;
