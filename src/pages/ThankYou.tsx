import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Instagram, Phone, ArrowRight, ExternalLink, Star, Shield, Clock, Zap, Mail, Users, Rocket, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import SEO from "@/components/shared/SEO";
import instagramImg from "@/assets/thankyou-instagram.avif";
import sdwanHero from "@/assets/connectivity/sdwan-hero.jpg";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ThankYou = () => {
  return (
    <PageLayout>
      <SEO
        title="Thank You — Integra Networks"
        description="Thank you for completing our availability checker. The great news is you are eligible for our service!"
        url="/thankyou"
        noIndex
      />

      {/* ── HERO: Full-bleed image with celebration overlay ─────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden -mt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={sdwanHero}
            alt="Integra Networks SD-WAN connectivity solution"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-surface-dark" />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pt-40 pb-24 text-center">
          {/* Animated success icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative inline-flex">
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-400/20"
                animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400 mb-4"
          >
            Availability Confirmed
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-display-sm md:text-[3.5rem] text-white font-medium mb-6 leading-tight"
          >
            You're eligible for our service!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Thank you for checking your availability. One of our team will review your location and get back to you shortly with a personalised recommendation.
          </motion.p>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white">Up to 500Mbps</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white">Live in 10 working days</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 font-medium h-13 px-8 text-base">
              <a href="#book-a-call">Book a Call</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-13 px-8 text-base">
              <a href="tel:02033887111" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> 0203 388 7111
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT — timeline style ─────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What Happens Next</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-14">
              Three steps to getting connected
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: MapPin,
                step: "1",
                title: "We Review Your Location",
                desc: "Our team runs a detailed coverage analysis across all major UK mobile networks for your exact location.",
                highlight: "Within 24 hours",
              },
              {
                icon: Users,
                step: "2",
                title: "We Get Back to You",
                desc: "You'll hear from us with the speeds we can achieve, tailored pricing options, and clear next steps.",
                highlight: "Personalised proposal",
              },
              {
                icon: Rocket,
                step: "3",
                title: "Go Live in 10 working days",
                desc: "Once you're happy, our engineers install everything in a single visit — typically within 10 working days.",
                highlight: "Single-visit install",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                </div>
                <div className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mt-2 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT LOGO CAROUSEL ──────────────────────────────────────── */}
      <CustomerLogoBar />

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── BOOK A CALL ───────────────────────────────────────────────── */}
      <section id="book-a-call" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Meeting calendar */}
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-5 border-b border-border">
                  <p className="text-base font-medium text-foreground">Book a Call With Our Team</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Pick a time and we'll walk through your options — no obligation</p>
                </div>
                <iframe
                  src="https://meetings.hubspot.com/xavier-integra/meeting-link?embed=true"
                  title="Book a meeting with Integra Networks"
                  className="w-full border-0"
                  style={{ minHeight: "650px" }}
                  loading="eager"
                />
              </div>
            </AnimatedSection>

            {/* Right: Can't wait + contact info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Prefer to Talk Now?</p>
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
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg transition-all group"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call our broadband specialists</p>
                      <p className="text-xl font-semibold text-primary">0203 388 7111</p>
                    </div>
                  </a>

                  <a
                    href="mailto:connect@integra-networks.co.uk"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg transition-all group"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Drop us an email</p>
                      <p className="text-base font-medium text-foreground">connect@integra-networks.co.uk</p>
                    </div>
                  </a>
                </div>

                {/* Trust signals — visual cards */}
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: Clock, label: "Live in 10 working days", color: "text-primary" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="rounded-xl border border-border bg-gradient-to-b from-muted/80 to-muted/30 p-4 text-center hover:shadow-sm transition-shadow"
                    >
                      <item.icon className={`h-6 w-6 ${item.color} mx-auto mb-2`} />
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    </motion.div>
                  ))}
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
                  className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20"
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
            <div className="grid grid-cols-1 gap-4">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ThankYou;
