import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";

interface HiddenInsightLayoutProps {
  title: string;
  description: string;
  url: string;
  category?: string;
  readingTime?: string;
  author?: string;
  indexable?: boolean;
  cta?: {
    headline?: string;
    body?: string;
    buttonLabel: string;
    buttonHref: string;
  };
  children: React.ReactNode;
}

/**
 * Lightweight long-form insight layout for UNLISTED / hidden insight pages.
 * - Forces noindex,nofollow via SEO
 * - Not added to the Insights index or sitemap
 * - Reuses site header/footer + typography
 */
const HiddenInsightLayout = ({
  title,
  description,
  url,
  category = "Insight",
  readingTime,
  author = "Elliott Mueller",
  indexable = false,
  cta,
  children,
}: HiddenInsightLayoutProps) => {
  return (
    <PageLayout hideCTA>
      <SEO
        title={`${title} — Integra Networks`}
        description={description}
        url={url}
        type="article"
        author={author}
        noIndex={!indexable}
      />

      <article className="bg-background">
        {/* COVER */}
        <section className="relative bg-surface-dark text-white overflow-hidden">
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
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-24">
            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-8">
                {category}
              </p>
              <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
                {description}
              </p>
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/55">
                <span className="text-white/80">By {author}</span>
                <span className="text-white/25">·</span>
                <span>Integra Networks</span>
                {readingTime && (
                  <>
                    <span className="text-white/25">·</span>
                    <span>{readingTime}</span>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BODY */}
        <section className="pb-20 md:pb-28 pt-14 md:pt-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-14 prose-h2:mb-5
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
                prose-p:text-foreground/80 prose-p:leading-[1.8]
                prose-li:text-foreground/80 prose-li:leading-[1.8]
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              {children}
            </div>
          </div>
        </section>

        {/* CTA */}
        {cta && (
          <section className="bg-surface-dark py-20 md:py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <AnimatedSection>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                  Talk to us
                </p>
                {cta.headline && (
                  <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 leading-tight">
                    {cta.headline}
                  </h2>
                )}
                {cta.body && (
                  <p className="text-lg text-white/70 mb-10 leading-relaxed">
                    {cta.body}
                  </p>
                )}
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Link to={cta.buttonHref} className="inline-flex items-center gap-2">
                    {cta.buttonLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </section>
        )}
      </article>
    </PageLayout>
  );
};

export const InsightCallout = ({ children }: { children: React.ReactNode }) => (
  <aside
    className="not-prose my-12 bg-gradient-to-br from-primary to-[hsl(216_100%_42%)] py-10 md:py-14"
    style={{
      width: "100vw",
      marginLeft: "calc(50% - 50vw)",
      marginRight: "calc(50% - 50vw)",
    }}
  >
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 mb-3">
        Where Integra fits
      </p>
      <div className="text-base md:text-lg leading-relaxed text-white">
        {children}
      </div>
    </div>
  </aside>
);

export const InsightFigurePlaceholder = ({ caption }: { caption: string }) => (
  <figure className="not-prose my-12">
    <div className="rounded-2xl border-2 border-dashed border-border bg-muted/40 aspect-[16/8] flex items-center justify-center px-6">
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Figure placeholder
      </span>
    </div>
    <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
      {caption}
    </figcaption>
  </figure>
);

export default HiddenInsightLayout;