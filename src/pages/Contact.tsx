import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Headphones, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import Placeholder from "@/components/shared/Placeholder";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DataFlowHero from "@/components/shared/DataFlowHero";
import SEO from "@/components/shared/SEO";
import LazyIframe from "@/components/shared/LazyIframe";
import { trackEvent } from "@/components/shared/Analytics";


const contactMethods = [
  {
    icon: Mail,
    title: "General Enquiries",
    email: "connect@integra-networks.co.uk",
    description: "Questions, ideas, or just want to say hello"
  },
  {
    icon: Headphones,
    title: "Support",
    email: "support@integra-networks.co.uk",
    description: "For customers who need a hand"
  },
  {
    icon: MapPin,
    title: "London Office",
    email: "86–90 Paul Street",
    description: "London, EC2A 4NE"
  },
];

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
      const { data, error } = await supabase.functions.invoke("send-contact-form", {
        body: form,
      });
      if (error) throw error;
      setIsSubmitted(true);
      trackEvent("form_submit", { form: "contact", company: form.company });
      toast({ title: "Request sent", description: "We'll be in touch soon." });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Get in touch with Integra Networks. Whether you need connectivity solutions, managed services, or just want to discuss your requirements — we're here to help."
        keywords="contact Integra Networks, connectivity consultation, managed services, business broadband"
        url="/contact"
      />
      {/* Hero */}
      <Section variant="gradient" size="xlarge" className="feature-section-bg relative overflow-hidden">
        {/* Google Maps satellite background — lazy loaded */}
        <LazyIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9929.639613713497!2d-0.08502072393676477!3d51.52527677181819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca8e4b2e7f7%3A0x5e8e6f7d4b9b7c1a!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e1!3m2!1sen!2sus!4v1704537600000!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full pointer-events-none grayscale brightness-[0.3]"
          style={{ border: 0, scale: "1.5" }}
          title="Map background"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <DataFlowHero />
        <div className="max-w-3xl relative z-10">
          <AnimatedSection>
            <EyebrowLabel>Contact</EyebrowLabel>
            <h1 className="mb-8 text-heading-1 md:text-display-sm text-foreground">
              Let's talk about your internet.
            </h1>
            <p className="mb-6 text-xl md:text-2xl text-muted-foreground">
              Whether you need SD-WAN broadband, WiFi, managed SIMs, or leased lines — tell us what you're dealing with and we'll recommend the right solution.
            </p>
            <p className="text-muted-foreground">
              No pressure, no hard sell. If we're not the right fit, we'll tell you.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section size="large" className="feature-section-bg">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <AnimatedSection direction="left">
            <div className="rounded glass-card p-10">
              <EyebrowLabel>Get in Touch</EyebrowLabel>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                Tell Us About Your Requirements
              </h2>
              <p className="mb-8 text-muted-foreground">
                We'll be in touch within one business day. No pressure, no hard sell — just 
                a conversation to see how we can help.
              </p>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Request Received</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thanks, {form.firstName}. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="First name" 
                      value={form.firstName}
                      onChange={handleChange}
                      className="mt-2 h-12 bg-secondary border-border focus:border-primary" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Last name" 
                      value={form.lastName}
                      onChange={handleChange}
                      className="mt-2 h-12 bg-secondary border-border focus:border-primary" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@company.com" 
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 h-12 bg-secondary border-border focus:border-primary" 
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company
                  </Label>
                  <Input 
                    id="company" 
                    placeholder="Company name" 
                    value={form.company}
                    onChange={handleChange}
                    className="mt-2 h-12 bg-secondary border-border focus:border-primary" 
                  />
                </div>
                <div>
                  <Label htmlFor="fleetSize" className="text-sm font-medium text-foreground">
                    Phone Number
                  </Label>
                  <Input 
                    id="fleetSize" 
                    placeholder="Your phone number (optional)" 
                    value={form.fleetSize}
                    onChange={handleChange}
                    className="mt-2 h-12 bg-secondary border-border focus:border-primary" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your connectivity requirements (optional)" 
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 bg-secondary border-border focus:border-primary" 
                    rows={4} 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : "Send Enquiry"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We respect your time. If it's not a fit, we'll tell you.
                </p>
              </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex flex-col h-full">
              <div className="mb-10">
                <EyebrowLabel>Other Ways to Reach Us</EyebrowLabel>
                <h2 className="mb-8 text-xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="rounded glass-card p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary">
                          <method.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                      </div>
                      <p className="text-sm text-primary mb-2">{method.email}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg overflow-hidden flex-1 min-h-56">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4099034284374!2d-0.08502072393676477!3d51.52527677181819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca8e4b2e7f7%3A0x5e8e6f7d4b9b7c1a!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sus!4v1704537600000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "224px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Integra Networks Office Location"
                  className="grayscale contrast-125"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>


    </PageLayout>
  );
};

export default Contact;