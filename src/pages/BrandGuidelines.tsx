import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import StatusChip from "@/components/shared/StatusChip";
import EyebrowLabel from "@/components/shared/EyebrowLabel";
import SEO from "@/components/shared/SEO";
import integraLogoWhite from "@/assets/integra-logo-white.png";
import integraLogoSvg from "@/assets/integra-logo.svg";
import { Printer, Check, X, Download, FileType, Palette, Type, Lock, Copy } from "lucide-react";
import { toast } from "sonner";


const BRAND_ACCESS_KEY = "integra-brand-access";
const ACCESS_PASSWORD = "M1llionaire2027";

const BrandGuidelines = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already authenticated in this session
    const hasAccess = sessionStorage.getItem(BRAND_ACCESS_KEY);
    if (hasAccess === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      sessionStorage.setItem(BRAND_ACCESS_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const straplines = [
    "Connectivity shouldn't depend on your postcode.",
    "Built for the locations others won't reach.",
    "When the fibre stops, we start.",
    "Business-grade broadband. Anywhere.",
  ];

  // Password Gate
  if (!isAuthenticated) {
    return (
      <>
        <SEO
          title="Brand Guidelines"
          description="Integra Networks brand guidelines and visual identity documentation."
          url="/brand-guidelines"
          noIndex
        />
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
          <div className="w-full max-w-sm">
            <div className="text-center mb-10">
              <img src={integraLogoWhite} alt="Integra Networks" className="h-8 mx-auto mb-8" />
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <h1 className="text-heading-2 mb-2">Brand Guidelines</h1>
              <p className="text-sm text-muted-foreground">
                This document is confidential. Enter the access password to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="bg-card border-border text-center"
                  autoFocus
                />
                {error && (
                  <p className="text-xs text-status-critical mt-2 text-center">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Access Guidelines
              </Button>
            </form>

            <p className="text-xs text-muted-foreground/50 text-center mt-8">
              Contact your team lead if you need access.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Brand Guidelines"
        description="Integra Networks brand guidelines and visual identity documentation."
        url="/brand-guidelines"
        noIndex
      />
      <div className="brand-guidelines min-h-screen bg-background print:bg-white">
      {/* Print Button - Fixed position, hidden in print */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2 bg-card/80 backdrop-blur-sm">
          <Printer className="h-4 w-4" />
          Print to PDF
        </Button>
      </div>

      {/* Cover Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 print:min-h-0 print:py-32 print:page-break-after">
        <img src={integraLogoWhite} alt="Integra Networks" className="h-9 mb-16 print:brightness-0" />
        <h1 className="text-display text-center mb-6 print:text-foreground tracking-tight">
          Brand Guidelines
        </h1>
        <p className="text-lg text-muted-foreground mb-4 print:text-gray-600 tracking-wide">
          Brand, Messaging, and Design System Reference
        </p>
        <div className="w-16 h-px bg-border my-12 print:bg-gray-300" />
        <div className="text-center space-y-1">
          <p className="text-xs text-muted-foreground/60 print:text-gray-400 uppercase tracking-widest">
            Internal use – confidential
          </p>
          <p className="text-xs text-muted-foreground/60 print:text-gray-400">
            Version 1.0 · March 2026
          </p>
        </div>
      </section>

      {/* Section 1: Brand Essence & Messaging */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="01" title="Brand Essence & Messaging" />

        <div className="space-y-12 mt-12">
          <MessagingBlock
            label="Primary Brand Statement"
            quote="Integra Networks delivers reliable, high-speed connectivity to the locations that need it most."
          />

          <MessagingBlock
            label="Product Positioning"
            quote="Integra SD-WAN and Integra Bridge bring business-grade broadband to rural and underserved areas across the UK."
          />

          <div className="space-y-4">
            <p className="text-xs text-primary uppercase tracking-widest font-medium">
              Short Description
            </p>
            <p className="text-foreground leading-relaxed print:text-gray-800">
              Integra Networks is a UK connectivity provider specialising in rural broadband, SD-WAN solutions, and business-grade internet for locations where traditional infrastructure falls short. From Starlink installations to leased lines, we design and deliver tailored connectivity solutions.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-4 font-medium">
              Long Boilerplate
            </p>
            <div className="space-y-4 text-foreground leading-relaxed print:text-gray-800 border-l-2 border-border pl-6">
              <p>
                Integra Networks is a UK-based connectivity provider focused on delivering reliable, high-speed internet to rural, remote, and underserved locations where traditional broadband infrastructure is limited or unavailable.
              </p>
              <p>
                Through its core products — Integra SD-WAN and Integra Bridge — the company bonds multiple internet connections into a single, resilient link, providing business-grade performance regardless of location. Combined with professional Starlink installation, managed SIM services, and traditional leased lines, Integra offers a complete connectivity toolkit.
              </p>
              <p>
                Integra Networks serves a diverse customer base including farms, business parks, construction sites, events, hospitality venues, and rural businesses, delivering solutions that are engineered, installed, and supported by its own team of field engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do / Don't Do */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="02" title="What We Do / What We Don't Do" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-status-ok/20 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-status-ok" />
              </div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-status-ok">We Do</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Deliver high-speed broadband to rural and underserved areas",
                "Design and install bespoke connectivity solutions",
                "Bond multiple connections for resilience and speed",
                "Provide professional Starlink and SD-WAN installations",
                "Support customers with UK-based field engineers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground print:text-gray-600 text-sm leading-relaxed">
                  <span className="h-1 w-1 rounded-full bg-status-ok mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-status-critical/20 flex items-center justify-center">
                <X className="h-3.5 w-3.5 text-status-critical" />
              </div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-status-critical">We Do Not</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Sell off-the-shelf consumer broadband packages",
                "Promise speeds we can't deliver",
                "Operate as a reseller without engineering capability",
                "Limit ourselves to a single technology or carrier",
                "Use jargon-heavy or misleading marketing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground print:text-gray-600 text-sm leading-relaxed">
                  <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Category & Positioning */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="03" title="Category & Positioning" />

        <div className="space-y-12 mt-12">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Primary Category</p>
            <div className="inline-block border border-primary/30 rounded px-6 py-3 bg-primary/5">
              <span className="text-lg font-medium text-primary tracking-tight">Rural & Business Connectivity</span>
            </div>
          </div>

          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Secondary (only if required)</p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm font-normal">SD-WAN Solutions</Badge>
              <Badge variant="secondary" className="text-sm font-normal">Starlink Installation</Badge>
              <Badge variant="secondary" className="text-sm font-normal">Business Broadband</Badge>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-4 font-medium">Categories We Do Not Lead With</p>
            <div className="flex flex-wrap gap-3">
              {["Consumer ISP", "Mobile Phone Provider", "IT Support Company", "Web Hosting Provider"].map((cat) => (
                <span key={cat} className="text-sm text-muted-foreground/60">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tone & Language */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="04" title="Tone & Language Guardrails" />

        <div className="mt-12 space-y-10">
          <div className="bg-card/50 border border-border rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Tone</p>
            <p className="text-foreground print:text-gray-800">
              Approachable · Practical · Knowledgeable · Honest · Confident but not corporate
            </p>
          </div>

          <blockquote className="border-l-2 border-primary pl-6 py-2">
            <p className="text-muted-foreground italic print:text-gray-600">
              "If a farmer wouldn't trust it, we shouldn't say it."
            </p>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs text-status-ok uppercase tracking-widest mb-4 font-medium">Words We Use</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "reliable",
                  "resilient",
                  "rural broadband",
                  "connectivity",
                  "bonded",
                  "business-grade",
                ].map((word) => (
                  <span key={word} className="text-sm text-muted-foreground border border-status-ok/20 px-3 py-1.5 rounded bg-status-ok/5">
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-status-critical uppercase tracking-widest mb-4 font-medium">Words We Avoid</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "unlimited*",
                  "blazing fast",
                  "revolutionary",
                  "game-changing",
                  "superfast",
                ].map((word) => (
                  <span key={word} className="text-sm text-muted-foreground/50 border border-status-critical/20 px-3 py-1.5 rounded line-through">
                    {word}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 mt-4 print:text-gray-400">
                * "unlimited" only if contractually accurate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Straplines */}
      <section className="py-24 px-8 max-w-4xl mx-auto print:py-16 print:page-break-before">
        <div className="max-w-3xl mx-auto">
          <SectionHeader number="05" title="Straplines & Short-Form Messaging" subtitle="Examples" />

          <p className="text-sm text-muted-foreground/70 mt-6 mb-12 print:text-gray-500">
            These are approved examples of how the Integra brand speaks in short-form contexts such as social media, image overlays, and presentation headers.
          </p>
        </div>

        <div className="space-y-4">
          {straplines.map((strapline, i) => {
            const colorClasses = [
              { bg: "bg-primary", label: "bg-primary", isLight: false },
              { bg: "bg-card", label: "bg-card", isLight: false },
              { bg: "bg-foreground", label: "bg-foreground", isLight: true },
              { bg: "bg-muted", label: "bg-muted", isLight: false },
            ];
            const config = colorClasses[i];
            const isLight = config.isLight;

            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded min-h-[180px] sm:min-h-[220px] flex items-center ${config.bg} border border-border/50 print:bg-gray-100 print:border print:border-gray-200`}
              >
                {/* Inner sheen overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isLight
                      ? 'radial-gradient(ellipse at 20% 20%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 40%, transparent 70%)'
                      : i === 0
                        ? 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)'
                        : 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)'
                  }}
                />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: isLight
                    ? `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`
                    : `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />

                {/* Content */}
                <div className="relative z-10 px-8 sm:px-12 py-10 max-w-2xl">
                  <p className={`text-xl sm:text-2xl md:text-3xl font-medium leading-snug tracking-tight print:text-gray-800 ${isLight ? 'text-background' : 'text-foreground'}`}>
                    {strapline}
                  </p>
                </div>

                {/* Colour class label for developer reference */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${isLight ? 'text-background/50 bg-background/10' : 'text-foreground/50 bg-background/20 backdrop-blur-sm'}`}>
                    .{config.label}
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-6 right-8">
                  <img src={integraLogoWhite} alt="Integra Networks" className={`h-7 sm:h-8 print:hidden ${isLight ? 'invert' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: Directory & Listing Information */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="06" title="Directory & Listing Information" />

        <p className="text-sm text-muted-foreground/70 mt-6 mb-12 print:text-gray-500">
          Approved information for use in directories, listings, partner portals, and official registrations.
        </p>

        <div className="space-y-10">
          {/* Company Details */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Company Details</p>
            <div className="bg-card border border-border/50 rounded-lg divide-y divide-border/50 print:bg-gray-50 print:border-gray-200">
              <DirectoryItem label="Legal Entity" value="Integra Networks Limited" copyable />
              <DirectoryItem label="Trading Name" value="Integra Networks" copyable />
              <DirectoryItem label="Company Number" value="13467217" copyable />
              <DirectoryItem label="Incorporated" value="June 2021" />
              <DirectoryItem label="Company Size" value="1-10 employees" copyable />
              <DirectoryItem label="Geographic Coverage" value="United Kingdom" copyable />
              <DirectoryItem label="Headquarters" value="London, UK" copyable />
              <DirectoryItem label="VAT Number" value="385 9249 43" copyable />
              <DirectoryItem label="ICO Registration" value="Registered" copyable />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Contact Information</p>
            <div className="bg-card border border-border/50 rounded-lg divide-y divide-border/50 print:bg-gray-50 print:border-gray-200">
              <DirectoryItem label="General Enquiries" value="connect@integra-networks.co.uk" copyable />
              <DirectoryItem label="Phone" value="0203 388 7111" copyable />
            </div>
          </div>

          {/* Addresses */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Registered Address</p>
            <div className="bg-card border border-border/50 rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
              <p className="text-sm text-foreground leading-relaxed print:text-gray-800">
                Integra Networks Limited<br />
                86–90 Paul Street<br />
                London, EC2A 4NE<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* URLs */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Official URLs</p>
            <div className="bg-card border border-border/50 rounded-lg divide-y divide-border/50 print:bg-gray-50 print:border-gray-200">
              <DirectoryItem label="Website" value="https://integra-networks.co.uk" copyable />
              <DirectoryItem label="Availability Checker" value="https://integra-networks.co.uk/check" copyable />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Social Media</p>
            <div className="bg-card border border-border/50 rounded-lg divide-y divide-border/50 print:bg-gray-50 print:border-gray-200">
              <DirectoryItem label="LinkedIn" value="https://linkedin.com/company/integra-networks" copyable />
              <DirectoryItem label="YouTube" value="https://youtube.com/@IntegraNetworks" copyable />
              <DirectoryItem label="Instagram" value="@integra_networks" copyable />
              <DirectoryItem label="Facebook" value="https://facebook.com/IntegraNetworksUK" copyable />
            </div>
          </div>

          {/* Business Categories */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Business Categories</p>
            <p className="text-xs text-muted-foreground/60 mb-4 print:text-gray-400">
              Use these when selecting categories in directories and listings.
            </p>
            <div className="space-y-4">
              <div className="bg-card border border-border/50 rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
                <p className="text-xs text-primary uppercase tracking-widest mb-2 font-medium">Primary</p>
                <p className="text-sm font-medium text-foreground">Rural & Business Connectivity Provider</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
                <p className="text-xs text-primary uppercase tracking-widest mb-2 font-medium">Secondary</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-foreground">SD-WAN Solutions</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-foreground">Starlink Installation</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-foreground">Leased Lines</span>
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
                <p className="text-xs text-primary uppercase tracking-widest mb-2 font-medium">Tertiary</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-foreground">Business Wi-Fi</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-foreground">CCTV & Infrastructure</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-foreground">Managed SIM Services</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-foreground">Event Connectivity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Directory Keywords</p>
            <p className="text-xs text-muted-foreground/60 mb-3 print:text-gray-400">
              Use these keywords for SEO, directory tags, and category selection.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "rural broadband",
                "business broadband",
                "SD-WAN",
                "Starlink installation",
                "leased lines",
                "bonded internet",
                "construction Wi-Fi",
                "event connectivity",
                "managed SIM",
              ].map((keyword) => (
                <span key={keyword} className="text-sm text-muted-foreground border border-border px-3 py-1.5 rounded bg-muted/30 print:bg-gray-100">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Boilerplates */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Boilerplate Copy</p>
            <p className="text-xs text-muted-foreground/60 mb-4 print:text-gray-400">
              Pre-approved descriptions for directories and listings. Click to copy.
            </p>
            <div className="space-y-4">
              <BoilerplateBlock
                label="Ultra Short (15 words)"
                text="Integra Networks delivers reliable, high-speed broadband to rural and underserved locations across the UK."
              />
              <BoilerplateBlock
                label="Short (30 words)"
                text="Integra Networks is a UK connectivity provider specialising in rural broadband, SD-WAN solutions, and business-grade internet. We design and install tailored connectivity for locations where traditional infrastructure falls short."
              />
              <BoilerplateBlock
                label="Medium (50 words)"
                text="Integra Networks is a UK-based connectivity provider delivering reliable, high-speed internet to rural, remote, and underserved locations. Through Integra SD-WAN, Integra Bridge, professional Starlink installation, and managed SIM services, we provide business-grade performance regardless of location — engineered, installed, and supported by our own team of field engineers."
              />
              <BoilerplateBlock
                label="Full (100 words)"
                text="Integra Networks is a UK-based connectivity provider focused on delivering reliable, high-speed internet to rural, remote, and underserved locations where traditional broadband infrastructure is limited or unavailable. Through its core products — Integra SD-WAN and Integra Bridge — the company bonds multiple internet connections into a single, resilient link, providing business-grade performance regardless of location. Combined with professional Starlink installation, managed SIM services, leased lines, and business Wi-Fi, Integra offers a complete connectivity toolkit. Serving farms, business parks, construction sites, events, and rural businesses, every solution is engineered, installed, and supported by its own UK-based team."
              />
            </div>
          </div>

          {/* Accreditations */}
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Accreditations & Certifications</p>
            <div className="bg-card border border-border/50 rounded-lg divide-y divide-border/50 print:bg-gray-50 print:border-gray-200">
              <DirectoryItem label="ICO Registered" value="Yes" />
              <DirectoryItem label="UK GDPR Compliant" value="Yes" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Typography */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="07" title="Design System — Typography" />

        <div className="mt-12 space-y-8">
          <div className="bg-card/30 border border-border rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Primary Font</p>
            <p className="text-2xl font-medium mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter</p>
            <p className="text-sm text-muted-foreground print:text-gray-500">Google Fonts · Weights: 300, 400, 500, 600, 700</p>
            <p className="text-xs text-muted-foreground/60 mt-3 print:text-gray-400">
              <strong>Important:</strong> The default weight for display and heading text is <strong>400 (regular)</strong> or <strong>500 (medium)</strong>.
              Avoid using bold (700) for headlines—Inter is designed to appear confident at lighter weights, paired with tight letter-spacing.
            </p>
          </div>

          {/* Type Scale */}
          <div className="space-y-0">
            <TypeScaleItem
              label="Display"
              example="Display"
              className="text-display"
              specs="4.5rem (72px) · Line Height 1.05 · Letter Spacing -0.03em · Weight 400"
              tailwindClass="text-display"
            />
            <TypeScaleItem
              label="Display Small"
              example="Display Small"
              className="text-display-sm"
              specs="3rem (48px) · Line Height 1.1 · Letter Spacing -0.02em · Weight 400"
              tailwindClass="text-display-sm"
            />
            <TypeScaleItem
              label="Heading 1"
              example="Heading 1"
              className="text-heading-1"
              specs="2.25rem (36px) · Line Height 1.15 · Letter Spacing -0.02em · Weight 400"
              tailwindClass="text-heading-1"
            />
            <TypeScaleItem
              label="Heading 2"
              example="Heading 2"
              className="text-heading-2"
              specs="1.75rem (28px) · Line Height 1.2 · Letter Spacing -0.01em · Weight 500"
              tailwindClass="text-heading-2"
            />
            <TypeScaleItem
              label="Heading 3"
              example="Heading 3"
              className="text-heading-3"
              specs="1.25rem (20px) · Line Height 1.3 · Letter Spacing -0.01em · Weight 500"
              tailwindClass="text-heading-3"
            />
            <TypeScaleItem
              label="Eyebrow"
              example={<EyebrowLabel>Eyebrow Label</EyebrowLabel>}
              specs="0.75rem (12px) · Line Height 1.5 · Letter Spacing 0.1em · Weight 500 · Uppercase"
              tailwindClass="text-eyebrow uppercase"
            />
            <TypeScaleItem
              label="Body"
              example="Body Text"
              className="text-base"
              specs="1rem (16px) · Line Height 1.5 · Weight 400"
              tailwindClass="text-base"
            />
            <TypeScaleItem
              label="Small"
              example="Small Text"
              className="text-sm"
              specs="0.875rem (14px) · Line Height 1.5 · Weight 400"
              tailwindClass="text-sm"
              isLast
            />
          </div>

          {/* Typography Usage Guidelines */}
          <div className="bg-card/50 border border-border/50 rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Usage Guidelines</p>
            <div className="space-y-4 text-sm">
              <div className="border-b border-border/30 pb-4">
                <p className="font-medium text-foreground mb-1">Hero & Landing Pages</p>
                <p className="text-muted-foreground">Use <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-display</code> or <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-display-sm</code> for primary headlines. Keep weight at 400.</p>
              </div>
              <div className="border-b border-border/30 pb-4">
                <p className="font-medium text-foreground mb-1">Legal & Policy Pages</p>
                <p className="text-muted-foreground">Use <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-display-sm</code> for page title, <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-heading-2</code> for section headings, and <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-heading-3</code> for subheadings.</p>
              </div>
              <div className="border-b border-border/30 pb-4">
                <p className="font-medium text-foreground mb-1">Feature & Product Pages</p>
                <p className="text-muted-foreground">Use <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-heading-1</code> for section titles and <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-heading-3</code> for feature cards.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Blog & Insights</p>
                <p className="text-muted-foreground">Use <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-display-sm</code> for article titles, <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">text-heading-2</code> for in-article sections.</p>
              </div>
            </div>
          </div>

          {/* Anti-patterns */}
          <div className="bg-status-critical/5 border border-status-critical/20 rounded-lg p-6 print:bg-red-50 print:border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-status-critical/20 flex items-center justify-center">
                <X className="h-3 w-3 text-status-critical" />
              </div>
              <p className="text-xs text-status-critical uppercase tracking-widest font-medium">Typography Anti-patterns</p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                <span>Never use <code className="text-status-critical bg-status-critical/10 px-1.5 py-0.5 rounded text-xs line-through">font-bold</code> on display or heading text—it makes Inter appear heavy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                <span>Never use <code className="text-status-critical bg-status-critical/10 px-1.5 py-0.5 rounded text-xs line-through">text-4xl font-medium</code>—use the semantic classes instead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                <span>Never add <code className="text-status-critical bg-status-critical/10 px-1.5 py-0.5 rounded text-xs line-through">prose</code> or <code className="text-status-critical bg-status-critical/10 px-1.5 py-0.5 rounded text-xs line-through">prose-invert</code> classes—they override our type scale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                <span>Never mix arbitrary font sizes (e.g. <code className="text-status-critical bg-status-critical/10 px-1.5 py-0.5 rounded text-xs line-through">text-[42px]</code>)—use the defined scale</span>
              </li>
            </ul>
          </div>

          {/* Quick Reference for AI/Developers */}
          <div className="bg-muted/30 border border-border/50 rounded-lg p-6 print:bg-gray-100 print:border-gray-200">
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Quick Reference — Copy-Paste Classes</p>
            <div className="font-mono text-xs space-y-2 text-muted-foreground">
              <p><span className="text-foreground">Page Title (Hero):</span> className="text-display text-foreground"</p>
              <p><span className="text-foreground">Page Title (Interior):</span> className="text-display-sm text-foreground"</p>
              <p><span className="text-foreground">Section Heading:</span> className="text-heading-2 text-foreground"</p>
              <p><span className="text-foreground">Subsection:</span> className="text-heading-3 text-foreground"</p>
              <p><span className="text-foreground">Eyebrow Label:</span> className="text-eyebrow uppercase text-primary"</p>
              <p><span className="text-foreground">Body Text:</span> className="text-base text-muted-foreground leading-relaxed"</p>
              <p><span className="text-foreground">Small/Meta:</span> className="text-sm text-muted-foreground"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Colours */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="08" title="Design System — Colour Palette" />

        <div className="space-y-12 mt-12">
          <ColorGroup title="Core Brand">
            <ColorSwatch name="Primary Blue" hex="#0061FF" hsl="216, 100%, 50%" color="bg-primary" />
            <ColorSwatch name="Background" hex="#FFFFFF" hsl="0, 0%, 100%" color="bg-background" border textDark />
            <ColorSwatch name="Foreground" hex="#0F172A" hsl="222, 47%, 11%" color="bg-foreground" border darkSurface />
          </ColorGroup>

          <ColorGroup title="Surface Colours">
            <ColorSwatch name="Card" hex="#FFFFFF" hsl="0, 0%, 100%" color="bg-card" border textDark />
            <ColorSwatch name="Background Alt" hex="#F5F7FA" hsl="210, 20%, 97%" color="bg-background-alt" border textDark />
            <ColorSwatch name="Secondary" hex="#F1F3F5" hsl="210, 20%, 96%" color="bg-secondary" border textDark />
            <ColorSwatch name="Muted" hex="#E8ECEF" hsl="210, 15%, 93%" color="bg-muted" border textDark />
            <ColorSwatch name="Surface Dark" hex="#0F172A" hsl="222, 47%, 11%" color="bg-surface-dark" border darkSurface />
          </ColorGroup>

          <ColorGroup title="Status Colours">
            <ColorSwatch name="OK / Success" hex="#22c55e" hsl="142, 76%, 42%" color="bg-status-ok" />
            <ColorSwatch name="Warning" hex="#f59e0b" hsl="38, 92%, 55%" color="bg-status-warning" />
            <ColorSwatch name="Critical / Error" hex="#ef4444" hsl="0, 72%, 55%" color="bg-status-critical" />
          </ColorGroup>

          {/* Surface Effects Note */}
          <div className="bg-card/50 border border-border/50 rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <p className="text-xs text-primary uppercase tracking-widest mb-3 font-medium">Surface Effects</p>
            <p className="text-sm text-muted-foreground leading-relaxed print:text-gray-600 mb-4">
              All colour tokens above are <strong className="text-foreground">solid colours</strong>. The site uses a <strong className="text-foreground">light theme</strong> as the default surface, with a dark navy <code className="text-xs">surface-dark</code> token reserved for hero bands, footers, and contrast sections. The inner sheen visible on the strapline banners (Section 05) is an <strong className="text-foreground">optional overlay effect</strong>, not part of the base tokens.
            </p>
            <div className="bg-background/50 border border-border/30 rounded p-4 font-mono text-xs text-muted-foreground/80 space-y-3">
              <div>
                <p className="mb-1 text-muted-foreground/60">/* Standard sheen — for primary / dark surfaces */</p>
                <p>radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)</p>
              </div>
              <div>
                <p className="mb-1 text-muted-foreground/60">/* Subtle sheen — for light surfaces */</p>
                <p>radial-gradient(ellipse at 20% 20%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 40%, transparent 70%)</p>
              </div>
            </div>
          </div>

          <ColorGroup title="Borders">
            <ColorSwatch name="Default Border" hex="#DCDFE4" hsl="220, 13%, 88%" color="bg-border" border textDark />
            <ColorSwatch name="Input Border" hex="#E2E5EA" hsl="220, 13%, 91%" color="bg-input" border textDark />
          </ColorGroup>
        </div>
      </section>

      {/* Section 9: Components */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="09" title="Design System — Components" />

        <div className="space-y-16 mt-12">
          <ComponentGroup title="Buttons">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </ComponentGroup>

          <ComponentGroup title="Cards">
            <Card className="max-w-sm">
              <CardContent className="p-6">
                <h4 className="text-heading-3 mb-2">Card Title</h4>
                <p className="text-sm text-muted-foreground">Card content with supporting text that describes the item in detail.</p>
              </CardContent>
            </Card>
          </ComponentGroup>

          <ComponentGroup title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </ComponentGroup>

          <ComponentGroup title="Status Chips">
            <div className="flex flex-wrap gap-4">
              <StatusChip status="ok" label="Online" />
              <StatusChip status="warning" label="Warning" />
              <StatusChip status="critical" label="Critical" />
            </div>
          </ComponentGroup>

          <ComponentGroup title="Eyebrow Labels">
            <EyebrowLabel>Feature Category</EyebrowLabel>
          </ComponentGroup>
        </div>
      </section>

      {/* Section 10: Layout & Spacing */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="10" title="Layout & Spacing" />

        <div className="space-y-12 mt-12">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Border Radius Scale</p>
            <div className="flex flex-wrap gap-8 items-end">
              {[
                { label: "sm", value: "4px", className: "rounded-sm" },
                { label: "md", value: "6px", className: "rounded-md" },
                { label: "lg", value: "8px", className: "rounded-lg" },
                { label: "xl", value: "16px", className: "rounded-xl" },
                { label: "2xl", value: "24px", className: "rounded-2xl" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className={`w-14 h-14 bg-primary ${item.className} mb-2`} />
                  <p className="text-xs text-muted-foreground">{item.label} · {item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Container</p>
            <div className="space-y-2 text-sm text-muted-foreground print:text-gray-600">
              <p><span className="text-foreground print:text-gray-800 font-medium">Max Width:</span> 1400px (2xl breakpoint)</p>
              <p><span className="text-foreground print:text-gray-800 font-medium">Padding:</span> 2rem (32px)</p>
              <p><span className="text-foreground print:text-gray-800 font-medium">Centered:</span> Yes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Effects & Motion */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="11" title="Effects & Motion" />

        <div className="space-y-10 mt-12">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Animations</p>
            <div className="space-y-3 text-sm text-muted-foreground print:text-gray-600">
              <p><span className="text-foreground print:text-gray-800 font-medium">Fade In:</span> 0.5s ease-out · Y offset 10px</p>
              <p><span className="text-foreground print:text-gray-800 font-medium">Fade Up:</span> 0.6s ease-out · Y offset 20px</p>
              <p><span className="text-foreground print:text-gray-800 font-medium">Accordion:</span> 0.2s ease-out</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Hover States</p>
            <p className="text-sm text-muted-foreground print:text-gray-600">
              All interactive elements use <span className="text-foreground print:text-gray-800 font-medium">300ms transitions</span> for smooth feedback.
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Glass Effect</p>
            <div className="glass-card p-6 rounded-lg inline-block">
              <p className="text-sm text-foreground">Glass card with 4% navy overlay (light theme)</p>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3 print:text-gray-400">
              background: hsl(var(--glass) / 0.04) · --glass: 222 47% 11%
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Enhanced Primary Gradient</p>
            <p className="text-sm text-muted-foreground print:text-gray-600 mb-4">
              Used for primary CTA sections. Creates depth through <span className="text-foreground print:text-gray-800 font-medium">three layered gradients</span> plus a <span className="text-foreground print:text-gray-800 font-medium">diagonal sheen overlay</span>.
            </p>

            {/* Live preview */}
            <div className="relative overflow-hidden rounded-lg h-32 mb-4 bg-primary-enhanced flex items-center justify-center">
              <p className="relative z-10 text-white/90 text-sm font-medium">Live preview of .bg-primary-enhanced</p>
            </div>

            <div className="bg-background/50 border border-border/30 rounded p-4 font-mono text-xs text-muted-foreground/80 space-y-4">
              <div>
                <p className="mb-2 text-muted-foreground/60">/* Layered background */</p>
                <p className="leading-relaxed">background:</p>
                <p className="pl-4 leading-relaxed">/* Top-left radial glow */</p>
                <p className="pl-4 leading-relaxed">radial-gradient(ellipse 80% 60% at 10% 0%,</p>
                <p className="pl-8 leading-relaxed">hsl(210 100% 60% / 0.4) 0%, transparent 50%),</p>
                <p className="pl-4 leading-relaxed">/* Bottom-right radial glow */</p>
                <p className="pl-4 leading-relaxed">radial-gradient(ellipse 60% 50% at 90% 100%,</p>
                <p className="pl-8 leading-relaxed">hsl(220 100% 40% / 0.3) 0%, transparent 50%),</p>
                <p className="pl-4 leading-relaxed">/* Base diagonal gradient */</p>
                <p className="pl-4 leading-relaxed">linear-gradient(135deg,</p>
                <p className="pl-8 leading-relaxed">hsl(216 100% 50%) 0%,</p>
                <p className="pl-8 leading-relaxed">hsl(216 100% 48%) 40%,</p>
                <p className="pl-8 leading-relaxed">hsl(220 100% 45%) 100%);</p>
              </div>
              <div>
                <p className="mb-2 text-muted-foreground/60">/* Sheen overlay (::after pseudo-element) */</p>
                <p className="leading-relaxed">linear-gradient(135deg,</p>
                <p className="pl-4 leading-relaxed">hsl(0 0% 100% / 0.12) 0%,</p>
                <p className="pl-4 leading-relaxed">hsl(0 0% 100% / 0.04) 40%,</p>
                <p className="pl-4 leading-relaxed">transparent 60%);</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/60 mt-4 print:text-gray-400">
              Apply with: <span className="text-primary font-medium">.bg-primary-enhanced</span> — requires <span className="text-foreground/70">position: relative</span> and <span className="text-foreground/70">overflow: hidden</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 12: Logo Usage */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="12" title="Logo Usage" />

        <div className="space-y-12 mt-12">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Primary Logos</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border/50 rounded-lg p-10 flex flex-col items-center print:border-gray-200 print:bg-gray-50">
                <img src={integraLogoSvg} alt="Integra Networks (Dark)" className="h-8 mb-4" />
                <p className="text-xs text-muted-foreground print:text-gray-500">Integra Networks (Dark / Light BG) — primary</p>
              </div>
              <div className="bg-surface-dark border border-border/50 rounded-lg p-10 flex flex-col items-center print:border-gray-200 print:bg-gray-50">
                <img src={integraLogoWhite} alt="Integra Networks (White)" className="h-8 mb-4" />
                <p className="text-xs text-surface-dark-muted print:text-gray-500">Integra Networks (White / Dark BG)</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Clear Space</p>
            <p className="text-sm text-muted-foreground print:text-gray-600">
              Maintain minimum clear space equal to the height of the "I" character around all sides of the logo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-status-ok/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-status-ok" />
                </div>
                <p className="text-xs text-status-ok uppercase tracking-widest font-medium">Do</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Use the dark logo on light backgrounds (primary use)",
                  "Use the white logo on dark navy / primary blue surfaces",
                  "Maintain aspect ratio and minimum clear space",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground print:text-gray-600">
                    <span className="h-1 w-1 rounded-full bg-status-ok mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-status-critical/20 flex items-center justify-center">
                  <X className="h-3 w-3 text-status-critical" />
                </div>
                <p className="text-xs text-status-critical uppercase tracking-widest font-medium">Don't</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Stretch or distort",
                  "Apply effects or gradients",
                  "Use on busy or low-contrast backgrounds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground print:text-gray-600">
                    <span className="h-1 w-1 rounded-full bg-status-critical mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Brand Assets Kit */}
      <section className="py-24 px-8 max-w-3xl mx-auto print:py-16 print:page-break-before">
        <SectionHeader number="13" title="Brand Assets Kit" subtitle="Downloads" />

        <p className="text-sm text-muted-foreground/70 mt-6 mb-12 print:text-gray-500">
          Download approved brand assets for use in presentations, documentation, and partner materials.
        </p>

        <div className="grid gap-6">
          {/* Logo Files */}
          <AssetDownloadCard
            icon={<FileType className="h-5 w-5" />}
            title="Logo Files"
            description="Primary logos in PNG and SVG format for digital use."
            files={[
              { name: "Integra Logo (White)", file: integraLogoWhite, filename: "integra-logo-white.png" },
              { name: "Integra Logo (SVG)", file: integraLogoSvg, filename: "integra-logo.svg" },
            ]}
          />

          {/* Color Palette */}
          <div className="bg-card border border-border/50 rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Colour Palette</h4>
                <p className="text-xs text-muted-foreground print:text-gray-500">
                  Complete brand colour specifications in multiple formats.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-2 print:bg-gray-100">
              <p className="text-muted-foreground print:text-gray-600">/* Integra Networks Brand Colours */</p>
              <p><span className="text-primary">--primary:</span> #0061FF | hsl(216, 100%, 50%)</p>
              <p><span className="text-muted-foreground">--background:</span> #0a0d14 | hsl(222, 47%, 6%)</p>
              <p><span className="text-muted-foreground">--foreground:</span> #FFFFFF | hsl(0, 0%, 100%)</p>
              <p><span className="text-muted-foreground">--card:</span> #141821 | hsl(222, 40%, 9%)</p>
              <p><span className="text-status-ok">--status-ok:</span> #22c55e | hsl(142, 76%, 42%)</p>
              <p><span className="text-status-warning">--status-warning:</span> #f59e0b | hsl(38, 92%, 55%)</p>
              <p><span className="text-status-critical">--status-critical:</span> #ef4444 | hsl(0, 72%, 55%)</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 gap-2"
              onClick={() => {
                const colors = `/* Integra Networks Brand Colours */
--primary: #0061FF | hsl(216, 100%, 50%)
--background: #0a0d14 | hsl(222, 47%, 6%)
--foreground: #FFFFFF | hsl(0, 0%, 100%)
--card: #141821 | hsl(222, 40%, 9%)
--secondary: #1a1f2b | hsl(222, 35%, 12%)
--muted: #232937 | hsl(222, 30%, 15%)
--border: #262d3d | hsl(222, 20%, 18%)
--status-ok: #22c55e | hsl(142, 76%, 42%)
--status-warning: #f59e0b | hsl(38, 92%, 55%)
--status-critical: #ef4444 | hsl(0, 72%, 55%)`;
                const blob = new Blob([colors], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'integra-colour-palette.txt';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="h-3.5 w-3.5" />
              Download Palette
            </Button>
          </div>

          {/* Typography Specimen */}
          <div className="bg-card border border-border/50 rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Type className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Typography Specimen</h4>
                <p className="text-xs text-muted-foreground print:text-gray-500">
                  Type scale specifications and font details for consistent implementation.
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="border-b border-border/30 pb-3">
                <p className="text-display-sm mb-1">Space Grotesk</p>
                <p className="text-xs text-muted-foreground">Primary Typeface · Google Fonts</p>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-normal text-lg">Aa</p>
                  <p className="text-xs text-muted-foreground mt-1">400</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-lg">Aa</p>
                  <p className="text-xs text-muted-foreground mt-1">500</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-semibold text-lg">Aa</p>
                  <p className="text-xs text-muted-foreground mt-1">600</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-lg">Aa</p>
                  <p className="text-xs text-muted-foreground mt-1">700</p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => {
                const typography = `Integra Networks Typography Specification
==========================================

Primary Font: Space Grotesk
Source: Google Fonts (https://fonts.google.com/specimen/Space+Grotesk)
Weights: 400, 500, 600, 700

Type Scale
----------
Display:       4.5rem (72px) | Line Height 1.05 | Letter Spacing -0.03em | Weight 400
Display Small: 3rem (48px)   | Line Height 1.1  | Letter Spacing -0.02em | Weight 400
Heading 1:     2.25rem (36px)| Line Height 1.15 | Letter Spacing -0.02em | Weight 400
Heading 2:     1.75rem (28px)| Line Height 1.2  | Letter Spacing -0.01em | Weight 500
Heading 3:     1.25rem (20px)| Line Height 1.3  | Letter Spacing -0.01em | Weight 500
Eyebrow:       0.75rem (12px)| Line Height 1.5  | Letter Spacing 0.1em   | Weight 500 | Uppercase
Body:          1rem (16px)   | Line Height 1.5  | Weight 400
Small:         0.875rem (14px)| Line Height 1.5 | Weight 400

Usage Notes
-----------
- Use Display for hero headlines and major section titles
- Use Heading 1-3 for content hierarchy within sections
- Use Eyebrow labels for categorisation and metadata
- Maintain consistent letter spacing for each scale level`;
                const blob = new Blob([typography], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'integra-typography-specimen.txt';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="h-3.5 w-3.5" />
              Download Specimen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 max-w-3xl mx-auto border-t border-border/50 text-center print:py-12 print:border-gray-200">
        <p className="text-xs text-muted-foreground/60 print:text-gray-400">
          © {new Date().getFullYear()} Integra Networks Limited. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1 print:text-gray-400">
          This document is confidential and intended for internal use only.
        </p>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm 2cm;
          }

          body {
            background: white !important;
            color: #1a1a1a !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .brand-guidelines {
            background: white !important;
          }

          .print\\:page-break-before {
            page-break-before: always;
          }

          .print\\:page-break-after {
            page-break-after: always;
          }

          /* Ensure color swatches print correctly */
          .color-swatch {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
    </>
  );
};

// Section Header Component
const SectionHeader = ({
  number,
  title,
  subtitle
}: {
  number: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="border-b border-border pb-6 print:border-gray-200">
    <p className="text-xs text-primary font-medium tracking-widest mb-2">{number}</p>
    <h2 className="text-heading-1 print:text-foreground">
      {title}
      {subtitle && <span className="text-muted-foreground font-normal"> — {subtitle}</span>}
    </h2>
  </div>
);

// Messaging Block Component
const MessagingBlock = ({ label, quote }: { label: string; quote: string }) => (
  <div className="space-y-3">
    <p className="text-xs text-primary uppercase tracking-widest font-medium">{label}</p>
    <blockquote className="text-xl border-l-2 border-primary pl-6 py-1 text-foreground/90 print:text-gray-800">
      "{quote}"
    </blockquote>
  </div>
);

// Type Scale Item Component
const TypeScaleItem = ({
  label,
  example,
  className,
  specs,
  tailwindClass,
  isLast = false
}: {
  label: string;
  example: React.ReactNode;
  className?: string;
  specs: string;
  tailwindClass?: string;
  isLast?: boolean;
}) => (
  <div className={`py-6 ${!isLast ? 'border-b border-border/50 print:border-gray-100' : ''}`}>
    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{label}</p>
    <div className={`mb-2 print:text-gray-800 ${className || ''}`}>{example}</div>
    <p className="text-xs text-muted-foreground/60 print:text-gray-400">{specs}</p>
    {tailwindClass && (
      <p className="text-xs font-mono text-primary/70 mt-1">.{tailwindClass}</p>
    )}
  </div>
);

// Color Group Component
const ColorGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{title}</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);

// Color Swatch Component
const ColorSwatch = ({
  name,
  hex,
  hsl,
  color,
  border = false,
  textDark = false,
  darkSurface = false
}: {
  name: string;
  hex: string;
  hsl: string;
  color: string;
  border?: boolean;
  textDark?: boolean;
  darkSurface?: boolean;
}) => {
  const sheenGradient = darkSurface
    ? 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)'
    : 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)';

  return (
    <div className="color-swatch">
      <div className={`relative h-16 rounded-lg mb-3 overflow-hidden ${color} ${border ? 'border border-border/50 print:border-gray-200' : ''}`}>
        {/* Inner sheen gradient - lighter at top-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: sheenGradient }}
        />
      </div>
      <p className={`text-sm font-medium ${textDark ? 'text-foreground' : ''} print:text-gray-800`}>{name}</p>
    <p className="text-xs text-muted-foreground print:text-gray-500">{hex}</p>
    <p className="text-xs text-muted-foreground/60 print:text-gray-400">HSL: {hsl}</p>
  </div>
  );
};

// Component Group Component
const ComponentGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{title}</p>
    {children}
  </div>
);

// Asset Download Card Component
const AssetDownloadCard = ({
  icon,
  title,
  description,
  files,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  files: { name: string; file: string; filename: string }[];
}) => {
  const handleDownload = (file: string, filename: string) => {
    const a = document.createElement('a');
    a.href = file;
    a.download = filename;
    a.click();
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg p-6 print:bg-gray-50 print:border-gray-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-medium mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground print:text-gray-500">{description}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {files.map((file, i) => (
          <button
            key={i}
            onClick={() => handleDownload(file.file, file.filename)}
            className="flex items-center gap-3 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg p-3 text-left group"
          >
            <div className="w-12 h-12 rounded bg-background border border-border/50 flex items-center justify-center overflow-hidden">
              <img src={file.file} alt={file.name} className="max-w-full max-h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground truncate">{file.filename}</p>
            </div>
            <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Directory Item Component
const DirectoryItem = ({
  label,
  value,
  copyable = false,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 print:py-2">
      <span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-foreground print:text-gray-800">{value}</span>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-muted rounded transition-colors print:hidden"
            title="Copy to clipboard"
          >
            <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-primary" />
          </button>
        )}
      </div>
    </div>
  );
};

// Boilerplate Block Component
const BoilerplateBlock = ({
  label,
  text,
}: {
  label: string;
  text: string;
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{label}</p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors print:hidden"
        >
          <Copy className="h-3 w-3" />
          Copy
        </button>
      </div>
      <p className="text-sm text-foreground leading-relaxed print:text-gray-800 font-medium">{text}</p>
    </div>
  );
};

export default BrandGuidelines;