import InsightArticle, {
  NumberedSection,
  PullQuote,
} from "./InsightArticle";
import BigStatCallout from "@/components/figures/BigStatCallout";
import ISPFounderNote from "@/components/insights/ISPFounderNote";
import BuildPartnerSayNoTable from "@/components/insights/BuildPartnerSayNoTable";
import CommercialModelGrid from "@/components/insights/CommercialModelGrid";

const WholesaleConnectivityModelArticle = () => (
  <InsightArticle slug="wholesale-isp-partner-program">
    <NumberedSection number={1} title="The quiet problem every alt-net has">
      <p>
        Every alt-net and MSP has the same quiet problem. The network reaches
        most of the addresses it needs to — but not all of them. There is
        always a tail: the sites fibre cannot economically reach, the
        locations where the lead time is unworkable, the customer who needs
        connectivity faster than the network can deliver it.
      </p>
      <p>
        Out of fifty sites a salesperson is working, it might only be four.
        Four out of fifty sounds like a rounding error — it's easy for ISPs
        to wave away the edge cases as not worth the engineering attention.
      </p>
      <BigStatCallout
        numerator={4}
        denominator={50}
        label="of every 50 sites in a customer estate is 'the tail'"
        annotation="= the deals you risk losing"
      />
      <p>
        But those four are not a rounding error. They are where deals are
        lost, where accounts start looking elsewhere, and where the brand
        quietly takes the hit for infrastructure decisions made years ago.
      </p>
      <p>
        And here is the point most alt-nets miss: even when you refer a
        problem site to a third-party ISP or alt-net, that provider faces
        exactly the same economics. The site is hard to reach because it is
        genuinely difficult — rural, remote, no duct in the ground, a
        six-figure civils quote. A competitor cannot serve it any more
        cheaply. The real answer is not a referral. It is a product built
        specifically for that situation.
      </p>
    </NumberedSection>

    <NumberedSection number={2} title="The strategic cost of saying no">
      <p>
        The instinct is to treat the tail as edge cases — not worth the
        capital to solve. But "not worth building for" and "not worth
        winning" are two completely different statements, and conflating
        them is the expensive mistake too many ISPs and alt-nets make.
      </p>
      <ISPFounderNote>
        A single lost account typically represents three to five years of
        recurring revenue. The tail site that triggers the conversation
        about switching providers rarely costs just the one site — it costs
        the relationship and wider market reputation.
      </ISPFounderNote>
      <p>
        Saying no to a problem site is not a neutral act. It loses that deal
        — and often the wider account, because a customer who cannot be
        served on one location starts asking who <em>can</em> serve all of
        them. And it conditions the market: the next time that customer, or
        someone in their network, has a requirement, the alt-net that said
        "we cannot help with that one" will not be the first call.
      </p>
      <PullQuote>
        Not worth building for and not worth winning are two completely
        different statements. Conflating them is the expensive mistake.
      </PullQuote>
    </NumberedSection>

    <NumberedSection number={3} title="Build, or partner?">
      <p>
        An alt-net could, of course, build for the tail. But the economics
        rarely work, and they rarely work for a structural reason: the
        hardest-to-reach sites are, by definition, the most expensive to
        serve. The capex lands against the lowest-volume, lowest-margin part
        of the estate.
      </p>
      <p>
        The alternative is to partner. Keep delivering on your own network
        everywhere it is strong — which is most places — and have a wholesale
        partner ready for the sites it cannot reach. No capex against the
        tail. No change to the core network strategy. No distraction for the
        leadership team. Just an answer, ready, for the part of the market
        the network was always going to miss.
      </p>
      <BuildPartnerSayNoTable />
      <p className="text-sm md:text-base text-foreground/70 italic">
        Integra delivers using your IP range, integrating natively within
        your wider customer solution.
      </p>
    </NumberedSection>

    <NumberedSection number={4} title="What the wholesale model actually is">
      <p>
        Integra provides the connectivity — bonded 4G/5G, Starlink, leased
        lines, and Integra Bridge for the fibre-gap moment — delivered under
        the alt-net's own brand. Integra handles the site survey, the
        installation, the ongoing support and the 24/7 monitoring, which
        feeds into the alt-net's monitoring system. The alt-net keeps the
        customer relationship, sets its own pricing, and retains the margin.
      </p>
      <p>
        The end customer sees one provider: the alt-net. This is the
        important distinction — it is wholesale, not a referral scheme. The
        customer does not get handed off. They stay on the alt-net's paper,
        with the alt-net's account manager. Integra complements and
        integrates into the alt-net's solution and remains invisible to the
        customer.
      </p>
      <CommercialModelGrid />
    </NumberedSection>

    <NumberedSection number={5} title="The commercial case">
      <p>For the board, the case resolves to four things:</p>
      <p>
        <strong>→ Revenue retained.</strong> Deals that would have been lost
        on a problem site now close. Over a portfolio, that tail of "lost on
        connectivity" deals is a real, recoverable number.
      </p>
      <p>
        <strong>→ Accounts protected.</strong> A customer who cannot be
        served on one site looks for a provider who can serve all of them.
        Closing the gap does not just win the one site — it protects the
        whole account from being shopped.
      </p>
      <p>
        <strong>→ Satisfaction and reputation.</strong> "They sorted it"
        beats "they could not help." That reputation compounds — in
        renewals, in references, in the deals that come from word of mouth.
      </p>
      <p>
        <strong>→ No capex, no distraction.</strong> The core network
        strategy does not change. The leadership team is not pulled into a
        low-return build programme. The tail simply stops being a problem.
      </p>
      <p>
        The wholesale question is not whether you should serve
        hard-to-reach sites. It is whether you can afford to keep saying no
        to them. For most alt-nets, once the lost-deal and lost-account cost
        is counted honestly, the answer is straightforward.
      </p>
    </NumberedSection>
  </InsightArticle>
);

export default WholesaleConnectivityModelArticle;
