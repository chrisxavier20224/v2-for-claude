import { Link } from "react-router-dom";
import { Smartphone, Signal, Shield, PiggyBank, Users, BarChart3, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/managed-sim-hero.jpg";
import manageImg from "@/assets/connectivity/managed-sim-visibility.jpg";

const features = [
  { icon: Signal, title: "All Four UK Networks", description: "We're not tied to one carrier. We'll put you on the network with the best coverage for your locations — O2, Vodafone, EE, or Three — and mix across your fleet if needed." },
  { icon: PiggyBank, title: "Pooled & Shared Data", description: "No more wasted data on light users while heavy users burn through their caps. Pooled data plans mean your allocation goes where it's needed." },
  { icon: Shield, title: "Mobile Device Management", description: "Remote wipe, app management, and security policies across your fleet. If a phone is lost or stolen, we lock it down before it becomes a problem." },
  { icon: BarChart3, title: "Usage Visibility & Bill Shock Protection", description: "Real-time usage dashboards and alerts before anyone runs up unexpected charges. No more bill surprises at the end of the month." },
  { icon: Users, title: "One Bill, One Provider", description: "Your mobile contracts sit alongside your broadband, voice, and SIM estate on a single bill. One account manager, one support number — not five different providers." },
  { icon: Headphones, title: "UK-Based Support", description: "When someone needs a replacement handset or a SIM swap, they call us directly. No automated menus, no overseas call centres — just someone who picks up the phone and sorts it." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const BusinessMobiles = () => {
  return (
    <PageLayout>
      <SEO
        title="Business Mobiles — Multi-Network Mobile Plans for UK Businesses"
        description="Business mobile plans across all four UK networks. Pooled data, mobile device management, one bill. Managed alongside your broadband and voice services."
        keywords="business mobiles, business mobile phones, corporate mobile plans, business SIM, pooled data, mobile device management, MDM, business phone plans"
        url="/connectivity/business-mobiles"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business mobile phones" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <span className="mx-1">›</span> Business Mobiles
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Business mobiles that actually make sense.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Multi-network business mobile plans managed alongside your broadband, voice, and IoT SIMs. One provider, one bill, one number to call when something needs sorting.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What's Included</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Not just a SIM in a box.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              We manage your mobile estate the same way we manage your broadband — proactively, transparently, and without the nonsense you get from the big carriers. Your mobiles become part of a single managed communications platform.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {features.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-surface-dark-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* CONSOLIDATE */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Consolidate Everything</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Stop paying five providers for things that should be on one bill.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most businesses have their broadband with one provider, their mobiles with another, their landlines with a third, and their IoT SIMs scattered across whoever was cheapest at the time. The result is chaos — multiple bills, multiple support lines, nobody taking ownership.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We bring it all together. Your business mobiles sit on the same platform as your broadband, IoT SIMs, and voice services. One account manager who knows your business, one support team, one monthly bill. When you need to add a user, swap a handset, or review your usage — it's one phone call.
            </p>
            <div className="space-y-3">
              {["Handsets and SIM-only plans available", "30-day and contract options", "International roaming packages", "Number porting from any UK network"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={manageImg} alt="Business mobile management dashboard" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["wb-power-services"]}
        sectors={["construction-sites"]}
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
                  Ready to consolidate your mobile estate?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Send us your current mobile bill and we'll come back with a like-for-like comparison. No obligation — just an honest look at what you could save.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Get in Touch</Link>
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

export default BusinessMobiles;
