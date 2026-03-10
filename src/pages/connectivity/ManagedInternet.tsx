import { Link } from "react-router-dom";
import { Globe, Gauge, Shield, Clock, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/leased-lines-hero.jpg";
import comparisonImg from "@/assets/connectivity/leased-lines-wireless.jpg";

const tiers = [
  { speed: "100Mbps", type: "Managed Internet", description: "Dedicated bandwidth with SLA — the step up from SoGEA for businesses that need guaranteed performance without full leased line pricing.", price: "From £250/month" },
  { speed: "200Mbps", type: "Managed Internet", description: "Symmetric dedicated access for growing teams. Ideal for multi-user environments with cloud applications, VoIP, and video conferencing.", price: "From £350/month" },
  { speed: "500Mbps", type: "Managed Internet", description: "High-capacity dedicated internet for bandwidth-hungry operations. File transfers, remote desktops, and heavy cloud workloads handled comfortably.", price: "From £500/month" },
];

const advantages = [
  { icon: Gauge, title: "Guaranteed Bandwidth", description: "Unlike SoGEA or FTTP, your bandwidth isn't shared with your neighbours. What you pay for is what you get — all day, every day." },
  { icon: Shield, title: "SLA-Backed Performance", description: "Every managed internet circuit comes with an uptime SLA and fix-time guarantees. If it goes down, we're contractually committed to getting it back." },
  { icon: Clock, title: "Faster Than Leased Lines to Deploy", description: "Typical lead times of 15–25 working days versus 8–12 weeks for a traditional leased line. Same quality of service, delivered faster." },
  { icon: Server, title: "Fully Managed", description: "Router, monitoring, and support all included. We manage the circuit end to end — you just plug in and go." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ManagedInternet = () => {
  return (
    <PageLayout>
      <SEO
        title="Managed Internet Access — Dedicated Bandwidth Without Leased Line Pricing"
        description="Managed internet access from 100Mbps to 500Mbps. Dedicated bandwidth, SLA-backed, faster to deploy than leased lines. The mid-market solution for UK businesses."
        keywords="managed internet, dedicated bandwidth, business internet, DIA, ethernet first mile, EFM, managed broadband, dedicated internet access"
        url="/connectivity/managed-internet"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Managed internet access for business" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <span className="mx-1">›</span> Managed Internet
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Better than broadband. Simpler than a leased line.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Dedicated internet access with SLA-backed performance — without the price tag or lead times of a full leased line. The sweet spot for businesses that have outgrown shared broadband.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Speed Tiers</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Dedicated bandwidth, straightforward pricing.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Every tier comes with symmetric upload and download, an SLA, and full management included. Pick the speed your business needs — we'll handle the rest.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {tiers.map((tier) => (
              <motion.div key={tier.speed} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm text-center">
                <div className="text-3xl font-semibold text-primary mb-1">{tier.speed}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-surface-dark-muted mb-4">{tier.type}</div>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-6">{tier.description}</p>
                <div className="text-sm font-medium text-surface-dark-foreground">{tier.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ADVANTAGES */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Managed Internet</p>
            </div>
            <h2 className="mb-6 text-heading-1 md:text-display-sm text-foreground">The gap between broadband and leased lines is bigger than it needs to be.</h2>
            <div className="space-y-6">
              {advantages.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={comparisonImg} alt="Managed internet infrastructure" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["royle-farm"]}
        sectors={["fibre-enabled-buildings"]}
      />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Outgrown your broadband?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We'll run a feasibility check on your site and recommend the right tier. If managed internet isn't the answer, we'll tell you what is.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ManagedInternet;
