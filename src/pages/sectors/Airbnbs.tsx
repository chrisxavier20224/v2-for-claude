import { Link } from "react-router-dom";
import { Wifi, WifiOff, Star, CircleCheckBig, ArrowLeft, Radio, MonitorPlay, ArrowRight, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/airbnb-hero.jpg";
import glampingImg from "@/assets/sectors/airbnb-glamping.jpg";
import podsImg from "@/assets/sectors/airbnb-pods.jpg";
import reviewsImg from "@/assets/sectors/airbnb-reviews.jpg";
import meetingsImg from "@/assets/sectors/airbnb-meetings.jpg";
import littleQuarryHero from "@/assets/case-studies/little-quarry-hero.jpg";

const painPoints = [
  {
    icon: Wifi,
    title: "Slow Internet Costing You Bookings?",
    description: "Guests check WiFi speed before booking. If yours is slow or unreliable, they'll book somewhere else.",
  },
  {
    icon: WifiOff,
    title: "Dead Zones Across Your Property?",
    description: "One router doesn't cover a barn conversion, glamping field, or multi-building site. You need proper coverage, not a longer cable.",
  },
  {
    icon: Star,
    title: "One-Star WiFi Reviews Dragging You Down?",
    description: "\"Great property, terrible internet\" kills your rating. We fix that permanently — not with a better router, but a better connection.",
  },
];

const benefitItems = [
  "Up to 350Mbps — Faster Than Most Home Fibre",
  "Full Coverage Across Every Building & Pod",
  "24/7 Monitoring via Integra Cloud + WhatsApp Support",
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
    description: "Bonded 4G/5G connectivity for remote properties.",
    href: "/connectivity/integra-sdwan",
    icon: Network,
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi for guest areas and common spaces.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
  {
    title: "Starlink Installation",
    description: "Satellite internet for properties without cellular coverage.",
    href: "/connectivity/starlink-installation",
    icon: Radio,
  },
];

const Airbnbs = () => {
  return (
    <PageLayout>
      <SEO
        title="Airbnb & Holiday Let WiFi — Fast Guest Internet in 14 Days"
        description="Stop losing bookings to bad WiFi. Guest-ready internet for Airbnbs, glamping sites, and holiday lets — delivered in under 14 days, wherever you are."
        keywords="airbnb wifi, holiday rental internet, guest wifi, glamping connectivity, vacation rental broadband, holiday let internet, rural airbnb wifi"
        url="/sectors/airbnbs"
      />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Beautiful Airbnb property with reliable WiFi" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Airbnbs
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              WiFi that earns five-star reviews.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Guests expect fast, reliable internet. We deliver it — to Airbnbs, glamping pods, holiday cottages, and rural lets. Installed in under 14 days, wherever your property is.
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
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Radio className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Fast internet, even in the middle of nowhere.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cellular SD-WAN delivers up to 350Mbps — no fibre required. Works on 99% of UK properties, installed in under 14 days. Your guests get fast, reliable internet from check-in to checkout.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={glampingImg} alt="Glamping with guest WiFi connectivity" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* LEASED LINES — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={podsImg} alt="Internet connectivity for glamping pods" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Multiple buildings? We link them wirelessly.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Main house, barn conversion, glamping pods — we use point-to-point radio links to extend your connection across your entire property. No trenching, no cables across fields.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Installed in days. Monitored 24/7.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our engineers install your connection and WiFi in a single visit. Then we monitor it remotely via Integra Cloud — so if something drops while your guests are mid-stream, we're already on it.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={reviewsImg} alt="Improved Airbnb reviews with fast internet" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
                <img src={meetingsImg} alt="Virtual meetings at Airbnb property" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <MonitorPlay className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Guests who work remotely love you.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Remote workers are the highest-value Airbnb guests — longer stays, midweek bookings, repeat visits. Give them stable video calls, fast uploads, and reliable streaming, and they'll come back.
              </p>
              <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                {benefitItems.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-surface-dark-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case study link */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <Section size="large">
        <AnimatedSection>
          <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={littleQuarryHero} alt="Little Quarry Glamping" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Case Study</p>
              <h2 className="text-heading-1 text-foreground mb-4">Little Quarry Glamping: Connected Getaways</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                See how Integra provided reliable WiFi across Little Quarry's glamping site — boosting guest satisfaction and five-star reviews.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="font-medium h-12 px-8 text-base">
                  <Link to="/customers/little-quarry-glamping" className="inline-flex items-center gap-2">
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
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">Stop losing bookings to bad WiFi.</h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">Guest-ready internet installed in under 14 days. Works wherever your property is.</p>
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

export default Airbnbs;
