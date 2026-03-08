import { useEffect } from 'react';
import { UTMParams } from '../types';

export const useUTMCapture = (): UTMParams => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return;
    }

    const sessionStorage = window.sessionStorage;
    const searchParams = new URLSearchParams(window.location.search);

    const utmParams: UTMParams = {};

    // Capture UTM parameters
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_content = searchParams.get('utm_content');
    const utm_term = searchParams.get('utm_term');
    const gclid = searchParams.get('gclid');

    if (utm_source) utmParams.utm_source = utm_source;
    if (utm_medium) utmParams.utm_medium = utm_medium;
    if (utm_campaign) utmParams.utm_campaign = utm_campaign;
    if (utm_content) utmParams.utm_content = utm_content;
    if (utm_term) utmParams.utm_term = utm_term;
    if (gclid) utmParams.gclid = gclid;

    // Store in sessionStorage for later use
    if (Object.keys(utmParams).length > 0) {
      sessionStorage.setItem('integra_utm_params', JSON.stringify(utmParams));
    }
  }, []);

  // Retrieve from sessionStorage
  if (typeof window !== 'undefined') {
    const stored = window.sessionStorage.getItem('integra_utm_params');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {};
      }
    }
  }

  return {};
};

export const getUTMParamsFromStorage = (): UTMParams => {
  if (typeof window === 'undefined') {
    return {};
  }

  const stored = window.sessionStorage.getItem('integra_utm_params');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }

  return {};
};
