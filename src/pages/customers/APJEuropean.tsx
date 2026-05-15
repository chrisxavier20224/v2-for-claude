import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/apj-hero.webp";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

const companyDetails = [
  { label: "Company", value: "APJ European" },
  { label: "Industry", value: "Refrigeration | Air Conditioning" },
  { label: "Location", value: "Portsmouth" },
  { label: "Website", value: "apjeuropean.co.uk", href: "https://apjeuropean.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const APJEuropean = () => {
  return (
    <PageLayout>
      <SEO
        title="APJ European Case Study — Integra Networks"
        description="Warehoused in a digital blackspot, APJ European now operates at over 300Mbps. Their distribution network is no longer bottlenecked by their internet."
        keywords="case study, APJ European, refrigeration, distribution, SD-WAN, connectivity, Integra Networks"
        url="/customers/revitalising-global-distribution-apj-europeans-digital-transformation"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="APJ European warehouse" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> APJ European
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">A Warehouse in a Digital Blackspot: Solved</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Global distributor operating from a location with no infrastructure. Now they have over 300Mbps and actually work like a modern business.
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
                APJ European: global refrigeration and air conditioning distributor, based in Portsmouth. Growing fast. But their warehouse was in a digital dead zone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Infrastructure Blackout</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              APJ European is a global distributor. But their warehouse was in a location with no infrastructure. The ducts that should carry Fibre were collapsed. The available internet was unusable—slow and unreliable. As a result, their whole operation was crippled. Staff couldn't access the systems they needed. Customer calls were dropped. Order processing was glacially slow. They were a global distributor operating like a business from the 1990s.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Two Crises: Systems Crawling, Phones Failing</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Their ERP (Quicken, SAP) would time out constantly. Disconnections were routine. Staff couldn't do their jobs. And then there were the phones: dropped calls to customers and suppliers. A distributor whose customers can't reach them reliably is losing business. They needed a solution that actually worked—fast.
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
              "Despite being in the middle of a major city we found ourselves in a digital blackspot, unable to function as a modern online business. In that respect, Integra became a lifeline for us and allowed us to progress and grow as a business."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Simon Bane, IT & Infrastructure Manager, APJ European</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Three Networks, Bonded Into One</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra deployed their SD-WAN solution, bonding three of the four major UK mobile networks (including 5G) into a single, resilient connection. No waiting for Fibre infrastructure. No reliance on a single network. Just real, fast internet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Result: over 300Mbps download speeds. All their applications—Quicken, SAP, everything—now work smoothly. Phone calls don't drop. Customer service is back. Installed in two weeks. APJ European is no longer a warehouse in a blackspot. They're a modern distributor.
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
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/revitalising-global-distribution-apj-europeans-digital-transformation" />
    </PageLayout>
  );
};

export default APJEuropean;
