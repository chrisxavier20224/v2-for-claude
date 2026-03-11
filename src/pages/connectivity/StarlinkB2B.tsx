import { Link } from "react-router-dom";
import { Satellite, CheckCircle2, Shield, Zap, AlertCircle, ArrowLeft, ArrowRight, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";

import heroImg from "@/assets/connectivity/starlink-hero.webp";
import sdwanImg from "@/assets/connectivity/starlink-sdwan.jpg";
import engineersImg from "@/assets/connectivity/starlink-engineers.jpg";

const painPoints = [
  {
    icon: CheckCircle2,
    title: "Single Bill Simplicity",
    description: "One invoice from Integra covers everything — satellite, device, data, installation, and support. No juggling multiple suppliers or bills.",
  },
  {
    icon: Shield,
    title: "Business-Grade SLA",
    description: "Industry-leading service-level agreement with dedicated Integra support, response times, and uptime guarantees. Not consumer-grade satellite.",
  },
  {
    icon: Radio,
    title: "Cellular Failover Included",
    description: "Automatically bonds 4G/5G mobile connectivity with satellite for unbreakable redundancy. Your connection switches seamlessly if one link drops.",
  },
];

const faqs = [
  {
    q: "What's the price for Managed Starlink B2B?",
    a: "From £300 per month plus VAT, based on usage, number of users, and data requirements. Installation is £1,300 plus VAT. We'll provide a bespoke quote after understanding your needs.",
  },
  {
    q: "What hardware is available?",
    a: "We offer Enterprise Kit (£568), Standard Equipment (£320), and Mini Kit (£470), all plus VAT. These are managed by Integra with monitoring and support included. Device as a Service (DaaS) is also available for those preferring capex-free models.",
  },
  {
    q: "Is this B2B only?",
    a: "Yes. Managed Starlink B2B is exclusively for business customers. We cannot supply this service to residential users.",
  },
  {
    q: "How is this different from consumer Starlink?",
    a: "Consumer Starlink offers best-effort connectivity with no SLA. Our B2B service includes an Integra SLA, dedicated support, single billing, guaranteed response times, and cellular backup bonding — you're not just buying satellite, you're buying managed connectivity.",
  },
  {
    q: "What SLA do you offer?",
    a: "We provide industry-leading service levels with guaranteed response and resolution times. Details are customised per contract. Contact us for your specific SLA requirements.",
  },
  {
    q: "How long does installation take?",
    a: "Typical installation takes 1–2 working days from order. We schedule at your convenience. Installation includes desktop survey, equipment installation, configuration, testing, and staff training.",
  },
  {
    q: "Can I add more data later?",
    a: "Absolutely. Your plan scales with your business. Data tiers range from £53 to £400 per month depending on throughput and usage. We'll monitor your consumption and recommend upgrades if needed.",
  },
  {
    q: "Does it work if my main broadband fails?",
    a: "Yes. Cellular bonding means your connection stays active even if fibre or fixed wireless fails. Satellite and 4G/5G run in parallel, providing true redundancy without manual failover.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Intelligent bonding for multiple broadband connections.",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Shield,
    title: "Enterprise Connectivity",
    description: "Leased lines, business WiFi, and mission-critical links.",
    href: "/pricing",
  },
  {
    icon: AlertCircle,
    title: "Unified Communications",
    description: "Cloud phone system to pair with your satellite link.",
    href: "/connectivity/unified-communications",
  },
];

const StarlinkB2B = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Service", "FAQPage"],
    name: "Managed Starlink B2B",
    description: "Business-grade managed satellite internet with SLA, single billing, and cellular bonding",
    provider: {
      "@type": "Organization",
      name: "Integra Networks",
    },
    areaServed: "GB",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <PageLayout>
      <SEO
        title="Managed Starlink B2B"
        description="Managed satellite for business. SLA-backed, cellular bonding, support. From £300/month."
        keywords="managed starlink, business satellite internet, B2B starlink, satellite broadband, construction internet, event connectivity"
        url="/connectivity/starlink-b2b"
      />

      <SchemaMarkup data={schemaData} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Managed satellite internet for business" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Starlink B2B
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">Managed Starlink for business. One bill. One provider.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Business-grade satellite connectivity with SLA, dedicated support, and cellular bonding. From £300 per month. Installation £1,300.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Managed Starlink B2B</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Why choose managed satellite over consumer Starlink?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Consumer satellite is best-effort. We deliver business-grade connectivity backed by SLA, single billing, and cellular redundancy.
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

      {/* WHAT'S INCLUDED */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">What's included in your package</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Managed Hardware</h3>
                  <p className="text-muted-foreground">Enterprise, Standard, or Mini kit — fully managed by Integra with monitoring and updates.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">24/7 Support</h3>
                  <p className="text-muted-foreground">Dedicated Integra support team with guaranteed response times and technical escalation.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Cellular Bonding</h3>
                  <p className="text-muted-foreground">Automatic failover and load balancing with 4G/5G for redundancy without manual intervention.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Single Bill</h3>
                  <p className="text-muted-foreground">One invoice from Integra covering satellite, device, data, installation, and support.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Service-Level Agreement</h3>
                  <p className="text-muted-foreground">Guaranteed uptime, response times, and resolution targets tailored to your business.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={sdwanImg} alt="Managed satellite installation and setup" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* WHO IT'S FOR */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-16">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={engineersImg} alt="Engineers deploying satellite connectivity on-site" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                <Satellite className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Who it's for</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                Any business needing reliable satellite internet but wanting managed service, SLA guarantees, and redundancy. Perfect for:
              </p>
              <ul className="space-y-3 text-surface-dark-muted">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-surface-dark-foreground">Construction Sites</strong> — Fast deployment, temporary or permanent coverage during builds.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-surface-dark-foreground">Events & Festivals</strong> — Managed connectivity for temporary venues or outdoor locations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-surface-dark-foreground">Remote Offices & Sites</strong> — Rural or isolated locations where fibre is unavailable.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-surface-dark-foreground">Mission-Critical Operations</strong> — Businesses needing guaranteed uptime with SLA backup.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-surface-dark-foreground">Hybrid Connectivity</strong> — Companies bonding satellite with fixed broadband or 4G for redundancy.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* PRICING TRANSPARENCY */}
      <Section size="large">
        <AnimatedSection>
          <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Transparent, consultative pricing based on your usage and business needs.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-xl p-8 bg-background-alt">
              <h3 className="text-heading-3 text-foreground mb-6">Monthly Service</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Managed Satellite</p>
                  <p className="text-2xl font-medium text-foreground">From £300/month</p>
                  <p className="text-xs text-muted-foreground mt-1">Plus VAT, based on usage and users</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground text-sm mb-1">Data Tiers</p>
                  <p className="text-lg font-semibold text-foreground">£53–£400/month</p>
                  <p className="text-xs text-muted-foreground mt-1">Depends on throughput and consumption</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="border border-border rounded-xl p-8 bg-background-alt">
              <h3 className="text-heading-3 text-foreground mb-6">One-Time Costs</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Installation</p>
                  <p className="text-2xl font-medium text-foreground">£1,300</p>
                  <p className="text-xs text-muted-foreground mt-1">Plus VAT, includes survey and training</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground text-sm mb-1">Hardware</p>
                  <ul className="space-y-2 text-sm text-foreground mt-2">
                    <li>Enterprise: £568 +VAT</li>
                    <li>Standard: £320 +VAT</li>
                    <li>Mini: £470 +VAT</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.3}>
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm text-foreground">
              <strong>Device as a Service (DaaS) available:</strong> Prefer no upfront hardware cost? We offer DaaS models where we own and manage the equipment. Let's discuss what works best for your budget.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-12">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-xl p-6 bg-surface-dark-alt">
                  <h3 className="text-heading-3 text-surface-dark-foreground mb-2">{faq.q}</h3>
                  <p className="text-surface-dark-muted">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices services={relatedServices} heading="Related Services" subheading="Explore our full range of connectivity solutions." />

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Get a Starlink B2B quote.
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              From £300 per month plus VAT. Installation £1,300 plus VAT. We'll tailor a solution based on your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/pricing">See All Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default StarlinkB2B;
