import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Instagram, Phone, ArrowRight, ExternalLink, Star, Shield, Clock, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import SEO from "@/components/shared/SEO";
import instagramImg from "@/assets/thankyou-instagram.avif";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ThankYou = () => {
  return (
    <PageLayout>
      <SEO
        title="Thank You — Integra Networks"
        description="Thank you for completing our availability checker. The great news is you are eligible for our service!"
        url="/thankyou"
      />

      {/* ── HERO: Celebration ────────────────────────────────────────── */}
      <section className="relative overflow-hidden -mt-20 bg-surface-dark">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/15" />
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pt-40 pb-20 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-500/20 border border-green-500/30 mb-8 mx-auto"
            >
              <CheckCircle className="h-10 w-10 text-green-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-heading-1 md:text-display-sm text-white font-medium mb-4"
            >
              You're eligible for our service!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              Thank you for checking your availability. One of our team will review your location and get back to you shortly with a personalised recommendation.
            </motion.p>

            {/* Star rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">
                Rated 4.9/5 on Reviews.io
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────────────── */}
      <section className="bg-surface-dark py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            className="grid gap-4 grid-cols-1 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 mb-3">
                <span className="text-primary font-semibold">1</span>
              </div>
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">We Review Your Location</h3>
              <p className="text-sm text-surface-dark-muted">Our team runs a detailed coverage analysis across all UK mobile networks for your exact postcode.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 mb-3">
                <span className="text-primary font-semibold">2</span>
              </div>
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">We Get Back to You</h3>
              <p className="text-sm text-surface-dark-muted">Within 24 hours you'll hear from us with speeds we can achieve, pricing, and next steps.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 mb-3">
                <span className="text-primary font-semibold">3</span>
              </div>
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">Go Live in 14 Days</h3>
              <p className="text-sm text-surface-dark-muted">Once you're happy, our engineers install everything in a single visit — typically within 14 days.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT LOGO CAROUSEL ──────────────────────────────────────── */}
      <CustomerLogoBar />

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── CAN'T WAIT + BOOK A CALL ─────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Meeting calendar */}
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="bg-card px-6 py-4 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Book a Call With Our Team</p>
                  <p className="text-xs text-muted-foreground">Pick a time and we'll walk through your options</p>
                </div>
                <iframe
                  src="https://meetings.hubspot.com/chris-clapham?embed=true"
                  title="Book a meeting with Integra Networks"
                  className="w-full border-0"
                  style={{ minHeight: "650px" }}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            {/* Right: Can't wait + contact info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-heading-2 md:text-heading-1 text-foreground mb-4">
                    Can't wait? Let's talk now.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you'd prefer to speak with someone straight away, give us a call. Our UK-based team is ready to help.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:02033887111"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call our broadband specialists</p>
                      <p className="text-lg font-semibold text-primary">0203 388 7111</p>
                    </div>
                  </a>

                  <a
                    href="mailto:connect@integra-networks.co.uk"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Drop us an email</p>
                      <p className="text-base font-medium text-foreground">connect@integra-networks.co.uk</p>
                    </div>
                  </a>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">14-Day Money Back</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">Live in 14 Days</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">Up to 500Mbps</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">No Long Contracts</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── INSTAGRAM PROMO ──────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">While You Wait</p>
              <h2 className="text-heading-1 md:text-display-sm text-white font-medium mb-6">
                Check us out on Instagram
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "New installations showing how we do what we do — added every week",
                  "Find out more about how you can improve your WiFi",
                  "Learn what connectivity options are available when Fibre isn't",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-90 font-medium h-12 px-8 text-base shadow-lg">
                <a
                  href="https://www.instagram.com/integra_networks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Follow @integra_networks
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <a
                href="https://www.instagram.com/integra_networks/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <img
                    src={instagramImg}
                    alt="Follow Integra Networks on Instagram — @integra_networks #TIREDOFWAITINGFORFIBRE"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE ─────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-12 md:py-16 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/customers"
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-primary/30 hover:bg-white/[0.07] transition-all"
              >
                <h3 className="text-base font-medium text-surface-dark-foreground mb-2 group-hover:text-primary transition-colors">
                  Read Customer Stories
                </h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-3">
                  See how we've transformed connectivity for businesses and homeworkers across the UK.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View Stories <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/checking-out-your-property"
                className="group rounded-xl border border-primary/30 bg-primary/5 p-6 hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <h3 className="text-base font-medium text-surface-dark-foreground mb-2 group-hover:text-primary transition-colors">
                  Get a Detailed Proposal
                </h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-3">
                  Share more about your property and we'll prepare a tailored connectivity plan with speeds and costs.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Start Now <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ThankYou;
