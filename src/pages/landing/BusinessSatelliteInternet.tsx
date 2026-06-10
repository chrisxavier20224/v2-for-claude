import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Radio, Antenna, Network as NetIcon, Satellite, Shield, Wrench } from "lucide-react";
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
import bridgeCardImgAsset from "@/assets/landing/building-connectivity.jpg.asset.json";
import sdwanCardImgAsset from "@/assets/landing/celltower.jpg.asset.json";
import royleFarmImg from "@/assets/case-studies/royle-farm-hero.webp";
import ukHarvestImg from "@/assets/case-studies/ukharvest-hero.webp";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";

const painPoints = [
  {
    icon: Wrench,
    h: "Starlink works… until it doesn't.",
    p: "A single network means a single point of failure. Heavy weather, obstructions, satellite handoffs or a regional outage and your business is offline. Bonding Starlink with 4G/5G keeps traffic flowing automatically — your team won't even notice the switch.",
  },
  {
    icon: Satellite,
    h: "Uploads cap around 25Mbps.",
    p: "Fine for browsing, painful for CCTV, cloud backup, VoIP and large file transfers. Bonded uplinks across multiple bearers scale upload speed with every carrier added — and bring the resilience business workloads actually need.",
  },
  {
    icon: Shield,
    h: "No static IP. No SLA. No-one to call.",
    p: "Standard Starlink is CGNAT-only, best-effort, app-supported. Business-grade Integra adds static IPs, a 99.5% uptime SLA with credits, and UK engineers reachable by phone and WhatsApp when something matters.",
  },
];

const proof = [
  {
    name: "Carbee",
    stat: "0.1Mbps → 300Mbps+",
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
    name: "UKHarvest",
    stat: "2005 speeds → 325Mbps+",
    quote: "From 2005-era speeds to 325Mbps+, live in 10 working days at their semi-rural HQ.",
    href: "/customers/fast-track-connectivity-ukharvests-digital-transformation",
    image: ukHarvestImg,
  },
];

const faqs = [
  {
    q: "Is this just Starlink resold?",
    a: "No. We bond Starlink with multiple 4G/5G carriers behind a managed SD-WAN router, install the hardware properly with a UK engineer, and wrap it in a 99.5% uptime SLA with service credits. You get the satellite coverage of Starlink with the resilience, uploads, static IPs and support of a business-grade connection.",
  },
  {
    q: "How fast are the uploads really?",
    a: "Starlink alone caps around 25Mbps up — fine for browsing, limiting for CCTV, cloud backup, VoIP and file transfer. Bonded with cellular uplinks the upload scales with every carrier added, typically 100–300Mbps up depending on local 4G/5G coverage and the bearer mix at your site.",
  },
  {
    q: "What happens when Starlink has an outage or degrades in bad weather?",
    a: "Traffic fails over to the bonded 4G/5G bearers automatically, in milliseconds. Card payments stay online, VoIP calls stay clear, CCTV keeps recording. When Starlink recovers it rejoins the bond and shares the load again — no manual switchover, no router reboot.",
  },
  {
    q: "Can we get static IPs and run CCTV and VoIP?",
    a: "Yes. Static IPs are available on bonded configurations, with no CGNAT. The connection is engineered for business traffic — VoIP, EPOS, CCTV, VPNs and cloud apps all work the way they should.",
  },
  {
    q: "What does installation involve and how fast?",
    a: "Live in 10 working days from order. A free desktop survey first confirms expected speeds and the right bearer mix at your exact location. A UK engineer then attends site to mount the Starlink dish and cellular antennas, commission the bonded connection and test everything before they leave — typically a single 4–6 hour visit.",
  },
  {
    q: "Do you cap or throttle data?",
    a: "No caps, no throttling on the cellular side. We run enterprise data plans sized for business workloads — not consumer dongles with hidden fair-use limits. Starlink's standard business plans apply on the satellite bearer.",
  },
  {
    q: "What's covered by the 99.5% SLA?",
    a: "Uptime is backed by service credits. Automatic failover between satellite and multiple mobile carriers keeps traffic flowing, and UK engineers monitor every connection 24/7 with phone and WhatsApp support.",
  },
  {
    q: "We've already got a Starlink dish — can you use it?",
    a: "Often, yes. If your existing kit is on a Business or Priority plan we can integrate it into a managed bond with cellular and add the SLA, static IP and support layer on top. If it's a Residential dish we'll usually recommend swapping the plan so you get the throughput and priority a business needs.",
  },
];

const starlinkCompare: {
  label: string;
  alone: string;
  sdwan: string;
  sdwanTick?: boolean;
  bridge: string;
}[] = [
  {
    label: "Install & hardware",
    alone: "Self-setup kit on a windowsill",
    sdwan: "Engineer-installed, carrier-specific antennas per site",
    sdwanTick: true,
    bridge: "Engineer-installed Starlink + cellular antennas, surveyed",
  },
  {
    label: "Upload speed",
    alone: "~25Mbps up",
    sdwan: "Bonded cellular uplinks — scales with every carrier added",
    sdwanTick: true,
    bridge: "Up to 300Mbps up — satellite + cellular bonded",
  },
  {
    label: "Resilience",
    alone: "One network. Weather, obstructions or outages take you offline",
    sdwan: "Up to four mobile carriers, automatic failover",
    sdwanTick: true,
    bridge: "Satellite + multiple 4G/5G carriers — no single point of failure",
  },
  {
    label: "Support & SLA",
    alone: "Community forum, best-effort",
    sdwan: "UK engineers, 99.5% uptime SLA with credits",
    sdwanTick: true,
    bridge: "UK engineers, 99.5% uptime SLA with credits",
  },
  {
    label: "Static IPs",
    alone: "CGNAT — no static IP, breaks VPNs & CCTV",
    sdwan: "Static IP included on bonded configurations",
    sdwanTick: true,
    bridge: "Static IPs over private Layer 2, VPN & CCTV-ready",
  },
  {
    label: "CCTV & VoIP-ready",
    alone: "Limited — CGNAT and variable uploads break business apps",
    sdwan: "Yes — engineered for VoIP, EPOS, CCTV and cloud apps",
    sdwanTick: true,
    bridge: "Yes — bonded uplinks keep VoIP and CCTV stable",
  },
];

const stats = [
  { v: "10 working days", l: "to live" },
  { v: "99.5%", l: "uptime SLA" },
  { v: "Multi-network", l: "satellite + 4G/5G" },
];

const CANONICAL = "https://www.integra-networks.co.uk/lp/business-satellite-internet";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const scrollToChecker = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("availability-checker-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const BusinessSatelliteInternet = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <Helmet>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={CANONICAL} />
      </Helmet>
      <SEO
        title="Business Satellite Internet UK — Starlink, Done Properly | Integra"
        description="Business satellite internet in the UK. Starlink bonded with 4G/5G for resilience, faster uploads, static IPs and a 99.5% uptime SLA. Installed by UK engineers in 10 working days."
        url="/lp/business-satellite-internet"
      />
      <SchemaMarkup data={[faqSchema]} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UK business premises with bonded Starlink satellite internet"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Satellite internet for UK business — engineered, installed,{" "}
              <span className="text-blue-400">SLA-backed.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Starlink, done properly: bonded with 4G/5G for multi-network resilience, faster uploads, static IPs and a
              99.5% uptime SLA. Installed by UK engineers in 10 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
                Check Availability
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white">
            {["SLA-backed", "UK engineers", "Trusted by businesses across the UK", "99.5% uptime"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-x-6">
                  <span>{item}</span>
                  {i < arr.length - 1 && <span className="text-white/60 hidden sm:inline">•</span>}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.v} className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-white tracking-tight">{s.v}</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-blue-300">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER LOGO BAR */}
      <CustomerLogoBar />

      {/* STARLINK / DONE PROPERLY COMPARISON */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Starlink, done properly</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Starlink on its own vs <span className="text-blue-600">satellite internet, done properly.</span>
            </h2>
            <p className="text-slate-600">
              Starlink is brilliant — that's why we build with it. But on its own it's a single network with consumer-grade limits. We bond it with multi-carrier cellular and wrap it in business-grade service.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block max-w-5xl mx-auto rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <div className="grid grid-cols-[0.9fr_1fr_1fr_1fr] bg-slate-900 text-white">
              <div className="px-6 py-5" />
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Starlink on its own</div>
                <div className="text-xs text-slate-300 mt-1">single network, DIY</div>
              </div>
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Integra Bridge</div>
                <div className="text-xs text-slate-300 mt-1">bonded Starlink + 4G/5G</div>
              </div>
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Integra SD-WAN</div>
                <div className="text-xs text-slate-300 mt-1">bonded multi-network cellular</div>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {starlinkCompare.map((row) => (
                <div key={row.label} className="grid grid-cols-[0.9fr_1fr_1fr_1fr] hover:bg-slate-50/50 transition-colors">
                  <div className="px-6 py-5 text-sm font-medium text-slate-900">{row.label}</div>
                  <div className="px-6 py-5 text-sm text-slate-500 border-l border-slate-100">
                    <span className="flex gap-2">
                      <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.alone}</span>
                    </span>
                  </div>
                  <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                    <span className="flex gap-2">
                      <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{row.bridge}</span>
                    </span>
                  </div>
                  <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                    <span className="flex gap-2">
                      {row.sdwanTick ? (
                        <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 shrink-0" />
                      )}
                      <span>{row.sdwan}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-4 max-w-md mx-auto">
            {([
              { name: "Starlink on its own", caption: "single network, DIY", key: "alone" as const },
              { name: "Integra Bridge", caption: "bonded Starlink + 4G/5G", key: "bridge" as const },
              { name: "Integra SD-WAN", caption: "bonded multi-network cellular", key: "sdwan" as const },
            ]).map((col) => (
              <div key={col.name} className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
                <div className="bg-slate-900 text-white px-5 py-4">
                  <p className="font-semibold text-base">{col.name}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{col.caption}</p>
                </div>
                <ul className="divide-y divide-slate-100">
                  {starlinkCompare.map((r) => {
                    let icon: JSX.Element | null = null;
                    let textClass = "text-slate-700";
                    if (col.key === "alone") {
                      icon = <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />;
                      textClass = "text-slate-500";
                    } else if (col.key === "sdwan") {
                      icon = r.sdwanTick ? <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /> : null;
                    } else {
                      icon = <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />;
                    }
                    return (
                      <li key={r.label} className="px-5 py-4 text-sm">
                        <p className="font-medium text-slate-900 mb-1">{r.label}</p>
                        <div className={`flex gap-2 ${textClass}`}>
                          {icon ?? <span className="w-4 shrink-0" />}
                          <span>{r[col.key]}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* WHICH SOUNDS LIKE YOU? */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Which sounds like you?</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Two situations. Two answers. <span className="text-blue-400">One platform.</span>
            </h2>
            <p className="text-slate-300">
              Both engineer-installed, bonded, SLA-backed and live in 10 working days — but they solve different problems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={bridgeCardImgAsset.url}
                  alt="Remote site beyond fibre reach with bonded satellite connectivity"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 mb-1">Integra</p>
                  <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Bridge</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  We're somewhere fibre will never reach.
                </h3>
                <p className="text-slate-300 mb-4">
                  Remote site, quoted £15k+ excess construction, or no cabinet for miles. Integra Bridge bonds Starlink with cellular for a permanent business-grade connection — no civils, no wayleaves, no waiting.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Satellite + cellular</p>
                  <Link to="/integra-bridge" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Explore Integra Bridge <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={sdwanCardImgAsset.url}
                  alt="Business-grade satellite and cellular bonded connectivity"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 mb-1">Integra</p>
                  <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">SD-WAN</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  We looked at Starlink but need it business-grade.
                </h3>
                <p className="text-slate-300 mb-4">
                  You need uploads, static IPs, failover and someone to call when it matters. That's exactly the gap Integra closes — bonded multi-network cellular (with Starlink optional) under one SLA.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Bonded 4G/5G</p>
                  <Link to="/integra-sd-wan" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Explore Integra SD-WAN <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SWITCH — pain points */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why switch</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Starlink alone isn't a business connection.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p) => (
              <div
                key={p.h}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{p.h}</h3>
                <p className="text-slate-600 leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — bonding visual */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Satellite + cellular in. One bonded business connection out.
            </h2>
            <p className="text-slate-300">
              We bond Starlink with two or more 4G/5G carriers into a single business-grade connection. If any bearer drops or degrades, the others carry the load in milliseconds.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] items-center">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Radio, label: "Starlink" },
                  { icon: Antenna, label: "EE 4G/5G" },
                  { icon: Antenna, label: "Vodafone 4G/5G" },
                  { icon: Antenna, label: "O2 4G/5G" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                    <b.icon className="h-5 w-5 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-100">{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="hidden md:flex flex-col items-center text-blue-400">
                <ArrowRight className="h-8 w-8" />
                <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Bonded</span>
              </div>
              <div className="md:hidden flex justify-center text-blue-400">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>
              <div className="rounded-xl bg-blue-600 text-white p-6 text-center shadow-lg shadow-blue-900/40">
                <NetIcon className="h-10 w-10 mx-auto text-white mb-3" />
                <p className="text-2xl font-semibold tracking-tight">One connection</p>
                <p className="text-sm text-blue-100 mt-2">Up to 500Mbps · Static IP · 99.5% SLA · Automatic failover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / CASE STUDIES */}
      <section className="relative py-16 md:py-24 bg-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case studies</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Real businesses. Real results.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {proof.map((c) => (
              <Link
                key={c.name}
                to={c.href}
                className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/5] flex flex-col justify-end shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/10" />
                <div className="relative p-6 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 mb-1">Customer story</p>
                  <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">{c.name}</p>
                  <p className="text-lg font-bold text-blue-300 mb-2">{c.stat}</p>
                  <p className="text-white/80 text-sm mb-3">"{c.quote}"</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-blue-300">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Business satellite internet — what people ask
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-white/20">
                  <AccordionTrigger className="text-left text-white hover:text-white [&>svg]:text-white">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-blue-50/90">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* AVAILABILITY CHECKER */}
      <div id="availability-checker-form">
        <AvailabilityCheckerInline compact sourceTag="lp-business-satellite-internet" hideChatAlternative />
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Satellite internet your business can actually rely on.
          </h2>
          <p className="mt-4 text-slate-300">
            Live in 10 working days. Multi-network. SLA-backed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400 text-white">
              <a href="#availability-checker-form">Check Availability</a>
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

export default BusinessSatelliteInternet;