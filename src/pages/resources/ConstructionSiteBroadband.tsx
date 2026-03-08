import { Link } from "react-router-dom";
import { Zap, MapPin, Clock, Wifi, Camera, AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/backgrounds/field-2.jpg";

const deploymentSteps = [
  {
    week: "Week 1",
    title: "Discovery",
    items: [
      "Site manager sends property coordinates",
      "Integra maps nearest cell towers",
      "Check what networks are available (EE, Vodafone, O2, etc.)",
      "Likely verdict: 'You'll get 150-250Mbps from [network combination], install takes 4 hours.'",
    ],
  },
  {
    week: "Week 2",
    title: "Site Visit & Install",
    items: [
      "Engineer arrives with router, antennas, cabling",
      "Tests actual signal strength (desktop survey is 95% accurate, field test confirms)",
      "Mount antenna on pole/building (whichever has best sight line)",
      "Run cable to site office or security hut",
      "Connect router",
      "Test throughput, latency, failover (if dual SIM)",
    ],
  },
  {
    week: "Week 2 (Afternoon)",
    title: "Live",
    items: [
      "Router is up, site manager logs in, CCTV comes online, speeds verified",
    ],
  },
  {
    week: "Weeks 3-26",
    title: "During Site Operation",
    items: [
      "Integra monitors remotely",
      "If issues arise, troubleshoot via remote access or engineer visit",
      "No involvement from site staff beyond using it",
    ],
  },
  {
    week: "Week 26/27",
    title: "Decommission",
    items: [
      "Engineer collects router",
      "Check all cables removed",
      "Restore site to condition it was",
      "Router goes to next site",
    ],
  },
];

const faqs = [
  {
    q: "What if my site moves every month?",
    a: "Deploying every month is expensive (install cost £2,200 per site). Monthly moves make sense only if you're moving the whole operation (different company or region). For typical multi-month projects with fixed locations, install once.",
  },
  {
    q: "Can I share broadband between adjacent sites?",
    a: "If sites are within 500m and have line of sight, possibly via P2P radio links (£400-600 pair). But usually easier to provision separate cellular routers (same price, no radio complexity).",
  },
  {
    q: "What if I need to relocate the antenna during a project?",
    a: "Engineer can visit and reposition (mounting issue, signal degradation, etc.). Call support, book engineer. Usually 1-2 day wait.",
  },
  {
    q: "Is Integra's solution cheaper than a temporary fibre install?",
    a: "Yes, dramatically. Temporary fibre install can cost £5,000-15,000 setup, takes 8+ weeks. Integra is £2,200 install, 14 days, no decommissioning fees. For any temporary project < 12 months, cellular SD-WAN wins.",
  },
  {
    q: "Can I use the same router on multiple sites sequentially?",
    a: "Yes. After Site 1 finishes, router moves to Site 2. We re-provision it for Site 2's postcode/towers. Takes 1-2 days to make the change and schedule install.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

const ConstructionSiteBroadband = () => {
  return (
    <PageLayout>
      <SEO
        title="Construction Site Broadband Solutions UK: Temporary, Reliable, Fast Deployment"
        description="Construction sites need connectivity that deploys in days, moves fast, and works on site. Starlink, 4G, WiFi solutions. Case study: McGee Construction."
        keywords="construction site broadband UK, temporary broadband, construction CCTV broadband, site broadband solutions, temporary internet construction"
        url="/construction-site-broadband"
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Construction site broadband solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Construction Site Broadband Solutions UK: Temporary, Reliable, Fast Deployment
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              Construction sites need connectivity that deploys in days, works reliably, and moves with your operation. This guide compares solutions and shows the McGee Construction case study.
            </p>
            <Button size="lg" asChild>
              <Link to="/availability-checker">Check Your Site's Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Unique needs */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Context</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Construction sites have unique connectivity needs
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Site managers need broadband for: Live CCTV monitoring (site security, safety inspection), Site management software (schedules, permits, inventory), Staff communications (WhatsApp, radio, video updates), Timesheets and check-ins (mobile apps, cloud logging), Equipment tracking (GPS, IoT sensors on machinery).
              </p>
              <p>
                But traditional ISP solutions don't work: Fibre takes 8-12 weeks to install. Most sites are finished before fibre arrives. Leased line has similar timeline, plus setup cost is £5,000-20,000. Waste of money for 6-month projects. Mobile hotspot is unreliable 2-5Mbps with constant dropouts, expensive when you need genuine broadband. Local WISP coverage ends at tower radius. If your site is outside range, you're out of luck.
              </p>
              <p>
                What you need: Deployment in days, reliability for 6 months, then move. Affordable per site.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* McGee Case Study */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Case Study</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              McGee Construction: From Hotspot Chaos to Professional Connectivity
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">The Challenge</h3>
                <p className="text-muted-foreground">McGee Construction operates across London and South East building sites. Typical project: 3-6 months duration, 10-50 person crew, multiple subcontractors.</p>
                <p className="text-muted-foreground mt-2">They managed site CCTV via expensive mobile hotspots (£60/month, 2Mbps average). CCTV feeds were unreliable. Site manager couldn't check cameras remotely without frustration. One incident where CCTV dropped at critical moment, no footage recorded.</p>
                <p className="text-muted-foreground mt-2">Additionally, timesheets were paper-based (inefficient), communication was ad-hoc (WhatsApp groups), and equipment tracking was manual.</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Previous Solutions Tried</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Switched ISPs three times (all bad in rural areas)</li>
                  <li>Hired local WISPs when available (coverage too limited, speeds 5-10Mbps)</li>
                  <li>Built costlier into project budget (written off as site overhead)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Solution & Implementation</h3>
                <p className="text-muted-foreground mb-3"><strong>The need:</strong> Professional broadband that deploys per-site, works during the project, leaves when site finishes.</p>
                <p className="text-muted-foreground mb-3"><strong>Solution:</strong> Cellular SD-WAN. Single router per site, 4-hour install, 150Mbps+ speeds, £135/month.</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Initial 2024 pilot: One site (April-June, 3 months)</li>
                  <li>Site manager gets real-time CCTV access</li>
                  <li>Crew uses cloud timesheets (instant check-ins)</li>
                  <li>Equipment tracking app syncs real-time</li>
                  <li>Backup: If 4G is weak, add Starlink (hybrid SD-WAN, costs extra but guarantees uptime)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Results</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>150Mbps+ at 9 different sites over 12 months</li>
                  <li>£135/month per site × 12 sites = £1,620/year per site</li>
                  <li>Previous hotspot cost: £60/month × 12 months = £720/site, but quality was worse</li>
                  <li>Real ROI: Eliminated 2-3 hours/week of unreliable connectivity troubleshooting</li>
                  <li>CCTV incidents dropped to zero (better monitoring, faster response)</li>
                  <li>Site manager reputation improves (effective on-site leadership, fewer excuses)</li>
                </ul>
                <p className="text-muted-foreground mt-4"><strong>Scaling:</strong> McGee now deploys cellular SD-WAN on every site > 1 month duration. It's standard practice.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Why it works */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Analysis</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              Why construction sites are perfect for cellular SD-WAN
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Temporary",
                  description: "3-6 months is ideal. Fibre and leased line are overkill for temporary. Cellular SD-WAN is perfect for that duration.",
                },
                {
                  title: "Mobile",
                  description: "Sites move. Equipment moves. The router moves. When this site finishes, the same router goes to the next site (different region, might be new 4G provider, but set-up is same).",
                },
                {
                  title: "Cost-Effective",
                  description: "£135/month × 6 = £810 for the entire project. That's less than inefficient hotspot costs plus the hidden cost of poor connectivity (delays, rework, safety incidents).",
                },
                {
                  title: "Deployment Speed",
                  description: "14 days from enquiry to live (more if weather delays site visit, but not like leased line).",
                },
                {
                  title: "No Setup Waste",
                  description: "Leased line setup takes 8 weeks. Your project finishes in month 6. The £10,000 setup cost was entirely wasted on decommissioning the line.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Deployment timeline */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Timeline</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Deployment timeline for a construction site
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {deploymentSteps.map((step, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground">{step.week}: {step.title}</h3>
                    <ul className="mt-3 space-y-1">
                      {step.items.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground mb-3">Total Cost</h3>
            <p className="text-muted-foreground text-sm">Install labour (engineer, 4 hours) + monthly service (£135) + any upgrades (Starlink add-on, second SIM, WiFi mesh). No setup fees, no equipment purchase, no decommissioning penalties.</p>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Coverage & WiFi */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Practical</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              WiFi on construction sites (staff access)
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Most sites have an office hut or welfare unit where staff gather. Spreading WiFi there means staff can use personal devices (phones, tablets) on-site without burning through personal data.
              </p>
              <p>
                <strong>WiFi add-on:</strong> Integra access point (£200-400) + professional install (£500), Monthly monitoring (£20-50), Password-protected, branded SSID. Staff login: "Site_WiFi" → password → connect. Bandwidth-limited so crews can't stream Netflix (site priority), but enough for messaging, timesheets, incident reporting apps.
              </p>
              <p>
                <strong>Cost per site:</strong> ~£1,000 upfront, £30/month ongoing. <strong>Benefit:</strong> Better staff experience, faster incident reporting, fewer complaints about connectivity.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Critical Use Case</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              CCTV monitoring on construction sites (the real use case)
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                This is where broadband really matters for sites. Standard CCTV setups: 4-8 cameras across the site (entrance, perimeter, equipment yard, office hut). Streaming requirements: Live viewing (2-5Mbps per camera stream), Recording/storage (10-50Mbps aggregate, all cameras uploading simultaneously), Upload to cloud (30-100Mbps depending on resolution and retention).
              </p>
              <p>
                With poor hotspot (2Mbps), you can view one camera live, that's it. Recording doesn't happen (too slow). With Integra SD-WAN (150Mbps), all cameras record in HD, upload to cloud simultaneously, and site manager watches live from office without lag.
              </p>
              <p>
                <strong>Incident response:</strong> If something happens on-site, manager sees it in real-time, can alert on-site staff or contact authorities within seconds. With poor hotspot, by the time footage uploads, the incident is done.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Safety & compliance */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Compliance</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Safety & compliance (why broadband matters)
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Construction sites have legal health & safety obligations:
              </p>
              <ul>
                <li><strong>Incident reporting:</strong> Any accident must be reported to HSE within specified timeframe. Upload incident photos/video requires broadband.</li>
                <li><strong>Live monitoring:</strong> Safety officer can monitor high-risk areas (cranes, excavators) in real-time. Poor connectivity = missed hazards.</li>
                <li><strong>Visitor check-in:</strong> Log all site visitors (inductions, liability). Cloud-based system requires live connectivity.</li>
                <li><strong>Equipment inspection logs:</strong> Daily equipment checks (cranes, lifts) require real-time photo/data upload.</li>
              </ul>
              <p>
                All of these depend on reliable broadband. A broadband outage isn't just "inconvenience;" it's a compliance risk.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">FAQs</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground font-normal">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-surface-dark-foreground font-medium hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-surface-dark-muted leading-relaxed pb-5 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* CTA */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Ready to plan your site broadband?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team can assess your site location and recommend the fastest, most cost-effective deployment option.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/availability-checker">Plan Your Site Broadband</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </PageLayout>
  );
};

export default ConstructionSiteBroadband;
