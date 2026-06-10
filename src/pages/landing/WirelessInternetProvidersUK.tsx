import { Link } from "react-router-dom";
import { Check, X, Wifi, Network, Shield, ArrowRight, Satellite, Radio, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import heroImgAsset from "@/assets/landing/enterprise-install-rehlko.jpg.asset.json";
import maypoleBgAsset from "@/assets/landing/enterprise-install-maypole-school.jpg.asset.json";
import ruralImgAsset from "@/assets/landing/wireless-rural-industrial.jpg.asset.json";
import multisiteImgAsset from "@/assets/landing/wireless-multisite-container.jpg.asset.json";
import eposImgAsset from "@/assets/landing/wireless-epos-card.jpg.asset.json";
import royleFarmImg from "@/assets/case-studies/royle-farm-hero.webp";
import wbPowerImg from "@/assets/case-studies/wb-power-hero.avif";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";
const heroImg = heroImgAsset.url;
const maypoleBg = maypoleBgAsset.url;

const stats = [
  { stat: "10 working days", desc: "from order to live" },
  { stat: "Up to 500Mbps", desc: "via bonded 4G/5G + Starlink" },
  { stat: "99.5% SLA", desc: "UK engineer support" },
];

const bondedInputs = [
  { icon: Satellite, label: "Starlink Satellite", detail: "Low-latency LEO satellite" },
  { icon: Radio, label: "5G/4G Carriers (×2)", detail: "Dual-SIM cellular bonding" },
  { icon: Server, label: "Bonded Output", detail: "One resilient business connection" },
];

const audience = [
  {
    icon: Wifi,
    title: "Rural businesses without fibre",
    body: "Farms, offices, light industrial sites where Openreach has quoted £20k+ for fibre — or won't quote at all. Our wireless network delivers fibre-equivalent speeds in days.",
    image: ruralImgAsset.url,
  },
  {
    icon: Network,
    title: "Multi-site operators",
    body: "Construction sites, pop-up retail, business parks, distribution hubs. One platform, central management, predictable performance across every location.",
    image: multisiteImgAsset.url,
  },
  {
    icon: Shield,
    title: "Businesses that can't afford downtime",
    body: "Card machines, VoIP, cloud apps, CCTV, EPOS. Dual-network failover means traffic keeps flowing even if one carrier drops.",
    image: eposImgAsset.url,
  },
];

const compare: { not: string; are: string }[] = [
  { not: "Consumer fixed wireless", are: "Engineer-installed business connection" },
  { not: "4G dongles & off-the-shelf routers", are: "Roof-mounted antennas, dual-SIM bonding" },
  { not: "Best-effort consumer SLA", are: "99.5% uptime SLA with credits" },
  { not: "Call centre support", are: "Direct UK engineers, WhatsApp support" },
  { not: "Bandwidth caps & throttling", are: "No caps, no throttling" },
  { not: "Generic IP, NAT-shared", are: "Static IPs available, CCTV-ready" },
];

const tiers = [
  {
    name: "Integra Starter",
    price: "£85/mo + VAT",
    blurb: "For single-site small businesses",
    features: ["Up to 100Mbps", "Standard SLA", "Email support"],
    cta: { label: "Get a quote", href: "/check" },
    highlight: false,
  },
  {
    name: "Integra Pro",
    price: "£135/mo + VAT",
    blurb: "For most distributed businesses",
    features: ["Up to 350Mbps bonded", "99.5% SLA + 14-Day Money Back", "Phone + WhatsApp support"],
    cta: { label: "Get a quote", href: "/check" },
    highlight: true,
  },
  {
    name: "Integra Enterprise",
    price: "Custom pricing",
    blurb: "For multi-site & high-uptime needs",
    features: ["Up to 500Mbps bonded", "99.9% SLA with credits", "Dedicated account manager"],
    cta: { label: "Talk to sales", href: "/contact" },
    highlight: false,
  },
];

const painPoints = [
  {
    h: "Waiting 8 weeks for BT?",
    p: "Standard Openreach business install is 8-12 weeks. Our wireless network is live in 10 working days — and stays live as failover once your fibre arrives.",
  },
  {
    h: "Quoted £20k+ for fibre?",
    p: "Excess construction charges for rural / hard-to-reach business properties are routinely £15-50k. Our cellular SD-WAN delivers similar speeds at a fraction of the cost.",
  },
  {
    h: "Tried consumer 4G and got burned?",
    p: "Consumer 4G routers throttle, drop, and have no SLA. Our bonded dual-carrier setup runs business-grade hardware on enterprise data plans.",
  },
  {
    h: "Multi-site and tired of patching together ISPs?",
    p: "One Integra platform across all your sites. Central management, predictable performance, one invoice, one team to call.",
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
    stat: "Every depot unified",
    quote: "National generator service business unified across every depot — one platform, predictable performance.",
    href: "/customers/wb-power-services",
    image: wbPowerImg,
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
    q: "How is this different from a consumer 4G router?",
    a: "Consumer 4G uses one SIM, one carrier, and shared bandwidth. Integra's setup uses two carriers in parallel (bonded), runs on business data plans (no throttling), uses engineer-installed roof antennas for stable signal, and comes with an SLA. You also get static IPs and 24/7 monitoring.",
  },
  {
    q: "How fast can you actually deliver?",
    a: "Standard install is 10 working days from order. For urgent cases (construction sites, emergency replacement), we can deploy Integra Bridge in 48-72 hours.",
  },
  {
    q: "What if 4G/5G coverage is bad at my site?",
    a: "We survey first. If signal is poor, we use Starlink + 4G/5G hybrid bonding instead. Either way, we don't ship a service we can't deliver.",
  },
  {
    q: "What's the SLA?",
    a: "99.5% uptime guaranteed, with service credits for breach. Enterprise tier moves to 99.9%. Standard response time on faults is under 4 hours during UK business hours, with 24/7 emergency monitoring.",
  },
  {
    q: "Will it work with our existing phones and EPOS?",
    a: "Yes. We provide static IPs for CCTV/EPOS, configure VoIP-friendly QoS, and handle the PSTN migration (the analogue line switch-off is January 2027 regardless).",
  },
  {
    q: "Can I keep my existing fibre line as backup?",
    a: "Absolutely. We design hybrid setups where wireless is primary and fibre is failover (or vice versa). Multi-bearer redundancy is included on Pro tier and above.",
  },
  {
    q: "What about contracts?",
    a: "12-month terms on Starter and Pro. Enterprise is negotiable down to 1-month rolling for project sites. No mystery break fees.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill the availability check at the top of this page or call 0203 388 7111. We respond same-day Mon-Fri with engineering-validated pricing — not estimates.",
  },
];

const CANONICAL = "https://www.integra-networks.co.uk/lp/wireless-internet-providers-uk";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Wireless Broadband",
  name: "Integra Wireless Internet for UK Business",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://www.integra-networks.co.uk",
  },
  offers: tiers.map((t) => ({
    "@type": "Offer",
    name: t.name,
    price: t.price,
    priceCurrency: "GBP",
    description: t.blurb,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.integra-networks.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.integra-networks.co.uk/" },
    { "@type": "ListItem", position: 3, name: "Wireless Internet Providers UK", item: CANONICAL },
  ],
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

const scrollToChecker = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("availability-checker")?.scrollIntoView({ behavior: "smooth" });
};

const WirelessInternetProvidersUK = () => {
  return (
    <PageLayout hideCTA>
      <SEO
        title="Wireless Internet Providers UK | Business Broadband | Integra"
        description="Wireless internet providers built for UK businesses. Up to 500Mbps via bonded 4G/5G, no fibre required, live in 10 working days. SLA-backed. Get a quote."
        url="/lp/wireless-internet-providers-uk"
      />
      <SchemaMarkup data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UK business with reliable wireless internet connectivity"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Wireless internet for UK business — live in{" "}
              <span className="text-blue-400">10 working days</span>, where fibre can't reach.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Bonded 4G/5G + Starlink, engineered for business. Up to 500Mbps, 99.5% SLA, UK engineers.
              No fibre required. No 10-week wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
                Check Coverage
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
            {["SLA-backed", "UK-based engineers", "Trusted by rural & multi-site businesses", "99.5% uptime guarantee"].map(
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

      {/* CUSTOMER LOGO BAR */}
      <CustomerLogoBar />

      {/* COVERAGE BAND (slim) */}
      <section id="availability-checker" className="bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-center sm:text-left">
            Coverage check takes 60 seconds — no postcode lottery.
          </p>
          <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
            <a href="#availability-checker-form">Check Coverage <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* STATS — flows from coverage band, no orphan whitespace */}
      <section className="bg-slate-900 pt-10 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.stat} className="rounded-xl border border-white/10 bg-slate-800/40 p-8 text-center">
                <p className="text-3xl md:text-4xl font-semibold text-blue-400 mb-2">{s.stat}</p>
                <p className="text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">How it works</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900 mb-4">
              Bonded inputs. <span className="text-blue-600">One resilient output.</span>
            </h2>
            <p className="text-slate-600">
              We combine Starlink satellite with multiple 5G/4G carriers into a single bonded SD-WAN connection — so if one path drops, traffic keeps flowing on the others.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {bondedInputs.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Who it's for</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-4">
              Wireless internet that's actually built for business.
            </h2>
            <p className="text-slate-300">Same wireless tech — but engineered for the operations that depend on it.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audience.map((a) => (
              <div key={a.title} className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/90 text-white">
                    <a.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">{a.title}</h3>
                  <p className="text-slate-300">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT THIS, THIS — tight comparison */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src={maypoleBg}
            alt="Engineer-installed wireless antennas on a UK building"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">The difference</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">
              Not a consumer wireless ISP. Not residential 4G in a box.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-md p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-6">What we're not</h3>
              <ul className="space-y-4">
                {compare.map((c) => (
                  <li key={c.not} className="flex gap-3 text-white/90">
                    <X className="text-red-400 shrink-0 mt-0.5 h-5 w-5" />
                    <span>{c.not}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-md p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300 mb-6">What we are</h3>
              <ul className="space-y-4">
                {compare.map((c) => (
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

      {/* PAIN POINTS */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why switch</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900">
              Why businesses switch to Integra wireless.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((p) => (
              <div key={p.h} className="rounded-xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.h}</h3>
                <p className="text-slate-600">{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative py-16 md:py-24 bg-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case studies</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">
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
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-2">Customer story</p>
                  <p className="text-2xl font-bold text-blue-300 mb-2">{c.stat}</p>
                  <p className="text-white/80 text-sm mb-3 line-clamp-3">"{c.quote}"</p>
                  <p className="text-sm font-semibold mb-3">{c.name}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-blue-300">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/customers" className="text-white font-medium hover:underline">
              View all customer stories →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">FAQ</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900">
              Wireless business broadband — what people ask
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-slate-900">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* AVAILABILITY CHECKER */}
      <div id="availability-checker-form">
        <AvailabilityCheckerInline compact sourceTag="lp-wireless-internet-providers" hideChatAlternative />
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-heading-1 md:text-display-sm text-white">
            Ready to switch to wireless internet built for business?
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
    </PageLayout>
  );
};

export default WirelessInternetProvidersUK;