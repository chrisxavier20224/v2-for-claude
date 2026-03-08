import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const customers = [
  { name: "McGee Group", link: "/customers/mcgee-construction", logo: "" },
  { name: "Seacon Group", link: "/customers/seacon-group", logo: "" },
  { name: "WB Power Services", link: "/customers/wb-power-services", logo: "" },
  { name: "UK Harvest", link: "/customers/uk-harvest", logo: "" },
  { name: "APJ European", link: "/customers/apj-european", logo: "" },
  { name: "Atura Proteins", link: "/customers/atura-proteins", logo: "" },
  { name: "Royle Farm", link: "/customers/royle-farm", logo: "" },
  { name: "Royal Harwich YC", link: "/customers/royal-harwich-yacht-club", logo: "" },
  { name: "Thinking Anglers", link: "/customers/thinking-anglers", logo: "" },
  { name: "Carbee", link: "/customers/carbee", logo: "" },
];

const CustomerLogoBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="bg-background py-12 md:py-16 border-y border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
            Trusted by businesses across the UK
          </p>

          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Carousel track */}
            <div
              ref={scrollRef}
              className="flex items-center gap-8 md:gap-12 overflow-x-auto px-10 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {customers.map((c) => (
                <Link
                  key={c.name}
                  to={c.link}
                  className="flex-shrink-0 group"
                  title={c.name}
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="h-10 md:h-12 w-24 md:w-32 rounded-md border-2 border-dashed border-border bg-muted/50 flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight px-1">
                        {c.name}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="text-center mt-6">
            <Link
              to="/customers"
              className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              View all customer stories →
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomerLogoBar;
