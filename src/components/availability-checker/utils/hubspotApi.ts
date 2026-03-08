import { FormData, UTMParams, RecommendationResponse } from '../types';

const HUBSPOT_API_KEY = import.meta.env.VITE_HUBSPOT_PRIVATE_APP_TOKEN;
const HUBSPOT_API_BASE = 'https://api.hubapi.com';
const HUBSPOT_PIPELINE_ID = '57509772';
const HUBSPOT_STAGE_ID = '116350843';

interface HubSpotProperty {
  value: string;
}

interface HubSpotContactRequest {
  properties: {
    [key: string]: HubSpotProperty | string;
  };
}

interface HubSpotContactResponse {
  id: string;
  properties: {
    [key: string]: {
      value: string;
    };
  };
}

interface HubSpotDealRequest {
  properties: {
    [key: string]: string | number;
  };
}

interface HubSpotDealResponse {
  id: string;
  properties: {
    [key: string]: {
      value: string;
    };
  };
}

const buildContactProperties = (
  formData: FormData,
  utmParams: UTMParams,
  recommendation?: RecommendationResponse
) => {
  const properties: { [key: string]: string } = {
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    phone: formData.phone,
  };

  if (formData.company) {
    properties.company = formData.company;
  }

  if (formData.userType) {
    properties.user_type = formData.userType;
  }

  if (formData.urgency) {
    properties.urgency = formData.urgency;
  }

  if (formData.painPoints && formData.painPoints.length > 0) {
    properties.pain_points = formData.painPoints.join(';');
  }

  if (formData.address?.full) {
    properties.address = formData.address.full;
  }

  if (formData.postcode) {
    properties.postcode = formData.postcode;
  }

  if (formData.employeeCount) {
    properties.employee_count = formData.employeeCount;
  }

  // Add UTM parameters
  if (utmParams.utm_source) {
    properties.utm_source = utmParams.utm_source;
  }
  if (utmParams.utm_medium) {
    properties.utm_medium = utmParams.utm_medium;
  }
  if (utmParams.utm_campaign) {
    properties.utm_campaign = utmParams.utm_campaign;
  }
  if (utmParams.utm_content) {
    properties.utm_content = utmParams.utm_content;
  }
  if (utmParams.utm_term) {
    properties.utm_term = utmParams.utm_term;
  }
  if (utmParams.gclid) {
    properties.google_click_id = utmParams.gclid;
  }

  // Add form metadata
  properties.form_submitted_at = new Date().toISOString();
  properties.availability_checker_version = '2.0.0';

  if (recommendation) {
    properties.recommended_product = recommendation.product;
    properties.recommended_price = recommendation.price;
  }

  return properties;
};

const buildDealProperties = (
  formData: FormData,
  utmParams: UTMParams
): { [key: string]: string } => {
  const dealName = `${formData.firstName} ${formData.lastName} - Availability Check`;
  const dealStageMap: { [key: string]: string } = {
    business: 'Contact Enquiry',
    homeworker: 'Contact Enquiry',
    consumer: 'Contact Enquiry',
  };

  const properties: { [key: string]: string } = {
    dealname: dealName,
    pipeline: HUBSPOT_PIPELINE_ID,
    dealstage: HUBSPOT_STAGE_ID,
    amount: '0',
  };

  if (formData.userType) {
    properties.user_type = formData.userType;
  }

  if (utmParams.utm_source) {
    properties.utm_source = utmParams.utm_source;
  }
  if (utmParams.utm_campaign) {
    properties.utm_campaign = utmParams.utm_campaign;
  }

  return properties;
};

export const submitToHubSpot = async (
  formData: FormData,
  utmParams: UTMParams,
  recommendation?: RecommendationResponse
) => {
  if (!HUBSPOT_API_KEY) {
    console.error('HubSpot API key not configured');
    return {
      success: false,
      error: 'HubSpot API not configured',
    };
  }

  try {
    // Step 1: Create or update contact
    const contactProperties = buildContactProperties(formData, utmParams, recommendation);

    const contactResponse = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: contactProperties,
      }),
    });

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json();
      console.error('HubSpot contact creation error:', errorData);
      return {
        success: false,
        error: `Failed to create contact: ${contactResponse.statusText}`,
      };
    }

    const contactData: HubSpotContactResponse = await contactResponse.json();
    const contactId = contactData.id;

    // Step 2: Create deal and associate with contact
    const dealProperties = buildDealProperties(formData, utmParams);

    const dealResponse = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/deals`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: dealProperties,
        associations: [
          {
            types: [
              {
                associationType: 'contact_to_deal',
              },
            ],
            id: contactId,
          },
        ],
      }),
    });

    if (!dealResponse.ok) {
      const errorData = await dealResponse.json();
      console.error('HubSpot deal creation error:', errorData);
      // Don't fail completely - contact was created
      return {
        success: true,
        contactId,
        error: `Warning: Deal creation failed, but contact created`,
      };
    }

    const dealData: HubSpotDealResponse = await dealResponse.json();
    const dealId = dealData.id;

    return {
      success: true,
      contactId,
      dealId,
    };
  } catch (error) {
    console.error('HubSpot submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
