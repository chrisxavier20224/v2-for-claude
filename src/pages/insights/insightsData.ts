export interface InsightArticleMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  tone?: "light" | "dark";
  readingTime?: string;
  whatsInside?: string[];
  takeaways?: string[];
  heroFigure?: string;
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
    readingTime: "9 min read",
    whatsInside: [
      "The hidden cost line nobody puts in the budget",
      "Why lead times are getting longer, not shorter",
      "What 'connected' actually means to operations",
      "How to price a fortnight without internet",
    ],
    takeaways: [
      "A typical leased line lead time is 8–16 weeks; the operational cost of waiting is rarely modelled.",
      "Connectivity gaps don't just delay revenue — they reshape how a site opens, hires and trades.",
      "Interim multi-bearer connectivity converts a fixed-cost wait into a variable-cost bridge.",
      "The cheapest circuit is usually the one that arrives on time.",
    ],
    heroFigure: "Timeline showing typical leased line install vs interim bridge coverage",
  },
  {
    slug: "decision-framework",
    category: "Decision Guide",
    title: "Leased Line vs SD-WAN vs Bridge: A Decision Framework",
    excerpt:
      "Three ways to connect a site, and a framework for matching each one to the requirement.",
    tone: "light",
    readingTime: "8 min read",
    whatsInside: [
      "When a leased line is genuinely the right answer",
      "Where SD-WAN earns its keep",
      "What a Bridge solution is really for",
      "A simple decision tree by site profile",
    ],
    takeaways: [
      "There is no universally 'best' circuit — only the right one for the site, timeline and risk profile.",
      "Leased lines are the gold standard for permanence; they are the wrong tool for urgency.",
      "SD-WAN turns multiple imperfect bearers into one resilient connection.",
      "Bridge solutions exist for the in-between: temporary, awkward, or fibre-deferred sites.",
    ],
    heroFigure: "Decision tree: site profile → recommended connectivity model",
  },
  {
    slug: "multi-site-estate",
    category: "Playbook",
    title: "Connecting the Multi-Site Estate",
    excerpt:
      "Every estate has problem sites. A playbook for planning for them instead of reacting.",
    tone: "dark",
    readingTime: "10 min read",
    whatsInside: [
      "Why 4 in 50 sites cause 80% of the IT pain",
      "Surveying an estate before procurement",
      "Designing a tiered connectivity standard",
      "Operating model: who owns what, when",
    ],
    takeaways: [
      "Most estates are fine — the work is in the small minority of awkward sites.",
      "Standardising tiers (A/B/C) is more useful than standardising one product.",
      "Procurement that ignores survey data buys the wrong circuits at the wrong sites.",
      "A multi-site estate needs a connectivity policy, not a connectivity contract.",
    ],
    heroFigure: "Estate map: tiered connectivity standards across site profiles",
  },
  {
    slug: "multi-bearer-connectivity",
    category: "Technical Brief",
    title: "Multi-Bearer Connectivity, Explained Properly",
    excerpt:
      "Bonded, load balanced, multi-bearer — what actually matters under the hood, in plain terms.",
    tone: "light",
    readingTime: "7 min read",
    whatsInside: [
      "What 'bearer' really means",
      "Bonding vs load balancing vs failover",
      "Why aggregate throughput is the wrong KPI",
      "What good multi-bearer design looks like",
    ],
    takeaways: [
      "Bonding and load balancing are not the same thing — and the difference matters per workload.",
      "More bearers don't automatically mean more throughput; design dictates outcome.",
      "Diversity of carrier matters more than count of carriers.",
      "The headline number is rarely the number that runs your business.",
    ],
    heroFigure: "Architecture: multi-bearer router with diverse carrier paths and SD-WAN overlay",
  },
  {
    slug: "wholesale-connectivity-model",
    category: "Perspective",
    title: "The Wholesale Connectivity Model",
    excerpt:
      "Why alt-nets partner instead of build — the commercial case for the sites fibre can't reach.",
    tone: "dark",
    readingTime: "6 min read",
    whatsInside: [
      "The economics of the un-served 8%",
      "Why building everywhere doesn't pencil",
      "How a wholesale partnership actually works",
      "What MSPs and alt-nets keep, and what they hand off",
    ],
    takeaways: [
      "No alt-net's footprint covers every customer site — and trying to is uneconomic.",
      "Wholesale is the rational answer to the long tail of awkward addresses.",
      "Partners keep the customer relationship; we run the engine room.",
      "Two-minute deal registration is the operating habit that makes it scale.",
    ],
    heroFigure: "Coverage map vs customer footprint — the gap a wholesale partner closes",
  },
];

export const findInsight = (slug: string) =>
  insightArticles.find((a) => a.slug === slug);
