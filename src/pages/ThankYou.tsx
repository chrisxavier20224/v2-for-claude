import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Instagram, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import instagramImg from "@/assets/thankyou-instagram.avif";

const MEETING_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

const ThankYou = () => {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${MEETING_SCRIPT}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = MEETING_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Thank You — Integra Networks"
        description="Thank you for completing our availability checker. The great news is you are eligible for our service!"
        url="/thankyou"
      />

      {/* ── HERO: Thank You + Instagram CTA ─────────────────────────── */}
      <section className="relative overflow-hidden -mt-20 bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/10" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pt-36 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Thank you + Instagram promo */}
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-500/20 mb-6"
              >
                <CheckCircle className="h-7 w-7 text-green-400" />
              </motion.div>

              <h1 className="text-heading-1 md:text-display-sm text-white font-medium mb-4">
                Thank you!
              </h1>

              <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-8">
                Check us out on Instagram!
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "New installations showing how we do what we do added every week",
                  "Find out more about how you can improve your WiFi",
                  "Learn what connectivity options are available, when Fibre isn't",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-90 font-medium h-12 px-8 text-base">
                <a
                  href="https://www.instagram.com/integra_networks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Check Us Out
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </AnimatedSection>

            {/* Right: Instagram image from old site */}
            <AnimatedSection>
              <a
                href="https://www.instagram.com/integra_networks/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={instagramImg}
                  alt="Follow Integra Networks on Instagram — @integra_networks #TIREDOFWAITINGFORFIBRE"
                  className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
                  loading="eager"
                />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── ELIGIBLE MESSAGE + MEETING ──────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Right: Eligible message + contact */}
            <AnimatedSection>
              <div className="lg:order-2">
                <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6">
                  The great news is you are eligible for our service!
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  One of our team will review your location and get back to you shortly.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-2">Can't Wait?</p>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Need Internet Connectivity now?</p>
                        <p className="text-foreground font-medium">
                          Call us on: <a href="tel:02033887111" className="text-primary hover:underline font-semibold">0203 388 7111</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Or book a meeting with one of the team using the calendar here.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Left: HubSpot calendar embed (inline, not the full-width component) */}
            <AnimatedSection>
              <div className="lg:order-1">
                <div
                  className="meetings-iframe-container rounded-xl overflow-hidden border border-border"
                  data-src="https://meetings.hubspot.com/chris-clapham?embed=true"
                  style={{ minHeight: 650 }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── WHAT'S NEXT ─────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Stories */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Learn from Our Customers</h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-6">
                  See how we've improved connectivity for homeworkers and businesses just like yours.
                </p>
                <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/customers" className="inline-flex items-center gap-2">
                    Customer Stories <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              {/* Property Checker */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Want a Detailed Proposal?</h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-6">
                  Share more about your property and we'll prepare a tailored connectivity proposal with speeds and costs.
                </p>
                <Button asChild size="sm">
                  <Link to="/checking-out-your-property" className="inline-flex items-center gap-2">
                    Get a Proposal <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ThankYou;
