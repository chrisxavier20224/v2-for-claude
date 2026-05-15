import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Camera, Hammer, Wifi } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Multi-connection redundancy for mission-critical operations",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Camera,
    title: "CCTV",
    description: "Security surveillance solutions for construction sites",
    href: "/connectivity/cctv",
  },
  {
    icon: Hammer,
    title: "Construction Sites",
    description: "Sector-specific solutions for temporary and permanent projects",
    href: "/sectors/construction-sites",
  },
  {
    icon: Wifi,
    title: "Business WiFi",
    description: "Enterprise-grade wireless coverage for site infrastructure",
    href: "/connectivity/business-wifi",
  },
];

const ConstructionWifi = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "Sites Go Dark",
      description: "No WiFi = site managers can't access plans, send photos, or manage contractors.",
    },
    {
      title: "Dead Zones Everywhere",
      description: "Portable cabins, storage units, and outdoor areas have no coverage.",
    },
    {
      title: "Slow & Unreliable",
      description: "Mobile hotspots drop constantly. Uploading site photos takes forever.",
    },
    {
      title: "Time Wasted = Money Lost",
      description: "Delays in communication cost thousands. Every day matters on site.",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can you deploy to multiple sites?",
      answer:
        "We can have teams at multiple sites within 48 hours. We pre-configure all equipment and ship it to your site address. On-site setup is usually 30 minutes per location.",
    },
    {
      question: "What if the site moves or closes before the contract ends?",
      answer:
        "Managed SIM contracts are flexible. We can redeploy SIMs to other sites, pause the contract, or close early with no penalty. Perfect for temporary projects.",
    },
    {
      question: "Will the equipment handle building site conditions?",
      answer:
        "Yes. All our equipment is weather-resistant, dust-resistant, and built for tough environments. Enclosures can be locked for security. We've tested on sites with water, dust, and vibration.",
    },
    {
      question: "Can you cover multiple buildings across a large site?",
      answer:
        "Absolutely. We use a combination of site hotspots and mobile boosters. Most construction sites (up to 5-10 acres) can be covered with 2-3 access points. We survey the site first.",
    },
    {
      question: "What happens if I need more capacity mid-project?",
      answer:
        "Easy. Just call us and we upgrade your SIM bundle or add additional hotspots. No penalties for changes. Flexible contract terms — from short-term agreements up to 36 months, with flexible shorter agreements for construction projects.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Construction Site WiFi | Temporary Broadband for Sites | Integra Networks"
        description="Fast WiFi for construction sites in 48 hours. Temporary or permanent. Weather-resistant. Multi-site coverage. Flexible contract terms — from short-term agreements up to 36 months. Integra Networks."
        keywords="construction site wifi, site broadband, temporary internet, construction, portable broadband"
        url="/lp/construction-wifi"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Construction Site Broadband — Live in 48 Hours, No Fibre Required
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Get WiFi on your construction sites in 2 days. No digging. No long contracts. Weather-resistant equipment covers every cabin, office, and outdoor area. Scale up or down as your project grows.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=construction-wifi">Get Site Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/check?utm_source=lp&utm_medium=organic&utm_campaign=construction-wifi">
                  Check Site Coverage
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Challenge</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Sound familiar?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Construction sites demand reliable, fast connectivity. Temporary solutions don't cut it.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* KEY METRICS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Built for Construction Sites
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Not a residential product repackaged. Our engineers understand construction.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">48h</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Live in 2 Days</h3>
              <p className="text-muted-foreground">
                Equipment shipped next day. Installed and live by day 2. No waiting for Fibre crews.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">50+</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Sites Connected</h3>
              <p className="text-muted-foreground">
                We've deployed to construction sites from London to the Scottish Borders.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">Flexible</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Flexible Terms</h3>
              <p className="text-muted-foreground">
                Flexible terms. Pause, resume, or redeploy to other sites as your project evolves.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* SOLUTIONS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Our Connectivity Solutions
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              From small temporary sites to multi-site enterprise deployments.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-primary/40 p-8">
              <h3 className="text-2xl font-medium text-surface-dark-foreground mb-2">Managed SIM Services</h3>
              <p className="text-surface-dark-muted mb-4">Best for small to medium sites</p>
              <div className="text-4xl font-medium text-white mb-6">
                From £28<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Portable WiFi hotspots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Multi-building coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Weather-resistant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>48-hour deployment</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=construction-wifi&product=managed-sim">Request Quote</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/40 p-8">
              <h3 className="text-2xl font-medium text-surface-dark-foreground mb-2">Enterprise SD-WAN</h3>
              <p className="text-surface-dark-muted mb-4">Best for large, multi-site projects</p>
              <div className="text-4xl font-medium text-white mb-6">
                £400<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Multi-SIM bonded connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>99.5% uptime SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated engineering support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Integra Networks manages everything</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=construction-wifi&product=enterprise-sdwan">Request Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* HOW IT WORKS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              How We Get Your Site Online in 48 Hours
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Desktop Survey</h3>
              <p className="text-muted-foreground">We visit your site, check coverage, and design the best setup for your layout.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Equipment Ships</h3>
              <p className="text-muted-foreground">Pre-configured hotspots and equipment ship to your site office within 24 hours.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Live & Monitored</h3>
              <p className="text-muted-foreground">Installation takes 30 minutes. Your site is online within 48 hours. We monitor 24/7.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CASE STUDY HIGHLIGHT */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Success Story</p>
                  <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-4">McGee Construction</h2>
                  <p className="text-surface-dark-muted mb-6">
                    "We've cut communication delays by 80%. What used to take 4 hours now takes 30 minutes. The best investment we've made in site operations." — Sarah McGee, Construction Director
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-3xl font-medium text-primary mb-1">12</div>
                      <p className="text-sm text-surface-dark-muted">Sites Connected</p>
                    </div>
                    <div>
                      <div className="text-3xl font-medium text-primary mb-1">48h</div>
                      <p className="text-sm text-surface-dark-muted">Deployment Time</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <p className="text-surface-dark-muted text-center">12 London construction sites | Real-time communication | Zero downtime</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FINAL CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-600 p-10 md:p-14 text-center" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Connect Your Site in 48 Hours
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  No waiting for Fibre crews. Flexible terms. Get reliable WiFi across all your site buildings and stay flexible as your project evolves.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=construction-wifi">Get Your Site Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/check?utm_source=lp&utm_medium=organic&utm_campaign=construction-wifi">
                      Check Site Coverage
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* RELATED SERVICES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RelatedServices services={relatedServices} heading="Explore More Solutions" subheading="Discover how Integra Networks keeps businesses connected." />
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CONTACT */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold">Need advice?</span> Call our construction specialists:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. We work with construction companies on all project sizes.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConstructionWifi;
