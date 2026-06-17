import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Truck, FileText, Zap, CircleCheckBig, ArrowLeft, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
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

const faqs = [
  {
    q: "Openreach won't come to our site — how do you get us online?",
    a: "We deploy cellular SD-WAN in days — two 4G/5G connections bonded for speed and reliability, with secure Wi-Fi across your site office and welfare. No civils, no Openreach lead times.",
  },
  {
    q: "What happens when the site moves to the next phase?",
    a: "Our kit is portable. When you finish one phase and move to the next, we redeploy your connection — same day if needed.",
  },
  {
    q: "Can we use this for CCTV and BIM file sharing?",
    a: "Yes. Up to 500Mbps download and 100Mbps+ upload, with static IP included for remote CCTV access and secure file sharing from site.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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

const serviceCards = [
  {
    eyebrow: "Integra",
    title: "SD-WAN",
    headline: "Bonded 4G/5G, live in days.",
    description: "Two cellular connections bonded for speed and reliability — deployed in days, no civils, redeployed when the site moves.",
    footEyebrow: "Portable · Bonded",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: sdwanImg,
    alt: "SD-WAN connectivity for construction sites",
  },
  {
    eyebrow: "Coverage",
    title: "Business Wi-Fi",
    headline: "Wi-Fi across site offices and welfare.",
    description: "Professional Wi-Fi engineered for site offices, welfare facilities and outdoor cabins — coverage where the team actually works.",
    footEyebrow: "Site office · Welfare",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: rapidImg,
    alt: "Rapid internet connectivity for construction sites",
  },
  {
    eyebrow: "Security",
    title: "CCTV",
    headline: "Remote site surveillance.",
    description: "Static IP CCTV with remote access — keep eyes on the site after hours without a separate line.",
    footEyebrow: "Static IP · Remote access",
    cta: "Explore CCTV",
    href: "/cctv",
    image: supportImg,
    alt: "UK-based support for construction connectivity",
  },
];

const ConstructionSites = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Construction Site Internet"
        description="Construction site broadband live in 48 hours. Cellular SD-WAN that survives weather, dust, and rough deployment. CCTV-ready static IPs. Monthly contracts."
        keywords="construction site internet, construction Wi-Fi, site connectivity, SD-WAN construction, temporary internet, portable broadband, site office internet"
        url="/construction-site-broadband"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
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

      {/* PROBLEM CARDS */}
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

      {/* ALT SECTION 1 */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Zap className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Live in 10 working days.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Openreach won't come to a construction site without utilities. We will. Our engineers deploy cellular SD-WAN in days — two 4G/5G connections bonded for speed and reliability, with a secure Wi-Fi network across your site office and welfare facilities. And when fibre is on the way to your permanent site office, <Link to="/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> keeps you live until it lands.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={rapidImg} alt="Rapid internet connectivity for construction sites" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ALT SECTION 2 */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={sdwanImg} alt="SD-WAN connectivity for construction sites" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Shield className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">When it goes down, we pick up the phone.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                UK-based support via phone and WhatsApp, with 2-4 hour response times. We monitor your connection 24/7 via Integra Cloud and fix most issues remotely before your site manager notices.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist over hero */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "right center" }}
        aria-label="Built for how construction actually works."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Built for how construction actually works.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Fibre-like speeds without digging a trench. Flexible agreements that flex with your programme. Kit that redeploys to your next site.
              </p>
              <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                {benefitItems.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-6 w-6 text-primary-foreground bg-primary rounded-full p-1 flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDY */}
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

      {/* COMPLEMENTARY SERVICES */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Complementary services</p>
              <h2 className="text-heading-1 md:text-display-sm text-white mb-4">Built for sites without utilities.</h2>
              <p className="text-white/70">
                Bonded cellular, Wi-Fi across welfare and offices, and CCTV with remote access — deployed in days, redeployed when the site moves.
              </p>
            </div>
          </AnimatedSection>
          <motion.div className="grid gap-6 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {serviceCards.map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <Link to={card.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={card.image} alt={card.alt} width={1280} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-surface-dark/10" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">{card.eyebrow}</p>
                      <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{card.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{card.headline}</h3>
                    <p className="text-muted-foreground mb-6">{card.description}</p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{card.footEyebrow}</p>
                      <span className="inline-flex items-center text-primary group-hover:text-primary/80 font-medium">
                        {card.cta} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 text-center">FAQ</p>
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from construction sites</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f) => (
              <AnimatedSection key={f.q}>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="text-heading-3 text-foreground mb-3">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      <AvailabilityCheckerInline
        compact
        sourceTag="sector-construction-sites"
        heading="Get your site online this week."
        subheading="Flexible monthly agreements. Portable kit. Deployed in 10 working days."
      />
    </PageLayout>
  );
};

export default ConstructionSites;
