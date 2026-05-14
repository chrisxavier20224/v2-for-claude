import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import StructuredData from "@/components/shared/StructuredData";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { ArrowRight, Globe, Handshake, Headphones, Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import PartnerLogoBar from "@/components/shared/PartnerLogoBar";

// Hero
import heroImg from "@/assets/hero-home.webp";

// Connectivity service images
import sdwanImg from "@/assets/sectors/rural-sme-hero.webp";
import leasedImg from "@/assets/connectivity/leased-lines-hero.webp";
import bridgeImg from "@/assets/connectivity/bridge-hero.webp";
import fibreImg from "@/assets/sectors/fibre-building-hero.webp";
import bpImg from "@/assets/sectors/business-parks-hero.webp";

// WiFi / Supporting
import businessWifiImg from "@/assets/connectivity/business-wifi-hero.jpg";
import ucImg from "@/assets/connectivity/unified-comms-hero.webp";

// Sector images
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

const aboutPoints = [
  {
    icon: Lightbulb,
    title: "Online in days, not months",
    description: "No excess construction charges, no 8-week wait. Integra Bridge bonds satellite and cellular to get your site live while the fibre's still being built.",
  },
  {
    icon: Users,
    title: "99% UK coverage",
    description: "Multi-bearer connectivity works anywhere with a mobile signal or clear sky. Construction sites, business parks, multi-site rollouts — we've connected them all.",
  },
  {
    icon: Headphones,
    title: "Real UK engineers, not a call centre",
    description: "When something needs sorting, you speak to the engineers who built your network. No ticket queues, no offshore support.",
  },
];

const connectivityServices = [
  {
    title: "Leased Lines",
    description: "Dedicated fibre, symmetric speeds, guaranteed SLA. The gold standard for businesses that can't afford downtime.",
    img: leasedImg,
    link: "/connectivity/leased-lines",
  },
  {
    title: "SoGEA",
    description: "Single Order Generic Ethernet Access. Fibre to the premises without the phone line. Fast, reliable, and cost-effective for modern offices.",
    img: fibreImg,
    link: "/connectivity/so-gea",
  },
  {
    title: "Managed Internet",
    description: "Fully managed business internet with proactive monitoring, UK support, and guaranteed uptime. We handle the network so you handle your business.",
    img: bpImg,
    link: "/connectivity/managed-internet",
  },
  {
    title: "Integra SD-WAN",
    description: "Satellite + cellular, bonded together. 100–350Mbps where fibre doesn't reach. Automatic failover keeps you online even when one connection drops.",
    img: sdwanImg,
    link: "/connectivity/integra-sd-wan",
  },
];

const sectors = [
  { title: "Construction", img: constructionImg, link: "/sectors/construction-sites" },
  { title: "Rural SMEs", img: ruralImg, link: "/sectors/rural-smes" },
  { title: "Business Parks", img: bpImg, link: "/sectors/business-parks" },
  { title: "Multi-Site Retail & Industrial", img: bpImg, link: "/sectors/business-parks" },
];

const locations = [
  { title: "North West", link: "/locations/rural-broadband-north-west" },
  { title: "Essex & Herts", link: "/locations/rural-broadband-essex-hertfordshire" },
  { title: "Sussex & Surrey", link: "/locations/rural-broadband-sussex-surrey" },
  { title: "Kent", link: "/locations/rural-broadband-kent" },
  { title: "Somerset & Devon", link: "/locations/rural-broadband-somerset-devon" },
  { title: "Yorkshire", link: "/locations/rural-broadband-yorkshire" },
  { title: "London Construction", link: "/locations/construction-site-broadband-london" },
  { title: "Cotswolds", link: "/locations/rural-broadband-cotswolds" },
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
  sameAs: [
    "https://www.linkedin.com/company/integra-networks"
  ],
};

const Index = () => {
  return (
    <>
      <SEO
        title="Business Connectivity & Internet Bridge — Integra Networks"
        description="B2B internet provider for multi-site businesses. Leased lines, SoGEA, and Integra Bridge — get online in 10 days while you wait for fibre. UK engineers. SLA-backed."
        keywords="business internet, leased lines UK, Integra Bridge, business broadband, multi-site connectivity, SoGEA, SD-WAN"
        url="/"
      />
      <StructuredData />
      <SchemaMarkup data={organizationSchema} />
      <PageLayout>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Integra Networks fibre connectivity" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
            <AnimatedSection>
              <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
                We'll get you fibre. While you wait, we'll get you online.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Leased lines, SoGEA, managed internet — the same fibre destination as any major ISP. Plus Integra Bridge: enterprise-grade connectivity in days, while your fibre's being built.
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
                  { icon: Zap, label: "Online in days, not weeks" },
                  { icon: Users, label: "Real UK engineers, not a call centre" },
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

        <CustomerLogoBar />

        {/* ── ABOUT ─────────────────────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Integra</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                The opposite of waiting 8 weeks for BT.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                We get multi-site businesses connected where and when traditional broadband can't — 99% UK coverage, rapid deployment, real engineers on every call.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {aboutPoints.map((point) => (
                <motion.div key={point.title} variants={fadeUp} className="text-center">
                  <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                    <point.icon className="h-10 w-10" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-heading-3 text-foreground mb-3 font-medium">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── BRIDGE USP ─────────────────────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The USP</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6 font-medium">
                One thing no other ISP has: the ability to bridge the gap.
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed max-w-3xl mx-auto mb-10">
                Every business waiting on fibre faces the same dead zone — eight weeks or more between signing and going live. Integra Bridge closes it. Bonded Starlink and 5G/4G, delivered over Layer 2 from our data centre, gives you enterprise-grade internet in around 10 days. When your fibre lands, Bridge stays on as permanent failover.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                  <Link to="/connectivity/integra-bridge" className="inline-flex items-center gap-2">
                    How Integra Bridge works <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
      </section>

      {/* ── ISP & WHOLESALE BAND ────────────────────────────────────── */}
      <section className="bg-primary/5 border-y border-primary/10 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For ISPs &amp; Resellers</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6 font-medium">
              Run an ISP? We're the infrastructure partner behind the brand.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
              Integra gives ISPs and resellers enterprise connectivity to deliver under their own brand — survey, install, and support handled, live in 14 days. You keep the customer and the margin.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                <Link to="/wholesale" className="inline-flex items-center gap-2">
                  See how wholesale works <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(216 100% 50% / 0.05)" toColor="hsl(0 0% 100%)" />

        {/* ── CUSTOMER STORY (McGee) ────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-4">Customer Stories</p>
              <Link to="/customers/mcgee-construction" className="group block">
                <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 hover:border-primary/40 transition-colors">
                  <blockquote className="text-2xl sm:text-3xl text-foreground font-medium leading-snug mb-6">
                    "We got live connectivity in a week. No months of waiting, no huge installation bills."
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-foreground font-medium">Chris Pyne</p>
                      <p className="text-sm text-muted-foreground">Head of IT, McGee Construction</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                      Read the story <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FOUNDER SNIPPET ───────────────────────────────────────────── */}
        <section className="bg-background pb-20 md:pb-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <div className="rounded-2xl bg-primary/5 border border-primary/15 px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-center sm:text-left">
                <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-2xl">
                  Founded to solve a problem nobody else would touch. Today, a business ISP with a bridging capability no one else has.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide whitespace-nowrap hover:gap-3 transition-all">
                  Our story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── INTERNET CONNECTIVITY ─────────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Internet Connectivity</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                Business connectivity, plus the one thing nobody else has.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                Leased lines, SoGEA, and managed internet — the same destination as any major ISP. Plus Integra Bridge: the only product that gets you online in days, then stays on as permanent failover.
              </p>
            </AnimatedSection>

            {/* Featured — Integra Bridge */}
            <AnimatedSection>
              <Link to="/connectivity/integra-bridge" className="group block mb-8">
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
                    <img
                      src={bridgeImg}
                      alt="Integra Bridge"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
                    <span className="inline-block w-fit rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-3">
                      Featured
                    </span>
                    <h3 className="text-2xl sm:text-3xl text-white font-medium mb-2">
                      Integra Bridge
                    </h3>
                    <p className="text-white/80 max-w-xl text-base sm:text-lg leading-relaxed mb-4">
                      Enterprise internet in ~10 days while you wait for fibre. Stays on as permanent failover.
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>

            {/* Standard cards */}
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

            {/* Supporting solutions */}
            <AnimatedSection>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span className="text-sm text-surface-dark-muted">Supporting solutions:</span>
                <Link to="/connectivity/business-wifi" className="text-sm text-primary hover:underline font-medium">Business WiFi</Link>
                <span className="text-white/20">|</span>
                <Link to="/connectivity/unified-communications" className="text-sm text-primary hover:underline font-medium">Unified Communications</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        {/* ── SECTORS ──────────────────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Sectors We Serve</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                Built for businesses fibre leaves behind.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Construction sites that move every 6 months. Farms with no line of sight. Business parks with 30 tenants sharing one connection. We've solved them all.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-6 grid-cols-2 sm:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {sectors.map((sector) => (
                <motion.div key={sector.title} variants={fadeUp}>
                  <Link to={sector.link} className="group block">
                    <motion.div className="rounded-2xl overflow-hidden aspect-[3/4]" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                      <div className="relative w-full h-full">
                        <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-medium text-sm sm:text-base">{sector.title}</h3>
                          <span className="inline-flex items-center gap-1 text-white/70 text-xs font-medium mt-1 group-hover:text-white transition-colors">
                            Learn More <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── LOCATIONS ──────────────────────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Local Coverage</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
                Coverage across the UK.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                From the North West to the South East, we've connected communities, farms, and businesses in rural locations nobody else could reach.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {locations.map((location) => (
                <motion.div key={location.title} variants={fadeUp}>
                  <Link to={location.link} className="group block">
                    <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10 hover:border-primary/30 transition-all">
                      <h3 className="text-surface-dark-foreground font-medium text-sm">{location.title}</h3>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-2 group-hover:gap-2 transition-all">
                        View <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        <PartnerLogoBar />

        {/* ── SEO CONTENT ──────────────────────────────────────────────── */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-heading-2 text-foreground text-center mb-6 font-medium">
                Business connectivity across the UK
              </h2>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>
                  Integra Networks is a UK B2B internet provider built for multi-site businesses. We deliver leased lines, SoGEA, and managed internet — the same fibre destination as any major ISP — alongside Integra Bridge, the only product that gets you online in around 10 days while permanent fibre is being built.
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
