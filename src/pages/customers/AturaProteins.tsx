import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/atura-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

const companyDetails = [
  { label: "Company", value: "Atura Proteins" },
  { label: "Industry", value: "Food and Beverage" },
  { label: "Location", value: "Highbridge, Somerset" },
  { label: "Website", value: "aturaproteins.com", href: "https://aturaproteins.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AturaProteins = () => {
  return (
    <PageLayout>
      <SEO
        title="Atura Proteins Case Study — Integra Networks"
        description="Propelled Atura's internet performance from 7Mbps to 100Mbps, without additional Excess Construction Charges."
        keywords="case study, Atura Proteins, food, SD-WAN, connectivity, Integra Networks"
        url="/customers/revolutionising-connectivity-for-plant-protein-pioneers"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Atura Proteins facility" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Atura Proteins
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Revolutionising Connectivity for Plant Protein Pioneers</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Propelled Atura's internet performance from 7Mbps to 100Mbps, without additional Excess Construction Charges, accelerating their journey towards digital excellence.
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
                Atura Proteins, a part of Marigot Group, is a UK-based producer of plant proteins, focusing on sustainability and backed by rigorous science.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Atura Proteins: A Digital Transformation Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Atura Proteins, a subsidiary of the Marigot Group, is a trailblazer in the food and beverage industry. Based in the UK, they are committed to meeting the growing global demand for plant-based proteins. Their product range includes Chickpea, Red Lentil, and Fava Bean proteins, all manufactured to the highest standards in their modern production facility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              However, their rural location posed a unique challenge — a lack of reliable internet connectivity, which was crucial for their operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Connectivity Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The manufacturing plant of Atura Proteins, located far from the exchange, was struggling with an ADSL line that was barely able to support their services. The traditional fibre connection, though feasible, would have taken too long to deploy due to the challenging route from the local exchange. The need for a fast, reliable connection was immediate, and the clock was ticking.
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
              "Integra's solution revolutionised our operations, boosting productivity and eliminating downtime. A game-changer for us."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Lee Betts, Plant & Operations Manager</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Integra: The Digital Solution for Atura Proteins</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra Networks rose to the challenge, delivering their multi-network SD-WAN service to Atura Proteins. By establishing a line of sight to the local cell towers, they connected it to Atura's existing network infrastructure, bonding all new and existing connections into a single service. This innovative solution boosted Atura's download speed from a meagre 7Mbps to over 100Mbps, enabling the head office to work effectively and eliminating downtime on their VoIP phone system.
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
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/revolutionising-connectivity-for-plant-protein-pioneers" />
    </PageLayout>
  );
};

export default AturaProteins;
