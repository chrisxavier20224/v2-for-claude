import { Link } from "react-router-dom";
import { Satellite, Radio, Cable, Zap, HelpCircle, ArrowRight, ArrowLeft, CheckCircle, XCircle, Signal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import FurtherReading from "@/components/blog/FurtherReading";
import ISPFounderNote from "@/components/insights/ISPFounderNote";
import { PullQuote } from "@/pages/insights/InsightArticle";
import { insightArticles } from "@/pages/insights/insightsData";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import alternativesHeroAsset from "@/assets/insights/alternatives-hero.jpg.asset.json";
import alternativesOg from "@/assets/insights/alternatives-og.jpg";
import starlinkBgAsset from "@/assets/resources/starlink-bg.jpg.asset.json";
import cellularBgAsset from "@/assets/resources/cellular-bg.jpg.asset.json";
import leasedlineBgAsset from "@/assets/resources/leasedline-bg.jpg.asset.json";
import hybridBgAsset from "@/assets/resources/hybrid-bg.jpg.asset.json";
const heroImg = alternativesHeroAsset.url;

const solutions = [
  {
    icon: Satellite,
    name: "Starlink (Satellite)",
    tagline: "Fast speeds, but not built for business",
    bgImage: starlinkBgAsset.url,
    speedDown: "up to 250Mbps",
    speedUp: "10–15Mbps",
    latency: "25–60ms",
    monthlyCost: "£99–130",
    installTime: "1–2 days (DIY)",
    reliability: "Fair",
    support: "Community forum only",
    whoFor: "Businesses that value raw speed and can tolerate occasional drops — light-touch use cases, temporary sites, or as a paired link inside SD-WAN.",
    whoNotFor: "Businesses running EPOS, VoIP, CCTV, or anything that needs consistent latency and failover.",
    pros: [
      "Available almost everywhere — no postcode lottery",
      "Impressive download speeds for the price",
      "No long-term contracts — cancel anytime",
      "Simple self-install or professional install under 2 hours",
    ],
    cons: [
      "Latency spikes cause EPOS timeouts and VoIP echo",
      "Heavy rain and snow degrade or kill the signal",
      "No SLA, no phone support, no engineer visits",
      "No automatic failover — if it drops, you're offline",
      "Data caps creeping in on cheaper plans",
    ],
  },
  {
    icon: Signal,
    name: "4G/5G Bonding (Cellular SD-WAN)",
    tagline: "Business-grade. Multi-network. Automatic failover.",
    bgImage: cellularBgAsset.url,
    speedDown: "Up to 350Mbps",
    speedUp: "80–120Mbps",
    latency: "20–30ms",
    monthlyCost: "£110–400",
    installTime: "10 working days",
    reliability: "99%+ uptime",
    support: "Professional, SLA available",
    whoFor: "SMEs, farms, construction sites, and distributed business teams that need reliable connectivity for EPOS, Teams, VoIP, and cloud apps.",
    whoNotFor: "Consumers on a tight budget. The uplift over basic broadband reflects the business-grade service.",
    pros: [
      "Bonds multiple networks (EE, Vodafone, Three, O2) into one pipe",
      "Automatic failover — if one network drops, traffic reroutes instantly",
      "Upload speeds of 80–120Mbps transform video calls and cloud backups",
      "Weather doesn't affect cellular signal like satellite",
      "Professional install with commercial-grade Integra hardware",
      "24/7 monitoring via Integra Cloud",
    ],
    cons: [
      "Higher monthly cost than Starlink or basic broadband",
      "Requires decent 4G coverage (desktop survey confirms this upfront)",
      "Professional installation from £2,200 (all hardware included and maintained)",
    ],
  },
  {
    icon: Radio,
    name: "Fixed Wireless Access (FWA)",
    tagline: "Simpler than bonding, but coverage is patchy",
    speedDown: "50–300Mbps",
    speedUp: "10–40Mbps",
    latency: "10–20ms",
    monthlyCost: "£20–50",
    installTime: "7–10 working days",
    reliability: "Good (if available)",
    support: "Operator support",
    whoFor: "Properties with strong FWA coverage who want a simple, affordable single-connection solution.",
    whoNotFor: "Most rural businesses — FWA coverage is still very patchy. No redundancy means single point of failure.",
    pros: [
      "Simpler setup — one antenna, one connection",
      "No multiple SIM contracts to manage",
      "Low monthly cost compared to other alternatives",
      "Professional install available",
    ],
    cons: [
      "Coverage highly unpredictable — many rural areas have none",
      "Single point of failure with no built-in redundancy",
      "Speeds degrade significantly in poor weather",
      "Quality varies wildly between providers",
    ],
  },
  {
    icon: Cable,
    name: "Leased Line (Dedicated fibre)",
    bgImage: leasedlineBgAsset.url,
    tagline: "The gold standard — if you can afford the install",
    speedDown: "10Mbps–1Gbps symmetric",
    speedUp: "Same as download",
    latency: "5–15ms",
    monthlyCost: "£400–2,000+",
    installTime: "8–12 weeks",
    reliability: "99.9% SLA",
    support: "24/7 managed",
    whoFor: "Bandwidth-hungry businesses like call centres, data-intensive operations, or multi-site enterprises with budget for premium connectivity.",
    whoNotFor: "Most rural SMEs — excess construction charges of £5,000–£20,000+ make it prohibitively expensive in remote areas.",
    pros: [
      "Symmetrical upload and download — ideal for video and cloud",
      "Uncontended — your speed is yours alone",
      "Best latency available (5–15ms)",
      "Business-class SLA with 24/7 support",
    ],
    cons: [
      "Excess construction charges can reach £20,000+",
      "Installation takes 8–12 weeks minimum",
      "Monthly costs of £400–2,000+ put it out of reach for many SMEs",
      "You only know the real install cost after ordering and survey",
    ],
  },
  {
    icon: Zap,
    name: "Starlink + Cellular SD-WAN (Hybrid)",
    tagline: "Best of both worlds. Two independent paths.",
    bgImage: hybridBgAsset.url,
    speedDown: "150–350Mbps",
    speedUp: "80–120Mbps",
    latency: "20–30ms",
    monthlyCost: "£180–210 total",
    installTime: "10 working days",
    reliability: "Excellent (dual paths)",
    support: "Professional, SLA available",
    whoFor: "Businesses that want maximum resilience with the speed of Starlink and the reliability of cellular. Ideal for remote farms, rural business premises, and construction sites.",
    whoNotFor: "Properties with strong fibre coverage — if you can get a leased line at reasonable cost, that's still the gold standard.",
    pros: [
      "Two completely independent networks — if one fails, you're still online",
      "Starlink provides base speed, cellular adds failover and lower latency",
      "Professional monitoring watches both paths 24/7",
      "Weather impacts Starlink? Traffic automatically routes to cellular",
      "Total cost ~£180–210/month vs £400+ for a leased line",
    ],
    cons: [
      "Requires Starlink dish (customer supplies) plus cellular equipment",
      "Two bills — Starlink direct + Integra SD-WAN layer",
      "Still dependent on cellular coverage for the backup path",
    ],
  },
];

const comparisonData = [
  { solution: "Starlink Direct", speed: "50–200 / 10–30", latency: "25–60ms", monthly: "£99–130", reliability: "Fair", setup: "1–2 days", support: "Forum" },
  { solution: "Cellular SD-WAN", speed: "Up to 350 / 100+", latency: "20–30ms", monthly: "£110–400", reliability: "99%+", setup: "10 working days", support: "Professional" },
  { solution: "Fixed Wireless", speed: "50–300 / 10–40", latency: "10–20ms", monthly: "£20–50", reliability: "Good", setup: "7–10 working days", support: "Operator" },
  { solution: "Leased Line", speed: "Up to 1Gbps sym.", latency: "5–15ms", monthly: "£400–2,000+", reliability: "99.9%", setup: "8–12 weeks", support: "24/7 managed" },
  { solution: "Starlink + Cellular", speed: "150–350 / 80–120", latency: "20–30ms", monthly: "£180–210", reliability: "Excellent", setup: "10 working days", support: "Professional" },
];

const faqs = [
  {
    q: "Is 4G bonding just a temporary patch until fibre arrives?",
    a: "Not if fibre is years away. Cellular SD-WAN is proven, scalable, and supports businesses today. When fibre eventually arrives, you evaluate upgrading — but waiting in the dark is more expensive than getting connected now.",
  },
  {
    q: "Will Starlink improve enough for business use?",
    a: "Starlink's newer satellites are reducing latency, but weather dependency and lack of SLA support remain fundamental to the satellite model. The hybrid approach (Starlink + cellular) will likely remain the smart business choice regardless of future improvements.",
  },
  {
    q: "Can I use Fixed Wireless instead of bonded cellular?",
    a: "If FWA is available in your area and coverage is strong, it's simpler than bonding. But coverage is patchy, and FWA gives you one connection with no failover. If reliability matters, bonding's redundancy is worth the extra cost.",
  },
  {
    q: "How long does a cellular SD-WAN install take?",
    a: "Typically 10 working days from survey to live. That includes desktop survey, engineer site visit, equipment install, and testing. If you already have Starlink, adding the cellular layer is even faster.",
  },
  {
    q: "What if my property can't get good 4G signal?",
    a: "Our desktop survey identifies this upfront. We map your property to nearby towers and test line of sight. Some remote properties genuinely can't get usable 4G/5G — in those cases, Starlink alone or leased line are the only options. We'll tell you honestly before you commit.",
  },
  {
    q: "Who owns the equipment?",
    a: "We do — and that's a good thing. Integra owns, maintains, and monitors all hardware. If something breaks, we send an engineer to fix or replace it at no cost to you. No worrying about warranties, no sourcing replacement parts, no downtime while you figure it out.",
  },
  {
    q: "What about ADSL — is it still viable?",
    a: "ADSL delivered over copper gives average speeds of 5.5Mbps upload and 17Mbps download. With the PSTN switching off in January 2027, copper-based services are being retired. If you're still on ADSL, now is the time to plan your replacement.",
  },
  {
    q: "What's the difference between FTTC and FTTP?",
    a: "FTTC (fibre to the Cabinet) puts fibre into the street cabinet but still uses copper for the final connection to your property — so speeds degrade with distance. FTTP (fibre to the Premises) replaces copper entirely with fibre all the way to your door, delivering much faster and more consistent speeds.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

const AlternativesToFibre = () => {
  const META_DESCRIPTION =
    "Alternatives to fibre broadband for UK businesses: Starlink, 4G/5G bonding, fixed wireless, leased lines, hybrid. Honest speeds, costs, reliability.";
  const PAGE_URL = "https://www.integra-networks.co.uk/alternatives-to-fibre-broadband";
  const OG_IMAGE_URL = `https://www.integra-networks.co.uk${alternativesOg}`;

  const takeaways = [
    "Fibre is not everywhere — for rural UK businesses, there are five viable alternatives, each with different trade-offs.",
    "Starlink + cellular hybrid is now the most resilient option for genuinely remote sites — when configured properly.",
    "Leased lines remain the gold standard where available — but availability is the catch.",
    "\u201cBest\u201d depends entirely on workload, headcount, and whether downtime costs you money. There is no universal answer.",
    "Resilience matters more than peak speed for most business workloads.",
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Alternatives to fibre Broadband: A Practical Guide for Rural UK Businesses",
    description: META_DESCRIPTION,
    author: { "@type": "Person", name: "Chris Xavier" },
    publisher: {
      "@type": "Organization",
      name: "Integra Networks",
      logo: {
        "@type": "ImageObject",
        url: "https://www.integra-networks.co.uk/og-image.png",
      },
    },
    datePublished: "2025-09-01",
    dateModified: "2026-06-05",
    image: OG_IMAGE_URL,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.integra-networks.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.integra-networks.co.uk/insights" },
      { "@type": "ListItem", position: 3, name: "Alternatives to fibre Broadband", item: PAGE_URL },
    ],
  };

  const continueReading = insightArticles.filter(
    (a) => a.slug !== "alternatives-to-fibre-broadband",
  );

  return (
    <PageLayout hideCTA>
      <SEO
        title="Alternatives to fibre Broadband"
        description={META_DESCRIPTION}
        keywords="alternatives to fibre broadband, rural broadband UK, Starlink vs 4G, SD-WAN, cellular broadband, no fibre broadband alternatives, business broadband"
        url="/alternatives-to-fibre-broadband"
        type="article"
        image={alternativesOg}
        imageWidth={1200}
        imageHeight={630}
        author="Chris Xavier"
        publishedTime="2025-09-01"
      />
      <SchemaMarkup data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero — matches Insight article cover */}
      <section className="insight-cover relative bg-surface-dark text-white overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40 pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div aria-hidden className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-14 md:pt-20 pb-16 md:pb-24">
          <div className="mb-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All insights
            </Link>
          </div>

          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tight max-w-4xl mb-6 mt-8">
              Alternatives to fibre Broadband: A Practical Guide for Rural UK Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
              Fibre's years away? Your business can't wait. This guide compares every real alternative available today — with honest assessments of speed, cost, and reliability.
            </p>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/55">
              <span className="text-white/80">Integra Networks Insights</span>
              <span className="text-white/25">·</span>
              <span>12 min read</span>
              <span className="text-white/25">·</span>
              <span>Pillar Guide</span>
            </div>

            <div className="mt-10">
              <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
                <Link to="/check">Check Your Options <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Key Takeaways */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="pov-takeaways rounded-2xl bg-primary/[0.06] border border-primary/15 p-7 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                Key takeaways
              </p>
              <ul className="space-y-4">
                {takeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why you can't wait */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">The Reality</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Why rural UK businesses can't wait for fibre
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Ofcom reports 78% of UK premises now have gigabit-capable connectivity. But that headline hides a brutal truth. In rural areas — farms, remote offices, construction sites, country estates — the fibre arrival date keeps moving.
              </p>
              <p>
                You've probably heard it yourself: "We'll connect you by 2026." Then 2027. Then 2028. Meanwhile, your business runs on a mobile hotspot, Zoom calls buffer mid-sentence, and EPOS tills drop transactions at the worst possible moment.
              </p>
              <p>
                With the PSTN switching off in January 2027, copper-based services like ADSL are being retired entirely. Waiting for fibre isn't realistic anymore — not because fibre won't eventually arrive, but because your business can't afford to stand still while it does.
              </p>
              <p>
                This guide compares every real alternative available today. No jargon, no sales pitch — just honest assessments to help you choose.
              </p>
            </div>
            <ISPFounderNote>
              <p className="mb-3">
                "Every week we get a call from a business owner who has been told 'fibre is coming.' Sometimes it is — in three years. Sometimes it isn't, but no one will say so out loud. The honest answer for most rural businesses is that the right alternative today will out-perform a fibre promise for tomorrow."
              </p>
            </ISPFounderNote>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Solutions deep dive */}
      {solutions.map((sol, index) => (
        <div key={sol.name}>
          <div
            className={`relative ${sol.bgImage ? "" : index % 2 === 0 ? "bg-secondary" : "bg-background"}`}
            style={
              sol.bgImage
                ? {
                    backgroundImage: `linear-gradient(hsl(220 60% 6% / 0.82), hsl(220 60% 6% / 0.88)), url(${sol.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  }
                : undefined
            }
          >
          <Section className="bg-transparent">
            <AnimatedSection>
              <div className="max-w-5xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl flex-shrink-0 ${sol.bgImage ? "bg-white/10 text-white backdrop-blur" : "bg-primary/10 text-primary"}`}>
                    <sol.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className={`text-heading-2 md:text-heading-1 font-normal ${sol.bgImage ? "text-white" : "text-foreground"}`}>
                      {sol.name}
                    </h2>
                    <p className={`text-lg mt-1 ${sol.bgImage ? "text-white/70" : "text-muted-foreground"}`}>{sol.tagline}</p>
                  </div>
                </div>

                {/* Key stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Download", value: sol.speedDown },
                    { label: "Upload", value: sol.speedUp },
                    { label: "Latency", value: sol.latency },
                    { label: "Monthly", value: sol.monthlyCost },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Install Time", value: sol.installTime },
                    { label: "Reliability", value: sol.reliability },
                    { label: "Support", value: sol.support },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Pros and cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" /> Strengths
                    </h3>
                    <ul className="space-y-3">
                      {sol.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" /> Limitations
                    </h3>
                    <ul className="space-y-3">
                      {sol.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Who for / not for */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`rounded-2xl border p-6 ${sol.bgImage ? "border-green-400/30 bg-green-500/10 backdrop-blur-sm" : "border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20"}`}>
                    <h3 className={`text-base font-medium mb-2 ${sol.bgImage ? "text-white" : "text-foreground"}`}>Who's it for?</h3>
                    <p className={`leading-relaxed ${sol.bgImage ? "text-white/80" : "text-muted-foreground"}`}>{sol.whoFor}</p>
                  </div>
                  <div className={`rounded-2xl border p-6 ${sol.bgImage ? "border-red-400/30 bg-red-500/10 backdrop-blur-sm" : "border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20"}`}>
                    <h3 className={`text-base font-medium mb-2 ${sol.bgImage ? "text-white" : "text-foreground"}`}>Who's it not for?</h3>
                    <p className={`leading-relaxed ${sol.bgImage ? "text-white/80" : "text-muted-foreground"}`}>{sol.whoNotFor}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Section>
          </div>
          {index < solutions.length - 1 && (
            <GradientBand
              fromColor={sol.bgImage ? "hsl(220 60% 6%)" : index % 2 === 0 ? "hsl(210 40% 96%)" : "hsl(0 0% 100%)"}
              toColor={solutions[index + 1]?.bgImage ? "hsl(220 60% 6%)" : index % 2 === 0 ? "hsl(0 0% 100%)" : "hsl(210 40% 96%)"}
            />
          )}
        </div>
      ))}

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Comparison table */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">At a Glance</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Comparing the options: speed, cost, reliability
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Solution</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Speed (Down/Up)</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Latency</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Monthly</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Reliability</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Setup</th>
                  <th className="text-left py-4 px-3 font-semibold text-foreground">Support</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.solution} className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/50" : ""}`}>
                    <td className="py-3 px-3 font-medium text-foreground">{row.solution}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.speed}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.latency}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.monthly}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.reliability}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.setup}</td>
                    <td className="py-3 px-3 text-muted-foreground">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Inline availability checker */}
      <Section className="bg-secondary">
        <AnimatedSection delay={0.1}>
          <AvailabilityCheckerInline sourceTag="alternatives-to-fibre" compact hideChatAlternative />
        </AnimatedSection>
      </Section>

      {/* Decision framework */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Decision Framework</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              How to choose the right option
            </h2>
            <div className="space-y-6">
              {[
                {
                  scenario: "You value simplicity and cost over reliability",
                  recommendation: "Starlink direct. It works for light-touch business use, secondary sites, or short-term deployments. If your business doesn't depend on guaranteed uptime, save the money.",
                },
                {
                  scenario: "You run a business where downtime costs money",
                  recommendation: "Cellular SD-WAN. EPOS tills, remote teams, live monitoring, VoIP — these all need sub-30ms latency and automatic failover. Cellular bonding delivers both.",
                },
                {
                  scenario: "Leased line is available and affordable",
                  recommendation: "Get it. It's the gold standard. But check the install cost first. If excess construction charges exceed £10,000, the hybrid approach (Starlink + cellular) delivers 95% of the benefit at 20% of the cost.",
                },
                {
                  scenario: "You're waiting for fibre and don't know how long",
                  recommendation: "Don't wait empty-handed. Deploy a hybrid solution now. When fibre arrives, you'll already be profitable. Fibre becomes an upgrade, not a lifeline.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-medium text-primary mb-2">If {item.scenario}:</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Resilience section */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">The Hidden Variable</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Resilience matters more than you think
            </h2>
            <PullQuote>
              Most rural businesses don't need the fastest broadband.
              They need the one that doesn't stop working at 3pm on a Thursday.
            </PullQuote>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Most businesses underestimate resilience until it costs them money. A one-hour outage doesn't cost the same to everyone. For a construction site managing equipment and crews, it's chaos. For a farm with remote CCTV and automated gates, it's vulnerability. For a shop with EPOS, it's lost transactions plus reputation damage.
              </p>
              <p>
                Starlink alone leaves you exposed. A single rainstorm, a dish failure, or temporary maintenance from Starlink's constellation leaves you offline with zero contingency.
              </p>
              <p>
                Cellular bonding addresses that by design. Two independent paths. Professional 24/7 monitoring. Automatic failover. Human support when things go wrong.
              </p>
              <p className="font-medium text-foreground">
                It's the difference between connectivity and business continuity. Choose accordingly.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

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
              Not sure which alternative is right for your business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us your postcode, your headcount, and what you actually use the connection for. We'll tell you the right option — even if it's not one we sell.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact?topic=alternatives-recommendation">
                  Get a straight recommendation
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Continue reading */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              More insights
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10">
              Continue reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {continueReading.map((other) => (
                <Link
                  key={other.slug}
                  to={other.hrefOverride ?? `/insights/${other.slug}`}
                  className="group flex items-stretch overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  {other.heroImage && (
                    <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden bg-muted">
                      <img
                        src={other.heroImage}
                        alt={other.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6 flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-2">
                      {other.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-medium text-foreground leading-snug mb-2">
                      {other.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>
      <FurtherReading
        links={[
          { slug: "extending-wi-fi-and-internet-to-outbuildings", label: "Extending Wi-Fi and internet to outbuildings" },
          { slug: "internet-and-wi-fi-solutions-for-churches-and-listed-buildings", label: "Internet and Wi-Fi for churches and listed buildings" },
          { slug: "satellite-internet-vs-integra-4g-5g-sdwan", label: "Satellite internet vs Integra 4G/5G SD-WAN" },
        ]}
      />
    </PageLayout>
  );
};

export default AlternativesToFibre;
