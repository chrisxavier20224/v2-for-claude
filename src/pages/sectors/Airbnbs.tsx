import { Link } from "react-router-dom";
import { Wifi, WifiOff, Star, CircleCheckBig, ArrowLeft, Radio, MonitorPlay, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
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
    title: "Sluggish Internet Deterring Potential Bookings?",
    description: "Don't lose guests due to slow internet. Speed matters in a connected world.",
  },
  {
    icon: WifiOff,
    title: "WiFi Dead Zones Irritating Guests?",
    description: "Ensure complete WiFi coverage across your property, eliminating frustrating connection drops.",
  },
  {
    icon: Star,
    title: "Bad Reviews Due to Poor Internet?",
    description: "Enhance guest satisfaction and your Airbnb rating with seamless internet connectivity.",
  },
];

const benefitItems = [
  "Ultra-fast, Reliable Internet Connection",
  "Coverage Across Entire Property",
  "Expert Network Troubleshooting & Support",
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

const Airbnbs = () => {
  return (
    <PageLayout>
      <SEO
        title="Airbnb Connectivity — High-Speed WiFi for Holiday Rentals"
        description="Maximize bookings and reviews with unparalleled, reliable, and speedy internet connectivity for your Airbnb, regardless of location."
        keywords="airbnb wifi, holiday rental internet, guest wifi, glamping connectivity, vacation rental broadband"
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
              Revolutionize Your Airbnb Experience with Integra
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Maximize bookings and reviews with unparalleled, reliable, and speedy internet connectivity, regardless of location.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
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
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Boost Your Airbnb with High-Speed Internet</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience 99% UK coverage with our speedy Integra SD-WAN, regardless of location. Watch your bookings increase with our guaranteed fast connectivity, delivered in under 14 days.
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
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Circumvent the Need for Costly Leased Lines</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Our robust wireless network delivery ensures fast connectivity, even in rural areas, avoiding unnecessary costs. Multiple buildings? We've got you covered with radio links between units.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Ultrafast Connectivity Delivered in Days</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Boost your occupancy rates and reviews by offering super fast internet. Enhance guest experience with our quick, reliable, and high-speed connectivity.
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
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Enjoy Uninterrupted Virtual Meetings</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Guarantee your guests the comfort of seamless Microsoft Teams calls, enabling them to stay connected while enjoying your property.
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

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Ready to boost your Airbnb ratings?</h2>
            <p className="mb-8 text-lg text-white/80">Get fast, reliable WiFi for your guests delivered in under 14 days.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                  <Link to="/availability-checker">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="link" className="text-white hover:text-white/80 font-medium text-base">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default Airbnbs;
