import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { insightArticles } from "./insights/insightsData";
import { blogPosts } from "@/data/blogPosts";

const Insights = () => {
  const featured = insightArticles.find((a) => a.featured) ?? insightArticles[0];
  const rest = insightArticles.filter((a) => a.slug !== featured.slug);

  return (
    <PageLayout hideCTA>
      <SEO
        title="Insights — Integra Networks"
        description="Points of view on business connectivity — the lead times, the trade-offs, and the decisions behind getting a site online."
        url="/insights"
      />

      {/* Page background wrapper with soft gradient + grid texture */}
      <div className="relative bg-background isolate">
        {/* Layered background — sits behind both sections */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* Soft top-to-bottom tonal wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(216 100% 50% / 0.04) 0%, hsl(0 0% 100% / 0) 18%, hsl(210 40% 96% / 0.6) 60%, hsl(216 100% 50% / 0.05) 100%)",
            }}
          />
          {/* Faint blue glow top-right */}
          <div className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
          {/* Faint blue glow bottom-left */}
          <div className="absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full bg-primary/[0.07] blur-[140px]" />
          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(222 47% 11%) 1px, transparent 1px), linear-gradient(to bottom, hsl(222 47% 11%) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
            }}
          />
        </div>

      {/* Header */}
      <section className="relative z-10 pt-24 pb-14 md:pt-36 md:pb-20">
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
      <section className="relative z-10 pb-28 md:pb-40">
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

              {/* Hero image (right half) */}
              {featured.heroImage && (
                <>
                  <img
                    src={featured.heroImage}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_11%)] via-[hsl(222_47%_11%)]/85 to-[hsl(222_47%_11%)]/30"
                  />
                </>
              )}

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
                    to={article.hrefOverride ?? `/insights/${article.slug}`}
                    className={`group block h-full rounded-2xl p-8 md:p-10 border relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                      isDark
                        ? "border-white/10 hover:border-primary/30 hover:shadow-primary/10"
                        : "border-border hover:border-primary/30 hover:shadow-primary/5"
                    }`}
                  >
                    {/* Thumbnail (16:9) */}
                    {article.heroImage && (
                      <div className="relative z-10 -mx-8 -mt-8 md:-mx-10 md:-mt-10 mb-7 aspect-[16/9] overflow-hidden">
                        <img
                          src={article.heroImage}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          aria-hidden
                          className={`absolute inset-0 ${
                            isDark
                              ? "bg-gradient-to-t from-[hsl(222_47%_11%)] via-[hsl(222_47%_11%)]/40 to-transparent"
                              : "bg-gradient-to-t from-card via-card/20 to-transparent"
                          }`}
                        />
                      </div>
                    )}

                    {/* Card background with motif */}
                    {isDark ? (
                      <>
                        <div className="absolute inset-0 bg-[hsl(222_47%_11%)]" />
                        {/* fibre-optic light strands */}
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

      {/* Guides — full list of blog posts to remove orphan status */}
      <section className="relative z-10 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Guides
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 max-w-2xl leading-tight">
              Practical guides on connectivity, Starlink, SD-WAN and rural broadband.
            </h2>
          </AnimatedSection>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 border-t border-border/60 pt-6">
            {blogPosts.map((post) => (
              <li key={post.slug} className="border-b border-border/40 py-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-[0.95rem] leading-snug font-medium">
                    {post.title}
                  </span>
                  <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA banner — sits inside the page gradient so it blends with the section above */}
      <section className="relative z-10 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-md bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-md bg-white/5" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Let's see what we can do for you
                </h2>
                <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                  Business connectivity in 10 working days — wherever fibre can't reach.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-surface-dark font-semibold h-12 px-8 text-base rounded-md hover:bg-white/90 transition-colors shadow-lg shrink-0"
              >
                Let's talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
};

export default Insights;
