import { Link } from "react-router-dom";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const pricingTiers = [
  {
    name: "Integra SD-WAN",
    price: "80",
    description: "Bonded 4G/5G connectivity. Perfect for small teams and homeworkers.",
    speed: "50–100Mbps typical",
    sla: "99% uptime",
    features: [
      "Bonded 4G/5G connectivity",
      "50–100Mbps typical speeds",
      "99% uptime",
      "UK-based support",
      "Free installation",
      "Free hardware",
    ],
    bestFor: "Homeworkers, small offices, holiday lets",
    cta: {
      text: "Check Availability",
      href: "/availability-checker",
    },
  },
  {
    name: "Integra Pro",
    price: "135",
    description: "Pure cellular SD-WAN with optional Starlink satellite backup.",
    speed: "100–200Mbps typical",
    sla: "99.5% uptime SLA",
    features: [
      "SD-WAN + Starlink satellite option",
      "100–200Mbps typical speeds",
      "99.5% uptime SLA",
      "Priority UK support",
      "Free installation",
      "Free hardware",
    ],
    bestFor: "Rural businesses, farms, construction sites",
    cta: {
      text: "Check Availability",
      href: "/availability-checker",
    },
  },
  {
    name: "Integra Enterprise",
    price: "400",
    description: "Leased line + SD-WAN failover for mission-critical operations.",
    speed: "300Mbps+ guaranteed",
    sla: "99.95% uptime SLA",
    features: [
      "Leased line + SD-WAN failover",
      "300Mbps+ guaranteed speeds",
      "99.95% uptime SLA",
      "Dedicated account manager",
      "Free installation",
      "All hardware included",
    ],
    bestFor: "Business parks, warehouses, multi-site operations",
    cta: {
      text: "Get in Touch",
      href: "/contact",
    },
  },
  {
    name: "Bespoke",
    price: "Custom",
    description: "Multi-site SD-WAN, CCTV + WiFi bundles, and full infrastructure projects.",
    speed: "Custom configuration",
    sla: "Custom SLA",
    features: [
      "Multi-site SD-WAN",
      "CCTV + WiFi + connectivity bundles",
      "Full infrastructure projects",
      "Custom hardware & support",
      "Dedicated project manager",
      "Flexible terms",
    ],
    bestFor: "Ports, logistics, large estates",
    cta: {
      text: "Speak to Our Team",
      href: "/contact",
    },
  },
];

const universalInclusions = [
  { text: "Free installation", icon: Check },
  { text: "Free hardware", icon: Check },
  { text: "No setup fees", icon: Check },
  { text: "UK-based support", icon: Check },
  { text: "Free engineer callouts", icon: Check },
];

const faqs = [
  {
    q: "What's included in the installation cost?",
    a: "Installation includes professional site survey, router setup, network configuration, speed testing, and optimization. Our engineers ensure your connection is working perfectly before we leave.",
  },
  {
    q: "Can I upgrade to a higher tier later?",
    a: "Yes. Most customers start with Integra SD-WAN and upgrade to Pro or Enterprise as their business grows. We'll credit your previous installation costs toward an upgrade.",
  },
  {
    q: "What's the difference between the tiers?",
    a: "SD-WAN uses bonded 4G/5G with optional Starlink backup. Pro adds stronger SLA and priority support. Enterprise includes leased line failover and multi-site capabilities. Bespoke is custom infrastructure for complex deployments.",
  },
  {
    q: "Do you offer discounts for longer contracts?",
    a: "Yes. Contact our team to discuss 24-month or 36-month terms. We can often provide discounts for committed periods.",
  },
  {
    q: "What if I'm not happy with the service?",
    a: "We offer a 30-day money-back guarantee. If speeds don't meet our claims in your location, we refund your installation cost.",
  },
  {
    q: "Is static IP included?",
    a: "Static IP is available as an add-on (£5/month) on SD-WAN and Pro. It's included free on Enterprise.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term lock-in contracts. You can cancel with 30 days' notice on month-to-month terms.",
  },
  {
    q: "What about additional services like WiFi or CCTV?",
    a: "We offer WiFi mesh networks (from £400), CCTV systems (consultative pricing), VoIP (from £10/handset), and more. Our team can design a complete solution for your property.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Pricing — Integra Networks Connectivity Plans"
        description="Transparent pricing for rural broadband. Integra SD-WAN from £80/month, Pro from £135/month, Enterprise from £400/month. No hidden fees. Free installation."
        keywords="pricing, broadband, rural internet, SD-WAN, connectivity plans"
        url="/pricing"
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/20" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-24">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Pricing <ArrowLeft className="h-3 w-3 rotate-180" /> Plans
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Business-grade connectivity. Transparent pricing. No surprises.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              From £80/month for homeworkers to custom enterprise infrastructure. Pick what you need. No hidden fees.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker">Check Your Coverage</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* PRICING TIERS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Four Tiers. One Philosophy.</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Pricing that grows with you.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              All prices shown are "From" — monthly costs scale with your needs.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                {/* PRICE */}
                <div className="mb-6">
                  {tier.price === "Custom" ? (
                    <p className="text-4xl font-bold text-primary mb-1">Custom</p>
                  ) : (
                    <>
                      <p className="text-4xl font-bold text-foreground mb-1">
                        From £{tier.price}<span className="text-sm font-normal text-muted-foreground">/month</span>
                      </p>
                    </>
                  )}
                  <p className="text-sm text-muted-foreground">{tier.speed}</p>
                  <p className="text-sm font-semibold text-primary mt-2">{tier.sla}</p>
                </div>

                {/* FEATURES */}
                <div className="mb-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BEST FOR */}
                <div className="mb-6 pb-6 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Best for:</p>
                  <p className="text-sm text-foreground">{tier.bestFor}</p>
                </div>

                {/* CTA */}
                <Button asChild size="lg" variant={tier.cta.href === "/availability-checker" ? "default" : "outline"} className="w-full">
                  <Link to={tier.cta.href}>{tier.cta.text}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* UNIVERSAL INCLUSIONS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-2xl mx-auto">
              All plans include.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              No matter which tier you choose, these are built in.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {universalInclusions.map((item) => (
              <motion.div key={item.text} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center flex flex-col items-center">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <p className="text-sm font-medium text-surface-dark-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* VALUE PROPOSITION */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  What's One Hour of Downtime Worth?
                </h2>
                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  For retail, a single hour of EPOS downtime costs £500–2,000. For healthcare, it costs reputation. For any business, it costs clients. Integra's redundancy means you'll never notice when something fails.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-primary font-semibold hover:bg-white/90">
                    <Link to="/availability-checker">See Your Potential Savings</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/contact">Talk to Our Team</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQ */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">Frequently asked questions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-medium text-surface-dark-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-surface-dark-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-4 text-sm text-surface-dark-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FINAL CTA */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4 max-w-3xl mx-auto">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Check your coverage in 30 seconds. No postcode-snooping. Just real answers.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker">Check Availability</Link>
              </Button>
            </motion.div>
            <p className="text-sm text-muted-foreground mt-8">
              Or <Link to="/contact" className="font-semibold text-primary hover:underline">speak to our team</Link> for a custom quote.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
