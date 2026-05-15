import { Link } from "react-router-dom";
import { Truck, FileText, Zap, CircleCheckBig, ArrowLeft, Shield, ArrowRight, Wifi, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/construction-hero.webp";
import rapidImg from "@/assets/sectors/construction-rapid.jpg";
import supportImg from "@/assets/sectors/construction-support.jpg";
import sdwanImg from "@/assets/sectors/construction-sdwan.jpg";
import mcgeeHero from "@/assets/case-studies/mcgee-hero.webp";

const painPoints = [
  {
    icon: Truck,
    title: "Site Moving? Your Internet Moves Too.",
    description: "Our kit is portable. When you finish one phase and move to the next, we redeploy your connection — same day if needed.",
  },
  {
    icon: FileText,
    title: "Flexible contract terms — from short-term agreements up to 36 months.",
    description: "Construction projects don't run to ISP contract schedules. We offer monthly agreements that match your programme, not the other way around.",
  },
  {
    icon: Zap,
    title: "CCTV, BIM, and File Sharing Need Speed.",
    description: "Up to 500Mbps download and 100Mbps+ upload. Static IP included for remote CCTV access and secure file sharing from site.",
  },
];

const benefitItems = [
  "Encrypted Connection for BIM & File Sharing",
  "Deployed in Days — Redeployed When You Move",
  "Static IP for Remote CCTV & VPN Access",
];

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
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G connectivity deployed in days across multiple sites.",
    href: "/connectivity/integra-sd-wan",
    icon: Zap,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi for site offices and welfare facilities.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
  {
    title: "CCTV as a Service",
    description: "Remote site surveillance with static IP access.",
    href: "/connectivity/cctv",
    icon: Camera,
  },
];

const ConstructionSites = () => {
  return (
    <PageLayout>
      <SEO
        title="Construction Site Internet"
        description="Deployed in days. Monthly agreements, static IP for CCTV, portable kit."
        keywords="construction site internet, construction WiFi, site connectivity, SD-WAN construction, temporary internet, portable broadband, site office internet"
        url="/sectors/construction-sites"
      />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Construction site with high-speed connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Construction Sites
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Internet that deploys when you do.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              No utilities on site yet? No problem. We deploy high-speed internet to construction sites in days — with flexible monthly agreements and kit that moves when you do.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
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

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Zap className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Live in 10 working days.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Openreach won't come to a construction site without utilities. We will. Our engineers deploy cellular SD-WAN in days — two 4G/5G connections bonded for speed and reliability, with a secure WiFi network across your site office and welfare facilities. And when Fibre's on the way to your permanent site office, <Link to="/connectivity/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> keeps you live until it lands.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={rapidImg} alt="Rapid internet connectivity for construction sites" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* SUPPORT — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={supportImg} alt="UK-based support for construction connectivity" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">When it goes down, we pick up the phone.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                UK-based support via phone and WhatsApp, with 2-4 hour response times. We monitor your connection 24/7 via Integra Cloud and can fix most issues remotely before your site manager notices.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              Built for how construction actually works.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fibre-like speeds without digging a trench. Monthly agreements that flex with your programme. Static IP for CCTV remote access. And kit that redeploys to your next site.
            </p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              {benefitItems.map((item) => (
                <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={sdwanImg} alt="SD-WAN connectivity for construction sites" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Case study link */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={mcgeeHero} alt="McGee Construction site" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">McGee Construction: Keeping Sites Connected</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  See how Integra delivered reliable, high-speed connectivity across McGee's construction sites — enabling seamless operations and secure file sharing.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                    <Link to="/customers/mcgee-construction" className="inline-flex items-center gap-2">
                      Read the Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CustomerLogoBar />

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore solutions that enhance site connectivity and security."
      />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">Get your site online this week.</h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">Flexible monthly agreements. Portable kit. Deployed in 10 working days.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConstructionSites;
