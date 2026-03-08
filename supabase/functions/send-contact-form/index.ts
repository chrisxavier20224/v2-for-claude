import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  fleetSize: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendKey);
    const { firstName, lastName, email, company, fleetSize, message }: ContactFormData = await req.json();

    // Basic validation
    if (!firstName || !email) {
      return new Response(
        JSON.stringify({ error: "First name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error } = await resend.emails.send({
      from: "NEXR Website <noreply@nexr-iot.co.uk>",
      to: ["chris.xavier@nexr-iot.co.uk"],
      subject: `New Demo Request — ${firstName} ${lastName} (${company || "No company"})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1a1a2e; margin-bottom: 24px;">New Demo Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-weight: 500;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Fleet Size</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${fleetSize || "—"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #666; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1a1a2e;">${message}</td>
            </tr>
            ` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent from the NEXR website contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
