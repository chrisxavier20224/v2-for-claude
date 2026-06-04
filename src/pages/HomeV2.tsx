import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import StructuredData from "@/components/shared/StructuredData";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { ArrowRight, Globe, Headphones, Lightbulb, ShieldCheck, Users, Zap, FileText } from "lucide-react";
import { insightArticles } from "@/pages/insights/insightsData";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import PartnerLogoBar from "@/components/shared/PartnerLogoBar";

const heroPoster = "/video/hero-bg-poster.jpg";

import sdwanImg from "@/assets/sectors/rural-sme-hero.webp";
import leasedImg from "@/assets/connectivity/leased-lines-hero.webp";
import bridgeImg from "@/assets/connectivity/bridge-hero.webp";
import fibreImg from "@/assets/sectors/fibre-building-hero.webp";
import bpImg from "@/assets/sectors/business-parks-hero.webp";
import constructionImg from "@/assets/sectors/construction-hero.webp";
import ruralImg from "@/assets/sectors/rural-sme-hero.webp";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

// Signature geometric device — corner-cut clip
const cornerCut = { clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))" };
const cornerCutTL = { clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)" };

// Fibre-optic abstract visual — replaces all "IMAGE:" placeholders
const FibreVisual = ({ className = "", variant = "a" }: { className?: string; variant?: "a" | "b" | "c" }) => {
  const gradients: Record<string, string> = {
    a: "radial-gradient(ellipse at 20% 30%, hsl(216 100% 55% / 0.45), transparent 55%), radial-gradient(ellipse at 80% 80%, hsl(195 100% 60% / 0.35), transparent 50%), linear-gradient(135deg, hsl(222 47% 8%), hsl(220 60% 14%))",
    b: "radial-gradient(ellipse at 70% 20%, hsl(195 100% 60% / 0.5), transparent 55%), radial-gradient(ellipse at 10% 90%, hsl(216 100% 50% / 0.4), transparent 55%), linear-gradient(160deg, hsl(220 60% 12%), hsl(222 47% 7%))",
    c: "radial-gradient(ellipse at 50% 50%, hsl(216 100% 55% / 0.35), transparent 60%), linear-gradient(120deg, hsl(222 47% 9%), hsl(220 70% 16%))",
  };
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: gradients[variant] }} aria-hidden="true">
      {/* glowing fibre strands */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 500">
        <defs>
          <linearGradient id={`strand-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(195 100% 70%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(195 100% 75%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(216 100% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`strand2-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(216 100% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(195 100% 80%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(216 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M -50 ${60 + i * 60} Q 200 ${20 + i * 70}, 450 ${100 + i * 50}`}
            stroke={`url(#${i % 2 ? `strand2-${variant}` : `strand-${variant}`})`}
            strokeWidth={i % 3 === 0 ? "1.5" : "0.8"}
            fill="none"
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <circle key={`d${i}`} cx={60 + i * 90} cy={120 + (i % 2) * 220} r="2" fill="hsl(195 100% 80%)" opacity="0.8" />
        ))}
      </svg>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(222 47% 6% / 0.6) 100%)" }} />
    </div>
  );
};

// Connecting line motif — vertical thin line that "stitches" sections
const ConnectorLine = () => (
  <div aria-hidden="true" className="relative h-16 flex justify-center">
    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
    <div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_4px_hsl(216_100%_50%/0.6)]" />
  </div>
);

const aboutPoints = [
  { icon: Lightbulb, title: "Live while Fibre's still being built", description: "No excess construction charges, no 8-week wait. Integra Bridge bonds satellite and cellular so your site is operational long before the leased line arrives." },
  { icon: Users, title: "99% UK coverage", description: "Multi-bearer connectivity works anywhere with a mobile signal or clear sky. Construction sites, business parks, multi-site rollouts — we've connected them all." },
  { icon: Headphones, title: "Real UK engineers, not a call centre", description: "When something needs sorting, you speak to the engineers who built your network. No ticket queues, no offshore support." },
];

const problemPoints = [
  { title: "A lead time you don't control", body: "Openreach sets the date, not you. Surveys, wayleaves, civils — every step adds weeks." },
  { title: "A site that can't open", body: "No connectivity means no phones, no card payments, no systems. The space sits empty while the lease runs." },
  { title: "A workaround that isn't working", body: "Consumer 4G routers and phone hotspots don't carry a business. They drop, they throttle, they make you look unready." },
];

const connectivityServices = [
  { title: "Leased Lines", description: "Dedicated Fibre, symmetric speeds, guaranteed SLA. The gold standard for businesses that can't afford downtime.", img: leasedImg, link: "/leased-lines" },
  { title: "SoGEA", description: "Single Order Generic Ethernet Access. Fibre to the premises without the phone line. Fast, reliable, and cost-effective for modern offices.", img: fibreImg, link: "/sogea" },
  { title: "Managed Internet", description: "Fully managed business internet with proactive monitoring, UK support, and guaranteed uptime. We handle the network so you handle your business.", img: bpImg, link: "/managed-internet" },
  { title: "Integra SD-WAN", description: "Bonded multi-carrier 4G/5G connectivity — a five-tier range from single-network failover up to 500Mbps, engineered and monitored per site.", img: sdwanImg, link: "/integra-sd-wan" },
];

const sectors = [
  { title: "Rural SMEs", img: ruralImg, link: "/sectors/rural-smes" },
  { title: "Construction Sites", img: constructionImg, link: "/sectors/construction-sites" },
  { title: "Business Parks", img: bpImg, link: "/sectors/business-parks" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Integra Networks",
  url: "https://integra-networks.co.uk",
};

const HomeV2 = () => {
  return (
    <>
      <SEO
        title="Business Connectivity & Internet Bridge — Integra Networks"
        description="B2B internet provider for multi-site businesses. Leased lines, SoGEA, and Integra Bridge — online in 10 working days while you wait for fibre. UK engineers."
        keywords="business internet, leased lines UK, Integra Bridge, business broadband, multi-site connectivity, SoGEA, SD-WAN"
        url="/home-v2"
      />
      <StructuredData />
      <SchemaMarkup data={organizationSchema} />
      <PageLayout>
        {/* ── 1. HERO — bigger type, layered scrim ─────────────────────── */}
        <section className="relative min-h-[88vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
          <div className="absolute inset-0">
            <video className="w-full h-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="metadata" poster={heroPoster} aria-hidden="true">
              <source src="/video/hero-bg.webm" type="video/webm" />
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </video>
            <img src={heroPoster} alt="Integra Networks Fibre connectivity" className="hidden motion-reduce:block w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/70 to-surface-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/85 via-surface-dark/40 to-transparent" />
          </div>
          {/* signature thin diagonal accent rule */}
          <div aria-hidden="true" className="absolute left-0 top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div aria-hidden="true" className="absolute right-10 bottom-32 h-24 w-px bg-gradient-to-b from-primary to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 pb-20 pt-40">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6">Integra Networks</p>
              <h1 className="mb-8 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-white max-w-5xl font-medium">
                We'll get you Fibre. <span className="text-primary">While you wait,</span> we'll get you online.
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-10">
                Leased lines, SoGEA, managed internet — the same Fibre destination as any major ISP. Plus Integra Bridge: enterprise-grade connectivity in days, while your Fibre's being built.
              </p>
              <div className="flex flex-wrap gap-4 mb-14">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10 text-base rounded-none" style={cornerCutTL}>
                    <Link to="/check">Check Availability</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:border-white hover:bg-white/10 font-medium h-14 px-10 text-base">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-white/15 pt-8">
                {[
                  { icon: Zap, label: "Live in 10 working days" },
                  { icon: Users, label: "Real UK engineers, not a call centre" },
                  { icon: Globe, label: "99% UK coverage" },
                  { icon: ShieldCheck, label: "SLA-backed uptime" },
                ].map((vp) => (
                  <div key={vp.label} className="flex items-start gap-3">
                    <vp.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 font-medium leading-snug">{vp.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CustomerLogoBar />

        {/* ── 3. THE PROBLEM — asymmetric, image bleeds right ──────────── */}
        <section className="relative bg-background py-24 md:py-36 overflow-hidden">
          <div aria-hidden="true" className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <AnimatedSection className="lg:col-span-6 lg:col-start-1 relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">The Problem</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 font-medium leading-[1.05] tracking-tight">
                  The circuit's ordered. The clock's running. The project <span className="text-primary">can't wait.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  You've done everything right. The leased line is ordered, the new site is signed, the team's ready to move. Then the install date comes back — around 10 weeks out. And there's nothing you can do about it except explain the delay to everyone waiting on you.
                </p>
                <ul className="space-y-5">
                  {problemPoints.map((p) => (
                    <li key={p.title} className="border-l-2 border-primary pl-5">
                      <h3 className="text-foreground font-semibold mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection className="lg:col-span-6 relative">
                {/* image bleeds off right edge with corner-cut */}
                <div className="relative lg:-mr-24 lg:translate-y-12">
                  <FibreVisual variant="a" className="aspect-[4/5] rounded-none" />
                  <div className="absolute inset-0" style={cornerCut} >
                    <FibreVisual variant="a" className="w-full h-full" />
                  </div>
                  {/* floating caption tile */}
                  <div className="absolute -bottom-8 -left-8 lg:left-8 bg-background border border-border shadow-xl p-5 max-w-[260px]" style={cornerCutTL}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">~10 weeks</p>
                    <p className="text-sm text-foreground font-medium leading-snug">Average wait between order and live Fibre.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 4. BRIDGE USP — full-bleed dark with overlay panel ───────── */}
        <section className="relative bg-surface-dark py-28 md:py-40 overflow-hidden">
          <FibreVisual variant="b" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/20" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <AnimatedSection className="lg:col-span-7 lg:col-start-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">The Solution</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-medium leading-[1.05] tracking-tight">
                  One thing no other ISP has: <span className="text-primary">the ability to bridge the gap.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                  Every business waiting on Fibre faces the same dead zone — around 10 weeks between signing and going live. Integra Bridge closes it. Bonded Starlink and 5G/4G, delivered over Layer 2 from our data centre, gives you enterprise-grade internet in 10 working days. When your Fibre lands, Bridge stays on as permanent failover.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10 text-base" style={cornerCutTL}>
                    <Link to="/integra-bridge" className="inline-flex items-center gap-2">
                      How Integra Bridge works <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
              {/* offset overlay stat panel */}
              <AnimatedSection className="lg:col-span-5 relative">
                <div className="relative lg:translate-x-8">
                  <div className="bg-primary text-white p-10" style={cornerCut}>
                    <p className="text-7xl md:text-8xl font-medium leading-none mb-3">10</p>
                    <p className="text-sm uppercase tracking-widest font-semibold mb-6">Working days to live</p>
                    <div className="h-px bg-white/30 my-6" />
                    <p className="text-white/90 leading-relaxed">Bonded Starlink + 5G/4G over Layer 2. Survey to switch-on in two working weeks.</p>
                  </div>
                  <div className="absolute -bottom-10 -left-6 lg:-left-12 bg-white/5 backdrop-blur border border-white/15 p-5 max-w-[240px]">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Stays on</p>
                    <p className="text-sm text-white/85 leading-snug">As permanent failover when Fibre lands.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ConnectorLine />

        {/* ── 5. WHY INTEGRA — offset cards w/ corner-cuts ─────────────── */}
        <section className="relative bg-background py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Why Integra</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-medium leading-[1.05] tracking-tight">
                    The opposite of waiting <span className="text-primary">8 weeks for BT.</span>
                  </h2>
                </div>
                <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
                  We get multi-site businesses connected where and when traditional broadband can't — 99% UK coverage, rapid deployment, real engineers on every call.
                </p>
              </div>
            </AnimatedSection>
            <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {aboutPoints.map((point, i) => (
                <motion.div key={point.title} variants={fadeUp} className={i === 1 ? "sm:translate-y-8" : ""}>
                  <div className="relative bg-surface-dark text-white p-8 h-full" style={cornerCut}>
                    <motion.div className="flex h-14 w-14 items-center justify-center bg-primary text-white mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} style={cornerCutTL}>
                      <point.icon className="h-7 w-7" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-xl text-white mb-3 font-semibold">{point.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 6. CONNECTIVITY — full-bleed primary band ────────────────── */}
        <section className="relative bg-surface-dark py-24 md:py-36 overflow-hidden">
          <FibreVisual variant="c" className="absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Internet Connectivity</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-medium leading-[1.05] tracking-tight">
                  Business connectivity, plus <span className="text-primary">the one thing nobody else has.</span>
                </h2>
                <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
                  We're a full-service business ISP — not just a workaround. The standard connectivity you'd expect, plus the one product no one else has.
                </p>
              </div>
            </AnimatedSection>

            {/* Featured Bridge */}
            <AnimatedSection>
              <Link to="/integra-bridge" className="group block mb-10">
                <motion.div className="relative overflow-hidden border border-primary/40" style={cornerCut} whileHover={{ scale: 1.005 }} transition={{ duration: 0.4 }}>
                  <div className="aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
                    <img src={bridgeImg} alt="Integra Bridge" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/70 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14">
                    <span className="inline-block w-fit bg-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-4">Featured</span>
                    <h3 className="text-3xl sm:text-5xl text-white font-medium mb-3 leading-tight">Integra Bridge</h3>
                    <p className="text-white/80 max-w-xl text-base sm:text-lg leading-relaxed mb-5">
                      Enterprise internet in 10 working days while you wait for Fibre. Stays on as permanent failover.
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>

            <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {connectivityServices.map((service, i) => (
                <motion.div key={service.title} variants={fadeUp} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
                  <Link to={service.link} className="group block">
                    <div className="relative overflow-hidden border border-white/10 bg-white/[0.03]" style={cornerCut}>
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl text-white mb-2 group-hover:text-primary transition-colors font-semibold">{service.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-widest group-hover:gap-2 transition-all">
                          {service.title} <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <AnimatedSection>
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span className="text-sm text-white/60">Supporting solutions:</span>
                <Link to="/business-wifi" className="text-sm text-primary hover:underline font-medium">Business WiFi</Link>
                <span className="text-white/20">|</span>
                <Link to="/unified-communications" className="text-sm text-primary hover:underline font-medium">Unified Communications</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ConnectorLine />

        {/* ── 7. CUSTOMER STORY — pull-quote layered over visual ───────── */}
        <section className="relative bg-background py-24 md:py-36 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <AnimatedSection className="lg:col-span-7 lg:order-2 relative">
                <div className="relative lg:-ml-16">
                  <FibreVisual variant="b" className="aspect-[5/4]" />
                  <div className="absolute inset-0" style={cornerCut}>
                    <FibreVisual variant="b" className="w-full h-full" />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="lg:col-span-5 lg:order-1 relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Customer Stories</p>
                <Link to="/customers/mcgee-construction" className="group block">
                  <blockquote className="text-3xl sm:text-4xl text-foreground font-medium leading-[1.15] mb-8 tracking-tight">
                    <span className="text-primary text-5xl leading-none">"</span>We got live connectivity in a week. No months of waiting, no huge installation bills.<span className="text-primary text-5xl leading-none">"</span>
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-foreground font-semibold">Chris Pyne</p>
                      <p className="text-sm text-muted-foreground">Head of IT, McGee Construction</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-widest group-hover:gap-2 transition-all">
                      Read the story <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 8. SECTORS — staggered card grid ─────────────────────────── */}
        <section className="relative bg-surface-dark py-24 md:py-36 overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 h-px w-1/2 bg-gradient-to-l from-primary to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mb-16">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Sectors We Serve</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-medium leading-[1.05] tracking-tight">
                  Built for businesses <span className="text-primary">Fibre leaves behind.</span>
                </h2>
                <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
                  Construction sites that move every few months. Multi-site rollouts on impossible timelines. Business parks where every unit needs connectivity from day one. We've solved them all.
                </p>
              </div>
            </AnimatedSection>
            <motion.div className="grid gap-5 grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {sectors.map((sector, i) => (
                <motion.div key={sector.title + i} variants={fadeUp} className={i % 2 === 1 ? "lg:translate-y-12" : ""}>
                  <Link to={sector.link} className="group block overflow-hidden border border-white/10 bg-white/[0.03] hover:border-primary/50 transition-colors" style={cornerCut}>
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-semibold text-base sm:text-lg leading-tight mb-2">{sector.title}</h3>
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold uppercase tracking-widest group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 9. ISP & WHOLESALE BAND — bold primary with overlap ─────── */}
        <section className="relative bg-primary text-primary-foreground py-28 md:py-36 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(ellipse at 80% 20%, hsl(195 100% 60% / 0.5), transparent 50%), radial-gradient(ellipse at 10% 80%, hsl(220 100% 30% / 0.5), transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <AnimatedSection className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-5">For ISPs, MSPs &amp; Resellers</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-medium leading-[1.05] tracking-tight">
                  Run an ISP or MSP? <span className="text-white/70">We're the infrastructure partner behind the brand.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
                  Integra gives ISPs, MSPs and resellers enterprise connectivity to deliver under their own brand — survey, install, and support handled, live in 10 working days. You keep the customer and the margin.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-medium h-14 px-10 text-base bg-transparent" style={cornerCutTL}>
                    <Link to="/wholesale" className="inline-flex items-center gap-2">
                      See how wholesale works <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection className="lg:col-span-4">
                <div className="bg-surface-dark text-white p-8 lg:translate-x-6" style={cornerCut}>
                  <p className="text-6xl font-medium text-primary leading-none mb-3">99%</p>
                  <p className="text-sm uppercase tracking-widest font-semibold text-white/70 mb-4">UK coverage, your brand</p>
                  <div className="h-px bg-white/15 my-4" />
                  <p className="text-white/80 text-sm leading-relaxed">Survey, install, support. You keep the customer.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 10. FOUNDER SNIPPET — asymmetric layered ─────────────────── */}
        <section className="relative bg-background py-24 md:py-36 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <AnimatedSection className="lg:col-span-5 relative">
                <div className="relative lg:-ml-12">
                  <FibreVisual variant="c" className="aspect-[4/5]" />
                  <div className="absolute inset-0" style={cornerCut}>
                    <FibreVisual variant="c" className="w-full h-full" />
                  </div>
                </div>
              </AnimatedSection>
              <div className="lg:col-span-7">
                <AnimatedSection>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Our Story</p>
                  <p className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] font-medium mb-10 tracking-tight">
                    Founded to solve a problem nobody else would touch. Today, <span className="text-primary">a business ISP with a bridging capability no one else has.</span>
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all">
                    Read our story <ArrowRight className="h-4 w-4" />
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <ConnectorLine />

        {/* ── 10.5 INSIGHTS PROMO BAND ─────────────────────────────────── */}
        <section className="bg-[hsl(220_30%_94%)] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Insights</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-medium leading-[1.05] tracking-tight">
                  Points of view <span className="text-primary">worth reading.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Where the lead times, trade-offs, and decisions behind business connectivity actually get worked through.
                </p>
              </div>
            </AnimatedSection>
            <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {insightArticles
                .filter((a) => ["cost-of-the-connectivity-gap", "decision-framework", "multi-site-estate"].includes(a.slug))
                .map((article, i) => (
                  <motion.div key={article.slug} variants={fadeUp} className={i === 1 ? "md:translate-y-8" : ""}>
                    <Link to={`/insights/${article.slug}`} className="group block bg-card border border-border p-7 h-full hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={cornerCut}>
                      <div className="flex items-center gap-2 mb-5">
                        <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                          <FileText className="h-3 w-3" />
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors font-semibold leading-snug">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
            <AnimatedSection>
              <div className="mt-16 text-center">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10 text-base" style={cornerCutTL}>
                    <Link to="/insights" className="inline-flex items-center gap-2">
                      Explore all insights <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 11. FINAL CTA ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-surface-dark py-28 md:py-40">
          <FibreVisual variant="a" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/70 to-surface-dark/40" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 font-medium leading-[0.95] tracking-tight">
                Stop waiting. <span className="text-primary">Get online.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
                Tell us where your sites are and what you've got coming. We'll show you what we can deliver — and how fast.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10 text-base" style={cornerCutTL}>
                    <Link to="/check">Check Availability</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:border-white hover:bg-white/10 font-medium h-14 px-10 text-base">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <PartnerLogoBar />

        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-heading-2 text-foreground text-center mb-6 font-medium">Business connectivity across the UK</h2>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>Integra Networks is a UK B2B internet provider built for multi-site businesses. We deliver leased lines, SoGEA, and managed internet — the same Fibre destination as any major ISP — alongside Integra Bridge, the only product that gets you online in 10 working days while permanent Fibre is being built.</p>
                <p>Whether you're rolling out connectivity across a portfolio of construction sites, business parks, or industrial and retail estates, we engineer resilient networks with SLA-backed uptime, proactive monitoring, and UK-based engineering support on every call.</p>
                <p>Our coverage spans 99% of the UK, including London, the South East, the South West, the Midlands, the North West, and Yorkshire. Every deployment starts with a desktop survey from our engineering team, so you know exactly what bearer mix and SLA fits your sites before anything goes live.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HomeV2;
