import { Link } from "react-router-dom";
import { Zap, Shield, Network, ArrowLeft, ArrowRight, Wifi, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/leased-lines-hero.webp";
import sdwanImg from "@/assets/connectivity/leased-lines-sdwan.jpg";
import slaImg from "@/assets/connectivity/leased-lines-sla.webp";
import wirelessImg from "@/assets/connectivity/leased-lines-wireless.jpg";

const painPoints = [
  {
    icon: Zap,
    title: "Exact Same Upload & Download",
    description: "Symmetric speeds for mission-critical operations. No contention, no throttling — your dedicated pipe delivers consistently.",
  },
  {
    icon: Network,
    title: "Private Circuit Security",
    description: "A leased line is yours alone. No shared bandwidth, no public infrastructure risks. Ideal for high-security environments and regulatory compliance.",
  },
  {
    icon: Shield,
    title: "High-Speed Fibre up to 10Gbps",
    description: "From 100Mbps to 10Gbps, scaled to your requirements. Quoted per site based on speed, location and contract term.",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const relatedServices = [
  {
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G connectivity for faster deployment and flexible redundancy.",
    href: "/connectivity/integra-sd-wan",
    icon: Network,
  },
  {
    title: "Integra Bridge",
    description: "Point-to-point wireless connectivity when line of sight is available.",
    href: "/connectivity/integra-bridge",
    icon: Radio,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi networks to complement your leased line infrastructure.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
];

const leasedLineServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leased Lines",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Dedicated fibre leased lines with symmetric upload and download speeds up to 10Gbps. Private circuit with 99.995% SLA. From 100Mbps to 10Gbps bespoke pricing.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Dedicated Internet Access",
  url: "https://integra-networks.co.uk/connectivity/leased-lines",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "500",
    highPrice: "2000",
    pricingType: "Negotiated",
  },
};

const leasedLineBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://integra-networks.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Connectivity",
      item: "https://integra-networks.co.uk/connectivity",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leased Lines",
      item: "https://integra-networks.co.uk/connectivity/leased-lines",
    },
  ],
};

const LeasedLines = () => {
  return (
    <PageLayout>
      <SEO
        title="Leased Lines"
        description="Dedicated circuits with symmetric speeds and SLA. Bespoke pricing per site."
        keywords="leased lines, business fibre, dedicated internet, DIA, symmetrical speeds, 10Gbps, dedicated circuit"
        url="/connectivity/leased-lines"
      />
      <SchemaMarkup data={leasedLineServiceSchema} />
      <SchemaMarkup data={leasedLineBreadcrumbSchema} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business leased line fibre infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Leased Lines
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">When you need a dedicated circuit.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Symmetric, bespoke, and sometimes the only answer. When your business demands exact same upload and download speeds with zero contention, we handle the entire process from desktop survey to installation.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Leased Lines</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              When leased lines make sense.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Leased lines are the right choice when you need exact same upload and download speeds, zero failover tolerance on a single mission-critical pipe, high-security private circuits, or guaranteed SLA-backed performance.
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

      {/* RAPID ON-NET DEPLOYMENT */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Creative solutions that save thousands.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leased lines can take 8-12 weeks to install. Our Integra SD-WAN or Bridge solution gets you online in days, bridging the gap until fibre is ready. And we find creative routing solutions — combining fibre with P2P radio links or wireless distribution to reach remote buildings without expensive trenching.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={sdwanImg} alt="Integra SD-WAN rapid deployment" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* SLA — full-bleed image with text overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={slaImg} alt="Fibre leased line infrastructure" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Industry-Leading 99.995% SLA</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Our DIA products are backed by a 99.995% uptime guarantee with compensation if we fail. Dedicated escalation line — not an email queue. Your business stays connected, always.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* WIRELESS LEASED LINES */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Dedicated Wireless Leased Lines</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where line of sight is available, we deliver dedicated wireless connectivity with fixed installation costs. Setup is typically under 25 working days — as fast as 5 working days. No trenching, no wayleave delays, no surprises.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={wirelessImg} alt="Dedicated wireless leased line" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore alternative connectivity solutions and pricing options."
      />

      {/* RELATED CONTENT */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedContent
        sectors={["fibre-enabled-buildings", "business-parks"]}
        dark
      />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Get a Leased Line Assessment</h2>
            <p className="text-lg text-surface-dark-muted mb-8 max-w-2xl mx-auto">We start with a desktop survey and feasibility assessment before quoting. Bespoke pricing, honest advice — if a leased line isn't the right answer, we'll tell you.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg"><Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeasedLines;
