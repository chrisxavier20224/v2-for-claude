import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import heroImg from "@/assets/connectivity/bridge-hero.webp";

const sections = [
  {
    h: "Started solving an impossible problem.",
    p: "Rural properties nobody else would touch. Farms, glamping sites, construction sites. We layered satellite, cellular, and Fibre because no single technology worked. That's where we built the engineering muscle to make multi-bearer connectivity actually reliable.",
  },
  {
    h: "Realised the real problem was bigger.",
    p: "It wasn't just rural. Every business waiting around 10 weeks for BT had the same problem — a connectivity gap. Construction sites, new offices, multi-site rollouts. The bridge wasn't a rural product, it was a timing product.",
  },
  {
    h: "Today.",
    p: "A proper business ISP. Standard Fibre, leased lines, managed connectivity — same destination as anyone else. But with one thing no one else has: the ability to bridge the gap.",
  },
];

const founders = [
  { name: "Chris Xavier", role: "Co-founder" },
  { name: "Andrew Somerville", role: "Co-founder" },
];

const About = () => (
  <PageLayout>
    <SEO
      title="Our Story — Integra Networks"
      description="Founded to solve the connectivity gap. Integra Networks is a UK B2B ISP for multi-site businesses — built by engineers."
      url="/about"
    />

    {/* Hero — matches Integra Bridge styling */}
    <section className="relative min-h-[60vh] flex items-end overflow-hidden -mt-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Integra Networks team and infrastructure" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Integra Networks</p>
          <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-medium">Our Story</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">Founded to solve the connectivity gap.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story sections */}
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-16">
        {sections.map((s) => (
          <AnimatedSection key={s.h}>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground mb-5 font-medium">{s.h}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{s.p}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

    {/* Founders */}
    <section className="bg-surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-12 font-medium">Founders</h2>
        </AnimatedSection>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          {founders.map((f) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-white/10 flex items-center justify-center">
                <User className="h-14 w-14 text-white/40" strokeWidth={1.2} />
              </div>
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-1">{f.name}</h3>
              <p className="text-sm text-primary mb-4">{f.role}</p>
              <p className="text-sm text-surface-dark-muted">Bio coming soon.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

    {/* Final CTA */}
    <section className="bg-background py-24 md:py-32">
      <AnimatedSection>
        <div className="mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-8 text-heading-1 md:text-display-sm text-foreground font-medium">
            Talk to an engineer who built the network.
          </h2>
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Book a meeting <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  </PageLayout>
);

export default About;