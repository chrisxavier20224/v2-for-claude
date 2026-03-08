import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  published: boolean;
  published_at: string | null;
  author_name: string;
  created_at: string;
  updated_at: string;
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface UseBlogPostsOptions {
  categorySlug?: string;
  tagSlug?: string;
  searchQuery?: string;
}

export function useBlogPosts(options: UseBlogPostsOptions = {}) {
  const { categorySlug, tagSlug, searchQuery } = options;

  return useQuery({
    queryKey: ["blog-posts", categorySlug, tagSlug, searchQuery],
    queryFn: async (): Promise<BlogPost[]> => {
      let query = supabase
        .from("blog_posts")
        .select(`
          *,
          category:categories(id, name, slug),
          blog_posts_tags(
            tag:tags(id, name, slug)
          )
        `)
        .eq("published", true)
        .order("published_at", { ascending: false });

      // Filter by category
      if (categorySlug) {
        const { data: category } = await supabase
          .from("categories")
          .select("id")
          .eq("slug", categorySlug)
          .maybeSingle();
        
        if (category) {
          query = query.eq("category_id", category.id);
        }
      }

      // Filter by search query using full-text search
      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Transform the data to flatten tags
      let posts = (data || []).map((post) => ({
        ...post,
        tags: post.blog_posts_tags?.map((bpt: { tag: Tag }) => bpt.tag).filter(Boolean) || [],
      }));

      // Filter by tag if specified (done client-side since it's a junction table)
      if (tagSlug) {
        posts = posts.filter((post) => 
          post.tags.some((tag: Tag) => tag.slug === tagSlug)
        );
      }

      return posts;
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async (): Promise<BlogPost | null> => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          *,
          category:categories(id, name, slug),
          blog_posts_tags(
            tag:tags(id, name, slug)
          )
        `)
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;

      return {
        ...data,
        tags: data.blog_posts_tags?.map((bpt: { tag: Tag }) => bpt.tag).filter(Boolean) || [],
      };
    },
    enabled: !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (error) throw error;
      return data || [];
    },
  });
}

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async (): Promise<Tag[]> => {
      const { data, error } = await supabase
        .from("tags")
        .select("*")
        .order("name");

      if (error) throw error;
      return data || [];
    },
  });
}
