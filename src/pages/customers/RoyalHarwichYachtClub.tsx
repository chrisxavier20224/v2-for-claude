import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/rhyc-hero.webp";
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
        description="Royal Harwich Yacht Club got over 300Mbps connectivity bonded from 4G/5G connections via Integra, transforming operations where Fibre was impossible."
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Full Sail: How a Yacht Club Got 300Mbps in the Middle of Nowhere</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              When Fibre was impossible, Integra bonded 4G/5G to deliver over 300Mbps. Now card payments never fail and VoIP actually works.
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
                  <a href={item.href} target="_blank" rel="nofollow noopener noreferrer" className="text-surface-dark-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    {item.value} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="text-surface-dark-foreground font-medium">{item.value}</p>
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
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Zero Infrastructure, Maxed-Out Frustration</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Royal Harwich Yacht Club sits in one of Suffolk's most beautiful spots. Perfect for sailing. Terrible for internet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fibre had never reached there. Mobile networks were spotty at best. Yet their members expected to pay by card, staff needed email, and their VoIP phone system required reliable connectivity. When payment terminals froze mid-transaction, when staff couldn't access files, when calls dropped in the middle of business—that's when the frustration set in.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">What They Needed: Connectivity That Actually Worked</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The club didn't need flashy tech. They needed reliable internet. Fast enough for card payments. Stable enough for VoIP. Good enough to integrate with their WiFi network. But no leased line provider would touch Woolverstone. And traditional broadband meant waiting weeks for a service that would barely keep up with demand.
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
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "Integra delivered what everyone else said was impossible. Card payments work. VoIP works. And it's been completely reliable. I can't recommend them enough."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Mark Dean, The Royal Harwich Yacht Club</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Bonded 4G/5G Over SD-WAN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra ran a site survey and found what others had missed: clear sightlines to multiple mobile towers. They bonded 4G connections over SD-WAN to create a single, ultra-reliable connection. Over 300Mbps. Strong enough to handle any demand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Installation took 10 working days. The antennas went on the roof—invisible from the clubhouse. Everything integrated with their existing WiFi and VoIP system seamlessly. From day one, it worked.
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
              { label: "Integra SD-WAN", href: "/connectivity/integra-sd-wan" },
              { label: "Business WiFi", href: "/connectivity/business-wifi" },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors text-center">
                <span className="text-sm font-medium text-surface-dark-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies currentPath="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" />
    </PageLayout>
  );
};

export default RoyalHarwichYachtClub;
