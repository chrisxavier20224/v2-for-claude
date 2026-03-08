import { useSearchParams } from "react-router-dom";
import { useCategories, useTags } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const BlogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: tags, isLoading: tagsLoading } = useTags();

  const activeCategory = searchParams.get("category");
  const activeTag = searchParams.get("tag");

  const handleCategoryClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (slug === null || slug === activeCategory) {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    params.delete("tag"); // Clear tag when changing category
    setSearchParams(params);
  };

  const handleTagClick = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === activeTag) {
      params.delete("tag");
    } else {
      params.set("tag", slug);
    }
    setSearchParams(params);
  };

  if (categoriesLoading || tagsLoading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-5 w-24 mb-3" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      {categories && categories.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryClick(null)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm transition-colors",
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm transition-colors",
                  activeCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant={activeTag === tag.slug ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer transition-colors",
                  activeTag === tag.slug
                    ? "bg-primary hover:bg-primary/90"
                    : "hover:bg-secondary/80"
                )}
                onClick={() => handleTagClick(tag.slug)}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
