import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Building2, FileText, Hammer, Store, Trees, Cable, Phone, Smartphone, Wifi, Satellite, Zap, Globe, BookOpen, Radio, Camera, ServerCog, Shield, Signal, Layers, CreditCard, MapPin, Handshake } from "lucide-react";
import integraLogo from "@/assets/integra-logo.svg";
import integraLogoWhite from "@/assets/integra-logo-white.png";

// Fibre alternatives — solutions when you can't get fibre
const fibreAlternativeLinks = [
  { label: "Integra SD-WAN", path: "/connectivity/integra-sd-wan", icon: Zap, tagline: "Bonded 4G/5G — No Fibre Needed" },
  { label: "Integra Bridge", path: "/connectivity/integra-bridge", icon: Cable, tagline: "Enterprise Internet in 10 Days" },
  { label: "Starlink SD-WAN", path: "/connectivity/starlink-installation", icon: Satellite, tagline: "Satellite + 4G/5G Bonded" },
  { label: "Managed SIM Services", path: "/connectivity/managed-sim-services", icon: Smartphone, tagline: "4G/5G & PSTN Transition" },
  { label: "Pricing", path: "/pricing", icon: CreditCard, tagline: "Transparent, Fixed Monthly Pricing" },
];

// Standard connectivity — traditional broadband and fibre
const standardConnectivityLinks = [
  { label: "Leased Lines", path: "/connectivity/leased-lines", icon: Cable, tagline: "Dedicated Business-Grade Fibre" },
  { label: "Managed Internet", path: "/connectivity/managed-internet", icon: Globe, tagline: "Dedicated Bandwidth, Simpler Pricing" },
  { label: "SoGEA Broadband", path: "/connectivity/sogea", icon: Globe, tagline: "Broadband Without Line Rental" },
{ label: "4G/5G Backup", path: "/connectivity/cellular-backup", icon: Signal, tagline: "Automatic Cellular Failover" },
];

// Infrastructure & on-site services
const infrastructureLinks = [
  { label: "Business WiFi", path: "/connectivity/business-wifi", icon: Wifi, tagline: "Enterprise Mesh Networks" },
  { label: "CCTV", path: "/connectivity/cctv", icon: Camera, tagline: "Professional Camera Systems" },
  { label: "Wireless Distribution", path: "/connectivity/wireless-distribution", icon: Radio, tagline: "Multi-Building Links" },
  { label: "Unified Communications", path: "/connectivity/unified-communications", icon: Phone, tagline: "Cloud Collaboration" },
  { label: "Network Infrastructure", path: "/connectivity/network-infrastructure", icon: ServerCog, tagline: "Cabling, Cabinets & Fibre Links" },
  { label: "Managed Firewall", path: "/connectivity/managed-firewall", icon: Shield, tagline: "Network Security & Protection" },
  { label: "Business Mobiles", path: "/connectivity/business-mobiles", icon: Smartphone, tagline: "Multi-Network Mobile Plans" },
  { label: "Business Continuity", path: "/connectivity/business-continuity", icon: Layers, tagline: "Layered Connectivity Resilience" },
];

// All connectivity links combined for path matching
const allConnectivityLinks = [...fibreAlternativeLinks, ...standardConnectivityLinks, ...infrastructureLinks];

const sectorLinks = [
  { label: "Construction Sites", path: "/sectors/construction-sites", icon: Hammer, tagline: "High-Speed for Construction" },
  { label: "Rural SMEs", path: "/sectors/rural-smes", icon: Store, tagline: "Reliable Internet for Rural Business" },
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

const resourceLinks = [
  { label: "All Resources", path: "/resources", icon: BookOpen, tagline: "Guides, comparisons & industry updates" },
  { label: "Blog", path: "/blog", icon: FileText, tagline: "News, guides & insights" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const isDarkNav = location.pathname === "/connectivity/integra-bridge";

  const isSectorPath = sectorLinks.some(s => location.pathname === s.path);
  const isServicesPath = allConnectivityLinks.some(c => location.pathname === c.path);
  const isLocationPath = locationLinks.some(l => location.pathname === l.path);
  const isResourcePath = resourceLinks.some(r => location.pathname === r.path) || location.pathname === "/blog";

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${isDarkNav ? 'bg-surface-dark border-white/10' : 'bg-white border-border'}`}>
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
                  isServicesPath
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

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isResourcePath
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                    {resourceLinks.map((resource) => (
                      <Link
                        key={resource.path}
                        to={resource.path}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <resource.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{resource.label}</div>
                          <div className="text-xs text-muted-foreground">{resource.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
            {/* Wholesale — standalone link */}
            <Link
              to="/wholesale"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/wholesale"
                  ? isDarkNav ? "text-white" : "text-foreground"
                  : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Wholesale
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

              {/* Mobile Resources Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Resources</div>
                <div className="space-y-1">
                  {resourceLinks.map((resource) => (
                    <Link key={resource.path} to={resource.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                      <resource.icon className="h-4 w-4 text-primary" />
                      {resource.label}
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
