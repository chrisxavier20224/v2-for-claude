import downtimeHeroAsset from "@/assets/insights/downtime-hero.jpg.asset.json";
import downtimeOg from "@/assets/insights/downtime-og.jpg";
import chooseHeroAsset from "@/assets/insights/choose-hero.jpg.asset.json";
import chooseOg from "@/assets/insights/choose-og.jpg";
import multisiteHeroAsset from "@/assets/insights/multisite-hero.jpg.asset.json";
import multisiteOg from "@/assets/insights/multisite-og.jpg";
import wholesaleHero from "@/assets/wholesale/sales-team-bg.png";
import wholesaleOg from "@/assets/insights/wholesale-og.jpg";
import alternativesOg from "@/assets/insights/alternatives-og.jpg";
import multibearerHeroAsset from "@/assets/insights/multibearer-hero.jpg.asset.json";
import alternativesHeroAsset from "@/assets/insights/alternatives-hero.jpg.asset.json";

const multibearerHero = multibearerHeroAsset.url;
const multisiteHero = multisiteHeroAsset.url;
const alternativesHero = alternativesHeroAsset.url;
const downtimeHero = downtimeHeroAsset.url;
const chooseHero = chooseHeroAsset.url;

export interface InsightArticleMeta {
  slug: string;
  category: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  featured?: boolean;
  tone?: "light" | "dark";
  readingTime?: string;
  whatsInside?: string[];
  takeaways?: string[];
  heroFigure?: string;
  heroImage?: string;
  ogImage?: string;
  /**
   * Override the default `/insights/${slug}` link target. Used for articles
   * that live in the insights family but at a legacy SEO-preserved URL.
   */
  hrefOverride?: string;
  cta?: {
    headline: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
    contactLine?: string;
  };
}

export const insightArticles: InsightArticleMeta[] = [
  {
    slug: "cost-of-business-internet-downtime",
    category: "White Paper",
    title: "The True Cost of Business Internet Downtime",
    excerpt:
      "What business internet downtime — including the eight-to-sixteen-week wait for a new circuit — actually costs, and why nobody budgets for it.",
    featured: true,
    tone: "dark",
    readingTime: "6 min read",
    whatsInside: [
      "The wait nobody budgets for",
      "Where the lead time comes from",
      "The four costs of the Connectivity Gap",
      "The \"do nothing\" option is not free",
      "What closing the Connectivity Gap looks like",
    ],
    takeaways: [
      "The Connectivity Gap between ordering a circuit and having it live — typically 10 weeks — is a real cost, but it almost never appears as a line item, so nobody owns it.",
      "That cost has four components that compound: void rent, lost productivity, project slippage, and the reputational hit to whoever owns connectivity.",
      "\"Doing nothing\" and absorbing the wait is a choice with a price tag — not a neutral default.",
      "Costed honestly against the loaded cost of the Connectivity Gap, interim connectivity is almost always the cheaper option.",
    ],
    heroFigure:
      "\"Anatomy of the Connectivity Gap\" — a horizontal timeline from \"circuit ordered\" to \"circuit live\", with the four cost components (void rent, lost productivity, project slippage, reputational cost) stacked along the gap period.",
    heroImage: downtimeHero,
    ogImage: downtimeOg,
  },
  {
    slug: "alternatives-to-fibre-broadband",
    category: "Guide",
    title: "Alternatives to fibre Broadband",
    seoTitle: "Alternatives to fibre Broadband",
    excerpt:
      "Five viable options for UK businesses where fibre hasn't reached — Starlink, 4G/5G, FWA, Leased Line, Hybrid. Honest comparison.",
    tone: "light",
    readingTime: "8 min read",
    heroImage: alternativesHero,
    ogImage: alternativesOg,
    hrefOverride: "/alternatives-to-fibre-broadband",
  },
  {
    slug: "how-to-choose-business-broadband",
    category: "Decision Guide",
    title: "How to Choose Business Broadband: Leased Line vs SD-WAN vs Integra Bridge",
    seoTitle: "How to Choose Business Broadband: Leased Line vs SD-WAN vs Integra Bridge",
    excerpt:
      "A practical guide to choosing the right business broadband — leased line, SD-WAN or Integra Bridge — and matching each one to the site.",
    tone: "light",
    readingTime: "6 min read",
    whatsInside: [
      "The wrong question",
      "The three options",
      "The five decision factors",
      "The framework",
      "Why it is usually a combination",
    ],
    takeaways: [
      "\"Which is best\" is the wrong question — a leased line, bonded SD-WAN, and Integra Bridge solve different problems.",
      "Five factors decide the fit: lead time, location, workload, permanence, and resilience.",
      "The strongest estates rarely pick one product — they match each site to its requirement and layer resilience behind it.",
      "Where fibre is ordered but months away, the answer is not \"wait\" — it is Integra Bridge now, leased line later, Integra Bridge stays as failover.",
    ],
    heroFigure:
      "\"The decision framework\" — a decision matrix or flow mapping site characteristics (lead-time need, fibre availability, permanence, workload, resilience need) to recommended option(s).",
    heroImage: chooseHero,
    ogImage: chooseOg,
  },
  {
    slug: "multi-site-business-connectivity",
    category: "Playbook",
    title: "Multi-Site Business Connectivity: Planning for the Problem Sites",
    seoTitle: "Multi-Site Business Connectivity: Planning for the Problem Sites",
    excerpt:
      "Multi-site business connectivity should be approached as a strategy, not a series of one-off decisions. A playbook for planning for the problem sites instead of reacting to them.",
    tone: "dark",
    readingTime: "6 min read",
    whatsInside: [
      "A portfolio should have a strategy, not a series of independent decisions",
      "Every estate has its outliers",
      "The playbook",
      "One provider, one pane of glass",
      "What good looks like",
    ],
    takeaways: [
      "A portfolio of sites should have a connectivity strategy, not a series of one-off decisions — most organisations treat it as the latter.",
      "Every estate has a tail of problem sites: rural, new-build, unreasonable delivery timeline. Often these are the most commercially important sites in the estate.",
      "The playbook: audit and tier every site, standardise the majority, have a pre-decided answer for the outliers, manage it all from one place.",
      "A controlled estate has no surprises — new sites slot into the plan instead of triggering a fire drill.",
    ],
    cta: {
      headline: "Got an estate that needs sorting?",
      body: "We map estates, plan for the outliers, and manage everything from one place. Tell us about yours and we will walk you through what good could look like.",
      buttonLabel: "Book an estate review",
      buttonHref: "/contact",
      contactLine: "connect@integra-networks.co.uk  |  0203 388 7111  |  integra-networks.co.uk",
    },
    heroImage: multisiteHero,
    ogImage: multisiteOg,
  },
  {
    slug: "multi-bearer-internet-failover",
    category: "Technical Brief",
    title: "Multi-Bearer Internet Failover and Redundancy, Explained Properly",
    seoTitle: "Multi-Bearer Internet Failover & Redundancy Explained",
    excerpt:
      "Bonded, load balanced, multi-bearer failover — what actually matters for internet redundancy, in plain terms.",
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
    heroImage: multibearerHero,
    ogImage: multibearerHero,
  },
  {
    slug: "wholesale-isp-partner-program",
    category: "Perspective",
    title: "The Wholesale ISP Partner Program",
    seoTitle: "The Wholesale ISP Partner Program",
    excerpt:
      "Why alt-nets and MSPs partner with Integra instead of building — the commercial case for the sites fibre cannot reach.",
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
      "Every alt-net has the same quiet problem: a tail of sites its network cannot economically reach.",
      "It might be four sites in fifty — but those four are where deals are lost, accounts churn, and the brand takes the hit.",
      "Even when you refer the tail to a third-party ISP, that ISP faces the same economics. The site is hard to reach for a reason.",
      "Partnering can close the gap with no capex, no change to the core business — delivered under your own brand.",
    ],
    cta: {
      headline: "Got sites your network cannot reach?",
      body: "Getting the awkward sites online is what we do. Tell us how we can help you close the gap.",
      buttonLabel: "Talk to our partner team",
      buttonHref: "/wholesale",
      contactLine: "connect@integra-networks.co.uk  |  0203 388 7111  |  integra-networks.co.uk/wholesale",
    },
    heroImage: wholesaleHero,
    ogImage: wholesaleOg,
  },
];

export const findInsight = (slug: string) =>
  insightArticles.find((a) => a.slug === slug);
