import AnimatedSection from "./AnimatedSection";
import RelatedStoryCard from "./RelatedStoryCard";
import { storyMap } from "./RelatedStoryCard";
import RelatedSectorCard from "./RelatedSectorCard";
import EyebrowLabel from "./EyebrowLabel";

const allStoryKeys = Object.keys(storyMap);
const allSectorKeys = ["homeworkers", "fibre-enabled-buildings", "construction-sites", "rural-smes", "business-parks", "airbnbs"];

/** Pad an array to at least `min` items by pulling from a pool, excluding already-present keys */
function padArray(arr: string[], pool: string[], min: number): string[] {
  if (arr.length >= min) return arr;
  const extras = pool.filter((k) => !arr.includes(k));
  // Deterministic shuffle based on first item to avoid random flicker
  const seed = arr[0] || "default";
  const sorted = extras.sort((a, b) => {
    const ha = Array.from(a + seed).reduce((s, c) => s + c.charCodeAt(0), 0);
    const hb = Array.from(b + seed).reduce((s, c) => s + c.charCodeAt(0), 0);
    return ha - hb;
  });
  return [...arr, ...sorted.slice(0, min - arr.length)];
}

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

const RelatedContent = ({ stories: rawStories = [], sectors: rawSectors = [], dark = false }: RelatedContentProps) => {
  if (rawStories.length === 0 && rawSectors.length === 0) return null;

  // Always show at least 2 items in each section
  const stories = rawStories.length > 0 ? padArray(rawStories, allStoryKeys, 2) : [];
  const sectors = rawSectors.length > 0 ? padArray(rawSectors, allSectorKeys, 2) : [];

  const fg = dark ? "text-surface-dark-foreground" : "text-foreground";

  return (
    <section className={`${dark ? "bg-surface-dark" : "bg-background"} py-16 md:py-24 relative overflow-hidden`}>
      {/* Subtle background glow */}
      {dark && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* ── Customer Stories ─────────────────────────────────────── */}
        {stories.length > 0 && (
          <AnimatedSection>
            <EyebrowLabel>Customer Stories</EyebrowLabel>
            <h3 className={`text-heading-1 md:text-display-sm ${fg} mb-8`}>
              See how businesses like yours solved it
            </h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {stories.map((key) => (
                <RelatedStoryCard key={key} storyKey={key} />
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* ── Related Sectors ─────────────────────────────────────── */}
        {sectors.length > 0 && (
          <AnimatedSection>
            <div className={stories.length > 0 ? "mt-20 pt-16 border-t border-white/10" : ""}>
              <EyebrowLabel>Related Sectors</EyebrowLabel>
              <h3 className={`text-heading-1 md:text-display-sm ${fg} mb-8`}>
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
