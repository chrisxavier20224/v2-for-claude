import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/steam-rally-hero.webp";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import eventImg from "@/assets/case-studies/steam-rally-event.webp";
import bridgeMastImg from "@/assets/case-studies/steam-rally-bridge-mast.webp";

const companyDetails = [
  { label: "Company", value: "WRSA Steam Rally Festival" },
  { label: "Industry", value: "Charity | Festival" },
  { label: "Location", value: "Taunton, Somerset" },
  { label: "Website", value: "steamrally.org.uk", href: "https://steamrally.org.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SteamRally = () => {
  return (
    <PageLayout>
      <SEO
        title="WRSA Steam Rally Case Study — Integra Networks"
        description="WRSA Steam Rally got 500Mbps+ connectivity via Integra Bridge bonding multiple 4G/5G connections with Starlink. Record sales, zero downtime."
        keywords="case study, WRSA, steam rally, festival connectivity, Integra Bridge, Starlink, Integra Networks"
        url="/customers/steaming-ahead-with-enhanced-festival-connectivity"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="WRSA Steam Rally Festival" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link to="/customers" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> WRSA Steam Rally
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Steam at Scale: 500Mbps Connectivity for 8,000 Visitors</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              WRSA Steam Rally bonded 4G/5G with Starlink via Integra Bridge. 500Mbps+. Record sales. Zero downtime. No dropped payments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {companyDetails.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="nofollow noopener noreferrer" className="text-surface-dark-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-surface-dark-foreground font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">Description</p>
              <p className="text-surface-dark-foreground max-w-2xl">
                WSRA organizes an annual steam and vintage rally to fundraise for railway preservation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Event: 8,000 People in the Middle of Nowhere</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WSRA's annual Steam Rally draws 8,000 vintage transport enthusiasts to rural Somerset. It's their main fundraiser—critical for keeping the historic West Somerset Railway alive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But they run it in a field with no Fibre. No traditional infrastructure. Just grass, steam engines, and the desperate need to keep payments processing all day long.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Every Dropped Payment Costs Them Money</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              During the rally, card terminals need to work. Constantly. Food vendors, ticket booths, exhibitor payments—all rely on live connectivity. Drop the connection for 30 seconds and transactions fail. Visitors get angry. Sales disappear. The year's fundraising evaporates.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Previous years, they'd rented temporary WiFi systems and watched them buckle under 8,000 visitors. Weak signals in tents. Dead zones at the food court. Customers abandoning transactions. They needed bulletproof connectivity, not a band-aid.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={eventImg} alt="WRSA Steam Rally event connectivity setup" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "Integra Bridge delivered 500Mbps to a field with zero infrastructure. Not a single dropped payment all day. That reliability directly translates to record sales. We've hired them for three years running for a reason."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Jackie Green, General Manager, WSRA</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Integra Bridge with Multiple 4G/5G and Starlink</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra deployed Integra Bridge—a platform that bonds multiple 4G/5G connections together with Starlink backup. In a field with no traditional infrastructure, that redundancy is essential. If one connection falters, the others pick up instantly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The result: 500Mbps+ throughout the site. Secure payment network with zero downtime. Radio links blanketed the entire venue—drinks tent, ticket booth, exhibition areas. All accessible. All fast. Zero dropped transactions. That's how they hit record sales.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-10">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={bridgeMastImg} alt="Integra Bridge mast with Starlink dish deployed at the Steam Rally" className="w-full h-auto object-contain" loading="lazy" />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-3">Integra Bridge mast deployed on-site, delivering 500Mbps+ across the festival grounds.</p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solutions Delivered */}
      <section className="bg-surface-dark py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Solutions Delivered</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { label: "Integra Bridge", href: "/connectivity/integra-bridge" },
              { label: "Business WiFi", href: "/connectivity/business-wifi" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/steaming-ahead-with-enhanced-festival-connectivity" />
    </PageLayout>
  );
};

export default SteamRally;
