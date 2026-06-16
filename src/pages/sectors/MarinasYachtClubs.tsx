import { Link } from "react-router-dom";
import { Ban, CreditCard, Wifi, CircleCheckBig, ArrowLeft, ArrowRight, Network, Radio, Camera, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/marina-hero.jpg";
import pontoonsImg from "@/assets/sectors/marina-pontoons.jpg";
import rhycHero from "@/assets/case-studies/rhyc-hero.webp";
import rhycMarina from "@/assets/case-studies/rhyc-marina.jpg";

const painPoints = [
  {
    icon: Ban,
    title: "No one will quote your site?",
    description:
      "Waterside sites at the end of a long approach road get declined by fibre and leased-line providers. We specialise in exactly the locations no one else will touch.",
  },
  {
    icon: CreditCard,
    title: "Payments freezing mid-transaction?",
    description:
      "A single patchy mobile network drops card terminals and VoIP at the worst possible moment. Bonding multiple connections keeps them up.",
  },
  {
    icon: Wifi,
    title: "Berth-holders expect Wi-Fi?",
    description:
      "Members increasingly treat Wi-Fi across the pontoons as part of the mooring fee — not just a clubhouse perk.",
  },
];

const benefitItems = [
  "300Mbps+ delivered at Royal Harwich",
  "Card payments & VoIP that stay up",
  "CCTV across pontoons & fuel store",
  "Live in around 10 working days",
];

const faqs = [
  {
    q: "Fibre and leased-line providers won't quote our site — can you help?",
    a: "Yes. We specialise in waterside sites no one else will touch, using bonded mobile and satellite instead of fibre.",
  },
  {
    q: "Can the Wi-Fi reach the far pontoons?",
    a: "Yes. We extend coverage with point-to-point wireless and outdoor access points designed for the marine environment.",
  },
  {
    q: "Will card payments and VoIP actually be reliable?",
    a: "Bonding multiple connections is what makes them reliable — if one bearer dips, the others carry the load.",
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

const relatedServices = [
  {
    title: "Integra SD-WAN",
    description: "Bonded, fibre-class connectivity with a business SLA.",
    href: "/integra-sd-wan",
    icon: Network,
  },
  {
    title: "Wireless Distribution",
    description: "Point-to-point links to reach distant pontoons and boatyards.",
    href: "/wireless-distribution",
    icon: Radio,
  },
  {
    title: "CCTV",
    description: "Reliable monitoring across pontoons, fuel store and boat storage.",
    href: "/cctv",
    icon: Camera,
  },
];

const MarinasYachtClubs = () => {
  return (
    <PageLayout hideCTA>
      <SEO
        title="Internet for Marinas & Yacht Clubs"
        description="Fibre-class internet for marinas and yacht clubs where fibre never reached — berth Wi-Fi, fuel-dock payments and CCTV in around 10 working days."
        keywords="marina internet, yacht club broadband, waterside connectivity, berth wifi, marina wifi, fuel dock payments, bonded 4G/5G"
        url="/sectors/marinas-yacht-clubs"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Marina at the water's edge with moored yachts and pontoons" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Marinas &amp; Yacht Clubs
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Fibre never reached the water's edge.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Marinas and yacht clubs sit where fibre was never run and leased-line providers won't quote — at the end of a long approach road, signal scattered across a clubhouse, fuel dock and pontoons. We bond the mobile signal already covering your site into one fibre-class connection, so card payments, berth Wi-Fi and CCTV simply work. Most sites are live in around 10 working days.
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

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ALT SECTION 1 — Royal Harwich */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Anchor className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We connect the sites no one else will touch.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is exactly what we solved for the Royal Harwich Yacht Club. A survey found clear sightlines to multiple mobile towers others had missed, and we bonded 4G/5G over <Link to="/integra-sd-wan" className="text-primary hover:underline">Integra SD-WAN</Link> into a single connection delivering over 300Mbps — strong enough for card payments and VoIP that never drop. Antennas went on the roof, invisible from the clubhouse.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={rhycMarina} alt="Royal Harwich Yacht Club marina" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ALT SECTION 2 — Far pontoons */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={pontoonsImg} alt="Pontoons stretching across a marina toward distant moorings" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Radio className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Reach the far pontoons, not just the clubhouse.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Marinas sprawl across pontoons, fuel docks and boatyards that can stretch hundreds of metres. We extend coverage with <Link to="/wireless-distribution" className="text-primary hover:underline">Wireless Distribution</Link> and outdoor access points built for the marine environment, so Wi-Fi and payments work everywhere, not only at reception.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ALT SECTION 3 — Checklist */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <CircleCheckBig className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Payments and calls that don't drop.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bonding multiple connections is what makes them reliable: if one bearer dips, the others carry the load. With a business SLA and static IPs, the systems your revenue depends on stay online.
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
              <img src={rhycHero} alt="Royal Harwich Yacht Club waterside clubhouse" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CASE STUDY */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={rhycHero} alt="Royal Harwich Yacht Club" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">Royal Harwich Yacht Club: 300Mbps where fibre never reached</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  See how Integra connected a waterside club everyone else declined — bonded 4G/5G delivering over 300Mbps for card payments, VoIP and member Wi-Fi.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                    <Link to="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" className="inline-flex items-center gap-2">
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
        subheading="Built for waterside sites: bonded connectivity, distributed Wi-Fi and reliable monitoring."
      />

      {/* FAQ */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 text-center">FAQ</p>
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from marinas &amp; yacht clubs</h2>
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
        sourceTag="sector-marinas-yacht-clubs"
        heading="Connecting a marina or yacht club? Check what we can deliver at your site."
        subheading="Berth Wi-Fi, fuel-dock payments and CCTV — see what's deliverable at your exact location."
      />
    </PageLayout>
  );
};

export default MarinasYachtClubs;