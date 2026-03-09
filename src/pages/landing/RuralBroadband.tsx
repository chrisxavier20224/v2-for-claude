import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Satellite, Zap, Leaf, Radio } from "lucide-react";
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
    icon: Satellite,
    title: "Starlink Installation",
    description: "Quick deployment satellite broadband for rural properties",
    href: "/connectivity/starlink-installation",
  },
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Redundant connectivity with 99.5% uptime guarantee",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Leaf,
    title: "Rural SMEs",
    description: "Business solutions tailored for countryside enterprises",
    href: "/sectors/rural-smes",
  },
  {
    icon: Radio,
    title: "Integra Bridge",
    description: "Extended range connectivity for distributed rural locations",
    href: "/connectivity/integra-bridge",
  },
];

const RuralBroadband = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "No Fibre Available",
      description: "Rural areas often fall through the gaps of traditional broadband rollouts.",
    },
    {
      title: "Painfully Slow Speeds",
      description: "Limited to 10-20 Mbps? Upload speeds that make video calls impossible?",
    },
    {
      title: "Constant Dropouts",
      description: "Unreliable connections disrupt video calls, video streaming, and business operations.",
    },
    {
      title: "Expensive Construction",
      description: "Traditional fibre installation costs thousands in groundwork and permits.",
    },
  ];

  const faqItems = [
    {
      question: "What if I have no mobile signal where I am?",
      answer:
        "We conduct a full site survey before installation. We test both Starlink and mobile coverage at your location. If there's no viable mobile signal, we may recommend a leased line or alternative solution. We never leave you guessing.",
    },
    {
      question: "Is Starlink reliable enough for running a business?",
      answer:
        "Starlink alone has ~95% uptime. Our SD-WAN solution adds 4G/5G failover, bringing reliability to 99.5% — matching traditional leased lines. We manage everything, monitor it 24/7, and you get dedicated UK support.",
    },
    {
      question: "How many buildings can you cover?",
      answer:
        "Starlink covers a wide area once installed. We can add multiple 4G/5G boosters for larger estates. Most rural estates with buildings within 500m of each other can be covered with a single Starlink + distributed mesh WiFi.",
    },
    {
      question: "Will this work in really bad weather?",
      answer:
        "Starlink continues in heavy rain, though speeds may dip slightly. Our 4G/5G failover kicks in automatically during extreme weather. Overall uptime remains 99.5% even in harsh rural conditions.",
    },
    {
      question: "What happens if Starlink goes down?",
      answer:
        "Your 4G/5G connection automatically takes over. You stay online. Our SD-WAN load balances traffic, so even during outages you remain connected. It's built for reliability.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Rural Broadband UK | Fast Internet Where Fibre Can't Reach | Integra Networks"
        description="Fast, reliable broadband for rural businesses and farms. No fibre? No problem. Starlink SD-WAN with 4G/5G failover. 99% UK coverage. Installed in 14 days."
        keywords="rural broadband, countryside internet, farm broadband, rural wifi, Starlink UK"
        url="/lp/rural-broadband"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Fast, Reliable Broadband — Even Where Fibre Can't Reach
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              No more 10 Mbps. No digging. No planning permission. Get connected to 350 Mbps in 14 days with our Starlink SD-WAN solution. Used by farms, estates, and rural businesses across the UK.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=rural-broadband">Get Rural Coverage Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=rural-broadband">
                  Check Rural Coverage
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Problem</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Sound familiar?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              We solve the rural connectivity problem with technology that actually works.
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
              Why We're Different
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              We solve the rural connectivity problem with technology that actually works.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">99%</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">UK Coverage</h3>
              <p className="text-muted-foreground">
                Starlink reaches 99% of UK postcodes. If we can't reach you, we'll tell you upfront.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">£0</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Installation Costs</h3>
              <p className="text-muted-foreground">
                No digging. No planning permission. No hidden charges. We handle everything.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">14</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Days Average Install</h3>
              <p className="text-muted-foreground">
                From survey to live. Fast. Unlike traditional fibre which can take 12+ weeks.
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
              Our Rural Solutions
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Choose the plan that fits your property size and needs.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-primary/40 p-8">
              <h3 className="text-2xl font-bold text-surface-dark-foreground mb-2">Starlink SD-WAN</h3>
              <p className="text-surface-dark-muted mb-4">Best for farms, estates, smallholdings</p>
              <div className="text-4xl font-bold text-white mb-6">
                £80<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Starlink + 4G/5G failover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>50-220 Mbps download speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>99.5% uptime SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fully managed service</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=rural-broadband&product=starlink-sdwan">Get Quote</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/40 p-8">
              <h3 className="text-2xl font-bold text-surface-dark-foreground mb-2">Integra Pro</h3>
              <p className="text-surface-dark-muted mb-4">Best for larger estates, multiple buildings</p>
              <div className="text-4xl font-bold text-white mb-6">
                £135<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dual 4G/5G SIMs load balanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>100-350 Mbps speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Mesh WiFi for large estates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>UK engineer support</span>
                </li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=rural-broadband&product=integra-pro">Get Quote</Link>
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
              Get Your Rural Property Connected
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Coverage Check</h3>
              <p className="text-muted-foreground">Tell us your postcode and we check coverage in 90 seconds. No hidden catches.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Site Survey</h3>
              <p className="text-muted-foreground">Our engineer tests signal at your location and designs the best setup.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live & Supported</h3>
              <p className="text-muted-foreground">Installation in 14 days. We monitor 24/7 and provide dedicated UK support.</p>
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
                  <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-4">Royle Farm Estate</h2>
                  <p className="text-surface-dark-muted mb-6">
                    "We thought we were stuck in the stone age. Integra got us connected in 10 days, no digging, no councillors to argue with. Game changer." — Robert Royle, Estate Manager
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">7</div>
                      <p className="text-sm text-surface-dark-muted">Buildings Connected</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">350</div>
                      <p className="text-sm text-surface-dark-muted">Mbps Average Speed</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <p className="text-surface-dark-muted text-center">150-acre farm estate | 7 buildings | 10-day installation</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Stop Losing Business to Bad Broadband
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Get a free coverage check in 90 seconds. No hidden costs. No locked-in contracts. Just fast, reliable broadband built for rural areas.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=rural-broadband">Get Rural Coverage Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=rural-broadband">
                      Check Coverage
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
            <span className="font-semibold">Ready to upgrade?</span> Call our rural broadband specialists:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. We understand rural challenges.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default RuralBroadband;
