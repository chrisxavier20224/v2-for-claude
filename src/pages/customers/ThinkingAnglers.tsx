import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/thinking-anglers-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import tackleImg from "@/assets/case-studies/thinking-anglers-tackle.webp";

const companyDetails = [
  { label: "Company", value: "Thinking Anglers" },
  { label: "Industry", value: "Fishing Equipment | Retail" },
  { label: "Location", value: "Hartley Wintney" },
  { label: "Website", value: "thinkinganglers.com", href: "https://thinkinganglers.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ThinkingAnglers = () => {
  return (
    <PageLayout>
      <SEO
        title="Thinking Anglers Case Study — Integra Networks"
        description="YouTube channel with 4M views + dead ADSL = problem solved. Thinking Anglers now streams, uploads, and sells at over 300Mbps."
        keywords="case study, Thinking Anglers, fishing, SD-WAN, connectivity, Integra Networks, YouTube"
        url="/customers/casting-the-net-wide-a-connectivity-transformation"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Thinking Anglers fishing equipment" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Thinking Anglers
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">YouTube Creators Need Upload Speed: Thinking Anglers Got It</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              4M YouTube views, 5Mbps upload speed, and mountains of frustration. Now: over 300Mbps.
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
                Thinking Anglers is a forward-thinking provider of high-quality carp fishing tackle, with a strong online presence and a popular YouTube channel boasting over 4 million views.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: 4 Million Viewers Can't Wait for Buffering</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thinking Anglers has a YouTube channel with 4 million views. They produce content. They sell tackle. They run a real digital business. But their internet connection was ADSL—the technology your parents used. Uploading a 4K video took hours. Sometimes it failed halfway through. Meanwhile, their e-commerce site crawled. Their team couldn't video conference properly. The business was bottlenecked by their own internet.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Content Creators Need Upload Speed: They Had 5Mbps</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The distance from the local exchange killed their speeds: 5Mbps down, worse up. When your business depends on uploading video content, that's a crisis. Every production day wasted waiting for uploads. Staff working from home couldn't get proper bandwidth. And the PSTN switchover looming meant their old systems were becoming obsolete. They needed real internet. Now.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={tackleImg} alt="Thinking Anglers fishing tackle" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
              "Content production was painful before. Now our uploads happen at real speed. The team can work from anywhere and video calls actually work. This has completely changed how we operate."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Scott Karabowicz, General Manager, Thinking Anglers</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Bonded Networks, Real Performance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra deployed their SD-WAN solution, bonding multiple mobile networks into one fast, stable connection. The jump was dramatic: from 5Mbps to over 300Mbps download speeds, with significantly improved upload capacity. Content uploads that used to take hours now take minutes. Their VoIP system works reliably. The e-commerce platform performs. Thinking Anglers can now produce and distribute their YouTube content without fighting their infrastructure.
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
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/casting-the-net-wide-a-connectivity-transformation" />
    </PageLayout>
  );
};

export default ThinkingAnglers;
