import { Link } from "react-router-dom";
import { Wifi, Radio, Cable, ArrowRight, HelpCircle, Quote, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/backgrounds/field-2.webp";

const solutions = [
  {
    icon: Wifi,
    name: "Pure Cellular SD-WAN",
    speed: "100-200Mbps",
    cost: "£135-200/month",
    install: "14 days",
    reaches: "Farmhouse only",
    suitable: "Small farms, single building, no remote monitoring requirement",
    bottleneck: "Doesn't solve distributed outbuilding problem",
  },
  {
    icon: Radio,
    name: "Cellular SD-WAN + P2P Radio Links",
    speed: "100-200Mbps to outbuildings",
    cost: "£135/month + £400-600 per radio link pair",
    install: "14 days",
    reaches: "Farmhouse + 2-3 outbuildings via wireless",
    suitable: "Most farms with remote monitoring needs",
    bottleneck: "Line-of-sight required, weather can impact performance",
  },
  {
    icon: Cable,
    name: "Leased Line + Wireless Distribution",
    speed: "Symmetric speeds, maximum reliability",
    cost: "£400+/month + £1,500 wireless + £1,000 WiFi",
    install: "8-12 weeks (if fibre available)",
    reaches: "All buildings, maximum reliability",
    suitable: "Farms where leased line is available, larger operations, SLA requirement",
    bottleneck: "Expensive, disruptive, slow to deploy",
  },
];

const livestockTech = [
  {
    title: "Milking Parlour",
    description: "Automated milking system logs volume per cow, quality metrics, health indicators. Mastitis detection alerts. Milk meter data syncs to herd management software. Require: Reliable, real-time connectivity (tolerant of brief outages, but not all-day downtime).",
  },
  {
    title: "Calving Alerts",
    description: "Motion sensors in calving sheds trigger alerts to farmer's phone. Real-time monitoring during high-risk period. Require: 24/7 connectivity (missing alert = lost calf).",
  },
  {
    title: "Cattle Health Monitoring",
    description: "Boluses (ingestible sensors) track body temperature, rumination, activity. Sick cow detected automatically (fever, reduced rumination). Alert sent to farmer within minutes. Require: Real-time, reliable gateway connectivity.",
  },
  {
    title: "Grazing Management",
    description: "GPS collars on cattle show location in real-time. Smart gates respond to location (virtual fencing). Require: Constant connectivity (intermittent means gates fail).",
  },
  {
    title: "Feed Systems",
    description: "Automated feeders track intake per cow. Nutritional balance optimised by software. Require: Reliable gateway (local equipment has buffer, but cloud sync needs connectivity).",
  },
];

const budgetGuidance = [
  {
    size: "Small Farm",
    livestock: "Under 50 head, one building",
    solution: "Cellular SD-WAN",
    monthlyDost: "£135-200",
    setupCost: "£2,200",
    annualCost: "~£2,800",
    goodFor: "Single buildings, basic monitoring, budget-conscious",
  },
  {
    size: "Medium Farm",
    livestock: "50-200 head, 2-3 buildings",
    solution: "Cellular SD-WAN + P2P radio links",
    monthlyDost: "£135-200",
    setupCost: "£800-1,200",
    annualCost: "~£2,500-3,000",
    goodFor: "Multiple buildings, livestock monitoring, business ops",
  },
  {
    size: "Large Farm",
    livestock: "200+ head, multiple parcels, complex ops",
    solution: "Leased line + wireless",
    monthlyDost: "£400+",
    setupCost: "£2,500-5,000",
    annualCost: "~£5,000-7,000+",
    goodFor: "Enterprise-grade reliability, multiple buildings, SLA requirement",
  },
];

const outbuildingApproaches = [
  {
    icon: Radio,
    title: "P2P Radio Links (Wireless Distribution)",
    cost: "£200-600 per link pair",
    speed: "30-100Mbps",
    range: "Up to 10km in optimal, 2-5km typical rural",
    setup: "4-8 hour install per link",
    advantages: "No trenching, faster than digging, reusable if farm layout changes",
    disadvantages: "Line-of-sight required, weather can impact performance, requires two mounting points",
  },
  {
    icon: Wifi,
    title: "WiFi Mesh Extension",
    cost: "£300-800 per additional access point",
    speed: "50-100Mbps",
    range: "100-300m per link",
    setup: "2-4 hour install per point",
    advantages: "Simpler than radio links, cheaper, works indoors/outdoors",
    disadvantages: "Speed degrades over distance, multiple hops reduce bandwidth",
  },
  {
    icon: Cable,
    title: "Leased Line to Barn (Physical Fibre)",
    cost: "£5,000-15,000 for 1km trench",
    speed: "Unlimited (same as main connection)",
    range: "Unlimited distance",
    setup: "4-12 weeks",
    advantages: "Most reliable, unlimited bandwidth, no weather issues",
    disadvantages: "Expensive, disruptive, slow to deploy",
  },
];

const faqs = [
  {
    q: "Can I use Starlink for farm operations?",
    a: "For farmhouse only, yes. For outbuildings, you'd need multiple Starlink dishes (expensive). For livestock monitoring with SLA requirements, Starlink's lack of support and weather dependency are risks. Cellular + radio is better suited.",
  },
  {
    q: "What if I have no cellular coverage?",
    a: "Desktop survey identifies this. If no 4G coverage, options: Starlink (if available), or leased line (if fibre exists). Rare to have zero cellular in UK, but possible in deep rural/remote valleys.",
  },
  {
    q: "Can I have backup broadband?",
    a: "Yes. Primary connection (leased line or cellular) + secondary (Starlink or second carrier cellular). Automatic failover ensures if primary fails, business continues. Cost is higher (dual subscriptions) but peace of mind is worth it for critical operations.",
  },
  {
    q: "How do I protect farm equipment from broadband outages?",
    a: "Modern systems have local buffers. Milking systems buffer data locally; gates have local failsafe modes. But prolonged outages (8+ hours) may cause issues. Backup connectivity is insurance.",
  },
  {
    q: "What if BT finally delivers fibre after I've paid for cellular?",
    a: "You're not locked in. Upgrade to fibre (same investment pattern as any business). Cellular router stays as backup. No penalty, no long-term contract.",
  },
  {
    q: "What's the difference between P2P radio and WiFi mesh for outbuildings?",
    a: "P2P is directional (one link between two buildings), high speed, longer distance, line-of-sight required. WiFi mesh is omnidirectional (covers large areas), shorter range, easier setup, lower cost. For outbuildings 500m+ away, P2P. For short distances or coverage area, WiFi mesh.",
  },
];

const relatedServices = [
  {
    name: "Starlink Installation",
    description: "Fast satellite broadband for remote farm locations.",
    url: "/connectivity/starlink-installation",
  },
  {
    name: "Rural SMEs",
    description: "Connectivity solutions tailored for rural farming operations.",
    url: "/sectors/rural-smes",
  },
  {
    name: "Integra SD-WAN",
    description: "Bonded cellular connectivity with automatic failover for farms.",
    url: "/connectivity/integra-sd-wan",
  },
  {
    name: "Business WiFi",
    description: "Extend coverage to barns and outbuildings across your farm.",
    url: "/connectivity/business-wifi",
  },
];

const FarmBroadband = () => {
  return (
    <PageLayout>
      <SEO
        title="Farm Broadband"
        description="Broadband for farms. CCTV, milking parlours, livestock monitoring, business ops."
        keywords="farm broadband UK, agricultural broadband, livestock monitoring broadband, farm WiFi, rural farm internet, precision agriculture connectivity"
        url="/farm-broadband"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Farm broadband solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-20 pt-40">
          <AnimatedSection>
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Resources
            </Link>
            <span className="block mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
              </span>
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl font-normal leading-tight">
              Farm Broadband UK: Reliable Internet for Livestock, Equipment, and Business
            </h1>
            <p className="max-w-xl text-lg text-white/80 mb-10 font-normal leading-relaxed">
              Modern farms are precision-technology operations. This guide shows how to get reliable broadband that serves the farmhouse, outbuildings, livestock monitoring, and business operations.
            </p>
            <Button size="lg" asChild>
              <Link to="/check">Check Your Farm's Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Context — full-bleed image section */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1638057733961-591fa542f718?w=1920&q=80"
            alt="British countryside farmland"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Context</p>
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-8 leading-snug">
              Farming is a technology business now
            </h2>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                The image of farming as manual labour is outdated. Modern farms run on precision technology — calving sensors, automated milking systems, GPS tracking, real-time diagnostics. Grain storage, feed sheds, and equipment barns all need remote monitoring. Cloud-based herd records and environmental logs keep you compliant.
              </p>
              <p>
                All of this requires reliable, fast broadband. Fibre takes years. Mobile hotspot fails constantly. And your farm office is often 1-5km from the farmhouse. One connectivity solution serving both the house and outbuildings is the challenge.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Typical Deployment — 2-column image + text */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
                <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
                  Typical Farm Deployment
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A mixed livestock operation with buildings spread across the estate — farmhouse, milking parlour, equipment sheds, and a farm shop. Fibre has been promised for years but never arrives.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Phase 1:</span> Deploy bonded 4G/5G cellular SD-WAN at the farmhouse — online within days, delivering 100-300Mbps.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Phase 2:</span> P2P radio links from the farmhouse to remote buildings — milking parlour, equipment shed, farm shop. Each link delivers 30-100Mbps.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Phase 3:</span> WiFi access points in key buildings. Business WiFi in the farmhouse and shop, coverage in outbuildings for IoT devices and monitoring.
                  </p>
                </div>
              </div>
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1747691362744-dd6db051a5e9?w=900&q=80"
                  alt="British farm buildings and barns"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* What changes — cards below */}
          <AnimatedSection delay={0.15}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Herd management software works properly — real-time monitoring, live alerts, cloud sync",
                "EPOS systems in the farm shop process transactions instantly",
                "Equipment telemetry uploads diagnostic data in real time",
                "Compliance records upload daily — herd health, milk quality, environmental data",
                "Entire estate connected under one managed solution",
                "Deployed in days, not months — no trenching required",
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5 flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Expert quote */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-36">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "One missed calving alert costs £500+. One day of EPOS downtime in the farm shop costs £200-500. Farm broadband isn't a luxury — it's operational infrastructure."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Integra Networks — Farm Connectivity Team</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Connectivity solutions */}
      <Section size="large" className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Options</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Connectivity solutions for farms
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {solutions.map((sol) => (
              <div key={sol.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <sol.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-medium text-foreground">{sol.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground mb-1">Speed</p>
                    <p className="font-medium text-foreground">{sol.speed}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-muted-foreground mb-1">Monthly Cost</p>
                    <p className="font-medium text-foreground">{sol.cost}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-muted-foreground mb-1">Install</p>
                    <p className="font-medium text-foreground">{sol.install}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-muted-foreground mb-1">Reaches</p>
                    <p className="font-medium text-foreground">{sol.reaches}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Suitable for:</span> {sol.suitable}</p>
                <p className="text-sm text-red-600"><span className="font-medium">Bottleneck:</span> {sol.bottleneck}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl border border-border bg-card">
            <p className="text-muted-foreground"><span className="text-foreground font-medium">If fibre is available and budget allows,</span> a leased line gives you symmetric speeds and maximum reliability — ideal for larger operations with multiple outbuildings and SLA requirements.</p>
            <p className="text-muted-foreground mt-3"><span className="text-foreground font-medium">For most farms,</span> Cellular SD-WAN + P2P radio is the sweet spot: faster to deploy, cheaper than a leased line, and it solves the outbuilding problem without waiting months for fibre.</p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Livestock tech — full-bleed image section */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1638215640640-c51055587778?w=1920&q=80"
            alt="Cattle grazing on British farmland"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Operations</p>
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-10 leading-snug max-w-2xl">
              Livestock tech that requires broadband
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {livestockTech.map((tech, i) => (
                <div key={i} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                  <h3 className="text-base font-medium text-white mb-2">{tech.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
            <p className="text-white/70 mt-8 max-w-3xl text-center mx-auto leading-relaxed">
              All of these depend on reliable, always-on broadband. One hour of outage might mean missing a calving alert (£500+ loss) or failing to detect health issues. Farm broadband isn't a luxury; it's operational infrastructure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Outbuilding approaches — 2-column reversed */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
                  alt="Stone farm outbuildings in rural Britain"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Distribution</p>
                <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
                  Remote outbuildings: getting signal everywhere
                </h2>
                <div className="space-y-4">
                  {outbuildingApproaches.map((approach, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <approach.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{approach.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{approach.cost} · {approach.speed} · {approach.range}</p>
                        </div>
                      </div>
                      <p className="text-xs text-green-600 mb-1">{approach.advantages}</p>
                      <p className="text-xs text-red-600">{approach.disadvantages}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  Most farms use <span className="text-foreground font-medium">radio links for outbuildings + cellular for the main house.</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Budget guidance */}
      <section className="bg-secondary py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Planning</p>
              <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
                Budget guidance for farms
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {budgetGuidance.map((guide, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">{guide.size}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{guide.livestock}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-1">Solution</p>
                      <p className="font-medium text-foreground">{guide.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-1">Monthly</p>
                      <p className="font-medium text-foreground">{guide.monthlyDost}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-1">Setup</p>
                      <p className="font-medium text-foreground">{guide.setupCost}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-1">Annual</p>
                      <p className="font-medium text-foreground">{guide.annualCost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Good for: {guide.goodFor}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl border border-border bg-card">
              <h3 className="text-base font-medium text-foreground mb-4">ROI Calculation</h3>
              <p className="text-sm text-muted-foreground mb-3">One missed calving alert (one lost calf): £500+. One day of EPOS downtime in farm shop: £200-500. One day of herd record system downtime: regulatory fine risk + productivity loss.</p>
              <p className="text-sm text-foreground">Broadband investment pays for itself rapidly if it prevents even one incident per year.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inline image break */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80"
                alt="Rolling green British countryside fields"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-3 text-center">Modern farm operations depend on reliable connectivity across the entire estate.</p>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQs</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground font-normal">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-surface-dark-foreground font-medium hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-surface-dark-muted leading-relaxed pb-5 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* CTA */}
      <Section size="large" className="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Ready to connect your farm?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team can assess your farm's connectivity needs and design a solution that serves the farmhouse, outbuildings, and your livestock operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/check">Plan Your Farm Broadband</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Related case studies */}
      <RelatedCaseStudies currentPath="/farm-broadband" />

      {/* Related services */}
      <section className="bg-secondary py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RelatedServices services={relatedServices} heading="Related Solutions" subheading="Find the right connectivity for your business." />
        </div>
      </section>
    </PageLayout>
  );
};

export default FarmBroadband;
