import { Link } from "react-router-dom";
import { Wifi, TrendingUp, MapPin, AlertCircle, CheckCircle, XCircle, ArrowRight, HelpCircle } from "lucide-react";
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

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";

const solutions = [
  {
    icon: Wifi,
    name: "Cellular SD-WAN (Single SIM)",
    tagline: "Single carrier, reliable, affordable baseline",
    speedDown: "80–150Mbps",
    speedUp: "30–50Mbps",
    latency: "20–30ms",
    monthlyCost: "£80–135",
    installTime: "14 days",
    reliability: "99%+",
    support: "Professional, SLA available",
    whoFor: "Small businesses, single buildings, budget-conscious. Works reliably for EPOS, video calls, backups.",
    whoNotFor: "Businesses needing maximum redundancy or those without any 4G coverage (rare).",
    pros: [
      "Available across 99%+ of rural UK",
      "Consistent 20-30ms latency suitable for all business apps",
      "Weather-resistant (cellular unaffected by rain like satellite)",
      "Professional install and monitoring included",
      "No data caps, no throttling",
    ],
    cons: [
      "Single network means one tower failure = offline",
      "Less redundancy than bonded solutions",
      "Speed is fixed to that single carrier's availability",
    ],
  },
  {
    icon: TrendingUp,
    name: "Cellular SD-WAN (Bonded)",
    tagline: "Two or more carriers bonded for speed and resilience",
    speedDown: "150–350Mbps",
    speedUp: "80–120Mbps",
    latency: "20–30ms",
    monthlyCost: "£135–250",
    installTime: "14 days",
    reliability: "99.5%+",
    support: "Professional, SLA available",
    whoFor: "Serious rural businesses. EPOS, VoIP, CCTV upload, multi-user video. Automatic failover if one carrier drops.",
    whoNotFor: "Consumers, light usage, or those waiting for fibre who don't need reliability now.",
    pros: [
      "Two independent paths — if one carrier fails, traffic routes to the other seamlessly",
      "Aggregate speeds approach sum of both carriers (150+150 = ~280Mbps)",
      "Upload speeds perfect for cloud backups and CCTV",
      "Automatic load balancing optimises performance in real-time",
      "Weather-independent (cellular always works)",
    ],
    cons: [
      "Higher monthly cost than single SIM",
      "Requires decent 4G coverage from at least two carriers (desktop survey confirms)",
      "Professional installation ~£2,200 (we own and maintain all hardware)",
    ],
  },
  {
    icon: AlertCircle,
    name: "Starlink Alone",
    tagline: "Available everywhere, but not always reliable for business",
    speedDown: "50–200Mbps",
    speedUp: "10–30Mbps",
    latency: "25–60ms",
    monthlyCost: "£99–130",
    installTime: "1–2 days",
    reliability: "90% (weather dependent)",
    support: "Community forum only",
    whoFor: "Temporary solutions, homeworkers, light commercial without EPOS/VoIP dependency.",
    whoNotFor: "Businesses running EPOS, VoIP, or anything requiring guaranteed uptime during rain.",
    pros: [
      "Available almost everywhere in UK",
      "Impressive download speeds for the price",
      "DIY or quick professional install",
      "No long-term contract",
    ],
    cons: [
      "Latency variance (25-60ms) causes EPOS and VoIP timeouts during weather",
      "Heavy rain degrades or disconnects signal",
      "No SLA, no phone support, no engineer visits",
      "No automatic failover — if it drops, you're offline",
      "Upload speeds too low for serious cloud work",
    ],
  },
];

const faqs = [
  {
    q: "BT finally delivered fibre to my area. Should I switch from cellular bonding?",
    a: "Evaluate based on cost and SLA. If fibre is £40/month with no SLA, bonding at £135/month is expensive for the upgrade. If fibre is the same cost with 99.5% SLA, upgrade. But switching isn't urgent — bonding is reliable enough for most businesses.",
  },
  {
    q: "What if 5G becomes ubiquitous?",
    a: "Cellular bonding gets better. 5G is lower latency, higher speeds. We'll automatically include 5G where available. Your monthly cost might drop due to more affordable 5G SIMs.",
  },
  {
    q: "Can I use bonding for a construction site that moves every month?",
    a: "Yes. The router is portable. Each new site needs an engineer visit (~4 hours), but once it's up, it works. You're paying per install, so monthly movement gets expensive. For semi-permanent sites (6+ months), bonding is smart. For monthly moves, a temporary Starlink setup might be cheaper.",
  },
  {
    q: "What if there's no cellular signal at my property despite the tower maps?",
    a: "Desktop surveys are 95% accurate, but terrain, buildings, and vegetation cause surprises. If the site visit confirms no signal, we pivot: Starlink becomes the default, or leased line if available. We'll have a contingency before you're left hanging.",
  },
  {
    q: "Will my costs increase after the contract term?",
    a: "SIM costs are set by operators and vary annually (usually 2-5% inflation). We pass operator increases through honestly. Router maintenance and SD-WAN platform costs don't increase for 3-5 years. Upfront transparency: we tell you the going rate for any increases before they happen.",
  },
  {
    q: "Is there a data cap?",
    a: "No. Cellular SIMs for business use are unlimited (or high-threshold like 10TB/month, never hit in real SME use). No throttling, no 'fair use' clauses, no surprise bills.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

const relatedServices = [
  {
    name: "Starlink Installation",
    description: "Rapid deployment of satellite broadband as interim solution.",
    url: "/connectivity/starlink-installation",
  },
  {
    name: "Integra SD-WAN",
    description: "Business-grade cellular bonding with automatic failover.",
    url: "/connectivity/integra-sd-wan",
  },
  {
    name: "Rural SMEs",
    description: "Tailored connectivity solutions for rural small businesses.",
    url: "/sectors/rural-smes",
  },
  {
    name: "4G/5G Backup",
    description: "Reliable secondary connection for critical operations.",
    url: "/connectivity/4g-5g-backup",
  },
];

const RuralBusinessBroadband = () => {
  return (
    <PageLayout>
      <SEO
        title="Rural Business Broadband UK: Getting Reliable Internet When BT Says 'Wait'"
        description="BT can't deliver. Starlink alone isn't enough. Here's how rural SMEs get business-grade broadband: SD-WAN bonding, alternatives, real speed comparisons, case study."
        keywords="rural business broadband UK, rural SME connectivity, SD-WAN bonding, cellular broadband business, reliable rural internet, BT fibre delays"
        url="/rural-business-broadband"
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Rural business broadband solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Rural Business Broadband UK: Getting Reliable Internet When BT Says "Wait"
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              BT's fibre timeline keeps slipping. Your business can't wait. This guide shows rural SMEs how to get business-grade broadband today — with honest speed comparisons, real case studies, and a decision framework that actually works.
            </p>
            <Button size="lg" asChild>
              <Link to="/availability-checker">Check Your Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Crisis section */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">The Reality</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              The rural business broadband crisis is real
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                "We'll have fibre to you by end of 2024." That was the promise in 2021. Then 2024 became 2025. Then 2026. Now it's "2028, maybe."
              </p>
              <p>
                Meanwhile, your farm, shop, office, or business park is trying to operate on whatever mobile hotspot or unreliable ADSL you can scrape together. Zoom meetings buffer. Clients see you freezing mid-call. Inventory systems timeout. EPOS tills drop transactions. Backups crawl.
              </p>
              <p>
                BT's fibre rollout is genuinely ambitious. But the economics work against rural areas. Installation costs per premise skyrocket when premises are sparse. Maintenance burden is 20x higher per customer. Shareholder pressure prioritises dense urban areas. The maths don't work for rural deployment.
              </p>
              <p>
                You can't wait. Your competitors in towns didn't. This guide shows you what's actually available now — and why waiting for fibre is costing you money today.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Solutions deep dive */}
      {solutions.map((sol, index) => (
        <div key={sol.name}>
          <Section className={index % 2 === 0 ? "bg-secondary" : "bg-background"}>
            <AnimatedSection>
              <div className="max-w-5xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <sol.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
                      {sol.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mt-1">{sol.tagline}</p>
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
                  <div className="rounded-2xl border border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20 p-6">
                    <h3 className="text-base font-medium text-foreground mb-2">Who's it for?</h3>
                    <p className="text-muted-foreground leading-relaxed">{sol.whoFor}</p>
                  </div>
                  <div className="rounded-2xl border border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20 p-6">
                    <h3 className="text-base font-medium text-foreground mb-2">Who's it not for?</h3>
                    <p className="text-muted-foreground leading-relaxed">{sol.whoNotFor}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Section>
          {index < solutions.length - 1 && (
            <GradientBand
              fromColor={index % 2 === 0 ? "hsl(210 40% 96%)" : "hsl(0 0% 100%)"}
              toColor={index % 2 === 0 ? "hsl(0 0% 100%)" : "hsl(210 40% 96%)"}
            />
          )}
        </div>
      ))}

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* McGee Case Study */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Case Study</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              McGee Construction: From Hotspot Chaos to Professional Connectivity
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                McGee Construction operates across multiple London and South East building sites. They needed reliable broadband at each site — cameras, plans, site management software, team communications.
              </p>
              <p>
                <strong>Challenge:</strong> Construction sites move every 3-6 months. Installing fibre per site was impossible. BT's FTTx was unavailable at 70% of sites. They were using expensive mobile hotspots (£60/month, unreliable, 2Mbps average).
              </p>
              <p>
                <strong>Solution:</strong> Cellular SD-WAN bonding. Single router per site, plug-and-play install, 4-hour engineer visit.
              </p>
              <p>
                <strong>Results:</strong> 150Mbps+ at 9 different sites over 12 months. £135/month per site (vs £60 hotspot + frustration). Zero CCTV downtime, site monitoring works flawlessly. Temporary solution became permanent (cost-effective, reliable). When they move sites, the router moves with them.
              </p>
              <p>
                <strong>Lesson:</strong> For businesses with temporary or mobile premises, cellular SD-WAN is the only realistic option. Leased line and fibre are too slow to deploy. Satellite lacks reliability. Mobile hotspot is too expensive and unreliable. Purpose-built cellular bonding hits the sweet spot.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Assessment section */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Assessment Process</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              How to assess if your property can get cellular bonding
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Step 1: Desktop Survey (Free)",
                  description: "You provide your property coordinates. We map your location against UK cell tower databases, identify nearby towers, note which operators are present, and check what technologies are available (4G, 5G).",
                },
                {
                  title: "Step 2: Line of Sight Check",
                  description: "We assess whether there's clear line of sight from your property to the towers. Trees, buildings, and terrain matter. Terrain elevation maps let us predict signal strength without visiting.",
                },
                {
                  title: "Step 3: Honest Recommendation",
                  description: "Based on towers, signals, and distance, we tell you: 'You'll get 250Mbps, install in 14 days, £135/month' or 'Cellular is weak here, Starlink would be better' or 'Leased line is your only realistic option.' You'll never hear 'definitely' until we've actually done the survey.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-medium text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Technical foundation */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Technical Foundation</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              How cellular SD-WAN bonding actually works
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                If your property has two cell towers nearby, you can bond them. Tower 1 (O2): 5km away, 100Mbps available. Tower 2 (Vodafone): 4km away, 120Mbps available.
              </p>
              <p>
                A standard router would pick one tower and ignore the other. SD-WAN bonding uses both: traffic is split between both towers. If you're uploading a file (80Mbps), both towers handle part of it. Total effective speed approaches 180-200Mbps. If one tower drops unexpectedly, traffic reroutes to the other, no interruption.
              </p>
              <p>
                The router handles all this automatically. You see one internet connection that's faster and more reliable than either tower alone.
              </p>
              <p>
                <strong>Equipment:</strong> Commercial-grade Integra router with dual SIM capability, external antennas for better signal, weatherproofed outdoor box, professional install. We own and maintain all hardware — if anything breaks, we send an engineer at no cost to you. <strong>Cost:</strong> Installation from £2,200, monthly SIM costs ~£60 (two carriers).
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
              Not sure which option is right for your business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our desktop survey maps your property to nearby towers and identifies exactly what's available at your location. No obligation, no hard sell — just honest advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/availability-checker">Check Your Availability</Link>
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

export default RuralBusinessBroadband;
