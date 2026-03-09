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
        description="Integra's SD-WAN service brought high-speed internet to the heart of Little Quarry Glamping, enhancing the tranquil retreat."
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Glamping Goes Digital: Little Quarry's Internet Revolution</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Integra's SD-WAN service brought high-speed internet to the heart of Little Quarry Glamping, enhancing the tranquil retreat.
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
                Little Quarry Glamping offers luxury, adults-only pods on a 13-acre farm in Goudhurst, providing a private, stylish retreat for nature-lovers and outdoor enthusiasts year-round.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">Welcoming Comfort Amidst Wilderness</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Little Quarry Glamping, a luxury glamping destination nestled in the tranquil Weald of Kent, offers guests an immersive escape into nature without compromising on comfort.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite their idyllic location and well-equipped pods, they faced a significant hurdle — the lack of reliable internet connectivity. This limitation threatened to tarnish the charm of their retreat, as the modern traveller views high-speed internet as a necessity, not a luxury.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <h2 className="text-heading-1 text-foreground mb-6">Fast Internet: A Luxury Not to Be Spared</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The rural setting of Little Quarry Glamping presented a unique challenge. Traditional broadband infrastructure was inadequate, delivering only a few Mbps, insufficient for guests' needs. The owner, Nick Parr, feared this digital deficit could detract from their luxury glamping experience, potentially affecting bookings and customer satisfaction.
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
              "Integra's solution revolutionised our connectivity, enhancing our guest experience and exceeding our expectations."
            </blockquote>
            <p className="text-lg font-semibold text-surface-dark-foreground">Nick Parr, Owner, Little Quarry Glamping</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-heading-1 text-foreground mb-6">The Wi-Fi Win: Integra's Internet Intervention</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Recognizing the challenge, Integra Networks stepped in with their specialised SD-WAN service. Leveraging local mobile network transmitters, they created a high-speed, bonded 4G connection. The team conducted an in-depth site survey, identified the best networks, and found the optimal transmitter location, preserving the farm's aesthetic appeal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Within two weeks, Integra had installed the antennas, routers, and switches. After integrating these with the existing infrastructure and conducting thorough testing, the solution achieved download speeds close to 300Mbps. This digital transformation exceeded the demands of tech-savvy guests, ensuring Little Quarry Glamping remains an attractive destination throughout the year.
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

      <RelatedCaseStudies currentPath="/customers/little-quarry-glamping" />
    </PageLayout>
  );
};

export default LittleQuarry;
