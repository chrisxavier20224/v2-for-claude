import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, FileSignature, HardHat, CalendarClock, Gauge, ShieldCheck, Network, Phone, Wrench, Globe } from "lucide-react";
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
import heroImgAsset from "@/assets/empty-office.jpg.asset.json";
import bridgeCardImgAsset from "@/assets/landing/building-connectivity.jpg.asset.json";
import sdwanCardImgAsset from "@/assets/landing/celltower.jpg.asset.json";
import wbPowerImg from "@/assets/case-studies/wb-power-hero.avif";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";

const reasons = [
  {
    icon: FileSignature,
    h: "Wayleave agreements",
    p: "Openreach needs landlord and neighbouring-land signatures to run fibre to your premises. Each one can sit on a desk for weeks — and the install can't book until they're all signed.",
  },
  {
    icon: HardHat,
    h: "Excess construction & civils",
    p: "New ducting, road closures, traffic management. Quotes routinely come back £15–50k, and the works themselves add weeks to the build programme on top of the survey queue.",
  },
  {
    icon: CalendarClock,
    h: "Survey-to-install queue",
    p: "Desktop survey, site survey, planning, build, commissioning — each stage books weeks out. One slip in the chain pushes everything that follows back another month.",
  },
];

const capabilities = [
  { icon: Gauge, h: "Up to 500Mbps", p: "Fibre-class speeds, bonded across multiple bearers." },
  { icon: ShieldCheck, h: "99.5% uptime SLA", p: "Backed by service credits, monitored 24/7." },
  { icon: Network, h: "Static IPs included", p: "No CGNAT. VPN, CCTV and inbound apps work properly." },
  { icon: Phone, h: "VoIP, EPOS & cloud", p: "Card machines, phones, cloud apps — engineered for business traffic." },
  { icon: Wrench, h: "UK engineers", p: "Phone and WhatsApp support from the team that installed your kit." },
  { icon: Globe, h: "One install, one day", p: "Engineer attends site once, commissions everything before they leave." },
];

const proof = [
  {
    name: "WB Power Services",
    stat: "Dodged £50k fibre bill",
    quote: "Bonded 4G/5G SD-WAN delivering 350Mbps+ from the depot roof — every site unified on one platform.",
    href: "/customers/wb-power-services",
    image: wbPowerImg,
  },
  {
    name: "Carbee",
    stat: "0.1Mbps → 300Mbps+",
    quote: "From 0.1Mbps to 300+Mbps — transforming a rural car dealer's business operations.",
    href: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
    image: carbeeImg,
  },
];

const faqs = [
  {
    q: "How can you install in 10 working days when fibre takes months?",
    a: "We don't dig. Integra Bridge runs over bonded Starlink and 4G/5G, with antennas mounted on your building — no civils, no wayleaves, no Openreach queue. A UK engineer surveys, installs and commissions everything in a single visit, typically 4–6 hours on site.",
  },
  {
    q: "Is it really fast enough to run the business on?",
    a: "Yes. Up to 500Mbps down with bonded uplinks scaled across multiple bearers, engineered for real business workloads: VoIP, card machines, EPOS, cloud apps, CCTV, video calls. Static IPs are available so VPNs and inbound traffic work properly, with a 99.5% uptime SLA backed by service credits.",
  },
  {
    q: "What happens when our fibre arrives?",
    a: "Planned cutover. Your leased line lands, we cut traffic over to it, and Integra Bridge stays on as SLA-backed failover. No rip-and-replace, no second project, no wasted spend — your one outage during the wait pays for the failover for years to come.",
  },
  {
    q: "Do we pay for both at once when the fibre lands?",
    a: "Short-term Bridge pricing while you wait, then it steps down to a lower failover rate the day fibre is commissioned. You're not double-paying for the same bandwidth — you're keeping resilience on a connection you've already proven.",
  },
  {
    q: "Can you install at a site that's still being fitted out?",
    a: "Yes — that's a common case for us. We can install ahead of fit-out so contractors, surveyors and your IT team have internet from day one, then re-position kit if needed when the building is finished. Power and a roofline are usually all we need to start.",
  },
  {
    q: "Do you cap or throttle data?",
    a: "No caps, no throttling on the cellular side. We run enterprise data plans sized for business workloads — not consumer dongles with hidden fair-use limits.",
  },
  {
    q: "What's covered by the 99.5% SLA?",
    a: "Uptime is backed by service credits. Automatic failover between satellite and multiple mobile carriers keeps traffic flowing, and UK engineers monitor every connection 24/7 with phone and WhatsApp support.",
  },
  {
    q: "Our install date just slipped again — how fast can you move?",
    a: "We can run a free desktop survey within 24 hours of you getting in touch, confirm expected speeds at your exact location, and have a UK engineer on site to install within 10 working days. If you're staring at a deadline, tell us the date — we'll work backwards from it.",
  },
];

const stats = [
  { v: "30–90 working days", l: "typical UK leased line install" },
  { v: "10 working days", l: "Integra Bridge live" },
  { v: "£0 wasted", l: "Bridge becomes your failover" },
];

const timeline = [
  { w: "Week 0", h: "You order your leased line.", p: "Quote signed, Openreach starts the clock." },
  { w: "Week 2", h: "Integra Bridge live.", p: "Your business is online at up to 500Mbps." },
  { w: "Weeks 2–14", h: "Trade as normal.", p: "Wayleaves, surveys, civils — none of it stops you working." },
  { w: "Fibre day", h: "Seamless cutover.", p: "Traffic moves to the leased line in a planned window." },
  { w: "After", h: "Bridge stays as failover.", p: "One outage paid for the whole thing." },
];

const CANONICAL = "https://www.integra-networks.co.uk/lp/waiting-for-fibre";

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

const WaitingForFibre = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <Helmet>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={CANONICAL} />
      </Helmet>
      <SEO
        title="Waiting for Fibre? Business Internet in 10 Working Days | Integra"
        description="Ordered a leased line and stuck in the Openreach queue? Integra Bridge gets you online in 10 working days at up to 500Mbps — and stays as your failover once fibre lands."
        url="/lp/waiting-for-fibre"
      />
      <SchemaMarkup data={[faqSchema]} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImgAsset.url}
            alt="New business premises waiting for a fibre leased line install"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Your fibre is months away. <span className="text-blue-400">Your opening date isn't moving.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Integra Bridge gets your business online in 10 working days — bonded Starlink + 4G/5G at fibre-class
              speeds — then stays on as your failover when the leased line finally lands.
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

      {/* STAT BAND — the gap in numbers */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-blue-300 mb-8">The gap, in numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.v} className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{s.v}</p>
                <p className="mt-2 text-sm text-slate-300">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER LOGO BAR */}
      <CustomerLogoBar />

      {/* TIMELINE VISUAL */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">How the wait actually goes</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Order day to fibre day — and what we do in between.
            </h2>
            <p className="text-slate-600">
              The leased line still arrives. You just don't sit dark while it does.
            </p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[34px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200" />
            <div className="grid grid-cols-5 gap-4 relative">
              {timeline.map((t, i) => (
                <div key={t.w} className="text-center">
                  <div className="relative flex justify-center mb-6">
                    <div className={`relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 ${i === 1 ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200" : "border-blue-500 bg-white text-blue-600"}`}>
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
                  <div className={`relative z-10 shrink-0 flex h-[56px] w-[56px] items-center justify-center rounded-full border-4 ${i === 1 ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200" : "border-blue-500 bg-white text-blue-600"}`}>
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

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* WHY INSTALLS SLIP */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why installs slip</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Three things slow every fibre install. None of them are negotiable.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.h}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <r.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{r.h}</h3>
                <p className="text-slate-600 leading-relaxed">{r.p}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-700 text-lg mt-10 max-w-2xl mx-auto">
            None of it is in your control. <span className="font-semibold text-slate-900">Being online anyway is.</span>
          </p>
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
                  alt="New business premises with bridge connectivity while fibre is provisioned"
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
                  We've ordered fibre — it's just not coming fast enough.
                </h3>
                <p className="text-slate-300 mb-4">
                  New premises, relocation, or an install date that keeps slipping. Integra Bridge gets you live in 10 working days, then cuts cleanly to your leased line when it lands — and stays on as failover.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">While you wait · Failover after</p>
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
                  alt="Cellular mast — bonded 4G/5G as a permanent business connection"
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
                  Honestly, fibre might never make sense here.
                </h3>
                <p className="text-slate-300 mb-4">
                  Quote came back £15k+, or the cabinet's miles away. Integra SD-WAN bonds multiple 4G/5G networks into a permanent business connection — up to 500Mbps with static IPs and full UK engineer support.
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Permanent · Bonded 4G/5G</p>
                  <Link to="/integra-sd-wan" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Explore Integra SD-WAN <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY GRID — what you get in the meantime */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">In the meantime</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              You're not running on a stopgap. You're running on a business connection.
            </h2>
            <p className="text-slate-600">
              Everything a fibre leased line would give you — minus the wait.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.h} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100 text-blue-600">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{c.h}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="relative py-16 md:py-24 bg-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case studies</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Businesses that stopped waiting.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {proof.map((c) => (
              <Link
                key={c.name}
                to={c.href}
                className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] flex flex-col justify-end shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/10" />
                <div className="relative p-8 text-white">
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
              Waiting for fibre — what people ask
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
        <AvailabilityCheckerInline compact sourceTag="lp-waiting-for-fibre" hideChatAlternative />
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Open on time. Every time.
          </h2>
          <p className="mt-4 text-slate-300">
            Live in 10 working days. Fibre-class speeds. Becomes your failover when fibre lands.
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

export default WaitingForFibre;