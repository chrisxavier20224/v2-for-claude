import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import integraLogo from "@/assets/integra-logo.svg";


const connectivityLinks = [
  { label: "Integra SD-WAN", path: "/connectivity/integra-sd-wan" },
  { label: "Integra Bridge", path: "/connectivity/integra-bridge" },
  { label: "Leased Lines", path: "/connectivity/leased-lines" },
  { label: "Managed SIM Services", path: "/connectivity/managed-sim-services" },
  { label: "SoGEA Broadband", path: "/connectivity/sogea" },
  { label: "Starlink Installation", path: "/connectivity/starlink-installation" },
  { label: "Starlink B2B", path: "/connectivity/starlink-b2b" },
];

const solutionsLinks = [
  { label: "Business WiFi", path: "/connectivity/business-wifi" },
  { label: "Home WiFi", path: "/connectivity/home-wifi" },
  { label: "Unified Communications", path: "/connectivity/unified-communications" },
];

const infrastructureLinks = [
  { label: "CCTV", path: "/connectivity/cctv" },
  { label: "Wireless Distribution", path: "/connectivity/wireless-distribution" },
];

const companyLinks = [
  { label: "Customer Stories", path: "/customers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
];

const resourceLinks = [
  { label: "Availability Checker", path: "/availability-checker" },
  { label: "Pricing", path: "/pricing" },
  { label: "Resources", path: "/resources" },
];


// Custom TikTok icon since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/integra.networks/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/IntegraNetworksUK", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@IntegraNetworks", label: "YouTube" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@integra.networks", label: "TikTok" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark">
      {/* CTA Banner — built into the footer */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-md bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-md bg-white/5" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Let's see what we can do for you
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Join the businesses switching to Integra. It feels good when your connectivity just works.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-surface-dark font-semibold h-12 px-8 text-base rounded-md hover:bg-white/90 transition-colors shadow-lg"
              >
                Let's talk <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* MAIN FOOTER */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <img src={integraLogo} alt="Integra Networks" width="120" height="40" className="h-10" />
              </Link>
              <p className="text-sm text-surface-dark-muted">
                Managed connectivity and IoT solutions for businesses across the UK.
              </p>
            </div>

            {/* Connectivity */}
            <div>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4">Connectivity</h4>
              <ul className="space-y-2">
                {connectivityLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4">Solutions</h4>
              <ul className="space-y-2">
                {solutionsLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4 mt-6">Infrastructure</h4>
              <ul className="space-y-2">
                {infrastructureLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4 mt-6">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-surface-dark-foreground mb-4">Get in Touch</h4>
              <a href="mailto:connect@integra-networks.co.uk" className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors block mb-1">connect@integra-networks.co.uk</a>
              <a href="tel:02033887111" className="text-sm text-surface-dark-muted hover:text-surface-dark-foreground transition-colors block mb-4">0203 388 7111</a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-surface-dark-foreground/80 hover:text-primary hover:scale-110 transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <p className="text-sm text-surface-dark-muted">86–90 Paul Street</p>
              <p className="text-sm text-surface-dark-muted">London, EC2A 4NE</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* TRUST BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center justify-center gap-12">
            <span className="text-xs text-surface-dark-muted">ICO registered</span>
            <span className="text-xs text-surface-dark-muted">UK GDPR compliant</span>
          </div>
        </div>
      </div>
      
      {/* LEGAL / ADMIN BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-dark-muted/60">
            <span>© 2026 Integra Networks Limited. All rights reserved.</span>
            
            <div className="flex items-center gap-4">
              <Link to="/privacy-cookies" className="hover:text-surface-dark-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-surface-dark-foreground transition-colors">Terms</Link>
              <Link to="/sla" className="hover:text-surface-dark-foreground transition-colors">SLA</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Company No. 12505611</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
