import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/case-studies/little-quarry-hero.jpg";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import podsImg from "@/assets/case-studies/little-quarry-pods.jpg";

const companyDetails = [
  { label: "Company", value: "Little Quarry Glamping" },
  { label: "Industry", value: "Glamping Pods | Airbnb" },
  { label: "Location", value: "Goudhurst, Kent" },
  { label: "Website", value: "littlequarry.co.uk", href: "https://littlequarry.co.uk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const LittleQuarry = () => {
  return (
    <PageLayout>
      <SEO
        title="Little Quarry Glamping Case Study — Integra Networks"
        description="How Little Quarry Glamping went from no internet to near-300Mbps speeds in 2 weeks. Their guests can now stream, work, and stay connected in the wilderness."
        keywords="case study, Little Quarry, glamping, SD-WAN, connectivity, Integra Networks"
        url="/customers/little-quarry-glamping"
      />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Little Quarry Glamping pods" className="w-full h-full object-cover" loading="eager" />
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
                  Customers <ArrowLeft className="h-3 w-3 rotate-180" /> Little Quarry Glamping
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Luxury Pods, Real Internet: Little Quarry's Breakthrough</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              5-star glamping needs 5-star connectivity. We delivered it in two weeks.
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
                Little Quarry Glamping: luxury adults-only pods on 13 acres in Goudhurst, Kent. Nature. Style. Tranquillity. Plus now—seamless connectivity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Problem: Digital Dead Zone</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Picture this: guests pay premium rates for a luxury pod retreat. They arrive ready to disconnect—but then reality hits. Their streaming buffers. Their video calls drop. Their Zoom meetings freeze.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Little Quarry's location near Goudhurst was idyllic for guests seeking peace. But it was a digital desert. No fibre. Minimal mobile signal. The existing connectivity was slower than dial-up. Guests could escape the world—but they couldn't actually stay connected when they needed to. That's a problem for modern travellers.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">The Cost: Lost Bookings, Bad Reviews</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Owner Nick Parr watched guests leave negative reviews. "No WiFi in the pods." "Couldn't work from here." "Internet is useless." Sure, they loved the scenery—but they'd book elsewhere next time. In luxury accommodation, connectivity isn't a nice-to-have. It's table stakes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-4">
            <motion.div className="overflow-hidden rounded-2xl" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={podsImg} alt="Little Quarry Glamping luxury pods" className="w-full h-auto object-cover aspect-video" loading="lazy" />
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
              "Integra transformed our entire offering. Guests can now do everything they need—stream, work, video call. And then they can actually relax. It's been transformational."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Nick Parr, Owner, Little Quarry Glamping</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Solution: Bonded 4G, Hidden Infrastructure</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Integra surveyed the site. No fibre possible. No point waiting. They went after nearby mobile signals—the invisible infrastructure already covering the area. Using SD-WAN technology, they bonded multiple 4G connections into one seamless, fast network. And they hid it all: antennas positioned to blend with the landscape, equipment tucked away. The glamping vibe remained untouched.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Result: 14 days from decision to live. Guests now get close to 300Mbps download speeds. Video calls work. Streaming works. Zoom calls don't freeze. Little Quarry pods now have everything: luxury, peace, and real internet.
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

      <RelatedCaseStudies currentPath="/customers/little-quarry-glamping" />
    </PageLayout>
  );
};

export default LittleQuarry;
