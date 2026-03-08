import { Link } from "react-router-dom";
import { Wifi, Shield, CreditCard, ArrowLeft, ArrowRight, Users, Radio, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/business-wifi-hero.jpg";
import publicImg from "@/assets/connectivity/business-wifi-public.jpg";
import indoorImg from "@/assets/connectivity/business-wifi-indoor.jpg";
import guestImg from "@/assets/connectivity/business-wifi-guest.jpg";
import eventImg from "@/assets/connectivity/business-wifi-event.jpg";
import surveysImg from "@/assets/connectivity/business-wifi-surveys.jpg";

const painPoints = [
  {
    icon: Wifi,
    title: "Professionally Designed Networks",
    description: "Our team of WiFi experts meticulously design and build your network to meet both your current and future needs.",
  },
  {
    icon: Shield,
    title: "Monitored WiFi Security",
    description: "We vigilantly monitor every aspect of our deployed solutions, providing real-time insights into WiFi coverage, usage, and system health.",
  },
  {
    icon: CreditCard,
    title: "WiFi-as-a-Service",
    description: "Our managed WiFi service eliminates the need for upfront capital investment, offering a convenient monthly subscription instead.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const BusinessWifi = () => {
  return (
    <PageLayout>
      <SEO
        title="Business WiFi — High-Speed WiFi Solutions"
        description="Superior business connectivity with high-speed WiFi solutions. Professionally designed networks, monitored security, and WiFi-as-a-Service."
        keywords="business WiFi, commercial WiFi, public WiFi, guest WiFi, event WiFi, WiFi survey, managed WiFi"
        url="/connectivity/business-wifi"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business WiFi solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Business WiFi
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Superior Business Connectivity: High-Speed WiFi Solutions</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Experience seamless connectivity with our tailored WiFi solutions, designed to meet the unique needs of your business.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Business WiFi</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Unleash the Power of High-Speed, Secure Business WiFi
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Boost your business operations with our high-speed, secure WiFi solutions designed for reliability and performance.
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

      {/* PUBLIC WIFI */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Public WiFi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience unparalleled coverage with our Public WiFi solutions, perfect for holiday parks, caravan sites, and other wide, remote spaces. Our wireless hotspots ensure guests and tenants remain connected, regardless of local mobile network signal.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={publicImg} alt="Public WiFi marina installation" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* INDOOR WIFI — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={indoorImg} alt="Indoor WiFi for business" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Indoor WiFi</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                From small businesses to corporate facilities, our Indoor WiFi solutions cater to all. We ensure strong connectivity and seamless access to cloud services, tailored to your company's needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* GUEST WIFI */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Users className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Guest WiFi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Offer your visitors secure, fast internet access while gaining valuable insights. Our guest WiFi portal allows you to build detailed visitor profiles, deliver effective real-time advertising, and drive revenue through enhanced engagement.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={guestImg} alt="Guest WiFi portal" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* EVENT WIFI & SURVEYS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-16">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={eventImg} alt="Event WiFi setup" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                <Radio className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Event WiFi Solutions</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Whether you're hosting a small gathering or a large-scale event, our Event WiFi solutions have you covered. We design, configure, and install complex high-density networks in challenging environments.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection className="order-1">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                <ClipboardCheck className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">WiFi Surveys</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                A WiFi site survey is essential for planning and designing a wireless network. We inspect and test your infrastructure, analyze coverage, and design your network from the ground up, ensuring it's fit for purpose and scalable.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="order-2">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={surveysImg} alt="WiFi site survey" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <Section size="large">
        <div className="text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6">Need a WiFi solution for your business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Get in touch to discuss your requirements and let us design the perfect WiFi solution.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg"><Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>
    </PageLayout>
  );
};

export default BusinessWifi;
