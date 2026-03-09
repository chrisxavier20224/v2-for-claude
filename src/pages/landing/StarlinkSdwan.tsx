import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Satellite, Zap, Radio, BarChart3 } from "lucide-react";
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
    description: "Professional setup and configuration of Starlink systems",
    href: "/connectivity/starlink-installation",
  },
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Advanced redundancy and multi-connection management",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Radio,
    title: "4G/5G Backup",
    description: "Automatic failover connectivity for business continuity",
    href: "/connectivity/4g-5g-backup",
  },
  {
    icon: BarChart3,
    title: "Pricing",
    description: "Transparent, flexible pricing for all business needs",
    href: "/pricing",
  },
];

const StarlinkSdwan = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "Starlink Drops Unexpectedly",
      description: "Weather, obstructions, or satellites cause brief outages. OK for home use, disastrous for business.",
    },
    {
      title: "You're on Your Own",
      description: "Starlink support is chatbots. No UK engineers. When it breaks, you're stuck troubleshooting.",
    },
    {
      title: "No Real SLA",
      description: "Starlink publishes no uptime guarantees. Business continuity requires redundancy.",
    },
    {
      title: "Expensive Downtime",
      description: "Even 1 hour of outage costs thousands in lost productivity. Risk isn't worth the savings.",
    },
  ];

  const faqItems = [
    {
      question: "How much faster is SD-WAN failover than Starlink alone?",
      answer:
        "Starlink alone has ~95% uptime with occasional 10-30 second dropouts. Our SD-WAN adds 4G failover, seamlessly switching traffic in under 1 second. Net result: 99.5% uptime with zero noticeable drops.",
    },
    {
      question: "Will I need a separate 4G contract?",
      answer:
        "No. We bundle 4G as part of the SD-WAN service. It's included in your monthly fee. You get Starlink + 4G managed as one service by our UK team.",
    },
    {
      question: "What if I lose power? Do I still stay online?",
      answer:
        "Great question. Our SD-WAN router can run on battery backup (optional add-on). With backup, you stay online for 2-4 hours during power loss. 4G failover keeps working for as long as the cell network is up.",
    },
    {
      question: "Can I upgrade to a higher Starlink plan if I need more speed?",
      answer:
        "Yes. Starlink speeds vary by your dish location (50-220 Mbps typical). If you're in a better coverage area, you can request an upgrade. We'll test your actual speeds and make sure you get the best possible performance.",
    },
    {
      question: "How does pricing compare to traditional leased lines?",
      answer:
        "Leased lines cost £250-1,500/month. Our Starlink SD-WAN is £80/month with 99.5% SLA. For areas without fibre, we deliver enterprise reliability at a fraction of the cost.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Starlink SD-WAN | Managed Starlink with 4G Failover | Integra Networks"
        description="Reliable Starlink for business. 99.5% uptime SLA with 4G failover. Fully managed by UK engineers. From £80/month."
        keywords="Starlink business, managed Starlink, Starlink UK, Starlink failover, SD-WAN"
        url="/lp/starlink-sdwan"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Starlink Made Reliable — SD-WAN Failover Ensures You Never Drop
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Want Starlink's affordability with enterprise reliability? Our SD-WAN solution adds 4G failover and UK support. 99.5% uptime guaranteed. All managed for you.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=starlink-sdwan">Activate Starlink SD-WAN</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=starlink-sdwan">
                  Check Availability
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
              Thinking about Starlink for your business?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Starlink is amazing for consumers, but business demands more reliability than a consumer product can deliver.
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

      {/* THE GAP */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Why Starlink Alone Isn't Enough for Business
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              The numbers tell the story.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-2">95%</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Starlink Uptime</h3>
              <p className="text-muted-foreground">
                5% downtime = ~36 hours per year. Small for home use. Catastrophic for business.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-2">No SLA</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No Guarantees</h3>
              <p className="text-muted-foreground">
                Starlink publishes no uptime guarantees. You can't claim downtime compensation.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-2">Chatbot</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No Real Support</h3>
              <p className="text-muted-foreground">
                Starlink support is automated. No UK engineers. No emergency escalation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* OUR SOLUTION */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">
              Integra's Starlink SD-WAN Solution
            </h2>
          </AnimatedSection>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-primary/40 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-4">What You Get</h3>
                <ul className="text-surface-dark-muted space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Starlink + 4G bonded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Automatic failover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>99.5% uptime SLA</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-4">How It Works</h3>
                <ul className="text-surface-dark-muted space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Load balancing across connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Sub-second failover on outage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>24/7 monitoring & alerts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-4">Your Support</h3>
                <ul className="text-surface-dark-muted space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Dedicated UK engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Phone support (not chatbot)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Emergency escalation pathway</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-surface-dark-foreground mb-3">Pricing</h4>
                  <p className="text-4xl font-bold text-white mb-2">
                    £80<span className="text-lg text-surface-dark-muted">/month +VAT</span>
                  </p>
                  <p className="text-surface-dark-muted">50-220 Mbps • 99.5% SLA • Fully managed</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-surface-dark-foreground mb-3">What's Included</h4>
                  <p className="text-surface-dark-muted">
                    Starlink hardware, 4G SIM, SD-WAN router, installation, monthly monitoring, and 24/7 UK support. No hidden costs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* HOW IT WORKS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              From Order to Live in 3 Steps
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Verify Coverage</h3>
              <p className="text-muted-foreground">Check that Starlink and 4G are available at your location. Takes 2 minutes.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Order & Install</h3>
              <p className="text-muted-foreground">We ship everything pre-configured. Installation within 10-14 days.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Always Online</h3>
              <p className="text-muted-foreground">99.5% uptime guaranteed. We manage everything. You focus on your business.</p>
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Real Success Story</p>
                  <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-4">Steam Rally UK</h2>
                  <p className="text-surface-dark-muted mb-6">
                    "With Starlink alone, we'd be terrified of downtime. The SD-WAN failover means we actually trust our connectivity. It's a business enabler, not a liability." — James Thornton, Event Director
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                      <p className="text-sm text-surface-dark-muted">Downtime</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                      <p className="text-sm text-surface-dark-muted">Attendees Connected</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <p className="text-surface-dark-muted text-center">Annual steam rally event | Live ticketing | Vendor payments | Video livestream</p>
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
                  Get Enterprise Reliability from Starlink
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Stop worrying about downtime. Our engineers manage everything. You get 99.5% uptime, dedicated support, and a service that scales with your needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=starlink-sdwan">Activate Starlink SD-WAN</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/availability-checker?utm_source=lp&utm_medium=organic&utm_campaign=starlink-sdwan">
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

      {/* CONTACT */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold">Want to learn more?</span> Chat with our team:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. We're happy to discuss Starlink business solutions.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default StarlinkSdwan;
