import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";

import royleFarmHero from "@/assets/case-studies/royle-farm-hero.jpg";
import steamRallyHero from "@/assets/case-studies/steam-rally-hero.png";
import wbPowerHero from "@/assets/case-studies/wb-power-hero.avif";
import littleQuarryHero from "@/assets/case-studies/little-quarry-hero.jpg";
import carbeeHero from "@/assets/case-studies/carbee-hero.jpg";
import rhycHero from "@/assets/case-studies/rhyc-hero.jpg";
import ukharvestHero from "@/assets/case-studies/ukharvest-hero.jpg";
import thinkingAnglersHero from "@/assets/case-studies/thinking-anglers-hero.jpg";
import aturaHero from "@/assets/case-studies/atura-hero.jpg";
import apjHero from "@/assets/case-studies/apj-hero.jpg";
import mcgeeHero from "@/assets/case-studies/mcgee-hero.jpg";
import seaconHero from "@/assets/case-studies/seacon-hero.jpg";

const featured = {
  company: "McGee Construction",
  title: "Building at Speed: 350Mbps for London's Biggest Sites",
  description: "McGee needed reliable connectivity across active London construction sites. Integra's SD-WAN delivered 350Mbps without waiting for fibre.",
  image: mcgeeHero,
  path: "/customers/mcgee-construction",
};

const stories = [
  {
    company: "WRSA Steam Rally Festival",
    title: "Steam at Scale: 500Mbps for 8,000 Visitors",
    description: "500Mbps in a field with zero infrastructure. Card machines, live streams, and 8,000 visitors — all connected in one weekend.",
    image: steamRallyHero,
    path: "/customers/steaming-ahead-with-enhanced-festival-connectivity",
  },
  {
    company: "WB Power Services",
    title: "Dodging the Six-Figure Bill: Nationwide Connectivity",
    description: "Facing a six-figure excess construction charge for fibre, WB Power switched to Integra SD-WAN and saved tens of thousands.",
    image: wbPowerHero,
    path: "/customers/wb-power-services",
  },
  {
    company: "Royle Farm Business Park",
    title: "From Farm to Fibre: Royle Farm Business Park",
    description: "From poor connectivity to 1Gbps speeds across a multi-tenant rural business park. Every unit now has enterprise-grade internet.",
    image: royleFarmHero,
    path: "/customers/royle-farm",
  },
  {
    company: "Little Quarry Glamping",
    title: "Luxury Pods, Real Internet: Little Quarry's Breakthrough",
    description: "Guests expect luxury — including fast WiFi. Integra brought high-speed internet to glamping pods in rural Cornwall.",
    image: littleQuarryHero,
    path: "/customers/little-quarry-glamping",
  },
  {
    company: "Carbee Ltd",
    title: "From 0.1Mbps to 300+: Rural Car Dealer Gets High-Speed",
    description: "Carbee's rural dealership went from 0.1Mbps to over 300Mbps overnight. Online listings, video uploads, and card payments all fixed.",
    image: carbeeHero,
    path: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
  },
  {
    company: "Royal Harwich Yacht Club",
    title: "Full Sail: 300Mbps in the Middle of Nowhere",
    description: "A yacht club on a remote estuary with no fibre options. Integra delivered 300Mbps via bonded cellular SD-WAN.",
    image: rhycHero,
    path: "/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey",
  },
  {
    company: "UKHarvest",
    title: "Food Rescue Needs Fast Internet: UKHarvest's Win",
    description: "UKHarvest coordinates food rescue across the UK. Integra deployed high-speed connectivity in under 14 days.",
    image: ukharvestHero,
    path: "/customers/fast-track-connectivity-ukharvests-digital-transformation",
  },
  {
    company: "Thinking Anglers",
    title: "YouTube Creators Need Upload Speed: They Got It",
    description: "Thinking Anglers needed upload speed for YouTube content. Integra replaced sluggish ADSL with fast, reliable SD-WAN.",
    image: thinkingAnglersHero,
    path: "/customers/casting-the-net-wide-a-connectivity-transformation",
  },
  {
    company: "Atura Proteins",
    title: "Plant Proteins Powered by Real Connectivity",
    description: "Atura's internet went from 7Mbps to 100Mbps — no excess construction charges, no six-month wait for fibre.",
    image: aturaHero,
    path: "/customers/revolutionising-connectivity-for-plant-protein-pioneers",
  },
  {
    company: "APJ European",
    title: "A Warehouse in a Digital Blackspot: Solved",
    description: "APJ's global distribution warehouse sat in a digital blackspot. Integra's SD-WAN brought it online in days, not months.",
    image: apjHero,
    path: "/customers/revitalising-global-distribution-apj-europeans-digital-transformation",
  },
  {
    company: "Seacon Group",
    title: "Port Operations Transformed: Comprehensive Connectivity",
    description: "Seacon's busy port estate at Northfleet needed resilient connectivity across multiple buildings. Integra delivered end-to-end.",
    image: seaconHero,
    path: "/customers/seacon-group",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Customers = () => {
  return (
    <PageLayout>
      <SEO
        title="Customer Stories — Integra Networks"
        description="See how businesses across the UK transformed their connectivity with Integra's SD-WAN solutions."
        keywords="customer stories, case studies, SD-WAN, connectivity, Integra Networks"
        url="/customers"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={royleFarmHero} alt="Integra Networks customer stories" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Customer Stories</p>
            <h1 className="text-heading-1 md:text-display-sm text-white max-w-2xl font-medium">
              Real businesses. Real results.
            </h1>
            <p className="text-lg text-white/80 max-w-xl mt-6 leading-relaxed">
              From rural farms to London construction sites, from glamping pods to yacht clubs — these are the businesses that stopped waiting for fibre and chose Integra instead.
            </p>
            <p className="text-white/60 mt-4">Read our customer stories below ↓</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-surface-dark pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <Link to={featured.path} className="group block">
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-muted/10 border border-white/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Customer Story</span>
                  <p className="text-sm font-medium text-primary mb-2">{featured.company}</p>
                  <h2 className="text-2xl md:text-3xl font-medium text-surface-dark-foreground mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-surface-dark-muted mb-6">{featured.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                    Read Story <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar — integrated into dark flow */}
      <section className="bg-surface-dark py-16 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "99", accent: "%", label: "UK coverage via cellular SD-WAN" },
                { value: "14", accent: " days", label: "Average install time — not months" },
                { value: "24", accent: "/7", label: "Proactive monitoring & UK support" },
                { value: "350", accent: "Mbps", label: "Average speeds on bonded connections" },
              ].map((stat) => (
                <div key={stat.value} className="text-center rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                    {stat.value}<span className="text-primary">{stat.accent}</span>
                  </p>
                  <p className="text-xs md:text-sm text-surface-dark-muted mt-2 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stories.map((story) => (
              <motion.div key={story.path} variants={fadeUp}>
                <Link to={story.path} className="group block h-full">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-muted/5 h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.company}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Customer Story</span>
                      <p className="text-sm font-medium text-surface-dark-foreground mb-1">{story.company}</p>
                      <h3 className="text-lg font-medium text-surface-dark-foreground mb-3 leading-snug">{story.title}</h3>
                      <p className="text-sm text-surface-dark-muted mb-4 flex-1">{story.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                        Read Story <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Ready to join them?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base rounded-md transition-colors"
                >
                  Check Availability
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default Customers;
