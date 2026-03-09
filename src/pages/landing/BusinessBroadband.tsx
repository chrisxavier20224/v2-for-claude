import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Wifi, BarChart3 } from "lucide-react";
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
    description: "Multi-site redundancy with intelligent load balancing",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Wifi,
    title: "Leased Lines",
    description: "Dedicated fibre with symmetric speeds up to 1000 Mbps",
    href: "/connectivity/leased-lines",
  },
  {
    icon: BarChart3,
    title: "Business WiFi",
    description: "Enterprise-grade wireless for offices and multi-site coverage",
    href: "/connectivity/business-wifi",
  },
  {
    icon: ChevronDown,
    title: "Pricing",
    description: "Transparent, flexible pricing for all business needs",
    href: "/pricing",
  },
];

const BusinessBroadband = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "Constant Downtime",
      description: "Consumer broadband drops multiple times per week. Your business can't rely on it.",
    },
    {
      title: "No Real Support",
      description: "ISP support is outsourced call centres. No understanding of your business needs.",
    },
    {
      title: "Upload Speeds Are Terrible",
      description: "Fast download, but upload is 1-5 Mbps. Kills cloud backups and video conferencing.",
    },
    {
      title: "False Economy",
      description: "Saving £20/month on cheap broadband costs you £5,000+ in annual downtime losses.",
    },
  ];

  const faqItems = [
    {
      question: "Why is business broadband different from residential?",
      answer:
        "Consumer broadband is optimized for entertainment (streaming, gaming). Business broadband prioritizes reliability, upload speeds, and support. We provide 99.5% SLA guarantees, symmetric speeds, and UK engineers who understand your business. Consumer ISPs don't.",
    },
    {
      question: "What speeds will I get with Integra Pro?",
      answer:
        "Integra Pro delivers 100-350 Mbps with dual 4G SIMs load balanced. Upload speeds match download. This is fast enough for video conferencing, cloud backups, and file syncing without any lag.",
    },
    {
      question: "Is a leased line or SD-WAN better for my office?",
      answer:
        "Leased lines are best for guaranteed, dedicated capacity (offices, data centres). SD-WAN is best for multi-site resilience and flexibility (multiple offices, remote workers). We'll recommend the right fit during a site survey.",
    },
    {
      question: "What happens if there's an outage?",
      answer:
        "With our SLA, you get a credit on your invoice. But more importantly, failover connectivity means you stay online. If your primary connection drops, the backup takes over automatically within seconds.",
    },
    {
      question: "Can I scale from Integra Pro to a leased line later?",
      answer:
        "Yes. Many customers start with Integra Pro (no setup costs, flexible), then upgrade to leased line if their needs grow. We migrate without service disruption.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Business Broadband UK | Reliable Internet for SMEs & Offices | Integra Networks"
        description="Reliable business broadband with 99.5% uptime SLA. Not residential repackaged. Fast upload speeds, dedicated UK support, no downtime guarantee."
        keywords="business broadband UK, office internet, reliable business wifi, SME broadband, leased lines"
        url="/lp/business-broadband"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Business Broadband That Actually Works — Backed by Real Engineers
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Not residential repackaged. Dedicated UK specialists. 99.5% uptime SLA. Fast uploads. Real support. Scale from Integra Pro to leased lines as your business grows.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=business-broadband">Get Business Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=business-broadband">Check Coverage</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Problem</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Tired of consumer broadband?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Most businesses are paying for "business" broadband that's just residential repackaged.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-3">{point.title}</h3>
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
              Enterprise Reliability Starts Here
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              We serve 107+ business customers with zero-downtime connectivity.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">107+</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Business Customers</h3>
              <p className="text-muted-foreground">
                From small agencies to multi-site enterprises. All with 99.5% uptime SLA backing.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">14</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Days Average Install</h3>
              <p className="text-muted-foreground">
                Fast deployment. You're not waiting 8 weeks for traditional fibre. Live in 2-3 weeks.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">99.5%</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Uptime SLA</h3>
              <p className="text-muted-foreground">
                Guaranteed uptime backed by credits. If we drop below 99.5%, you get paid.
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
              Our Business Connectivity Options
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Choose the solution that fits your needs. Start flexible, scale as you grow.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-primary/40 p-8">
              <h3 className="text-2xl font-bold text-surface-dark-foreground mb-2">Integra Pro</h3>
              <p className="text-surface-dark-muted mb-4">For SMEs and multiple offices</p>
              <div className="text-4xl font-bold text-white mb-6">
                £135<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dual 4G SIMs load balanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>100-350 Mbps speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>99.5% uptime SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Automatic failover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>UK engineer support</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=business-broadband&product=integra-pro">Request Quote</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/40 p-8">
              <h3 className="text-2xl font-bold text-surface-dark-foreground mb-2">Leased Lines</h3>
              <p className="text-surface-dark-muted mb-4">For guaranteed, dedicated capacity</p>
              <div className="text-4xl font-bold text-white mb-6">
                £250-1,500<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated fibre connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Symmetric speeds up to 1000 Mbps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>99.5% or 99.9% SLA options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Multi-site management available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated engineer support</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=business-broadband&product=leased-line">Request Quote</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-surface-dark-foreground mb-4">Need Multi-Site Redundancy?</h3>
            <p className="text-surface-dark-muted mb-4">
              Our Enterprise SD-WAN service (£400/month) combines multiple connections (leased lines, 4G, SD-WAN) with intelligent load balancing and failover. Perfect for organizations requiring maximum reliability across multiple locations.
            </p>
            <Button asChild variant="outline" className="border-primary/40 text-surface-dark-foreground hover:bg-white/10">
              <Link to="/contact?source=business-broadband&product=enterprise-sdwan">Call us to discuss</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* HOW IT WORKS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              Simple 3-Step Process
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Coverage Check</h3>
              <p className="text-muted-foreground">Tell us your location and we provide estimated speeds in 90 seconds. No strings attached.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Site Survey</h3>
              <p className="text-muted-foreground">Our engineer visits, tests signal quality, and designs the optimal setup for your office.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live & Monitored</h3>
              <p className="text-muted-foreground">Installation takes 1-2 days. We monitor your connection 24/7 and provide round-the-clock support.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* TESTIMONIALS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">
              What Our Business Customers Say
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-surface-dark-muted italic mb-4">
                "Switched from BT. Reliability improved dramatically. Support is responsive and actually understands our business."
              </p>
              <p className="text-surface-dark-foreground font-semibold">Financial Services Firm</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-surface-dark-muted italic mb-4">
                "Zero downtime in 12 months. Worth every penny. Our team is more productive without connectivity worries."
              </p>
              <p className="text-surface-dark-foreground font-semibold">Marketing Agency</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-surface-dark-muted italic mb-4">
                "Upload speeds are finally fast. Cloud backups happen overnight instead of taking days. Game changer."
              </p>
              <p className="text-surface-dark-foreground font-semibold">Design Studio</p>
            </motion.div>
          </motion.div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Ready for Reliable Business Broadband?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Get a free site survey and quote. We'll recommend the right solution for your needs — Integra Pro or leased line. No pressure, no jargon.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=business-broadband">Request Business Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=business-broadband">
                      Check Availability
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

      {/* TRUST & CONTACT */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold">Questions?</span> Call us:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. Specialist business team ready to help.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default BusinessBroadband;
