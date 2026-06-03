import InsightArticle, {
  NumberedSection,
  PullQuote,
  DataCallout,
  FounderInput,
} from "./InsightArticle";

const MultiSiteEstateArticle = () => (
  <InsightArticle slug="multi-site-business-connectivity">
    <NumberedSection number={1} title="A portfolio is a strategy, not a series of decisions">
      <p>
        A single office is a connectivity decision. A portfolio of fifteen,
        fifty, or two hundred sites is a connectivity <em>strategy</em> — and
        most organisations don't have one. What they have instead is a leased
        line provider, a patchwork of broadband contracts inherited through
        acquisitions, a few sites nobody can quite explain, and a recurring
        fire drill every time a location opens, moves, or closes.
      </p>
      <p>
        That's not a failure of effort. It's what happens when an estate is
        managed as a series of individual decisions rather than as a single
        system. The fix isn't more effort — it's a playbook.
      </p>
    </NumberedSection>

    <NumberedSection number={2} title="Every estate has its outliers">
      <p>
        Across any estate, most sites are straightforward — Fibre is
        available, the install is routine, the contract is renewable. But
        there is always a tail: the rural depot, the new-build with no duct in
        the ground, the site carrying a six-figure construction quote, the
        location that has to be live in two weeks because the lease starts
        then.
      </p>
      <FounderInput>
        A real ratio or example from a multi-site customer would land this
        hard — e.g. "across X sites we typically find Y are problem
        locations."
      </FounderInput>
      <p>
        The mistake isn't having outliers — every estate does. The mistake is
        treating every site as if it's standard, running the same process for
        all of them, and then scrambling when the outliers predictably don't
        fit. The outliers aren't the exception to plan around. They're the
        part of the plan that needs the most thought.
      </p>
    </NumberedSection>

    <NumberedSection number={3} title="The playbook">
      <p>
        <strong>Step one: audit and tier.</strong> Map the estate. For every
        site: what's the connectivity today, what's the contract status and
        renewal date, what does the site actually need, and is it a standard
        site or an outlier? You cannot plan an estate you have not tiered.
      </p>
      <p>
        <strong>Step two: standardise the majority.</strong> For the
        straightforward sites, pick a standard — a leased line or managed
        internet specification — and apply it consistently. Consistency is
        what makes an estate manageable: the same SLA, the same support
        route, the same monitoring, the same renewal rhythm. Every site you
        standardise is a site that stops needing individual attention.
      </p>
      <p>
        <strong>Step three: have a planned answer for the outliers.</strong>{" "}
        This is where most estates fall down. The outlier sites need a
        different tool — bonded SD-WAN where Fibre can't reach, Integra
        Bridge where a circuit is ordered but months out. The point isn't
        that the outliers need solving; it's that the answer should be{" "}
        <em>ready and pre-decided</em>, part of the playbook, not improvised
        under deadline pressure every time.
      </p>
      <p>
        <strong>Step four: manage it from one place.</strong> An estate
        spread across five providers isn't managed — it's monitored by
        nobody. More on this below.
      </p>
      <PullQuote>
        The outliers aren't the exception to plan around. They're the part of
        the plan that needs the most thought.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={4} title="One provider, one pane of glass">
      <p>
        The value of a single connectivity provider across an estate isn't
        procurement convenience, though that's real. It's that{" "}
        <em>someone has the whole picture</em> — every site's status, every
        contract date, every connection monitored from one place, one number
        to call when something needs sorting.
      </p>
      <p>
        An estate split across inherited providers has no single owner of the
        truth. When a site goes down, the question "who do we call" itself
        takes time to answer. When a contract auto-renews badly, nobody
        catches it. Consolidation isn't about the discount — it's about
        making the estate <em>visible</em>.
      </p>
      <DataCallout
        value="1 view"
        label="every site, every contract, every connection — monitored from one place"
      />
    </NumberedSection>

    <NumberedSection number={5} title="What good looks like">
      <p>
        A controlled estate has no surprises. Every site sits on a known
        connectivity tier. Every outlier has a planned, pre-decided solution.
        Every connection is monitored. And when a new location opens, it
        slots into the plan — the standard spec if it's a standard site, the
        outlier playbook if it isn't — instead of triggering a scramble.
      </p>
      <p>
        New sites go live on day one not because someone worked a miracle,
        but because the playbook already accounted for them. That's the
        difference between managing an estate and reacting to one.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default MultiSiteEstateArticle;
