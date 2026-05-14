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
      <section className="bg-background pt-24 pb-14 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
              Insights
            </p>
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-foreground font-medium max-w-3xl leading-[1.05] tracking-tight">
              Points of view on business connectivity.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The lead times, the trade-offs, and the decisions behind getting a site online.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="bg-background pb-28 md:pb-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Featured */}
          <AnimatedSection>
            <Link
              to={`/insights/${featured.slug}`}
              className="group block relative overflow-hidden rounded-2xl border border-white/10 mb-10 md:mb-14 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
            >
              {/* Dark navy base with fibre-optic light motif */}
              <div className="absolute inset-0 bg-[hsl(222_47%_11%)]" />
              {/* Subtle light strand gradients */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 100% at 85% 50%, hsl(216 100% 50% / 0.15) 0%, transparent 60%),
                    radial-gradient(ellipse 40% 80% at 95% 30%, hsl(210 100% 60% / 0.08) 0%, transparent 50%),
                    radial-gradient(ellipse 50% 60% at 90% 70%, hsl(220 100% 55% / 0.06) 0%, transparent 50%)
                  `,
                }}
              />
              {/* Thin diagonal light lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `
                    linear-gradient(65deg, transparent 48%, hsl(216 100% 50% / 0.4) 49%, hsl(216 100% 50% / 0.4) 51%, transparent 52%),
                    linear-gradient(72deg, transparent 48%, hsl(210 100% 60% / 0.25) 49%, hsl(210 100% 60% / 0.25) 51%, transparent 52%),
                    linear-gradient(58deg, transparent 48%, hsl(220 100% 55% / 0.2) 49%, hsl(220 100% 55% / 0.2) 51%, transparent 52%)
                  `,
                  backgroundSize: "200% 200%, 180% 180%, 220% 220%",
                  backgroundPosition: "70% 30%, 80% 20%, 65% 35%",
                }}
              />
              {/* Soft glow orbs */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />

              {/* Oversized decorative category label on the right */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
                <span
                  className="text-[8rem] xl:text-[10rem] font-bold leading-none tracking-tighter opacity-[0.04] select-none whitespace-nowrap"
                  style={{
                    color: "hsl(216 100% 50%)",
                    transform: "rotate(-6deg)",
                  }}
                >
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-10 md:p-16 max-w-3xl">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  {featured.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-6">
                  {featured.title}
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                  Read <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            {rest.map((article, i) => {
              const isDark = article.tone === "dark";
              return (
                <AnimatedSection key={article.slug} delay={0.05 * i}>
                  <Link
                    to={`/insights/${article.slug}`}
                    className={`group block h-full rounded-2xl p-8 md:p-10 border relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                      isDark
                        ? "border-white/10 hover:border-primary/30 hover:shadow-primary/10"
                        : "border-border hover:border-primary/30 hover:shadow-primary/5"
                    }`}
                  >
                    {/* Card background with motif */}
                    {isDark ? (
                      <>
                        <div className="absolute inset-0 bg-[hsl(222_47%_11%)]" />
                        {/* Fibre-optic light strands */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-25"
                          style={{
                            background: `
                              radial-gradient(ellipse 50% 100% at 100% 50%, hsl(216 100% 50% / 0.12) 0%, transparent 55%),
                              radial-gradient(ellipse 30% 70% at 90% 20%, hsl(210 100% 60% / 0.06) 0%, transparent 45%)
                            `,
                          }}
                        />
                        {/* Thin light lines */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: `
                              linear-gradient(60deg, transparent 48.5%, hsl(216 100% 50% / 0.35) 49.5%, hsl(216 100% 50% / 0.35) 50.5%, transparent 51.5%),
                              linear-gradient(70deg, transparent 48.5%, hsl(210 100% 60% / 0.2) 49.5%, hsl(210 100% 60% / 0.2) 50.5%, transparent 51.5%)
                            `,
                            backgroundSize: "250% 250%, 200% 200%",
                            backgroundPosition: "80% 20%, 85% 15%",
                          }}
                        />
                        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-card" />
                        {/* Subtle tonal treatment — faint line motif */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.035]"
                          style={{
                            backgroundImage: `
                              repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 24px,
                                hsl(216 100% 50% / 0.15) 24px,
                                hsl(216 100% 50% / 0.15) 24.5px
                              ),
                              repeating-linear-gradient(
                                -45deg,
                                transparent,
                                transparent 36px,
                                hsl(216 100% 50% / 0.08) 36px,
                                hsl(216 100% 50% / 0.08) 36.5px
                              )
                            `,
                            backgroundSize: "120% 120%",
                          }}
                        />
                        {/* Soft corner glow */}
                        <div
                          className="pointer-events-none absolute top-0 right-0 h-40 w-40 opacity-40"
                          style={{
                            background: "radial-gradient(circle at 100% 0%, hsl(216 100% 50% / 0.06) 0%, transparent 70%)",
                          }}
                        />
                        {/* Hover background shift */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: "radial-gradient(ellipse 80% 60% at 20% 80%, hsl(216 100% 50% / 0.04) 0%, transparent 60%)",
                          }}
                        />
                      </>
                    )}

                    {/* Content */}
                    <div className="relative">
                      <span
                        className={`inline-block text-[11px] font-semibold uppercase tracking-[0.2em] rounded-full px-4 py-1.5 mb-5 border ${
                          isDark
                            ? "text-primary bg-primary/10 border-primary/20"
                            : "text-primary bg-primary/5 border-primary/15"
                        }`}
                      >
                        {article.category}
                      </span>
                      <h3
                        className={`text-2xl md:text-[1.75rem] font-medium leading-[1.15] mb-4 ${
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
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${
                          isDark ? "text-white" : "text-foreground"
                        }`}
                      >
                        Read{" "}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
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
