import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Wifi, Network, Shield, Satellite, Gauge, Server, Lock, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/connectivity/starlink-hero.webp";
import ruralImgAsset from "@/assets/landing/wireless-rural-industrial.jpg.asset.json";
import multisiteImgAsset from "@/assets/landing/wireless-multisite-container.jpg.asset.json";
import eposImgAsset from "@/assets/landing/wireless-epos-card.jpg.asset.json";
import maypoleBgAsset from "@/assets/landing/enterprise-install-maypole-school.jpg.asset.json";
import royleFarmImg from "@/assets/case-studies/royle-farm-hero.webp";
import wbPowerImg from "@/assets/case-studies/wb-power-hero.avif";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";

const maypoleBg = maypoleBgAsset.url;

const worksFor = [
  "A single home worker or holiday let with light video calls and streaming",
  "A small site with no card payments, no VoIP, no CCTV to depend on",
  "A pop-up where 'any internet at all' is the win",
  "Content creators uploading large files occasionally",
  "An emergency backup behind a primary leased line",
];

const strugglesWith = [
  "Card payments and EPOS — latency spikes during rain cause timeouts",
  "VoIP and Teams calls at scale — jitter and 100ms+ spikes make calls hollow",
  "CCTV with live monitoring or remote VPN access — CGNAT blocks inbound",
  "Multi-site businesses needing predictable, central management",
  "Anything with a real SLA, service credits, or a UK engineer on the phone",
  "Sites with obstructions, heavy weather, or peak-time congestion",
];

const limitations: { icon: typeof Gauge; title: string; problem: string; fix: string }[] = [
  {
    icon: Gauge,
    title: "Latency variance",
    problem: "Advertised 25–60ms, but rain and orbital changes push it to 100ms+. Bad for VoIP, EPOS and Teams.",
    fix: "Bonded 4G/5G holds latency at 20–30ms. Integra SD-WAN steers latency-sensitive traffic to the best path.",
  },
  {
    icon: Lock,
    title: "No static IP, CGNAT only",
    problem: "Breaks VPNs, remote CCTV access, port forwarding and most line-of-business inbound services.",
    fix: "Integra includes a static IP on bonded configurations — VPN, CCTV and remote access work out of the box.",
  },
  {
    icon: Shield,
    title: "No business SLA",
    problem: "App-only support, best-effort uptime, no service credits. If it goes down, you wait.",
    fix: "99.5% uptime SLA with service credits and UK engineers monitoring every connection 24/7.",
  },
  {
    icon: Network,
    title: "Single network, single point of failure",
    problem: "An obstruction, weather event or carrier-level outage takes you offline. There is no failover.",
    fix: "Up to four mobile carriers bonded — automatic failover keeps traffic flowing if any one path drops.",
  },
  {
    icon: Server,
    title: "Asymmetric upload (~25Mbps)",
    problem: "Cloud backups, large file shares and multi-camera CCTV uploads choke at 25Mbps up.",
    fix: "Up to 300Mbps uplink by bonding satellite with multi-carrier cellular.",
  },
  {
    icon: Headphones,
    title: "DIY install, consumer support",
    problem: "A dish on a windowsill is not a business install. Self-service chat is not a support model.",
    fix: "UK engineer-installed roof mount, surveyed first, with direct WhatsApp and phone support.",
  },
];

const compare = [
  {
    label: "Install",
    diy: "Self-install kit on a windowsill",
    managed: "Engineer-installed roof mount, obstruction-checked",
    sdwan: "Engineer survey + multi-bearer roof install",
    sdwanTick: true,
  },
  {
    label: "Networks",
    diy: "One — Starlink only",
    managed: "Starlink + optional cellular backup",
    sdwan: "Up to 4 carriers bonded (+ Starlink on Bridge)",
    sdwanTick: true,
  },
  {
    label: "Resilience",
    diy: "Down when Starlink drops",
    managed: "Auto-fails to backup if cellular added",
    sdwan: "Live multi-path bonding, no single point of failure",
    sdwanTick: true,
  },
  {
    label: "IP addressing",
    diy: "CGNAT only — no static IP",
    managed: "Static IP available",
    sdwan: "Static IP included on bonded configurations",
    sdwanTick: true,
  },
  {
    label: "SLA & support",
    diy: "Best-effort, app chat only",
    managed: "Business SLA, UK engineer support",
    sdwan: "99.5% SLA with credits, UK engineers, WhatsApp",
    sdwanTick: true,
  },
  {
    label: "Latency",
    diy: "25–100ms+, variable in weather",
    managed: "25–60ms, monitored",
    sdwan: "20–30ms, traffic steered to best path",
    sdwanTick: true,
  },
  {
    label: "Best for",
    diy: "Home / single-user / pop-up",
    managed: "Rural businesses needing managed Starlink",
    sdwan: "Business-critical sites, multi-site, EPOS/VoIP/CCTV",
    sdwanTick: true,
  },
  {
    label: "Live in",
    diy: "Days — DIY",
    managed: "~10 working days",
    sdwan: "~10 working days",
    sdwanTick: true,
  },
];

const audience = [
  {
    icon: Wifi,
    title: "Rural businesses without fibre",
    body: "Farms, estates and rural offices where Openreach won't quote — or has quoted £20k+. A managed, bonded service that just works.",
    image: ruralImgAsset.url,
  },
  {
    icon: Shield,
    title: "Sites that can't afford downtime",
    body: "Card payments, EPOS, VoIP and CCTV that depend on the line staying up — and on a real SLA when it doesn't.",
    image: eposImgAsset.url,
  },
  {
    icon: Network,
    title: "Multi-site & hospitality",
    body: "Holiday parks, marinas, glamping, multi-depot operators. One platform, central management, predictable performance everywhere.",
    image: multisiteImgAsset.url,
  },
];

const stance = [
  { not: "A Starlink reseller flogging a dish", are: "A managed connectivity partner that uses Starlink where it fits" },
  { not: "DIY kit shipped to your door", are: "Engineer survey, roof install, commissioning, monitoring" },
  { not: "Consumer CGNAT broadband", are: "Static IPs, private Layer 2, VPN- and CCTV-ready" },
  { not: "Best-effort uptime", are: "99.5% SLA with service credits" },
  { not: "App-only support", are: "UK engineers on phone and WhatsApp" },
  { not: "One satellite, one bet", are: "Bonded multi-network — satellite + multi-carrier 4G/5G" },
];

const steps = [
  {
    n: "01",
    title: "Starlink, done properly",
    body: "Engineer-installed, monitored, with a business SLA. The right starting point when there is genuinely no other option at the site.",
  },
  {
    n: "02",
    title: "Add bonded cellular (SD-WAN)",
    body: "Bond multi-carrier 4G/5G alongside Starlink. Static IP, automatic failover, latency-sensitive traffic steered to the best path.",
  },
  {
    n: "03",
    title: "Fibre arrives (or doesn't)",
    body: "When fibre lands, your wireless stays on as permanent failover. If it never arrives, you already have business-grade connectivity.",
  },
];

const proof = [
  {
    name: "Carbee",
    stat: "0.1Mbps → 300+Mbps",
    quote: "From 0.1Mbps to 300+Mbps — transforming a rural car dealer's business operations.",
    href: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
    image: carbeeImg,
  },
  {
    name: "Royle Farm",
    stat: "ADSL → 1000Mbps",
    quote: "From single-digit ADSL to 1000Mbps. New tenants now connect in days, not months.",
    href: "/customers/royle-farm",
    image: royleFarmImg,
  },
  {
    name: "WB Power Services",
    stat: "Every depot unified",
    quote: "National generator service business unified across every depot — one platform, predictable performance.",
    href: "/customers/wb-power-services",
    image: wbPowerImg,
  },
];

const faqs = [
  {
    q: "Is Starlink good enough for a business?",
    a: "For a single home worker or a tiny site with no card payments, no VoIP and no CCTV — often yes. For anything business-critical, the lack of static IP, business SLA and failover usually makes it a poor fit on its own. Bonded with multi-carrier cellular and wrapped in a managed service, it becomes business-grade.",
  },
  {
    q: "Why does Starlink need a static IP for business?",
    a: "Starlink uses CGNAT by default, which means no public static IP and no inbound connections. That breaks site-to-site VPNs, remote CCTV access, port forwarding and most line-of-business inbound services. Integra includes a static IP on bonded configurations.",
  },
  {
    q: "What SLA does Starlink offer?",
    a: "Standard Starlink is best-effort with no SLA and no service credits. Starlink Business has limited commitments. Integra wraps connectivity in a 99.5% uptime SLA with service credits and UK engineer support.",
  },
  {
    q: "Will Starlink work for EPOS, VoIP and card payments?",
    a: "Sometimes — but latency spikes during rain or orbital changes cause transaction timeouts, hollow VoIP calls and jittery video. Bonded SD-WAN steers latency-sensitive traffic onto the best available path, so these workloads stay reliable.",
  },
  {
    q: "Can you install Starlink for us?",
    a: "Yes. UK engineers run a desktop survey, install a roof mount with proper sky clearance, commission the service and monitor it. See our Starlink installation page for detail.",
  },
  {
    q: "How does Integra SD-WAN compare to Starlink alone?",
    a: "SD-WAN bonds up to four mobile carriers into one fibre-class connection with a static IP, 99.5% SLA and engineer install. Add Starlink on top (Integra Bridge) where extra resilience or capacity is needed.",
  },
  {
    q: "What happens when fibre eventually arrives?",
    a: "Your wireless connection stays on as permanent failover. No rip-and-replace, no second project — one partner takes you from temporary to permanent connectivity.",
  },
  {
    q: "How long does install take?",
    a: "Live in ~10 working days from order. Desktop survey, then a UK engineer installs and commissions on site.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on bearer mix and site requirements — you'll have a full quote before signing. For most rural businesses it's a fraction of a £15–50k Openreach excess construction charge.",
  },
];

const CANONICAL = "https://www.integra-networks.co.uk/starlink-for-business";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Starlink for business: where it works, where it fails, and how to make it business-grade.",
  about: "Starlink for business",
  author: { "@type": "Organization", name: "Integra Networks" },
  publisher: {
    "@type": "Organization",
    name: "Integra Networks",
    logo: { "@type": "ImageObject", url: "https://www.integra-networks.co.uk/favicon.png" },
  },
  mainEntityOfPage: CANONICAL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.integra-networks.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.integra-networks.co.uk/resources" },
    { "@type": "ListItem", position: 3, name: "Starlink for Business", item: CANONICAL },
  ],
};

const scrollToChecker = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("availability-checker-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const StarlinkForBusiness = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-white">
      <SEO
        title="Starlink for Business: Limitations & the Managed Alternative | Integra"
        description="Starlink is fast — but is it business-grade? An honest look at Starlink's limits for business (SLA, static IP, failover) and how Integra makes it enterprise-ready. Check coverage in 60 seconds."
        url="/starlink-for-business"
      />
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Starlink dish on a UK business roof" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
              Pillar guide · Connectivity for business
            </p>
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Starlink for business: where it works, where it fails, and{" "}
              <span className="text-blue-400">how to make it business-grade.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Starlink is fast, available almost anywhere, and genuinely changed rural connectivity. But "fast" and
              "business-grade" aren't the same thing. An honest guide to Starlink's limits for business — and how we fix
              them with bonded 4G/5G, a 99.5% SLA, static IPs and UK engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
                Check coverage
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              {["SLA-backed", "UK engineers", "Bonded multi-network", "No fibre required", "99.5% uptime"].map((t, i, arr) => (
                <span key={t} className="flex items-center gap-x-6">
                  <span>{t}</span>
                  {i < arr.length - 1 && <span className="text-white/40 hidden sm:inline">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <CustomerLogoBar />

      {/* HONEST TAKE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The honest take</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              Starlink changed the game. It didn't win it.
            </h2>
            <p className="text-slate-600 mb-4">
              Before Starlink, a rural site with no fibre had bad options — and we still install it, recommend it and
              build around it where it's the right fit. The technology is genuinely impressive and it has rescued
              thousands of UK businesses from connectivity dead-ends.
            </p>
            <p className="text-slate-600">
              But Starlink alone is one network, with CGNAT, a consumer SLA and a DIY install. For a home worker that's
              fine. For a business that runs card payments, VoIP, CCTV or a multi-site operation, "fine" isn't fine. The
              honest answer is to use Starlink where it earns its place — and bond it with multi-carrier cellular,
              wrapped in a real SLA, where business depends on the line.
            </p>
          </div>
        </div>
      </section>

      {/* WHICH SIDE ARE YOU ON */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Where Starlink works vs where it fails</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Which side is your business on?
            </h2>
            <p className="text-slate-600">
              The same dish, in the same garden, is brilliant for one of these jobs and miserable for the other.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-xl border border-emerald-200 bg-white p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-6">Starlink alone is fine for</h3>
              <ul className="space-y-4">
                {worksFor.map((c) => (
                  <li key={c} className="flex gap-3 text-slate-700">
                    <Check className="text-emerald-500 shrink-0 mt-0.5 h-5 w-5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200 bg-white p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-6">Starlink alone struggles with</h3>
              <ul className="space-y-4">
                {strugglesWith.map((c) => (
                  <li key={c} className="flex gap-3 text-slate-700">
                    <X className="text-amber-500 shrink-0 mt-0.5 h-5 w-5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIX LIMITATIONS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The detail</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Six things a Starlink dish can't do for a business.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              And what Integra does about each of them.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {limitations.map((l) => (
              <div key={l.title} className="rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <l.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{l.title}</h3>
                    <p className="text-slate-600 mb-3"><span className="font-medium text-slate-900">The limit:</span> {l.problem}</p>
                    <p className="text-slate-600"><span className="font-medium text-blue-600">What we do:</span> {l.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Same satellite. Completely different service.</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Starlink DIY vs Starlink done properly vs bonded SD-WAN.
            </h2>
            <p className="text-slate-600">
              The same orbital network can be a hobby kit or a business-grade service — it depends entirely on what
              you wrap around it.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block max-w-5xl mx-auto rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <div className="grid grid-cols-[0.9fr_1fr_1fr_1fr] bg-slate-900 text-white">
              <div className="px-6 py-5" />
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Starlink — DIY</div>
                <div className="text-xs text-slate-300 mt-1">self-install, consumer</div>
              </div>
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Starlink — done properly</div>
                <div className="text-xs text-slate-300 mt-1">managed by Integra</div>
              </div>
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Integra SD-WAN</div>
                <div className="text-xs text-slate-300 mt-1">bonded 4G/5G (+ Starlink)</div>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {compare.map((row) => (
                <div key={row.label} className="grid grid-cols-[0.9fr_1fr_1fr_1fr] hover:bg-slate-50/50 transition-colors">
                  <div className="px-6 py-5 text-sm font-medium text-slate-900">{row.label}</div>
                  <div className="px-6 py-5 text-sm text-slate-500 border-l border-slate-100">
                    <span className="flex gap-2">
                      <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.diy}</span>
                    </span>
                  </div>
                  <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                    <span className="flex gap-2">
                      <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{row.managed}</span>
                    </span>
                  </div>
                  <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                    <span className="flex gap-2">
                      <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{row.sdwan}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden max-w-md mx-auto">
            <Accordion type="single" collapsible className="grid gap-3">
              {([
                { name: "Starlink — DIY", caption: "self-install, consumer", key: "diy" as const },
                { name: "Starlink — done properly", caption: "managed by Integra", key: "managed" as const },
                { name: "Integra SD-WAN", caption: "bonded 4G/5G (+ Starlink)", key: "sdwan" as const },
              ]).map((col, idx) => (
                <AccordionItem key={col.name} value={`col-${idx}`} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <AccordionTrigger className="bg-slate-900 text-white px-5 py-4 hover:no-underline [&>svg]:text-white">
                    <span className="text-left">
                      <span className="block font-semibold text-base">{col.name}</span>
                      <span className="block text-xs text-slate-300 mt-0.5 font-normal">{col.caption}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <ul className="divide-y divide-slate-100">
                      {compare.map((r) => {
                        const isDIY = col.key === "diy";
                        return (
                          <li key={r.label} className="px-5 py-4 text-sm">
                            <p className="font-medium text-slate-900 mb-1">{r.label}</p>
                            <div className={`flex gap-2 ${isDIY ? "text-slate-500" : "text-slate-700"}`}>
                              {isDIY ? (
                                <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                              ) : (
                                <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                              )}
                              <span>{r[col.key]}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-medium text-slate-900 mb-5">Same satellite. Completely different service.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
              Check coverage
            </Button>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Who it's for</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Built for the businesses Starlink alone lets down.
            </h2>
            <p className="text-slate-600">Three situations where bonded, managed connectivity earns its keep.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audience.map((a) => (
              <div key={a.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/95 text-white">
                    <a.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{a.title}</h3>
                  <p className="text-slate-600">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ARE / NOT */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-slate-50">
        <div className="absolute inset-0">
          <img src={maypoleBg} alt="Engineer-installed wireless antennas on a UK building" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">The difference</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Not a box-shifter. A managed connectivity partner.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-md p-8 transition-all duration-300 hover:border-red-400/30">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">What we're not</h3>
              <ul className="space-y-4">
                {stance.map((c) => (
                  <li key={c.not} className="flex gap-3 text-white/90">
                    <X className="text-red-400 shrink-0 mt-0.5 h-5 w-5" />
                    <span>{c.not}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-md p-8 transition-all duration-300 hover:border-emerald-400/30">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300 mb-6">What we are</h3>
              <ul className="space-y-4">
                {stance.map((c) => (
                  <li key={c.are} className="flex gap-3 text-white/90">
                    <Check className="text-emerald-400 shrink-0 mt-0.5 h-5 w-5" />
                    <span>{c.are}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UPGRADE PATH */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">No lock-in to the wrong rung</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Start where you are. Step up when you need to.
            </h2>
            <p className="text-slate-600">One platform, three steps. Move up the ladder as the business grows — no rip-and-replace.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-xl border border-slate-200 bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-blue-600 tracking-tight">{s.n}</span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600">{s.body}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-300 z-10" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-10 max-w-2xl mx-auto text-sm">
            Explore <Link to="/integra-sd-wan" className="text-blue-600 hover:underline">Integra SD-WAN</Link>,{" "}
            <Link to="/integra-bridge" className="text-blue-600 hover:underline">Integra Bridge</Link>,{" "}
            <Link to="/starlink-installation" className="text-blue-600 hover:underline">Starlink installation</Link> or{" "}
            <Link to="/leased-lines" className="text-blue-600 hover:underline">leased lines</Link>.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Case studies</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Real businesses. Real results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {proof.map((c) => (
              <Link key={c.name} to={c.href} className="group rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-2xl font-bold text-blue-600 mb-3">{c.stat}</p>
                  <p className="text-slate-700 mb-4">"{c.quote}"</p>
                  <p className="text-sm font-semibold text-slate-900 mt-auto">{c.name}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-2 group-hover:underline">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Starlink for business — what people ask
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-slate-900">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          </div>
        </div>
      </section>

      {/* AVAILABILITY CHECKER + CHAT */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
            <div id="availability-checker-form" className="rounded-xl bg-white border border-slate-200 overflow-hidden">
              <AvailabilityCheckerInline compact sourceTag="starlink-for-business" hideChatAlternative />
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Prefer to chat first?</p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Talk to a UK engineer.</h3>
              <p className="text-slate-600 mb-6">
                We'll ask three questions, tell you honestly whether Starlink fits, and quote what you actually need —
                no postcode lottery, no upsell.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white w-full">
                  <a href="tel:+442033887111">Call 0203 388 7111</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-slate-300 text-slate-900 hover:bg-slate-50">
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-start gap-3 text-sm text-slate-600">
                <Satellite className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
                <span>Surveyed, engineer-installed, SLA-backed. Live in ~10 working days.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Starlink speed, business-grade. Let's see what your site can get.
          </h2>
          <p className="mt-4 text-slate-300">Engineer-installed. SLA-backed. Live in ~10 working days.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400 text-white">
              <a href="#availability-checker-form">Check availability</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="tel:+442033887111">Call 0203 388 7111</a>
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-slate-900 h-12 md:hidden" aria-hidden="true" />
    </PageLayout>
  );
};

export default StarlinkForBusiness;
