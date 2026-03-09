import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/ukharvest-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import officeImg from "@/assets/case-studies/ukharvest-office.jpg";

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
        description="UKHarvest's digital operations turbocharged with Integra's SD-WAN solution, deployed in under 14 days."
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Fast-Track Connectivity: UKHarvest's Digital Transformation</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              UKHarvest's digital operations turbocharged with Integra's SD-WAN solution, deployed in under 14 days.
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
                UKHarvest, a dynamic food rescue and education organization, operates from its semi-rural headquarters in Chichester.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Inception of UKHarvest's Internet Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UKHarvest, a vibrant organization committed to food rescue and education, found itself in a digital predicament. As they expanded their operations and relocated to a semi-rural head office in Chichester, the need for robust internet connectivity became critical.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              However, the rural location posed a significant challenge, with fibre connectivity not being a viable option. The organisation needed a solution that could support their growing team's general internet usage and VoIP requirements, and they needed it fast.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Bandwidth Blight: A Rural Reality</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The semi-rural location of UKHarvest's new head office presented a unique set of challenges. Traditional fibre connectivity was off the table, and a leased line solution would take too long to implement. The organisation needed a solution that could not only provide high-speed internet but also ensure reliability for their critical operations, including VoIP, conference calls, and general internet usage.
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
            <blockquote className="text-2xl md:text-3xl font-semibold text-surface-dark-foreground leading-snug mb-6">
              "Thanks to Integra, our head office was on-net in under 14 days. Their team is top-notch, and we'd recommend their services to any company needing a fast, reliable internet solution."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">James Swann, Programme Manager, UKHarvest</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">14 Days to Connectivity: Integra's Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra Networks, a specialist in rural internet connectivity, stepped in to address UKHarvest's connectivity conundrum. After a thorough survey of the site, Integra confirmed that delivering fibre would not be a quick option. Instead, they deployed their innovative SD-WAN solution, leveraging multiple 4G and 5G signals and bonding the connections to deliver close to 200Mbps download speeds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This solution, coupled with a newly installed Wi-Fi network, ensured staff could remain connected to the private network. The entire installation process was completed within two weeks, a testament to Integra's commitment to delivering fast and reliable solutions. This swift transformation not only met but exceeded UKHarvest's operational requirements.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/fast-track-connectivity-ukharvests-digital-transformation" />

      {/* Solutions Delivered */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Solutions delivered</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/connectivity/integra-sd-wan" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Integra SD-WAN
              </Link>
              <Link to="/connectivity/business-wifi" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Business WiFi
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">Unlock the Power of Integra SD-WAN</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
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

export default UKHarvest;
