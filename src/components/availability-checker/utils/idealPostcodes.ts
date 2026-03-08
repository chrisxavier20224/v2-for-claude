import { AddressLookupResult, Address } from '../types';

const IDEAL_POSTCODES_API_KEY = import.meta.env.VITE_IDEAL_POSTCODES_API_KEY;
const API_BASE = 'https://api.ideal-postcodes.co.uk/v1';

export const searchAddresses = async (postcode: string): Promise<Address[]> => {
  if (!postcode || postcode.length < 3) {
    return [];
  }

  if (!IDEAL_POSTCODES_API_KEY) {
    console.error('Ideal Postcodes API key not configured');
    return [];
  }

  try {
    const sanitized = postcode.toUpperCase().replace(/\s+/g, '');
    const url = `${API_BASE}/postcodes/${sanitized}?api_key=${IDEAL_POSTCODES_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.result || !Array.isArray(data.result)) {
      return [];
    }

    return data.result.map((item: AddressLookupResult) => ({
      postcode: item.postcode,
      address: item.address,
      full: item.full_address,
    }));
  } catch (error) {
    console.error('Address lookup error:', error);
    return [];
  }
};

export const validatePostcode = (postcode: string): boolean => {
  // UK postcode format validation (basic)
  const postcodeRegex =
    /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i;
  return postcodeRegex.test(postcode.trim());
};

export const formatPostcodeForLookup = (postcode: string): string => {
  return postcode.toUpperCase().replace(/\s+/g, '');
};
