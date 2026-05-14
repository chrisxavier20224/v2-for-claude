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
    readingTime: "6 min read",
    whatsInside: [
      "The wait nobody budgets for",
      "Where the lead time comes from",
      "The four costs of the gap",
      "The \"do nothing\" option isn't free",
      "What closing the gap looks like",
    ],
    takeaways: [
      "The gap between ordering a circuit and having it live — typically 8–16 weeks — is a real cost, but it almost never appears as a line item, so nobody owns it.",
      "That cost has four components that compound: void rent, lost productivity, project slippage, and the reputational hit to whoever owns connectivity.",
      "\"Doing nothing\" and absorbing the wait is a choice with a price tag — not a neutral default.",
      "Costed honestly against the loaded cost of the gap, interim connectivity is almost always the cheaper option.",
    ],
    heroFigure:
      "\"Anatomy of the connectivity gap\" — a horizontal timeline from \"circuit ordered\" to \"circuit live\", with the four cost components (void rent, lost productivity, project slippage, reputational cost) stacked along the gap period.",
  },
  {
    slug: "decision-framework",
    category: "Decision Guide",
    title: "Leased Line vs SD-WAN vs Bridge: A Decision Framework",
    excerpt:
      "Three ways to connect a site, and a framework for matching each one to the requirement.",
    tone: "light",
    readingTime: "6 min read",
    whatsInside: [
      "The wrong question",
      "The three options",
      "The five decision factors",
      "The framework",
      "Why it's usually a combination",
    ],
    takeaways: [
      "\"Which is best\" is the wrong question — a leased line, bonded SD-WAN, and Integra Bridge solve different problems.",
      "Five factors decide the fit: lead time, location, workload, permanence, and resilience.",
      "The strongest estates rarely pick one product — they match each site to its requirement and layer resilience behind it.",
      "Where fibre is ordered but months away, the answer isn't \"wait\" — it's Bridge now, leased line later, Bridge stays as failover.",
    ],
    heroFigure:
      "\"The decision framework\" — a decision matrix or flow mapping site characteristics (lead-time need, fibre availability, permanence, workload, resilience need) to recommended option(s).",
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
