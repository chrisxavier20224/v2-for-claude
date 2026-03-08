import { Link } from "react-router-dom";
import { Rocket, PiggyBank, Store, ArrowLeft, ArrowRight, Eye, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/managed-sim-hero.jpg";
import liftImg from "@/assets/connectivity/managed-sim-lift.jpg";
import visibilityImg from "@/assets/connectivity/managed-sim-visibility.jpg";
import voiceImg from "@/assets/connectivity/managed-sim-voice.jpg";

const painPoints = [
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Independent of the UK fibre network, our managed SIM solution deploys in days — not weeks. Especially beneficial for estates with hundreds of devices needing migration.",
  },
  {
    icon: PiggyBank,
    title: "Significant Cost Savings",
    description: "Transitioning to our Managed SIM service often results in substantial cost savings for businesses, beyond just a technology upgrade.",
  },
  {
    icon: Store,
    title: "Perfect for Small Retailers",
    description: "The transition to a managed SIM service is affordable, making it an excellent solution for small operators seeking a quick and efficient solution.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ManagedSimServices = () => {
  return (
    <PageLayout>
      <SEO
        title="Managed SIM Services — PSTN Switch-Off Solutions from £2.90/month"
        description="PSTN switching off January 2027. Our managed SIM service replaces analogue lines for lifts, alarms, and EPOS — no upfront costs, 3-day monitoring, complete estate visibility."
        keywords="managed SIM, PSTN switch off, SOGEA alternative, lift line migration, SIM connectivity, IoT SIM"
        url="/connectivity/managed-sim-services"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Managed SIM services for PSTN transition" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Managed SIM
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">PSTN is switching off. Are you ready?</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              SOGEA is costly for single-line PSTN replacement. Our managed SIM service delivers an affordable, no upfront cost solution — with complete estate visibility, proactive monitoring, and SIMs from £2.90/month.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Managed SIM Services</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Replace analogue. Save money. See everything.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Our managed SIM service offers superior connectivity, compliance, proactive monitoring, and significant cost savings. Our Multinet SIM connects to all four UK mobile operators for maximum resilience.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <point.icon className="h-10 w-10" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-heading-3 text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* LIFT MIGRATION */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Simplify Your Lift Service Migration</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Managed SIM Service includes line rental and call rates in one bill — no separate management. Technical and on-site support, 3-day line test monitoring, constant GSM connectivity monitoring, and a 3-year Device-as-a-Service model with advanced replacement and no upfront costs.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={liftImg} alt="Lift PSTN migration" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* NETWORK VISIBILITY */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={visibilityImg} alt="Network visibility dashboard" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                <Eye className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Gain Complete Network Visibility</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Consolidate your estate onto one platform and see every SIM, every device, every connection in real time. Proactive monitoring means we spot issues before they become outages — no more guessing which lines are active.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* REPLACE PSTN */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Phone className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Replace PSTN Voice Traffic</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our Multinet SIM connects to all four UK mobile operators (O2, Vodafone, EE, Three) and can be used exclusively for voice traffic — a direct replacement for PSTN lines on lifts, alarms, door entry systems, and EPOS terminals.
            </p>
            <p className="text-muted-foreground">
              IoT SIMs from £2.90/month with pooled data options. 3-year term, Device-as-a-Service model, advanced replacement, in-term upgrades, and no upfront costs.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={voiceImg} alt="Voice PSTN replacement" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">PSTN switches off January 2027. Start now.</h2>
            <p className="text-lg text-surface-dark-muted mb-8 max-w-2xl mx-auto">Get in touch to discuss how our managed SIM services can simplify your migration — before the deadline hits.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg"><Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ManagedSimServices;
