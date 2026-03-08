import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/wb-power-hero.avif";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import trucksImg from "@/assets/case-studies/wb-power-trucks.avif";

const companyDetails = [
  { label: "Company", value: "WB Power Services" },
  { label: "Industry", value: "Power Generation | Maintenance" },
  { label: "Location", value: "UK Wide" },
  { label: "Website", value: "wbpsltd.co.uk", href: "https://wbpsltd.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WBPowerServices = () => {
  return (
    <PageLayout>
      <SEO
        title="WB Power Services Case Study — Integra Networks"
        description="How Integra's SD-WAN solution empowered WB Power Services with robust connectivity, avoiding exorbitant construction charges."
        keywords="case study, WB Power Services, SD-WAN, connectivity, Integra Networks"
        url="/customers/wb-power-services"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="WB Power Services fleet at their depot" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link to="/customers" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> WB Power Services
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Powering Up: A Connectivity Triumph in the Face of Adversity</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Integra's SD-WAN solution swiftly empowered WB Power Services with robust connectivity, avoiding exorbitant excess construction charges.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {companyDetails.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-surface-dark-foreground font-semibold">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">Description</p>
              <p className="text-surface-dark-foreground max-w-2xl">
                WB Power Services, a UK-based company, specialises in generator sales, hire, and maintenance, including diesel and hybrid generators, and UPS systems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              The Digital Disconnect: A Power Provider's Predicament
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WB Power Services, a leading provider of generator sales, hire, and maintenance, found themselves in a predicament. Their logistics depot in Chorley, nestled next to a large industrial unit, was virtually cut off from the digital world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The mobile signal was non-existent, and the local fibre infrastructure was absent. The company's operations were severely hampered, and the staff found themselves unable to use their phones or access the internet.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">
              The Costly Connection: A Challenge in Chorley
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The company's location presented a unique challenge. Traditional internet services were not an option due to the lack of infrastructure. A quote from BT for a leased line came with a six-figure excess construction charge fee, an exorbitant cost that was hard to justify, especially with the possibility of relocating in the future. The company needed a solution that was both cost-effective and efficient.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={trucksImg}
                alt="WB Power Services trucks at their Chorley depot"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-semibold text-surface-dark-foreground leading-snug mb-6">
              "Integra's solution transformed our operations, delivering fast, reliable connectivity where others couldn't. A game-changer for us."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">
              Matt Muhl, Director, WB Power Services
            </p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              Breaking Barriers: Integra's Swift Solution to Connectivity Challenges
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra Networks stepped in with their innovative SD-WAN solution. A system was swiftly deployed on top of the industrial unit, gaining line of sight to the local cell towers. Radio links were installed in the yard and site offices, along with access points to deliver connectivity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a matter of days, WB Power Services had access to over 200Mbps of internet connectivity. Staff could now communicate with the outside world, use their centralised project management tools effectively, and avoid the exorbitant leased line fee.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/wb-power-services" />

      {/* Solutions Delivered */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Solutions delivered</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/connectivity/integra-sd-wan" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Integra SD-WAN
              </Link>
              <Link to="/connectivity/managed-sim-services" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Managed SIM
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Unlock the Power of Integra SD-WAN
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
                >
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="link"
                  className="text-white hover:text-white/80 font-medium text-base"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default WBPowerServices;
