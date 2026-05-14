import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { ArrowLeft } from "lucide-react";

const FailurePreventionArticle = () => {
  return (
    <PageLayout>
      <SEO
        title="Failure Prevention Starts Long Before Alarms | Integra Networks Insights"
        description="A practical view of predictive maintenance for critical power assets. Learn how to detect emerging risks in generators, MDUs, and battery systems before alarms trigger."
        url="/insights/failure-prevention-starts-long-before-alarms"
        type="article"
        keywords="predictive maintenance, critical power, generator monitoring, failure prevention, asset telemetry"
      />
      
      <article className="insight-article py-12 md:py-20 print:py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          
          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 print:hidden"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Insights
          </Link>

          {/* Insight Label */}
          <div className="mb-6">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Insight
            </span>
          </div>

          {/* Hero */}
          <header className="mb-12 pb-10 border-b border-border print:border-gray-200">
            <h1 className="text-heading-1 md:text-display-sm lg:text-display text-foreground mb-4 leading-tight print:text-gray-900">
              Failure Prevention Starts Long Before Alarms
            </h1>
            <p className="text-body-lg text-muted-foreground leading-relaxed print:text-gray-600">
              A practical view of predictive maintenance for critical power assets
            </p>
          </header>

          {/* Content */}
          <div className="insight-content space-y-12">
            
            {/* Executive Summary */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Executive summary
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  Critical power infrastructure rarely fails without warning. The warning signs are usually present in telemetry — subtle shifts in temperature, vibration, load response, oil pressure, fuel behaviour, or exhaust characteristics — long before an alarm condition is triggered.
                </p>
                <p>
                  Predictive maintenance is often described as a modelling problem. In practice, it is a discipline: collecting consistent telemetry, understanding normal behaviour, detecting deviation early, and presenting evidence that operators can trust. Machine learning can help, but it cannot replace good instrumentation, context, and explainability.
                </p>
                <p>
                  This note outlines a practical framework for moving from reactive maintenance to failure prevention in real-world critical power environments — generators, MDUs, and battery systems — without resorting to hype or black boxes.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 1 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                1) The uncomfortable truth: alarms are late
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p className="text-foreground font-medium print:text-gray-900">
                  Alarms are not early warning systems.<br />
                  They're a last resort.
                </p>
                <p>
                  Most alarm thresholds are designed to prevent catastrophic outcomes, not to provide meaningful lead time for intervention. By the time an alarm fires, the situation is often already in one of these states:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>The asset is already operating outside normal bounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>The fault has already cascaded into secondary symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Options are limited to "keep it running" or "shut it down"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Diagnosis becomes slower, noisier, and more expensive</span>
                  </li>
                </ul>
                <p>
                  In critical power, the cost of late information is not theoretical. It's operational. When systems exist to protect uptime, alarms tend to become the moment you discover a problem you should have been tracking for weeks.
                </p>
                <p className="text-foreground font-medium print:text-gray-900">
                  Failure prevention starts earlier.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 2 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                2) Predictive maintenance isn't magic. It's disciplined attention.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  Predictive maintenance gets marketed like fortune telling:<br />
                  <span className="italic">"We predict failures before they happen."</span>
                </p>
                <p>
                  What operators actually need is more grounded:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Detect emerging risk while there is still time to act</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Understand why the system thinks a change matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Separate noise from genuine behavioural drift</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Get clear, actionable signals rather than a dashboard of data</span>
                  </li>
                </ul>
                <p>
                  So predictive maintenance is less about prediction and more about attention at scale:
                </p>
                <ul className="space-y-1 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>attention to trend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>attention to deviation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>attention to context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>attention to repeatable evidence</span>
                  </li>
                </ul>
                <p>
                  This is where telemetry becomes powerful — not because it's "smart", but because it allows you to treat failure as a process rather than an event.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 3 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                3) What the data is telling you (before failure)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  The highest-value signals in generator and critical power environments are usually not dramatic spikes. They are the gradual changes people miss because they're busy:
                </p>
                
                <h3 className="text-heading-3 text-foreground mt-8 mb-4 print:text-gray-900">
                  Common early indicators (examples)
                </h3>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Temperature drift:</strong> coolant, oil, exhaust temperature trending outside a normal envelope for a given load profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Vibration signature changes:</strong> small changes that precede bearing or alignment issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Oil pressure behaviour:</strong> pressure patterns that shift across operating modes (startup, load changes, steady state)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Fuel consumption anomalies:</strong> changes in fuel rate for similar load can indicate combustion, injector, or air/fuel issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Exhaust emissions drift:</strong> not always available, but when it is, it's often a leading indicator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Load response:</strong> how the system behaves when load changes can reveal issues earlier than steady-state readings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span><strong className="text-foreground print:text-gray-900">Start behaviour:</strong> starting patterns (time to stable, overshoot, settling behaviour) can be an early warning goldmine</span>
                  </li>
                </ul>

                <p className="mt-6">
                  The key point: most of these signals only become meaningful when measured consistently over time and interpreted in context.
                </p>
                <p>
                  Which brings us to the most overlooked part of predictive maintenance…
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 4 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                4) Telemetry quality beats clever models
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p className="text-foreground font-medium print:text-gray-900">
                  You can't model your way out of unreliable data.
                </p>
                <p>
                  In real deployments, predictive initiatives fail for boring reasons:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>inconsistent sensors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>missing calibration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>poor sampling choices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>network dropouts and patchy history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>unclear mapping of "what is this signal?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>lack of operational context (load state, environment, duty cycle)</span>
                  </li>
                </ul>
                <p>
                  A simple, explainable approach built on reliable telemetry will outperform a complex AI model trained on inconsistent inputs.
                </p>
                <p className="text-foreground font-medium print:text-gray-900">
                  If you want failure prevention, treat telemetry like instrumentation — not like "data".
                </p>

                <h3 className="text-heading-3 text-foreground mt-8 mb-4 print:text-gray-900">
                  The practical baseline
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>stable identifiers (asset, component, location)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>known sampling behaviour (frequency, resolution, gaps)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>operating context captured (load state, runtime, modes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>time-synchronised event logs where possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>clear ownership of "what does this sensor represent?"</span>
                  </li>
                </ul>
                <p className="mt-4">
                  This isn't glamorous.<br />
                  But it's the foundation that makes everything else work.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 5 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                5) The analytics ladder: from thresholds to insight
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  A useful way to think about maturity is as a ladder. Each step creates more operational value — but only if the earlier steps are solid.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="pl-4 border-l-2 border-border print:border-gray-300">
                    <p className="text-foreground font-medium mb-1 print:text-gray-900">Level 1 — Visibility</p>
                    <p className="text-sm">Basic remote monitoring and logging: "What is happening right now?"</p>
                  </div>
                  <div className="pl-4 border-l-2 border-border print:border-gray-300">
                    <p className="text-foreground font-medium mb-1 print:text-gray-900">Level 2 — Trending</p>
                    <p className="text-sm">Trend lines and envelopes: "Is behaviour drifting over time?"</p>
                  </div>
                  <div className="pl-4 border-l-2 border-border print:border-gray-300">
                    <p className="text-foreground font-medium mb-1 print:text-gray-900">Level 3 — Anomaly detection</p>
                    <p className="text-sm">Deviation from expected behaviour: "This looks different to normal for this context."</p>
                  </div>
                  <div className="pl-4 border-l-2 border-border print:border-gray-300">
                    <p className="text-foreground font-medium mb-1 print:text-gray-900">Level 4 — Diagnostics support</p>
                    <p className="text-sm">Evidence and likely drivers: "Here's why it's different and what changed."</p>
                  </div>
                  <div className="pl-4 border-l-2 border-border print:border-gray-300">
                    <p className="text-foreground font-medium mb-1 print:text-gray-900">Level 5 — Prognostics (RUL-style thinking)</p>
                    <p className="text-sm">Estimated remaining useful life: "If this continues, the risk window looks like X."</p>
                  </div>
                </div>

                <p className="mt-6">
                  In the real world, many companies try to jump straight to Level 5.<br />
                  They get disappointed. Not because Level 5 is impossible, but because it depends on the discipline of Levels 1–4.
                </p>
                <p className="text-foreground font-medium print:text-gray-900">
                  A reliable anomaly signal with good context is often more useful than a flashy prediction that nobody trusts.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 6 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                6) Where AI fits (and where it doesn't)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p className="text-foreground font-medium print:text-gray-900">
                  AI is not the product. It's a tool.
                </p>
                <p>
                  In predictive maintenance, AI/ML can be genuinely useful in a few areas:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>pattern recognition across large datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>multivariate anomaly detection (when many sensors interact)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>classification of known fault signatures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>ranking of risk signals by historical outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>forecasting in constrained, well-instrumented environments</span>
                  </li>
                </ul>
                
                <p>
                  But in critical power, the constraints are non-negotiable:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>explainability matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>false alarms carry operational cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>missed alarms carry reputational cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>training data is often limited or inconsistent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>environments vary (asset models, sites, loads, maintenance regimes)</span>
                  </li>
                </ul>

                <p>
                  So the best use of AI tends to be assistive, not authoritative:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>supporting operator judgement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>surfacing risk signals earlier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>highlighting patterns humans would miss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>providing confidence measures, not certainty</span>
                  </li>
                </ul>

                <p className="text-foreground font-medium print:text-gray-900">
                  If a system can't explain why it's concerned, operators will ignore it — and they'll be right to.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 7 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                7) What "good" looks like: calm, actionable early warning
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  The goal is not to build a platform with the most features.<br />
                  The goal is to reduce operational risk.
                </p>
                <p>
                  A good failure prevention system should make a control room calmer:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>fewer, better alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>clear evidence trails ("what changed, when, relative to what?")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>context-aware thresholds (not one-size-fits-all)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>trending that respects operating modes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>signals designed for action, not observation</span>
                  </li>
                </ul>
                <p className="text-foreground font-medium print:text-gray-900">
                  Most importantly: it should help people intervene earlier with less disruption.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Section 8 */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                8) A practical implementation approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  If you're building or deploying predictive maintenance for critical power assets, this sequence is reliable:
                </p>
                <ol className="space-y-3 ml-6 list-decimal list-outside">
                  <li className="pl-2">Start with consistent telemetry and asset identity</li>
                  <li className="pl-2">Establish behavioural baselines by operating mode</li>
                  <li className="pl-2">Implement trending and envelope monitoring</li>
                  <li className="pl-2">Add anomaly detection with evidence trails</li>
                  <li className="pl-2">Iterate with operators: reduce noise, sharpen signals</li>
                  <li className="pl-2">Only then: attempt RUL estimation or predictive modelling</li>
                  <li className="pl-2">Build governance: what is trusted, what triggers action, what is logged</li>
                </ol>
                <p className="text-foreground font-medium print:text-gray-900">
                  Predictive maintenance becomes real when it becomes operational.
                </p>
              </div>
            </section>

            <hr className="border-border/50 print:border-gray-200" />

            {/* Closing */}
            <section className="pb-4">
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Closing
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed print:text-gray-700">
                <p>
                  Critical infrastructure doesn't fail loudly. It fails gradually.<br />
                  Failure prevention starts long before alarms — when you treat telemetry as an early warning channel, not a reporting tool.
                </p>
                <p>
                  Predictive maintenance isn't a magic model. It's disciplined attention, designed into systems operators can trust.
                </p>
                <p className="text-foreground font-medium print:text-gray-900">
                  That's what reliability looks like in the real world.
                </p>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Print styles */}
      <style>{`
        @media print {
          .insight-article {
            font-size: 11pt;
            line-height: 1.6;
          }
          
          .insight-content section {
            page-break-inside: avoid;
          }
          
          h2 {
            page-break-after: avoid;
          }
          
          ul, ol {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default FailurePreventionArticle;
