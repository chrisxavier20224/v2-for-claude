import InsightArticle, {
  NumberedSection,
  PullQuote,
  DataCallout,
  FounderInput,
} from "./InsightArticle";

const WholesaleConnectivityModelArticle = () => (
  <InsightArticle slug="wholesale-connectivity-model">
    <NumberedSection number={1} title="The quiet problem every alt-net has">
      <p>
        Every alt-net has the same quiet problem. The network reaches most of
        the addresses it needs to — but not all of them. There is always a
        tail: the sites fibre can't economically reach, the locations where
        the lead time is unworkable, the customer who needs an emergency
        solution faster than the network can deliver one.
      </p>
      <p>
        Out of fifty sites a salesperson is working, it might only be four.
        Four out of fifty sounds like a rounding error — easy to wave away as
        edge cases not worth the engineering attention. But those four are
        not a rounding error. They are where deals are lost, where accounts
        start looking elsewhere, and where the brand quietly takes the hit
        for infrastructure decisions made years ago.
      </p>
    </NumberedSection>

    <NumberedSection number={2} title="The strategic cost of saying no">
      <p>
        The instinct is to treat the tail as edge cases — not worth the
        capital to solve. But "not worth building for" and "not worth
        winning" are two completely different statements, and conflating
        them is the expensive mistake.
      </p>
      <FounderInput>
        A sense of typical deal value, or the cost of an account churning
        when one site can't be served, would give this section real weight.
      </FounderInput>
      <p>
        Saying no to a problem site is not a neutral act. It loses that deal
        — and often the wider account, because a customer who can't be
        served on one location starts wondering who <em>can</em> serve all
        of them. And it trains the market: the next time that customer, or
        someone in their network, has a requirement, the alt-net that said
        "we can't help with that one" isn't the first call. The cost of the
        four sites was never the four sites. It's what saying no to them
        signals about the brand.
      </p>
      <PullQuote>
        "Not worth building for" and "not worth winning" are two completely
        different statements. Conflating them is the expensive mistake.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={3} title="Build, or partner?">
      <p>
        An alt-net could, of course, build for the tail. But the economics
        rarely work, and they rarely work for a structural reason: the
        hardest-to-reach sites are, by definition, the most expensive to
        serve. The capex lands against precisely the lowest-volume,
        lowest-margin part of the estate. Building out to win four sites in
        fifty is the textbook definition of bad capital allocation.
      </p>
      <p>
        The alternative is to partner. Keep delivering on your own network
        everywhere it's strong — which is most places — and have a wholesale
        partner ready for the sites it can't reach. No capex against the
        tail. No change to the core network strategy. Just an answer, ready,
        for the part of the market the network was always going to miss.
      </p>
    </NumberedSection>

    <NumberedSection number={4} title="What the wholesale model actually is">
      <p>
        Integra provides the connectivity — bonded 4G/5G, satellite, leased
        lines, and Integra Bridge for the fibre-gap moment — delivered under
        the alt-net's own brand. Integra handles the site survey, the
        installation, the support, the 24/7 monitoring. The alt-net keeps
        the customer relationship, sets its own pricing, and keeps the
        margin. The end customer sees one provider: the alt-net.
      </p>
      <p>
        This is the important distinction: it's wholesale, not a referral
        scheme. The customer doesn't get handed off. They stay the alt-net's
        customer, on the alt-net's paper, with the alt-net's account
        manager. Integra is the engine room, and the engine room stays
        invisible.
      </p>
      <DataCallout
        value="0 capex"
        label="close the coverage gap with no build cost and no change to the core network"
      />
    </NumberedSection>

    <NumberedSection number={5} title="The commercial case">
      <p>For the board, the case resolves to four things:</p>
      <p>
        <strong>Revenue retained.</strong> Deals that would have been lost on
        a problem site now close. Over a portfolio, that tail of "lost on
        connectivity" deals is a real, recoverable number.
      </p>
      <p>
        <strong>Accounts protected.</strong> A customer who can't be served
        on one site looks for a provider who can serve all of them. Closing
        the gap doesn't just win the one site — it protects the whole
        account from being shopped.
      </p>
      <p>
        <strong>Satisfaction and reputation.</strong> "They sorted it" beats
        "they couldn't help." That reputation compounds — in renewals, in
        references, in the deals that come from word of mouth.
      </p>
      <p>
        <strong>No capex, no distraction.</strong> The core network strategy
        doesn't change. The leadership team doesn't get pulled into a
        low-return build. The tail simply stops being a problem.
      </p>
      <p>
        The wholesale question isn't "should we serve hard-to-reach sites."
        It's "can we afford to keep saying no to them." For most alt-nets,
        once the lost-deal and lost-account cost is counted honestly, the
        answer is no.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default WholesaleConnectivityModelArticle;
