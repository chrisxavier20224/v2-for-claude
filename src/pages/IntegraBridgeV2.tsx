import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarX,
  DoorClosed,
  SignalZero,
  Gauge,
  ShieldCheck,
  Network,
  Wrench,
} from "lucide-react";
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
import { BondedTopologyDiagram } from "@/components/topology/BondedTopologyDiagram";
import heroImg from "@/assets/connectivity/bridge-hero.webp";
import mcgeeImg from "@/assets/case-studies/mcgee-hero.webp";

const trustItems = [
  "10 working days to live",
  "Static IPs, no CGNAT",
  "99.5% SLA",
  "UK engineers",
];

const problems = [
  {
    icon: CalendarX,
    h: "A lead time you don't control.",
    p: "Fibre leased lines take 75–120 days — wayleaves, civils, survey queues. None of it sits on your desk.",
  },
  {
    icon: DoorClosed,
    h: "A site that can't open.",
    p: "Doors open the day they open. No connection means no tills, no VoIP, no cloud — and a team standing around.",
  },
  {
    icon: SignalZero,
    h: "Consumer 4G that embarrasses you.",
    p: "MiFi sticks and dongles drop, throttle and CGNAT your VPN. They're a workaround, not a business connection.",
  },
];

const timeline = [
  { w: "Week 0", h: "Leased line ordered.", p: "Quote signed. Openreach starts the clock." },
  { w: "Week 2", h: "Bridge live.", p: "Your business is trading at fibre-class speed." },
  { w: "Weeks 2–14", h: "Openreach does Openreach things.", p: "Wayleaves, civils, surveys — none of it stops you." },
  { w: "Fibre day", h: "Seamless cutover.", p: "Traffic moves to the leased line in a planned window." },
  { w: "After", h: "Bridge stays as failover.", p: "SLA-backed resilience, already on the wall." },
];

const includes = [
  "Installation",
  "Bonding hardware",
  "SD-WAN router",
  "24/7 monitoring",
];

const packages = [
  {
    name: "Bridge 500",
    down: "Up to 500 Mbps",
    up: "Up to 200 Mbps",
  },
  {
    name: "Bridge 1000",
    down: "Up to 1 Gbps",
    up: "Up to 300 Mbps",
    feature: true,
  },
];

const faqs = [
  {
    q: "How is 10 days possible when fibre takes months?",
    a: "We don't dig. A UK engineer surveys, mounts the kit on your building and commissions everything in a single visit — typically 4–6 hours on site. No civils, no wayleaves, no Openreach queue.",
  },
  {
    q: "What happens when our fibre arrives?",
    a: "Planned cutover. Your leased line lands, we move traffic over to it in a scheduled window, and Bridge stays on as your SLA-backed failover. No rip-and-replace, no second project, nothing wasted.",
  },
  {
    q: "Do we pay for both at once?",
    a: "No. Bridge runs at the full rate while your fibre is being built (~3 months). The day fibre is commissioned, Bridge steps down to a fixed 36-month failover rate. A 39-month effective term, sized so you're never paying twice for the same bandwidth.",
  },
  {
    q: "Is it fast enough to run the business on?",
    a: "Yes. A typical configuration bonds Starlink and two cellular bearers to deliver up to 1 Gbps down / 300 Mbps up, over private Layer 2 from our data centre. Static IPs, no CGNAT, 99.5% uptime SLA — engineered for VoIP, EPOS, cloud apps, CCTV and video.",
  },
  {
    q: "Our install date just slipped — how fast can you survey?",
    a: "Free desktop survey within 24 hours of you getting in touch, confirmed speeds at your exact postcode, UK engineer on site to install within 10 working days. Tell us your opening date and we'll work backwards from it.",
  },
];

const CANONICAL = "https://www.integra-networks.co.uk/integra-bridge-v2";

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

const IntegraBridgeV2 = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href={CANONICAL} />
      </Helmet>
      <SEO
        title="Integra Bridge — Fast now. Your failover forever."
        description="Enterprise internet in 10 working days while your leased line is built — then Bridge stays on as your SLA-backed failover when fibre lands."
        url="/integra-bridge-v2"
        noIndex
      />
      <SchemaMarkup data={[faqSchema]} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Integra Bridge enterprise connectivity installed on a UK business premises"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 mb-5">Integra Bridge</p>
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Fast now. <span className="text-blue-400">Your failover forever.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Ordered a leased line that's months away? Bridge delivers enterprise internet in 10 working days — and when your fibre lands, it stays on as your permanent failover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
                Check Availability
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+442033887111">Call 0203 388 7111</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white">
            {trustItems.map((item, i, arr) => (
              <span key={item} className="flex items-center gap-x-6">
                <span>{item}</span>
                {i < arr.length - 1 && <span className="text-white/60 hidden sm:inline">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The problem</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900">
              Fibre leased lines take 75–120 days — and you don't control a single one of them.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((r) => (
              <div
                key={r.h}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 text-blue-600">
                  <r.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{r.h}</h3>
                <p className="text-slate-600 leading-relaxed">{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE — centrepiece */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The Bridge timeline</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900 mb-4">
              Order day to fibre day — and what we do in between.
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[34px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200" />
            <div className="grid grid-cols-5 gap-4 relative">
              {timeline.map((t, i) => (
                <div key={t.w} className="text-center">
                  <div className="relative flex justify-center mb-6">
                    <div
                      className={`relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 ${
                        i === 1
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "border-blue-500 bg-white text-blue-600"
                      }`}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-center leading-tight px-1">
                        {t.w}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2 px-2">{t.h}</h3>
                  <p className="text-sm text-slate-600 px-2 leading-relaxed">{t.p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet vertical timeline */}
          <div className="lg:hidden relative max-w-xl mx-auto">
            <div className="absolute top-2 bottom-2 left-[27px] w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={t.w} className="relative flex gap-5">
                  <div
                    className={`relative z-10 shrink-0 flex h-[56px] w-[56px] items-center justify-center rounded-full border-4 ${
                      i === 1
                        ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "border-blue-500 bg-white text-blue-600"
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-center leading-tight px-1">
                      {t.w}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{t.h}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-slate-700 text-lg mt-12 max-w-2xl mx-auto">
            One contract, no rip-and-replace, <span className="font-semibold text-slate-900">nothing wasted.</span>
          </p>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">How it works</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-4">
              A typical Bridge configuration.
            </h2>
            <p className="text-slate-300">
              Starlink 250/25 + 2× cellular 250/125 → bonded up to 1Gbps down / 300Mbps up, over private Layer 2 from our data centre. Static IPs, no CGNAT, monitored 24/7.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <BondedTopologyDiagram
              carriers={3}
              productName="Integra Bridge"
              throughputLabel="Up to 1 Gbps bonded"
              throughputSubLabel="aggregate throughput"
            />
          </div>

          <p className="text-center text-slate-300 text-sm md:text-base mt-8 max-w-3xl mx-auto">
            Your exact bearer mix — cellular, satellite, or both — is engineered at survey for your site.
          </p>
        </div>
      </section>

      {/* 6. PACKAGES */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Packages</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900 mb-4">
              Two simple packages. One promise: fibre-class internet without the wait.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                  p.feature ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"
                }`}
              >
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">{p.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-600">Download</span>
                    <span className="text-lg font-semibold text-slate-900">{p.down}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-600">Upload</span>
                    <span className="text-lg font-semibold text-slate-900">{p.up}</span>
                  </div>
                </div>
                <div className="pt-6 mt-auto border-t border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Both packages include</p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {includes.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 space-y-4 text-center">
            <p className="text-slate-700">
              <span className="font-semibold text-slate-900">39-month effective term</span> — ~3 months while your fibre is built, then 36 months fixed from fibre handover, with Bridge staying live as your failover.
            </p>
            <p className="text-slate-700">
              Priced per site at survey — you'll know the exact monthly cost before you sign. <span className="font-semibold text-slate-900">No mystery quotes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 7. CASE STUDY */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case study</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">
              Businesses that stopped waiting.
            </h2>
          </div>

          <Link
            to="/customers/mcgee-construction"
            className="group relative block max-w-3xl mx-auto overflow-hidden rounded-2xl bg-slate-900 aspect-[16/9] shadow-lg transition-transform hover:-translate-y-1"
          >
            <img
              src={mcgeeImg}
              alt="McGee Construction — Integra Bridge on a major London construction site"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/10" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 mb-1">Customer story</p>
              <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">McGee Construction</p>
              <p className="text-xl md:text-2xl font-bold text-blue-300 mb-3">350Mbps for London's biggest sites</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-blue-300">
                Read case study <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <p className="text-center mt-10 text-slate-300">
            Permanent site with no fibre on the horizon?{" "}
            <Link to="/integra-sd-wan" className="text-blue-300 hover:text-blue-200 font-medium underline-offset-4 hover:underline">
              You want Integra SD-WAN <ArrowRight className="inline h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-3">FAQ</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">
              Bridge — what people ask
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

      {/* 9. AVAILABILITY CHECKER + FINAL CTA + WHOLESALE SIGNPOST */}
      <div id="availability-checker-form">
        <AvailabilityCheckerInline compact sourceTag="integra-bridge-v2" hideChatAlternative />
      </div>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-heading-1 md:text-display-sm text-white">
            Your opening date isn't moving. Neither should you.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white" onClick={scrollToChecker}>
              Check Availability
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="tel:+442033887111">Call 0203 388 7111</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Wholesale signpost — slim band */}
      <section className="bg-slate-950 border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-slate-400">
            Run an ISP or MSP?{" "}
            <Link to="/wholesale" className="text-blue-300 hover:text-blue-200 font-medium">
              Bridge is available wholesale, delivered under your brand <ArrowRight className="inline h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>

      <div className="bg-slate-950 h-12 md:hidden" aria-hidden="true" />
    </PageLayout>
  );
};

export default IntegraBridgeV2;