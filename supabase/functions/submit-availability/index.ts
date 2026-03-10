import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface AvailabilityPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_type: string;
  pain_points: string[];
  country: string | null;
  postcode: string;
  admin_ward: string | null;
  admin_district: string | null;
  region: string | null;
  latitude: number | undefined;
  longitude: number | undefined;
  property_coordinates: string | null;
}

/* ------------------------------------------------------------------ */
/*  HubSpot property mapping                                           */
/* ------------------------------------------------------------------ */
const USER_TYPE_MAP: Record<string, string> = {
  business: "Business",
  home_worker: "Home Worker",
  consumer: "Consumer",
};

const COUNTRY_MAP: Record<string, string> = {
  England: "England",
  Scotland: "Scotland",
  Wales: "Wales",
  "Northern Ireland": "Northern Ireland",
};

const PAIN_LABEL_MAP: Record<string, string> = {
  slow_connection: "Slow broadband",
  intermittent: "Connection drops out",
  no_fibre: "No fibre availability",
  need_faster: "Needs faster speeds",
  quoted_thousands: "Quoted thousands for fibre",
  moving: "Moving to new location",
};

/* ------------------------------------------------------------------ */
/*  HubSpot helpers                                                    */
/* ------------------------------------------------------------------ */
async function hubspotRequest(
  token: string,
  path: string,
  method: string,
  body?: unknown,
) {
  const resp = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await resp.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  return { ok: resp.ok, status: resp.status, data };
}

/* ------------------------------------------------------------------ */
/*  Main handler                                                       */
/* ------------------------------------------------------------------ */
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const hubspotToken = Deno.env.get("HUBSPOT_ACCESS_TOKEN");
    if (!hubspotToken) {
      throw new Error("HUBSPOT_ACCESS_TOKEN is not configured");
    }

    const payload: AvailabilityPayload = await req.json();

    // Basic validation
    if (!payload.email || !payload.first_name) {
      return new Response(
        JSON.stringify({ error: "First name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // ── Build HubSpot contact properties ─────────────────────────
    const painText = payload.pain_points
      .map((p) => PAIN_LABEL_MAP[p] || p)
      .join("; ");

    const contactProps: Record<string, string> = {
      firstname: payload.first_name,
      lastname: payload.last_name,
      email: payload.email,
      phone: payload.phone,
      what_kind_of_business_are_you_: USER_TYPE_MAP[payload.user_type] || payload.user_type || "",
      zip: payload.postcode,
      hs_lead_status: "OPEN",
    };

    // Coordinates
    if (payload.property_coordinates) {
      contactProps.property_coordinates = payload.property_coordinates;
      contactProps.coordinate_request_trigger = "False";
    }

    // UK geo location (for Welsh grant segmentation etc.)
    if (payload.country && COUNTRY_MAP[payload.country]) {
      contactProps.uk_geo_location = COUNTRY_MAP[payload.country];
    }

    // Address data from postcode lookup
    if (payload.admin_district) contactProps.city = payload.admin_district;
    if (payload.region) contactProps.state = payload.region;

    // ── Upsert contact via batch endpoint ────────────────────────
    const upsertResp = await hubspotRequest(
      hubspotToken,
      "/crm/v3/objects/contacts/batch/upsert",
      "POST",
      {
        inputs: [
          {
            idProperty: "email",
            id: payload.email,
            properties: contactProps,
          },
        ],
      },
    );

    if (!upsertResp.ok) {
      console.error("HubSpot upsert error:", JSON.stringify(upsertResp.data));
      throw new Error(
        `HubSpot contact upsert failed (${upsertResp.status}): ${JSON.stringify(upsertResp.data)}`,
      );
    }

    const contactId = upsertResp.data?.results?.[0]?.id;
    console.log("Contact upserted:", contactId);

    // ── Create deal in pipeline ──────────────────────────────────
    let dealId: string | null = null;

    if (contactId) {
      const dealName = `${payload.first_name} ${payload.last_name} — ${payload.postcode}`;
      const dealDescription = [
        `User type: ${USER_TYPE_MAP[payload.user_type] || payload.user_type}`,
        painText ? `Pain points: ${painText}` : null,
        `Postcode: ${payload.postcode}`,
        payload.property_coordinates ? `Coordinates: ${payload.property_coordinates}` : null,
        payload.admin_ward ? `Ward: ${payload.admin_ward}` : null,
        payload.admin_district ? `District: ${payload.admin_district}` : null,
        payload.region ? `Region: ${payload.region}` : null,
        payload.country ? `Country: ${payload.country}` : null,
        `Source: Website availability checker`,
      ]
        .filter(Boolean)
        .join("\n");

      const dealResp = await hubspotRequest(
        hubspotToken,
        "/crm/v3/objects/deals",
        "POST",
        {
          properties: {
            dealname: dealName,
            pipeline: "57509772",          // New Revised Sales Pipeline
            dealstage: "116350845",        // Contact Enquiry (first stage)
            description: dealDescription,
            hubspot_owner_id: "608068965", // Chris Clapham (sales agent)
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 3,    // deal → contact
                },
              ],
            },
          ],
        },
      );

      if (dealResp.ok) {
        dealId = dealResp.data?.id;
        console.log("Deal created:", dealId);
      } else {
        // Deal creation failure is non-fatal
        console.error("Deal creation failed:", JSON.stringify(dealResp.data));
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        contactId,
        dealId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error: unknown) {
    console.error("Error in submit-availability:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
