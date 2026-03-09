import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/steam-rally-hero.png";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import eventImg from "@/assets/case-studies/steam-rally-event.png";

const companyDetails = [
  { label: "Company", value: "WRSA Steam Rally Festival" },
  { label: "Industry", value: "Charity | Festival" },
  { label: "Location", value: "Taunton, Somerset" },
  { label: "Website", value: "steamrally.org.uk", href: "https://steamrally.org.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SteamRally = () => {
  return (
    <PageLayout>
      <SEO
        title="WRSA Steam Rally Case Study — Integra Networks"
        description="WRSA Steam Rally achieved record sales and zero downtime with Integra's bespoke connectivity and network solutions."
        keywords="case study, WRSA, steam rally, festival connectivity, Integra Networks"
        url="/customers/steaming-ahead-with-enhanced-festival-connectivity"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="WRSA Steam Rally Festival" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> WRSA Steam Rally
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Steaming Ahead with Enhanced Festival Connectivity</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              WRSA Steam Rally achieved record sales and zero downtime with Integra's bespoke connectivity and network solutions.
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
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
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
                WSRA organizes an annual steam and vintage rally to fundraise for railway preservation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Full Steam Ahead: Pioneering Connectivity in Somerset</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The West Somerset Railway Association (WSRA) Steam and Vintage Rally is not just an event; it's a yearly pilgrimage for approximately 8,000 steam and vintage transport enthusiasts. Organised in the heart of rural Somerset, this rally is the lifeline of the WSRA charity, supporting the preservation and enjoyment of the historical West Somerset Railway.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The rally brings together a community of exhibitors, volunteers, and attendees for a nostalgic dive into the past, coupled with the enjoyment of modern conveniences like food, souvenirs, and artifacts. The event's charm, however, faced a modern-day challenge: ensuring stable connectivity in a location bereft of local fibre infrastructure.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Connectivity Conundrum: Keeping a Vintage Rally in the Fast Lane</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Positioned in a rural setting, the WSRA Rally's connectivity challenges were multifaceted. The primary obstacle was the lack of local fibre infrastructure, a common issue in less urbanised areas. This deficiency became particularly problematic during peak event hours when the need for stable internet connectivity was at its highest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Critical services such as card payments and information booths suffered, directly impacting sales and the overall visitor experience. Moreover, the requirement to extend reliable internet access across various key locations, including the drinks tent, ticket booths, and exhibitors' areas, added another layer of complexity.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={eventImg} alt="WRSA Steam Rally event connectivity setup" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
              "Integra's innovative SD-WAN solution for festivals transformed our connectivity woes into a success story, playing a crucial role in the record-breaking sales at our festival. That's why we have hired them for the third year running!"
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Jackie Green, General Manager WSRA</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Revolutionising Rally Connectivity with Integra</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra stepped into this challenging scenario with a comprehensive plan tailored to the unique needs of the WSRA Rally. By meticulously reviewing the site plans and understanding the event's specific requirements, Integra crafted a solution that promised not just to meet but exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The installation of temporary structures was promptly followed by the deployment of radio links, ensuring that critical areas of the event space were bathed in robust internet connectivity. Multiple WiFi networks were established, catering to the needs of exhibitors and staff, while a private network dedicated to secure card payments was prioritised. The result was a seamless digital infrastructure that delivered over 300Mbps of speed to the site, ensuring zero downtime throughout the event and enabling record sales.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/steaming-ahead-with-enhanced-festival-connectivity" />

      {/* Solutions Delivered */}
      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Solutions delivered</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog/temporary-broadband-for-events-uk" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Temporary Broadband
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

export default SteamRally;
