import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Building2, FileText, Hammer, Store, Trees, Cable, Phone, Smartphone, Wifi, Satellite, Zap, Globe, BookOpen, Radio, Camera, ServerCog, Shield, Signal, Layers, CreditCard, MapPin, Handshake, Newspaper, ArrowRight } from "lucide-react";
import integraLogo from "@/assets/integra-logo.svg";
import integraLogoWhite from "@/assets/integra-logo-white.png";

// Fibre alternatives — solutions when you can't get Fibre
const fibreAlternativeLinks = [
  { label: "Integra SD-WAN", path: "/integra-sd-wan", icon: Zap, tagline: "Bonded 4G/5G — No Fibre Needed" },
  { label: "Integra Bridge", path: "/integra-bridge", icon: Cable, tagline: "Enterprise Internet in 10 Days" },
  { label: "Starlink Installation", path: "/starlink-installation", icon: Satellite, tagline: "Professional Starlink Install & Support" },
  { label: "Managed SIM Services", path: "/managed-sim-services", icon: Smartphone, tagline: "4G/5G & PSTN Transition" },
  { label: "Pricing", path: "/pricing", icon: CreditCard, tagline: "How Integra Pricing Works" },
];

// Standard connectivity — traditional broadband and Fibre
const standardConnectivityLinks = [
  { label: "Leased Lines", path: "/leased-lines", icon: Cable, tagline: "Dedicated Business-Grade Fibre" },
  { label: "Managed Internet", path: "/managed-internet", icon: Globe, tagline: "Dedicated Bandwidth, Simpler Pricing" },
  { label: "SoGEA Broadband", path: "/sogea", icon: Globe, tagline: "Broadband Without Line Rental" },
{ label: "4G/5G Backup", path: "/cellular-backup", icon: Signal, tagline: "Automatic Cellular Failover" },
];

// Infrastructure & on-site services
const infrastructureLinks = [
  { label: "Business WiFi", path: "/business-wifi", icon: Wifi, tagline: "Enterprise Mesh Networks" },
  { label: "CCTV", path: "/cctv", icon: Camera, tagline: "Professional Camera Systems" },
  { label: "Wireless Distribution", path: "/wireless-distribution", icon: Radio, tagline: "Multi-Building Links" },
  { label: "Unified Communications", path: "/unified-communications", icon: Phone, tagline: "Cloud Collaboration" },
  { label: "Network Infrastructure", path: "/network-infrastructure", icon: ServerCog, tagline: "Cabling, Cabinets & Fibre Links" },
  { label: "Managed Firewall", path: "/managed-firewall", icon: Shield, tagline: "Network Security & Protection" },
  { label: "Business Mobiles", path: "/business-mobiles", icon: Smartphone, tagline: "Multi-Network Mobile Plans" },
  { label: "Business Continuity", path: "/business-continuity", icon: Layers, tagline: "Layered Connectivity Resilience" },
];

// All connectivity links combined for path matching
const allConnectivityLinks = [...fibreAlternativeLinks, ...standardConnectivityLinks, ...infrastructureLinks];

const sectorLinks = [
  { label: "Construction Sites", path: "/construction-site-broadband", icon: Hammer, tagline: "High-Speed for Construction" },
  { label: "Rural SMEs", path: "/rural-business-broadband", icon: Store, tagline: "Reliable Internet for Rural Business" },
  { label: "Business Parks", path: "/sectors/business-parks", icon: Trees, tagline: "Connectivity for Business Parks" },
];

const locationLinks = [
  { label: "North West", path: "/locations/rural-broadband-north-west", icon: MapPin, tagline: "Greater Manchester, Lancashire, Cheshire" },
  { label: "Essex & Hertfordshire", path: "/locations/rural-broadband-essex-hertfordshire", icon: MapPin, tagline: "East of London coverage" },
  { label: "Sussex & Surrey", path: "/locations/rural-broadband-sussex-surrey", icon: MapPin, tagline: "South East rural broadband" },
  { label: "Kent", path: "/locations/rural-broadband-kent", icon: MapPin, tagline: "South East England" },
  { label: "Somerset & Devon", path: "/locations/rural-broadband-somerset-devon", icon: MapPin, tagline: "South West rural coverage" },
  { label: "Yorkshire", path: "/locations/rural-broadband-yorkshire", icon: MapPin, tagline: "North East rural broadband" },
  { label: "London Construction", path: "/locations/construction-site-broadband-london", icon: MapPin, tagline: "London building sites" },
  { label: "Cotswolds", path: "/locations/rural-broadband-cotswolds", icon: MapPin, tagline: "Cotswolds region coverage" },
];


const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkNav = location.pathname === "/integra-bridge";

  const isSectorPath = sectorLinks.some(s => location.pathname === s.path);
  const isServicesPath = allConnectivityLinks.some(c => location.pathname === c.path);
  const isLocationPath = locationLinks.some(l => location.pathname === l.path);
  const isInsightsPath = location.pathname === "/insights" || location.pathname.startsWith("/insights/");
  const isWholesalePath = location.pathname === "/wholesale";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isDarkNav
          ? scrolled
            ? "bg-surface-dark/70 border-b border-white/10"
            : "bg-surface-dark border-b border-white/10"
          : scrolled
            ? "bg-white/70 border-b border-border/40 shadow-sm"
            : "bg-white border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center translate-y-0.5">
            <img src={isDarkNav ? integraLogoWhite : integraLogo} alt="Integra Networks" width="140" height="48" className="h-10 md:h-11 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-7 md:flex">

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServicesPath || isWholesalePath
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-4 pt-2 w-[680px]">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                    {/* Wholesale featured banner — top */}
                    <Link
                      to="/wholesale"
                      className="group relative block overflow-hidden border-b border-border"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[hsl(222_47%_11%)]" />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                          background: `
                            radial-gradient(ellipse 50% 120% at 90% 50%, hsl(216 100% 50% / 0.25) 0%, transparent 60%),
                            radial-gradient(ellipse 40% 80% at 100% 30%, hsl(210 100% 60% / 0.12) 0%, transparent 55%)
                          `,
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage: `
                            linear-gradient(60deg, transparent 48.5%, hsl(216 100% 50% / 0.5) 49.5%, hsl(216 100% 50% / 0.5) 50.5%, transparent 51.5%),
                            linear-gradient(72deg, transparent 48.5%, hsl(210 100% 60% / 0.3) 49.5%, hsl(210 100% 60% / 0.3) 50.5%, transparent 51.5%)
                          `,
                          backgroundSize: "200% 200%, 220% 220%",
                          backgroundPosition: "80% 30%, 75% 25%",
                        }}
                      />
                      <div className="relative flex items-center gap-4 p-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary flex-shrink-0 border border-primary/30">
                          <Handshake className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary bg-primary/15 border border-primary/30 rounded-full px-2 py-0.5">
                              Partners
                            </span>
                            <span className="text-sm font-semibold text-white">Wholesale</span>
                          </div>
                          <div className="text-xs text-white/70">
                            White-label connectivity for ISPs, MSPs and alt-nets.
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                    <div className="grid grid-cols-3">
                      {/* Fibre Alternatives column */}
                      <div className="p-2">
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Fibre Alternatives</div>
                        {fibreAlternativeLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.label}</div>
                              <div className="text-xs text-muted-foreground">{item.tagline}</div>
                            </div>
                          </Link>
                        ))}
                        <div className="px-3 py-2 mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Standard Connectivity</div>
                        {standardConnectivityLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.label}</div>
                              <div className="text-xs text-muted-foreground">{item.tagline}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      {/* Infrastructure column */}
                      <div className="p-2 border-l border-border col-span-2">
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Infrastructure</div>
                        <div className="grid grid-cols-2">
                          {infrastructureLinks.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">{item.label}</div>
                                <div className="text-xs text-muted-foreground">{item.tagline}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sectors Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isSectorPath
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sectors
                <ChevronDown className={`h-4 w-4 transition-transform ${sectorsOpen ? 'rotate-180' : ''}`} />
              </button>

              {sectorsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                    {sectorLinks.map((sector) => (
                      <Link
                        key={sector.path}
                        to={sector.path}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <sector.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{sector.label}</div>
                          <div className="text-xs text-muted-foreground">{sector.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Insights link hidden pending review */}

            {/* Customers — standalone link */}
            <Link
              to="/customers"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/customers" || location.pathname.startsWith("/customers/")
                  ? isDarkNav ? "text-white" : "text-foreground"
                  : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Customers
            </Link>
            {/* Contact — standalone link */}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/contact"
                  ? isDarkNav ? "text-white" : "text-foreground"
                  : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link to="/check">Availability Checker</Link>
            </Button>
            
            {/* Mobile menu button */}
            <button
              className={`inline-flex md:hidden items-center justify-center p-2 rounded-lg transition-colors ${isDarkNav ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">

              {/* Availability Checker — top of mobile nav */}
              <div className="px-3 pb-2">
                <Link
                  to="/check"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-3 font-semibold text-sm shadow-md hover:bg-primary/90 transition-colors"
                >
                  <Wifi className="h-4 w-4" />
                  Check Your Availability
                </Link>
              </div>

              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Fibre Alternatives</div>
                <div className="space-y-1">
                  {fibreAlternativeLinks.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 mt-4">Standard Connectivity</div>
                <div className="space-y-1">
                  {standardConnectivityLinks.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 mt-4">Infrastructure</div>
                <div className="space-y-1">
                  {infrastructureLinks.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Sectors Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Sectors</div>
                <div className="space-y-1">
                  {sectorLinks.map((sector) => (
                    <Link key={sector.path} to={sector.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <sector.icon className="h-4 w-4 text-primary" />
                      {sector.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile standalone links */}
              <div className="px-3 py-2 space-y-1">
                <Link to="/customers" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  <Building2 className="h-4 w-4 text-primary" />
                  Customer Stories
                </Link>
                <Link to="/wholesale" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  <Handshake className="h-4 w-4 text-primary" />
                  Wholesale
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  Contact
                </Link>
              </div>

              {/* Bottom padding so sticky bar doesn't overlap last items */}
              <div className="h-14" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
