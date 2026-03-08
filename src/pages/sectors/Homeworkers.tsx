import { Link } from "react-router-dom";
import { WifiOff, MonitorPlay, CloudUpload, Router, Satellite, House, CircleCheckBig, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/homeworker-remote-work.avif";
import familyImg from "@/assets/sectors/homeworker-family-connectivity.avif";
import cottageImg from "@/assets/sectors/homeworker-cottage-broadband.avif";
import ruralImg from "@/assets/sectors/homeworker-rural-property.avif";
import wifiImg from "@/assets/sectors/homeworker-wifi-setup.avif";

// ─── Pain-point cards ─────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: WifiOff,
    title: "No Fibre at Your New Property?",
    description: "You've moved somewhere beautiful — but Openreach says fibre is years away. We bypass them entirely with cellular broadband.",
  },
  {
    icon: MonitorPlay,
    title: "Video Calls Freezing Mid-Sentence?",
    description: "Two 4G connections load-balanced means your Teams call stays stable even when the kids are streaming Netflix. Dual-network redundancy, not single-line hope.",
  },
  {
    icon: CloudUpload,
    title: "Uploads Taking Hours?",
    description: "Our SD-WAN delivers 100Mbps+ upload speeds. Send large files, back up to the cloud, and share screen without the spinning wheel.",
  },
];

// ─── Solution checklist ───────────────────────────────────────────────────────

const solutionItems = [
  "Installed in Under 14 Days — Single Visit",
  "Full WiFi Design — House, Office, Outbuildings",
  "UK-Based Support via Phone & WhatsApp",
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

const Homeworkers = () => {
  return (
    <PageLayout>
      <SEO
        title="Homeworkers — Up to 350Mbps Without Fibre, Installed in 14 Days"
        description="Your job depends on your internet. We deliver up to 350Mbps via cellular SD-WAN — no fibre required. Installed by our engineers in under 14 days."
        keywords="homeworker broadband, rural internet, SD-WAN, remote work connectivity, fibre alternative, work from home internet, rural broadband"
        url="/sectors/homeworkers"
      />

      {/* ── FULL-BLEED HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Remote worker using Integra SD-WAN at home"
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
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Homeworkers
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Your job depends on your internet. We fix that.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Up to 350Mbps via cellular SD-WAN. No fibre required. No Openreach delays. Installed by our engineers in under 14 days — so you can stop apologising for frozen video calls.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
              >
                <Link to="/contact">Get Connected</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

      {/* ── BYPASS OPENREACH ─────────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Router className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              No fibre? No problem.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use two 4G networks bonded together via Teltonika hardware — delivering fibre-like speeds without any physical cable to your property. Installed by our engineers in a single visit, typically within 14 days.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={familyImg}
                alt="Family using reliable home broadband powered by Integra"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* TOO FAR FROM EXCHANGE — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={cottageImg} alt="Rural cottage with reliable Integra broadband connectivity" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Miles from the exchange? That's our speciality.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Copper degrades over distance — that's why your ADSL crawls at 2Mbps. We don't use copper or fibre. Our cellular SD-WAN works anywhere with 4G coverage, which is 99% of the UK.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* ── FULL WIFI COVERAGE ───────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <House className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              WiFi that reaches the garden office.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design your WiFi network for your exact property — main house, garden office, outbuildings. UniFi or Ruckus access points, properly placed, with seamless roaming between rooms.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={ruralImg}
                alt="Rural property with full WiFi coverage from Integra"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── COMPLETE NETWORK SOLUTION ────────────────────────────────────── */}
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
                  src={wifiImg}
                  alt="Professional network installation by Integra engineers"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">
                Internet, WiFi, and support. All included.
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                We don't just deliver a connection and leave. Our engineers install the broadband, set up your WiFi network, and monitor everything 24/7 via Nimbus. If something drops, we know before you do.
              </p>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {solutionItems.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-surface-dark-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CustomerLogoBar />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Stop apologising for your internet.
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Up to 350Mbps. Installed in 14 days. No fibre required. No Openreach wait.
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

export default Homeworkers;
