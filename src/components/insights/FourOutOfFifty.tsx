const TOTAL = 50;
const HIGHLIGHTED = 4;
// Highlight the last 4 dots (bottom-right) so they read as "the tail"
const highlightedSet = new Set(
  Array.from({ length: HIGHLIGHTED }, (_, i) => TOTAL - 1 - i),
);

const FourOutOfFifty = () => (
  <figure className="not-prose my-12">
    <div className="rounded-2xl border border-border bg-muted/30 px-6 py-10 md:px-10 md:py-12 flex flex-col items-center">
      <div
        className="grid gap-3 md:gap-4"
        style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
        aria-hidden
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const highlighted = highlightedSet.has(i);
          return (
            <span
              key={i}
              className={
                "h-3 w-3 md:h-3.5 md:w-3.5 rounded-full " +
                (highlighted
                  ? "bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                  : "bg-foreground/15")
              }
            />
          );
        })}
      </div>
      <figcaption className="mt-8 text-sm md:text-base text-foreground/70 text-center max-w-md leading-relaxed">
        <span className="font-semibold text-foreground">4 out of every 50 sites</span>{" "}
        — the tail where deals are lost.
      </figcaption>
    </div>
  </figure>
);

export default FourOutOfFifty;