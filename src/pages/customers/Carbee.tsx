import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/carbee-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

const companyDetails = [
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
        description="CarBee races ahead with Integra's SD-WAN service, leaving slow internet in the dust and shifting their business into high gear."
        keywords="case study, CarBee, automotive, SD-WAN, connectivity, Integra Networks"
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Revving Up Connectivity: CarBee's Journey to High-Speed Internet</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              CarBee races ahead with Integra's SD-WAN service, leaving slow internet in the dust and shifting their business and home operations into high gear.
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
            <h2 className="text-heading-1 text-foreground mb-6">The Starting Line: CarBee's Race for Connectivity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              CarBee, a family-owned business, is not just about selling top-quality pre-owned cars. They are also a hub for car enthusiasts, offering a wide range of performance and styling parts for various car brands, making them a key player in the automotive aftermarket industry in Lincolnshire.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              However, operating from a rural location, CarBee found itself in the slow lane of the digital highway. With a bustling on-site office, a large workshop requiring Wi-Fi, and a home located 300 meters away, CarBee needed a robust internet solution to ensure smooth operations and a comfortable home environment.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Speed Bumps: CarBee's Connectivity Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CarBee's rural location posed a significant hurdle. Traditional internet service providers could only offer a few Mbps due to the lack of fibre infrastructure. This sluggish connectivity was insufficient for their growing business operations and their home needs. Moreover, they required a reliable IP configuration for their CCTV system to ensure continuous surveillance of their car lot. The need for a fast, reliable solution was immediate.
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
              "We have been so impressed by Integra Networks. They have enabled us to set up business in a very remote area where the best BT could offer was 0.1Mbps. Thanks to Integra, we enjoy up to 100Mbps, and have never once lost signal or service. Cannot recommend enough."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Andrew Briggs, Managing Director, Carbee Ltd</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Crossing the Finish Line: CarBee's Internet Upgrade with Integra</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra Networks stepped in with their innovative SD-WAN service. After a successful connectivity survey, Integra utilized local mobile network operator transmitters to provide a bonded 4G connectivity solution. This solution delivered 100Mbps, with the potential to reach over 200Mbps when needed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra installed the primary connectivity in their office unit and connected their workshop using point-to-point radios. After coordinating with their security company, a secure path was established for the CCTV system. Finally, their home was connected to the network, ensuring high-speed internet for the family.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet" />

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

export default Carbee;
