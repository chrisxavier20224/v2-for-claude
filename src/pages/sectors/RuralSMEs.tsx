import { Link } from "react-router-dom";
import { WifiOff, PoundSterling, Clock, CircleCheckBig, ArrowLeft, Network, ArrowRight, Wifi, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/rural-sme-hero.jpg";
import copperImg from "@/assets/sectors/rural-sme-copper.jpg";
import installImg from "@/assets/sectors/rural-sme-install.jpg";
import paymentsImg from "@/assets/sectors/rural-sme-payments.jpg";
import carbeeHero from "@/assets/case-studies/carbee-hero.jpg";

const painPoints = [
  {
    icon: WifiOff,
    title: "Stacking ADSL Lines That Still Don't Work?",
    description: "Two or three copper lines bonded together still give you 10Mbps on a good day. We replace them all with a single 350Mbps cellular connection.",
  },
  {
    icon: PoundSterling,
    title: "Quoted £20k+ for Fibre Installation?",
    description: "Openreach excess construction charges for rural properties are often £15-50k. Our SD-WAN delivers similar speeds for a fraction of the cost.",
  },
  {
    icon: Clock,
    title: "Card Machines Dropping at the Worst Times?",
    description: "Dual-network redundancy means if one 4G/5G network drops, your traffic instantly moves to the other. Card machines, VoIP, EPOS — they stay online.",
  },
];

const benefitItems = [
  "Up to 350Mbps via Cellular SD-WAN",
  "Installed by Our Engineers in Under 14 Days",
  "99.5% Uptime SLA with Phone & WhatsApp Support",
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
    description: "Bonded 4G/5G connectivity with 99.5% uptime SLA.",
    href: "/connectivity/integra-sdwan",
    icon: Network,
  },
  {
    title: "Starlink Installation",
    description: "Satellite internet as an alternative to cellular connectivity.",
    href: "/connectivity/starlink-installation",
    icon: Radio,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi to extend your connectivity throughout your premises.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
];

const RuralSMEs = () => {
  return (
    <PageLayout>
      <SEO
        title="Rural Business Internet — Up to 350Mbps, No Fibre Required"
        description="107 UK businesses run on Integra. Up to 350Mbps via cellular SD-WAN, installed in 14 days. 99.5% uptime SLA. PSTN switches off January 2027 — we handle the migration."
        keywords="rural SME internet, rural business broadband, SD-WAN rural, small business connectivity, PSTN switch off, rural broadband alternative"
        url="/sectors/rural-smes"
      />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
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
              107 rural UK businesses already run on Integra. Up to 350Mbps via cellular SD-WAN, installed in 14 days. Card machines stay online. VoIP calls stay clear. And the PSTN switch-off in January 2027? We handle the migration.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
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
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Copper is dead. Replace it properly.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The UK PSTN network switches off January 2027 — your analogue lines are going away regardless. Our cellular SD-WAN replaces copper with two bonded 4G/5G connections delivering up to 350Mbps. No more copper. No more contention. No more excuses from your ISP.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={copperImg} alt="Fast internet replacing traditional ADSL" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

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
                Our engineer arrives, installs the Integra hardware, positions antennas for maximum signal, configures your WiFi network, and tests everything before they leave. Typically 4-6 hours, and you're online with speeds you've never had.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Card machines that never go down.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our dual-network SD-WAN uses two different 4G/5G operators simultaneously. If one network has an issue, your traffic automatically fails over to the other in milliseconds. Your customers never see a "card machine offline" sign again.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={paymentsImg} alt="Reliable internet for card payments" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Focus on your business. We handle the tech.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-10">
                The PSTN switches off January 2027 — we future-proof your business now. SD-WAN broadband, VoIP phones, managed SIMs, and 24/7 monitoring. One provider, one bill, one team to call.
              </p>
            </div>
            <motion.ul className="max-w-md mx-auto space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              {benefitItems.map((item) => (
                <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-surface-dark-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Case study link */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <Section size="large">
        <AnimatedSection>
          <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={carbeeHero} alt="Carbee rural business" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
              <h2 className="text-heading-1 text-foreground mb-4">From 0.1Mbps to 300+: Carbee's Breakthrough</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
      </Section>

      <CustomerLogoBar />

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore connectivity solutions and pricing options."
      />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">Stop losing money to bad internet.</h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">Up to 350Mbps. 99.5% uptime SLA. Installed in 14 days. No fibre required.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default RuralSMEs;
