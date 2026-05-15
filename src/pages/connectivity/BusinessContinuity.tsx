import { Link } from "react-router-dom";
import { ShieldCheck, Phone, Cloud, Signal, Server, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/sdwan-stable.jpg";
import stackImg from "@/assets/connectivity/sdwan-speeds.jpg";

const layers = [
  { icon: Signal, title: "Primary Connectivity", description: "Leased line, managed internet, or Integra SD-WAN as your main connection — chosen to match your bandwidth needs and budget.", link: "/connectivity/leased-lines" },
  { icon: Server, title: "Automatic Cellular Failover", description: "Bonded 4G/5G backup that activates in under a second when your primary connection drops. No manual intervention required.", link: "/connectivity/cellular-backup" },
  { icon: Phone, title: "Cloud Voice & Communications", description: "VoIP and unified comms that aren't tied to a physical line. If your office connection goes down, your phones still ring — on mobile, at home, anywhere.", link: "/connectivity/unified-communications" },
  { icon: ShieldCheck, title: "Managed Firewall", description: "Security that protects your network and adapts when traffic routes change during failover. No gaps in protection, no reconfiguration needed.", link: "/connectivity/managed-firewall" },
  { icon: Cloud, title: "Proactive Monitoring", description: "We monitor every layer of your connectivity stack 24/7. If something degrades, we're already working on it before you notice.", link: "/contact" },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const BusinessContinuity = () => {
  return (
    <PageLayout>
      <SEO
        title="Business Continuity Connectivity"
        description="Layered resilience for UK businesses. Primary connection, cellular failover, cloud voice, and managed firewall."
        keywords="business continuity, disaster recovery, connectivity resilience, failover, backup broadband, cloud voice, managed firewall, business resilience"
        url="/connectivity/business-continuity"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business continuity connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Solutions <span className="mx-1">›</span> Business Continuity
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Roadworks. Exchange faults. Power cuts. None of it stops your business.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Layered connectivity resilience that keeps your team working, your phones ringing, and your data protected — no matter what happens to your primary connection.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE STACK */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Resilience Stack</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Five layers. Zero single points of failure.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              True business continuity isn't one product — it's a stack of services designed to keep you running when each individual layer fails. We build the whole thing as one managed solution.
            </p>
          </AnimatedSection>
          <motion.div className="space-y-4 max-w-3xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {layers.map((layer, index) => (
              <motion.div key={layer.title} variants={fadeUp}>
                <Link to={layer.link} className="block rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-xs font-semibold text-primary/60">{index + 1}</div>
                      <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <layer.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-surface-dark-foreground mb-1 group-hover:text-primary transition-colors">{layer.title}</h3>
                      <p className="text-sm text-surface-dark-muted leading-relaxed">{layer.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-surface-dark-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ONE PROVIDER */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Layers className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">One Provider</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">One bill. One support number. One throat to choke.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The problem with buying resilience from five different providers is that when something goes wrong, nobody takes ownership. With Integra, your entire connectivity stack is managed under one roof. One monitoring platform, one support team, one number to call.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We design the stack around your specific risk tolerance and budget. Not every business needs every layer — but every business needs to think about what happens when their internet goes down. We'll give you an honest assessment of where your gaps are.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={stackImg} alt="Business continuity connectivity stack" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["wb-power-services", "mcgee-construction"]}
        sectors={["business-parks"]}
      />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Let's build your resilience plan.
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Tell us about your current setup and we'll identify the gaps. No obligation, no scare tactics — just an honest assessment of where your business is exposed.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default BusinessContinuity;
