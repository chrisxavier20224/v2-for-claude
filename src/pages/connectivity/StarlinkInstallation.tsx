import { Link } from "react-router-dom";
import { Satellite, Settings, ArrowLeft, ArrowRight, CircleCheckBig, Network, Wifi, Globe } from "lucide-react";
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

import heroImg from "@/assets/connectivity/starlink-hero.webp";
import engineersImg from "@/assets/connectivity/starlink-engineers.jpg";
import customImg from "@/assets/connectivity/starlink-custom.jpg";
import staticIpImg from "@/assets/connectivity/starlink-staticip.jpg";
import sdwanImg from "@/assets/connectivity/starlink-sdwan.jpg";

const sdwanBenefits = ["Higher combined speeds via bonding", "Automatic failover eliminates downtime", "UK-based phone & WhatsApp support"];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const checklistItem = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G as an alternative to Starlink for consistent speeds and reliability.",
    href: "/connectivity/integra-sdwan",
    icon: Network,
  },
  {
    title: "4G/5G Failover",
    description: "Cellular backup connectivity to enhance your Starlink connection.",
    href: "/connectivity/managed-sim-services",
    icon: Settings,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi to extend your Starlink connection throughout your location.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
];

const starlinkServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starlink Installation and Support",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Professional Starlink installation with 4G/5G failover to eliminate rain drops and service interruptions. Static IP support and SD-WAN bonding available.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Satellite Internet Installation",
  url: "https://integra-networks.co.uk/connectivity/starlink-installation",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "80",
    highPrice: "2200",
  },
};

const starlinkBreadcrumbSchema = {
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
      name: "Starlink Installation",
      item: "https://integra-networks.co.uk/connectivity/starlink-installation",
    },
  ],
};

const StarlinkInstallation = () => {
  return (
    <PageLayout>
      <SEO
        title="Starlink Installation"
        description="Add 4G/5G failover to Starlink. £80/month. 99.5% uptime SLA. Professional installation."
        keywords="Starlink installation, Starlink installer, Starlink SD-WAN, Starlink failover, Starlink static IP, satellite internet, Starlink 4G/5G backup"
        url="/connectivity/starlink-installation"
      />
      <SchemaMarkup data={starlinkServiceSchema} />
      <SchemaMarkup data={starlinkBreadcrumbSchema} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional Starlink installation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Starlink Installation
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Starlink meets reliability.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              You've got Starlink or you're thinking about it. We know its weakness: it drops in rain. We've fixed it. Keep your Starlink. Add our 4G/5G failover. Done.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Starlink Installation</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              What Starlink gets right. What it doesn't.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Starlink delivers up to 250Mbps almost anywhere — impressive for rural locations. But heavy rain degrades signal, latency spikes disrupt VoIP calls, and there's no SLA. Our solution: add 4G/5G cellular as automatic failover. When Starlink drops, you switch in 100ms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* EXPERIENCED ENGINEERS */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Satellite className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">What happens on install day.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our engineer arrives, mounts your Starlink dish (if you haven't already), installs the 4G/5G modem and our router, tests both connections, and configures SD-WAN settings. Typically 4 hours, and you're online. We then monitor both connections 24/7.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={engineersImg} alt="Experienced network engineers" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* CUSTOM SETUP — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={customImg} alt="Custom Starlink setup" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">What you gain by adding us.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Rain no longer drops you offline — switches to 4G/5G automatically. Latency stays stable at 20-30ms average. Support via phone and WhatsApp in 2-4 hours, not email in 48-72. Plus a 99.5% uptime SLA that Starlink alone can't offer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* STATIC IP */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Globe className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Starlink Static IP Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Need a Static IP for VPN, CCTV, or remote access but don't want to upgrade to Starlink's priority service? We provide static IPs through our SD-WAN layer — no Starlink priority plan required. Just £10/month added to your service.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={staticIpImg} alt="Starlink Static IP" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* SD-WAN */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={sdwanImg} alt="Starlink SD-WAN integration" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">The simple version.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                Your Starlink dish delivers up to 250Mbps. We add a 4G/5G modem on a second network. Our router talks to both and routes traffic to whichever is better. If Starlink drops, it switches to 4G/5G instantly. You get speed from Starlink, reliability from cellular, one connection to your devices.
              </p>
              <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                {sdwanBenefits.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-surface-dark-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore connectivity solutions that work well with Starlink."
      />

      {/* RELATED CONTENT */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedContent
        sectors={["homeworkers", "airbnbs", "rural-smes"]}
        dark
      />

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Add Starlink reliability.
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Keep your Starlink. Add 4G/5G failover from £80/month +VAT. No more rain drops. 99.5% uptime SLA.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/pricing">See All Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default StarlinkInstallation;
