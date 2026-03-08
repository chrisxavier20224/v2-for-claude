import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const mainProducts = [
  {
    name: "Integra SD-WAN",
    price: "80",
    period: "/month",
    installation: "950",
    description: "Single-site businesses needing reliable internet",
    features: [
      "Up to 150Mbps bonded 4G/5G",
      "Enterprise-grade SD-WAN router included",
      "99.9% uptime SLA",
      "Free engineer callouts",
    ],
    cta: "Check Availability",
    ctaLink: "/availability-checker",
    popular: false,
    accent: "from-blue-900/40 to-blue-800/40 border-primary/40",
  },
  {
    name: "Integra Pro",
    price: "135",
    period: "/month",
    installation: "1,500",
    description: "Businesses needing maximum speed and reliability",
    features: [
      "Up to 400Mbps multi-network bonding",
      "Advanced load balancing + failover",
      "Priority support",
      "Cloud management portal",
    ],
    cta: "Check Availability",
    ctaLink: "/availability-checker",
    popular: true,
    accent: "from-blue-600/60 to-primary/50 border-primary/60",
  },
  {
    name: "Integra Bridge",
    price: "250",
    period: "/month",
    installation: "2,500",
    description: "Multi-building estates and campus networks",
    features: [
      "Point-to-point wireless connectivity",
      "Connect multiple buildings",
      "Up to 1Gbps link speeds",
      "Ideal for farms and construction",
    ],
    cta: "Get a Quote",
    ctaLink: "/contact",
    popular: false,
    accent: "from-emerald-900/40 to-emerald-800/40 border-emerald-600/40",
  },
  {
    name: "Leased Lines",
    price: "400",
    period: "/month",
    installation: "Site survey required",
    description: "Data-heavy businesses and offices with 50+ users",
    features: [
      "Dedicated fibre connection",
      "Symmetrical upload/download",
      "99.99% uptime SLA",
      "Uncontended bandwidth",
    ],
    cta: "Get a Quote",
    ctaLink: "/contact",
    popular: false,
    accent: "from-purple-900/40 to-purple-800/40 border-purple-600/40",
  },
];

const addOns = [
  {
    name: "Business WiFi",
    price: "350",
    period: "one-off",
    description: "Or included with connectivity packages",
  },
  {
    name: "CCTV Installation",
    price: "1,500",
    period: "one-off",
    description: "Install, configure & support (we do not monitor)",
  },
  {
    name: "Starlink Installation",
    price: "950",
    period: "one-off",
    description: "Satellite internet setup for remote locations",
  },
  {
    name: "4G/5G Backup",
    price: "50",
    period: "/month add-on",
    description: "Extra resilience for critical connections",
  },
  {
    name: "Wireless Distribution",
    price: "Custom",
    period: "pricing",
    description: "Contact us for tailored solutions",
  },
];

const whatsIncluded = [
  { label: "All Hardware Owned by Integra", description: "No leasing charges ever" },
  { label: "Free Engineer Callouts", description: "For life — whenever you need help" },
  { label: "24/7 Monitoring & Support", description: "Your connection is watched constantly" },
  { label: "99.9% or 99.99% SLA", description: "Backed by service credits if we fail" },
  { label: "Month-to-Month Terms", description: "No long contracts, cancel anytime" },
  { label: "14-Day Money Back Guarantee", description: "If you're not happy, we'll refund you" },
];

const faqs = [
  {
    q: "Are there any hidden fees?",
    a: "No. The price you see is the price you pay — plus VAT. Installation fee is quoted upfront. Hardware is included. No surprise charges for support or monitoring. If something's extra, we tell you before we install it.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "No. All our packages are month-to-month. You can cancel anytime with 30 days notice. We're confident in our service, so we don't need you locked in.",
  },
  {
    q: "What happens if I'm not happy?",
    a: "You have 14 days from installation to request a full refund — no questions asked. We also back all services with uptime SLAs. If we drop below the guaranteed uptime, you get a credit on your invoice.",
  },
  {
    q: "Who owns the hardware?",
    a: "Integra owns all hardware. This means no leasing fees, and we maintain everything for free. If equipment breaks, we replace it. You're not on the hook for expensive hardware costs.",
  },
  {
    q: "What's included in the installation fee?",
    a: "Everything. Site survey, hardware delivery, installation by our engineer, configuration, and testing. You'll be shown exactly what the fee covers before we begin. After installation, all engineer visits are free for the life of your contract.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes, seamlessly. Start with Integra SD-WAN, then upgrade to Integra Pro or a leased line as your business grows. We handle the migration without service disruption. No penalty for upgrading.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageLayout>
      <SEO
        title="Pricing"
        description="Transparent, fixed pricing for business connectivity. SD-WAN, leased lines, wireless bridges, and add-on services. No hidden fees, month-to-month terms, 14-day money-back guarantee."
        keywords="pricing, SD-WAN pricing, leased line pricing, business broadband cost, connectivity pricing"
        url="/pricing"
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Transparent Pricing. No Hidden Fees.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              We own all hardware. You own the flexibility. Fixed pricing, month-to-month terms, and a 14-day money-back guarantee.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* MAIN PRICING CARDS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Our Products
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Choose the connectivity solution that fits your needs. Start flexible, scale as you grow.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {mainProducts.map((product, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`rounded-2xl bg-gradient-to-br ${product.accent} border p-8 relative transition-transform hover:scale-105 duration-300`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-surface-dark-foreground mb-2">{product.name}</h3>
                <p className="text-surface-dark-muted mb-6 text-sm">{product.description}</p>

                <div className="mb-2">
                  <div className="text-4xl font-bold text-white">
                    £{product.price}
                    <span className="text-lg text-surface-dark-muted">{product.period}</span>
                  </div>
                </div>
                <div className="text-sm text-surface-dark-muted mb-8">
                  Installation from £{product.installation}
                </div>

                <ul className="text-surface-dark-muted space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="sm" className="w-full" variant={product.popular ? "default" : "outline"}>
                  <Link to={product.ctaLink}>{product.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* WHAT'S INCLUDED */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              What Comes Standard
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              All our packages include everything you need — no surprises.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {whatsIncluded.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8">
                <div className="text-4xl font-bold text-primary mb-4">✓</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ADD-ON SERVICES */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Add-On Services
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Extend your connectivity with additional solutions tailored to your needs.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {addOns.map((addon, idx) => (
              <motion.div key={idx} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors">
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-1">{addon.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  £{addon.price}
                  <span className="text-sm font-normal text-surface-dark-muted"> {addon.period}</span>
                </p>
                <p className="text-sm text-surface-dark-muted">{addon.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 text-center">
            <p className="text-surface-dark-foreground mb-4">
              Need something custom? <span className="font-semibold">We can help.</span>
            </p>
            <Button asChild variant="outline" className="border-primary/40 text-surface-dark-foreground hover:bg-white/10">
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
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
            {faqs.map((faq, i) => (
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
                  className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-card/80 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                  Ready to Find Your Perfect Fit?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Check availability in 90 seconds or request a custom quote. Our team will help you choose the right solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/availability-checker">Check Availability</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* TRUST & CONTACT */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold">Have questions?</span> Call our sales team:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. UK-based support team ready to help.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
