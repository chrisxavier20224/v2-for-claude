import { Link } from "react-router-dom";
import { Building2, Zap, Network, Wifi, CircleCheckBig, ArrowLeft, ArrowRight, Radio, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
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
    title: "Tenants Demanding Internet on Day One?",
    description: "We install fibre infrastructure during your build phase. When tenants sign the lease, they plug in and they're online. No waiting for ISP orders.",
  },
  {
    icon: Network,
    title: "ISPs Won't Come to Your Location?",
    description: "Rural developments get overlooked by the big ISPs. We bring fibre ourselves — from centralised meet-me rooms to individual units, all managed in-house.",
  },
  {
    icon: Building2,
    title: "Losing Tenants Over Connectivity Delays?",
    description: "A 6-8 week ISP wait costs you rent. Pre-connected fibre eliminates that gap and makes your development more attractive than the competition.",
  },
];

// ─── Benefits checklist ───────────────────────────────────────────────────────

const benefitItems = [
  "Up to 1Gbps Symmetrical — Same Upload as Download",
  "Transparent Pricing with No Hidden Charges",
  "Internet Live from Practical Completion",
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

const relatedServices = [
  {
    title: "Business WiFi",
    description: "Professional WiFi design and installation for units.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
  {
    title: "Wireless Distribution",
    description: "Point-to-point links for multi-building connectivity.",
    href: "/connectivity/wireless-distribution",
    icon: Radio,
  },
  {
    title: "Leased Lines",
    description: "Dedicated fibre circuits for high-demand users.",
    href: "/connectivity/leased-lines",
    icon: Network,
  },
  {
    title: "Pricing",
    description: "View our transparent pricing and service tiers.",
    href: "/pricing",
    icon: Monitor,
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

const FibreEnabledBuildings = () => {
  return (
    <PageLayout>
      <SEO
        title="Fibre Enabled Buildings — Pre-Connected Internet for New Developments"
        description="Pre-deliver fibre to every unit before tenants arrive. Symmetrical speeds up to 1Gbps, custom system design, and contracts that match your lease terms."
        keywords="fibre enabled buildings, pre-connected fibre, new development internet, tenant connectivity, full fibre business park, ultrafast broadband"
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
              Fibre pre-delivered. Tenants online from day one.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              We install fibre to every unit before practical completion. When your tenants move in, internet is already live — symmetrical speeds up to 1Gbps, with contracts that match your lease terms.
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
              The connectivity problem developers didn't plan for.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              You've built the units. Now tenants want internet on move-in day — but ISPs take 6-8 weeks. We solve this by pre-delivering fibre infrastructure during construction, so every unit is live from practical completion.
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
              Fibre installed during construction. Live at handover.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with your construction programme to install fibre ducting and cabling during the build. By practical completion, every unit has a live connection — symmetrical speeds up to 1Gbps, ready for your tenants.
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
                Designed around your development, not a template.
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Every development is different. We design bespoke fibre networks from a centralised meet-me room to each unit — with dedicated circuits, not shared lines. Clean installation, minimal disruption, professional finish.
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
              Symmetrical speeds that attract premium tenants.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Up to 1Gbps symmetrical — same upload as download. That matters for businesses running VoIP, cloud apps, and video conferencing. It's a genuine differentiator when tenants compare your development to others.
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
                Higher occupancy. Less void time. Better tenants.
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Pre-connected developments fill faster because tenants can start working immediately. No 6-8 week ISP wait. No connection uncertainty. Just sign the lease and plug in.
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

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(0 0% 100%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore solutions for building-wide connectivity and tenant services."
      />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Pre-connect your development. Fill units faster.
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Fibre infrastructure installed during your build. Every unit online from day one.
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
