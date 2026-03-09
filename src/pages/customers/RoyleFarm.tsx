import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/royle-farm-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import aerialImg from "@/assets/case-studies/royle-farm-aerial.jpg";
import fibreImg from "@/assets/case-studies/royle-farm-fibre.jpg";

const companyDetails = [
  { label: "Company", value: "Royle Farm Business Park" },
  { label: "Industry", value: "Business Park" },
  { label: "Location", value: "Burton upon Trent" },
  { label: "Website", value: "roylefarmbusinesspark.co.uk", href: "https://www.roylefarmbusinesspark.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const RoyleFarm = () => {
  return (
    <PageLayout>
      <SEO
        title="Royle Farm Business Park Case Study — Integra Networks"
        description="How Integra connected a rural business park in Burton upon Trent using fibre and point-to-point radio — saving £20k versus trenching."
        keywords="case study, Royle Farm, business park, fibre, P2P radio, rural connectivity, Integra Networks"
        url="/customers/royle-farm"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Royle Farm Business Park" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Royle Farm Business Park
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Fibre to the cattle grid. Radio to every unit.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              How Integra connected a rural business park that couldn't get fibre — using a 500m fibre run and point-to-point radio, saving £20k versus trenching.
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
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5">
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
                A rural business park in Burton upon Trent offering industrial units and secure compounds to local businesses.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              The problem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Royle Farm Business Park sits in a rural part of Burton upon Trent where traditional fibre connectivity wasn't available. Tenants were stuck on slow, unreliable connections that weren't fit for running a modern business — and the standard route to getting fibre installed meant trenching roughly 3km at a cost that made the project unviable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The park needed a solution that could deliver proper business-grade connectivity without the massive civil works bill that comes with digging fibre across open countryside.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-12">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={aerialImg}
                alt="Aerial view of Royle Farm Business Park"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── THE SOLUTION ─────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 text-surface-dark-foreground mb-6">
              The solution
            </h2>
            <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
              Instead of trenching the full 3km, Integra ran fibre 500 metres to a cattle grid at the edge of the park — a fraction of the distance and cost. From there, point-to-point radio links distribute connectivity across the site to each unit, delivering reliable business-grade speeds without any further groundwork.
            </p>
            <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
              This approach saved approximately £20,000 compared to a full trench, and the installation was completed in days rather than the 8–12 weeks a typical leased line order would take.
            </p>
            <p className="text-lg text-surface-dark-muted leading-relaxed">
              The result is a connected business park where tenants can get online with proper speeds from day one — making the park far more attractive to prospective businesses and giving existing tenants the connectivity they actually need.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── WHAT WE DELIVERED ────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              What we delivered
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>A 500m fibre run from the nearest viable point to the park boundary, terminated at a cattle grid where existing infrastructure could be leveraged.</p>
              <p>Point-to-point radio links distributing connectivity from the fibre termination point to individual units across the site — no trenching required between buildings.</p>
              <p>A solution that got the park connected in days, not months, at a cost that actually made commercial sense for a rural business park.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-12">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={fibreImg}
                alt="Connectivity infrastructure at Royle Farm Business Park"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solutions Delivered */}
      <section className="bg-surface-dark py-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-surface-dark-muted mb-4">Solutions Delivered</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/connectivity/network-infrastructure" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Network Infrastructure
            </Link>
            <Link to="/connectivity/business-wifi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Business WiFi
            </Link>
            <Link to="/connectivity/wireless-distribution" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Wireless Distribution
            </Link>
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/royle-farm" />
    </PageLayout>
  );
};

export default RoyleFarm;
