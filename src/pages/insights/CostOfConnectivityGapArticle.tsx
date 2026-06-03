import InsightArticle, {
  NumberedSection,
  PullQuote,
  DataCallout,
  FounderInput,
} from "./InsightArticle";

const CostOfConnectivityGapArticle = () => (
  <InsightArticle slug="cost-of-business-internet-downtime">
    <NumberedSection number={1} title="The wait nobody budgets for">
      <p>
        Every connectivity project has a plan. The site is signed, the leased
        line or Fibre is ordered, the team has a move-in date. And then the
        install date comes back — around 10 weeks away.
      </p>
      <p>
        That gap between <em>needing</em> connectivity and <em>having</em> it
        is rarely costed. It doesn't appear on the project plan as a line
        item, it isn't in the budget, and because it has no owner, it gets
        absorbed silently — as "just how long these things take." But absorbed
        is not the same as free. The connectivity gap is one of the most
        expensive things a growing business routinely swallows, and the reason
        it stays expensive is that almost nobody puts a number on it.
      </p>
      <p>This piece is about putting a number on it.</p>
    </NumberedSection>

    <NumberedSection number={2} title="Where the lead time comes from">
      <p>
        A Fibre or leased line install isn't a single task — it's a chain of
        them. A desktop survey, then a physical survey, then planning. If the
        route crosses third-party land, a wayleave has to be negotiated — a
        process measured in weeks at best. If there's no duct in the ground,
        civils work has to be scheduled, and if that work is extensive, an
        excess construction charge lands on the quote that can run well into
        five figures.
      </p>
      <p>
        Each step has its own queue, and the queues don't overlap. An
        eight-week quote is the optimistic case — the one where nothing goes
        wrong. Complex or rural sites routinely run past 10 weeks.
      </p>
      <DataCallout value="10 weeks" label="typical lead time from order to live circuit" />
      <p>
        None of that is anyone's fault. It's the physics of building
        infrastructure. But "not your fault" and "not your problem" are
        different things — and the business waiting for the circuit owns the
        problem regardless of who owns the fault.
      </p>
    </NumberedSection>

    <NumberedSection number={3} title="The four costs of the gap">
      <p>
        The cost of the gap isn't one number. It's four, and they compound.
      </p>
      <p>
        <strong>Void cost.</strong> A commercial lease starts costing money
        the day it's signed — not the day the business can actually use the
        space.
      </p>
      <FounderInput>
        A typical commercial rent figure or a real example — e.g. "a 5,000 sq
        ft unit at £X/week" — makes this land.
      </FounderInput>
      <p>
        Every week a site sits unusable because it has no connectivity is rent
        paid for an asset that generates nothing.
      </p>
      <p>
        <strong>Productivity cost.</strong> A team that's moved into a site
        with no proper connectivity doesn't stop working — it improvises.
        Phone hotspots, a consumer 4G router on a windowsill, "work from home
        until it's sorted." It functions, just about. But video calls drop,
        large files crawl, cloud applications stall, and a building full of
        capable people operates at a fraction of its capacity — for weeks.
      </p>
      <p>
        <strong>Project cost.</strong> Connectivity is rarely the only thing
        happening. A site opening, a depot relocation, a multi-site rollout —
        each has dependencies, and a connectivity slip cascades through all
        of them. The fit-out is finished, the staff are hired and on payroll,
        and the entire project sits waiting on a circuit.
      </p>
      <p>
        <strong>Reputation cost.</strong> This one lands on a person. Whoever
        owns connectivity — usually the IT lead — is the one explaining the
        delay in every project meeting. They did everything right: ordered on
        time, chased diligently, escalated where they could. And they still
        spend two months saying "still waiting on the line." The cost here
        isn't operational; it's personal credibility, and it's the cost
        people remember.
      </p>
      <PullQuote>
        Absorbed is not the same as free. The connectivity gap is one of the
        most expensive things a growing business routinely swallows.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={4} title={`The "do nothing" option isn't free`}>
      <p>
        The instinct is to treat the wait as unavoidable — to absorb it
        because there's "no alternative." But absorbing it is a decision, and
        decisions have price tags. The error is comparing interim connectivity
        against zero, when the honest comparison is interim connectivity
        against the <em>loaded</em> cost of the gap — the void rent, the lost
        weeks of productivity, the slipped project, and the reputational drag,
        added together.
      </p>
      <FounderInput>
        A real before/after — e.g. the McGee outcome, "live in a week instead
        of three months", quantified — belongs here as the proof point.
      </FounderInput>
      <p>
        Measured that way, the maths usually isn't close. The gap is the
        expensive option; interim connectivity is the saving.
      </p>
    </NumberedSection>

    <NumberedSection number={5} title="What closing the gap looks like">
      <p>
        The fix isn't to make Fibre faster. Nobody can do that. The fix is to{" "}
        <em>decouple being online from the Fibre install</em> — to treat them
        as two separate problems instead of one.
      </p>
      <p>
        Interim connectivity — bonded 4G/5G and satellite, professionally
        surveyed and engineered for the specific site — can be live in around
        fourteen days while the permanent circuit is still being built. The
        business operates from day one. The lease stops being dead weight. The
        team works at full capacity. The project keeps its timeline. And when
        the Fibre finally lands, the interim connection isn't ripped out — it
        stays in place as automatic failover, so the resilience outlasts the
        gap it was brought in to close.
      </p>
      <DataCallout
        value="~10 working days"
        label="typical time to live on interim connectivity, vs. 10 weeks for the permanent circuit"
      />
      <p>
        That's the model behind Integra Bridge: get the business online now,
        let the Fibre catch up, and keep the resilience for good.
      </p>
      <p>
        The connectivity gap is a real cost, not a neutral wait. The next
        time a circuit comes back with a sixteen-week lead time, the question
        isn't "can we live with the wait." It's "what is the wait costing us —
        and is that more than the alternative?" For most businesses, once the
        sum is done honestly, it is.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default CostOfConnectivityGapArticle;