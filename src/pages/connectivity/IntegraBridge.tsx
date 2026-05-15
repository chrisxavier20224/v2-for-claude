import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Shield, Zap, Server, CircleCheckBig, Satellite, Radio, Network, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import RelatedServices from "@/components/shared/RelatedServices";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/bridge-hero.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const problemPoints = [
  "You need enterprise internet but Fibre takes 10 weeks. Whether you're an ISP delivering to clients or a business waiting for your own install, you're stuck with a timeline you can't control.",
  "Deadlines slip. Projects overrun. Revenue is delayed. The longer you wait, the more you lose — in productivity, in credibility, and in cash flow.",
  "Interim connectivity can help, but on its own it rarely delivers the business-grade resilience and performance that modern operations demand.",
];

const solutionPoints = [
  "Instead of waiting months for Fibre, you get enterprise connectivity in days — proving value from day one and generating revenue immediately.",
  "For ISPs, your clients see you as the provider who solves problems. For businesses, you eliminate the dead zone between signing and going live.",
  "Immediate connectivity, stronger relationships, and a reputation for delivering when it matters most.",
];

const howItWorks = [
  { icon: Satellite, label: "Starlink Satellite", speed: "250 Mbps Down / 25 Mbps Up" },
  { icon: Radio, label: "5G/4G Carriers (×2)", speed: "250 Mbps Down / 125 Mbps Up each" },
  { icon: Server, label: "Bonded Output", speed: "Up to 1 Gbps Down / 300 Mbps Up" },
];

const includes = [
  "Installation",
  "Starlink + 5G Bonding Hardware",
  "SD-WAN Router",
  "24/7 Monitoring",
];

const otherSolutions = [
  {
    title: "Integra SD-WAN",
    description: "Enterprise-grade bonded 4G/5G connectivity — up to 500Mbps without Fibre.",
    link: "/connectivity/integra-sd-wan",
  },
  {
    title: "Leased Lines",
    description: "Dedicated Fibre connectivity with guaranteed speeds and SLA-backed uptime.",
    link: "/connectivity/leased-lines",
  },
  {
    title: "Starlink Installation",
    description: "Professional Starlink setup with static IP and SD-WAN integration.",
    link: "/connectivity/starlink-installation",
  },
];

const relatedServices = [
  {
    title: "Integra SD-WAN",
    description: "Enterprise 4G/5G bonding without Starlink component.",
    href: "/connectivity/integra-sd-wan",
    icon: Network,
  },
  {
    title: "Wireless Distribution",
    description: "Point-to-point radio links for multi-site coverage.",
    href: "/connectivity/wireless-distribution",
    icon: Radio,
  },
  {
    title: "Leased Lines",
    description: "Permanent dedicated Fibre when Bridge transitions to failover.",
    href: "/connectivity/leased-lines",
    icon: Wifi,
  },
];

const IntegraBridge = () => {
  return (
    <PageLayout>
      <SEO
        title="Integra Bridge"
        description="Enterprise SD-WAN in 10 working days. Bonded Starlink + 5G/4G with up to 1Gbps. Works as interim or permanent failover."
        keywords="Integra Bridge, enterprise SD-WAN, bonded Starlink, 5G internet, Fibre bridge, interim connectivity, ISP wholesale"
        url="/integra-bridge"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra Bridge enterprise connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Integra Bridge
                </span>
              </Link>
            </motion.div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Internet Connectivity Specialists</p>
            <h1 className="mb-6 text-heading-1 md:text-display-sm font-normal tracking-tight text-white max-w-2xl">
              Deliver <span className="text-primary">Enterprise Internet</span> in 10 working days.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              When you can't wait for Fibre, Integra Bridge delivers. For ISPs and businesses alike.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact">Book a Meeting</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE PROBLEM — LIGHT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
              <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground mb-6">
                Don't let <span className="text-primary">long lead times</span> undo all your hard work.
              </h2>
              {problemPoints.map((point, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{point}</p>
              ))}
              <p className="text-foreground font-normal mt-6">
                Your reputation is too important to risk on delays. Whether you're delivering to clients or waiting for your own install, you need business internet now.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                <motion.div className="col-span-3 rounded-2xl bg-muted border border-border p-8 text-center" variants={fadeUp}>
                  <p className="text-5xl md:text-6xl font-normal text-primary mb-2">10</p>
                  <p className="text-muted-foreground text-sm">Weeks typical Fibre lead time</p>
                </motion.div>
                <motion.div className="rounded-2xl bg-muted border border-border p-6 text-center" variants={fadeUp}>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-xs">Deadlines slip</p>
                </motion.div>
                <motion.div className="rounded-2xl bg-muted border border-border p-6 text-center" variants={fadeUp}>
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-xs">Goodwill erodes</p>
                </motion.div>
                <motion.div className="rounded-2xl bg-muted border border-border p-6 text-center" variants={fadeUp}>
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-xs">Revenue delayed</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* THE SOLUTION — DARK */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Solution</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Deliver now. Impress always with <span className="text-primary">Integra Bridge</span>
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Long Fibre lead times test patience, budgets, and relationships. Whether you're an ISP delivering to clients or a business waiting for your own line, Integra Bridge flips the script.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {solutionPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <CircleCheckBig className="h-6 w-6" />
                </div>
                <p className="text-surface-dark-muted leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS — LIGHT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Up to 1Gbps Delivered in 10 Days</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-4 max-w-3xl mx-auto">
              The fastest route to <span className="text-primary">Enterprise Internet</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6">
              By bonding Starlink satellite with multiple 5G/4G carriers, Integra Bridge delivers an enterprise-grade SD-WAN connection that's fast, resilient, and fully monitored.
            </p>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Delivered over a Layer 2 tunnel from our data centre, it provides the static IPs and stability your clients expect from Fibre — only this time, without the wait.
            </p>
          </AnimatedSection>

          {/* Speed cards */}
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {howItWorks.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-foreground font-normal mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.speed}</p>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 text-center max-w-2xl mx-auto">
              <p className="text-foreground font-normal mb-2">Once Fibre is installed, Integra Bridge doesn't switch off.</p>
              <p className="text-muted-foreground text-sm">
                It remains as a permanent multi-network, multi-technology failover — blending satellite and cellular for true always-on resilience.
              </p>
            </div>
          </AnimatedSection>

          <p className="text-xs text-muted-foreground/60 text-center mt-8">
            *Speeds shown are typical for bonded links; results vary by radio conditions, satellite view and carrier policy.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED + CTA — DARK */}
      <section className="relative bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/backgrounds/datacentre-hires-bg.webp" alt="" className="w-full h-full object-cover opacity-[0.06]" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Enterprise-Grade</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Fibre-class Internet <span className="text-primary">without the wait</span>
            </h2>
            <p className="text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Bonded Starlink + 4G/5G presented over Layer-2 from our data centre for Fibre-like stability, static IPs and no CGNAT issues. Live in 10 working days; remains as failover post-Fibre.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl border-2 border-primary bg-primary/10 ring-1 ring-primary/30 p-8 text-center mb-8">
                <h3 className="text-xl font-normal text-surface-dark-foreground mb-4">Every Integra Bridge deployment includes:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 justify-center">
                      <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-surface-dark-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-surface-dark-muted text-sm mb-6">
                  Integra Bridge is a premium wholesale solution. Pricing is tailored to each deployment based on site requirements, data usage, and contract terms.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Book a Meeting <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <p className="text-surface-dark-muted text-sm">
                    Or call <a href="tel:02033887111" className="text-primary font-semibold hover:underline">0203 388 7111</a>
                  </p>
                </div>
              </div>
              <p className="text-xs text-surface-dark-muted/60 text-center">
                <strong>Typical contract:</strong> Flexible contract terms — from short-term agreements up to 36 months. Bridge stays active as permanent failover.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OTHER SOLUTIONS — LIGHT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Other Solutions</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-foreground text-center mb-4 max-w-3xl mx-auto">
              Where Fibre isn't available, Integra has the answer
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Our Bridge, Cellular SD-WAN, and Lite solutions share the same Integra backbone, each scaled for different sites and budgets. From high-bandwidth installs to compact branch or backup connections, Integra keeps every location online.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {otherSolutions.map((sol) => (
              <motion.div key={sol.title} variants={fadeUp}>
                <Link to={sol.link} className="group block rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-normal text-foreground mb-3 group-hover:text-primary transition-colors">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sol.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RELATED SERVICES — DARK */}
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore alternative connectivity solutions and failover options."
        dark
      />

      {/* RELATED CONTENT — LIGHT */}
      <RelatedContent
        stories={["mcgee-construction"]}
        sectors={["construction-sites", "rural-smes"]}
      />

      {/* CTA — DARK */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Next Steps</p>
            <h2 className="text-heading-1 md:text-display-sm font-normal tracking-tight text-surface-dark-foreground mb-4 max-w-3xl mx-auto">
              Ready to go live in 10 working days?
            </h2>
            <p className="text-lg text-surface-dark-muted max-w-2xl mx-auto mb-8">
              Get enterprise-grade SD-WAN delivered in 10 working days — and permanent failover protection for years to come.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg"><Link to="/contact">Book a Meeting <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </motion.div>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/pricing">See All Pricing</Link>
              </Button>
            </div>
            <p className="text-surface-dark-muted text-sm mt-4">
              Can't wait? Call us on <a href="tel:02033887111" className="text-primary font-semibold hover:underline">0203 388 7111</a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntegraBridge;
