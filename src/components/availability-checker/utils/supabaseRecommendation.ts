import { FormData, RecommendationResponse } from '../types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const getRecommendation = async (
  formData: FormData
): Promise<RecommendationResponse | null> => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase config not available');
    return null;
  }

  try {
    const functionUrl = `${SUPABASE_URL}/functions/v1/recommend`;

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        postcode: formData.postcode,
        painPoints: formData.painPoints,
        userType: formData.userType,
        urgency: formData.urgency,
        address: formData.address?.full,
      }),
    });

    if (!response.ok) {
      console.error('Recommendation API error:', response.statusText);
      return null;
    }

    const data = await response.json();
    return data as RecommendationResponse;
  } catch (error) {
    console.error('Failed to get recommendation:', error);
    return null;
  }
};

export const saveLeadToSupabase = async (
  formData: FormData,
  recommendation?: RecommendationResponse,
  hubspotContactId?: string
): Promise<string | null> => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase config not available');
    return null;
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const { data, error } = await supabase
      .from('leads')
      .insert({
        form_data: formData,
        recommendation,
        hubspot_contact_id: hubspotContactId,
      })
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return null;
    }

    if (data && data.length > 0) {
      return data[0].id;
    }

    return null;
  } catch (error) {
    console.error('Failed to save lead:', error);
    return null;
  }
};
