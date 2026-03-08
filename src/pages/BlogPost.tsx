import { useParams, Link, Navigate } from "react-router-dom";
import { format } from "date-fns";
import PageLayout from "@/components/layout/PageLayout";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import SEO from "@/components/shared/SEO";

// Insight articles with dedicated pages - redirect to custom pages
const INSIGHT_SLUGS = [
  'failure-prevention-starts-long-before-alarms',
  'sustainability-efficiency-critical-infrastructure'
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Redirect insight articles to their dedicated pages
  if (slug && INSIGHT_SLUGS.includes(slug)) {
    return <Navigate to={`/insights/${slug}`} replace />;
  }
  
  const { data: post, isLoading, error } = useBlogPost(slug || "");
  const { data: relatedPosts } = useBlogPosts({
    categorySlug: post?.category?.slug,
  });

  // Filter out current post from related posts
  const filteredRelatedPosts = relatedPosts
    ?.filter((p) => p.id !== post?.id)
    .slice(0, 2);

  if (isLoading) {
    return (
      <PageLayout>
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Skeleton className="h-4 w-32 mb-6" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-3/4 mb-8" />
            <div className="flex gap-4 mb-10">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </article>
      </PageLayout>
    );
  }

  if (error || !post) {
    return (
      <PageLayout>
        <div className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <h1 className="text-heading-2 text-foreground mb-4">
              Post not found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Insights
              </Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const publishedDate = post.published_at
    ? format(new Date(post.published_at), "MMMM d, yyyy")
    : null;

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-heading-2 text-foreground mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="text-heading-3 text-foreground mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground mb-2">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      } else if (trimmed.startsWith("- ")) {
        inList = true;
        listItems.push(trimmed.replace("- ", ""));
      } else if (trimmed === "") {
        flushList();
      } else {
        flushList();
        // Handle inline bold
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={i} className="text-foreground font-medium">
                    {part.replace(/\*\*/g, "")}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <PageLayout>
      <SEO
        title={post.title}
        description={post.excerpt || `${post.content.substring(0, 155)}...`}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.published_at || undefined}
        author={post.author_name}
        image={post.featured_image || undefined}
      />
      <article className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>

          {/* Insight Label */}
          <div className="mb-4">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Insight
            </span>
          </div>

          {/* Category */}
          {post.category && (
            <Link
              to={`/blog?category=${post.category.slug}`}
              className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              {post.category.name}
            </Link>
          )}

          {/* Title */}
          <h1 className="text-heading-1 md:text-display-sm text-foreground mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author_name}
            </span>
            {publishedDate && (
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.published_at || undefined}>{publishedDate}</time>
              </span>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag.id} to={`/blog?tag=${tag.slug}`}>
                    <Badge variant="secondary" className="hover:bg-secondary/80">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {filteredRelatedPosts && filteredRelatedPosts.length > 0 && (
        <section className="bg-gradient-section py-16 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-heading-2 text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredRelatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default BlogPost;
