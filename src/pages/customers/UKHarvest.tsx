import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/ukharvest-hero.webp";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import officeImg from "@/assets/case-studies/ukharvest-office.webp";

const companyDetails = [
  { label: "Company", value: "UKHarvest" },
  { label: "Industry", value: "Non Profit | Food Rescue | Education" },
  { label: "Location", value: "Chichester" },
  { label: "Website", value: "ukharvest.org.uk", href: "https://ukharvest.org.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const UKHarvest = () => {
  return (
    <PageLayout>
      <SEO
        title="UKHarvest Case Study — Integra Networks"
        description="Food rescue organisation UKHarvest went from struggling with rural connectivity to over 325Mbps in 10 working days. Now their team stays connected."
        keywords="case study, UKHarvest, food rescue, SD-WAN, connectivity, Integra Networks"
        url="/customers/fast-track-connectivity-ukharvests-digital-transformation"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="UKHarvest headquarters" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> UKHarvest
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Food Rescue Needs Fast Internet: UKHarvest's Win</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Mission-critical NGO went from struggling connections to over 325Mbps—all in two weeks.
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
                UKHarvest: a food rescue and education charity based near Chichester. They fight food waste and feed families. But their rural location was crippling their operations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Relocation into a Connectivity Black Hole</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UKHarvest moved to new headquarters in a semi-rural area near Chichester. The location made sense operationally. But then they connected to the internet. It was like stepping back into 2005. Fibre was impossible. Mobile signal was spotty. The local exchange was miles away.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For a mission-critical NGO, slow internet isn't just frustrating—it's damaging. Dropped video calls with donors. Sluggish systems processing food distributions. VoIP constantly failing. Every hour of downtime meant families going hungry.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Clock Was Ticking</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Waiting for fibre infrastructure wasn't an option. Traditional leased lines meant months of installation. The team needed real connectivity—fast—to run their operations, support remote team members, and keep their VoIP system alive. Delay meant inefficiency. Inefficiency meant impact on their mission.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={officeImg} alt="UKHarvest office setup" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "10 working days from conversation to fully live. Integra didn't just deliver fast internet—they understood the urgency of our mission. Their team was professional, responsive, and solved it properly."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">James Swann, Programme Manager, UKHarvest</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Bonded Mobile Networks, Enterprise Grade</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra surveyed the site and fast-tracked a decision: forget waiting for fibre. The mobile networks already covering the area could do the job—if bonded properly. They deployed SD-WAN technology that combined multiple 4G and 5G signals into a single, reliable, high-speed connection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The installation finished in two weeks. Result: over 325Mbps download speeds, redundancy across networks, and a Wi-Fi system that actually works. UKHarvest's team can now call donors, process distributions, and support their mission without fighting their internet connection.
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
              { label: "Business Wi-Fi", href: "/business-wifi" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/fast-track-connectivity-ukharvests-digital-transformation" />
    </PageLayout>
  );
};

export default UKHarvest;
