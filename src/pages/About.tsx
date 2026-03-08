import { Link } from "react-router-dom";
import { Check, Target, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import Placeholder from "@/components/shared/Placeholder";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import StaggeredContainer from "@/components/shared/StaggeredContainer";
import DataFlowHero from "@/components/shared/DataFlowHero";
import DataFlowDivider from "@/components/shared/DataFlowDivider";
import SEO from "@/components/shared/SEO";

// Field images
const field2 = "/assets/backgrounds/field-2.jpg";

const purpose = [
  { 
    title: "One place to see everything", 
    icon: Target,
    description: "Clarity over complexity",
    detail: "No more logging into five different portals. See your entire fleet—regardless of brand—in one view."
  },
  { 
    title: "Know before it fails", 
    icon: Shield,
    description: "Prevention over reaction",
    detail: "Use operational data to catch problems early. Fewer surprises. Fewer callouts."
  },
  { 
    title: "Make decisions with confidence", 
    icon: Heart,
    description: "Insight over guesswork",
    detail: "Real-time data means you know what's happening now—not what happened yesterday."
  },
  { 
    title: "Works at any scale", 
    icon: Users,
    description: "Simplicity at scale",
    detail: "Whether you manage 10 generators or 10,000, the experience stays the same."
  },
];

const values = [
  {
    title: "We build for uptime",
    description: "The systems we monitor can't go down. Neither can we. We hold ourselves to the same standard as the infrastructure we serve."
  },
  {
    title: "We listen before we build",
    description: "Our roadmap comes from operators, not trends. We spend time understanding real problems before writing a single line of code."
  },
  {
    title: "We say what we mean",
    description: "No hidden fees, no vague promises. If we can do something, we'll tell you. If we can't, we'll tell you that too."
  },
];

const securityPractices = [
  { name: "Cyber Essentials", description: "UK government-backed certification" },
  { name: "ICO Registered", description: "UK data protection registration" },
  { name: "UK GDPR Compliant", description: "Data protection by design" },
];

const partners = [
  { category: "Controller Manufacturers", items: ["DeepSea Electronics", "ComAp", "DEIF", "Major generator OEMs"] },
  { category: "Technology", items: ["Cloud infrastructure", "Connectivity providers", "Security partners"] },
  { category: "Integration", items: ["CMMS platforms", "Enterprise systems", "Telco operators"] },
];

const About = () => {
  return (
    <PageLayout>
      <SEO
        title="About Us"
        description="Built for critical power reliability. We build software for the people responsible for keeping generators running when failure isn't an option."
        keywords="about NEXR, critical power, generator monitoring company, IoT platform"
        url="/about"
      />
      {/* Hero */}
      <Section variant="gradient" size="xlarge" className="feature-section-bg relative overflow-hidden">
        <DataFlowHero />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <AnimatedSection>
            <EyebrowLabel>About Us</EyebrowLabel>
            <h1 className="mb-8 text-heading-1 md:text-display-sm text-foreground">
              Built for critical power reliability
            </h1>
            <p className="mb-6 text-xl md:text-2xl text-muted-foreground">
              Critical power systems are relied on when failure isn't an option.
            </p>
            <p className="text-muted-foreground">
              We build software for the people responsible for keeping them running.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <DataFlowDivider />

      {/* Mission Visual */}
      <Section>
        <AnimatedSection>
          <div className="mx-auto max-w-5xl">
            <Placeholder label="NEXR IoT Team" category="team" className="h-64 md:h-[420px]" />
            <p className="mt-6 text-center text-muted-foreground">
              Headquartered in London
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <DataFlowDivider />

      {/* Purpose */}
      <Section variant="alt" size="large" className="relative overflow-hidden">
        {/* Background imagery */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
        </div>
        <AnimatedSection>
          <div className="text-center mb-16 relative z-10">
            <EyebrowLabel>Our Purpose</EyebrowLabel>
            <h2 className="mb-6 text-heading-1 md:text-display-sm text-foreground">
              Why We Exist
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Hospitals, data centres, and telecommunications networks depend on backup power 
              that works when it matters most. Without visibility, things get missed. 
              Without warning, things fail.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mt-4">
              We exist to give operators the tools to prevent that.
            </p>
          </div>
        </AnimatedSection>
        
        <StaggeredContainer className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10" staggerDelay={0.1}>
          {purpose.map((item) => (
            <div key={item.title} className="rounded glass-card-hover p-8 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded bg-primary/10 text-primary">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mb-3 text-sm font-bold text-primary uppercase tracking-wide">{item.description}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </StaggeredContainer>
      </Section>

      <DataFlowDivider />

      {/* Values */}
      <Section size="large" className="feature-section-bg">
        <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left">
            <div>
              <EyebrowLabel>Our Values</EyebrowLabel>
              <h2 className="mb-6 text-heading-1 md:text-display-sm text-foreground">
                How We Work
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                These aren't slogans. They're how we actually behave—with each other, 
                with customers, and when making difficult decisions.
              </p>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="rounded glass-card p-6">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <Placeholder label="Values & Culture" category="office" className="h-64 md:h-[420px]" />
          </AnimatedSection>
        </div>
      </Section>

      <DataFlowDivider />

      {/* Trust & Compliance */}
      <Section variant="alt" size="large">
        <AnimatedSection>
          <div className="text-center mb-16">
            <EyebrowLabel>Security & Trust</EyebrowLabel>
            <h2 className="mb-6 text-heading-1 md:text-display-sm text-foreground">
              How We Protect Your Data
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We take security seriously because our customers do. Our platform is designed 
              with industry-standard practices and we're transparent about what we do and don't have.
            </p>
          </div>
        </AnimatedSection>
        
        <StaggeredContainer className="grid gap-8 grid-cols-1 sm:grid-cols-3" staggerDelay={0.1}>
          {securityPractices.map((practice) => (
            <div 
              key={practice.name} 
              className="rounded glass-card-hover p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded bg-primary/10 text-primary">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{practice.name}</h3>
              <p className="text-sm text-muted-foreground">{practice.description}</p>
            </div>
          ))}
        </StaggeredContainer>
      </Section>

      <DataFlowDivider />

      {/* Partners */}
      <Section size="large" className="feature-section-bg">
        <AnimatedSection>
          <div className="text-center mb-16">
            <EyebrowLabel>Ecosystem</EyebrowLabel>
            <h2 className="mb-6 text-heading-1 md:text-display-sm text-foreground">
              Who We Work With
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our platform is built to be open. We collaborate with controller manufacturers, 
              technology providers, and integrators to work with what you already have.
            </p>
          </div>
        </AnimatedSection>
        
        <StaggeredContainer className="grid gap-8 grid-cols-1 sm:grid-cols-3" staggerDelay={0.1}>
          {partners.map((partner) => (
            <div key={partner.category} className="rounded glass-card p-8">
              <h3 className="mb-6 text-lg font-semibold text-foreground">{partner.category}</h3>
              <ul className="space-y-4">
                {partner.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggeredContainer>
      </Section>

      {/* CTA - Blue */}
      <Section variant="primary" size="compact" className="relative overflow-hidden">
        {/* Faded background image */}
        <div className="absolute inset-0 opacity-[0.08]">
          <img src={field2} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-primary-foreground">
              Curious?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              If this sounds like a fit, we'd be happy to show you how it works.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </PageLayout>
  );
};

export default About;