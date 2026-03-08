import { Link } from "react-router-dom";
import { format } from "date-fns";
import { BlogPost } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

// Insight articles with dedicated pages
const INSIGHT_SLUGS = [
  'failure-prevention-starts-long-before-alarms',
  'sustainability-efficiency-critical-infrastructure'
];

const BlogCard = ({ post }: BlogCardProps) => {
  const publishedDate = post.published_at 
    ? format(new Date(post.published_at), "MMM d, yyyy")
    : null;

  // Route to insight page if it's a dedicated insight article
  const postUrl = INSIGHT_SLUGS.includes(post.slug) 
    ? `/insights/${post.slug}` 
    : `/blog/${post.slug}`;

  return (
    <article className="group glass-card-hover rounded-lg overflow-hidden h-full flex flex-col relative">
      {/* Featured Image */}
      {post.featured_image && (
        <Link to={postUrl} className="block aspect-[16/9] overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
      
      <div className="p-6 flex flex-col flex-1">
        {/* Insight Label */}
        <div className="mb-3">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Insight
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
          {post.category && (
            <Link 
              to={`/blog?category=${post.category.slug}`}
              className="text-primary hover:underline"
            >
              {post.category.name}
            </Link>
          )}
          {post.category && publishedDate && (
            <span className="text-border">•</span>
          )}
          {publishedDate && (
            <time dateTime={post.published_at || undefined}>{publishedDate}</time>
          )}
        </div>
        
        <Link to={postUrl} className="block flex-1">
          <h2 className="text-heading-3 text-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          
          {post.excerpt && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Link key={tag.id} to={`/blog?tag=${tag.slug}`}>
                  <Badge variant="secondary" className="text-xs hover:bg-secondary/80">
                    {tag.name}
                  </Badge>
                </Link>
              ))}
              {post.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{post.tags.length - 2}
                </Badge>
              )}
            </div>
          )}
          
          <Link 
            to={postUrl}
            className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Read <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
