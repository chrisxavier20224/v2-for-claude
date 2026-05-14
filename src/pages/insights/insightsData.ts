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
      "Every estate has problem sites. A playbook for planning for them instead of reacting to them.",
    tone: "dark",
    readingTime: "6 min read",
    whatsInside: [
      "A portfolio is a strategy, not a series of decisions",
      "Every estate has its outliers",
      "The playbook",
      "One provider, one pane of glass",
      "What good looks like",
    ],
    takeaways: [
      "A portfolio of sites is a connectivity strategy, not a series of one-off decisions — but most organisations treat it as the latter.",
      "Every estate has a tail of problem sites: rural, new-build, no duct, impossible timeline. The mistake is treating every site the same and scrambling when the outliers don't fit.",
      "The playbook: audit and tier, standardise the majority, have a planned answer for the outliers, and manage it all from one place.",
      "A controlled estate has no surprises — new sites slot into the plan instead of triggering a fire drill.",
    ],
    heroFigure:
      "\"The estate playbook\" — a visual of the four steps (audit & tier → standardise the majority → planned answer for outliers → single-pane management), or an estate map showing standard sites vs. outlier sites.",
  },
  {
    slug: "multi-bearer-connectivity",
    category: "Technical Brief",
    title: "Multi-Bearer Connectivity, Explained Properly",
    excerpt:
      "Bonded, load balanced, multi-bearer — what actually matters under the hood, in plain terms.",
    tone: "light",
    readingTime: "6 min read",
    whatsInside: [
      "The terms get used loosely",
      "Load balanced vs bonded — the real difference",
      "CGNAT, and why the static IP matters",
      "Engineered, not posted",
      "What to ask a provider",
    ],
    takeaways: [
      "\"SD-WAN,\" \"bonded,\" \"multi-bearer\" and \"load balanced\" get used interchangeably — they don't mean the same thing, and the differences decide whether the connection performs.",
      "Load balanced spreads sessions across carriers; bonded combines them into one pipe. Bonded also delivers a static public IP — which matters more than most buyers realise.",
      "CGNAT is the quiet dealbreaker: most 4G/5G connections can't accept inbound traffic at all. A bonded connection solves it structurally.",
      "Real-world performance is decided at the site, not on the datasheet — the survey and the antennas matter as much as the hardware.",
    ],
    heroFigure:
      "\"How a bonded multi-bearer connection works\" — a topology diagram: customer firewall → SD-WAN router → multiple 4G/5G carriers → cloud bonding server → internet via static IP.",
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
      "The quiet problem every alt-net has",
      "The strategic cost of saying no",
      "Build, or partner?",
      "What the wholesale model actually is",
      "The commercial case",
    ],
    takeaways: [
      "Every alt-net has the same quiet problem: a tail of sites its network can't economically reach.",
      "It might be four sites in fifty — but those four are where deals are lost, accounts churn, and the brand takes the hit.",
      "Building for the tail rarely makes economic sense; the capex lands against the lowest-volume part of the estate.",
      "Partnering closes the gap with no capex and no change to the core business — delivered under the alt-net's own brand.",
    ],
    heroFigure:
      "\"Four out of fifty\" — a simple visual: fifty site markers, forty-six served, four flagged as the tail — the four labelled as where deals are won or lost.",
  },
];

export const findInsight = (slug: string) =>
  insightArticles.find((a) => a.slug === slug);
