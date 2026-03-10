import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// ── STORY DATA ──────────────────────────────────────────────────────────────
import royleFarmHero from "@/assets/case-studies/royle-farm-hero.jpg";
import royleFarmLogo from "@/assets/case-studies/royle-farm-business-park-logo.png";
import steamRallyHero from "@/assets/case-studies/steam-rally-hero.png";
import wsraLogo from "@/assets/case-studies/wsra-steam-rally-logo.png";
import wbPowerHero from "@/assets/case-studies/wb-power-hero.avif";
import mcgeeHero from "@/assets/case-studies/mcgee-hero.jpg";
import mcgeeLogo from "@/assets/case-studies/mcgee-logo.png";
import littleQuarryHero from "@/assets/case-studies/little-quarry-hero.jpg";
import littleQuarryLogo from "@/assets/case-studies/little-quarry-glamping-logo.png";
import carbeeHero from "@/assets/case-studies/carbee-hero.jpg";
import carbeeLogo from "@/assets/case-studies/carbee-logo-white.png";
import rhycHero from "@/assets/case-studies/rhyc-hero.jpg";
import rhycLogo from "@/assets/case-studies/royal-harwich-yacht-club-logo-white.png";
import ukharvestHero from "@/assets/case-studies/ukharvest-hero.jpg";
import ukharvestLogo from "@/assets/case-studies/uk-harvest-logo.png";
import thinkingAnglersHero from "@/assets/case-studies/thinking-anglers-hero.jpg";
import thinkingAnglersLogo from "@/assets/case-studies/thinking-anglers-logo.png";
import aturaHero from "@/assets/case-studies/atura-hero.jpg";
import aturaLogo from "@/assets/case-studies/atura-proteins-logo.png";
import apjHero from "@/assets/case-studies/apj-hero.jpg";
import apjLogo from "@/assets/case-studies/apj-european-logo.png";
import seaconHero from "@/assets/case-studies/seacon-hero.jpg";
import seaconLogo from "@/assets/case-studies/seacon-logo.png";

interface StoryData {
  company: string;
  strapline: string;
  image: string;
  logo?: string;
  path: string;
}

const storyMap: Record<string, StoryData> = {
  "royle-farm": {
    company: "Royle Farm Business Park",
    strapline: "From Farm to Fibre: Royle Farm Business Park",
    image: royleFarmHero,
    logo: royleFarmLogo,
    path: "/customers/royle-farm",
  },
  "steam-rally": {
    company: "WRSA Steam Rally Festival",
    strapline: "Steam at Scale: 500Mbps for 8,000 Visitors",
    image: steamRallyHero,
    logo: wsraLogo,
    path: "/customers/steaming-ahead-with-enhanced-festival-connectivity",
  },
  "wb-power-services": {
    company: "WB Power Services",
    strapline: "Dodging the £50K Bill: SD-WAN at Chorley Depot",
    image: wbPowerHero,
    path: "/customers/wb-power-services",
  },
  "mcgee-construction": {
    company: "McGee Construction",
    strapline: "Building at Speed: 350Mbps for London's Biggest Sites",
    image: mcgeeHero,
    logo: mcgeeLogo,
    path: "/customers/mcgee-construction",
  },
  "little-quarry": {
    company: "Little Quarry Glamping",
    strapline: "Luxury Pods, Real Internet: Little Quarry's Breakthrough",
    image: littleQuarryHero,
    logo: littleQuarryLogo,
    path: "/customers/little-quarry-glamping",
  },
  "carbee": {
    company: "Carbee Ltd",
    strapline: "From 0.1Mbps to 300+: Rural Car Dealer Gets High-Speed",
    image: carbeeHero,
    logo: carbeeLogo,
    path: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet",
  },
  "royal-harwich": {
    company: "Royal Harwich Yacht Club",
    strapline: "Full Sail: 300Mbps in the Middle of Nowhere",
    image: rhycHero,
    logo: rhycLogo,
    path: "/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey",
  },
  "ukharvest": {
    company: "UKHarvest",
    strapline: "Food Rescue Needs Fast Internet: UKHarvest's Win",
    image: ukharvestHero,
    logo: ukharvestLogo,
    path: "/customers/fast-track-connectivity-ukharvests-digital-transformation",
  },
  "thinking-anglers": {
    company: "Thinking Anglers",
    strapline: "YouTube Creators Need Upload Speed: They Got It",
    image: thinkingAnglersHero,
    logo: thinkingAnglersLogo,
    path: "/customers/casting-the-net-wide-a-connectivity-transformation",
  },
  "atura-proteins": {
    company: "Atura Proteins",
    strapline: "Plant Proteins Powered by Real Connectivity",
    image: aturaHero,
    logo: aturaLogo,
    path: "/customers/revolutionising-connectivity-for-plant-protein-pioneers",
  },
  "apj-european": {
    company: "APJ European",
    strapline: "A Warehouse in a Digital Blackspot: Solved",
    image: apjHero,
    logo: apjLogo,
    path: "/customers/revitalising-global-distribution-apj-europeans-digital-transformation",
  },
  "seacon-group": {
    company: "Seacon Group",
    strapline: "Port Operations Transformed: Comprehensive Connectivity",
    image: seaconHero,
    logo: seaconLogo,
    path: "/customers/seacon-group",
  },
};

export { storyMap };

interface RelatedStoryCardProps {
  storyKey: string;
}

const RelatedStoryCard = ({ storyKey }: RelatedStoryCardProps) => {
  const story = storyMap[storyKey];
  if (!story) return null;

  return (
    <Link to={story.path} className="group block">
      <div className="relative rounded-xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">
        {/* Background image */}
        <img
          src={story.image}
          alt={story.company}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Company logo */}
          {story.logo && (
            <img
              src={story.logo}
              alt=""
              className="h-8 md:h-10 w-auto object-contain object-left mb-3 brightness-0 invert opacity-80"
              loading="lazy"
            />
          )}
          {!story.logo && (
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              Customer Story
            </p>
          )}
          <h3 className="text-lg md:text-xl font-medium text-white leading-snug mb-1">
            {story.company}
          </h3>
          <p className="text-sm text-white/70 mb-3 line-clamp-1">{story.strapline}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
            Read their story <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedStoryCard;
