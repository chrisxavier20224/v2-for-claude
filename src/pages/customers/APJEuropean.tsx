import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/apj-hero.jpg";
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
        description="APJ European breaks free from digital constraints, accelerating their global distribution with Integra's SD-WAN solution."
        keywords="case study, APJ European, refrigeration, SD-WAN, connectivity, Integra Networks"
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Revitalising Global Distribution: APJ European's Digital Transformation</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              APJ European breaks free from digital constraints, accelerating their global distribution and customer engagement with Integra's SD-WAN solution.
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
                APJ European, a global distributor in the refrigeration and air conditioning industry, faced significant digital challenges due to their location.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Setting the Digital Stage for Global Distribution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              APJ European, a major player in the global refrigeration and air conditioning industry, found themselves grappling with digital obstacles. Despite their commitment to operational excellence and customer service, their South Coast warehouse was plagued by slow internet speeds and high latency due to collapsed ducts in their region. This digital roadblock impeded their ability to use multiple applications and caused delays in processing customer orders.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Navigating the Digital Icebergs</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The company's digital challenges were twofold. Firstly, their use of remote platforms like Quicken and SAP became taxing due to frequent disconnections and excessive response times. This resulted in operational inefficiencies and customer service delays. Secondly, poor quality and often dropped voice calls were not just a source of frustration for staff but also had a negative impact on their customer relationships. These issues necessitated the urgent need for a robust, reliable, and efficient solution.
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
              "Despite being in the middle of a major city we found ourselves in a digital blackspot, unable to function as a modern online business. In that respect, Integra became a lifeline for us and allowed us to progress and grow as a business."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Simon Bane, IT & Infrastructure Manager, APJ European</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Integra's SD-WAN: The Digital Lifeline</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra provided an SD-WAN solution that harnessed the capabilities of three out of four UK cellular networks, including the newly accessible 5G. This allowed APJ to achieve impressive download speeds exceeding 100 Mbps and upload speeds of over 80 Mbps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Moreover, APJ could now operate all of their applications on one infrastructure without issues of latency and low bandwidth, marking a significant transformation in their operations. Integra installed the solution within two weeks and has been a consistent support during the implementation process and beyond, helping APJ with configuration and troubleshooting.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/revitalising-global-distribution-apj-europeans-digital-transformation" />

      {/* Solutions Delivered */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Solutions delivered</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/connectivity/integra-sd-wan" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Integra SD-WAN
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

export default APJEuropean;
