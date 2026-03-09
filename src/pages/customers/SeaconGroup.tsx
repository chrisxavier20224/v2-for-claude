import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

import heroImg from "@/assets/case-studies/seacon-hero.jpg";
import terminalsImg from "@/assets/case-studies/seacon-terminals.jpg";

const companyDetails = [
  { label: "Company", value: "Seacon Group" },
  { label: "Industry", value: "Shipping | Logistics" },
  { label: "Location", value: "Ports Nationwide" },
  { label: "Website", value: "seacongroup.co.uk", href: "https://seacongroup.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SeaconGroup = () => {
  return (
    <PageLayout>
      <SEO
        title="Seacon Group Case Study — Integra Networks"
        description="How Integra delivered comprehensive SD-WAN, wireless point-to-point links, enterprise WiFi, and full surveillance coverage for Seacon Group's Port of Tilbury operations."
        keywords="case study, Seacon Group, SD-WAN, WiFi, CCTV, wireless, port logistics, Integra Networks"
        url="/customers/seacon-group"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Seacon Group port operations at Port of Tilbury" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Seacon Group
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Port Operations Transformed: Integra's Comprehensive Connectivity Solution for Seacon</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Integra delivered comprehensive connectivity across Port of Tilbury, combining SD-WAN, wireless point-to-point links, enterprise WiFi, and full surveillance coverage for seamless port operations.
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
                Founded in 1955, Seacon Group offers door-to-door transport solutions specialising in neo-bulk cargoes including steel, metals and forest products, operating specialist handling facilities and ships at multiple ports nationwide, including Port of Tilbury.
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
              The Challenge: Scaling Connectivity Across a Major Port Transformation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Seacon Group's operations at Port of Tilbury underwent significant expansion when the port authority assumed operations of part of their primary facility. Seacon relocated their cargo handling operations to a 230-meter by 40-meter warehouse while maintaining their offices in the original portacabin location. This meant establishing reliable, high-speed connectivity across a sprawling industrial site — connecting offices to the warehouse, enabling real-time inventory tracking, coordinating logistics operations, and maintaining security surveillance across the entire facility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The challenge was multifaceted. Fibre connectivity to the new warehouse was not available from the port authority's infrastructure, and traditional fibre installation would have required months of planning and substantial construction costs. The site demanded comprehensive coverage: wireless connectivity across the massive warehouse floor for mobile operations, secure point-to-point links between buildings for critical systems, and full CCTV surveillance covering all warehouse entries, internal aisles, and office perimeters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Additionally, Seacon needed to extend connectivity to other port locations that similarly lacked fibre availability — requiring a solution that could scale across multiple sites without the constraints of traditional infrastructure deployments.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">
              Designing a Complete Connectivity Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Seacon required more than just internet connectivity — they needed a comprehensive infrastructure supporting operations, security, and mobility. The solution had to support continuous port operations without disruption, handle demanding real-time applications across multiple locations, and provide the security monitoring essential for modern logistics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The scale was significant: 230 meters of warehouse coverage, equipment spread across multiple buildings, comprehensive camera systems, and the need to maintain reliable connections across sites without dedicated fibre infrastructure. Speed of deployment was critical — every day of delayed connectivity affected cargo handling operations and logistics coordination.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={terminalsImg}
                alt="Port of Tilbury warehouse facility showing the scale of Seacon operations"
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
              "Integra delivered a complete solution — not just connectivity, but full wireless coverage and comprehensive security across our entire warehouse. The system was deployed seamlessly without disrupting operations, and it's been rock-solid from day one."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">
              Martin Phillips, CEO — Seacon Group
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
              The Solution: Integrated Infrastructure for Enterprise Port Operations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra deployed a comprehensive, multi-layered solution combining primary connectivity, wireless infrastructure, and security systems into a single managed ecosystem. The architecture was engineered to overcome the absence of fibre infrastructure while delivering enterprise-grade reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SD-WAN formed the backbone, providing primary connectivity to Seacon's offices and extending to other port locations that similarly lacked fibre availability. To bridge the gap between the relocated warehouse and the office portacabin, Integra implemented a high-capacity V Band point-to-point wireless link with clear line-of-sight between buildings. This dedicated link carried critical systems traffic with VLAN segmentation, ensuring that both Seacon and visiting logistics partners maintained secure, isolated network connections. Intelligent switches at each end managed traffic efficiently, maintaining the performance standards required for real-time operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For warehouse operations, Integra designed a comprehensive WiFi infrastructure spanning the entire 230-meter facility. The system included 14 internal access points and 2 external APs, all professionally cabled to two redundant switch cabinets utilizing approximately 800 meters of commercial-grade Ethernet cabling. This distributed architecture ensured consistent coverage across the warehouse floor, enabling mobile operations, equipment tracking, and real-time inventory management without connectivity gaps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Security surveillance was equally comprehensive. A full CCTV system provided coverage of all four warehouse entries—both internal and external views—main internal aisles, and office perimeters. High-quality varifocal cameras with infrared capability enabled clear monitoring in all lighting conditions, while a 16-channel digital video recorder with approximately 550 meters of external-grade Ethernet cabling ensured reliable, persistent recording of all facility access points. All systems were professionally integrated and centrally managed, delivering the persistent security oversight essential for modern port logistics operations.
            </p>
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
            <Link to="/connectivity/business-wifi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Business WiFi
              
            </Link>
            <Link to="/connectivity/cctv" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              CCTV
              
            </Link>
            <Link to="/connectivity/wireless-distribution" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-surface-dark-foreground text-sm font-medium hover:bg-white/[0.06] hover:border-white/20 transition-colors">
              Wireless Distribution
              
            </Link>
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/seacon-group" />
    </PageLayout>
  );
};

export default SeaconGroup;
