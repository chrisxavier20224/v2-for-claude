import { Link } from "react-router-dom";
import { Check, ChevronDown, ArrowRight, Wrench, Clock, Award, CreditCard, TrendingUp, Search, FileText, Headphones } from "lucide-react";
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

const howItWorks = [
  {
    icon: Search,
    label: "Free site survey",
    description: "We assess your location, signal environment, and what's actually deliverable — before anything is quoted.",
  },
  {
    icon: FileText,
    label: "Bespoke quote",
    description: "Pricing reflects bandwidth, install complexity, contract term, and the right product for your site — not a one-size-fits-all rate card.",
  },
  {
    icon: Headphones,
    label: "Hardware & support included",
    description: "Every quote includes hardware, monitoring, and UK-based engineer support as standard. No hidden fees.",
  },
];

const whatsIncluded = [
  { icon: Wrench, label: "Dedicated Support", description: "Proactive monitoring and ongoing assistance" },
  { icon: Clock, label: "24/7 Monitoring & Support", description: "Your connection is watched constantly" },
  { icon: Award, label: "Uptime SLA on Every Package", description: "Backed by service credits — up to 99.99% on Enterprise" },
  { icon: CreditCard, label: "Flexible Contract Terms", description: "Flexible contract terms — from short-term agreements up to 36 months" },
  { icon: TrendingUp, label: "Hardware Included", description: "Routers, radios and supporting kit are part of every install" },
];

const faqs = [
  { q: "Why don't you publish a price list?", a: "Business connectivity isn't a commodity. The right product, install complexity, bandwidth, contract term, and resilience requirements all change the number — sometimes significantly. A site survey lets us quote what we can actually deliver, not a headline price you'd later have to adjust." },
  { q: "How quickly can I get a quote?", a: "Most desktop assessments come back within a couple of working days. For Integra Bridge and SD-WAN, we can often confirm feasibility and indicative pricing the same week." },
  { q: "What's included in the price?", a: "Hardware, configuration, monitoring, and UK-based engineer support are included as standard. Installation is quoted upfront — there are no surprise charges after we begin." },
  { q: "Do you offer fixed wholesale pricing?", a: "Yes — for signed wholesale and channel partners. That's handled through our partner programme, not the public site. See /wholesale to start a conversation." },
  { q: "Do I need a long contract?", a: "We offer flexible contract terms — from short-term agreements up to 36 months — quoted to fit your site and rollout." },
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
        title="How Integra Pricing Works | Integra Networks"
        description="Every Integra quote is built around your site, not a price list. Free survey, transparent scope, hardware and UK support included as standard."
        keywords="business connectivity pricing, leased line quote, SD-WAN pricing, Integra Bridge pricing"
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How Integra Pricing Works</p>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-medium">
              Pricing built around your site, not a price list.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Every quote follows a free site survey. Pricing depends on location, install complexity, bandwidth and contract term — hardware, monitoring and UK support are included as standard.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How It Works</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
              Three steps to a real number.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              No call-centre quotes. No bait-and-switch. Just a survey, a scope, and a price you can plan around.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {howItWorks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-2">Step {i + 1}</p>
                  <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">{item.label}</h3>
                  <p className="text-sm text-surface-dark-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Link to="/contact" className="inline-flex items-center gap-2">Request a quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
              <Link to="/check">Check availability</Link>
            </Button>
          </div>
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
              Hardware, monitoring, and UK-based support — included from day one on every quote.
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

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Got Questions?</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16 font-medium">
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
                className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-sm font-medium text-surface-dark-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-surface-dark-muted flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="px-6 pb-5 text-sm text-surface-dark-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Ready to get a number?</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6 font-medium">
              Tell us about your site.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Send us your address and what you're trying to do — we'll come back with what's deliverable, what it'll cost, and how fast we can get you online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Request a quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/check">Check availability</Link>
              </Button>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Prefer to talk?</span>{" "}
                Call our team:{" "}
                <a href="tel:02033887111" className="text-primary hover:underline font-semibold">
                  0203 388 7111
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
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
