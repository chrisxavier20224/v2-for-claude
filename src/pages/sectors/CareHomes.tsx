import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CircleCheckBig, Ban, CreditCard, Wifi, Shield, Radio, Satellite, Signal, Trees, Layers, Users, Video, Building2, Church, Tent, Tractor, Heart, Music, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroAsset from "@/assets/sectors/care-homes-hero.jpg.asset.json";
import alt1Asset from "@/assets/sectors/care-homes-alt1.jpg.asset.json";
import alt2Asset from "@/assets/sectors/care-homes-alt2.jpg.asset.json";
import cardSdwanAsset from "@/assets/sectors/care-homes-card-sdwan.jpg.asset.json";
import cardMidAsset from "@/assets/sectors/care-homes-card-mid.jpg.asset.json";
import cardThirdAsset from "@/assets/sectors/care-homes-card-third.jpg.asset.json";

const painPoints = [
  {
    "icon": Wifi,
    "title": "Thick-walled older building?",
    "description": "Whole-building Wi-Fi reaching every wing and floor."
  },
  {
    "icon": Layers,
    "title": "What if the line drops during telecare?",
    "description": "Bonding means no single point of failure."
  },
  {
    "icon": Shield,
    "title": "Sensitive resident data?",
    "description": "A managed firewall and segmented networks keep it protected."
  }
];

const benefitItems = ["Nurse-call & telecare uptime","eMAR & digital care records","Resident & family video calls","Live in around 10 working days"];

const faqs = [
  {
    "q": "Can the connection cover an older building with thick walls?",
    "a": "Yes — whole-building Wi-Fi designed to reach every wing and floor."
  },
  {
    "q": "What happens if the internet drops while telecare is running?",
    "a": "Bonding means no single point of failure — if one connection dips, others keep critical systems online."
  },
  {
    "q": "Is resident and family data kept secure?",
    "a": "Yes — a managed firewall and segmented networks keep resident systems and guest Wi-Fi separate and protected."
  }
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

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };
const checklistItem = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } } };

const serviceCards = [
  {
    eyebrow: "Integra",
    title: "SD-WAN",
    headline: "No single point of failure.",
    description: "Bonded mobile, satellite and any existing line into one permanent business connection with a business SLA and static IPs — built for clinical reliability.",
    footEyebrow: "Permanent · Bonded multi-bearer",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: cardSdwanAsset.url,
    alt: "Bonded cellular mast on a care home roof",
  },
  {
    eyebrow: "Security",
    title: "Managed Firewall",
    headline: "Protect resident and clinical data.",
    description: "A managed firewall and segmented networks separate resident systems from guest Wi-Fi — meeting data-protection expectations.",
    footEyebrow: "Managed security · Network segmentation",
    cta: "Explore Managed Firewall",
    href: "/managed-firewall",
    image: cardMidAsset.url,
    alt: "Managed firewall appliance in a network cabinet",
  },
  {
    eyebrow: "Coverage",
    title: "Business Wi-Fi",
    headline: "Wi-Fi to every wing and floor.",
    description: "Whole-building Wi-Fi designed for thick-walled older buildings — covers wings, communal lounges and resident rooms alike.",
    footEyebrow: "Whole-building Wi-Fi",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: cardThirdAsset.url,
    alt: "Wi-Fi access point in a care home corridor",
  }
];

const CareHomes = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Internet & Wi-Fi for Care Homes"
        description="Reliable, resilient internet for care homes — resident Wi-Fi, telecare, family video calls and CQC systems where fibre falls short, in ~10 days."
        keywords="care home internet, care home wifi, telecare connectivity, nurse call internet, eMAR connectivity"
        url="/sectors/care-homes"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
        <div className="absolute inset-0">
          <img src={heroAsset.url} alt="Exterior of a modern UK care home with landscaped gardens" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Care Homes
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Care can&apos;t wait for the internet to come back.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Care homes carry a heavier connectivity burden than almost any premises &mdash; nurse-call, telecare, eMAR and CQC systems all depend on the connection staying up, in older rural buildings with thick walls that block Wi-Fi between wings. We deliver speed and resilience, live in around 10 working days.
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
              <Heart className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Speed and, above all, resilience.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bond mobile, satellite and any existing line over <Link to="/integra-sd-wan" className="text-primary hover:underline">Integra SD-WAN</Link>, so if one bearer fails the others carry the load and critical systems stay online — with a business SLA and static IPs.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={alt1Asset.url} alt="Care home communal lounge with armchairs and TV" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={alt2Asset.url} alt="Care home nurses station with a network rack visible" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Shield className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Protected, segmented, compliant.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                A <Link to="/managed-firewall" className="text-primary hover:underline">Managed Firewall</Link> protects resident data and we segment resident systems from guest Wi-Fi.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroAsset.url})`, backgroundPosition: "right center" }}
        aria-label="Built for clinical reliability."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Built for clinical reliability.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Designed around CQC, telecare and eMAR — nothing depends on a single line.
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

      

      <CustomerLogoBar />

      {/* COMPLEMENTARY SERVICES */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Complementary services</p>
              <h2 className="text-heading-1 md:text-display-sm text-white mb-4">
                Built for clinical reliability.
              </h2>
              <p className="text-white/70">
                Bonded multi-bearer connectivity, managed security and whole-building Wi-Fi — engineered around CQC and resident safety.
              </p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {serviceCards.map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <Link
                  to={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from care homes</h2>
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
        sourceTag="sector-care-homes"
        heading="Running a care home? Check what we can deliver at your site."
        subheading="Telecare resilience, eMAR and family video calls — see what's deliverable at your exact location."
      />
    </PageLayout>
  );
};

export default CareHomes;
