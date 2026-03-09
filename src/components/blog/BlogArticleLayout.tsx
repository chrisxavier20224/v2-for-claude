import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import { blogPosts } from "@/data/blogPosts";

interface BlogArticleLayoutProps {
  slug: string;
  children: React.ReactNode;
}

const BlogArticleLayout = ({ slug, children }: BlogArticleLayoutProps) => {
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) return null;

  return (
    <PageLayout>
      <SEO
        title={`${post.title} — Integra Networks`}
        description={post.excerpt}
        keywords={`${post.category}, connectivity, Integra Networks, blog`}
        url={`/blog/${post.slug}`}
      />

      {/* Full-bleed Hero with image behind navbar */}
      <section className="relative -mt-[73px] pt-[73px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Multi-stop gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-32">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              {post.category} · {post.date}
            </p>
            <h1 className="text-heading-1 md:text-display-sm text-white max-w-3xl mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content with proper prose styling */}
      <Section size="large">
        <div className="mx-auto max-w-3xl prose prose-lg prose-slate dark:prose-invert
          prose-headings:font-normal prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:my-4 prose-ol:my-4
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        ">
          {children}
        </div>
      </Section>

      {/* Related Posts */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Continue Reading
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-surface-dark-foreground mb-10">
              More from the Blog
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-surface-dark-muted mb-2">
                      {related.date}
                    </p>
                    <h3 className="text-base font-normal text-surface-dark-foreground leading-snug mb-3">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                      Read Story <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(216 100% 50%)" />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Unlock the Power of Integra SD-WAN
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base"
                >
                  <Link to="/availability-checker">Check Availability</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default BlogArticleLayout;
