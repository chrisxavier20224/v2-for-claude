import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import { blogPosts } from "@/data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <PageLayout>
      <SEO
        title="Blog — Integra Networks"
        description="Insights and guides on SD-WAN, Starlink, rural connectivity, and business internet solutions from Integra Networks."
        keywords="blog, SD-WAN, Starlink, connectivity, rural broadband, Integra Networks"
        url="/blog"
      />

      {/* Hero + Featured */}
      <section className="bg-surface-dark pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-display-sm md:text-display text-surface-dark-foreground mb-12">Blog</h1>
          </AnimatedSection>

          {/* Featured Post - Large + 2 Smaller */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Featured Large */}
            <AnimatedSection className="lg:col-span-3">
              <Link to={`/blog/${featured.slug}`} className="group block h-full">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <p className="text-xs text-surface-dark-muted mb-2">{featured.date}</p>
                    <h2 className="text-2xl md:text-3xl font-normal text-surface-dark-foreground mb-3 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-surface-dark-muted mb-4 flex-1">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                      Read Story <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Two smaller cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {rest.slice(0, 2).map((post, i) => (
                <AnimatedSection key={post.slug} delay={0.1 * (i + 1)} className="flex-1">
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs text-surface-dark-muted mb-2">{post.date}</p>
                        <h3 className="text-lg font-normal text-surface-dark-foreground mb-2 leading-snug flex-1">
                          {post.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground group-hover:text-primary transition-colors">
                          Read Story <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Remaining Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">More Articles</p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10">New Articles</h2>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rest.slice(2).map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="rounded-xl overflow-hidden border border-border bg-card h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-normal text-foreground mb-3 leading-snug flex-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Read Story <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground font-medium">
              Explore our connectivity solutions
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/check"
                  className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base rounded-md transition-colors"
                >
                  Check Availability
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default Blog;
