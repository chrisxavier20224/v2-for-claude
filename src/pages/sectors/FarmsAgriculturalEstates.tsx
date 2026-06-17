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

import heroAsset from "@/assets/sectors/farms-hero.jpg.asset.json";
import heroDesktop from "@/assets/sectors/farms-hero-1600.webp.asset.json";
import heroMobile from "@/assets/sectors/farms-hero-800.webp.asset.json";
import alt1Asset from "@/assets/sectors/farms-alt1.webp.asset.json";
import alt2Asset from "@/assets/sectors/farms-alt2.webp.asset.json";
import cardSdwanAsset from "@/assets/sectors/farms-card-sdwan.webp.asset.json";
import cardMidAsset from "@/assets/sectors/farms-card-mid.webp.asset.json";
import cardThirdAsset from "@/assets/sectors/farms-card-third.webp.asset.json";
import caseStudyImage from "@/assets/case-studies/royle-farm-hero.webp";

const painPoints = [
  {
    "icon": Ban,
    "title": "£30k+ in excess construction charges?",
    "description": "We often find a fibre route that dodges them — at Royle Farm that cut costs over 80%."
  },
  {
    "icon": Radio,
    "title": "Barns far from the farmhouse?",
    "description": "Wireless links and CAT6 distribute the connection across the estate."
  },
  {
    "icon": Layers,
    "title": "Diversified lets and units?",
    "description": "We segment networks so lets, units and the farm run independently."
  }
];

const benefitItems = ["DEFRA/RPA & grant submissions","CCTV & livestock monitoring","Wi-Fi for lets, shops & units","Live in around 10 working days"];

const faqs = [
  {
    "q": "Our fibre quote was £30k+ in excess construction charges — is there an alternative?",
    "a": "Often yes — we frequently find a fibre route that dodges those charges (at Royle Farm it cut costs over 80%). Where fibre genuinely can't reach, we bond 4G/5G and satellite instead."
  },
  {
    "q": "Can you reach barns and units far from the farmhouse?",
    "a": "Yes — point-to-point wireless links distant buildings back to the main connection."
  },
  {
    "q": "Will it support farm diversification like lets and units?",
    "a": "Yes — we segment networks so holiday lets, business units and the farm run independently."
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
    eyebrow: "Smart fibre",
    title: "Leased Lines",
    headline: "The route others can't find.",
    description: "Exhaustive surveys that often find a fibre route which dodges the excess construction charges — turning six-figure quotes into five-figure investments.",
    footEyebrow: "Up to 1000Mbps · Business SLA",
    cta: "Explore Leased Lines",
    href: "/leased-lines",
    image: cardSdwanAsset.url,
    alt: "Fibre leased line install at a rural farm",
  },
  {
    eyebrow: "Estate coverage",
    title: "Wireless Distribution",
    headline: "Connect every barn and unit.",
    description: "Wireless links and CAT6 carry the connection from the farmhouse to barns, stores, lets and converted units hundreds of metres away.",
    footEyebrow: "Wireless + CAT6 · Estate-wide",
    cta: "Explore Wireless Distribution",
    href: "/wireless-distribution",
    image: cardMidAsset.url,
    alt: "Wireless dish on a farm barn aimed at the farmhouse",
  },
  {
    eyebrow: "Integra",
    title: "SD-WAN",
    headline: "Where fibre genuinely can't reach.",
    description: "Bonded 4G/5G and satellite over Integra SD-WAN — one permanent business connection with a business SLA and static IPs, for the deepest rural sites.",
    footEyebrow: "Bonded 4G/5G · Satellite",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: cardThirdAsset.url,
    alt: "Bonded cellular and satellite at a remote farm",
  }
];

const FarmsAgriculturalEstates = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Internet for Farms & Agricultural Estates"
        description="Fast, reliable internet for farms and rural estates — connect the farmhouse, barns, units and diversified businesses, in around 10 working days."
        keywords="farm internet, agricultural broadband, rural estate wifi, farm diversification connectivity, defra rpa internet"
        url="/sectors/farms-agricultural-estates"
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
            alt="UK working farm at golden hour with farmhouse and barns"
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
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Farms &amp; Agricultural Estates
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Fibre quoted £30k. We have a better way.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Farms sit miles from the exchange, with fibre quotes running to tens of thousands in excess construction charges &mdash; if anyone will quote at all. We find the route others miss &mdash; sometimes a smarter fibre route, sometimes bonded 4G/5G or satellite &mdash; then connect the whole estate, live in around 10 working days.
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
              <Tractor className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We find the route others can't.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Royle Farm Business Park, an exhaustive survey found a way to bring fibre in that dodged the excess construction charges every previous quote carried — cutting projected costs by over 80%, turning a six-figure problem into a five-figure investment. Tenants went from single-digit ADSL to up to 1000Mbps via <Link to="/leased-lines" className="text-primary hover:underline">Leased Lines</Link>.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={alt1Asset.url} alt="Farm office with computer showing spreadsheet" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={alt2Asset.url} alt="Converted stone barn with a point-to-point dish" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Radio className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Then we distribute it across the whole estate.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                <Link to="/wireless-distribution" className="text-primary hover:underline">Wireless Distribution</Link> and CAT6 carry the connection to barns, stores, workshops and converted units hundreds of metres from the farmhouse.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroAsset.url})`, backgroundPosition: "right center" }}
        aria-label="Everything a modern farm runs on."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Whatever your site needs.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Where fibre genuinely can't reach, we bond 4G/5G and satellite over Integra SD-WAN instead.
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
                <img src={caseStudyImage} alt="Royle Farm aerial view" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">Royle Farm Business Park: from single-digit ADSL to 1000Mbps.</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  An exhaustive survey found a fibre route that dodged the excess construction charges — cutting costs over 80% and connecting 30+ rural businesses.
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
                Built for working rural estates.
              </h2>
              <p className="text-white/70">
                Bonded connectivity, estate-wide distribution and satellite resilience — engineered for farmhouses, barns and diversified units.
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from farms & agricultural estates</h2>
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
        sourceTag="sector-farms-agricultural-estates"
        heading="Connecting a farm or rural estate? Check what we can deliver at your site."
        subheading="DEFRA paperwork, CCTV and diversified lets — see what's deliverable at your exact location."
      />
    </PageLayout>
  );
};

export default FarmsAgriculturalEstates;
