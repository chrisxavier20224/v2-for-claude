import HiddenInsightLayout, {
  InsightCallout,
} from "@/components/insights/HiddenInsightLayout";
import MarginReportVsReality from "@/components/insights/hidden/MarginReportVsReality";
import WrongBucketDiagram from "@/components/insights/hidden/WrongBucketDiagram";
import { PullQuote } from "./InsightArticle";

const OnnetMarginsCapex = () => (
  <HiddenInsightLayout
    title="If your onnet product shows 90% margins, your capex policy is probably lying to you"
    description="Code new-circuit engineering labour to capex and the margin report looks beautiful. The cash position tells a different story — and by the time it registers, the business has over-built and under-priced."
    url="/insights/onnet-margins-capex-policy"
    category="Perspective"
    readingTime="4 min read"
    cta={{
      headline: "Model the alternative before the next rollout.",
      body: "Not every site justifies an onnet build. Talk to us about wireless/bonded alternatives that serve the customer without the capex drag.",
      buttonLabel: "Talk to us about wholesale & partnership",
      buttonHref: "/wholesale",
    }}
  >
    <MarginReportVsReality />

    <p>
      If your onnet product is showing 90% margins, your capex allocation policy
      is probably lying to you.
    </p>
    <p>
      Across the connectivity businesses I've operated, engineering labour for
      new circuit installations is frequently coded to capex rather than to the
      product P&amp;L. It looks clean on the balance sheet. It looks even better
      on the margin report.
    </p>
    <p>
      But a £300-per-month circuit that costs £1,500–£2,500 in engineering time
      — plus CPE, plus the provisioning coordinator hours required to shepherd
      a complex install — is not a 90% margin product. At that price point, it
      may not be a good product at all.
    </p>
    <PullQuote>
      A £300/month circuit that costs £1,500–£2,500 to install is not a 90%
      margin product.
    </PullQuote>
    <p>
      The distortion drives the wrong commercial decisions. If the unit
      economics look artificially strong, the business over-invests in onnet
      rollout and under-prices the product. The cash position tells a different
      story, but by the time that registers, the damage is done.
    </p>
    <WrongBucketDiagram />
    <p>
      It also consumes disproportionate provisioning time. Complex onnet
      installs aren't the highest-volume work, but they're frequently the most
      demanding. Coordinators who could be clearing high-margin, low-complexity
      orders are instead managing difficult engineering programmes the P&amp;L
      flatters.
    </p>
    <p>
      The fix requires a deliberate, consistently applied capex allocation
      policy — and a finance director close enough to operations to spot when
      engineering cost is drifting into the wrong bucket.
    </p>

    <h2>PE-backed businesses are particularly exposed.</h2>
    <p>
      If the sponsor's investment thesis rests on onnet margin assumptions
      built on misallocated cost, the business is running on a distorted
      picture from day one.
    </p>

    <InsightCallout>
      Not every site justifies an onnet build. A wireless/bonded alternative
      serves the customer without the capex drag and the provisioning load —
      worth modelling before the next rollout decision, not after.
    </InsightCallout>
  </HiddenInsightLayout>
);

export default OnnetMarginsCapex;