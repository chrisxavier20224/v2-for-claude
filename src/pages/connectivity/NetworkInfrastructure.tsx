import { Link } from "react-router-dom";
import { Cable, Server, Wifi, ClipboardCheck, ArrowRight, Building2, Network, Wrench, Shield, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/case-studies/seacon-port.jpg";
import cablingImg from "@/assets/sectors/fibre-preconnect.jpg";
import cabinetImg from "@/assets/sectors/business-parks-fibre.jpg";
import surveyImg from "@/assets/sectors/fibre-wifi-design.jpg";
import fibreImg from "@/assets/sectors/fibre-ultrafast.jpg";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const services = [
  {
    icon: Cable,
    title: "Structured Cabling",
    description: "Cat6, Cat6a, and fibre optic cabling designed, installed, and certified to industry standards. From single runs to full building infrastructure — we handle containment, trunking, patch panels, and labelling so every connection is traceable and future-proof.",
  },
  {
    icon: Server,
    title: "Cabinets & Switching",
    description: "Wall-mount and floor-standing data cabinets, PoE switches, and patch panels — sized and specified for your building. We install fanless units where noise matters, rack-mount switches where density matters, and always leave room for growth.",
  },
  {
    icon: Radio,
    title: "Fibre & Wireless Links",
    description: "Inter-building fibre runs and point-to-multipoint wireless links for multi-structure sites. Whether you need to connect an outbuilding 30 metres away or a marquee across a field, we design links that deliver full backhaul speeds without trenching.",
  },
  {
    icon: Wifi,
    title: "WiFi Surveys & Heat Mapping",
    description: "Full site surveys with professional heat mapping tools. We walk every floor, measure signal propagation through walls and between levels, identify dead zones, and design access point placements that deliver consistent coverage — not guesswork.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Planning & Delivery",
    description: "From initial survey through to sign-off, we manage the full project. Cable route planning, bill of materials, installation scheduling, commissioning, and documentation. You get a single point of contact and a project that runs to plan.",
  },
  {
    icon: Shield,
    title: "Ongoing Management",
    description: "Every network we build is monitored and managed after handover. Firmware updates, configuration changes, fault diagnosis — all included. Your infrastructure doesn't just work on day one, it keeps working.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Survey",
    description: "We walk your building. Every floor, every room, every outbuilding. We audit existing cabling and cabinets, measure WiFi coverage with heat mapping tools, and document everything — floor plans, photos, signal data.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    description: "You get a written report with floor-by-floor recommendations, access point placements, cable routes, cabinet locations, and a full bill of materials. No surprises — you see exactly what we're proposing and why.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Our engineers handle everything on-site. Structured cabling, cabinet builds, switch installation, access point mounting, and external wireless links. We work around your schedule and leave the site tidy.",
  },
  {
    step: "04",
    title: "Commission & Handover",
    description: "Every cable is tested and certified. Every access point is configured and verified. You get full documentation — as-built drawings, test results, and login credentials. Then we hand over to our monitoring team.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Network Infrastructure",
  provider: { "@type": "Organization", name: "Integra Networks" },
  description: "End-to-end network infrastructure services including structured cabling, data cabinets, PoE switching, WiFi surveys, fibre links, and project management for commercial buildings across the UK.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

const NetworkInfrastructure = () => {
  return (
    <PageLayout>
      <SEO
        title="Network Infrastructure"
        description="Structured cabling, data cabinets, PoE switches, WiFi surveys, and fibre links — designed, installed, and managed by Integra Networks. Full project delivery for commercial buildings across the UK."
        keywords="network infrastructure, structured cabling, data cabinet, PoE switch, WiFi survey, heat map, fibre link, network installation, cable management"
        url="/connectivity/network-infrastructure"
      />
      <SchemaMarkup data={schemaData} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/80 to-surface-dark/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-primary mb-4"
            >
              Network Infrastructure
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl"
            >
              The backbone your building deserves.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8"
            >
              Cabling, cabinets, switches, fibre links, WiFi surveys — planned, installed, and managed end-to-end. One team, one project, one point of contact.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Book a Site Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/customers/seacon-group">See Our Work at Seacon</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── WHAT WE DO ───────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What We Do</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Everything between the router and the wall socket.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Most connectivity providers stop at the WAN port. We go further — building the physical network your business runs on.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── STRUCTURED CABLING DEEP DIVE ──────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Structured Cabling</p>
              <h2 className="text-2xl md:text-3xl font-medium text-surface-dark-foreground mb-6">
                Every cable planned. Every run certified.
              </h2>
              <p className="text-surface-dark-muted mb-6 leading-relaxed">
                Poor cabling is the hidden cause behind most network problems. Cables running under carpets, daisy-chained consumer switches in cupboards, unlabelled patch panels — we've seen it all and we fix it properly.
              </p>
              <p className="text-surface-dark-muted mb-8 leading-relaxed">
                We design cable routes around your building's structure — using existing risers, containment, and trunking where possible, and installing new runs where needed. Every cable is tested, certified, and labelled so future maintenance is simple.
              </p>
              <div className="space-y-3">
                {["Cat6 and Cat6a copper cabling", "Single-mode and multi-mode fibre", "Cable containment and trunking", "Full testing and certification", "As-built documentation and labelling"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Network className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-surface-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden">
                <img src={cablingImg} alt="Structured cabling installation" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── WIFI SURVEYS ─────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden">
                <img src={surveyImg} alt="WiFi survey and network design" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">WiFi Surveys</p>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                Signal strength isn't a guess. It's a measurement.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We walk every floor with professional survey equipment, measuring signal propagation through walls, between levels, and into outdoor areas. The result is a detailed heat map showing exactly where coverage is strong, weak, or non-existent.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From there, we design access point placements based on real data — accounting for wall thickness, building materials, interference, and user density. Heritage buildings with thick stone walls? Multi-floor offices with concrete decks? Outdoor grounds needing event coverage? We've surveyed and solved them all.
              </p>
              <div className="space-y-3">
                {["Floor-by-floor heat map analysis", "Access point placement design", "External coverage planning for grounds and outbuildings", "Before and after comparison surveys", "Written report with floor plans and recommendations"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wifi className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── CABINETS & SWITCHING ──────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Cabinets & Switching</p>
              <h2 className="text-2xl md:text-3xl font-medium text-surface-dark-foreground mb-6">
                Tidy cabinets. Proper switches. Room to grow.
              </h2>
              <p className="text-surface-dark-muted mb-6 leading-relaxed">
                Your data cabinet is the heart of your on-site network. We install wall-mount and floor-standing cabinets sized for your building, fitted with managed PoE switches that power your access points, CCTV cameras, and VoIP handsets without separate power supplies.
              </p>
              <p className="text-surface-dark-muted mb-8 leading-relaxed">
                Where noise is a concern — conference rooms, reception areas, listed buildings — we use fanless units. Where density matters, rack-mount switches with full management and monitoring. Every cabinet is built with headroom for future expansion.
              </p>
              <div className="space-y-3">
                {["Wall-mount and floor-standing cabinets", "Managed PoE and PoE+ switching", "Fanless switches for noise-sensitive areas", "Patch panel termination and labelling", "UPS battery backup where required"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Server className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-surface-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden">
                <img src={cabinetImg} alt="Network cabinet and switching" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How It Works</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Survey. Design. Install. Manage.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Every project follows the same proven process — whether it's a single-room switch upgrade or a multi-building campus.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step) => (
              <motion.div key={step.step} variants={fadeUp} className="relative">
                <div className="text-5xl font-medium text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-lg font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="relative bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={fibreImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-surface-dark/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Who It's For</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16 max-w-3xl mx-auto">
              Buildings that need proper infrastructure.
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Building2, title: "Commercial Buildings", description: "Offices, conference centres, and shared workspaces that need structured cabling and managed WiFi from the ground up." },
              { icon: Building2, title: "Heritage & Listed Buildings", description: "Thick stone walls, limited cable routes, noise restrictions — we design sympathetic solutions that deliver modern performance." },
              { icon: Building2, title: "Multi-Building Sites", description: "Business parks, estates, and campuses that need fibre or wireless links between buildings with centralised management." },
              { icon: Wrench, title: "Ports & Industrial Sites", description: "Outdoor coverage, ruggedised equipment, long cable runs — purpose-built infrastructure for demanding environments." },
              { icon: Wrench, title: "Hospitality & Events", description: "Hotels, retreat centres, and event venues needing guest WiFi across indoor and outdoor areas with phased rollout." },
              { icon: Wrench, title: "Upgrades & Remediation", description: "Existing networks that have grown organically and need a proper overhaul — new cabinets, new cabling, new access points." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-surface-dark-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-dark-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <CustomerLogoBar />

      <RelatedContent
        stories={["seacon-group", "royle-farm"]}
        sectors={["business-parks", "fibre-enabled-buildings"]}
      />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
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
                  Book a free site survey.
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We'll walk your building, audit what's there, and give you a written proposal with floor plans, heat maps, and a full bill of materials. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Book a Survey</Link>
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

export default NetworkInfrastructure;
