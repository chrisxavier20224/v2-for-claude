import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import mcgeeLogo from "@/assets/case-studies/mcgee-logo.png";
import seaconLogo from "@/assets/case-studies/seacon-logo.jpg";
import wbPowerLogo from "@/assets/case-studies/wb-power-logo.png";
import ukHarvestLogo from "@/assets/case-studies/uk-harvest-logo.png";
import apjEuropeanLogo from "@/assets/case-studies/apj-european-logo.png";
import aturaProteinsLogo from "@/assets/case-studies/atura-proteins-logo.png";
import royleFarmLogo from "@/assets/case-studies/royle-farm-business-park-logo.png";
import rhycLogo from "@/assets/case-studies/royal-harwich-yacht-club-logo.png";
import thinkingAnglersLogo from "@/assets/case-studies/thinking-anglers-logo.png";
import littleQuarryLogo from "@/assets/case-studies/little-quarry-glamping-logo.png";
import wsraLogo from "@/assets/case-studies/wsra-steam-rally-logo.png";

const customers = [
  { name: "McGee Group", link: "/customers/mcgee-construction", logo: mcgeeLogo },
  { name: "Seacon Group", link: "/customers/seacon-group", logo: seaconLogo },
  { name: "WB Power Services", link: "/customers/wb-power-services", logo: wbPowerLogo },
  { name: "UK Harvest", link: "/customers/uk-harvest", logo: ukHarvestLogo },
  { name: "APJ European", link: "/customers/apj-european", logo: apjEuropeanLogo },
  { name: "Atura Proteins", link: "/customers/atura-proteins", logo: aturaProteinsLogo },
  { name: "Royle Farm", link: "/customers/royle-farm", logo: royleFarmLogo },
  { name: "Royal Harwich YC", link: "/customers/royal-harwich-yacht-club", logo: rhycLogo },
  { name: "Thinking Anglers", link: "/customers/thinking-anglers", logo: thinkingAnglersLogo },
  { name: "Little Quarry Glamping", link: "/customers/little-quarry-glamping", logo: littleQuarryLogo },
  { name: "WSRA Steam Rally", link: "/customers/wsra-steam-rally", logo: wsraLogo },
];

const LogoItem = ({ customer }: { customer: typeof customers[0] }) => (
  <Link
    to={customer.link}
    className="flex-shrink-0 group px-6 md:px-8"
    title={customer.name}
  >
    <div className="h-12 w-32 md:w-36 flex items-center justify-center">
      <img
        src={customer.logo}
        alt={customer.name}
        className="max-h-12 max-w-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CustomerLogoBar;
