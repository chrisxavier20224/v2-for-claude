import { Link } from "react-router-dom";
import { Phone, Users, Shield, ArrowLeft, ArrowRight, Monitor, Headphones, Wifi, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";

import heroImg from "@/assets/connectivity/unified-comms-hero.jpg";
import deployImg from "@/assets/connectivity/unified-comms-deploy.jpg";
import ccaasImg from "@/assets/connectivity/unified-comms-ccaas.jpg";

const painPoints = [
  {
    icon: Users,
    title: "Works From Any Device, Anywhere",
    description: "Call, meet, message from any device. Your team stays productive whether they're in the office, at home, or on site. One app, one number.",
  },
  {
    icon: Phone,
    title: "Seamless Migration",
    description: "We build your communication network off-site and switch you over in one go. Port your existing numbers, keep your call flow, zero disruption.",
  },
  {
    icon: Shield,
    title: "PSTN-Ready Before 2027",
    description: "The UK PSTN network switches off January 2027. Move to cloud VoIP now — call recording, IVR, voicemail-to-email, and Teams integration included.",
  },
];

const faqs = [
  { q: "What is unified communications?", a: "Unified communications is a system that integrates various communication tools such as voice, video, messaging, and email into a single platform, facilitating seamless collaboration among teams, regardless of their location." },
  { q: "How does your platform support remote work?", a: "Our platform provides a comprehensive suite of communication tools accessible from any device, anywhere, allowing teams to stay connected and productive." },
  { q: "How quickly can your solution be deployed?", a: "Our solution is designed for quick and easy deployment. We offer a straightforward solution for businesses looking to transition to unified communications, one step at a time." },
  { q: "What is Contact Centre as a Service (CCaaS)?", a: "CCaaS is a cloud-based customer service solution allowing businesses to manage contact centre operations without large upfront investments, offering scalability and flexibility." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Monitor,
    title: "Leased Lines",
    description: "Dedicated, high-bandwidth connectivity for enterprise use.",
    href: "/connectivity/leased-lines",
  },
  {
    icon: Wifi,
    title: "Business WiFi",
    description: "Professional mesh networks for commercial properties.",
    href: "/connectivity/business-wifi",
  },
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Secure, intelligent networking for organisations.",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: TrendingUp,
    title: "Pricing",
    description: "Transparent costs and flexible payment options.",
    href: "/pricing",
  },
];

const UnifiedCommunications = () => {
  return (
    <PageLayout>
      <SEO
        title="Unified Communications — Hosted VoIP from £10/handset/month"
        description="PSTN switches off January 2027. Move to cloud-hosted VoIP with Teams integration, call routing, and PSTN backup. From £10/handset/month."
        keywords="unified communications, UCaaS, cloud phone, hosted VoIP, video conferencing, CCaaS, business phone system, PSTN switch off"
        url="/connectivity/unified-communications"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Unified communications collaboration" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Unified Communications
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Hosted VoIP for your business.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              PSTN switches off January 2027. From £10/handset/month — Teams integration, call routing, voicemail-to-email, and PSTN backup. Deployed in days, not weeks.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Unified Communications</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              From £10/handset/month. No big upfront costs.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Handsets, softphones, and setup all included. Scale up or down as needed — you only pay for what you use. Works with your existing broadband or our connectivity.
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

      {/* QUICK DEPLOYMENT */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Deployed in days. Simple to use.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand most businesses want a phone system that just works. No complicated setup, no IT degree required. We handle configuration off-site and deploy everything in a single visit.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={deployImg} alt="Web conferencing deployment" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* VIDEO & CCAAS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-16">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={ccaasImg} alt="Contact Centre as a Service" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                <Headphones className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Contact Centre as a Service</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed">
                Our Contact Centre Solutions grow with your business. As a cloud-based solution, scaling up or down is simple. You only pay for what you use, making it incredibly cost-effective.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FAQ */}
      <Section size="large">
        <AnimatedSection>
          <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-12">Frequently Asked Questions</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="border border-border rounded-xl p-6">
                <h3 className="text-heading-3 text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <RelatedServices services={relatedServices} heading="Related Services" subheading="Explore our full range of connectivity solutions." />

      {/* CTA */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Get a phone system quote.</h2>
            <p className="text-lg text-surface-dark-muted mb-8 max-w-2xl mx-auto">From £10/handset/month. PSTN switches off January 2027 — start your migration now.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg"><Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default UnifiedCommunications;
