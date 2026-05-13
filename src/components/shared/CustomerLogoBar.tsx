import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import mcgeeLogo from "@/assets/case-studies/mcgee-logo.png";
import seaconLogo from "@/assets/case-studies/seacon-logo.png";
import wbPowerLogo from "@/assets/case-studies/wb-power-logo.webp";
import ukHarvestLogo from "@/assets/case-studies/uk-harvest-logo.png";
import royleFarmLogo from "@/assets/case-studies/royle-farm-business-park-logo.png";
import rhycLogo from "@/assets/case-studies/royal-harwich-yacht-club-logo.png";
import thinkingAnglersLogo from "@/assets/case-studies/thinking-anglers-logo.png";
import littleQuarryLogo from "@/assets/case-studies/little-quarry-glamping-logo.png";
import wsraLogo from "@/assets/case-studies/wsra-steam-rally-logo.png";
import carbeeLogo from "@/assets/case-studies/carbee-logo.webp";

const customers = [
  { name: "McGee Group", link: "/customers/mcgee-construction", logo: mcgeeLogo },
  { name: "Seacon Group", link: "/customers/seacon-group", logo: seaconLogo },
  { name: "WB Power Services", link: "/customers/wb-power-services", logo: wbPowerLogo },
  { name: "UK Harvest", link: "/customers/fast-track-connectivity-ukharvests-digital-transformation", logo: ukHarvestLogo },
  { name: "Royle Farm", link: "/customers/royle-farm", logo: royleFarmLogo },
  { name: "Royal Harwich YC", link: "/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey", logo: rhycLogo },
  { name: "Thinking Anglers", link: "/customers/casting-the-net-wide-a-connectivity-transformation", logo: thinkingAnglersLogo },
  { name: "Little Quarry Glamping", link: "/customers/little-quarry-glamping", logo: littleQuarryLogo },
  { name: "WSRA Steam Rally", link: "/customers/steaming-ahead-with-enhanced-festival-connectivity", logo: wsraLogo },
  { name: "Carbee", link: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet", logo: carbeeLogo },
];

const LogoItem = ({ customer }: { customer: typeof customers[0] }) => (
  <Link
    to={customer.link}
    className="flex-shrink-0 group px-8 md:px-10"
    title={customer.name}
  >
    <div className="h-10 w-36 md:w-40 flex items-center justify-center">
      <img
        src={customer.logo}
        alt={customer.name}
        className="max-h-10 max-w-full w-auto object-contain grayscale opacity-50 group-hover:opacity-70 transition-all duration-300"
      />
    </div>
  </Link>
);

const CustomerLogoBar = () => {
  return (
    <section className="bg-background py-12 md:py-16 border-y border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
            Trusted by businesses across the UK
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track — duplicated for seamless loop */}
        <div className="flex items-center animate-marquee hover:[animation-play-state:paused]">
          {customers.map((c) => (
            <LogoItem key={`a-${c.name}`} customer={c} />
          ))}
          {customers.map((c) => (
            <LogoItem key={`b-${c.name}`} customer={c} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center mt-8">
          <Link
            to="/customers"
            className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
          >
            View all customer stories →
          </Link>
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CustomerLogoBar;
