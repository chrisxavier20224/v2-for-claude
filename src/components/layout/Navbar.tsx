import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, HardHat, Home, Building2, FileText, Hammer, Store, Trees, BedDouble, Cable, Phone, Smartphone, Wifi, Satellite, Zap, Globe, Network, Tractor, BookOpen, Radio, Camera } from "lucide-react";
import integraLogo from "@/assets/integra-logo.svg";
import integraLogoWhite from "@/assets/integra-logo-white.jpg";

const navLinks: { label: string; path: string }[] = [];

const sectorLinks = [
  { label: "Homeworkers", path: "/sectors/homeworkers", icon: Home, tagline: "Rural Broadband & SD-WAN" },
  { label: "Fibre Enabled Buildings", path: "/sectors/fibre-enabled-buildings", icon: Building2, tagline: "Full Fibre for Business Parks" },
  { label: "Construction Sites", path: "/sectors/construction-sites", icon: Hammer, tagline: "High-Speed for Construction" },
  { label: "Rural SMEs", path: "/sectors/rural-smes", icon: Store, tagline: "Reliable Internet for Rural Business" },
  { label: "Business Parks", path: "/sectors/business-parks", icon: Trees, tagline: "Connectivity for Rural Parks" },
  { label: "Airbnbs", path: "/sectors/airbnbs", icon: BedDouble, tagline: "WiFi for Holiday Rentals" },
];

const connectivityLinks = [
  { label: "Integra SD-WAN", path: "/connectivity/integra-sd-wan", icon: Zap, tagline: "Bonded 4G/5G — No Fibre Needed" },
  { label: "Integra Bridge", path: "/connectivity/integra-bridge", icon: Cable, tagline: "Enterprise Internet in 10 Days" },
  { label: "Leased Lines", path: "/connectivity/leased-lines", icon: Cable, tagline: "Premium Business-Grade Fibre" },
  { label: "Managed SIM Services", path: "/connectivity/managed-sim-services", icon: Smartphone, tagline: "PSTN Transition Solutions" },
  { type: "divider" },
  { label: "Business WiFi", path: "/connectivity/business-wifi", icon: Wifi, tagline: "High-Speed WiFi Solutions" },
  { label: "Home WiFi", path: "/connectivity/home-wifi", icon: Home, tagline: "Reliable Home Connectivity" },
  { label: "Starlink Installation", path: "/connectivity/starlink-installation", icon: Satellite, tagline: "Satellite Internet Setup" },
  { label: "CCTV", path: "/connectivity/cctv", icon: Camera, tagline: "Professional Camera Systems" },
  { label: "Wireless Distribution", path: "/connectivity/wireless-distribution", icon: Radio, tagline: "Multi-Building Wireless Links" },
  { type: "divider" },
  { label: "Unified Communications", path: "/connectivity/unified-communications", icon: Phone, tagline: "Cloud Collaboration Platform" },
];

const postPlatformLinks = [
  { label: "Customer Stories", path: "/customers", icon: Building2 },
];


const resourceLinks = [
  { label: "All Resources", path: "/resources", icon: BookOpen, tagline: "Guides, comparisons & industry updates" },
  { label: "Alternatives to Fibre", path: "/alternatives-to-fibre-broadband", icon: Wifi, tagline: "Compare every broadband alternative" },
  { label: "Rural Business Broadband", path: "/rural-business-broadband", icon: Globe, tagline: "Reliable internet for rural SMEs" },
  { label: "Starlink for Business", path: "/starlink-for-business", icon: Satellite, tagline: "Honest satellite broadband assessment" },
  { label: "SD-WAN for Small Business", path: "/sd-wan-for-small-business", icon: Network, tagline: "Plain English SD-WAN explainer" },
  { label: "Construction Site Broadband", path: "/construction-site-broadband", icon: HardHat, tagline: "Fast-deploy temporary broadband" },
  { label: "Farm Broadband UK", path: "/farm-broadband", icon: Tractor, tagline: "Internet for farms & rural properties" },
  { label: "PSTN Switch Off", path: "/pstn-switch-off", icon: Phone, tagline: "Prepare for the PSTN transition" },
  { label: "Access Broadband Cymru", path: "/access-broadband-cymru", icon: FileText, tagline: "Up to £800 towards broadband in Wales" },
];

const secondaryLinks = [
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [connectivityOpen, setConnectivityOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const isDarkNav = location.pathname === "/connectivity/integra-bridge";
  
  const isSectorPath = sectorLinks.some(s => location.pathname === s.path);
  const isConnectivityPath = connectivityLinks.some(c => location.pathname === c.path);
  const isResourcePath = resourceLinks.some(r => location.pathname === r.path);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${isDarkNav ? 'bg-surface-dark border-white/10' : 'bg-white border-border'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center translate-y-0.5">
            <img src={isDarkNav ? integraLogoWhite : integraLogo} alt="Integra Networks" width="140" height="48" className="h-10 md:h-11 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}



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

            {/* Connectivity Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setConnectivityOpen(true)}
              onMouseLeave={() => setConnectivityOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isConnectivityPath
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Connectivity
                <ChevronDown className={`h-4 w-4 transition-transform ${connectivityOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {connectivityOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                    {connectivityLinks.map((item, index) => (
                      item.type === 'divider' ? (
                        <div key={`divider-${index}`} className="h-px bg-border my-0"></div>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{item.label}</div>
                            <div className="text-xs text-muted-foreground">{item.tagline}</div>
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            {postPlatformLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

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

            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? isDarkNav ? "text-white" : "text-foreground"
                    : isDarkNav ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="hidden sm:inline-flex"
              asChild
            >
              <Link to="/availability-checker">Availability Checker</Link>
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
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              


              {/* Mobile Sectors Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Sectors</div>
                <div className="space-y-1">
                  {sectorLinks.map((sector) => (
                    <Link
                      key={sector.path}
                      to={sector.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <sector.icon className="h-4 w-4 text-primary" />
                      {sector.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Connectivity Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Connectivity</div>
                <div className="space-y-1">
                  {connectivityLinks.map((item, index) => (
                    item.type === 'divider' ? (
                      <div key={`divider-${index}`} className="h-px bg-border my-2"></div>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>



              {/* Mobile Resources Section */}
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Resources</div>
                <div className="space-y-1">
                  {resourceLinks.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <resource.icon className="h-4 w-4 text-primary" />
                      {resource.label}
                    </Link>
                  ))}
                </div>
              </div>

              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-2 px-3">
                <Button 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link to="/availability-checker">Availability Checker</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
