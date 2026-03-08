import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import StructuredData from "@/components/shared/StructuredData";
import { ArrowRight, Lightbulb, Users, Headphones } from "lucide-react";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

// Hero
import heroImg from "@/assets/hero-home.jpg";

// Connectivity service images
import sdwanImg from "@/assets/sectors/rural-sme-hero.jpg";
import fibreImg from "@/assets/sectors/fibre-building-hero.jpg";
import leasedImg from "@/assets/connectivity/leased-lines-sdwan.jpg";
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
    title: "Innovative Approaches to Connectivity Delivery",
    description: "We deliver connectivity solutions differently from most, which allows us to bring challenging sites on-net within weeks rather than months.",
  },
  {
    icon: Users,
    title: "Full Network Solution Specialists",
    description: "Beyond fast connectivity, we offer key services, managing and supporting clients with a single point of contact.",
  },
  {
    icon: Headphones,
    title: "A Dedicated UK Support Team",
    description: "Integra's UK-based team delivers tailored, secure solutions for diverse IT and network needs of SMEs and large organisations.",
  },
];

const connectivityServices = [
  {
    title: "Integra SD-WAN",
    description: "Experience superior internet speeds with our unique SD-WAN service. The perfect solution for businesses and homeworkers where Fibre is not available.",
    img: sdwanImg,
    link: "/integra-sd-wan",
  },
  {
    title: "Fibre Enabled Buildings",
    description: "Future-proof your development with our pre-connected hyperfast internet. Custom system designs and flexible contracts for immediate connectivity.",
    img: fibreImg,
    link: "/sectors/fibre-enabled-buildings",
  },
  {
    title: "Leased Line Connectivity",
    description: "Uninterrupted, high-speed fibre connectivity with our premium Leased Lines. Perfect for businesses prioritising their connectivity.",
    img: leasedImg,
    link: "/connectivity/leased-lines",
  },
  {
    title: "Managed SIM Services",
    description: "Transition from PSTN with our efficient, cost-saving Managed SIM Services. Ideal for SMEs and Commercial landlords.",
    img: simImg,
    link: "/connectivity/managed-sim-services",
  },
];

const wifiServices = [
  {
    title: "Business WiFi",
    description: "Boost your operations with our high-speed, secure Business WiFi solutions. Tailored for reliability, performance, and uninterrupted connectivity.",
    img: businessWifiImg,
    link: "/connectivity/business-wifi",
  },
  {
    title: "Home WiFi",
    description: "Experience seamless, high-speed home WiFi solutions. Ideal for remote workers demanding reliable connectivity.",
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

const Index = () => {
  return (
    <>
      <SEO
        title="Rural Connectivity Experts — Integra Networks"
        description="Don't let slow internet hold you back. Integra Networks delivers connectivity to even the most challenging locations. SD-WAN, Leased Lines, WiFi and more."
        keywords="rural broadband, SD-WAN, business connectivity, home WiFi, leased lines, managed SIM, construction WiFi"
        url="/"
      />
      <StructuredData />
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
                Rural Connectivity Experts: Connecting Businesses & Remote Workers
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
                Don't let slow internet hold you back. Integra Networks delivers connectivity to even the most challenging locations. Contact us today.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                  <Link to="/contact">Get In Touch</Link>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">About Integra Networks</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                Delivering connectivity to 99% of the UK in under 14 days
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Our passion lies in delivering connectivity to even the most challenging locations.
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
                Getting you online, fast…
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                At Integra, we take ownership of delivering internet connectivity. Our vast array of connectivity solutions allows us to bring properties online quickly, even in places where others say it isn't possible.
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">WiFi and Managed Networks</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                Fast internet is worthless without a bulletproof network to use it.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Connectivity is just one piece of the puzzle. For a fast, reliable network, you need robust infrastructure. We cater to everyone, from serious homeworkers to business parks and events.
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
                Evolved communication tools for a changed world.
              </h2>
              <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
                As the workplace evolves, so should your communication tools. Enhance productivity, flexibility, and collaboration with Integra's Unified Communications products.
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
                <p className="text-surface-dark-muted text-sm leading-relaxed mb-3">Seamless collaboration with Unified Communications. Facilitate remote work and business continuity.</p>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Some Sectors We Work In</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
                Solving connectivity challenges across various sectors.
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Our custom connectivity solutions empower our customers to work efficiently. We serve various sectors, each with unique challenges.
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(216 100% 50%)" />
        <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
          <AnimatedSection>
            <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Ready to get connected?</h2>
              <p className="mb-8 text-lg text-white/80">
                Submit your details and we'll get to work evaluating your requirements. Or call us on 0203 388 7111.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                    <Link to="/availability-checker">Check Availability</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </PageLayout>
    </>
  );
};

export default Index;
