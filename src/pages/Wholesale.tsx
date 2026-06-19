import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ClipboardCheck, Wrench, Settings, ShieldCheck, Handshake, UserCheck, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/bridge-hero.webp";
import reframeImg from "@/assets/wholesale/struggling-connectivity.jpg.asset.json";
import salesImg from "@/assets/wholesale/sales-team-bg.png";
import surveyImg from "@/assets/connectivity/business-wifi-surveys.webp";
import installImg from "@/assets/connectivity/sdwan-install.webp";
import configImg from "@/assets/connectivity/sdwan-stable.jpg";
import supportImg from "@/assets/connectivity/managed-sim-visibility.jpg";
import stepTalkImg from "@/assets/wholesale/wholesale-step-talk.jpg.asset.json";
import stepOnboardImg from "@/assets/wholesale/wholesale-step-onboard.jpg.asset.json";
import stepRegisterImg from "@/assets/wholesale/wholesale-step-register.jpg.asset.json";
import BigStatCallout from "@/components/figures/BigStatCallout";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const handles = [
  { icon: ClipboardCheck, title: "Site Survey", body: "We assess the site, check signal across every carrier, and recommend the right product before anything is ordered.", image: surveyImg, alt: "Engineer carrying out a connectivity site survey" },
  { icon: Wrench, title: "Professional Installation", body: "Our engineers install carrier-specific antennas, externally mounted and cabled. Full physical install, no customer self-install.", image: installImg, alt: "Engineer installing an externally-mounted antenna" },
  { icon: Settings, title: "Configuration & Go-Live", body: "SD-WAN, load balancing or bonding, failover — configured remotely before dispatch. Live the same day as install.", image: configImg, alt: "SD-WAN router configured and ready to ship" },
  { icon: ShieldCheck, title: "Ongoing Support & Monitoring", body: "UK-based support and 24/7 proactive monitoring via Integra Cloud.", image: supportImg, alt: "UK-based support team monitoring the network" },
];

const steps = [
  { icon: Handshake, title: "Talk to us", body: "A short conversation about your customer base and where the gaps are. No commitment.", image: stepTalkImg.url, alt: "Two business people meeting and shaking hands" },
  { icon: UserCheck, title: "Get onboarded", body: "We set you up as a wholesale partner with pricing, process, and a named contact.", image: stepOnboardImg.url, alt: "Engineer and account manager reviewing the partner portal" },
  { icon: Send, title: "Register deals", body: "From then on, every problem site is a two-minute submission in the partner portal. We handle the rest — survey, install, and support.", image: stepRegisterImg.url, alt: "Laptop showing a clean partner portal dashboard" },
];

const Wholesale = () => {
  return (
    <PageLayout hideCTA>
      <SEO
        title="Wholesale Partnership for ISPs & MSPs | Integra Networks"
        description="The infrastructure partner behind your brand. Integra delivers enterprise-grade connectivity in 10 working days under your brand — survey, install, and support handled."
        keywords="ISP and MSP wholesale, connectivity partner, white label SD-WAN, reseller programme, wholesale internet UK, wholesale internet"
        url="/wholesale"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra wholesale ISP and MSP partnership" className="w-full h-full object-cover" loading="eager" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For ISPs, MSPs &amp; Resellers</p>
            <h1 className="mb-6 text-heading-1 md:text-display-sm font-normal tracking-tight text-white max-w-3xl">
              Be the ISP or MSP that delivers — <span className="text-primary">even when fibre can't.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              When your customer needs connectivity and fibre is weeks away, Integra is the infrastructure partner behind your brand. We handle the survey, install, and support. You keep the customer, the brand, and the margin.
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
          <AnimatedSection className="text-center mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6">
              The lead time isn't your fault. <span className="text-primary">The delay is still your problem.</span>
            </h2>
            <p className="text-lg text-surface-dark-muted leading-relaxed">
              You've won the deal. Then Openreach quotes 10 weeks, and you're stuck defending a timeline you don't control. Deadlines slip, the customer's patience wears thin, and your reputation takes the hit for infrastructure you don't own.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* REFRAME — light */}
      <section className="bg-section-light-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Reframe</p>
              <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground mb-6">
                It is not the whole deal. <span className="text-primary">It is the sites your network can't reach.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most of your customers' estates are well within your reach. But across a typical 50-site customer, there are always a few — the locations where your network cannot economically deliver, where the lead time is unworkable, or where the customer needs an emergency solution. Partnering with Integra does not change how you run your business. It gives you an answer for those sites, so you never have to walk away from the whole deal.
              </p>
              <div className="mt-8">
                <BigStatCallout
                  numerator={4}
                  denominator={50}
                  label="of every 50 sites in a customer estate is 'the tail'"
                  annotation="= the deals you risk losing"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative aspect-[4/5] lg:aspect-[4/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/40">
                <img src={reframeImg.url} alt="Hard-to-reach sites where fibre falls short" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark/40 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
          </div>
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
              Integra gives you enterprise-grade connectivity you can deliver under your own brand, in 10 working days — no Openreach, no wayleaves, no waiting. Bonded 4G/5G and Starlink, SD-WAN, leased lines, and Integra Bridge for the fibre-gap moment. Your customer sees you. We're the engine room.
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
          <motion.ol
            className="mx-auto max-w-4xl divide-y divide-white/10 border-y border-white/10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {handles.map((item, i) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="group relative grid grid-cols-[auto_auto_1fr] items-start gap-6 md:gap-10 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-primary origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="font-light text-4xl md:text-5xl text-primary/70 tabular-nums leading-none pt-1 w-10 md:w-14 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </span>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl md:text-2xl font-normal text-surface-dark-foreground mb-2">{item.title}</h3>
                  <p className="text-surface-dark-muted leading-relaxed max-w-2xl">{item.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* WHAT YOU KEEP — light */}
      <section className="relative bg-section-light-bg py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
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

      {/* INTEGRA BRIDGE FOR ISPs & MSPs — dark (featured card) */}
      <section className="relative bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/backgrounds/datacentre-hires-bg.webp" alt="" className="w-full h-full object-cover opacity-[0.06]" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary bg-primary/10 ring-1 ring-primary/30 p-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Integra Bridge for ISPs &amp; MSPs</p>
              <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6">
                Deliver day one. <span className="text-primary">Let the fibre catch up.</span>
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                Integra Bridge bonds Starlink and 5G/4G over a Layer 2 tunnel from our data centre — enterprise-grade connectivity for your customer in 10 working days, while their fibre is still being built. When the fibre lands, Bridge stays on as permanent failover. Your customer is never the one waiting.
              </p>
              <Button asChild size="lg">
                <Link to="/integra-bridge">How Integra Bridge works <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EASY FOR YOUR SALES TEAM — light */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={salesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-surface-dark/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">For Your Sales Team</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-6 max-w-3xl">
              Easy for your <span className="text-primary">sales team.</span>
            </h2>
            <p className="text-lg text-surface-dark-muted leading-relaxed max-w-3xl">
              Your account managers don't need to become connectivity experts. When they hit a problem site, they submit it through the partner portal in under two minutes — customer name, site address, the basics. We survey, advise, install, and support. They stay the trusted face; we're the engine room.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-surface-dark-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Under 2 minutes per submission
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
              <motion.div key={step.title} variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={step.image} alt={step.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <step.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-normal text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
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
