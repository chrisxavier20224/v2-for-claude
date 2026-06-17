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

import heroAsset from "@/assets/sectors/heritage-hero.jpg.asset.json";
import heroDesktop from "@/assets/sectors/heritage-hero-1600.webp.asset.json";
import heroMobile from "@/assets/sectors/heritage-hero-800.webp.asset.json";
import alt1Asset from "@/assets/sectors/heritage-alt1.webp.asset.json";
import alt2Asset from "@/assets/sectors/heritage-alt2.webp.asset.json";
import cardSdwanAsset from "@/assets/sectors/heritage-card-sdwan.webp.asset.json";
import cardMidAsset from "@/assets/sectors/heritage-card-mid.webp.asset.json";
import cardThirdAsset from "@/assets/sectors/heritage-card-third.webp.asset.json";

const painPoints = [
  {
    "icon": Shield,
    "title": "Consent forbids drilling?",
    "description": "Non-invasive mounts and existing routes — no altering protected fabric."
  },
  {
    "icon": Wifi,
    "title": "Walls over a metre thick?",
    "description": "We design coverage around the structure, not through it."
  },
  {
    "icon": Radio,
    "title": "Heritage outbuildings to connect?",
    "description": "Point-to-point wireless links them with no cabling between."
  }
];

const benefitItems = ["Wi-Fi through thick-walled rooms","Payments & bookings for venues","CCTV for a high-value asset","Live in around 10 working days"];

const faqs = [
  {
    "q": "Will installation breach our listed-building consent?",
    "a": "No — non-invasive mounts and existing routes specifically to avoid altering protected fabric."
  },
  {
    "q": "Our walls are over a metre thick — can Wi-Fi work?",
    "a": "Yes — we design coverage around the structure with discreet access points and links."
  },
  {
    "q": "Can you connect a separate heritage outbuilding?",
    "a": "Yes — point-to-point wireless links outbuildings without cabling between them."
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
    headline: "Wireless core — no trenching.",
    description: "Bonded mobile and satellite into one permanent business connection, on non-penetrating mounts — no altering protected fabric.",
    footEyebrow: "Permanent · Bonded 4G/5G",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: cardSdwanAsset.url,
    alt: "Discreet antenna on a non-penetrating mount on a heritage roof",
  },
  {
    eyebrow: "Coverage",
    title: "Wireless Distribution",
    headline: "Reach outbuildings and wings.",
    description: "Point-to-point links between heritage outbuildings and the main house without cabling between — conservation-friendly throughout.",
    footEyebrow: "Point-to-point · Discreet mounts",
    cta: "Explore Wireless Distribution",
    href: "/wireless-distribution",
    image: cardMidAsset.url,
    alt: "Small dish on a leaded roof of a heritage building",
  },
  {
    eyebrow: "Indoor coverage",
    title: "Business Wi-Fi",
    headline: "Wi-Fi through metre-thick walls.",
    description: "Discreet access points designed around the structure, sized to thick-walled rooms, period spaces and visitor wings.",
    footEyebrow: "Indoor Wi-Fi · Heritage-friendly",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: cardThirdAsset.url,
    alt: "Discreet access point in a wood-panelled period room",
  }
];

const ListedHeritageBuildings = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Internet for Listed & Heritage Buildings"
        description="Connect listed and heritage buildings without altering protected fabric — no drilling, no trenching, conservation-friendly install in ~10 days."
        keywords="listed building internet, heritage wifi, conservation broadband, grade II wifi, historic building connectivity"
        url="/sectors/listed-heritage-buildings"
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
            alt="English Georgian listed manor house exterior"
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
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Listed &amp; Heritage Buildings
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Connect a listed building without altering it.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              The features that make a heritage building special are the ones that block modern internet &mdash; thick walls, minimal cabling, and consent rules that forbid drilling, visible cable or trenching. We connect them conservation-first, without touching protected fabric, live in around 10 working days.
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
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Connected the conservation-friendly way.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The core connection is wireless — bonded mobile and satellite over <Link to="/integra-sd-wan" className="text-primary hover:underline">Integra SD-WAN</Link> — so there's no trenching, with hardware on non-penetrating mounts and existing routes.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={alt1Asset.url} alt="Wood-panelled hall in a Georgian heritage building" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={alt2Asset.url} alt="Stone interior with thick walls and a discreet wireless device" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Radio className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Coverage designed around the building.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Discreet access points and point-to-point links via <Link to="/wireless-distribution" className="text-primary hover:underline">Wireless Distribution</Link> rather than signal punching through metre-thick walls.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroAsset.url})`, backgroundPosition: "right center" }}
        aria-label="A modern business in a historic building."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">A modern business in a historic building.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Built for venues, museums and country houses that need real connectivity without altering the fabric.
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
                Built for protected buildings.
              </h2>
              <p className="text-white/70">
                Bonded connectivity, discreet distribution and heritage-friendly Wi-Fi — engineered to leave the fabric untouched.
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from listed & heritage buildings</h2>
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
        sourceTag="sector-listed-heritage-buildings"
        heading="Connecting a listed or heritage building? Check what we can deliver at your site."
        subheading="Conservation-friendly connectivity, indoor Wi-Fi and CCTV — see what's deliverable at your exact location."
      />
    </PageLayout>
  );
};

export default ListedHeritageBuildings;
