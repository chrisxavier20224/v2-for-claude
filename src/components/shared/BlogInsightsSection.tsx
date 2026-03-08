import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { format } from "date-fns";

const BlogInsightsSection = () => {
  const { data: posts, isLoading } = useBlogPosts();
  
  // Take up to 3 most recent posts
  const recentPosts = posts?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg overflow-hidden card-light border animate-pulse">
            <div className="aspect-[16/9] bg-muted" />
            <div className="p-6">
              <div className="h-4 bg-muted rounded w-1/3 mb-4" />
              <div className="h-6 bg-muted rounded w-full mb-3" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
      {recentPosts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="group block rounded-lg overflow-hidden card-light border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
        >
          {/* Featured Image */}
          {post.featured_image && (
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {post.published_at && (
              <p className="text-sm text-muted-foreground mb-3">
                {format(new Date(post.published_at), "MMMM d, yyyy")}
              </p>
            )}
            <h3 className="text-heading-4 text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center text-sm font-medium text-primary">
              Read insight
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogInsightsSection;
