import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/atura-hero.webp";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

const companyDetails = [
  { label: "Company", value: "Atura Proteins" },
  { label: "Industry", value: "Food and Beverage" },
  { label: "Location", value: "Highbridge, Somerset" },
  { label: "Website", value: "aturaproteins.com", href: "https://aturaproteins.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AturaProteins = () => {
  return (
    <PageLayout>
      <SEO
        title="Atura Proteins Case Study — Integra Networks"
        description="Plant protein manufacturer went from 7Mbps to 150Mbps downloads. Now their production facility has the connectivity to match their ambition."
        keywords="case study, Atura Proteins, manufacturing, SD-WAN, connectivity, Integra Networks"
        url="/customers/revolutionising-connectivity-for-plant-protein-pioneers"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Atura Proteins facility" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Atura Proteins
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Plant Proteins Powered by Real Connectivity</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Atura Proteins went from 7Mbps to 150Mbps. Their manufacturing operation stopped fighting their network.
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
                Atura Proteins (Marigot Group): UK manufacturer of plant-based proteins. Science-driven. Sustainability-focused. Growing fast. But their rural location was holding them back.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Great Products, Broken Internet</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Atura Proteins manufactures chickpea, red lentil, and fava bean proteins to global standards. They're growing. They ship internationally. But their facility is near Highbridge, Somerset—far from any exchange. Their ADSL line delivered 7Mbps on a good day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fibre was possible but would take months and cost thousands in construction fees. Meanwhile, their systems crawled. VoIP was unreliable. The team couldn't video conference without lag. A modern manufacturing operation was handcuffed by dial-up-era internet.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Waiting Game Wasn't an Option</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Waiting months for Fibre—and paying thousands in construction charges—wasn't viable. The manufacturing team needed working internet immediately. Their operations were suffering. Their efficiency was bottlenecked. They needed a solution that was fast to deploy and didn't require corporate-level capex.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "Our facility now has the internet it deserves. Systems are fast. VoIP is stable. The team can work properly. Integra delivered a real solution."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Lee Betts, Plant & Operations Manager</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Mobile Networks, Bonded and Reliable</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra installed line-of-sight to the nearest cell towers, then bonded multiple 4G networks into a single, dependable connection. They integrated it with Atura's existing systems. The result: 7Mbps became over 150Mbps. VoIP works reliably. Systems respond immediately. The manufacturing facility now has the connectivity to support its growth—without waiting for Fibre or paying for expensive construction.
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
              { label: "Integra SD-WAN", href: "/integra-sd-wan" },
              { label: "Business WiFi", href: "/business-wifi" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/revolutionising-connectivity-for-plant-protein-pioneers" />
    </PageLayout>
  );
};

export default AturaProteins;
