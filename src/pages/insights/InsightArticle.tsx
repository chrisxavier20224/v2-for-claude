import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { findInsight, insightArticles } from "./insightsData";

interface InsightArticleProps {
  slug: string;
  children?: React.ReactNode;
}

const InsightArticle = ({ slug, children }: InsightArticleProps) => {
  const article = findInsight(slug);
  if (!article) return null;

  const others = insightArticles.filter((a) => a.slug !== slug);

  return (
    <PageLayout>
      <SEO
        title={`${article.title} — Integra Networks`}
        description={article.excerpt}
        url={`/insights/${article.slug}`}
      />

      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          .insight-article { padding: 0 !important; }
          .insight-article .insight-body { max-width: 100% !important; }
          body { background: #fff !important; }
        }
      `}</style>

      <article className="insight-article bg-background">
        {/* Header */}
        <section className="pt-16 md:pt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="no-print mb-10">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All insights
              </Link>
            </div>

            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
                {article.category}
              </p>
              <h1 className="text-3xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>

              <div className="no-print mt-10 flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.print()}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download as PDF
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Body */}
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

        {/* CTA */}
        <section className="no-print bg-surface-dark py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
                Talk to us
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 leading-tight">
                Got a site that fibre can't reach?
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                We've spent a decade getting the awkward sites online. Tell us about yours.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link to="/contact">Talk to us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* More insights */}
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
                  to={`/insights/${other.slug}`}
                  className="group block rounded-2xl p-7 border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                    {other.category}
                  </p>
                  <h3 className="text-xl font-medium text-foreground leading-snug mb-3">
                    {other.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
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