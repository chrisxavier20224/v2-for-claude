import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ClipboardCheck, Wrench, Settings, ShieldCheck, Handshake, UserCheck, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/bridge-hero.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const handles = [
  { icon: ClipboardCheck, title: "Site Survey", body: "We assess the site, check signal across every carrier, and recommend the right product before anything is ordered." },
  { icon: Wrench, title: "Professional Installation", body: "Our engineers install carrier-specific antennas, externally mounted and cabled. Full physical install, no customer self-install." },
  { icon: Settings, title: "Configuration & Go-Live", body: "SD-WAN, load balancing or bonding, failover — configured remotely before dispatch. Live the same day as install." },
  { icon: ShieldCheck, title: "Ongoing Support & Monitoring", body: "UK-based support and 24/7 proactive monitoring via Integra Cloud." },
];

const steps = [
  { icon: Handshake, title: "Talk to us", body: "A short conversation about your customer base and where the gaps are. No commitment." },
  { icon: UserCheck, title: "Get onboarded", body: "We set you up as a wholesale partner with pricing, process, and a named contact." },
  { icon: Send, title: "Register deals", body: "Once you're a partner, you get the Integra partner portal: submit an opportunity in under two minutes and we take it from there." },
];

const Wholesale = () => {
  return (
    <PageLayout>
      <SEO
        title="Wholesale & ISP Partnership"
        description="The infrastructure partner behind your brand. Integra delivers enterprise-grade connectivity in 14 days under your brand — survey, install, and support handled."
        keywords="ISP wholesale, connectivity partner, white label SD-WAN, reseller programme, ISP partnership UK, wholesale internet"
        url="/wholesale"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra wholesale ISP partnership" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Integra <ArrowLeft className="h-3 w-3 rotate-180" /> Wholesale
                </span>
              </Link>
            </motion.div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For ISPs &amp; Resellers</p>
            <h1 className="mb-6 text-heading-1 md:text-display-sm font-normal tracking-tight text-white max-w-3xl">
              Be the ISP that delivers — <span className="text-primary">even when fibre can't.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              When your customer needs connectivity and the fibre's weeks away, Integra is the infrastructure partner behind your brand. We handle the survey, install, and support. You keep the customer, the brand, and the margin.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to us about partnering <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE PROBLEM — dark */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6 max-w-3xl">
              The lead time isn't your fault. <span className="text-primary">The delay is still your problem.</span>
            </h2>
            <p className="text-lg text-surface-dark-muted leading-relaxed max-w-3xl">
              You've won the deal. Then Openreach quotes 75–120 days, and you're stuck defending a timeline you don't control. Deadlines slip, the customer's patience wears thin, and your reputation takes the hit for infrastructure you don't own.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE PROPOSITION — light */}
      <section className="bg-section-light-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Proposition</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-6 max-w-3xl mx-auto">
              We're the network <span className="text-primary">behind your network.</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Integra gives you enterprise-grade connectivity you can deliver under your own brand, in 14 days — no Openreach, no wayleaves, no waiting. Bonded 4G/5G and Starlink, SD-WAN, leased lines, and Integra Bridge for the fibre-gap moment. Your customer sees you. We're the engine room.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT INTEGRA HANDLES — dark */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What Integra Handles</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground text-center mb-16 max-w-3xl mx-auto">
              We do the <span className="text-primary">heavy lifting.</span>
            </h2>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {handles.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal text-surface-dark-foreground mb-3">{item.title}</h3>
                <p className="text-surface-dark-muted leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU KEEP — light */}
      <section className="bg-section-light-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What You Keep</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-6 max-w-3xl mx-auto">
              Your brand. Your customer. <span className="text-primary">Your margin.</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              This is wholesale, not a referral scheme. You own the customer relationship and set your own pricing. We stay invisible — the connectivity is delivered, branded, and supported as yours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTEGRA BRIDGE FOR ISPs — dark (featured card) */}
      <section className="relative bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/backgrounds/datacentre-hires-bg.webp" alt="" className="w-full h-full object-cover opacity-[0.06]" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary bg-primary/10 ring-1 ring-primary/30 p-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Integra Bridge for ISPs</p>
              <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6">
                Deliver day one. <span className="text-primary">Let the fibre catch up.</span>
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Integra Bridge bonds Starlink and 5G/4G over a Layer 2 tunnel from our data centre — enterprise-grade connectivity for your customer in around 10 days, while their fibre is still being built. When the fibre lands, Bridge stays on as permanent failover. Your customer is never the one waiting.
              </p>
              <Button asChild size="lg">
                <Link to="/connectivity/integra-bridge">How Integra Bridge works <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW PARTNERING WORKS — light */}
      <section className="bg-section-light-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How Partnering Works</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-16 max-w-3xl mx-auto">
              Three steps to your <span className="text-primary">first delivery.</span>
            </h2>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {steps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="relative rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {i + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <step.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA — dark */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6">
              Let's talk about what we can <span className="text-primary">deliver together.</span>
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 max-w-2xl mx-auto">
              Tell us about your customers and the connectivity gaps you're hitting. We'll show you what partnering looks like.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Wholesale;
