import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/royle-farm-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import aerialImg from "@/assets/case-studies/royle-farm-aerial.jpg";
import fibreImg from "@/assets/case-studies/royle-farm-fibre.jpg";

const companyDetails = [
  { label: "Company", value: "Royle Farm Business Park" },
  { label: "Industry", value: "Business Park" },
  { label: "Location", value: "Burton upon Trent" },
  { label: "Website", value: "roylefarmbusinesspark.co.uk", href: "https://www.roylefarmbusinesspark.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const RoyleFarm = () => {
  return (
    <PageLayout>
      <SEO
        title="Royle Farm Business Park Case Study"
        description="Gigabit connectivity to rural business park in Burton upon Trent. 80% cost savings with smart fibre and wireless."
        keywords="case study, Royle Farm, business park, fibre, wireless, rural connectivity, Integra Networks, Burton upon Trent"
        url="/customers/royle-farm"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Royle Farm Business Park" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Royle Farm Business Park
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">From farm to fibre: Royle Farm Business Park</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              From single-digit ADSL to 1000Mbps — how Integra transformed a rural business park's connectivity, cut costs by over 80%, and turned internet from a liability into a selling point.
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
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5">
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
                Royle Farm Business Park is a family-run site hosting over 30 businesses across 20 light industrial warehouses and 17 secure compounds in Burton upon Trent.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── THE CHALLENGE ────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              A thriving park held back by its connectivity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Established in 1998 on the grounds of a working farm, Royle Farm Business Park has grown into a thriving hub for over 30 industrial and engineering businesses. Strategically located near the A38, A444, and A511, the park has everything going for it — except reliable internet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sitting several kilometres from the nearest exchange, tenants were stuck on copper ADSL lines with speeds in the single digits. Service dropouts were routine. Previous enquiries into fibre had been met with prohibitively high excess construction charges that made the project unviable. The connectivity gap was holding back existing tenants and deterring new ones.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-12">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={aerialImg}
                alt="Aerial view of Royle Farm Business Park"
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
              "Integra transformed our connectivity from a liability into our strongest selling point. High-speed internet is crucial, and now, with Integra's solution, the potential for our park's growth is unlimited."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">
              Fraser Mountford, Director, Royle Farm Business Park
            </p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── THE SOLUTION ─────────────────────────────────────────────────── */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">
              A smarter route to gigabit connectivity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra conducted an exhaustive survey and identified a feasible route to bring fibre into the park — circumventing the excess construction charges that had made every previous quote unworkable. That single decision cut projected costs by over 80%, turning a six-figure problem into an accessible five-figure investment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With fibre in place, Integra deployed a mix of wireless and CAT6 networking to distribute connectivity across the entire park. Tenant speeds jumped from single-digit ADSL to up to 1000Mbps — and new tenants can now get connected within days, not months.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Royle Farm went from a connectivity dead zone to one of the best-connected business parks in rural Staffordshire — a genuine selling point for attracting new businesses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-12">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={fibreImg}
                alt="Fibre and wireless infrastructure at Royle Farm Business Park"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solutions Delivered */}
      <section className="bg-surface-dark py-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-surface-dark-muted mb-4">Solutions Delivered</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/connectivity/leased-lines" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Leased Lines
            </Link>
            <Link to="/connectivity/network-infrastructure" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Network Infrastructure
            </Link>
            <Link to="/connectivity/wireless-distribution" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Wireless Distribution
            </Link>
            <Link to="/connectivity/business-wifi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Business WiFi
            </Link>
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/royle-farm" />
    </PageLayout>
  );
};

export default RoyleFarm;
