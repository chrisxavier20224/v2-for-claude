import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import StructuredData from "@/components/shared/StructuredData";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { ArrowRight, Globe, Lightbulb, Repeat, ShieldCheck, Users, Zap, FileText } from "lucide-react";
import { insightArticles } from "@/pages/insights/insightsData";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import PartnerLogoBar from "@/components/shared/PartnerLogoBar";

// Hero poster (used as <video> poster + reduced-motion fallback)
const heroPoster = "/video/hero-bg-poster.jpg";

// Connectivity service images
import sdwanImg from "@/assets/sectors/rural-sme-hero.webp";
import leasedImg from "@/assets/connectivity/leased-lines-hero.webp";
import bridgeImg from "@/assets/connectivity/bridge-hero.webp";
import fibreImg from "@/assets/sectors/fibre-building-hero.webp";
import bpImg from "@/assets/sectors/business-parks-hero.webp";

// Sector images
import constructionImg from "@/assets/sectors/construction-hero.webp";
import ruralImg from "@/assets/sectors/rural-sme-hero.webp";
import emptyOfficeAsset from "@/assets/empty-office.jpg.asset.json";
import londonSkylineAsset from "@/assets/london-skyline.jpg.asset.json";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

// Reusable labelled placeholder for swap-in images
const ImagePlaceholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl border-2 border-dashed border-border bg-muted flex items-center justify-center ${className}`}>
    <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider px-4 text-center">
      {label}
    </span>
  </div>
);

const aboutPoints = [
  {
    icon: Lightbulb,
    title: "Live while Fibre's still being built",
    description: "No excess construction charges, no 8-week wait. Integra Bridge bonds satellite and cellular so your site is operational long before the leased line arrives.",
  },
  {
    icon: Users,
    title: "99% UK coverage",
    description: "Multi-bearer connectivity works anywhere with a mobile signal or clear sky. Construction sites, business parks, multi-site rollouts — we've connected them all.",
  },
  {
    icon: Repeat,
    title: "Bridge today, Fibre tomorrow.",
    description: "When your leased line lands, Integra Bridge stays on as failover. One partner from temporary to permanent — no rip-and-replace.",
  },
];

const problemPoints = [
  {
    title: "A lead time you don't control",
    body: "Openreach sets the date, not you. Surveys, wayleaves, civils — every step adds weeks.",
  },
  {
    title: "A site that can't open",
    body: "No connectivity means no phones, no card payments, no systems. The space sits empty while the lease runs.",
  },
  {
    title: "A workaround that isn't working",
    body: "Consumer 4G routers and phone hotspots don't carry a business. They drop, they throttle, they make you look unready.",
  },
];

const connectivityServices = [
  {
    title: "Leased Lines",
    description: "Dedicated Fibre, symmetric speeds, guaranteed SLA. The gold standard for businesses that can't afford downtime.",
    img: leasedImg,
    link: "/leased-lines",
  },
  {
    title: "SoGEA",
    description: "Single Order Generic Ethernet Access. Fibre to the premises without the phone line. Fast, reliable, and cost-effective for modern offices.",
    img: fibreImg,
    link: "/sogea",
  },
  {
    title: "Managed Internet",
    description: "Fully managed business internet with proactive monitoring, UK support, and guaranteed uptime. We handle the network so you handle your business.",
    img: bpImg,
    link: "/managed-internet",
  },
  {
    title: "Integra SD-WAN",
    description: "Bonded multi-carrier 4G/5G connectivity — a five-tier range from single-network failover up to 500Mbps, engineered and monitored per site.",
    img: sdwanImg,
    link: "/integra-sd-wan",
  },
];

const sectors = [
  { title: "Construction", img: constructionImg, link: "/construction-site-broadband" },
  { title: "Rural SMEs", img: ruralImg, link: "/rural-business-broadband" },
  {
    title: "Business Parks & Multi-Site",
    img: bpImg,
    link: "/sectors/business-parks",
    description: "One network across business parks, retail estates and multi-site industrial portfolios.",
  },
];


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Integra Networks",
  url: "https://integra-networks.co.uk",
  logo: "https://integra-networks.co.uk/lovable-uploads/integra-logo.png",
  description: "UK business connectivity provider specialising in SD-WAN, leased lines, and managed network solutions",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 86-90 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-330-043-4904",
    contactType: "sales",
    areaServed: "GB",
    email: "sales@integra-networks.co.uk",
  },
  sameAs: ["https://www.linkedin.com/company/integra-networks"],
};

const Index = () => {
  return (
    <>
      <SEO
        title="Business Connectivity & Internet Bridge — Integra Networks"
        description="B2B internet provider for multi-site businesses. Leased lines, SoGEA, and Integra Bridge — get online in 10 working days while you wait for Fibre. UK engineers. SLA-backed."
        keywords="business internet, leased lines UK, Integra Bridge, business broadband, multi-site connectivity, SoGEA, SD-WAN"
        url="/"
      />
      <StructuredData />
      <SchemaMarkup data={organizationSchema} />
      <PageLayout>
        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroPoster}
              aria-hidden="true"
            >
              <source src="/video/hero-bg.webm" type="video/webm" />
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </video>
            <img
              src={heroPoster}
              alt="Integra Networks Fibre connectivity"
              className="hidden motion-reduce:block w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
            <AnimatedSection>
              <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
                We'll get you Fibre. While you wait, we'll get you online.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Leased lines, SoGEA, managed internet — the same Fibre destination as any major ISP. Plus Integra Bridge: enterprise-grade connectivity in days, while your Fibre's being built.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                    <Link to="/check">Check Availability</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:border-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Zap, label: "Live in 10 working days" },
                  { icon: Users, label: "Multi-bearer redundancy as standard" },
                  { icon: Globe, label: "99% UK coverage" },
                  { icon: ShieldCheck, label: "SLA-backed uptime" },
                ].map((vp) => (
                  <div key={vp.label} className="flex items-center gap-3">
                    <vp.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-white/80 font-medium leading-snug">{vp.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 2. LOGO STRIP ─────────────────────────────────────────────── */}
        <CustomerLogoBar />

        {/* ── 3. THE PROBLEM (split, image RIGHT) ───────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Problem</p>
                <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6 font-medium leading-tight">
                  The circuit's ordered. The clock's running. The project can't wait.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  You've done everything right. The leased line is ordered, the new site is signed, the team's ready to move. Then the install date comes back — around 10 weeks out. And there's nothing you can do about it except explain the delay to everyone waiting on you.
                </p>
                <ul className="space-y-6">
                  {problemPoints.map((p) => (
                    <li key={p.title} className="border-l-2 border-primary/40 pl-5">
                      <h3 className="text-foreground font-medium mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection>
                <img
                  src={emptyOfficeAsset.url}
                  alt="Empty office corridor with no internet connectivity"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── 4. BRIDGE USP (split, image LEFT) ─────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <img
                  src={londonSkylineAsset.url}
                  alt="London skyline at night representing always-on connectivity"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Solution</p>
                <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6 font-medium leading-tight">
                  One thing no other ISP has: the ability to bridge the gap.
                </h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-10">
                  Every business waiting on Fibre faces the same dead zone — around 10 weeks between signing and going live. Integra Bridge closes it. Bonded Starlink and 5G/4G, delivered over Layer 2 from our data centre, gives you enterprise-grade internet in 10 working days. When your Fibre lands, Bridge stays on as permanent failover.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                    <Link to="/integra-bridge" className="inline-flex items-center gap-2">
                      How Integra Bridge works <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        {/* ── 5. WHY INTEGRA (3-card row) ───────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Integra</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                10 days. Not 10 weeks.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                We get multi-site businesses connected where and when traditional broadband can't — 99% UK coverage, rapid deployment, and a clean path from temporary connectivity to permanent Fibre.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {aboutPoints.map((point) => (
                <motion.div key={point.title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                    <point.icon className="h-8 w-8" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-heading-3 text-foreground mb-3 font-medium">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── 6. INTERNET CONNECTIVITY ──────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Internet Connectivity</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                Business connectivity, plus the one thing nobody else has.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                We're a full-service business ISP — not just a workaround. The standard connectivity you'd expect, plus the one product no one else has.
              </p>
            </AnimatedSection>

            {/* Featured — Integra Bridge */}
            <AnimatedSection>
              <Link to="/integra-bridge" className="group block mb-8">
                <motion.div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                  <div className="aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
                    <img src={bridgeImg} alt="Integra Bridge" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
                    <span className="inline-block w-fit rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-3">Featured</span>
                    <h3 className="text-2xl sm:text-3xl text-white font-medium mb-2">Integra Bridge</h3>
                    <p className="text-white/80 max-w-xl text-base sm:text-lg leading-relaxed mb-4">
                      Enterprise internet in 10 working days while you wait for Fibre. Stays on as permanent failover.
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>

            <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {connectivityServices.map((service) => (
                <motion.div key={service.title} variants={fadeUp}>
                  <Link to={service.link} className="group block">
                    <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                    </motion.div>
                    <h3 className="text-heading-3 text-surface-dark-foreground mt-5 mb-2 group-hover:text-primary transition-colors font-medium">{service.title}</h3>
                    <p className="text-surface-dark-muted text-sm leading-relaxed mb-3">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                      {service.title} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <AnimatedSection>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span className="text-sm text-surface-dark-muted">Supporting solutions:</span>
                <Link to="/business-wifi" className="text-sm text-primary hover:underline font-medium">Business WiFi</Link>
                <span className="text-white/20">|</span>
                <Link to="/unified-communications" className="text-sm text-primary hover:underline font-medium">Unified Communications</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 8. SECTORS (card grid w/ images already) ──────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Sectors We Serve</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                Built for businesses Fibre leaves behind.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Construction sites that move every few months. Multi-site rollouts on impossible timelines. Business parks where every unit needs connectivity from day one. We've solved them all.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {sectors.map((sector) => (
                <motion.div key={sector.title} variants={fadeUp}>
                  <Link to={sector.link} className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-foreground font-medium text-sm sm:text-base">{sector.title}</h3>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold uppercase tracking-wide mt-2 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 9. ISP & WHOLESALE BAND (full-width) ──────────────────────── */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">For ISPs, MSPs &amp; Resellers</p>
              <h2 className="text-heading-1 md:text-display-sm text-white mb-6 font-medium">
                Run an ISP or MSP? We're the infrastructure partner behind the brand.
              </h2>
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
                Integra gives ISPs, MSPs and resellers enterprise connectivity to deliver under their own brand — survey, install, and support handled, live in 10 working days. You keep the customer and the margin.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-medium h-12 px-8 text-base">
                  <Link to="/wholesale" className="inline-flex items-center gap-2">
                    See how wholesale works <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 10.5 INSIGHTS PROMO BAND ─────────────────────────────────── */}
        <section className="bg-[hsl(220_25%_96%)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Insights</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4 font-medium">
                Points of view worth reading.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
                Where the lead times, trade-offs, and decisions behind business connectivity actually get worked through.
              </p>
            </AnimatedSection>

            <motion.div
              className="grid gap-6 grid-cols-1 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {insightArticles
                .filter((a) => ["cost-of-the-connectivity-gap", "decision-framework", "multi-site-estate"].includes(a.slug))
                .map((article) => (
                  <motion.div key={article.slug} variants={fadeUp}>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="group block rounded-2xl border border-border bg-card p-6 h-full hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide px-3 py-1">
                          <FileText className="h-3 w-3" />
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-heading-4 text-foreground mb-3 group-hover:text-primary transition-colors font-medium leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>

            <AnimatedSection>
              <div className="mt-12 text-center">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                    <Link to="/insights" className="inline-flex items-center gap-2">
                      Explore all insights <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 11. FINAL CTA (full-width, bold dark) ─────────────────────── */}
        <section className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-heading-1 md:text-display-sm text-white mb-6 font-medium">
                Stop waiting. Get online.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us where your sites are and what you've got coming. We'll show you what we can deliver — and how fast.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                    <Link to="/check">Check Availability</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:border-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        <PartnerLogoBar />

        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-heading-2 text-foreground text-center mb-6 font-medium">
                Business connectivity across the UK
              </h2>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>
                  Integra Networks is a UK B2B internet provider built for multi-site businesses. We deliver leased lines, SoGEA, and managed internet — the same Fibre destination as any major ISP — alongside Integra Bridge, the only product that gets you online in 10 working days while permanent Fibre is being built.
                </p>
                <p>
                  Whether you're rolling out connectivity across a portfolio of construction sites, business parks, or industrial and retail estates, we engineer resilient networks with SLA-backed uptime, proactive monitoring, and UK-based engineering support on every call.
                </p>
                <p>
                  Our coverage spans 99% of the UK, including London, the South East, the South West, the Midlands, the North West, and Yorkshire. Every deployment starts with a desktop survey from our engineering team, so you know exactly what bearer mix and SLA fits your sites before anything goes live.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      </PageLayout>
    </>
  );
};

export default Index;
