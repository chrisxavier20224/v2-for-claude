import AnimatedSection from "./AnimatedSection";
import RelatedStoryCard from "./RelatedStoryCard";
import RelatedSectorCard from "./RelatedSectorCard";

interface RelatedContentProps {
  /** Keys matching storyMap in RelatedStoryCard (e.g. "seacon-group", "wb-power-services") */
  stories?: string[];
  /** Keys matching sectorMap in RelatedSectorCard (e.g. "business-parks", "construction-sites") */
  sectors?: string[];
  /** Optional "Further reading" links */
  furtherReading?: { label: string; path: string }[];
  /** Whether the section sits on a dark background (default: false → white bg) */
  dark?: boolean;
}

const RelatedContent = ({ stories = [], sectors = [], dark = false }: RelatedContentProps) => {
  if (stories.length === 0 && sectors.length === 0) return null;

  return (
    <section className={`${dark ? "bg-surface-dark" : "bg-background"} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── Customer Stories ─────────────────────────────────────── */}
        {stories.length > 0 && (
          <AnimatedSection>
            <p className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-primary" : "text-primary"} mb-3`}>
              Customer Stories
            </p>
            <h3 className={`text-xl md:text-2xl font-bold ${dark ? "text-surface-dark-foreground" : "text-foreground"} mb-8`}>
              See how businesses like yours solved it
            </h3>
            <div className={`grid gap-6 ${stories.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-2"}`}>
              {stories.map((key) => (
                <RelatedStoryCard key={key} storyKey={key} />
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* ── Related Sectors ─────────────────────────────────────── */}
        {sectors.length > 0 && (
          <AnimatedSection>
            <div className={stories.length > 0 ? "mt-16" : ""}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-primary" : "text-primary"} mb-3`}>
                Related Sectors
              </p>
              <h3 className={`text-xl md:text-2xl font-bold ${dark ? "text-surface-dark-foreground" : "text-foreground"} mb-8`}>
                We work with businesses like yours
              </h3>
              <div className={`grid gap-6 ${
                sectors.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}>
                {sectors.map((key) => (
                  <RelatedSectorCard key={key} sectorKey={key} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default RelatedContent;
