import InsightArticle, {
  NumberedSection,
  PullQuote,
  DataCallout,
  FounderInput,
} from "./InsightArticle";

const DecisionFrameworkArticle = () => (
  <InsightArticle slug="decision-framework">
    <NumberedSection number={1} title="The wrong question">
      <p>
        When a site needs connectivity, the instinct is to ask "which option is
        best?" It's the wrong question — and asking it leads to bad decisions,
        because it assumes there's a winner.
      </p>
      <p>
        There isn't. A leased line, bonded SD-WAN, and Integra Bridge aren't
        competing for the same slot. They solve different problems, on
        different timelines, for different kinds of site. The useful question
        isn't "which is best" — it's "which fits <em>this</em> site, given what
        it needs and when it needs it." This piece is a framework for
        answering that.
      </p>
    </NumberedSection>

    <NumberedSection number={2} title="The three options">
      <p>
        <strong>Leased line.</strong> A dedicated fibre circuit — symmetric,
        uncontended, SLA-backed. The gold standard for a permanent site that
        can't afford downtime. Its weaknesses are lead time and, where civils
        are involved, an excess construction charge that can run into five
        figures.
      </p>
      <p>
        <strong>Bonded SD-WAN.</strong> Multiple 4G/5G carriers combined into
        one resilient connection — load balanced or bonded. Live in around
        fourteen days, with no Openreach dependency. The right answer where
        fibre can't reach a site, takes too long to install, or costs too much
        to bring in.
      </p>
      <p>
        <strong>Integra Bridge.</strong> Bonded Starlink and 5G/4G delivered
        over Layer 2 from our data centre — enterprise-grade connectivity in
        around ten days, purpose-built for the gap while a permanent circuit
        is being constructed. When the fibre lands, Bridge doesn't get
        removed; it stays on as automatic failover.
      </p>
    </NumberedSection>

    <NumberedSection number={3} title="The five decision factors">
      <p>
        Five questions decide the fit. Run a site through all five and the
        answer usually resolves itself.
      </p>
      <p>
        <strong>Lead time.</strong> When does the site actually need to be
        live? If the answer is "before the leased line install date" — and it
        often is — then the immediate decision isn't a leased-line decision at
        all. It's a Bridge or SD-WAN decision, very possibly running{" "}
        <em>alongside</em> the leased line order rather than instead of it.
      </p>
      <p>
        <strong>Location.</strong> Can fibre reach the site economically? A
        quote that comes back with a heavy excess construction charge, or
        stalls on a wayleave, isn't a reason to wait — it's a signal that
        SD-WAN has stopped being the compromise and become the better primary.
      </p>
      <p>
        <strong>Workload.</strong> What actually runs on the connection?
      </p>
      <FounderInput>
        A line on how Integra assesses workload — user counts, cloud
        dependency, inbound-access needs — would sharpen this.
      </FounderInput>
      <p>
        A site that needs inbound access — VPNs terminating on-site, CCTV,
        remote support — needs a static IP, which points firmly toward a
        leased line or a bonded configuration rather than a basic
        load-balanced setup.
      </p>
      <p>
        <strong>Permanence.</strong> Forever site, or temporary one? A
        construction site that relocates every six months is never a
        leased-line decision — the circuit would be obsolete before it paid
        back. A head office is the opposite. Match the contract length and the
        technology to the life of the site.
      </p>
      <p>
        <strong>Resilience.</strong> Single circuit, or no single point of
        failure? This is the factor most often skipped. Any of the three
        options can serve as a primary; any can serve as a backup. The
        strongest sites run a primary circuit <em>and</em> an independent
        wireless connection that fails over automatically — so the question
        isn't only "what's the primary," it's "what's behind it."
      </p>
      <PullQuote>
        The useful question isn't "which is best." It's "which fits this site,
        given what it needs and when it needs it."
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={4} title="The framework">
      <p>Run those factors and most decisions resolve cleanly:</p>
      <ul>
        <li>Permanent site, fibre available, timeline works → leased line.</li>
        <li>
          Permanent site, fibre can't reach or costs too much → bonded SD-WAN
          as the primary.
        </li>
        <li>
          Permanent site, fibre ordered but months away → Bridge now, leased
          line later, Bridge stays as failover.
        </li>
        <li>Temporary or moving site → SD-WAN, every time.</li>
        <li>
          Any site that genuinely can't go dark → a primary circuit{" "}
          <em>plus</em> an independent wireless failover, whatever the primary
          is.
        </li>
      </ul>
      <DataCallout
        value="5 factors"
        label="lead time, location, workload, permanence, resilience — the questions that decide the fit"
      />
    </NumberedSection>

    <NumberedSection number={5} title="Why it's usually a combination">
      <p>
        Here's the part the "which is best" framing misses entirely: for
        anything bigger than a single site, the right answer is almost never
        one product.
      </p>
      <p>
        An estate has a head office that warrants a leased line, regional
        sites where SD-WAN is the sensible primary, a new location where
        Bridge covers the gap until fibre arrives, and a temporary site that
        will only ever be wireless. A connectivity <em>strategy</em> isn't
        picking a winner — it's matching each site to what it needs, and
        layering the right resilience behind each one.
      </p>
      <p>
        The job of the framework isn't to crown a product. It's to make every
        individual decision quick, defensible, and right for that site.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default DecisionFrameworkArticle;
