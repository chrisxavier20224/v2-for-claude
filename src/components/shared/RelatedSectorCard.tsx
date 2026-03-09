import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Tent, Home, Tractor, HardHat } from "lucide-react";

import businessParksHero from "@/assets/sectors/business-parks-hero.jpg";
import constructionHero from "@/assets/sectors/construction-hero.jpg";
import ruralSmeHero from "@/assets/sectors/rural-sme-hero.jpg";
import homeworkerHero from "@/assets/sectors/homeworker-remote-work.avif";
import airbnbHero from "@/assets/sectors/airbnb-hero.jpg";
import fibreHero from "@/assets/sectors/fibre-building-hero.jpg";

interface SectorData {
  name: string;
  tagline: string;
  image: string;
  icon: typeof Building2;
  path: string;
}

const sectorMap: Record<string, SectorData> = {
  "business-parks": {
    name: "Business Parks",
    tagline: "Shared fibre infrastructure for multi-tenant estates",
    image: businessParksHero,
    icon: Building2,
    path: "/sectors/business-parks",
  },
  "construction-sites": {
    name: "Construction Sites",
    tagline: "Rapid-deploy connectivity for temporary sites",
    image: constructionHero,
    icon: HardHat,
    path: "/sectors/construction-sites",
  },
  "rural-smes": {
    name: "Rural SMEs",
    tagline: "Reliable internet where others say it can't be done",
    image: ruralSmeHero,
    icon: Tractor,
    path: "/sectors/rural-smes",
  },
  "homeworkers": {
    name: "Homeworkers",
    tagline: "Business-grade broadband for remote teams",
    image: homeworkerHero,
    icon: Home,
    path: "/sectors/homeworkers",
  },
  "airbnbs": {
    name: "Holiday Lets & Glamping",
    tagline: "Guest WiFi that earns five-star reviews",
    image: airbnbHero,
    icon: Tent,
    path: "/sectors/airbnbs",
  },
  "fibre-enabled-buildings": {
    name: "Fibre-Enabled Buildings",
    tagline: "Pre-connected commercial buildings with managed WiFi",
    image: fibreHero,
    icon: Factory,
    path: "/sectors/fibre-enabled-buildings",
  },
};

export { sectorMap };

interface RelatedSectorCardProps {
  sectorKey: string;
}

const RelatedSectorCard = ({ sectorKey }: RelatedSectorCardProps) => {
  const sector = sectorMap[sectorKey];
  if (!sector) return null;

  const Icon = sector.icon;

  return (
    <Link to={sector.path} className="group block">
      <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
        {/* Background image */}
        <img
          src={sector.image}
          alt={sector.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-lg bg-primary/90 flex items-center justify-center">
              <Icon className="h-3.5 w-3.5 text-white" />
            </div>
            <h3 className="text-base font-bold text-white">{sector.name}</h3>
          </div>
          <p className="text-xs text-white/70 mb-2 line-clamp-1">{sector.tagline}</p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-primary transition-colors">
            Explore <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedSectorCard;
