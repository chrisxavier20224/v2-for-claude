import { Link } from "react-router-dom";
import { Check, ChevronDown, ArrowRight, Wrench, Clock, Award, CreditCard, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import heroImg from "@/assets/connectivity/bridge-hero.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const mainProducts = [
  {
    name: "Integra Connect",
    price: "55",
    period: "/month",
    installation: "1,250",
    description: "Reliable 4G/5G broadband on the best available network — professionally installed",
    features: [
      "Single-network 4G/5G connectivity",
      "External antenna + commercial-grade router",
      "Professional installation included",
      "UK-based phone & WhatsApp support",
    ],
    cta: "Check Availability",
    ctaLink: "/check",
    popular: false,
    tier: "entry",
    note: null,
    productLink: "/connectivity/integra-connect",
  },
  {
    name: "Starlink SD-WAN",
    price: "80",
    period: "/month",
    installation: "2,200",
    description: "Starlink satellite + 4G/5G cellular failover, professionally installed and managed",
    features: [
      "Starlink + 4G/5G bonded connectivity",
      "Enterprise-grade SD-WAN router included",
      "You pay Starlink direct for dish & subscription",
      "Engineer support included",
    ],
    cta: "Check Availability",
    ctaLink: "/check",
    popular: false,
    tier: "starter",
    note: null,
  },
  {
    name: "Integra Pro",
    price: "135",
    period: "/month",
    installation: "2,200",
    description: "Multi-network bonding with up to 350Mbps — our most popular solution for homeworkers and businesses",
    features: [
      "Up to 350Mbps multi-network bonding",
      "Advanced load balancing + failover",
      "Priority support",
      "Static IP available (£10/mo)",
    ],
    cta: "Check Availability",
    ctaLink: "/check",
    popular: true,
    tier: "popular",
    note: "Already have Starlink? Add it to your Pro setup for triple-connection resilience — same price, more redundancy.",
  },
  {
    name: "Integra Ultrafast",
    price: "195",
    period: "/month",
    installation: "2,800",
    description: "Three-network bonding for maximum speed and resilience",
    features: [
      "Up to 450Mbps across 3 networks",
      "Triple-network redundancy",
      "Priority support + SLA",
      "Static IP available (£10/mo)",
    ],
    cta: "Check Availability",
    ctaLink: "/check",
    popular: false,
    tier: "mid",
    note: null,
  },
  {
    name: "Enterprise",
    price: "400",
    period: "/month",
    installation: "3,300",
    description: "Up to 500Mbps bonded — for businesses that demand the best",
    features: [
      "Up to 500Mbps bonded connectivity",
      "99.99% uptime SLA",
      "Dedicated account manager",
      "Custom configuration & support",
    ],
    cta: "Check Availability",
    ctaLink: "/check",
    popular: false,
    tier: "enterprise",
    note: null,
  },
];

const addOns = [
  { name: "Static IP", price: "10", period: "/month", description: "Essential for CCTV, VPNs, firewalls and remote access" },
  { name: "4G/5G Backup", price: "60", period: "/month", description: "Cellular backup for extra resilience on any connection" },
  { name: "VoIP", price: "From 10", period: "/handset/month", description: "Business phone system over your Integra connection" },
  { name: "Managed WiFi", price: "120", period: "/year", description: "£95 gateway + ongoing management and support" },
  { name: "Business WiFi", price: "Custom", period: "quoted", description: "Consultative — tailored to your premises and requirements" },
  { name: "CCTV", price: "Custom", period: "quoted", description: "Professional install and configuration — priced after site survey" },
];

const whatsIncluded = [
  { icon: Wrench, label: "Dedicated Support", description: "Proactive monitoring and ongoing assistance" },
  { icon: Clock, label: "24/7 Monitoring & Support", description: "Your connection is watched constantly" },
  { icon: Award, label: "Uptime SLA on Every Package", description: "Backed by service credits — up to 99.99% on Enterprise" },
  { icon: CreditCard, label: "12-Month Agreements", description: "Simple 12-month terms — shorter contracts available on request" },
  { icon: TrendingUp, label: "14-Day Money Back Guarantee", description: "If you're not happy, we'll refund you" },
];

const faqs = [
  { q: "Are there any hidden fees?", a: "No. The price you see is the price you pay — plus VAT. Installation fee is quoted upfront. Hardware is included. No surprise charges for support or monitoring. If something's extra, we tell you before we install it." },
  { q: "Do I need to sign a long contract?", a: "Our standard agreement is 12 months. In some cases, we can offer shorter terms — just ask. After your initial term, you can cancel with 30 days' notice." },
  { q: "What happens if I'm not happy?", a: "You have 14 days from installation to request a full refund — no questions asked. We also back all services with uptime SLAs. If we drop below the guaranteed uptime, you get a credit on your invoice." },
  { q: "Who owns the hardware?", a: "Integra owns all hardware. This means no leasing fees, and we maintain everything for free. If equipment breaks, we replace it. You're not on the hook for expensive hardware costs." },
  { q: "What's included in the installation fee?", a: "Everything. Desktop survey, hardware delivery, installation by our engineer, configuration, and testing. You'll be shown exactly what the fee covers before we begin. After installation, all engineer visits for support and maintenance are included in your monthly service." },
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageLayout>
      <SEO
        title="Fibre Alternative Pricing"
        description="Fixed pricing for SD-WAN and Starlink. No hidden fees, 12-month terms, 14-day guarantee. Hardware included."
        keywords="SD-WAN pricing, Starlink business pricing, fibre alternative pricing, business broadband cost, cellular broadband pricing"
        url="/pricing"
      />
      <SchemaMarkup data={faqSchemaData} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business connectivity infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-primary mb-4"
            >

              Fibre Alternative Pricing
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-medium"
            >
              Transparent Pricing. No Hidden Fees.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Hardware included with every install. Fixed pricing, simple 12-month terms, and a 14-day money-back guarantee.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRICING CARDS ────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Our Products</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
              Choose your connection
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Start flexible, scale as you grow. Every package includes hardware, monitoring, and dedicated support.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {mainProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className={`relative rounded-2xl border backdrop-blur-sm p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
                  product.popular
                    ? "bg-gradient-to-b from-primary/15 to-primary/5 border-primary/50 ring-1 ring-primary/20"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-semibold shadow-lg shadow-primary/30">
                      <Award className="h-3 w-3" /> Homeworker Favourite
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-medium text-surface-dark-foreground mb-2 mt-2">{product.name}</h3>
                <p className="text-surface-dark-muted text-sm mb-5 leading-relaxed">{product.description}</p>

                {/* Price block */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    {product.pricePrefix && <span className="text-sm text-surface-dark-muted">{product.pricePrefix}</span>}
                    <span className="text-4xl font-medium text-white tracking-tight">£{product.price}</span>
                    <span className="text-sm text-surface-dark-muted">{product.period}</span>
                  </div>
                  <p className="text-xs text-surface-dark-muted mt-1">+VAT · Installation from £{product.installation} +VAT</p>
                </div>

                {/* Divider */}
                <div className={`h-px mb-5 ${product.popular ? "bg-primary/30" : "bg-white/10"}`} />

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${product.popular ? "bg-primary/20" : "bg-white/10"}`}>
                        <Check className={`h-3 w-3 ${product.popular ? "text-primary" : "text-primary/80"}`} />
                      </div>
                      <span className="text-sm text-surface-dark-muted leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {product.note && (
                  <p className="text-xs text-primary/70 italic mb-4 leading-relaxed">{product.note}</p>
                )}

                <Button
                  asChild
                  size="sm"
                  className={`w-full mt-auto ${
                    product.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-white/10 text-surface-dark-foreground hover:bg-white/15 border border-white/10"
                  }`}
                >
                  <Link to={product.ctaLink} className="inline-flex items-center gap-2">
                    {product.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Included as Standard</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
              Every package. No exceptions.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Hardware, monitoring, and support — all included from day one.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whatsIncluded.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── ADD-ON SERVICES ──────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Extend Your Setup</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
              Add-On Services
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Layer on additional solutions as your business needs evolve.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {addOns.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-medium text-surface-dark-foreground">{addon.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-medium text-white">
                    {addon.price.startsWith("From") || addon.price === "Custom" ? addon.price : `£${addon.price}`}
                  </span>
                  <span className="text-sm text-surface-dark-muted">{addon.period}</span>
                </div>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-surface-dark-foreground mb-4">
              Need something bespoke? <span className="font-semibold">We can help.</span>
            </p>
            <Button asChild variant="outline" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
              <Link to="/contact" className="inline-flex items-center gap-2">Talk to Our Team <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Got Questions?</p>
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
                  className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-card/80 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Ready to Get Started?</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Find your perfect fit.
            </h2>
            <p className="text-lg text-surface-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Check availability in 90 seconds or request a custom quote. Our team will help you choose the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-surface-dark-muted">
                <span className="font-semibold text-surface-dark-foreground">Prefer to talk?</span>{" "}
                Call our sales team:{" "}
                <a href="tel:02033887111" className="text-primary hover:underline font-semibold">
                  0203 388 7111
                </a>
              </p>
              <p className="text-xs text-surface-dark-muted mt-2">
                Monday–Friday, 9am–5:30pm GMT. UK-based support.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
