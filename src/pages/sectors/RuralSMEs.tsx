import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WifiOff, PoundSterling, Clock, CircleCheckBig, ArrowLeft, Network, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";

import heroImg from "@/assets/sectors/rural-sme-hero.webp";
import copperImg from "@/assets/sectors/rural-sme-copper.jpg";
import installImg from "@/assets/sectors/rural-sme-install.jpg";
import paymentsImg from "@/assets/sectors/rural-sme-payments.jpg";
import carbeeHero from "@/assets/case-studies/carbee-hero.webp";
import FurtherReading from "@/components/blog/FurtherReading";

const painPoints = [
  {
    icon: WifiOff,
    title: "Stacking ADSL Lines That Still Don't Work?",
    description: "Two or three copper lines bonded together still give you 10Mbps on a good day. We replace them all with a single connection delivering up to 500Mbps.",
  },
  {
    icon: PoundSterling,
    title: "Quoted £20k+ for fibre Installation?",
    description: "Openreach excess construction charges for rural properties are often £15-50k. Our SD-WAN delivers similar speeds for a fraction of the cost.",
  },
  {
    icon: Clock,
    title: "Waiting Months for a Leased Line?",
    description: "Ordered fibre or a leased line and staring down a 10-week install window? Integra Bridge gets your site online in days — and stays on as failover once your line lands.",
  },
];

const benefitItems = [
  "Up to 500Mbps via Cellular SD-WAN",
  "Installed by Our Engineers in 10 working days",
  "99.5% Uptime SLA with Phone & WhatsApp Support",
];

const faqs = [
  {
    q: "We've been stacking ADSL lines for years — what changes with SD-WAN?",
    a: "Two or three bonded copper lines still give you ~10Mbps on a good day. We replace all of them with a single cellular SD-WAN connection delivering up to 500Mbps — no more contention, no more copper.",
  },
  {
    q: "Openreach quoted us £20k+ for fibre. Do we have to pay it?",
    a: "No. Our cellular SD-WAN delivers comparable speeds in 10 working days for a fraction of an excess construction charge — and Integra Bridge keeps you live for the months you'd otherwise wait for fibre.",
  },
  {
    q: "What about the PSTN switch-off in January 2027?",
    a: "We handle the migration. Our SD-WAN replaces copper now and we move your voice lines to VoIP before the switch-off — one provider, one bill, future-proofed.",
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
    headline: "Bonded 4G/5G with a 99.5% SLA.",
    description: "Two cellular operators bonded for speed and resilience — up to 500Mbps, installed in 10 working days, no fibre required.",
    footEyebrow: "Permanent · Bonded 4G/5G",
    cta: "Explore Integra SD-WAN",
    href: "/integra-sd-wan",
    image: copperImg,
    alt: "Fast internet replacing traditional ADSL",
  },
  {
    eyebrow: "Satellite",
    title: "Starlink Installation",
    headline: "Where cellular won't reach.",
    description: "Professional Starlink deployment as a standalone connection or as resilience on top of bonded cellular for the most remote rural sites.",
    footEyebrow: "Satellite · Remote sites",
    cta: "Explore Starlink Installation",
    href: "/starlink-installation",
    image: paymentsImg,
    alt: "Reliable internet for card payments",
  },
  {
    eyebrow: "Coverage",
    title: "Business Wi-Fi",
    headline: "Extend coverage across the premises.",
    description: "Professional Wi-Fi engineered for offices, outbuildings and outdoor yards — one network, full coverage.",
    footEyebrow: "Indoor · Outbuildings",
    cta: "Explore Business Wi-Fi",
    href: "/business-wifi",
    image: installImg,
    alt: "Expert network installation by Integra",
  },
];

const RuralSMEs = () => {
  return (
    <PageLayout hideCTA mainClassName="bg-surface-dark">
      <SEO
        title="Rural SMEs Connectivity — Farms & Rural Businesses | Integra"
        description="Rural SME broadband alternative to fibre. Up to 500Mbps via SD-WAN, live in 10 working days. Built for farms, offices, and rural businesses."
        keywords="rural SME internet, rural business broadband, SD-WAN rural, small business connectivity, PSTN switch off, rural broadband alternative"
        url="/rural-business-broadband"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20 bg-surface-dark">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Rural business with reliable internet connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Rural SMEs
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Your business can't grow on 2Mbps ADSL.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Rural businesses don't have to settle for slow copper. Up to 500Mbps via cellular SD-WAN, installed in 10 working days — or <Link to="/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> while you wait for a leased line. Card machines stay online. VoIP calls stay clear. And the PSTN switch-off in January 2027? We handle the migration.
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
              <WifiOff className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Copper is dead. Replace it properly.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The UK PSTN network switches off January 2027 — your analogue lines are going away regardless. Our cellular SD-WAN replaces copper with two bonded 4G/5G connections delivering up to 500Mbps. No more copper. No more contention. No more excuses from your ISP.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={copperImg} alt="Fast internet replacing traditional ADSL" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={installImg} alt="Expert network installation by Integra" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Network className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">One visit. One connection. Everything works.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Our engineer arrives, installs the Integra hardware, positions antennas for maximum signal, configures your Wi-Fi network, and tests everything before they leave. Typically 4-6 hours, and you're online with speeds you've never had.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ALT SECTION 3 — Checklist over hero */}
      <section
        className="relative bg-cover py-24 md:py-36"
        style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "right center" }}
        aria-label="Focus on your business. We handle the tech."
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white mb-6 ring-1 ring-white/20" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Shield className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Focus on your business. We handle the tech.</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                <Link to="/integra-bridge" className="text-primary hover:underline">Integra Bridge</Link> while you wait for fibre, SD-WAN broadband for the long term, VoIP phones, managed SIMs and 24/7 monitoring — one provider, one bill, one team to call.
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
                <img src={carbeeHero} alt="Carbee rural business" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">From 0.1Mbps to 300+: Carbee's Breakthrough</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  See how Integra delivered high-speed internet to Carbee's rural location, transforming their business operations and customer experience.
                </p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                    <Link to="/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet" className="inline-flex items-center gap-2">
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
              <h2 className="text-heading-1 md:text-display-sm text-white mb-4">Built for rural businesses.</h2>
              <p className="text-white/70">
                Bonded cellular, satellite where cellular won't reach, and Wi-Fi that covers outbuildings — one provider, one team to call.
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
            <h2 className="mb-10 text-heading-1 md:text-display-sm text-foreground text-center">Common questions from rural businesses</h2>
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
        sourceTag="rural-business-broadband"
        heading="Stop losing money to bad internet."
        subheading="Up to 500Mbps. 99.5% uptime SLA. Installed in 10 working days. No fibre required."
      />
      <FurtherReading
        links={[
          { slug: "extending-wi-fi-and-internet-to-outbuildings", label: "Extending Wi-Fi and internet to outbuildings" },
          { slug: "internet-and-wi-fi-solutions-for-churches-and-listed-buildings", label: "Internet and Wi-Fi for churches and listed buildings" },
          { slug: "beyond-the-broadband-bottleneck", label: "Beyond the broadband bottleneck — alternatives for rural SMEs" },
        ]}
      />
    </PageLayout>
  );
};

export default RuralSMEs;
