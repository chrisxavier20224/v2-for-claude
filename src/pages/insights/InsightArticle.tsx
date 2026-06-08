import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { findInsight, insightArticles } from "./insightsData";

interface InsightArticleProps {
  slug: string;
  children?: React.ReactNode;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// ---------- Reusable POV components ----------
export const PullQuote = ({
  children,
  attribution,
  noQuotes,
}: {
  children: React.ReactNode;
  attribution?: string;
  noQuotes?: boolean;
}) => (
  <figure className="my-12 not-prose">
    <div className="border-l-4 border-primary pl-6 md:pl-8 py-2">
      <p className="text-2xl md:text-3xl font-medium leading-snug text-foreground tracking-tight">
        {noQuotes ? children : <>“{children}”</>}
      </p>
      {attribution && (
        <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          — {attribution}
        </figcaption>
      )}
    </div>
  </figure>
);

export const DataCallout = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="my-10 not-prose rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-10 flex flex-col md:flex-row md:items-end gap-3 md:gap-8">
    <div className="text-5xl md:text-6xl font-semibold tracking-tight text-primary leading-none">
      {value}
    </div>
    <div className="text-base md:text-lg text-foreground/80 leading-snug md:pb-2">
      {label}
    </div>
  </div>
);

export const NumberedSection = ({
  number,
  title,
  id,
  children,
}: {
  number: number | string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) => {
  const sectionId = id ?? slugify(title);
  return (
    <section id={sectionId} className="not-prose my-16 scroll-mt-28">
      <div className="flex items-baseline gap-5 md:gap-7 mb-6 pb-5 border-b border-border">
        <span className="text-5xl md:text-6xl font-semibold text-primary/15 tabular-nums leading-none">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div className="prose prose-lg prose-slate max-w-none
        prose-p:text-foreground/80 prose-p:leading-[1.8]
        prose-li:text-foreground/80 prose-li:leading-[1.8]
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>
    </section>
  );
};

export const FigureSlot = ({ description }: { description: string }) => (
  <figure className="my-12 not-prose">
    <div className="rounded-2xl border-2 border-dashed border-border bg-muted/40 aspect-[16/8] flex flex-col items-center justify-center text-center px-6">
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
        Figure
      </span>
      <p className="text-base md:text-lg text-foreground/70 max-w-xl">
        {description}
      </p>
    </div>
  </figure>
);

export const FounderInput = ({ children }: { children: React.ReactNode }) => (
  <aside className="my-8 not-prose rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-amber-950">
    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 mb-2">
      Founder input — placeholder
    </div>
    <div className="text-base leading-relaxed">{children}</div>
  </aside>
);

// ---------- Main template ----------
const InsightArticle = ({ slug, children }: InsightArticleProps) => {
  const article = findInsight(slug);
  if (!article) return null;

  const others = insightArticles.filter((a) => a.slug !== slug);
  const inside = article.whatsInside ?? [];
  const takeaways = article.takeaways ?? [];

  return (
    <PageLayout hideCTA>
      <SEO
        title={`${article.seoTitle ?? article.title} — Integra Networks`}
        description={article.excerpt}
        url={`/insights/${article.slug}`}
        type="article"
        {...(article.ogImage
          ? { image: article.ogImage, imageWidth: 1200, imageHeight: 630 }
          : {})}
      />

      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          .insight-cover { background: #fff !important; color: #000 !important; padding: 0 !important; }
          .insight-cover * { color: #000 !important; }
          .insight-article { padding: 0 !important; }
          .insight-article .insight-body { max-width: 100% !important; }
          body { background: #fff !important; }
          a { color: #000 !important; text-decoration: none !important; }
          .pov-takeaways { border: 1px solid #ddd !important; background: #fff !important; }
        }
      `}</style>

      <article className="insight-article bg-background">
        {/* ============ DOCUMENT-COVER HEADER ============ */}
        <section className="insight-cover relative bg-surface-dark text-white">
          {/* Hero image background */}
          {article.heroImage && (
            <>
              <img
                src={article.heroImage}
                alt=""
                aria-hidden
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40 pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent pointer-events-none"
              />
            </>
          )}
          {/* subtle grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
          />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-14 md:pt-20 pb-16 md:pb-24">
            <div className="no-print mb-10">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All insights
              </Link>
            </div>

            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-8">
                {article.category}
              </p>
              <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>

              {/* Metadata row */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/55">
                <span className="text-white/80">Integra Networks Insights</span>
                {article.readingTime && (
                  <>
                    <span className="text-white/25">·</span>
                    <span>{article.readingTime}</span>
                  </>
                )}
                <span className="text-white/25">·</span>
                <span>{article.category}</span>
              </div>

              {/* Download as PDF artifact */}
              <div className="no-print mt-10 flex items-center gap-4">
                <Button
                  size="lg"
                  onClick={() => window.print()}
                  className="bg-primary text-white hover:bg-primary/90 gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download as PDF
                </Button>
                <div className="hidden sm:flex items-center gap-3 text-white/60">
                  <div className="w-10 h-12 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white/70" />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="text-white/80 font-medium">PDF · A4</div>
                    <div className="text-white/45">
                      Print-ready document
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============ WHAT'S INSIDE + KEY TAKEAWAYS ============ */}
        {(inside.length > 0 || takeaways.length > 0) && (
          <section className="bg-background pt-14 md:pt-20 pb-4">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {inside.length > 0 && (
                  <AnimatedSection>
                    <div className="rounded-2xl border border-border bg-card p-7 md:p-9 h-full">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                        What's inside
                      </p>
                      <ol className="space-y-3">
                        {inside.map((item, i) => (
                          <li key={i} className="flex gap-4 text-foreground/80 leading-snug">
                            <span className="text-sm tabular-nums text-muted-foreground pt-0.5 w-6 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <a
                              href={`#${slugify(item)}`}
                              className="hover:text-primary transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </AnimatedSection>
                )}

                {takeaways.length > 0 && (
                  <AnimatedSection>
                    <div className="pov-takeaways rounded-2xl bg-primary/[0.06] border border-primary/15 p-7 md:p-9 h-full">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                        Key takeaways
                      </p>
                      <ul className="space-y-4">
                        {takeaways.map((t, i) => (
                          <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ============ HERO FIGURE SLOT ============ */}
        {article.heroFigure && article.slug !== "multi-bearer-internet-failover" && (
          <section className="bg-background pt-6 pb-4">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <FigureSlot description={article.heroFigure} />
            </div>
          </section>
        )}

        {/* ============ BODY ============ */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 insight-body">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-14 prose-h2:mb-5
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
                prose-p:text-foreground/80 prose-p:leading-[1.8]
                prose-li:text-foreground/80 prose-li:leading-[1.8]
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              {children ?? (
                <p className="text-muted-foreground italic">
                  [POV article body to follow]
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="no-print bg-surface-dark py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                Talk to us
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 leading-tight">
                {article.cta?.headline ?? "Got a site that Fibre can't reach?"}
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                {article.cta?.body ?? "Getting the awkward sites online is what we do. Tell us about yours."}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link to={article.cta?.buttonHref ?? "/contact"}>
                  {article.cta?.buttonLabel ?? "Talk to us"}
                </Link>
              </Button>
              {article.cta?.contactLine && (
                <p className="mt-8 text-sm text-white/55 tracking-wide">
                  {article.cta.contactLine}
                </p>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* ============ MORE INSIGHTS ============ */}
        <section className="no-print bg-background py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                More insights
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10">
                Continue reading
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  to={other.hrefOverride ?? `/insights/${other.slug}`}
                  className="group flex items-stretch overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  {other.heroImage && (
                    <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden bg-muted">
                      <img
                        src={other.heroImage}
                        alt={other.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6 flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-2">
                      {other.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-medium text-foreground leading-snug mb-2">
                      {other.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
};

export default InsightArticle;
