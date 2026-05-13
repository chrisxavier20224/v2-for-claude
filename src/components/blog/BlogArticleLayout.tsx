import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { blogPosts } from "@/data/blogPosts";

interface BlogArticleLayoutProps {
  slug: string;
  children: React.ReactNode;
}

const BlogArticleLayout = ({ slug, children }: BlogArticleLayoutProps) => {
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts
    .filter((p) => p.slug !== slug && !p.archived)
    .slice(0, 3);

  if (!post) return null;

  return (
    <PageLayout>
      <SEO
        title={`${post.title} — Integra Networks`}
        description={post.excerpt}
        keywords={`${post.category}, connectivity, Integra Networks, blog`}
        url={`/blog/${post.slug}`}
        noIndex={post.archived}
      />
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `https://integra-networks.co.uk${post.image}`,
          datePublished: new Date(post.date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$1 $2 $3")).toISOString(),
          dateModified: new Date(post.date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$1 $2 $3")).toISOString(),
          author: {
            "@type": "Organization",
            name: "Integra Networks",
            url: "https://integra-networks.co.uk",
          },
          publisher: {
            "@type": "Organization",
            name: "Integra Networks",
            url: "https://integra-networks.co.uk",
            logo: {
              "@type": "ImageObject",
              url: "https://integra-networks.co.uk/integra-logo.svg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://integra-networks.co.uk/blog/${post.slug}`,
          },
          articleSection: post.category,
        }}
      />

      {/* Full-bleed Hero */}
      <section className="relative -mt-[73px] pt-[73px]">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
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

      {/* Article Content */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Reading time badge */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <Clock className="h-4 w-4" />
            <span>{post.category}</span>
            <span className="text-border">·</span>
            <span>{post.date}</span>
          </div>

          {/* Prose content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pt-8 prose-h2:border-t prose-h2:border-border/50
            prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:text-base
            prose-li:text-muted-foreground prose-li:leading-[1.8]
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-5 prose-ol:my-5
            prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic
            prose-img:rounded-xl prose-img:shadow-lg
            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
          ">
            {children}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Continue Reading
            </p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-10">
              More from the Blog
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.filter((p) => !p.archived).map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-primary/30 transition-colors duration-300">
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
                      {related.category} · {related.date}
                    </p>
                    <h3 className="text-base font-medium text-surface-dark-foreground leading-snug mb-3">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Connected</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Ready to solve your connectivity?
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Check availability in 90 seconds or speak to our team about the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogArticleLayout;
