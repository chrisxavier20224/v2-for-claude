import { Link } from "react-router-dom";
import { Wifi, Brain, Plug, ArrowLeft, ArrowRight, CircleCheckBig, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/home-wifi-hero.jpg";
import newbuildImg from "@/assets/connectivity/home-wifi-newbuild.jpg";
import outbuildingsImg from "@/assets/connectivity/home-wifi-outbuildings.jpg";
import remoteImg from "@/assets/connectivity/home-wifi-remote.jpg";

const painPoints = [
  {
    icon: Wifi,
    title: "5 Bars Everywhere",
    description: "No more dead zones. We place access points where they'll reach furthest — bedrooms, outbuildings, garden offices. Devices roam seamlessly between APs.",
  },
  {
    icon: Brain,
    title: "Professional-Grade Gear",
    description: "Commercial-grade access points — not consumer extenders that just slow things down. Handles 20+ devices simultaneously with optimal channel routing.",
  },
  {
    icon: Plug,
    title: "Integrated with our Connectivity",
    description: "Our expert engineers will integrate our Managed WiFi services with your new connectivity setup.",
  },
];

const benefitItems = [
  "Flexible payment options: one-off cost or monthly payments",
  "Installation completed in under 14 days",
  "Secure network for handling critical documents",
  "Outdoor coverage options available",
  "Minimise network buffering on smart TVs",
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };
const checklistItem = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Wifi,
    title: "Business WiFi",
    description: "Enterprise-grade mesh networks for commercial spaces.",
    href: "/connectivity/business-wifi",
  },
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Secure, intelligent networking for organisations.",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Brain,
    title: "Homeworkers",
    description: "Connectivity solutions designed for remote workers.",
    href: "/sectors/homeworkers",
  },
];

const HomeWifi = () => {
  return (
    <PageLayout>
      <SEO
        title="Home WiFi — Professional Mesh Networks for Homes & Farms"
        description="WiFi that works everywhere. Professional mesh WiFi installation from £400. Covers 2,000+ sq ft. Thick walls, outbuildings, and garden offices — all connected."
        keywords="home WiFi, home network, remote working WiFi, WiFi dead zones, mesh WiFi, home office connectivity"
        url="/connectivity/home-wifi"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Home WiFi solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Home WiFi
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">WiFi that reaches everywhere.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Your router is in the office. Your bedroom doesn't have signal. We design and install WiFi mesh networks that actually work in large homes, barns, and multi-building properties. From £400.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Home WiFi</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Why your WiFi isn't working.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              WiFi range is 50-100m in open space — much less through walls. Old routers can't handle multiple devices. WiFi extenders usually just slow things down. You need a properly designed mesh network.
            </p>
          </AnimatedSection>
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

      {/* NEW BUILD */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Building a New Home? Plan Your Network with Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With your site plans in hand, Integra can guide you on the best network installation strategy for comprehensive device coverage. We'll collaborate with your AV team, contractors, and electrical engineers.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={newbuildImg} alt="New build network planning" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* OUTBUILDINGS — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={outbuildingsImg} alt="Point to point link for outbuildings" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Connecting Separate Office Outbuildings</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto mb-4">
                No need for a second connection for two buildings on your property. We'll help you secure a fast connection and redistribute it to your secondary location with a point to point link.
              </p>
              <h3 className="text-heading-3 text-white mb-2">Solutions for Properties with Thick Walls</h3>
              <p className="text-white/70 max-w-md ml-auto">
                During the planning stage, we'll identify the right solution to overcome connectivity issues due to thick walls. Our experience in rural locations equips us to address such common challenges.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* REMOTE WORKING */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">No more coffee shop video calls.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Work from home confidently. Crystal-clear Zoom calls, fast file uploads, and reliable connections that don't drop when it rains.
            </p>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              {benefitItems.map((item) => (
                <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                  <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={remoteImg} alt="Remote working from home" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices services={relatedServices} heading="Related Services" subheading="Explore our full range of connectivity solutions." />

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />

      <RelatedContent
        dark
        sectors={["homeworkers", "airbnbs"]}
        stories={[]}
      />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Need WiFi everywhere?</h2>
            <p className="text-lg text-surface-dark-muted mb-8 max-w-2xl mx-auto">Schedule a free WiFi survey — no obligation. We'll walk your property and recommend the right system for your budget.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg"><Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeWifi;
