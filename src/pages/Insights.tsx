import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { insightArticles } from "./insights/insightsData";

const Insights = () => {
  const featured = insightArticles.find((a) => a.featured) ?? insightArticles[0];
  const rest = insightArticles.filter((a) => a.slug !== featured.slug);

  return (
    <PageLayout>
      <SEO
        title="Insights — Integra Networks"
        description="Points of view on business connectivity — the lead times, the trade-offs, and the decisions behind getting a site online."
        url="/insights"
      />

      {/* Header */}
      <section className="bg-background pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Insights
            </p>
            <h1 className="text-display-sm md:text-display text-foreground font-medium max-w-3xl leading-[1.05]">
              Points of view on business connectivity.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The lead times, the trade-offs, and the decisions behind getting a site online.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Featured */}
          <AnimatedSection>
            <Link
              to={`/insights/${featured.slug}`}
              className="group block relative overflow-hidden rounded-2xl bg-surface-dark border border-white/10 p-10 md:p-16 mb-8 hover:border-primary/40 transition-colors"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
                  {featured.category}
                </p>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-6">
                  {featured.title}
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {rest.map((article, i) => {
              const isDark = article.tone === "dark";
              return (
                <AnimatedSection key={article.slug} delay={0.05 * i}>
                  <Link
                    to={`/insights/${article.slug}`}
                    className={`group block h-full rounded-2xl p-8 md:p-10 border transition-colors ${
                      isDark
                        ? "bg-surface-dark border-white/10 hover:border-primary/40"
                        : "bg-card border-border hover:border-primary/40"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.3em] mb-5 ${
                        isDark ? "text-primary" : "text-primary"
                      }`}
                    >
                      {article.category}
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl font-medium leading-[1.15] mb-4 ${
                        isDark ? "text-white" : "text-foreground"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed mb-8 ${
                        isDark ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {article.excerpt}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                        isDark ? "text-white" : "text-foreground"
                      }`}
                    >
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;