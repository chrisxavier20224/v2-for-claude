import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Radio, Antenna, Network as NetIcon } from "lucide-react";
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
import heroImgAsset from "@/assets/landing/wireless-rural-industrial.jpg.asset.json";
import bridgeCardImgAsset from "@/assets/landing/building-connectivity.jpg.asset.json";
import sdwanCardImgAsset from "@/assets/landing/celltower.jpg.asset.json";
import royleFarmImg from "@/assets/case-studies/royle-farm-hero.webp";
import wbPowerImg from "@/assets/case-studies/wb-power-hero.avif";
import ukHarvestImg from "@/assets/case-studies/ukharvest-hero.webp";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";

const painPoints = [
  {
    h: "Stacking ADSL lines that still don't work?",
    p: "Two or three copper lines bonded together still give you 10Mbps on a good day. We replace them all with a single connection delivering up to 500Mbps. And with the UK PSTN switch-off in January 2027, your analogue lines are going away regardless — we handle the migration as part of the install.",
  },
  {
    h: "Quoted £20k+ for fibre?",
    p: "Openreach excess construction charges for rural properties are routinely £15–50k. Our bonded 4G/5G SD-WAN delivers similar speeds for a fraction of the cost — no civils, no wayleaves, no waiting.",
  },
  {
    h: "Waiting months for a leased line?",
    p: "Ordered fibre or a leased line and staring down a 10-week install window? Integra Bridge gets your site online in days — and stays on as permanent failover once your line lands.",
  },
];

const proof = [
  {
    name: "Royle Farm",
    stat: "ADSL → 1000Mbps",
    quote: "From single-digit ADSL to 1000Mbps. New tenants now connect in days, not months.",
    href: "/customers/royle-farm",
    image: royleFarmImg,
  },
  {
    name: "WB Power Services",
    stat: "Dodged £50k fibre bill",
    quote: "Bonded 4G/5G SD-WAN delivering 350Mbps+ from the depot roof — every site unified on one platform.",
    href: "/customers/wb-power-services",
    image: wbPowerImg,
  },
  {
    name: "UKHarvest",
    stat: "2005 speeds → 325Mbps+",
    quote: "From 2005-era speeds to 325Mbps+, live in 10 working days at their semi-rural HQ.",
    href: "/customers/fast-track-connectivity-ukharvests-digital-transformation",
    image: ukHarvestImg,
  },
  {
    name: "Carbee",
    stat: "0.1Mbps → 300Mbps",
    quote: "From 0.1Mbps to 300+Mbps — transforming a rural car dealer's business operations.",
    href: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
    image: carbeeImg,
  },
];

const faqs = [
  {
    q: "How fast can you really get us online?",
    a: "Live in 10 working days from order. We run a free desktop survey first to confirm the bearer mix and expected speeds at your exact location, then a UK engineer attends site to install the roof-mounted antennas, commission the bonded connection and test everything before they leave — typically a single 4–6 hour visit.",
  },
  {
    q: "We've been quoted £20k+ for fibre — how is this different?",
    a: "No civil works, no wayleaves, no Openreach lead times. We mount carrier-specific antennas on your building and bond multiple 4G/5G networks (and optionally Starlink) into one business-grade connection. Pricing is typically a fraction of the £15–50k excess construction quotes you'll see for rural fibre.",
  },
  {
    q: "What happens when fibre eventually arrives?",
    a: "Your wireless connection stays on as permanent failover. No rip-and-replace, no second project, no wasted spend — you keep the resilience and one partner takes you from temporary to permanent connectivity.",
  },
  {
    q: "Is this fast enough for card machines, VoIP and cloud apps?",
    a: "Yes — and multi-network failover keeps them up. Static IPs are available, there's no CGNAT, and the connection is engineered for business traffic. VoIP calls stay clear, card payments stay online, and cloud apps and CCTV run as standard.",
  },
  {
    q: "What does the PSTN switch-off (January 2027) mean for us?",
    a: "The UK analogue phone network is being retired in January 2027 — every business on copper lines will need to migrate. We handle the move to VoIP over your new bonded connection as part of the install, so your phones, alarms and card terminals are future-proofed in one go.",
  },
  {
    q: "Do you cap or throttle data?",
    a: "No caps, no throttling. We run enterprise data plans sized for business workloads — not consumer dongles with hidden fair-use limits.",
  },
  {
    q: "What's covered by the 99.5% SLA?",
    a: "Uptime is backed by service credits. Automatic failover between carriers (and satellite, where deployed) keeps traffic flowing, and UK engineers monitor every connection 24/7 with phone and WhatsApp support.",
  },
  {
    q: "Do we need line of sight or planning permission?",
    a: "No clear line of sight to a mast is required — bonded cellular works on standard mobile signal, and Starlink (where added) needs only a clear view of sky. Antennas are roof- or mast-mounted under permitted development for most rural business premises; the desktop survey confirms before install.",
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
    label: "Upload speed",
    alone: "~25Mbps up",
    sdwan: "Bonded cellular uplinks — scales with every carrier added",
    sdwanTick: true,
    bridge: "Up to 300Mbps up — satellite + cellular bonded",
  },
  {
    label: "Resilience",
    alone: "One network. Obstruction, weather or an outage takes you offline",
    sdwan: "Up to four mobile carriers, automatic failover",
    sdwanTick: true,
    bridge: "Satellite + multiple 4G/5G carriers — no single point of failure",
  },
  {
    label: "Support & SLA",
    alone: "App-only support, best-effort",
    sdwan: "UK engineers, 99.5% uptime SLA with credits",
    sdwanTick: true,
    bridge: "UK engineers, 99.5% uptime SLA with credits",
  },
  {
    label: "IP addressing",
    alone: "CGNAT — no static IP, breaks VPNs & CCTV",
    sdwan: "Static IP included on bonded configurations",
    sdwanTick: true,
    bridge: "Static IPs over private Layer 2, VPN & CCTV-ready",
  },
  {
    label: "Works with poor mobile signal?",
    alone: "Yes — needs clear sky only",
    sdwan: "Needs usable 4G/5G coverage — confirmed by survey",
    sdwanTick: false,
    bridge: "Yes — satellite carries the load where cellular is weak",
  },
  {
    label: "Installation",
    alone: "DIY kit on a windowsill",
    sdwan: "Engineer-installed, carrier-specific antennas per site",
    sdwanTick: true,
    bridge: "Surveyed, engineer-installed roof mount",
  },
];

const stats = [
  { v: "500Mbps", l: "no fibre required" },
  { v: "10 working days", l: "to live" },
  { v: "99.5%", l: "uptime SLA" },
];

const CANONICAL = "https://www.integra-networks.co.uk/lp/rural-business-broadband-uk";

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

const RuralBusinessBroadbandUK = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <Helmet>
        <meta name="robots" content="index,follow" />
      </Helmet>
      <SEO
        title="Rural Business Broadband UK — Live in 10 Working Days | Integra"
        description="Rural business broadband that performs. Up to 500Mbps via bonded 4G/5G + Starlink, no fibre required, live in 10 working days. 99.5% uptime SLA, UK engineers."
        url="/lp/rural-business-broadband-uk"
      />
      <SchemaMarkup data={[faqSchema]} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImgAsset.url}
            alt="UK rural business with reliable bonded wireless broadband"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Rural business broadband that actually performs — up to{" "}
              <span className="text-blue-400">500Mbps</span>, live in 10 working days.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Bonded 4G/5G and Starlink, engineered for business. 99.5% uptime SLA, UK engineers, no fibre
              required — wherever you are on the map.
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
            {["SLA-backed", "UK engineers", "Trusted by rural businesses across the UK", "99.5% uptime"].map(
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

      {/* STAT BAND — merged visually with trust strip above */}
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
                  alt="Rural premises with bridge connectivity while fibre is provisioned"
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
                  Fibre's coming… eventually.
                </h3>
                <p className="text-slate-300 mb-4">
                  You've ordered a leased line or fibre, but the install is 8–14 weeks away — wayleaves, surveys, Openreach. Integra Bridge gets you live in 10 working days and stays as failover once fibre lands.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Enterprise · Cellular + Starlink</p>
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
                  alt="Cellular mast — bonded 4G/5G rural wireless broadband"
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
                  Fibre's not coming at all.
                </h3>
                <p className="text-slate-300 mb-4">
                  Quoted £15–50k excess construction, or stuck on ADSL/copper. Integra SD-WAN bonds multiple 4G/5G networks into one fast, resilient business connection — up to 500Mbps with static IP and full UK engineer support.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">The workhorse · Bonded 4G/5G</p>
                  <Link to="/integra-sd-wan" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Explore Integra SD-WAN <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why switch</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Why rural businesses switch to Integra.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((p) => (
              <div key={p.h} className="rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.h}</h3>
                <p className="text-slate-600">{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — bonding visual */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Multiple networks in. One fast, resilient connection out.
            </h2>
            <p className="text-slate-600">
              We bond up to four mobile carriers — and optionally Starlink — into a single business-grade connection. If one bearer drops, the others carry the load in milliseconds.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] items-center">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Antenna, label: "EE 4G/5G" },
                  { icon: Antenna, label: "Vodafone 4G/5G" },
                  { icon: Antenna, label: "O2 4G/5G" },
                  { icon: Radio, label: "Starlink (optional)" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                    <b.icon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium text-slate-800">{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="hidden md:flex flex-col items-center text-blue-600">
                <ArrowRight className="h-8 w-8" />
                <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Bonded</span>
              </div>
              <div className="md:hidden flex justify-center text-blue-600">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>
              <div className="rounded-xl bg-slate-900 text-white p-6 text-center">
                <NetIcon className="h-10 w-10 mx-auto text-blue-400 mb-3" />
                <p className="text-2xl font-semibold tracking-tight">One connection</p>
                <p className="text-sm text-slate-300 mt-2">Up to 500Mbps · Static IP · 99.5% SLA · Automatic failover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STARLINK / DONE PROPERLY COMPARISON */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Done properly</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Thinking of just buying Starlink? <span className="text-blue-600">Here's the difference.</span>
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
                <div className="font-semibold text-base">Integra SD-WAN</div>
                <div className="text-xs text-slate-300 mt-1">bonded 4G/5G cellular</div>
              </div>
              <div className="px-6 py-5 border-l border-white/10">
                <div className="font-semibold text-base">Integra Bridge</div>
                <div className="text-xs text-slate-300 mt-1">cellular + satellite</div>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {starlinkCompare.map((row) => {
                const aloneIsAdvantage = row.label === "Works with poor mobile signal?";
                return (
                  <div
                    key={row.label}
                    className="grid grid-cols-[0.9fr_1fr_1fr_1fr] hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="px-6 py-5 text-sm font-medium text-slate-900">{row.label}</div>
                    <div className="px-6 py-5 text-sm text-slate-500 border-l border-slate-100">
                      <span className="flex gap-2">
                        {aloneIsAdvantage ? (
                          <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.alone}</span>
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
                    <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                      <span className="flex gap-2">
                        <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{row.bridge}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-4 max-w-md mx-auto">
            {([
              { name: "Starlink on its own", caption: "single network, DIY", key: "alone" as const },
              { name: "Integra SD-WAN", caption: "bonded 4G/5G cellular", key: "sdwan" as const },
              { name: "Integra Bridge", caption: "cellular + satellite", key: "bridge" as const },
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
                      if (r.label === "Works with poor mobile signal?") {
                        icon = <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />;
                      } else {
                        icon = <X className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />;
                      }
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

      {/* PROOF / CASE STUDIES */}
      <section className="relative py-16 md:py-24 bg-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case studies</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Real rural businesses. Real results.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              Rural business broadband — what people ask
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
        <AvailabilityCheckerInline compact sourceTag="lp-rural-business-broadband-uk" hideChatAlternative />
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Stop losing money to bad internet.
          </h2>
          <p className="mt-4 text-slate-300">
            Up to 500Mbps. Live in 10 working days. SLA-backed. No fibre required.
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

export default RuralBusinessBroadbandUK;