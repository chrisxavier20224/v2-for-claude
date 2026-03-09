import { Link } from "react-router-dom";
import { Wifi, Radio, Cable, AlertTriangle, TrendingUp, Zap, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/backgrounds/field-2.jpg";

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

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

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
        title="Farm Broadband UK: Reliable Internet for Livestock, Equipment, and Business"
        description="Farms need broadband for CCTV, milking parlours, livestock monitoring, and business ops. Practical guide. Case study: Royle Farm. Solutions that actually work."
        keywords="farm broadband UK, agricultural broadband, livestock monitoring broadband, farm WiFi, rural farm internet, precision agriculture connectivity"
        url="/farm-broadband"
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Farm broadband solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Farm Broadband UK: Reliable Internet for Livestock, Equipment, and Business
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              Modern farms are precision-technology operations. This guide shows how to get reliable broadband that serves the farmhouse, outbuildings, livestock monitoring, and business operations.
            </p>
            <Button size="lg" asChild>
              <Link to="/availability-checker">Check Your Farm's Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Intro */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Context</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Farming is a technology business now
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                The image of farming as manual labour is outdated. Modern farms are precision-technology operations:
              </p>
              <ul>
                <li>Livestock monitoring: Calving sensors, health monitoring apps, feed automation systems</li>
                <li>Milking parlour tech: Automated systems, milk meters, bulk tank monitoring</li>
                <li>Grazing management: GPS tracking of cattle, smart gates, virtual fencing</li>
                <li>Equipment: Tractors and harvesters with telematics, GPS guidance, real-time diagnostics</li>
                <li>Outbuildings: Grain storage, feed sheds, equipment barns — all need remote monitoring</li>
                <li>Regulatory compliance: Cloud-based herd records, milk quality data, environmental logs</li>
              </ul>
              <p>
                All of this requires reliable, fast broadband. Fibre takes years. Mobile hotspot fails constantly. Farms are stuck.
              </p>
              <p>
                Additionally, farms operate businesses: they sell product, manage suppliers, handle invoicing, coordinate with merchants. That business runs from an office building that's often 1-5km from the farmhouse. One connectivity solution serving both the house and outbuildings is the challenge.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Royle Farm Case Study */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Case Study</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              Royle Farm: Distributed Geography Solved with Hybrid Infrastructure
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">The Farm</h3>
                <p className="text-muted-foreground">Royle Farm is a mixed beef and dairy operation in Herefordshire, 40 acres, 80 head of cattle, plus farm shop.</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Challenge</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Farmhouse 1km from main road</li>
                  <li>Grazing land spread across 2km (two separate fields, each with equipment sheds)</li>
                  <li>BT promised fibre in 2021, then 2022, then 2023 — still waiting</li>
                  <li>Operating on ADSL (0.5Mbps down, unusable for modern farm ops)</li>
                  <li>Struggling with herd management software (uploads time out, monitoring real-time features unusable)</li>
                  <li>Farm shop (on property) needs point-of-sale (EPOS dependent on farmhouse broadband)</li>
                  <li>Equipment monitoring (tractors, feed systems) requires live telemetry (impossible on ADSL)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Solution & Implementation</h3>
                <p className="text-muted-foreground mb-3"><strong>Leased line + wireless distribution (P2P radio links)</strong></p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Phase 1:</strong> Fibre from road junction (1km trench). Excess construction charges were high (usual for rural). Integrated instead: fibre to cattle grid (0.5km), then distributed via high-powered P2P radio links to barn (2km away via wireless).</li>
                  <li><strong>Phase 2:</strong> WiFi mesh in farmhouse and shop, access points in outbuildings.</li>
                  <li><strong>Phase 3:</strong> Backup cellular bonding (in case fibre fails or weather impacts radio).</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Results</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Farmhouse: 50Mbps symmetrical (leased line)</li>
                  <li>Farm shop: WiFi from farmhouse (stable, password protected)</li>
                  <li>Milking parlour: P2P radio link to remote shed (30Mbps)</li>
                  <li>Grazing shed: Second P2P link (30Mbps)</li>
                  <li>Backup: 4G cellular (100Mbps) if main connection drops</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Herd management software: Works seamlessly, real-time monitoring, live alerts</li>
                  <li>EPOS: Zero timeouts, transactions processed instantly</li>
                  <li>Equipment telemetry: Tractors upload diagnostic data in real-time</li>
                  <li>Compliance: Farm records upload daily to cloud (herd health, milk quality, environmental data)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Cost & ROI</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Leased line: £400/month</li>
                  <li>P2P radio installation: £1,500 (one-time)</li>
                  <li>WiFi mesh: £1,000 (one-time)</li>
                  <li>Cellular backup: £80/month</li>
                  <li><strong>Total first year:</strong> £400×12 + £1,500 + £1,000 + £80×12 = £5,860</li>
                  <li><strong>Ongoing annual:</strong> £400×12 + £80×12 = £5,760</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Connectivity solutions */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Options</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Connectivity solutions for farms
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {solutions.map((sol, i) => (
              <div key={sol.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <sol.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{sol.name}</h3>
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
                <p className="text-sm text-muted-foreground mb-2"><strong>Suitable for:</strong> {sol.suitable}</p>
                <p className="text-sm text-red-600"><strong>Bottleneck:</strong> {sol.bottleneck}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mt-8 p-6 rounded-2xl border border-border bg-card">
            <p className="text-muted-foreground"><strong>For Royle Farm specifically,</strong> leased line was best because: (1) Fibre became available (existing Openreach ducts), (2) Budget allowed, (3) Multiple outbuildings needed permanent, reliable solution.</p>
            <p className="text-muted-foreground mt-3"><strong>For most farms,</strong> Cellular + P2P radio is the sweet spot: faster to deploy, cheaper than leased line, solves the outbuilding problem.</p>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Livestock tech */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Operations</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Livestock tech that requires broadband
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-4 max-w-5xl mx-auto">
            {livestockTech.map((tech, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">{tech.title}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            <strong>Common thread:</strong> All of these depend on reliable, always-on broadband. One hour of outage might mean missing a calving alert (£500+ loss) or failing to detect health issues (veterinary cost + productivity loss). Farm broadband isn't a luxury; it's operational infrastructure.
          </p>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Outbuilding approaches */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Distribution</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Remote outbuildings: getting signal everywhere
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {outbuildingApproaches.map((approach, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <approach.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{approach.title}</h3>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <p><span className="text-muted-foreground">Cost:</span> <span className="font-medium text-foreground">{approach.cost}</span></p>
                  <p><span className="text-muted-foreground">Speed:</span> <span className="font-medium text-foreground">{approach.speed}</span></p>
                  <p><span className="text-muted-foreground">Range:</span> <span className="font-medium text-foreground">{approach.range}</span></p>
                  <p><span className="text-muted-foreground">Setup:</span> <span className="font-medium text-foreground">{approach.setup}</span></p>
                </div>
                <div className="mb-4 pb-4 border-t border-border">
                  <p className="text-xs font-medium text-green-600 mb-1">Advantages</p>
                  <p className="text-xs text-muted-foreground">{approach.advantages}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-red-600 mb-1">Disadvantages</p>
                  <p className="text-xs text-muted-foreground">{approach.disadvantages}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto text-sm">
            Most farms use <strong>Approach 1 (radio links) for outbuildings + fibre or cellular for the main house.</strong>
          </p>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Budget guidance */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Planning</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Budget guidance for farms
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 max-w-5xl mx-auto">
            {budgetGuidance.map((guide, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{guide.size}</h3>
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
            <h3 className="text-base font-semibold text-foreground mb-4">ROI Calculation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>One missed calving alert (one lost calf): £500+</li>
              <li>One day of EPOS downtime in farm shop: £200-500</li>
              <li>One day of herd record system downtime: Regulatory fine risk + productivity loss</li>
            </ul>
            <p className="text-sm text-foreground mt-4">Broadband investment pays for itself rapidly if it prevents even one incident per year.</p>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(222 47% 11%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">FAQs</p>
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
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Ready to connect your farm?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team can assess your farm's connectivity needs and design a solution that serves the farmhouse, outbuildings, and your livestock operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/availability-checker">Plan Your Farm Broadband</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      <Section className="bg-secondary">
        <RelatedServices services={relatedServices} heading="Related Solutions" subheading="Find the right connectivity for your business." />
      </Section>
    </PageLayout>
  );
};

export default FarmBroadband;
