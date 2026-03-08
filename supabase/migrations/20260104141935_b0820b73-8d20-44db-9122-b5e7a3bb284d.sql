-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  author_name TEXT NOT NULL DEFAULT 'NEXR Team',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts_tags junction table for many-to-many relationship
CREATE TABLE public.blog_posts_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  UNIQUE(blog_post_id, tag_id)
);

-- Enable Row Level Security on all tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts_tags ENABLE ROW LEVEL SECURITY;

-- Public read access for published blog posts (no auth required)
CREATE POLICY "Anyone can view published posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Public read access for categories
CREATE POLICY "Anyone can view categories" 
ON public.categories 
FOR SELECT 
USING (true);

-- Public read access for tags
CREATE POLICY "Anyone can view tags" 
ON public.tags 
FOR SELECT 
USING (true);

-- Public read access for blog_posts_tags (for published posts)
CREATE POLICY "Anyone can view post tags" 
ON public.blog_posts_tags 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.blog_posts 
    WHERE blog_posts.id = blog_post_id 
    AND blog_posts.published = true
  )
);

-- Create index for full-text search on blog posts
CREATE INDEX idx_blog_posts_search ON public.blog_posts 
USING GIN (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(excerpt, '') || ' ' || coalesce(content, '')));

-- Create index for slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_categories_slug ON public.categories(slug);
CREATE INDEX idx_tags_slug ON public.tags(slug);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();