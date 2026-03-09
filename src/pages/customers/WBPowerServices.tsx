import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
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
        description="WB Power Services got 350Mbps+ connectivity with strong upload speeds across depots nationwide. Avoided six-figure BT installation charges."
        keywords="case study, WB Power Services, SD-WAN, connectivity, leased lines, CCTV, WiFi, Integra Networks"
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Dodging the Six-Figure Bill: How WB Power Got Nationwide Connectivity</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              BT quoted £250K+ to install a leased line. WB Power got 350Mbps+ connectivity nationwide from Integra in days. No massive bills. No waiting.
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
                  <a href={item.href} target="_blank" rel="nofollow noopener noreferrer" className="text-surface-dark-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-surface-dark-foreground font-medium">{item.value}</p>
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
              The Problem: A Depot with No Signal and No Options
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WB Power Services manages generator sales, hire, and maintenance across the UK. Their Chorley depot ran operations that depended on instant communication: project managers uploading files, site coordinators checking inventory, clients getting updates.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But the depot sat dead—no mobile signal, no fibre, no internet. Staff couldn't access centralised tools. They couldn't upload project files. Decisions slowed down. Operations ground to a crawl.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">
              What They Needed: Fast Upload Speeds and No Massive Bills
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              WB Power tried BT. BT quoted £250K+ in excess construction charges to run a leased line. Unaffordable. And what if they relocated in two years? That money vanishes. They needed connectivity that was fast, affordable, and flexible. Project managers needed to upload large files instantly. Connectivity had to support their operations across multiple depots nationwide.
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
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "BT wanted £250K to install a leased line. Integra gave us 350Mbps with strong upload speeds in days. It's transformed how our project managers work. And we're rolling it out across our other depots. It's not even a question."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">
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
              The Solution: Multi 4G/5G SD-WAN Nationwide
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra installed bonded 4G/5G connectivity from the roof of the Chorley depot, giving line of sight to multiple mobile towers. 350Mbps+ download with strong upload speeds—perfect for the large files project managers push throughout the day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But that's just the depot. Integra also deployed leased lines, CCTV systems, and WiFi networks across WB Power's other depots nationwide. Complete coverage. One vendor. Scalable. That's what makes the real difference.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solutions Delivered */}
      <section className="bg-surface-dark py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Solutions Delivered</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { label: "Integra SD-WAN", href: "/connectivity/integra-sd-wan" },
              { label: "Leased Lines", href: "/connectivity/leased-lines" },
              { label: "CCTV", href: "/connectivity/cctv" },
              { label: "Business WiFi", href: "/connectivity/business-wifi" },
              { label: "Wireless Distribution", href: "/connectivity/wireless-distribution" },
              { label: "Managed SIM", href: "/connectivity/managed-sim-services" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/wb-power-services" />
    </PageLayout>
  );
};

export default WBPowerServices;
