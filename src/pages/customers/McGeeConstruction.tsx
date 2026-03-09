import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/mcgee-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import mcgeeLogo from "@/assets/case-studies/mcgee-logo.png";

const companyDetails = [
  { label: "Company", value: "McGee Construction" },
  { label: "Industry", value: "Specialist Engineering Contractor" },
  { label: "Location", value: "London" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const McGeeConstruction = () => {
  return (
    <PageLayout>
      <SEO
        title="McGee Construction Case Study — Integra Networks"
        description="McGee Construction got 350Mbps+ download and 100Mbps+ upload speeds with multi 4G/5G bonded connections. Deployed in days, not months."
        keywords="case study, McGee Construction, SD-WAN, construction, connectivity, Integra Networks"
        url="/customers/mcgee-construction"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="McGee Construction at Battersea Power Station" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> McGee Construction
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Building at Speed: 350Mbps Connectivity for London's Biggest Sites</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              McGee Construction needed fast upload speeds for site managers. Integra delivered 350Mbps+ download and 100Mbps+ upload. Deployed in days.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {companyDetails.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">{item.label}</p>
                  <p className="text-surface-dark-foreground font-medium">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
            <AnimatedSection direction="right" delay={0.2}>
              <img src={mcgeeLogo} alt="McGee Construction" className="h-10 md:h-12 w-auto max-w-[200px] object-contain brightness-0 invert flex-shrink-0" />
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-surface-dark-muted mb-1">Description</p>
              <p className="text-surface-dark-foreground max-w-2xl">
                McGee Construction, a leading specialist engineering contractor based in London, has excelled in innovative engineering solutions since 1959, tackling complex challenges across the capital.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Waiting Months for Connectivity You Need Today</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              McGee Construction manages some of London's toughest builds. Sites are often underground, temporary, or located where infrastructure doesn't exist yet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Traditional leased lines take 12 weeks to install and cost a fortune. Project managers can't wait that long. They need to upload large files instantly, communicate with teams in real time, and move rigs if the site changes. Slow internet doesn't just annoy them—it costs them money.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">What They Needed: Fast Upload, Instant Deployment, Reliable Everywhere</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              McGee's team needs to push 50GB files from site to HQ instantly. Architectural plans, progress photos, equipment specs—all moving throughout the day. Download speed matters. But upload speed wins jobs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They needed connectivity installed in a week, not three months. And it needed to work whether they were at Battersea Power Station, under the Thames, or in a basement in the City.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-40">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-semibold text-surface-dark-foreground leading-snug mb-6">
              "We got live connectivity in a week. No months of waiting, no huge installation bills. And the upload speeds are massive—our project managers can work like they're in the office. That's what makes Integra different."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Chris Pyne, Head of IT, McGee Construction</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Multi 4G/5G Bonded Over SD-WAN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra bonded multiple 4G/5G connections together over SD-WAN. Result: 350Mbps+ download and 100Mbps+ upload. Where there are multi 5G connections available, they unlock even higher speeds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Installation took a week. WiFi networks went live across site. Project managers could upload files in minutes instead of hours. And if the site moved? The hardware moved with it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              No waiting for BT. No six-figure bills. No infrastructure that becomes stranded when the project ends. Just connectivity that works where and when they need it.
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
              { label: "Business WiFi", href: "/connectivity/business-wifi" },
              { label: "Wireless Distribution", href: "/connectivity/wireless-distribution" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/mcgee-construction" />
    </PageLayout>
  );
};

export default McGeeConstruction;
