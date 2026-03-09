import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import StructuredData from "@/components/shared/StructuredData";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { ArrowRight, Lightbulb, Users, Headphones } from "lucide-react";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import PartnerLogoBar from "@/components/shared/PartnerLogoBar";

// Hero
import heroImg from "@/assets/hero-home.jpg";

// Connectivity service images
import sdwanImg from "@/assets/sectors/rural-sme-hero.jpg";
import fibreImg from "@/assets/sectors/fibre-building-hero.jpg";
import leasedImg from "@/assets/connectivity/leased-lines-hero.jpg";
import simImg from "@/assets/connectivity/managed-sim-hero.jpg";

// WiFi images
import businessWifiImg from "@/assets/connectivity/business-wifi-hero.jpg";
import homeWifiImg from "@/assets/connectivity/home-wifi-hero.jpg";

// Unified Comms
import ucImg from "@/assets/connectivity/unified-comms-hero.jpg";

// Sector images
import constructionImg from "@/assets/sectors/construction-hero.jpg";
import homeworkerImg from "@/assets/sectors/homeworker-remote-work.avif";
import ruralImg from "@/assets/sectors/rural-sme-hero.jpg";
import airbnbImg from "@/assets/sectors/airbnb-hero.jpg";
import businessParkImg from "@/assets/sectors/business-parks-hero.jpg";

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
    title: "Installed in Under 14 Days",
    description: "No excess construction charges. No 8-week BT wait. We layer satellite, cellular, and fibre to get your site online in days, not months.",
  },
  {
    icon: Users,
    title: "99% UK Coverage",
    description: "Our SD-WAN technology works anywhere with a mobile signal or clear sky. Rural farms, construction sites, business parks — we've connected them all.",
  },
  {
    icon: Headphones,
    title: "Real UK Engineers, Not a Call Centre",
    description: "When something goes wrong, you speak to the engineers who built your network. No ticket queues, no offshore support, no runaround.",
  },
];

const connectivityServices = [
  {
    title: "Integra SD-WAN",
    description: "Satellite + cellular, bonded together. 100–350Mbps where fibre doesn't reach. Automatic failover keeps you online even when one connection drops.",
    img: sdwanImg,
    link: "/integra-sd-wan",
  },
  {
    title: "Fibre Enabled Buildings",
    description: "Pre-connected hyperfast internet for new developments. Custom system designs, flexible contracts, and immediate connectivity from day one.",
    img: fibreImg,
    link: "/sectors/fibre-enabled-buildings",
  },
  {
    title: "Leased Lines",
    description: "Dedicated fibre, symmetric speeds, guaranteed SLA. From £400/month. The gold standard for businesses that can't afford downtime.",
    img: leasedImg,
    link: "/connectivity/leased-lines",
  },
  {
    title: "Managed SIM Services",
    description: "Custom quoted. Temporary connectivity for construction sites, events, and IoT. PSTN switch-off ready. Deploy in days.",
    img: simImg,
    link: "/connectivity/managed-sim-services",
  },
];

const wifiServices = [
  {
    title: "Business WiFi",
    description: "Enterprise-grade mesh networks for offices, warehouses, and multi-building sites. Managed remotely via Integra Cloud with UK-based support.",
    img: businessWifiImg,
    link: "/connectivity/business-wifi",
  },
  {
    title: "Home WiFi",
    description: "Whole-home mesh WiFi that reaches every room. No dead spots, no buffering. Designed for remote workers who can't afford dropped calls.",
    img: homeWifiImg,
    link: "/connectivity/home-wifi",
  },
];

const sectors = [
  { title: "Construction", img: constructionImg, link: "/sectors/construction-sites" },
  { title: "Homeworkers", img: homeworkerImg, link: "/sectors/homeworkers" },
  { title: "Rural SMEs", img: ruralImg, link: "/sectors/rural-smes" },
  { title: "Airbnbs", img: airbnbImg, link: "/sectors/airbnbs" },
  { title: "Business Parks", img: businessParkImg, link: "/sectors/business-parks" },
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
        title="Business-Grade Connectivity Where You Need It — Integra Networks"
        description="We've connected 100+ rural properties with speeds up to 350Mbps in places where BT said it would take years. SD-WAN, Starlink, Leased Lines. Installed in 14 days."
        keywords="rural broadband, SD-WAN, Starlink SD-WAN, business connectivity, leased lines, construction WiFi, 4G/5G bonding, rural internet UK"
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Integra Networks</p>
              <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
                Business-grade connectivity where you need it most.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
                Your internet shouldn't depend on how close you are to London. We've connected 100+ rural properties with speeds up to 350Mbps — in places where BT said it would take years.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                  <Link to="/availability-checker">Check Your Availability</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <CustomerLogoBar />

        {/* ── ABOUT ─────────────────────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Integra</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                The opposite of waiting 8 weeks for BT.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                We connect businesses and remote workers where traditional broadband fails. 100+ installs, 99% UK coverage, real engineers on every call.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {aboutPoints.map((point) => (
                <motion.div key={point.title} variants={fadeUp} className="text-center">
                  <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                    <point.icon className="h-10 w-10" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-heading-3 text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── INTERNET CONNECTIVITY ─────────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Internet Connectivity</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
                Four ways to get you online. One that's perfect for you.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                We layer satellite, cellular, and fibre to bring properties online in under 14 days — even in places where BT, Virgin, and Vodafone say it isn't possible.
              </p>
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
                    <h3 className="text-heading-3 text-surface-dark-foreground mt-5 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-surface-dark-muted text-sm leading-relaxed mb-3">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                      {service.title} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        {/* ── WIFI & MANAGED NETWORKS ──────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">WiFi & Managed Networks</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                Fast internet is worthless without a bulletproof network.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Getting connected is step one. Distributing that connection across your home, office, or multi-building site — reliably — is step two. We handle both.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {wifiServices.map((service) => (
                <motion.div key={service.title} variants={fadeUp}>
                  <Link to={service.link} className="group block">
                    <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                    </motion.div>
                    <h3 className="text-heading-3 text-foreground mt-5 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                      {service.title} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

        {/* ── UNIFIED COMMUNICATIONS ───────────────────────────────────── */}
        <section className="bg-surface-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Unified Communications</p>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
                One platform for calls, video, and messaging.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                The PSTN switches off January 2027. Move to VoIP now and get better call quality, lower costs, and a system that works from any device, anywhere.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <Link to="/connectivity/unified-communications" className="group block max-w-2xl mx-auto">
                <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                  <div className="aspect-video overflow-hidden">
                    <img src={ucImg} alt="Unified Communications" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                </motion.div>
                <h3 className="text-heading-3 text-surface-dark-foreground mt-5 mb-2 group-hover:text-primary transition-colors">Unified Communications</h3>
                <p className="text-surface-dark-muted text-sm leading-relaxed mb-3">VoIP, video conferencing, and team messaging in one platform. Works over any Integra connection. PSTN switch-off ready.</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                  Unified Communications <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

        {/* ── SECTORS ──────────────────────────────────────────────────── */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Sectors We Serve</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                Built for the sites everyone else says no to.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Construction sites that move every 6 months. Farms with no line of sight. Business parks with 30 tenants sharing one connection. We've solved them all.
              </p>
            </AnimatedSection>
            <motion.div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              {sectors.map((sector) => (
                <motion.div key={sector.title} variants={fadeUp}>
                  <Link to={sector.link} className="group block">
                    <motion.div className="rounded-2xl overflow-hidden aspect-[3/4]" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                      <div className="relative w-full h-full">
                        <img src={sector.img} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-sm sm:text-base">{sector.title}</h3>
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

        <PartnerLogoBar />

        <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      </PageLayout>
    </>
  );
};

export default Index;
