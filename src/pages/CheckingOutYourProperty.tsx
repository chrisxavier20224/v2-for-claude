import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MapPin, Video, Upload, Phone, Mail, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import SEO from "@/components/shared/SEO";

const HUBSPOT_PORTAL_ID = "20314482";
const HUBSPOT_FORM_ID = "5f2d697a-a816-4fed-92f5-2f768756cdf6";
const LOOM_COORDINATES = "https://www.loom.com/embed/0b251449ccc84e26a1ca437695375c2c?sid=b404556d-22a3-4ae4-bde4-b9f2bfad433d";
const LOOM_WALKAROUND = "https://www.loom.com/embed/3276744ced924c109b1d52e4c2de02af?sid=186ed2e4-f482-436d-a8cb-9c6ad7da2e84";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const CheckingOutYourProperty = () => {
  // Load HubSpot forms embed script
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="//js.hsforms.net/forms/embed/v2.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_FORM_ID,
            target: "#hubspot-upload-form",
          });
        }
      };
    } else {
      // Script already loaded, just create the form
      setTimeout(() => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_FORM_ID,
            target: "#hubspot-upload-form",
          });
        }
      }, 500);
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Checking Out Your Property — Integra Networks"
        description="Help us assess your property's connectivity potential. Share your coordinates, upload photos, and book a call to discuss your options."
        keywords="property survey, connectivity assessment, broadband survey, SD-WAN survey, Integra Networks"
        url="/checking-out-your-property"
      />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pt-40 pb-20">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Discover More</p>
            <h1 className="text-heading-1 md:text-display-sm text-white font-medium mb-6 max-w-2xl">
              Interested in Exploring How Integra Can Address Your Internet Challenges?
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-8">
              Uncover your property's connectivity potential with our complimentary connectivity survey. Follow the three simple steps below and we'll do the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#step-1" className="inline-flex items-center gap-2">
                  Get Started <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <a href="#upload" className="inline-flex items-center gap-2">
                  <Upload className="h-4 w-4" /> Upload Info
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 3 Steps Overview ─── */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How It Works</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground text-center mb-12">
              Three simple steps to get started
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, step: "1", title: "Share Your Coordinates", desc: "Drop a pin on your property so we can assess mobile coverage at your exact location." },
              { icon: Video, step: "2", title: "Quick Walkaround", desc: "Film a short 60-second video of the outside of your property — roofline, surroundings, and potential mounting points." },
              { icon: Upload, step: "3", title: "Upload Your Info", desc: "Upload your coordinates, photos, and walkaround video through our secure form so our survey team can review." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/20 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-medium mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Step 1: Share Your Coordinates ─── */}
      <section id="step-1" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16 items-center grid-cols-1 md:grid-cols-2">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-medium">1</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Step One</p>
              </div>
              <h2 className="text-heading-2 md:text-heading-1 text-foreground mb-4">
                Share Your Coordinates
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We need the exact coordinates of your property so we can run a detailed coverage analysis across all major UK mobile networks. This tells us which carriers have the strongest signal at your location.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Watch the short video to see exactly how to find and share your coordinates — it takes less than 30 seconds.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Open Google Maps → Long press on your property → Copy the coordinates</span>
              </div>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl border border-border"
            >
              <iframe
                src={LOOM_COORDINATES}
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video"
                title="How to share your property coordinates"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ─── Step 2: Quick Walkaround ─── */}
      <section id="step-2" className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16 items-center grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl border border-white/10 order-2 md:order-1"
            >
              <iframe
                src={LOOM_WALKAROUND}
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video"
                title="How to film a quick walkaround"
              />
            </motion.div>

            <AnimatedSection className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-medium">2</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Step Two</p>
              </div>
              <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-4">
                Quick Walkaround
              </h2>
              <p className="text-surface-dark-muted leading-relaxed mb-4">
                A short 60-second video of the outside of your property helps our survey team understand the layout, identify potential mounting points for antennas, and spot any obstructions that might affect signal.
              </p>
              <p className="text-surface-dark-muted leading-relaxed mb-6">
                Watch the video to see exactly what we're looking for — it doesn't need to be polished, just a quick walk around the outside.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-surface-dark-muted">
                  <Video className="h-4 w-4 text-primary shrink-0" />
                  <span>Film the roofline and chimney/gable ends</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-surface-dark-muted">
                  <Video className="h-4 w-4 text-primary shrink-0" />
                  <span>Show the surrounding area and line of sight</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-surface-dark-muted">
                  <Video className="h-4 w-4 text-primary shrink-0" />
                  <span>Point out where your router/equipment currently sits</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ─── Step 3: Upload Your Info (HubSpot Form) ─── */}
      <section id="upload" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4 justify-center w-full">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-medium">3</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Step Three</p>
            </div>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground text-center mb-4">
              Upload Your Property Info
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Use the form below to share your coordinates, photos, and walkaround video. Our survey team will review everything and come back to you with a detailed proposal.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm"
          >
            <div id="hubspot-upload-form" style={{ minHeight: "400px" }} />
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ─── Book a Call ─── */}
      <HubSpotMeeting
        heading="Discuss Your Connectivity Options"
        subtitle="Book a call with our team to walk through your property survey and explore the best solutions for your location."
        variant="dark"
        meetingUrl="https://meetings.hubspot.com/chris-clapham/discussing-your-connectivity-options"
      />

      {/* ─── Contact / CTA ─── */}
      <section className="bg-surface-dark py-16 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
              <h2 className="text-xl font-medium text-surface-dark-foreground mb-3">Prefer to speak to someone directly?</h2>
              <p className="text-surface-dark-muted leading-relaxed mb-6">
                Our survey team is ready to help. Give us a call or drop us an email and we'll walk you through everything.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <a href="tel:02033887111" className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> 0203 388 7111
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <a href="mailto:connect@integra-networks.co.uk" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <Link to="/customers" className="inline-flex items-center gap-2 text-sm font-medium text-surface-dark-foreground hover:text-primary transition-colors">
                Read Customer Stories <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-surface-dark-foreground hover:text-primary transition-colors">
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default CheckingOutYourProperty;
