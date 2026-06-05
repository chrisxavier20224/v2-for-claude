import InsightArticle, {
  NumberedSection,
  PullQuote,
} from "./InsightArticle";
import EstatePlaybook from "@/components/insights/EstatePlaybook";
import ISPFounderNote from "@/components/insights/ISPFounderNote";
import OneView from "@/components/insights/OneView";
import PartnerTestimonial from "@/components/insights/PartnerTestimonial";

const MultiSiteEstateArticle = () => (
  <InsightArticle slug="multi-site-business-connectivity">
    {/* Top-of-article visual: The Estate Playbook */}
    <EstatePlaybook />

    <NumberedSection number={1} title="A portfolio should have a strategy, not a series of independent decisions">
      <p>
        A single office is a connectivity decision. A portfolio of fifteen,
        fifty, or two hundred sites is a connectivity <em>strategy</em> — and
        most organisations do not have one. What they have instead is a
        leased line provider, a patchwork of broadband contracts inherited
        through acquisitions, a few sites nobody can quite explain, and a
        recurring fire drill every time a location opens, moves, or closes.
      </p>
      <p>
        That is not a failure of effort. It is what happens when an estate is
        managed as a series of individual decisions rather than as a single
        system. The fix is not more effort — it is a playbook.
      </p>
    </NumberedSection>

    <NumberedSection number={2} title="Every estate has its outliers">
      <p>
        Across any estate, most sites are straightforward — fibre is
        available, the install is routine, the contract is renewable. But
        there is always a tail: the rural depot, the new-build with no duct
        in the ground, the site carrying a six-figure construction quote, the
        location that has to be live in two weeks because the lease starts
        then.
      </p>
      <p>
        Often these remote or hard-to-reach sites end up being the most
        mission-critical — and having the most commercial value to the
        customer. A delayed depot holds up an entire distribution operation.
        A new branch that cannot trade on opening day costs real revenue, not
        just inconvenience. The outlier is not the low-stakes site. It is
        frequently the highest-stakes one.
      </p>
      <ISPFounderNote>
        Across multi-site deployments, we typically find that 10–15% of sites
        present a connectivity challenge that a standard leased line process
        cannot solve within the required timeline. That minority drives the
        majority of escalations, delays and account risk. Beyond the
        opportunity cost of account risk and constant customer
        dissatisfaction, the associated internal and external communications
        drive between 10 and 25% of additional cost.
      </ISPFounderNote>
      <p>
        The mistake is not having outliers — every estate does. The mistake
        is treating every site as if it is standard, running the same process
        for all of them, and then scrambling when the outliers predictably do
        not fit. The outliers are not the exception to plan around. They are
        the part of the plan that needs the most thought.
      </p>
    </NumberedSection>

    <NumberedSection number={3} title="The playbook">
      <p>
        <strong>Step one: audit and tier.</strong> Map the estate. For every
        site: what is the connectivity today, what is the contract status and
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
        different tool — bonded SD-WAN where fibre cannot reach, Integra
        Bridge where a circuit is ordered but months away. The point is not
        that the outliers need solving; it is that the answer should be{" "}
        <em>ready and pre-decided</em>, part of the playbook, not improvised
        under deadline pressure every time.
      </p>
      <p>
        <strong>Step four: manage it from one place.</strong> An estate
        spread across five providers is not managed — it is monitored by
        nobody. More on this in the next section.
      </p>
      <PullQuote>
        The outliers are not the exception to plan around. They are the part
        of the plan that needs the most thought.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={4} title="One provider, one pane of glass">
      <p>
        The value of a single connectivity provider across an estate is not
        procurement convenience, though that is real. It is that{" "}
        <em>someone has the whole picture</em> — every site's status, every
        contract date, every connection monitored from one place, one number
        to call when something needs sorting.
      </p>
      <p>
        An estate split across inherited providers has no single owner of the
        truth. When a site goes down, the question of who to call itself
        takes time to answer. When a contract auto-renews badly, nobody
        catches it. Consolidation is not about the discount — it is about
        making the estate <em>visible</em>, with problems addressed quickly.
      </p>
      <OneView />
      <PartnerTestimonial
        quote="One of our clients had a handful of sites across their estate where fibre simply couldn't reach — and satellite alone didn't give us the resilience we needed. Integra's SD-WAN delivered a reliable, multi-bearer solution quickly, solved a real problem, and kept the client happy. More than that — it let us close the estate out under one consistent solution, rather than leaving those sites as ongoing escalations."
        name="Lewis Ennew"
        title="Senior Account Manager"
        eyebrow="Account Manager"
      />
    </NumberedSection>

    <NumberedSection number={5} title="What good looks like">
      <p>
        A controlled estate has no surprises. Every site sits on a known
        connectivity tier. Every outlier has a planned, pre-decided solution.
        Every connection is monitored. And when a new location opens, it
        slots into the plan — the standard spec if it is a standard site,
        the outlier playbook if it is not — instead of triggering a scramble.
      </p>
      <p>
        New sites go live on day one not because someone worked a miracle,
        but because the playbook already accounted for them. That is the
        difference between managing an estate and reacting to one.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default MultiSiteEstateArticle;
