import HiddenInsightLayout, {
  InsightCallout,
} from "@/components/insights/HiddenInsightLayout";
import ProvisioningNodeMap from "@/components/insights/hidden/ProvisioningNodeMap";
import BridgeTimelineCompare from "@/components/insights/hidden/BridgeTimelineCompare";
import { PullQuote } from "./InsightArticle";

const ProvisioningRenewalKiller = () => (
  <HiddenInsightLayout
    title="Provisioning is every ISP's quiet renewal killer — and almost no one has fixed it"
    description="The information needed to run a clean leased-line install lives across a dozen parties the provisioning team doesn't control. Here's why that costs renewals — and how to shrink the exposure."
    url="/insights/provisioning-the-isp-renewal-killer"
    category="Perspective"
    readingTime="4 min read"
    cta={{
      headline: "Got sites your network can't reach in time?",
      body: "Integra Bridge closes the provisioning gap — bonded Starlink + 4G/5G, live in around 10 working days, delivered under your brand.",
      buttonLabel: "Talk to us about wholesale & partnership",
      buttonHref: "/wholesale",
    }}
  >
    <ProvisioningNodeMap />

    <p>
      Across the ISPs I've operated, provisioning communication is the single
      most consistent source of customer dissatisfaction — and almost no
      operator has solved it structurally.
    </p>
    <p>
      A single leased line installation can involve more than a dozen people:
      planner, external engineer, internal engineer, landlord representative,
      solicitor, router and firewall support, Openreach liaison, reseller
      account manager, and the end customer. Each holds a piece of the picture.
      None holds the whole thing.
    </p>
    <PullQuote>
      Each holds a piece of the picture. None holds the whole thing.
    </PullQuote>
    <p>
      When something goes wrong — and something always goes wrong — the customer
      sees a disorganised supplier. The reseller takes the call. The ISP loses
      the renewal.
    </p>

    <h2>This is not a people problem. It's a structural one.</h2>
    <p>
      The information required to run a clean installation is distributed across
      parties the provisioning team does not directly control. No amount of
      effort from a good coordinator fixes a system where the data they need
      sits with a landlord, a solicitor, and an Openreach planner who don't
      answer to them.
    </p>
    <p>
      The result is predictable: delayed go-lives, frustrated customers, and
      revenue sitting in WIP for months rather than weeks.
    </p>
    <p>
      There's no industry-wide fix for the underlying fragmentation. But there
      is a way to reduce the window of exposure — to keep the customer live and
      trading while the permanent circuit catches up. Solve the customer's
      actual problem (they need to be online now), and a provisioning delay
      stops being a relationship-ending event.
    </p>

    <BridgeTimelineCompare />

    <InsightCallout>
      This is exactly the gap Integra Bridge closes — bonded Starlink + 4G/5G,
      live in around 10 working days, so the customer is trading while the
      leased line is provisioned, then it stays on as failover. The renewal
      conversation changes when the customer was never offline.
    </InsightCallout>
  </HiddenInsightLayout>
);

export default ProvisioningRenewalKiller;