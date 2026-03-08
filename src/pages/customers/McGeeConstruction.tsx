import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        description="McGee Construction enhances project efficiency with Integra's SD-WAN solutions, achieving 150Mbps+ connectivity across London construction sites."
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Engineering Success: McGee's Connectivity Leap in London</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              McGee Construction enhances project efficiency with Integra's SD-WAN solutions, delivering 150Mbps+ of seamless connectivity across complex London construction sites.
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
                  <p className="text-surface-dark-foreground font-semibold">{item.value}</p>
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
            <h2 className="text-heading-1 text-foreground mb-6">Engineering Connections: McGee's Digital Blueprint for Success</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              McGee Construction has been a bedrock of innovation and excellence in the construction industry since its inception in 1959. With a rich heritage of tackling complex engineering challenges across London, McGee's evolution from a civil engineering firm to a specialist engineering contractor symbolizes their adaptability and forward-thinking approach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              However, the dynamic nature of their projects, often located in challenging environments such as below ground, posed significant connectivity hurdles. Traditional broadband and leased line solutions failed to meet their needs due to long deployment times, high costs, and inflexibility.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Bridging the Data Divide: McGee's Mission for Site-Wide Connectivity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              McGee's projects are renowned for their complexity and the need for rapid, reliable internet connectivity is paramount for their success. The construction sites, often set in logistically challenging locations, require substantial bandwidth to support large file sharing, real-time communication, and various latency-sensitive applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Traditional connectivity solutions fell short, plagued by long lead times, prohibitive costs, and inflexible contracts not suited for the transient nature of construction sites. The quest for a flexible, robust, and responsive connectivity solution became critical for sustaining McGee's reputation for excellence and innovation in the construction industry.
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
              "Integra's innovative approach to connectivity has been a perfect match for our dynamic project requirements, delivering beyond expectations."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Chris Pyne, Head Of IT, McGee Construction</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Constructing Connectivity: Integra's Tailored Solutions for McGee</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra's introduction of a multi-net 4G/5G SD-WAN solution marked the beginning of a new era for McGee Construction. Tailored for high-demand environments, Integra's solution provided a lifeline, ensuring over 150 Mbps of seamless connectivity across McGee's sites, irrespective of their unique challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              The rapid deployment capability, often within a week, and the adaptability of the service to move with the projects' evolution were game-changers. Integra's commitment to immediate customer service and flexible contract models resonated with McGee's own values of innovation and efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Moreover, the centrally managed WiFi infrastructure not only streamlined operations but significantly reduced the time spent on troubleshooting, allowing McGee to focus on what they do best: building the future of London.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/mcgee-construction" />

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Unlock the Power of Integra SD-WAN</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base">
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="link" className="text-white hover:text-white/80 font-medium text-base">
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

export default McGeeConstruction;
