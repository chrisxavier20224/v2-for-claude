import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Headphones, Loader2, CheckCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import SEO from "@/components/shared/SEO";
import LazyIframe from "@/components/shared/LazyIframe";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import { trackEvent, trackContactFormConversion } from "@/components/shared/Analytics";

const HUBSPOT_PORTAL_ID = "20314482";
const HUBSPOT_CONTACT_FORM_ID = "b82f1e4b-5892-42c8-b222-53a942076e1e";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    fleetSize: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim()) {
      toast({ title: "Missing fields", description: "Please enter your name and email.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      // Submit to HubSpot Forms API
      const hubspotPayload = {
        fields: [
          { name: "firstname", value: form.firstName },
          { name: "lastname", value: form.lastName },
          { name: "email", value: form.email },
          { name: "company", value: form.company },
          { name: "phone", value: form.fleetSize },
          { name: "message", value: form.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Contact Us",
        },
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_CONTACT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotPayload),
        }
      );

      if (!response.ok) {
        throw new Error(`HubSpot submission failed: ${response.status}`);
      }

      setIsSubmitted(true);
      trackEvent("form_submit", { form: "contact", company: form.company });
      trackContactFormConversion();
      toast({ title: "Request sent", description: "We'll be in touch soon." });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout hideCTA>
      <SEO
        title="Contact Us"
        description="Get in touch with Integra Networks. SD-WAN, leased lines, business WiFi, unified comms, network infrastructure — we design, install, and manage it all."
        keywords="contact Integra Networks, connectivity consultation, managed services, business broadband"
        url="/contact"
      />

      {/* Hero + Form */}
      <section className="relative bg-surface-dark overflow-hidden">
        {/* Satellite map background — faded */}
        <LazyIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4099034284374!2d-0.0837606!3d51.5256258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca5656ca69f%3A0x55fafaa420dc387e!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE!5e1!3m2!1sen!2suk!4v1710720000000!5m2!1sen!2suk"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ border: 0, scale: "1.5", filter: "grayscale(1) brightness(0.15)" }}
          title="Map background"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-surface-dark/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">

            {/* Left: copy + contact info */}
            <AnimatedSection>
              <EyebrowLabel>Let's Talk</EyebrowLabel>
              <h1 className="mb-6 text-heading-1 md:text-display-sm text-surface-dark-foreground">
                Tell us what you need. We'll make it happen.
              </h1>
              <p className="mb-8 text-lg text-surface-dark-muted leading-relaxed">
                SD-WAN, leased lines, business WiFi, unified comms, CCTV, network infrastructure — we design, install, and manage it all. Tell us what you're dealing with and we'll come back with a plan.
              </p>

              {/* Map + Contact details */}
              <div className="space-y-5">
                <div className="rounded-xl overflow-hidden border border-white/10 h-44">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4099034284374!2d-0.0837606!3d51.5256258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca5656ca69f%3A0x55fafaa420dc387e!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE!5e0!3m2!1sen!2suk!4v1710720000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Integra Networks Office Location"
                    className="grayscale contrast-125"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-surface-dark-muted">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">86–90 Paul Street, London, EC2A 4NE</span>
                  </div>
                  <a href="mailto:connect@integra-networks.co.uk" className="flex items-center gap-3 text-surface-dark-muted hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">connect@integra-networks.co.uk</span>
                  </a>
                  <a href="tel:02033887111" className="flex items-center gap-3 text-surface-dark-muted hover:text-primary transition-colors">
                    <Headphones className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">0203 388 7111</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form card */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10 shadow-2xl shadow-black/20">
                <h2 className="text-lg font-medium text-white mb-1">Send us a message</h2>
                <p className="text-sm text-white/50 mb-6">We'll get back to you within one business day.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-medium text-surface-dark-foreground mb-2">Request Received</h3>
                    <p className="text-surface-dark-muted max-w-sm">
                      Thanks, {form.firstName}. We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium text-white/70">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={form.firstName}
                          onChange={handleChange}
                          className="mt-1.5 h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium text-white/70">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={form.lastName}
                          onChange={handleChange}
                          className="mt-1.5 h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white/70">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1.5 h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-white/70">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange}
                        className="mt-1.5 h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="fleetSize" className="block text-xs font-medium text-white/70">
                        Phone Number
                      </label>
                      <Input
                        id="fleetSize"
                        placeholder="Your phone number (optional)"
                        value={form.fleetSize}
                        onChange={handleChange}
                        className="mt-1.5 h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-white/70">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you need — connectivity, WiFi, infrastructure, or all of the above..."
                        value={form.message}
                        onChange={handleChange}
                        className="mt-1.5 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/20"
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base font-semibold shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : "Get a Free Quote"}
                    </Button>
                    <p className="text-xs text-surface-dark-muted/50 text-center">
                      No contracts. No obligation. If we're not the right fit, we'll tell you.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Customer logos — social proof */}
      <HubSpotMeeting
        heading="Or Skip the Form — Book a Call"
        subtitle="Pick a time that works and we'll walk through your options live. No obligation."
        variant="dark"
      />
      <CustomerLogoBar />
    </PageLayout>
  );
};

export default Contact;
