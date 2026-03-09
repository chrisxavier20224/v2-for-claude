import { Link } from "react-router-dom";
import { Check, Target, Heart, Shield, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import Placeholder from "@/components/shared/Placeholder";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import StaggeredContainer from "@/components/shared/StaggeredContainer";
import DataFlowHero from "@/components/shared/DataFlowHero";
import DataFlowDivider from "@/components/shared/DataFlowDivider";
import SEO from "@/components/shared/SEO";


const purpose = [
  {
    title: "We go where fibre doesn't",
    icon: Target,
    description: "Coverage over convenience",
    detail: "Rural farms, construction sites, holiday parks — we connect the places big ISPs ignore. 99% UK coverage via cellular SD-WAN."
  },
  {
    title: "We monitor before you notice",
    icon: Shield,
    description: "Prevention over reaction",
    detail: "Our monitoring platform watches every connection 24/7. If something drops, we're usually fixing it before you've picked up the phone."
  },
  {
    title: "We install it properly",
    icon: Heart,
    description: "Engineering over guesswork",
    detail: "Our engineers install, configure, and test everything on-site. No self-install kits. No guesswork. Professional-grade from day one."
  },
  {
    title: "We support like a small company should",
    icon: Users,
    description: "People over tickets",
    detail: "Phone and WhatsApp support with 2-4 hour response times. You talk to real engineers, not a chatbot."
  },
];

const values = [
  {
    title: "We deliver what we promise",
    description: "99.5% uptime SLA with real compensation if we miss it. Not 'best effort' — actual accountability for your connection."
  },
  {
    title: "We design before we install",
    description: "Every installation starts with understanding your property, your needs, and your budget. Then we design the right solution — not the most expensive one."
  },
  {
    title: "We tell you the truth",
    description: "If fibre is cheaper for your location, we'll tell you. If our SD-WAN isn't the right fit, we'll say so. No hard sell. Just honest advice."
  },
];

const securityPractices = [
  { name: "Cyber Essentials", description: "UK government-backed certification" },
  { name: "ICO Registered", description: "UK data protection registration" },
  { name: "UK GDPR Compliant", description: "Data protection by design" },
];

const partners = [
  { category: "Network Hardware", items: ["Integra SD-WAN Hardware", "Integra Managed WiFi", "Commercial-Grade Access Points", "Enterprise Routers & Switches"] },
  { category: "Connectivity", items: ["EE / BT", "Vodafone", "Three", "O2 / Virgin Media"] },
  { category: "Services", items: ["Starlink (SpaceX)", "Microsoft Teams", "VoIP providers", "24/7 Network Monitoring"] },
];

const About = () => {
  return (
    <PageLayout>
      <SEO
        title="About Integra Networks — Connectivity That Just Works"
        description="107 UK businesses trust Integra for their internet. We deliver SD-WAN, WiFi, managed SIMs, and leased lines — installed in 14 days, monitored 24/7."
        keywords="about Integra Networks, UK ISP, SD-WAN provider, rural broadband, managed connectivity"
        url="/about"
      />
      {/* Hero */}
      <Section variant="gradient" size="xlarge" className="feature-section-bg relative overflow-hidden">
        <DataFlowHero />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <AnimatedSection>
            <EyebrowLabel>About Us</EyebrowLabel>
            <h1 className="mb-8 text-heading-1 md:text-display-sm text-foreground">
              Connectivity that just works.
            </h1>
            <p className="mb-6 text-xl md:text-2xl text-muted-foreground">
              107 UK businesses trust Integra for their internet. We deliver what the big ISPs won't.
            </p>
            <p className="text-muted-foreground">
              SD-WAN, WiFi, managed SIMs, leased lines — installed in 14 days, monitored 24/7, supported by real people.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <DataFlowDivider />

      {/* Mission Visual */}
      <Section>
        <AnimatedSection>
          <div className="mx-auto max-w-5xl">
            <Placeholder label="Integra Networks Team" category="team" className="h-64 md:h-[420px]" />
            <p className="mt-6 text-center text-muted-foreground">
              Headquartered in London, operating UK-wide
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
              Too many UK businesses are stuck with broadband that doesn't work —
              slow ADSL, unreliable mobile dongles, or fibre that's years away from arriving.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mt-4">
              We exist to give every business reliable, fast internet — regardless of postcode.
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
                These aren't slogans. They're how we treat every customer,
                every installation, and every support call.
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
              We work with the best hardware and network providers to deliver reliable connectivity.
              No vendor lock-in — we choose the right equipment for your specific situation.
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

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">
              Curious?
            </h2>
            <p className="mb-8 text-lg text-surface-dark-muted">
              If this sounds like a fit, we'd be happy to show you how it works.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base rounded-md transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default About;