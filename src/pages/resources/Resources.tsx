import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Tractor, Satellite, Network, HardHat, Phone, FileText, Globe } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import heroImg from "@/assets/connectivity/bridge-hero.webp";

const pillarPages = [
  {
    icon: Wifi,
    title: "Alternatives to fibre Broadband",
    description: "A practical comparison of every real alternative — Starlink, 4G bonding, SD-WAN, leased lines, and hybrid approaches. Honest assessments of speed, cost, and reliability.",
    path: "/alternatives-to-fibre-broadband",
    tag: "Comparison Guide",
  },
  {
    icon: Globe,
    title: "Rural Business Broadband UK",
    description: "Getting reliable internet when BT says 'wait'. Solutions for rural SMEs who need business-grade connectivity today, not in three years.",
    path: "/rural-business-broadband",
    tag: "Rural Connectivity",
  },
  {
    icon: Satellite,
    title: "Starlink for Business",
    description: "An honest assessment of satellite broadband limitations. Where Starlink works, where it doesn't, and what business-grade alternatives exist.",
    path: "/starlink-for-business",
    tag: "Satellite Assessment",
  },
  {
    icon: Network,
    title: "SD-WAN for Small Business",
    description: "Plain English explanation of SD-WAN — no jargon. How bonded cellular connections deliver fibre-like speeds without waiting for infrastructure.",
    path: "/sd-wan-for-small-business",
    tag: "Technology Explainer",
  },
  {
    icon: HardHat,
    title: "Construction Site Broadband",
    description: "Temporary, reliable, fast-deployment broadband solutions for UK construction sites. From site offices to CCTV and IoT monitoring.",
    path: "/construction-site-broadband",
    tag: "Sector Guide",
  },
  {
    icon: Tractor,
    title: "Farm Broadband UK",
    description: "Reliable internet for livestock monitoring, precision agriculture, and farm business operations. Solutions built for rural properties.",
    path: "/rural-business-broadband",
    tag: "Sector Guide",
  },
];

const existingResources = [
  {
    icon: Phone,
    title: "PSTN Switch Off Guide",
    description: "The UK's analogue phone network is switching off in January 2027. Everything you need to know about the transition and how to prepare.",
    path: "/pstn-switch-off",
    tag: "Industry Update",
  },
  {
    icon: FileText,
    title: "Access Broadband Cymru",
    description: "Welsh businesses and residents can claim up to £800 towards broadband installation costs. Check your eligibility and apply through Integra.",
    path: "/access-broadband-cymru",
    tag: "Funding",
  },
];

const allResources = [...pillarPages, ...existingResources];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const Resources = () => {
  return (
    <PageLayout>
      <SEO
        title="Resources"
        description="Guides to rural broadband, SD-WAN, Starlink, construction, farms. Help UK businesses choose right."
        keywords="broadband guides, SD-WAN guide, rural broadband UK, Starlink business, construction broadband, farm broadband, PSTN switch off"
        url="/resources"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="UK broadband connectivity infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Resource Centre</p>
            <h1 className="text-display-sm md:text-display-lg text-white mb-6">
              Straight-talking guides for UK businesses
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              No jargon, no sales pitch. In-depth guides covering everything from broadband alternatives to industry changes — written to help you make informed decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Pillar Pages Grid */}
      <Section size="large">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">In-Depth Guides</p>
          <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4">
            Broadband guides & comparisons
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Comprehensive guides covering the broadband options available to rural UK businesses today.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillarPages.map((page) => (
            <motion.div key={page.path} variants={fadeUp}>
              <Link
                to={page.path}
                className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <page.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground mt-1">
                    {page.tag}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Other Resources */}
      <Section size="large" className="bg-secondary">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Industry Updates</p>
          <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4">
            Funding & regulatory changes
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Stay informed about industry changes that affect your broadband options.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {existingResources.map((page) => (
            <motion.div key={page.path} variants={fadeUp}>
              <Link
                to={page.path}
                className="group block h-full rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <page.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground mt-1">
                    {page.tag}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section variant="gradient" size="large">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4">
              Not sure which solution fits?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our desktop survey maps your property to nearby towers and identifies exactly what's available at your location. No obligation, no hard sell.
            </p>
            <Link to="/contact">
              <motion.button
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Check Your Availability
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </Section>
    </PageLayout>
  );
};

export default Resources;
