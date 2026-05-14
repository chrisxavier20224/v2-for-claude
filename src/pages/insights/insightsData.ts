export interface InsightArticleMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  tone?: "light" | "dark";
}

export const insightArticles: InsightArticleMeta[] = [
  {
    slug: "cost-of-the-connectivity-gap",
    category: "White Paper",
    title: "The Cost of the Connectivity Gap",
    excerpt:
      "What an eight-to-sixteen-week circuit lead time actually costs a business — and why nobody budgets for it.",
    featured: true,
    tone: "dark",
  },
  {
    slug: "decision-framework",
    category: "Decision Guide",
    title: "Leased Line vs SD-WAN vs Bridge: A Decision Framework",
    excerpt:
      "Three ways to connect a site, and a framework for matching each one to the requirement.",
    tone: "light",
  },
  {
    slug: "multi-site-estate",
    category: "Playbook",
    title: "Connecting the Multi-Site Estate",
    excerpt:
      "Every estate has problem sites. A playbook for planning for them instead of reacting.",
    tone: "dark",
  },
  {
    slug: "multi-bearer-connectivity",
    category: "Technical Brief",
    title: "Multi-Bearer Connectivity, Explained Properly",
    excerpt:
      "Bonded, load balanced, multi-bearer — what actually matters under the hood, in plain terms.",
    tone: "light",
  },
  {
    slug: "wholesale-connectivity-model",
    category: "Perspective",
    title: "The Wholesale Connectivity Model",
    excerpt:
      "Why alt-nets partner instead of build — the commercial case for the sites fibre can't reach.",
    tone: "dark",
  },
];

export const findInsight = (slug: string) =>
  insightArticles.find((a) => a.slug === slug);