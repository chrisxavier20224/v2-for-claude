import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PoundSterling, Navigation, WifiOff, CircleCheckBig, ArrowLeft, ArrowRight, Network, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/business-parks-hero.webp";
import fibreImg from "@/assets/sectors/business-parks-fibre.jpg";
import tenantsImg from "@/assets/sectors/business-parks-tenants.jpg";
import outdoorImg from "@/assets/sectors/business-parks-outdoor.jpg";
import royleFarmHero from "@/assets/case-studies/royle-farm-hero.webp";

const painPoints = [
  {
    icon: PoundSterling,
    title: "Quoted £20k+ by Openreach?",
    description: "Excess construction charges for business parks and industrial estates are often eye-watering. We've saved clients tens of thousands using creative alternatives — at Royle Farm Business Park, over £20,000.",
  },
  {
    icon: Navigation,
    title: "Not Sure What Your Tenants Need?",
    description: "We design the connectivity strategy for your park — fibre where it's available, microwave links where it's not, SD-WAN as a rapid fallback. One provider manages everything.",
  },
  {
    icon: WifiOff,
    title: "Empty Units Because of Bad Internet?",
    description: "Modern businesses won't sign a lease without fast internet. Pre-connected parks fill faster and retain tenants longer. We've seen it firsthand.",
  },
];

const benefitItems = [
  "Internet Live from Move-In Day",
  "Higher Occupancy Through Better Connectivity",
  "24/7 Monitoring & UK-Based Support",
];

const faqs = [
  {
    q: "Openreach quoted us £20k+ for fibre — is there really a cheaper way?",
    a: "Yes. We design around excess construction charges with a mix of fibre where it's economic and microwave/wireless links where it's not. At Royle Farm Business Park we delivered 1000Mbps for a fraction of the Openreach quote.",
  },
  {
    q: "Can tenants be online from move-in day?",
    a: "Yes. We pre-connect every unit so internet is live from day one — and Integra Bridge can carry a tenant from move-in while a permanent leased line is on order, then sit on as failover once it lands.",
  },
  {
    q: "Do you manage every unit, or just the network?",
    a: "Both. Tenant onboarding, network monitoring, support tickets and billing — one provider, one point of contact for every unit's connectivity.",
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
    title: "Bridge",
    headline: "Online while fibre is on order.",
    description: "Interim bonded connectivity that gets tenants online in days, then stays on as failover once the leased line lands.",
    footEyebrow: "Interim · Failover",
    cta: "Explore Integra Bridge",
    href: "/integra-bridge",
    image: fibreImg,
    alt: "Affordable fibre for business parks",
  },
  {
    eyebrow: "Coverage",
    title: "Wireless Distribution",
    headline: "Reach every unit on the park.",
    description: "Point-to-point and point-to-multipoint links that distribute one connection across distributed buildings — no civils trench per unit.",
    footEyebrow: "Multi-tenant · Distributed",
    cta: "Explore Wireless Distribution",
    href: "/wireless-distribution",
    image: tenantsImg,
    alt: "Attracting tenants with fast connectivity",
  },
  {
    eyebrow: "Common areas",
    title: "Business Wi-Fi",
    headline: "Wi-Fi for shared spaces and outdoor areas.",
    description: "Professional Wi-Fi engineered for common areas, reception, and outdoor zones across the park.",
    footEyebrow: "Indoor · Outdoor",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: outdoorImg,
    alt: "Outdoor Wi-Fi for business parks",
  },
];

const BusinessParks = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Business Park Internet"
        description="Business park & multi-tenant broadband. One bonded fibre + cellular network serving all units. SLA-backed uptime, central billing, instant onboarding."
        keywords="business park internet, business park connectivity, tenant broadband, fibre business park, SD-WAN, multi-tenant internet, managed connectivity"
        url="/sectors/business-parks"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business park with high-speed connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Business Parks
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Your tenants need internet on day one.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Openreach quoted you £20k+ in excess construction charges? We connect your business park for a fraction of the cost — fibre, microwave links, or bonded SD-WAN. Tenants get internet from move-in day.
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
              <PoundSterling className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We find ways around the big fibre quotes.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've saved clients tens of thousands using creative alternatives — at Royle Farm Business Park, Openreach quoted over £20,000 for fibre. We delivered 1000Mbps for a fraction of that cost using a combination of fibre and microwave links. We do the same for business parks, industrial estates, and multi-tenant commercial sites across the UK.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={fibreImg} alt="Affordable fibre for business parks" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={tenantsImg} alt="Attracting tenants with fast connectivity" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Network className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Fill units faster with pre-connected internet.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Tenants want to move in and start working immediately — not wait 6-8 weeks for an ISP installation. We pre-connect every unit so internet is live from day one. Fibre, microwave, or SD-WAN — whatever your park needs. When a leased line is on order, <Link to="/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> gets tenants online in days and stays on as failover once it lands.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist over hero */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "right center" }}
        aria-label="We manage the connectivity. You manage the park."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Building2 className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">We manage the connectivity. You manage the park.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Tenant onboarding, network monitoring, support tickets and billing — one point of contact for every unit's connectivity.
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
                <img src={royleFarmHero} alt="Royle Farm Business Park" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">Royle Farm Business Park: From ADSL to 1Gbps</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  See how Integra transformed connectivity at Royle Farm Business Park — from inadequate ADSL to 1000Mbps speeds.
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
              <h2 className="text-heading-1 md:text-display-sm text-white mb-4">Built for multi-tenant parks.</h2>
              <p className="text-white/70">
                Interim connectivity, wireless distribution across the estate, and pro-grade Wi-Fi for shared areas — engineered for parks with multiple tenants.
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from business park owners</h2>
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
        sourceTag="sector-business-parks"
        heading="Pre-connect your park. Fill units faster."
        subheading="One provider. Every unit. Internet from move-in day."
      />
    </PageLayout>
  );
};

export default BusinessParks;
