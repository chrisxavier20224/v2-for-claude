export type UserType = 'business' | 'homeworker' | 'consumer';
export type Urgency = 'now' | 'two_weeks' | 'month' | 'exploring';

export interface FormData {
  firstName: string;
  lastName: string;
  company?: string;
  userType: UserType | null;
  urgency: Urgency | null;
  painPoints: string[];
  postcode: string;
  address?: {
    postcode: string;
    address: string;
    full: string;
  };
  email: string;
  phone: string;
  employeeCount?: string;
}

export interface Address {
  postcode: string;
  address: string;
  full: string;
}

export interface AddressLookupResult {
  id: string;
  postcode: string;
  address: string;
  full_address: string;
}

export interface HubSpotContact {
  firstname: string;
  lastname: string;
  company?: string;
  email: string;
  phone: string;
  user_type?: string;
  urgency?: string;
  pain_points?: string;
  employee_count?: string;
  address?: string;
  postcode?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  google_click_id?: string;
  form_submitted_at?: string;
  availability_checker_version?: string;
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
}

export interface RecommendationRequest {
  postcode: string;
  painPoints: string[];
  userType: UserType;
  urgency: Urgency;
}

export interface RecommendationResponse {
  product: string;
  price: string;
  description: string;
  callToAction: string;
}

export interface SupabaseLeadRecord {
  id: string;
  created_at: string;
  form_data: FormData;
  hubspot_contact_id?: string;
  recommendation?: RecommendationResponse;
}
