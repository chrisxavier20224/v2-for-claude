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

import heroAsset from "@/assets/sectors/village-halls-hero.jpg.asset.json";
import heroDesktop from "@/assets/sectors/village-halls-hero-1600.webp.asset.json";
import heroMobile from "@/assets/sectors/village-halls-hero-800.webp.asset.json";
import alt1Asset from "@/assets/sectors/village-halls-alt1.webp.asset.json";
import alt2Asset from "@/assets/sectors/village-halls-alt2.webp.asset.json";
import cardSdwanAsset from "@/assets/sectors/village-halls-card-sdwan.webp.asset.json";
import cardMidAsset from "@/assets/sectors/village-halls-card-mid.webp.asset.json";
import cardThirdAsset from "@/assets/sectors/village-halls-card-third.webp.asset.json";

const painPoints = [
  {
    "icon": CreditCard,
    "title": "Charity budget, no IT team?",
    "description": "A fixed monthly cost with no civils bill, built for committee-run halls."
  },
  {
    "icon": Users,
    "title": "A different group every night?",
    "description": "Monitored guest Wi-Fi with filtering, separate from admin."
  },
  {
    "icon": Wifi,
    "title": "Nothing better than a domestic line?",
    "description": "We deliver fibre-class speed where fibre never came."
  }
];

const benefitItems = ["Public guest Wi-Fi for hirers","Card payments for bar & events","CCTV for an empty building","Live in around 10 working days"];

const faqs = [
  {
    "q": "We're a charity with a tiny budget — can we afford this?",
    "a": "A fixed monthly cost with no civils bill, far cheaper than a fibre dig."
  },
  {
    "q": "Different groups use the hall every night — can we control access?",
    "a": "Yes — monitored guest Wi-Fi with filtering, separate from any admin network."
  },
  {
    "q": "Will it cover the whole building, including the main hall?",
    "a": "Yes — business Wi-Fi sized to your rooms covers kitchen, committee room and main hall."
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
    headline: "Fibre-class connectivity for a fixed monthly cost.",
    description: "Bonded mobile and satellite into one permanent business connection with a business SLA and static IPs — no civils bill.",
    footEyebrow: "Permanent · Bonded 4G/5G",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: cardSdwanAsset.url,
    alt: "Cellular tower visible over a village rooftop",
  },
  {
    eyebrow: "Coverage",
    title: "Business Wi-Fi",
    headline: "Cover every room in the hall.",
    description: "Access points sized to your kitchen, committee room and main hall — separate guest and admin networks for hirers and the committee.",
    footEyebrow: "Whole-building Wi-Fi · Guest network",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: cardMidAsset.url,
    alt: "Wi-Fi access point in a village hall main room",
  },
  {
    eyebrow: "Security",
    title: "CCTV",
    headline: "Eyes on an empty building.",
    description: "Reliable monitoring of the car park, entrance and main hall — backed by the same connection, with remote access for the committee.",
    footEyebrow: "On-site monitoring · Remote access",
    cta: "Explore CCTV",
    href: "/cctv",
    image: cardThirdAsset.url,
    alt: "CCTV camera on a village hall watching the car park",
  }
];

const VillageHallsCommunityCentres = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Internet for Village Halls & Community Centres"
        description="Bring fast, reliable Wi-Fi to your village hall or community centre — no fibre needed, run by volunteers, live in around 10 working days."
        keywords="village hall internet, community centre wifi, hall broadband, charity broadband, public guest wifi"
        url="/sectors/village-halls-community-centres"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
        <div className="absolute inset-0">
          <img
            src={heroDesktop.url}
            srcSet={`${heroMobile.url} 800w, ${heroDesktop.url} 1600w`}
            sizes="100vw"
            alt="Traditional English village hall exterior"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Village Halls &amp; Community Centres
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              The village hall fibre forgot.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Village halls sit in the villages fibre reaches last &mdash; a single building at the end of a lane, run by volunteers on charity budgets, hosting a different group every night who all expect working Wi-Fi and card payments. We connect them affordably, no trench, no five-figure civils quote, live in around 10 working days.
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
              <Building2 className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">A connection that just works — no building project.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bond the available 4G/5G (and satellite where signal is thin) over <Link to="/integra-sd-wan" className="text-primary hover:underline">Integra SD-WAN</Link> into one reliable, fibre-class line with a business SLA.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={alt1Asset.url} alt="Village hall main room with stacked chairs" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={alt2Asset.url} alt="Village hall kitchen serving hatch with Wi-Fi access point" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Wifi className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Cover every room, not just the office.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                We pair the connection with <Link to="/business-wifi" className="text-primary hover:underline">Business Wi-Fi</Link> sized to your rooms — kitchen, committee room and main hall alike.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroAsset.url})`, backgroundPosition: "right center" }}
        aria-label="Built for how a hall actually runs."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Built for how a hall actually runs.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Designed for committees, volunteer hirers and the bookings system you already use.
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
                Built for volunteer-run halls.
              </h2>
              <p className="text-white/70">
                Bonded connectivity, whole-building Wi-Fi and reliable monitoring — sized for committees, hirers and event nights.
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from village halls & community centres</h2>
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
        sourceTag="sector-village-halls-community-centres"
        heading="Running a village hall or community centre? Check what we can deliver at your site."
        subheading="Public guest Wi-Fi, card payments and CCTV — see what's deliverable at your exact location."
      />
    </PageLayout>
  );
};

export default VillageHallsCommunityCentres;
