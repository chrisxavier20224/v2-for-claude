import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

import heroImg from "@/assets/case-studies/seacon-hero.jpg";
import terminalsImg from "@/assets/case-studies/seacon-terminals.jpg";

const companyDetails = [
  { label: "Company", value: "Seacon Group" },
  { label: "Industry", value: "Shipping | Logistics" },
  { label: "Location", value: "Ports Nationwide" },
  { label: "Website", value: "seacongroup.co.uk", href: "https://seacongroup.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SeaconGroup = () => {
  return (
    <PageLayout>
      <SEO
        title="Seacon Group Case Study — Integra Networks"
        description="How Integra's SD-WAN solution transformed connectivity for Seacon Group's port and logistics operations at Northfleet."
        keywords="case study, Seacon Group, SD-WAN, connectivity, port logistics, Integra Networks"
        url="/customers/seacon-group"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Seacon Group port operations at Northfleet" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Seacon Group
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Docking into the Digital Age: Seacon Group's Connectivity Overhaul</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Integra's SD-WAN solution delivered high-speed, resilient connectivity to Seacon Group's busy port operations at Northfleet in the Port of London.
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
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-surface-dark-foreground font-semibold">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">Description</p>
              <p className="text-surface-dark-foreground max-w-2xl">
                Founded in 1955, Seacon Group offers door-to-door transport solutions specialising in neo-bulk cargoes including steel, metals and forest products, operating specialist ships and handling facilities at Northfleet in the Port of London.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              The Challenge: Keeping a Port Connected
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Seacon Group's operations at Northfleet span multiple berths, warehouses and office buildings spread across a large port estate. Reliable, high-speed connectivity is critical — from coordinating vessel arrivals to managing cargo logistics and real-time inventory tracking.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              However, the port's industrial location and sprawling infrastructure made traditional connectivity solutions impractical. Fibre installation quotes came with lengthy lead times and significant excess construction charges, while existing services struggled to meet the bandwidth demands of modern port operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">
              Bridging the Connectivity Gap
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With operations running around the clock and an increasing reliance on digital systems for cargo management, vessel scheduling and compliance reporting, Seacon needed a solution that could be deployed quickly without disrupting their busy port operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={terminalsImg}
                alt="Seacon Terminals at Northfleet showing the covered berth facility"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-semibold text-surface-dark-foreground leading-snug mb-6">
              "Integra delivered exactly what we needed — fast, reliable connectivity across our entire port estate, deployed without any disruption to our operations."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">
              Operations Director, Seacon Group
            </p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              The Solution: SD-WAN Across the Port Estate
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra deployed its SD-WAN solution across Seacon's Northfleet site, bonding multiple 4G and 5G connections to deliver resilient, high-speed connectivity to every building on the estate. Point-to-point radio links connected the berths, warehouses and offices into a single unified network.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The result was transformative — Seacon gained robust connectivity across their entire operation, enabling real-time cargo tracking, seamless VoIP communications, and reliable access to cloud-based logistics platforms. The deployment was completed in days rather than months, with zero downtime to port operations.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/seacon-group" />

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Unlock the Power of Integra SD-WAN
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
                >
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="link"
                  className="text-white hover:text-white/80 font-medium text-base"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default SeaconGroup;
