import HiddenInsightLayout, {
  InsightCallout,
} from "@/components/insights/HiddenInsightLayout";
import WipQueueChart from "@/components/insights/hidden/WipQueueChart";
import OrderJourneyBar from "@/components/insights/hidden/OrderJourneyBar";
import { DataCallout } from "./InsightArticle";

const WipCashflowProblem = () => (
  <HiddenInsightLayout
    title="WIP isn't a provisioning problem. It's a cashflow problem."
    description="Every order in the WIP queue is a signed customer, an engineer who's already visited, and revenue not yet on the P&L. In a growing business that queue compounds — and the board often can't see it until it's material."
    url="/insights/wip-is-a-cashflow-problem"
    category="Perspective"
    readingTime="3 min read"
    cta={{
      headline: "Pull revenue out of WIP faster.",
      body: "Anything that gets a customer trading sooner moves revenue from WIP to recognised. Let's talk about how partnering with Integra does that.",
      buttonLabel: "Talk to us about wholesale & partnership",
      buttonHref: "/wholesale",
    }}
  >
    <WipQueueChart />

    <p>
      In the connectivity businesses I've run, WIP queues regularly reach six
      figures in monthly recurring revenue. That is not a billing problem. It's
      a cashflow and profitability problem.
    </p>
    <DataCallout value="Six figures of MRR" label="sitting in WIP" />
    <p>
      Every order sitting in WIP represents a customer who has signed, an
      engineer who has visited, and revenue that is not yet on the P&amp;L.
    </p>
    <OrderJourneyBar />
    <p>
      In a business growing at any meaningful rate, that queue compounds. New
      orders arrive faster than delayed ones clear, and the WIP line on the
      management accounts grows every month. The cash impact is significant.
      The EBITDA impact is worse — because the costs of delivering those orders
      have already been incurred.
    </p>
    <p>
      Most operators treat WIP as a provisioning issue. It's actually a
      financial one. Boards and investors who aren't close to operations
      frequently don't see it until it's already material.
    </p>

    <h2>The operators who manage it well do three things:</h2>
    <ol>
      <li>They measure WIP in revenue terms, weekly — not as an order count.</li>
      <li>
        They run a dedicated provisioning function with commercial
        accountability, not just operational.
      </li>
      <li>
        They don't let the sales team set go-live expectations without
        operations sign-off.
      </li>
    </ol>
    <p>
      Getting this right is one of the highest-leverage interventions available
      in a connectivity business — it improves cash, EBITDA, and customer
      experience at the same time.
    </p>

    <InsightCallout>
      Anything that gets a customer trading sooner pulls revenue out of WIP
      faster. Integra Bridge does exactly that — the customer is live in days,
      so the clock on the relationship and on recognised revenue starts before
      the permanent circuit lands.
    </InsightCallout>
  </HiddenInsightLayout>
);

export default WipCashflowProblem;