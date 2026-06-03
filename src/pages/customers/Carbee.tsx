import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/carbee-hero.webp";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

const companyDetails: { label: string; value: string; href?: string }[] = [
  { label: "Company", value: "Carbee Ltd" },
  { label: "Industry", value: "Automotive" },
  { label: "Location", value: "Boston, Lincolnshire" },
  { label: "Website", value: "carbee.uk", href: "https://carbee.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Carbee = () => {
  return (
    <PageLayout>
      <SEO
        title="CarBee Case Study — Integra Networks"
        description="CarBee got 300Mbps+ with radio links, CCTV, and WiFi across office, workshop, and home. From 0.1Mbps to reliable high-speed connectivity."
        keywords="case study, CarBee, automotive, SD-WAN, connectivity, radio links, CCTV, Integra Networks"
        url="/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CarBee automotive showroom" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Carbee Ltd
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">From 0.1Mbps to 300+: How a Rural Car Dealer Got High-Speed Internet</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              CarBee connected office, workshop, and home across 300+ metres. Radio links, CCTV, WiFi. All from a remote Lincolnshire site where BT offered nothing.
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
                CarBee, a family-run business, sells top-quality pre-owned cars and offers performance and styling parts for various car brands.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Business: Cars and Parts in the Middle of Nowhere</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              CarBee sells premium pre-owned cars and high-performance parts from rural Lincolnshire. They run an office, a workshop, and even a home 300 metres away. Three separate locations that need to talk to each other.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But they're miles from Fibre. Miles from proper infrastructure. When you're in the middle of the countryside trying to run a modern business, connectivity isn't optional—it's everything.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: BT's Best Offer Was Useless</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              BT offered 0.1Mbps. That's not a typo. In the 21st century, BT's best effort was essentially nothing. CarBee needed to monitor their car lot with CCTV. They needed WiFi in the workshop. Their home needed reliable internet. One tenth of a megabyte per second wouldn't do any of that.
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
              "BT offered 0.1Mbps. Integra gave us over 300Mbps. Now our office, workshop, and home all have fast, reliable connectivity. CCTV works perfectly. Never a dropped connection. We wouldn't operate without Integra."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Andrew Briggs, Managing Director, Carbee Ltd</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Radio Links, CCTV, and WiFi Across the Whole Site</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra bonded 4G/5G connections over SD-WAN to deliver over 300Mbps. But that's just the start. They installed radio links across 300 metres to connect the workshop. They set up CCTV monitoring for the car lot. WiFi blanketed the office. And the home got its own secure connection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now every part of the site works together seamlessly. Business moves at the speed of the internet, not the slow creep of 0.1Mbps.
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
              { label: "Wireless Distribution", href: "/wireless-distribution" },
              { label: "CCTV", href: "/cctv" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet" />
    </PageLayout>
  );
};

export default Carbee;
