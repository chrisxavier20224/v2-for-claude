import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Wifi, Radio, Users } from "lucide-react";
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
    description: "Redundant connectivity with automatic failover protection",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Wifi,
    title: "Home WiFi",
    description: "Reliable wireless coverage for your home office setup",
    href: "/connectivity/business-wifi",
  },
  {
    icon: Radio,
    title: "4G/5G Backup",
    description: "Automatic failover connectivity when primary is unavailable",
    href: "/connectivity/4g-5g-backup",
  },
  {
    icon: Users,
    title: "Homeworkers",
    description: "Solutions tailored for remote professionals and self-employed",
    href: "/sectors/homeworkers",
  },
];

const HomeworkerBroadband = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "Video Call Drops",
      description: "Nothing worse than freezing mid-call or being dropped entirely from an important meeting.",
    },
    {
      title: "Slow Uploads",
      description: "Taking 10 minutes to upload a file while everyone waits? Undermines your professionalism.",
    },
    {
      title: "Always Stressed",
      description: "Constantly worried your broadband will let you down. Hurts productivity and confidence.",
    },
    {
      title: "No Better Options",
      description: "Stuck with whatever local ISP offers. No rural broadband choice.",
    },
  ];

  const faqItems = [
    {
      question: "Is broadband tax deductible if I work from home?",
      answer:
        "Yes. HMRC allows you to claim broadband costs as a business expense if you're self-employed or a freelancer working from home. Keep your invoice and claim it against your tax return. Ask your accountant for specifics about your situation.",
    },
    {
      question: "What speeds do I actually need for video calls?",
      answer:
        "Video calls need just 2-5 Mbps download and 1-2 Mbps upload. But if you're also doing file uploads, cloud backups, or multiple video calls simultaneously, 100+ Mbps is more comfortable. We'll recommend the right tier for your needs.",
    },
    {
      question: "Can I use this for gaming or streaming too?",
      answer:
        "Absolutely. Once your video calls are reliable, you have plenty of speed left for streaming, gaming, or other uses. Our solutions can handle multiple simultaneous connections without degradation.",
    },
    {
      question: "What if I move house or change jobs?",
      answer:
        "If you're on a flexible plan like Starlink SD-WAN, you can pause or move the service. Leased lines are more fixed, but we can discuss options. Most home workers start with flexible solutions.",
    },
    {
      question: "Will I notice any latency issues?",
      answer:
        "Starlink latency is typically 40-60ms, which is fine for video calls. Leased lines offer lower latency (~10-20ms), but both are much faster than traditional ADSL. You won't notice any lag.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Work From Home Broadband | Home Worker Internet | Integra Networks"
        description="Reliable broadband for working from home. No more video call drops. Fast uploads. Rural or urban. From £80/month. Tax deductible."
        keywords="work from home broadband, home office internet, WFH broadband, remote work internet, home worker connectivity"
        url="/lp/homeworker-broadband"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Work From Home Without the Broadband Worry
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              No more video call drops. Upload speeds that work. Works in rural areas. From £80/month. Tax deductible. Same-day UK support when you need it.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=homeworker-broadband">Check Your Coverage</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/check?utm_source=lp&utm_medium=organic&utm_campaign=homeworker-broadband">
                  Get Quote
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
              Sound like your work-from-home life?
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              350+ home workers trust Integra for reliable, professional connectivity.
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
              Broadband Built for Remote Work
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Crystal-clear video calls, fast uploads, and peace of mind.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">0</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Video Call Drops</h3>
              <p className="text-muted-foreground">
                Symmetric speeds mean uploads don't choke your connection. Video calls run smooth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">100%</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Tax Deductible</h3>
              <p className="text-muted-foreground">
                Self-employed? Home office broadband is a business expense. Claim it on your tax return.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">1 Hour</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Support Response</h3>
              <p className="text-muted-foreground">
                Real UK engineers. Real phone support. Not chatbots. Same-day resolution.
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
              Broadband for Every Home Worker
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Budget-friendly or premium performance — choose what fits your needs.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-primary/40 p-8">
              <h3 className="text-2xl font-medium text-surface-dark-foreground mb-2">Starlink SD-WAN</h3>
              <p className="text-surface-dark-muted mb-4">Best for: Rural areas or budget-conscious</p>
              <div className="text-4xl font-medium text-white mb-6">
                £80<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>50-220 Mbps speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>4G/5G failover (always online)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Works everywhere in UK</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Perfect for video calls</span>
                </li>
              </ul>
              <p className="text-surface-dark-muted text-sm mb-4">Great for rural home workers who want affordable, reliable broadband.</p>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=homeworker-broadband&product=starlink-sdwan">Get Quote</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/40 p-8">
              <h3 className="text-2xl font-medium text-surface-dark-foreground mb-2">Integra Pro</h3>
              <p className="text-surface-dark-muted mb-4">Best for: Premium performance & speed</p>
              <div className="text-4xl font-medium text-white mb-6">
                £135<span className="text-lg text-surface-dark-muted">/month +VAT</span>
              </div>
              <ul className="text-surface-dark-muted space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>100-350 Mbps speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dual 4G/5G load balanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Symmetric upload/download</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>99.5% uptime SLA</span>
                </li>
              </ul>
              <p className="text-surface-dark-muted text-sm mb-4">For professionals who need maximum reliability and speed.</p>
              <Button asChild size="sm" className="w-full">
                <Link to="/contact?source=homeworker-broadband&product=integra-pro">Get Quote</Link>
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
              Get Started in 3 Simple Steps
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Coverage Check</h3>
              <p className="text-muted-foreground">Check if our service is available at your home. Takes 90 seconds.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Order & Install</h3>
              <p className="text-muted-foreground">We handle everything. Installation within 2-3 weeks. Simple setup.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Work Reliably</h3>
              <p className="text-muted-foreground">No more call drops. Crystal-clear video calls. Professional confidence.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* TAX BENEFITS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-12">
              Tax Benefits for Self-Employed & Freelancers
            </h2>

            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-medium text-surface-dark-foreground mb-2">100% Tax Deductible</h3>
                <p className="text-surface-dark-muted">
                  HMRC allows home office broadband as a business expense. Keep your invoice and claim it on your self-assessment return.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-medium text-surface-dark-foreground mb-2">Installation Is a Business Expense Too</h3>
                <p className="text-surface-dark-muted">
                  Your one-off installation cost is also deductible. Monthly service goes straight on your tax return.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-medium text-surface-dark-foreground mb-2">Instant Monthly Invoices</h3>
                <p className="text-surface-dark-muted">
                  Digital invoices every month. Perfect for your accountant. Makes tax time easy.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-2xl border border-white/10 bg-white/5 p-8 bg-yellow-500/5">
                <p className="text-sm text-surface-dark-muted">
                  <strong>Note:</strong> Tax deductibility rules vary by situation. Consult your accountant or tax advisor for specific guidance.
                </p>
              </motion.div>
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
                  Start Working From Home With Confidence
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Get reliable broadband for your home office. No more video call anxiety. Crystal-clear calls, fast uploads, tax deductible.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=homeworker-broadband">Check Your Home Coverage</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/check?utm_source=lp&utm_medium=organic&utm_campaign=homeworker-broadband">
                      Get Started
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
            <span className="font-semibold">Have questions?</span> Talk to a specialist:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-semibold">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Available Monday-Friday, 9am-5:30pm GMT. We work with home workers across the UK.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeworkerBroadband;
