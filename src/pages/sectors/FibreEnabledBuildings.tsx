import { Link } from "react-router-dom";
import { Building2, Zap, Network, Wifi, CircleCheckBig, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/fibre-building-hero.jpg";
import preconnectImg from "@/assets/sectors/fibre-preconnect.jpg";
import wifiDesignImg from "@/assets/sectors/fibre-wifi-design.jpg";
import ultrafastImg from "@/assets/sectors/fibre-ultrafast.jpg";
import officeWifiImg from "@/assets/sectors/fibre-office-wifi.jpg";
import royleFarmHero from "@/assets/case-studies/royle-farm-hero.jpg";

// ─── Pain-point cards ─────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: Zap,
    title: "Need immediate fibre internet for new tenants?",
    description: "Ensure immediate connectivity without delays or setup hassle. Move-in ready connectivity is just a click away.",
  },
  {
    icon: Network,
    title: "Challenges of fibre availability in remote locations?",
    description: "We bridge geographical gaps, bringing high-speed fibre connections where traditional ISPs don't reach.",
  },
  {
    icon: Building2,
    title: "ISP's won't pre-connect to your estate?",
    description: "Integra delivers fibre ahead of time, guaranteeing connectivity upon tenant occupancy, without dependence on ISP orders.",
  },
];

// ─── Benefits checklist ───────────────────────────────────────────────────────

const benefitItems = [
  "Guaranteed Symmetrical Speeds",
  "Transparent, Affordable Pricing",
  "Instant Hyperfast Internet Delivery",
];

// ─── Animation variants ──────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const checklistItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

// ─── Page Component ───────────────────────────────────────────────────────────

const FibreEnabledBuildings = () => {
  return (
    <PageLayout>
      <SEO
        title="Fibre Enabled Buildings — Full Fibre Networks for Business Parks"
        description="Comprehensive start-to-finish connectivity solutions ensuring immediate, ready-to-use internet for you and your tenants. Pre-connected hyperfast internet for business parks."
        keywords="fibre enabled buildings, business park internet, full fibre, pre-connected, ultrafast broadband, tenant connectivity"
        url="/sectors/fibre-enabled-buildings"
      />

      {/* ── FULL-BLEED HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Modern fibre-enabled business park building"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Fibre Enabled Buildings
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Full Fibre Networks for Business Parks
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Comprehensive, start-to-finish connectivity solutions ensuring immediate, ready-to-use internet for you and your tenants.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">
              Fibre Enabled Buildings
            </p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Future-proof business parks with pre-connected hyperfast internet
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Experience lightning-fast, pre-connected internet for your business park with Integra. Enjoy our custom system designs, flexible contracts, and superior connectivity.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div
                  className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <point.icon className="h-10 w-10" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-heading-3 text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── PREDELIVERED FIBRE ───────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Zap className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              Predelivered Fibre: Seamless Internet from Day One
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra delivers fibre to your estate, ensuring ready-to-use internet upon practical completion. Say goodbye to waiting for tenant orders and hello to immediate connectivity.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={preconnectImg}
                alt="Pre-connected fibre infrastructure at a business park"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── CUSTOM SYSTEM DESIGN ─────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={wifiDesignImg}
                  alt="Custom WiFi and network design by Integra"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Network className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">
                Custom Fibre System Design
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Integra designs and installs fibre systems tailored to each office unit. No mess, no fuss — just ready-to-go connections from a centralised meet-me room, minimising disruption.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── ULTRAFAST INTERNET ───────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Wifi className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              Ultrafast Internet, Ready On Arrival
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Boost occupancy and revenue with immediate ultrafast connectivity. Avoid internet uncertainty and let tenants begin work the moment they move in.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={ultrafastImg}
                alt="Ultrafast internet connectivity for business parks"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── INSTANT CONNECTIVITY ─────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={officeWifiImg}
                  alt="Office with instant WiFi connectivity"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">
                Instant Connectivity, Improved Occupancy
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Outperform the competition with instant, superfast connectivity. Offering immediate internet access is a game-changer — don't lose tenants over connectivity delays.
              </p>
              <motion.ul
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {benefitItems.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-surface-dark-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-surface-dark-foreground font-semibold text-sm">Flexible Contract Terms</p>
                    <p className="text-surface-dark-muted text-sm">We align our contracts to match your lease agreements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-surface-dark-foreground font-semibold text-sm">Free Hyperfast Guest WiFi</p>
                    <p className="text-surface-dark-muted text-sm">Complimentary hyperfast WiFi in communal areas such as reception.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY LINK ──────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <Section size="large">
        <AnimatedSection>
          <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={royleFarmHero}
                alt="Royle Farm Business Park aerial view"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
              <h2 className="text-heading-1 text-foreground mb-4">
                From Farm to Fibre: Royle Farm Business Park
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                See how Integra transformed connectivity at Royle Farm Business Park — from inadequate ADSL to 1000Mbps speeds, dramatically improving tenant satisfaction and occupancy.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                  <Link to="/customers/royle-farm" className="inline-flex items-center gap-2">
                    Read the Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <CustomerLogoBar />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Ready to future-proof your business park?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Get pre-connected hyperfast internet for your tenants with Integra's full fibre solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
                >
                  <Link to="/availability-checker">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="link" className="text-white hover:text-white/80 font-medium text-base">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default FibreEnabledBuildings;
