import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Radio, Target, Map, Shield, Zap, Users, CheckCircle, Wifi, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/business-wifi-hero.jpg";
import seaconPortImg from "@/assets/case-studies/seacon-port.jpg";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    title: "Business WiFi",
    description: "Professional WiFi networks to complement your wireless distribution.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
  {
    title: "Integra Bridge",
    description: "Enterprise SD-WAN for rapid deployment between locations.",
    href: "/connectivity/integra-bridge",
    icon: Network,
  },
  {
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G connectivity alternative to line-of-sight wireless.",
    href: "/connectivity/integra-sdwan",
    icon: Network,
  },
];

const painPoints = [
  {
    icon: Radio,
    title: "Point-to-Point Wireless Links",
    description: "Direct line-of-sight connections between buildings — no fibre, no cables. Up to 2Gbps full duplex with V Band, 5GHz, and 60GHz options. Commercial-grade radios with weatherproof housings.",
  },
  {
    icon: Target,
    title: "Point-to-Multipoint Distribution",
    description: "One master radio distributes connectivity to multiple remote sites. Perfect for business parks, estates, and multi-unit facilities. 500Mbps+ per sector with intelligent load balancing.",
  },
  {
    icon: Map,
    title: "Professional Site Survey",
    description: "We conduct line-of-sight analysis, calculate link budgets, and design your network topology. Free survey included. Our engineers identify optimal radio placement and Fresnel zone clearance.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "VLAN Segmentation",
    description: "Multi-tenant sites need isolation. We configure VLANs so each tenant has secure, isolated connectivity. Perfect for business parks where tenants are separate entities.",
  },
  {
    icon: Zap,
    title: "SD-WAN Integration",
    description: "Automatic failover between wireless links and broadband. If the main link drops, traffic switches instantly. 24/7 monitoring via Integra Cloud keeps you informed.",
  },
  {
    icon: Users,
    title: "Managed Service",
    description: "All hardware included and fully maintained. No capital expenditure — pure monthly service. Engineer support for any issues, monitoring, and remote support included.",
  },
];

const useCases = [
  { title: "Business Parks", description: "Royle Farm Business Park: V Band links connect multiple commercial units. VLAN per tenant for privacy and billing." },
  { title: "Port Facilities", description: "Seacon Tilbury: V Band point-to-point from Shed 46A to offices. Small switches with VLAN segmentation for operational security." },
  { title: "Farms & Estates", description: "Connect barns, outbuildings, and cottages across rural properties. 5GHz mesh bridges extend to distant structures." },
  { title: "Holiday Parks", description: "Link reception, lodges, and activity centres. Guest WiFi via Integra Cloud with bandwidth management per unit." },
  { title: "Construction Compounds", description: "Temporary links between site cabins. Portable radios on short masts — relocate or remove when project completes." },
  { title: "Glamping & Lodges", description: "Premium guest experience via distributed WiFi. Radios hidden or integrated into landscaping for aesthetic appeal." },
];

const WirelessDistribution = () => {
  return (
    <PageLayout>
      <SEO
        title="Wireless Distribution — Multi-Building Connectivity from Integra Networks"
        description="V Band, 5GHz, 60GHz point-to-point and point-to-multipoint wireless links. Professional site survey, VLAN segmentation, SD-WAN failover. Up to 2Gbps speeds. Business parks, estates, ports, farms."
        keywords="wireless distribution, point-to-point, point-to-multipoint, V Band, multi-building WiFi, business park connectivity, wireless network design"
        url="/connectivity/wireless-distribution"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Wireless Distribution solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Wireless Distribution
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Wireless links that connect your entire site.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Point-to-point and point-to-multipoint wireless distribution across buildings, estates, and business parks. Up to 2Gbps speeds, professional site survey, VLAN segmentation, and 24/7 monitoring. From £400/month.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* KEY OFFERING */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Wireless Connectivity</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              High-speed wireless links without the fibre costs.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Install in days, not months. Commercial-grade radios with weatherproof housings. Professional survey included. Free hardware replacement if anything fails.
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

      {/* BENEFITS */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Integra Networks</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16 max-w-3xl mx-auto">
              Integra owns all hardware. You own the connectivity.
            </h2>
          </AnimatedSection>
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeUp}>
                <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                  <benefit.icon className="h-9 w-9" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-heading-3 text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* TECHNOLOGY OPTIONS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-6">Wireless Technology Options</h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              We select the right technology for your distance, line of sight, and throughput requirements. No manufacturer names — just professional-grade equipment proven in UK installations.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">V Band (60GHz)</h3>
              <p className="text-surface-dark-muted text-sm leading-relaxed mb-4">
                Ultra-high capacity for short links (up to 2km). 2Gbps+ full duplex. Weather-sensitive but incredible speed for sites with clear line of sight.
              </p>
              <p className="text-xs text-primary font-semibold">Best for: High-capacity point-to-point between main buildings.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">5GHz Mesh</h3>
              <p className="text-surface-dark-muted text-sm leading-relaxed mb-4">
                Lower frequency, better range and weather resilience. 500Mbps+ per sector. Cascades across multiple hops for complex topologies.
              </p>
              <p className="text-xs text-primary font-semibold">Best for: Multi-hop distribution, estates, and fallback resilience.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">60GHz Licensed Band</h3>
              <p className="text-surface-dark-muted text-sm leading-relaxed mb-4">
                For critical links, dedicated licensed spectrum eliminates interference. Regulatory approval required but ultimate reliability.
              </p>
              <p className="text-xs text-primary font-semibold">Best for: Port facilities, multi-tenant sites where isolation is critical.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* USE CASES */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Real-World Applications</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">Where wireless distribution works best.</h2>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-heading-3 text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CASE STUDY CALLOUT */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={seaconPortImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-surface-dark/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="relative z-10 p-10 md:p-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-2">Real Installations</p>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  Royle Farm & Seacon Tilbury: V Band in Action
                </h2>
                <p className="text-white/90 leading-relaxed max-w-2xl">
                  Royle Farm Business Park connects multiple commercial units with V Band point-to-point links and VLAN segmentation. Seacon Tilbury uses the same technology to link sheds back to the office with encrypted, isolated connectivity. Both sites achieve 99.5% uptime with zero operational disruption.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary font-semibold hover:bg-white/90">
                    <Link to="/customers/royle-farm">Royle Farm Case Study</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/customers/seacon-group">Seacon Tilbury</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* PROFESSIONAL SURVEY SECTION */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Map className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Professional Site Survey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We send an engineer to walk your site and perform a detailed assessment. Line-of-sight analysis, Fresnel zone clearance, and link budget calculations inform our design.
            </p>
            <ul className="space-y-3">
              {[
                "Visual line-of-sight check between all sites",
                "RF propagation modelling and coverage prediction",
                "Weather impact analysis (rain fade for V Band)",
                "Optimal radio placement and mounting height",
                "Cabling and power requirements",
                "VLAN design if multi-tenant segmentation needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">Survey is free and included with every installation quote.</p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Professional RF Assessment</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* MANAGED SERVICE */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-6">Managed Service Model</h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              No capital expenditure. All hardware included — radios, switches, cabling, and mounting equipment. You get carrier-grade connectivity as a managed monthly service.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  "Commercial-grade radios and networking equipment",
                  "Professional installation and testing",
                  "24/7 remote monitoring via Integra Cloud",
                  "Hardware replacement if anything fails",
                  "Engineer support for troubleshooting",
                  "Software updates and security patches",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-surface-dark-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-4">Typical Pricing</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-white/10">
                  <p className="text-sm text-surface-dark-muted mb-1">Point-to-Point (up to 5km)</p>
                  <p className="text-2xl font-medium text-primary">£400-600/month</p>
                </div>
                <div className="pb-4 border-b border-white/10">
                  <p className="text-sm text-surface-dark-muted mb-1">Point-to-Multipoint (1 master + 3 sectors)</p>
                  <p className="text-2xl font-medium text-primary">£800-1,200/month</p>
                </div>
                <div>
                  <p className="text-sm text-surface-dark-muted mb-1">Installation (varies by complexity)</p>
                  <p className="text-2xl font-medium text-primary">£2,500-6,000</p>
                </div>
              </div>
              <p className="text-xs text-surface-dark-muted mt-6 italic">Installation includes site survey, design, equipment, and commissioning. Prices quoted per site after survey.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* SD-WAN INTEGRATION */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Zap className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Automatic Failover with Integra SD-WAN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Pair your wireless distribution with Integra SD-WAN for automatic failover. If a wireless link degrades or drops, traffic switches to 4G/5G bonded broadband instantly — no manual intervention, no service interruption.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Seamless failover between wireless and cellular",
                "Real-time latency and packet loss monitoring",
                "Automatic load balancing across available paths",
                "Traffic shaping for voice and video priority",
                "Unified monitoring dashboard in Integra Cloud",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link to="/integra-sd-wan">Learn about Integra SD-WAN <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Automatic Failover Protection</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Enhance your wireless distribution with professional WiFi and connectivity solutions."
      />

      {/* RELATED CONTENT */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedContent
        stories={["seacon-group"]}
        sectors={["business-parks", "construction-sites", "rural-smes"]}
        dark
      />

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Connect your entire site.
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Free desktop survey, no obligation. We'll assess your buildings, recommend the right wireless solution, and provide a quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/availability-checker">Check Availability</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default WirelessDistribution;
