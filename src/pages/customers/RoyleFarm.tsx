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
  { label: "Location", value: "Burton On Trent" },
  { label: "Website", value: "roylefarmbusinesspark.co.uk", href: "https://roylefarmbusinesspark.co.uk" },
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
        title="Royle Farm Business Park Case Study — Integra Networks"
        description="From poor connectivity to 1000Mbps speeds, learn how Integra transformed tenant satisfaction and business potential at Royle Farm Business Park."
        keywords="case study, Royle Farm, business park, fibre, connectivity, Integra Networks"
        url="/customers/royle-farm"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Aerial view of Royle Farm Business Park" className="w-full h-full object-cover" loading="eager" />
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">From Farm to Fibre: Royle Farm Business Park's Digital Renaissance</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              From poor connectivity to 1000Mbps speeds, learn how Integra transformed tenant satisfaction and business potential at Royle Farm.
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
                Royle Farm Business Park, a family-run site hosting over 30 businesses, offering industrial units in Burton upon Trent.
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
              Groundwork for the Gigabit: The Blueprint of Digital Ascent
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Royle Farm Business Park, nestled in the outskirts of Burton upon Trent, stands as a testament to the adaptability and resilience of rural businesses. Established in 1998 on the grounds of a working farm, the park has evolved into a thriving hub for over 30 industrial and engineering businesses, spanning 20 light industrial warehouses and 17 secure compounds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite its idyllic setting and strategic location near major roadways like the A38, A444, and A511, Royle Farm faced a significant barrier to growth: inadequate internet connectivity. With tenants grappling with slow and unreliable ADSL connections, the park's potential for attracting and retaining businesses was severely hampered, prompting a critical need for a sustainable digital solution.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">
              Copper Chains: Breaking Free From the Bounds of Broadband
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The challenge of upgrading Royle Farm Business Park's internet infrastructure was daunting. Located several kilometres from the nearest exchange, previous enquiries into enhancing connectivity were met with prohibitively high excess construction charges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The existing copper ADSL lines—stretched over and under the rural landscape—were not only inadequate but also represented a relic of the park's agricultural past ill-suited to the demands of modern business. Tenants frequently experienced service dropouts and speeds that were woefully insufficient, with download and upload rates languishing in the single digits. This digital deficiency not only strained current operations but also deterred potential new tenants, underscoring the urgency for a viable, cost-effective solution.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={aerialImg}
                alt="Aerial view of Royle Farm Business Park surroundings"
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
              "Integra transformed our connectivity from a liability into our strongest selling point. High-speed internet is crucial, and now, with Integra's solution, the potential for our park's growth is unlimited."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">
              Fraser Mountford, Director, Royle Farm Business Park
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
              Wiring the Future: The High-Speed Transformation of Royle Farm
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The breakthrough came when Integra was enlisted to re-imagine Royle Farm's connectivity infrastructure. By conducting an exhaustive survey, Integra identified a feasible route to introduce fibre optic cabling into the park, circumventing significant excess construction charges through Openreach. This strategic move significantly reduced the projected costs by over 80%, laying the groundwork for a comprehensive upgrade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Upon activation, Integra deployed a mix of wireless and CAT6 networking, effectively blanketing the entire park with high-speed fibre connectivity. This transformation not only catapulted internet speeds for tenants up to 1000 Mbps but also dramatically lowered installation costs from a prohibitive six-figure sum to an accessible five-figure investment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thanks to Integra's ingenuity, new tenants can now enjoy ultrafast fibre connectivity within days, not months, positioning Royle Farm Business Park as a leading destination for businesses seeking digital excellence in rural Staffordshire.
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
                alt="Fibre installation at Royle Farm Business Park"
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
            <Link to="/connectivity/integra-sd-wan" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Integra SD-WAN
              
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
