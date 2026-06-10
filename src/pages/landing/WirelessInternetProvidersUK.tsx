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
import Section from "@/components/shared/Section";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import heroImgAsset from "@/assets/landing/wireless-business-hero.jpg.asset.json";
const heroImg = heroImgAsset.url;

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
  },
  {
    icon: Network,
    title: "Multi-site operators",
    body: "Construction sites, pop-up retail, business parks, distribution hubs. One platform, central management, predictable performance across every location.",
  },
  {
    icon: Shield,
    title: "Businesses that can't afford downtime",
    body: "Card machines, VoIP, cloud apps, CCTV, EPOS. Dual-network failover means traffic keeps flowing even if one carrier drops.",
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
    quote: "From single-digit ADSL to 1000Mbps. New tenants now connect in days, not months.",
    href: "/customers/royle-farm",
  },
  {
    name: "WB Power Services",
    quote: "National generator service business unified across every depot — one platform, predictable performance.",
    href: "/customers/wb-power-services",
  },
  {
    name: "Carbee",
    quote: "From 0.1Mbps to 300+Mbps — transforming a rural car dealer's business operations.",
    href: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UK business with reliable wireless internet connectivity"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/70 to-surface-dark/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6">
              Wireless internet for UK business — live in{" "}
              <span className="text-primary">10 working days</span>, where fibre can't reach.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Bonded 4G/5G + Starlink, engineered for business. Up to 500Mbps, 99.5% SLA, UK engineers.
              No fibre required. No 10-week wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToChecker}>
                Check Coverage
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 rounded"
              >
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-background-alt border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {["SLA-backed", "UK-based engineers", "Trusted by rural & multi-site businesses", "99.5% uptime guarantee"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-x-6">
                  <span className="text-foreground">{item}</span>
                  {i < arr.length - 1 && <span className="text-primary hidden sm:inline">•</span>}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* COVERAGE BAND (slim) */}
      <section id="availability-checker" className="bg-background-alt">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground font-medium text-center sm:text-left">
            Coverage check takes 60 seconds — no postcode lottery.
          </p>
          <Button asChild>
            <a href="#availability-checker-form">Check Coverage <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* STATS */}
      <Section size="compact">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.stat} className="p-8 text-center">
              <p className="text-3xl md:text-4xl font-medium text-primary mb-2">{s.stat}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS — BONDED INPUTS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">
            How it works
          </p>
          <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-4 max-w-3xl mx-auto">
            Bonded inputs. <span className="text-primary">One resilient output.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            We combine Starlink satellite with multiple 5G/4G carriers into a single bonded SD-WAN
            connection — so if one path drops, traffic keeps flowing on the others.
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {bondedInputs.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-foreground font-normal mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <Section variant="alt">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-heading-1 text-foreground mb-4">
            Wireless internet that's actually built for business.
          </h2>
          <p className="text-lg text-muted-foreground">
            Same wireless tech — but engineered for the operations that depend on it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {audience.map((a) => (
            <Card key={a.title} className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <a.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 text-foreground mb-3">{a.title}</h3>
              <p className="text-muted-foreground">{a.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* NOT THIS, THIS */}
      <Section>
        <h2 className="text-heading-1 text-foreground text-center mb-12 max-w-3xl mx-auto">
          Not a consumer wireless ISP. Not residential 4G in a box.
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              What we're not
            </p>
            <ul className="space-y-4">
              {compare.map((c) => (
                <li key={c.not} className="flex items-start gap-3 text-foreground">
                  <X className="h-5 w-5 flex-shrink-0 text-destructive mt-0.5" />
                  <span>{c.not}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border-primary/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              What we are
            </p>
            <ul className="space-y-4">
              {compare.map((c) => (
                <li key={c.are} className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <span>{c.are}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* PRICING */}
      <Section variant="alt">
        <h2 className="text-heading-1 text-foreground text-center mb-12">
          Transparent business pricing. No mystery quotes.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`p-8 flex flex-col ${t.highlight ? "border-primary border-2 shadow-lg" : ""}`}
            >
              {t.highlight && (
                <span className="self-start mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-heading-3 text-foreground mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.blurb}</p>
              <p className="text-3xl font-medium text-foreground mb-6">{t.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link to={t.cta.href}>{t.cta.label}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* PAIN POINTS */}
      <Section>
        <h2 className="text-heading-1 text-foreground text-center mb-12">
          Why businesses switch to Integra wireless.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {painPoints.map((p) => (
            <Card key={p.h} className="p-8">
              <h3 className="text-heading-3 text-foreground mb-3">{p.h}</h3>
              <p className="text-muted-foreground">{p.p}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROOF */}
      <Section variant="alt">
        <h2 className="text-heading-1 text-foreground text-center mb-12">
          Real businesses. Real results.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proof.map((c) => (
            <Card key={c.name} className="p-8 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Case study
              </p>
              <h3 className="text-heading-3 text-foreground mb-3">{c.name}</h3>
              <p className="text-muted-foreground mb-6 flex-1">"{c.quote}"</p>
              <Link
                to={c.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/customers" className="text-primary font-medium hover:underline">
            View all customer stories →
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-heading-1 text-foreground text-center mb-12">
          Wireless business broadband — what people ask
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <AvailabilityCheckerInline compact sourceTag="lp-wireless-internet-providers" />
      {/* FINAL CTA */}
      <Section variant="dark" size="large">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
            Ready to switch to wireless internet built for business?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Up to 500Mbps. Live in 10 working days. SLA-backed. No fibre required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/check">Check Availability</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+442033887111">Call 0203 388 7111</a>
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default WirelessInternetProvidersUK;