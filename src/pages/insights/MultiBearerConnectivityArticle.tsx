import InsightArticle, {
  NumberedSection,
  PullQuote,
  DataCallout,
} from "./InsightArticle";
import { NetworkArchitectureSection } from "@/components/topology/NetworkArchitectureSection";

const MultiBearerConnectivityArticle = () => (
  <InsightArticle slug="multi-bearer-internet-failover">
    <NumberedSection number={1} title="The terms get used loosely">
      <p>
        If you're evaluating wireless connectivity for a business site, you'll
        hear "SD-WAN," "bonded," "multi-bearer," and "load balanced" used
        almost interchangeably. They are not the same thing — and the
        differences between them decide whether the connection you buy
        actually performs, or just looks good on a quote.
      </p>
      <p>
        This brief is the plain version: what these terms mean, what actually
        matters, and what to ask before you sign.
      </p>
    </NumberedSection>

    <div className="relative left-1/2 -translate-x-1/2 w-screen bg-surface-dark py-12 md:py-16 my-16 border-y border-white/10 text-white [&_section]:my-0 [&_h2]:text-white [&_p]:text-white/80 [&_p+p]:mt-6 [&_strong]:text-white [&_em]:text-white/90 [&_.border-border]:!border-white/15 [&_span.tabular-nums]:!text-white/40 [&_figcaption]:!text-primary [&_figcaption]:!font-bold">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
    <NumberedSection number={2} title="Load balanced vs bonded — the real difference">
      <p>
        Both approaches combine multiple carriers. The difference is{" "}
        <em>how</em> — and it's not a detail.
      </p>
      <NetworkArchitectureSection
        carriers={3}
        productName="Integra Ultrafast"
        bondedThroughputLabel="Up to 400 Mbps bonded"
        loadBalancedThroughputLabel="Up to 400 Mbps combined"
      />
      <p>
        <strong>Load balanced</strong> distributes traffic across carriers
        independently. Each session — a download, a call, a file transfer —
        uses one carrier at a time, and the SD-WAN router sends each new
        session down the least-congested path. It's efficient for a busy
        multi-user site where lots of people are doing lots of separate
        things, and it's lower cost because there's no aggregation server in
        the path.
      </p>
      <p>
        <strong>Bonded</strong> combines every carrier into encrypted tunnels
        through a cloud bonding server, creating one unified pipe. A single
        download uses the combined bandwidth of every carrier at once. It's
        the right answer when you need maximum single-session throughput —
        and, crucially, when you need what bonding makes possible: a real,
        static, public IP address.
      </p>
      <p>
        Neither is "better." Load balanced suits multi-user general office
        traffic at a lower price point; bonded suits sites that need
        single-pipe performance or inbound access. But you can't choose well
        if a provider uses the words interchangeably.
      </p>
    </NumberedSection>
      </div>
    </div>

    <NumberedSection number={3} title="CGNAT, and why the static IP matters">
      <p>
        Here's the issue most buyers don't know to ask about. Most 4G/5G
        connections sit behind carrier-grade NAT — CGNAT. Hundreds of
        customers share a single upstream public address. Outbound traffic
        works fine: the site browses, emails, reaches cloud services
        normally. But anything <em>inbound</em> — a VPN tunnel terminating at
        the site, port forwarding, a remote CCTV system, an IT team trying
        to reach their own kit — simply cannot get through. There is no
        public address to reach.
      </p>
      <DataCallout
        value="CGNAT"
        label="the reason most 4G/5G connections can't accept inbound traffic at all"
      />
      <p>
        A bonded connection solves this structurally. Because traffic routes
        through the provider's cloud bonding server, the site is handed a
        real, static, public IP on the way out. Inbound access behaves
        exactly as it would on a fibre leased line. If a site needs inbound
        access — and most business sites do, even when nobody mentions it
        upfront — that capability isn't a nice-to-have. It's the
        requirement.
      </p>
      <PullQuote>
        If a provider uses "bonded" and "load balanced" interchangeably, that
        tells you what you need to know.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={4} title="Engineered, not posted">
      <p>
        This is the part the spec sheets never cover, and it matters more
        than any line on them. A wireless connection's real-world
        performance is decided at the <em>site</em> — not in the datasheet.
      </p>
      <p>
        A capable router with internal antennas, sitting in a metal comms
        cabinet, will underperform badly — however strong the carrier signal
        is outside. The things that actually decide performance: a site
        survey that tests every carrier <em>before</em> anything is ordered;
        carrier-specific external antennas, positioned for that specific
        building; a proper router rather than a consumer device; and, where
        the optimal antenna position is far from the cabinet, running the
        cable to suit. The same hardware, engineered for the site versus
        shipped in a box, is the difference between a connection that
        performs and one that disappoints.
      </p>
    </NumberedSection>

    <NumberedSection number={5} title="What to ask a provider">
      <p>
        Six questions will tell you most of what you need to know:
      </p>
      <ul className="list-disc pl-6">
        <li>Do you survey the site and test carriers <em>before</em> quoting?</li>
        <li>Are the antennas external and carrier-specific?</li>
        <li>Is it load balanced or bonded — and which fits my workload?</li>
        <li>Do I get a static, public IP?</li>
        <li>Is the connection monitored 24/7, and by whom?</li>
        <li>What exactly happens when one carrier degrades or drops?</li>
      </ul>
      <p>
        If a provider can answer those clearly and specifically, you're
        talking to an engineering business. If they can't, the quote isn't
        worth comparing.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default MultiBearerConnectivityArticle;
