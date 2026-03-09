import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Headphones, Loader2, CheckCircle, Phone, Clock, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import DataFlowHero from "@/components/shared/DataFlowHero";
import SEO from "@/components/shared/SEO";
import { trackEvent } from "@/components/shared/Analytics";

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
    <PageLayout hideCTA>
      <SEO
        title="Contact Us"
        description="Get in touch with Integra Networks. Whether you need connectivity solutions, managed services, or just want to discuss your requirements — we're here to help."
        keywords="contact Integra Networks, connectivity consultation, managed services, business broadband"
        url="/contact"
      />

      {/* Hero — StoryBrand: empathise with the problem, position as guide */}
      <section className="relative bg-surface-dark overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <DataFlowHero />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Left: copy */}
            <AnimatedSection>
              <EyebrowLabel className="text-primary">Get Connected</EyebrowLabel>
              <h1 className="mb-6 text-4xl md:text-5xl font-bold text-surface-dark-foreground tracking-tight leading-tight">
                Stop losing money to bad internet.
              </h1>
              <p className="mb-6 text-lg text-surface-dark-muted leading-relaxed">
                Every day without reliable connectivity costs you productivity, customers, and peace of mind. Tell us what you're dealing with and we'll recommend the right solution — usually installed within 14 days.
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-surface-dark-muted">Response within 24hrs</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-surface-dark-muted">Real UK engineers</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-surface-dark-muted">No obligation quote</span>
                </div>
              </div>

              {/* Contact methods */}
              <div className="mt-10 space-y-4">
                <h3 className="text-sm font-semibold text-surface-dark-foreground uppercase tracking-wider">Other ways to reach us</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:connect@integra-networks.co.uk" className="flex items-center gap-3 text-sm text-surface-dark-muted hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                    connect@integra-networks.co.uk
                  </a>
                  <a href="tel:02033887111" className="flex items-center gap-3 text-sm text-surface-dark-muted hover:text-primary transition-colors">
                    <Headphones className="h-4 w-4 text-primary" />
                    0203 388 7111
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-surface-dark-foreground mb-2">Request Received</h3>
                    <p className="text-surface-dark-muted max-w-sm">
                      Thanks, {form.firstName}. We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-surface-dark-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={form.firstName}
                          onChange={handleChange}
                          className="mt-2 h-12 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-surface-dark-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={form.lastName}
                          onChange={handleChange}
                          className="mt-2 h-12 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-surface-dark-foreground">
                        Work Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-2 h-12 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-surface-dark-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange}
                        className="mt-2 h-12 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fleetSize" className="text-sm font-medium text-surface-dark-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="fleetSize"
                        placeholder="Your phone number (optional)"
                        value={form.fleetSize}
                        onChange={handleChange}
                        className="mt-2 h-12 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-surface-dark-foreground">
                        What are you dealing with?
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your connectivity challenges — slow speeds, no fibre, temporary site, remote workers..."
                        value={form.message}
                        onChange={handleChange}
                        className="mt-2 bg-white/[0.05] border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-muted/50 focus:border-primary"
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : "Get My Free Quote"}
                    </Button>
                    <p className="text-xs text-surface-dark-muted/60 text-center">
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
      <CustomerLogoBar />
    </PageLayout>
  );
};

export default Contact;
