import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock, AlertTriangle, Zap, Satellite, Signal, Gauge, Package, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import { Check as CheckIcon, X as XIcon } from "lucide-react";
import heroImgAsset from "@/assets/landing/enterprise-install-rehlko.jpg.asset.json";
import mcgeeImg from "@/assets/case-studies/mcgee-hero.webp";
import carbeeImg from "@/assets/case-studies/carbee-hero.webp";

const heroImg = heroImgAsset.url;

const situations = [
  {
    icon: Clock,
    h: "A lead time you don't control",
    p: "Openreach sets the date — surveys, wayleaves and civils routinely add weeks (or months) to your fibre install.",
  },
  {
    icon: AlertTriangle,
    h: "A site that can't open",
    p: "No phones, no card payments, no systems while the lease runs. Every week of delay is real revenue lost.",
  },
  {
    icon: Zap,
    h: "A workaround that isn't working",
    p: "Consumer 4G dongles and hotspots drop, throttle and look unready in front of customers and staff.",
  },
];

const maths = [
  {
    icon: Satellite,
    name: "Starlink Satellite",
    detail: "250Mbps down / 25Mbps up",
  },
  {
    icon: Signal,
    name: "5G/4G Carriers (×2)",
    detail: "250Mbps down / 125Mbps up each",
  },
  {
    icon: Gauge,
    name: "Bonded Output",
    detail: "Up to 1Gbps down / 300Mbps up",
  },
];

const includes = [
  "Installation by UK engineers",
  "Starlink + 5G bonding hardware",
  "SD-WAN router",
  "24/7 monitoring & support",
];

const starlinkCompare: {
  label: string;
  alone: string;
  sdwan: string;
  sdwanTick?: boolean;
  bridge: string;
}[] = [
  { label: "Upload speed", alone: "~25Mbps up", sdwan: "Bonded cellular uplinks — scales with every carrier added", sdwanTick: true, bridge: "Up to 300Mbps up — satellite + cellular bonded" },
  { label: "Resilience", alone: "One network. Obstruction, weather or an outage takes you offline", sdwan: "Up to four mobile carriers, automatic failover", sdwanTick: true, bridge: "Satellite + multiple 4G/5G carriers — no single point of failure" },
  { label: "Support & SLA", alone: "App-only support, best-effort", sdwan: "UK engineers, 99.5% uptime SLA with credits", sdwanTick: true, bridge: "UK engineers, 99.5% uptime SLA with credits" },
  { label: "IP addressing", alone: "CGNAT — no static IP, breaks VPNs & CCTV", sdwan: "Static IP included on bonded configurations", sdwanTick: true, bridge: "Static IPs over private Layer 2, VPN & CCTV-ready" },
  { label: "Works with poor mobile signal?", alone: "Yes — needs clear sky only", sdwan: "Needs usable 4G/5G coverage — confirmed by survey", sdwanTick: false, bridge: "Yes — satellite carries the load where cellular is weak" },
  { label: "Installation", alone: "DIY kit on a windowsill", sdwan: "Engineer-installed, carrier-specific antennas per site", sdwanTick: true, bridge: "Surveyed, engineer-installed roof mount" },
];

const caseStudies = [
  {
    name: "McGee Construction",
    stat: "350Mbps on London's biggest sites",
    quote: "Enterprise-grade connectivity delivered across active demolition and construction sites.",
    href: "/customers/mcgee-construction",
    image: mcgeeImg,
  },
  {
    name: "Carbee Ltd",
    stat: "0.1Mbps → 300Mbps",
    quote: "From 0.1Mbps to 300+Mbps — transforming a rural car dealer's business operations.",
    href: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
    image: carbeeImg,
  },
];

const faqs = [
  {
    q: "How fast can you actually deliver?",
    a: "Live in 10 working days from order. A desktop survey confirms the bearer mix, then a UK engineer installs and commissions the connection — no Openreach lead times.",
  },
  {
    q: "Why not just buy Starlink ourselves?",
    a: "You can — for a home, probably the right call. For a business, Starlink alone means ~25Mbps uploads, no static IP, no SLA and a single network. Integra Bridge bonds Starlink with multi-carrier 4G/5G into a private Layer 2 service with up to 300Mbps up, static IPs, automatic failover and UK engineer support.",
  },
  {
    q: "What happens when our fibre arrives?",
    a: "Bridge doesn't get ripped out — it becomes your permanent multi-network failover, blending satellite and cellular for true always-on resilience. One partner takes you from temporary to permanent connectivity.",
  },
  {
    q: "What's the SLA — and what happens if something goes down?",
    a: "99.5% uptime SLA backed by service credits. Automatic failover between Starlink and carriers keeps traffic flowing, and UK engineers monitor every connection 24/7.",
  },
  {
    q: "Can we get static IPs and run VPNs, CCTV and EPOS?",
    a: "Yes. Static IPs are included over private Layer 2, with no CGNAT. The connection is engineered for business traffic — VoIP, card machines, cloud apps and remote CCTV access all run as standard.",
  },
  {
    q: "What does it cost?",
    a: "Bridge is a premium solution, priced per deployment based on site requirements, data usage and contract length. Flexible terms from short-term up to 36 months. You'll have the full quote before you sign — no mystery pricing.",
  },
];

const scrollToChecker = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("availability-checker-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const IntegraBridgeV2 = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Integra Bridge — Enterprise Internet in 10 Working Days"
        description="Bonded Starlink + multi-carrier 4G/5G over private Layer 2. Up to 1Gbps down, 300Mbps up, static IPs, 99.5% SLA — and permanent failover when your fibre arrives."
        url="/integra-bridge-v2"
        noIndex
      />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Enterprise comms cabinet and infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">Integra Bridge</p>
            <h1 className="text-heading-1 md:text-display-sm text-white mb-6 max-w-4xl">
              Enterprise internet in <span className="text-blue-400">10 working days</span> — while fibre keeps you waiting.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Bonded Starlink + multi-carrier 4G/5G, delivered over private Layer 2. Up to 1Gbps down, 300Mbps up, static IPs, 99.5% SLA. When your fibre lands, Bridge stays on as permanent failover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={scrollToChecker}>
                Check Coverage
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white">
            {["SLA-backed", "UK-based engineers", "Trusted by rural & multi-site businesses", "99.5% uptime guarantee"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-x-6">
                <span>{item}</span>
                {i < arr.length - 1 && <span className="text-white/60 hidden sm:inline">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CustomerLogoBar />

      {/* COVERAGE BAND */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-center sm:text-left">Coverage check takes 60 seconds — no postcode lottery.</p>
          <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
            <a href="#availability-checker-form">Check Coverage <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* SITUATION */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">The connectivity gap</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">
              The circuit's ordered. <span className="text-blue-400">The clock's running.</span> The site can't wait.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {situations.map((s) => (
              <div key={s.h} className="rounded-xl border border-white/10 bg-slate-800/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/90 text-white mb-5">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{s.h}</h3>
                <p className="text-slate-300">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATHS */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The maths</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900">
              Bonded inputs. <span className="text-blue-600">One enterprise output.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {maths.map((m) => (
              <div key={m.name} className="rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white mb-5">
                  <m.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{m.name}</h3>
                <p className="text-slate-600">{m.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-10 max-w-3xl mx-auto">
            Delivered over a private Layer 2 tunnel from our data centre — static IPs, no CGNAT, fibre-like stability.
            <span className="block text-xs text-slate-500 mt-2">*Typical bonded speeds; results vary by radio conditions, satellite view and carrier policy.</span>
          </p>
        </div>
      </section>

      {/* STARLINK COMPARISON */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Starlink, done properly</p>
            <h2 className="text-heading-1 md:text-display-sm text-slate-900 mb-4">
              Thinking of just buying Starlink? <span className="text-blue-600">Here's the difference.</span>
            </h2>
            <p className="text-slate-600">
              Starlink is brilliant — that's why we build with it. But on its own, it's a single network with consumer-grade limits. We bond it with multi-carrier cellular and wrap it in business-grade service.
            </p>
          </div>

          {/* Desktop */}
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
                  <div key={row.label} className="grid grid-cols-[0.9fr_1fr_1fr_1fr] hover:bg-slate-50/50 transition-colors">
                    <div className="px-6 py-5 text-sm font-medium text-slate-900">{row.label}</div>
                    <div className="px-6 py-5 text-sm text-slate-500 border-l border-slate-100">
                      <span className="flex gap-2">
                        {aloneIsAdvantage ? <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /> : <XIcon className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />}
                        <span>{row.alone}</span>
                      </span>
                    </div>
                    <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                      <span className="flex gap-2">
                        {row.sdwanTick ? <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /> : <span className="w-4 shrink-0" />}
                        <span>{row.sdwan}</span>
                      </span>
                    </div>
                    <div className="px-6 py-5 text-sm text-slate-800 border-l border-slate-100 bg-slate-50/70">
                      <span className="flex gap-2">
                        <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{row.bridge}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile */}
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
                      icon = r.label === "Works with poor mobile signal?"
                        ? <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        : <XIcon className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />;
                      textClass = "text-slate-500";
                    } else if (col.key === "sdwan") {
                      icon = r.sdwanTick ? <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /> : null;
                    } else {
                      icon = <CheckIcon className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />;
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
              Check Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* WHEN FIBRE ARRIVES */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Never wasted</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-4">
              Bridge today. <span className="text-blue-400">Failover forever.</span>
            </h2>
            <p className="text-slate-300">
              When your leased line goes live, Bridge doesn't get ripped out — it becomes your permanent multi-network failover, blending satellite and cellular for true always-on resilience. One partner from temporary to permanent.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/90 text-white mb-5">
                <Package className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Every deployment includes</h3>
              <ul className="space-y-3">
                {includes.map((i) => (
                  <li key={i} className="flex gap-2 text-slate-300">
                    <Check className="h-4 w-4 text-blue-400 shrink-0 mt-1" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/90 text-white mb-5">
                <Receipt className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Commercials</h3>
              <p className="text-slate-300">
                Premium solution, priced per deployment — site requirements, data usage and contract length. Flexible terms from short-term to 36 months. Full quote before you sign — no mystery pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="relative py-16 md:py-24 bg-slate-900">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Case studies</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">Real businesses. Real results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {caseStudies.map((c) => (
              <Link
                key={c.name}
                to={c.href}
                className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/5] flex flex-col justify-end shadow-lg transition-transform hover:-translate-y-1"
              >
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/10" />
                <div className="relative p-6 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 mb-1">Customer story</p>
                  <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">{c.name}</p>
                  <p className="text-xl font-bold text-blue-300 mb-2">{c.stat}</p>
                  <p className="text-white/80 text-sm mb-3 line-clamp-3">"{c.quote}"</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-blue-300">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE BAND */}
      <section className="bg-slate-100 py-8 md:py-10 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Wholesale</p>
            <p className="text-slate-800">
              <span className="font-semibold">Run an ISP or MSP?</span> Deliver Bridge under your own brand — survey, install and support handled. You keep the customer and the margin.
            </p>
          </div>
          <Link to="/wholesale" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 whitespace-nowrap">
            See how wholesale works <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-3">FAQ</p>
            <h2 className="text-heading-1 md:text-display-sm text-white">Integra Bridge — what people ask</h2>
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
        <AvailabilityCheckerInline compact sourceTag="integra-bridge-v2" />
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-heading-1 md:text-display-sm text-white">
            Ready to go live in 10 working days?
          </h2>
          <p className="mt-4 text-slate-300">
            Up to 1Gbps. Private Layer 2. Permanent failover protection for years to come.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400 text-white">
              <a href="#availability-checker-form">Check Coverage</a>
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

export default IntegraBridgeV2;