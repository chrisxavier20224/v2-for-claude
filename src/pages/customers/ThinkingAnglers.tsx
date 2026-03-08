import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/thinking-anglers-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import tackleImg from "@/assets/case-studies/thinking-anglers-tackle.jpg";

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
        description="Thinking Anglers leaps from sluggish ADSL to robust SD-WAN, boosting productivity and digital marketing efforts."
        keywords="case study, Thinking Anglers, fishing, SD-WAN, connectivity, Integra Networks"
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Casting the Net Wide: A Connectivity Transformation</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Thinking Anglers, with over 4 million YouTube views, leaps from sluggish ADSL to robust SD-WAN, boosting productivity and digital marketing efforts.
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
            <h2 className="text-heading-1 text-foreground mb-6">Casting Lines in Digital Waters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thinking Anglers, a provider of high-quality carp fishing tackle, found themselves in a predicament. Their rural location and growing digital needs, including managing a popular YouTube channel, were at odds with their existing ADSL broadband line. As their business expanded, so did their connectivity needs. The company's digital operations, including uploading videos and updating social media, were hampered by their sluggish internet connection.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Tangled in the Weeds of Connectivity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The company's rural location presented unique challenges. The distance from the exchange resulted in a struggling ADSL line that couldn't keep up with the demands of a growing business. The lack of resilience in their IT infrastructure meant that any downtime brought operations to a standstill. The impending PSTN switch-off in 2025 further emphasised the need for an upgrade.
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
            <blockquote className="text-2xl md:text-3xl font-semibold text-surface-dark-foreground leading-snug mb-6">
              "Integra's SD-WAN solution was a game-changer, enabling us to work efficiently and enhance our digital marketing efforts."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Scott Karabowicz, General Manager, Thinking Anglers</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Reeling in the Power of SD-WAN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra Networks stepped in with their SD-WAN solution. Despite the challenging location, Integra was able to provide a robust and resilient network infrastructure. Multiple network connections were deployed to deliver the necessary bandwidth, catapulting Thinking Anglers from a mere 5Mbps to over 120Mbps. The upgrade enabled the company to deploy a reliable VoIP phone service and significantly improved upload performance, allowing the team to work more efficiently and manage their popular YouTube channel effectively.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/casting-the-net-wide-a-connectivity-transformation" />

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

export default ThinkingAnglers;
