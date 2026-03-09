import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import GradientBand from "./GradientBand";

import royleFarmHero from "@/assets/case-studies/royle-farm-hero.jpg";
import steamRallyHero from "@/assets/case-studies/steam-rally-hero.png";
import wbPowerHero from "@/assets/case-studies/wb-power-hero.avif";
import mcgeeHero from "@/assets/case-studies/mcgee-hero.jpg";
import littleQuarryHero from "@/assets/case-studies/little-quarry-hero.jpg";
import carbeeHero from "@/assets/case-studies/carbee-hero.jpg";
import rhycHero from "@/assets/case-studies/rhyc-hero.jpg";
import ukharvestHero from "@/assets/case-studies/ukharvest-hero.jpg";
import thinkingAnglersHero from "@/assets/case-studies/thinking-anglers-hero.jpg";
import aturaHero from "@/assets/case-studies/atura-hero.jpg";
import apjHero from "@/assets/case-studies/apj-hero.jpg";
import seaconHero from "@/assets/case-studies/seacon-hero.jpg";

const allStories = [
  { company: "Royle Farm Business Park", title: "From Farm to Fibre: Royle Farm Business Park", image: royleFarmHero, path: "/customers/royle-farm" },
  { company: "WRSA Steam Rally Festival", title: "Steam at Scale: 500Mbps for 8,000 Visitors", image: steamRallyHero, path: "/customers/steaming-ahead-with-enhanced-festival-connectivity" },
  { company: "WB Power Services", title: "Dodging the Six-Figure Bill: Nationwide Connectivity", image: wbPowerHero, path: "/customers/wb-power-services" },
  { company: "McGee Construction", title: "Building at Speed: 350Mbps for London's Biggest Sites", image: mcgeeHero, path: "/customers/mcgee-construction" },
  { company: "Little Quarry Glamping", title: "Luxury Pods, Real Internet: Little Quarry's Breakthrough", image: littleQuarryHero, path: "/customers/little-quarry-glamping" },
  { company: "Carbee Ltd", title: "From 0.1Mbps to 300+: Rural Car Dealer Gets High-Speed", image: carbeeHero, path: "/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet" },
  { company: "Royal Harwich Yacht Club", title: "Full Sail: 300Mbps in the Middle of Nowhere", image: rhycHero, path: "/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" },
  { company: "UKHarvest", title: "Food Rescue Needs Fast Internet: UKHarvest's Win", image: ukharvestHero, path: "/customers/fast-track-connectivity-ukharvests-digital-transformation" },
  { company: "Thinking Anglers", title: "YouTube Creators Need Upload Speed: They Got It", image: thinkingAnglersHero, path: "/customers/casting-the-net-wide-a-connectivity-transformation" },
  { company: "Atura Proteins", title: "Plant Proteins Powered by Real Connectivity", image: aturaHero, path: "/customers/revolutionising-connectivity-for-plant-protein-pioneers" },
  { company: "APJ European", title: "A Warehouse in a Digital Blackspot: Solved", image: apjHero, path: "/customers/revitalising-global-distribution-apj-europeans-digital-transformation" },
  { company: "Seacon Group", title: "Port Operations Transformed: Comprehensive Connectivity", image: seaconHero, path: "/customers/seacon-group" },
];

interface RelatedCaseStudiesProps {
  /** The path of the current case study to exclude from the carousel */
  currentPath: string;
}

const RelatedCaseStudies = ({ currentPath }: RelatedCaseStudiesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const stories = allStories.filter((s) => s.path !== currentPath);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > a")?.offsetWidth ?? 340;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <>
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">More Stories</p>
                <h2 className="text-2xl md:text-3xl font-medium text-surface-dark-foreground">Explore Other Case Studies</h2>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-surface-dark-foreground hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Scroll left"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-surface-dark-foreground hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stories.map((story) => (
              <Link
                key={story.path}
                to={story.path}
                className="group flex-shrink-0 w-[300px] md:w-[340px] snap-start"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Customer Story</span>
                    <p className="text-sm font-semibold text-surface-dark-foreground mb-1">{story.company}</p>
                    <h3 className="text-base font-medium text-surface-dark-foreground leading-snug mb-3 flex-1">{story.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                      Read Story <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedCaseStudies;
