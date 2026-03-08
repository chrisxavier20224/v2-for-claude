import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/rhyc-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import marinaImg from "@/assets/case-studies/rhyc-marina.jpg";

const companyDetails = [
  { label: "Company", value: "The Royal Harwich Yacht Club" },
  { label: "Industry", value: "Yachting | Sailing Club" },
  { label: "Location", value: "Woolverstone, Suffolk" },
  { label: "Website", value: "royalharwichyachtclub.co.uk", href: "https://royalharwichyachtclub.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const RoyalHarwichYachtClub = () => {
  return (
    <PageLayout>
      <SEO
        title="Royal Harwich Yacht Club Case Study — Integra Networks"
        description="Integra's SD-WAN service transformed RHYC's operations, providing robust connectivity in a challenging location."
        keywords="case study, Royal Harwich Yacht Club, sailing, SD-WAN, connectivity, Integra Networks"
        url="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Royal Harwich Yacht Club" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Royal Harwich Yacht Club
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Sailing Through Connectivity Challenges: The Royal Harwich Yacht Club's Journey</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Integra's SD-WAN service transformed RHYC's operations, providing robust connectivity in a challenging location.
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
                The Royal Harwich Yacht Club, based in Suffolk, offers a range of sailing and social activities in a stunning riverside location.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Anchored in Connectivity Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Royal Harwich Yacht Club (RHYC), nestled on the banks of the River Orwell in Suffolk, is more than just a sailing club. It's a hub for social activities, a venue for private functions, and a welcoming space for members and visitors alike.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              However, this idyllic location came with its unique set of challenges. The club's operations, which heavily relied on internet-based applications and Voice over IP, were hampered by the lack of reliable internet connectivity. Traditional service providers could only offer a few Mbps per second due to the absence of fibre infrastructure.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Navigating the Sea of Slow Internet</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The club's operations were like a ship trying to sail against the current. The existing broadband service was nearly unusable, affecting everything from office functions to voice over IP. The club also needed to integrate the new service with their onsite WiFi network and ensure IP configuration for their third-party Voice over IP provider. The challenge was not just to find a solution, but to find one that could be implemented quickly and seamlessly.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={marinaImg} alt="Royal Harwich Yacht Club marina" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
              "Integra's remarkable solution has transformed our operations, ensuring robust and reliable connectivity where others doubted its feasibility. Thanks to them, the concern of card payment failures in our clubhouse is no more."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Mark Dean, The Royal Harwich Yacht Club</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Catching the Wind with Integra's SD-WAN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra Networks came to the rescue with their Integra SD-WAN service. After a successful connectivity survey, Integra utilized local mobile network operator transmitters to provide a bonded 4G connectivity solution over SD-WAN. The result? A whopping 80Mbps, a far cry from the few Mbps the club was used to.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Integra's team conducted a full site survey, ensuring the antennas could be installed discreetly without affecting the clubhouse's aesthetics. The installation was seamless, and the new system integrated perfectly with the existing infrastructure and third-party services.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <RelatedCaseStudies currentPath="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" />

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

export default RoyalHarwichYachtClub;
