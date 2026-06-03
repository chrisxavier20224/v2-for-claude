import { Link } from "react-router-dom";
import { PoundSterling, Navigation, WifiOff, CircleCheckBig, ArrowLeft, ArrowRight, Network, Building2, Wifi, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/business-parks-hero.webp";
import fibreImg from "@/assets/sectors/business-parks-fibre.jpg";
import tenantsImg from "@/assets/sectors/business-parks-tenants.jpg";
import outdoorImg from "@/assets/sectors/business-parks-outdoor.jpg";
import royleFarmHero from "@/assets/case-studies/royle-farm-hero.webp";

const painPoints = [
  {
    icon: PoundSterling,
    title: "Quoted £20k+ by Openreach?",
    description: "Excess construction charges for business parks and industrial estates are often eye-watering. We've saved clients tens of thousands using creative alternatives — at Royle Farm Business Park, over £20,000.",
  },
  {
    icon: Navigation,
    title: "Not Sure What Your Tenants Need?",
    description: "We design the connectivity strategy for your park — Fibre where it's available, microwave links where it's not, SD-WAN as a rapid fallback. One provider manages everything.",
  },
  {
    icon: WifiOff,
    title: "Empty Units Because of Bad Internet?",
    description: "Modern businesses won't sign a lease without fast internet. Pre-connected parks fill faster and retain tenants longer. We've seen it firsthand.",
  },
];

const benefitItems = [
  "Internet Live from Move-In Day",
  "Higher Occupancy Through Better Connectivity",
  "24/7 Monitoring & UK-Based Support",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const checklistItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const relatedServices = [
  {
    title: "Integra Bridge",
    description: "Enterprise interim connectivity for multi-site deployment.",
    href: "/integra-bridge",
    icon: Network,
  },
  {
    title: "Wireless Distribution",
    description: "Point-to-point links for distributed connectivity.",
    href: "/wireless-distribution",
    icon: Radio,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi for common areas and units.",
    href: "/business-wifi",
    icon: Wifi,
  },
];

const BusinessParks = () => {
  return (
    <PageLayout>
      <SEO
        title="Business Park Internet"
        description="Fibre, microwave, or SD-WAN for tenant connectivity. Avoid costly Openreach charges."
        keywords="business park internet, business park connectivity, tenant broadband, Fibre business park, SD-WAN, multi-tenant internet, managed connectivity"
        url="/sectors/business-parks"
      />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business park with high-speed connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Business Parks
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Your tenants need internet on day one.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Openreach quoted you £20k+ in excess construction charges? We connect your business park for a fraction of the cost — Fibre, microwave links, or bonded SD-WAN. Tenants get internet from move-in day.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <PoundSterling className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We find ways around the big Fibre quotes.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've saved clients tens of thousands using creative alternatives — at Royle Farm Business Park, Openreach quoted over £20,000 for Fibre. We delivered 1000Mbps for a fraction of that cost using a combination of Fibre and microwave links. We do the same for business parks, industrial estates, and multi-tenant commercial sites across the UK.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={fibreImg} alt="Affordable Fibre for business parks" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={tenantsImg} alt="Attracting tenants with fast connectivity" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Network className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Fill units faster with pre-connected internet.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Tenants want to move in and start working immediately — not wait 6-8 weeks for an ISP installation. We pre-connect every unit so internet is live from day one. Fibre, microwave, or SD-WAN — whatever your park needs. When a leased line is on order, <Link to="/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> gets tenants online in days and stays on as failover once it lands.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Building2 className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We manage the connectivity. You manage the park.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tenant onboarding, network monitoring, support tickets, and billing — we handle all of it. You get a single point of contact for every unit's connectivity. No more chasing multiple ISPs.
            </p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              {benefitItems.map((item) => (
                <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={outdoorImg} alt="Outdoor WiFi for business parks" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Case study link */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={royleFarmHero} alt="Royle Farm Business Park" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">Royle Farm Business Park: From ADSL to 1Gbps</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  See how Integra transformed connectivity at Royle Farm Business Park — from inadequate ADSL to 1000Mbps speeds.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                    <Link to="/customers/royle-farm" className="inline-flex items-center gap-2">
                      Read the Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CustomerLogoBar />

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore solutions for multi-site deployment and tenant connectivity."
      />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6">Pre-connect your park. Fill units faster.</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">One provider. Every unit. Internet from move-in day.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default BusinessParks;
