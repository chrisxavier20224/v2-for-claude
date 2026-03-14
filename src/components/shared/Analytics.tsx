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

  // Load gtag script for GA4
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  // Load gtag script for Google Ads conversion tracking
  // CRITICAL: Without this explicit script tag, the AW container never loads
  // and conversion events are silently lost (dataLayer pushes are ignored).
  // The GA4 gtag.js does NOT dynamically load the AW container on its own.
  if (GOOGLE_ADS_ID) {
    const awScript = document.createElement("script");
    awScript.async = true;
    awScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(awScript);
  }

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

// ── Global phone-call click tracking (event delegation) ──────────────
// Listens for clicks on any <a href="tel:..."> across the entire site
// so we don't need to add onClick handlers to 14+ files individually.
const initPhoneClickTracking = () => {
  if (typeof window === "undefined") return;
  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
    if (!link) return;

    const phoneNumber = link.href.replace("tel:", "");

    // GA4 event — can be imported as a conversion in Google Ads
    trackEvent("phone_call_click", {
      phone_number: phoneNumber,
      link_text: link.textContent?.trim() || "Call Us",
      page_path: window.location.pathname,
    });

    // Direct Google Ads conversion — "Phone Call Click" action
    // Label can be updated once the conversion action is created in Google Ads
    trackGoogleAdsConversion("phone_call_click", 1, "GBP");
  });
};

// ── Contact form conversion tracking ─────────────────────────────────
// Call this after a successful contact form submission
export const trackContactFormConversion = () => {
  // GA4 event
  trackEvent("contact_form_submit", {
    page_path: window.location.pathname,
  });

  // Google Ads conversion — "Contact Form Submission" action
  trackGoogleAdsConversion("contact_form_submit", 1, "GBP");
};

const Analytics = () => {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    initializeGA();
    initializeHubSpot();
    initPhoneClickTracking();
  }, []);

  // Track page views on route change
  useEffect(() => {
    const url = location.pathname + location.search;
    trackPageView(url);
    trackHubSpotPageView(url);

    // Fire Google Ads conversion on thank-you page
    // Matches the "2026 Availability Checker" conversion action (Primary, Submit lead forms)
    // Conversion ID: AW-344295012 | Label: GHgLCKWQt9sCEOSMlqQB
    if (location.pathname === "/thankyou") {
      trackGoogleAdsConversion("GHgLCKWQt9sCEOSMlqQB", 1, "GBP");
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;
