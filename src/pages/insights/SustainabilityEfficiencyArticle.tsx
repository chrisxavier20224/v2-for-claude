import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { ArrowLeft } from "lucide-react";

const SustainabilityEfficiencyArticle = () => {
  return (
    <PageLayout>
      <SEO
        title="Why efficiency, not pledges, drives real sustainability in critical infrastructure"
        description="Operational clarity is the foundation of measurable environmental impact. A thought leadership piece on sustainability in critical power operations."
        url="/insights/sustainability-efficiency-critical-infrastructure"
        type="article"
        keywords="sustainability, critical infrastructure, operational efficiency, environmental impact, power monitoring, emissions reduction"
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

          {/* BLOCK 1 — Opening Statement */}
          <header className="mb-16">
            <h1 className="text-heading-1 md:text-display-sm lg:text-display text-foreground mb-6 leading-tight print:text-gray-900">
              Why efficiency, not pledges, drives real sustainability in critical infrastructure
            </h1>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-6 print:text-gray-600">
              Operational clarity is the foundation of measurable environmental impact.
            </p>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Sustainability has become a standard part of the conversation around critical infrastructure. That's a good thing. But in environments where failure carries real operational, financial, and safety consequences, the way sustainability is discussed often drifts away from how impact is actually created.
              </p>
              <p>
                In critical power, real sustainability does not come from pledges, targets, or offset statements.<br />
                It comes from efficiency.<br />
                And efficiency starts with understanding how assets actually behave.
              </p>
            </div>
          </header>

          {/* Content */}
          <div className="insight-content space-y-16">
            
            {/* BLOCK 2 — Context Panel (Callout Box) */}
            <section className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h2 className="text-heading-3 text-foreground mb-5 print:text-gray-900">
                Critical infrastructure doesn't respond to intent
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Generators, switchgear, battery systems, and distribution infrastructure do not become more sustainable because an organisation publishes a commitment. They become more sustainable when they are run better.
              </p>
              <p className="text-sm text-muted-foreground mb-4">That usually means:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Fewer unnecessary run hours</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Better load matching</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Earlier detection of inefficiency and degradation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Fewer emergency call-outs and reactive interventions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Longer asset life and fewer premature replacements</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                None of these outcomes are driven by intention. They are driven by operational visibility.
              </p>
            </section>

            {/* BLOCK 3 — Diagram Placeholder */}
            <section className="my-12">
              <div className="bg-muted/30 border border-border rounded-lg aspect-[16/9] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm text-muted-foreground/60 uppercase tracking-wider mb-2">Diagram</p>
                  <p className="text-muted-foreground font-medium">From operational clarity to environmental impact</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center italic">
                Operational visibility enables efficiency. Efficiency reduces waste. Sustainability follows as an outcome.
              </p>
            </section>

            {/* BLOCK 4 — Section: Hidden Cost */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                The hidden cost of "acceptable inefficiency"
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  In many critical power environments, inefficiency is tolerated because it is invisible.
                </p>
                <p>
                  Assets run longer than needed.<br />
                  Generators operate under sub-optimal load.<br />
                  Faults are addressed late, not early.<br />
                  Maintenance is reactive because the signals arrive too close to failure.
                </p>
                <p>Each of these behaviours has a direct environmental cost:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Excess fuel consumption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Higher emissions per operating hour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Increased wear, leading to earlier replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>More site visits, logistics, and emergency response</span>
                  </li>
                </ul>
                <p>
                  Individually, these costs feel small. Across a fleet, they are not.
                </p>
              </div>
            </section>

            {/* BLOCK 5 — Data & Measurement Panel (Callout Box) */}
            <section className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h2 className="text-heading-3 text-foreground mb-4 print:text-gray-900">
                Efficiency is measurable. Sustainability should be too.
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                One of the challenges with sustainability programmes is that they often rely on indirect metrics and assumptions. Efficiency does not.
              </p>
              <p className="text-sm text-muted-foreground mb-4">Efficiency can be observed directly through telemetry:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Runtime versus demand</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Load profiles over time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Start/stop frequency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Thermal behaviour</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Fuel consumption patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-3 shrink-0" />
                  <span>Deviation from normal operating baselines</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  When these signals are visible, inefficiency becomes obvious.<br />
                  When inefficiency becomes obvious, it becomes actionable.
                </p>
                <p className="text-foreground mt-3 font-medium">
                  This is where sustainability stops being a narrative and starts being an outcome.
                </p>
              </div>
            </section>

            {/* BLOCK 6 — Section: Predictive Insight */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Predictive insight changes behaviour, not just outcomes
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Preventing failure is often framed purely as a reliability goal. In reality, it is also an environmental one.
                </p>
                <p>Predictive insight allows operators to:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Intervene earlier, when corrective action is lighter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Avoid catastrophic failure and emergency replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Schedule maintenance efficiently, not defensively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Reduce unnecessary redundancy and over-running</span>
                  </li>
                </ul>
                <p>
                  The result is not just fewer outages.<br />
                  It is fewer wasted hours, fewer wasted resources, and fewer unnecessary emissions.
                </p>
                <p>
                  In critical infrastructure, failure prevention and sustainability are linked by the same mechanism: understanding asset behaviour early enough to act calmly.
                </p>
              </div>
            </section>

            {/* BLOCK 7 — Diagram Placeholder (Process Flow) */}
            <section className="my-12">
              <div className="bg-muted/30 border border-border rounded-lg aspect-[21/9] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm text-muted-foreground/60 uppercase tracking-wider mb-2">Diagram</p>
                  <p className="text-muted-foreground font-medium">Early insight vs late intervention</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center italic">
                Earlier signals enable calmer intervention, reduced waste, and lower operational impact.
              </p>
            </section>

            {/* BLOCK 8 — Section: Why Pledges Fall Short */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Why pledges struggle in operational environments
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Large operators are increasingly required to report on sustainability. That reporting often sits alongside operations, not within them.
                </p>
                <p>
                  The problem is not intent — it's abstraction.
                </p>
                <p>
                  Pledges talk about outcomes without addressing behaviour.<br />
                  Operations teams deal with behaviour every day.
                </p>
                <p>
                  When sustainability initiatives do not connect to how assets are actually run, they risk becoming a parallel exercise: important for reporting, disconnected from reality.
                </p>
                <p className="font-medium text-foreground">
                  Efficiency closes that gap.
                </p>
              </div>
            </section>

            {/* BLOCK 9 — Alignment Panel (Callout Box) */}
            <section className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h2 className="text-heading-3 text-foreground mb-4 print:text-gray-900">
                The sustainability teams and operations teams actually agree
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                In practice, sustainability leads and operations leads usually want the same things:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Less waste</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Fewer emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>More predictable performance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 shrink-0" />
                  <span>Better use of existing assets</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Telemetry and predictive insight provide a shared language between these groups. They turn sustainability from a reporting requirement into a by-product of good operational discipline.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                That alignment matters, especially in large, regulated, or distributed environments.
              </p>
            </section>

            {/* BLOCK 10 — Section: Scaling Impact */}
            <section>
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Real impact scales with operations
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Small improvements applied consistently across a fleet create meaningful impact.
                </p>
                <p>
                  Not because they are branded as "green", but because they compound:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Across assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Across sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Across years</span>
                  </li>
                </ul>
                <p>
                  This is why efficiency matters more than pledges in critical infrastructure. It scales quietly, continuously, and defensibly.
                </p>
              </div>
            </section>

            {/* BLOCK 11 — Conclusion */}
            <section className="border-t border-border pt-12">
              <h2 className="text-heading-2 text-foreground mb-6 print:text-gray-900">
                Sustainability that doesn't need explaining
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The most effective sustainability outcomes in critical power environments are often the least visible:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Assets that simply run when they should</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Systems that are maintained before they degrade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2.5 mr-3 shrink-0" />
                    <span>Fleets that are understood, not just monitored</span>
                  </li>
                </ul>
                <p>
                  When infrastructure is operated well, sustainability follows naturally.<br />
                  No slogans required.
                </p>
              </div>
            </section>

            {/* Final Statement */}
            <section className="bg-muted/20 border-l-2 border-primary rounded-r-lg p-6 md:p-8">
              <h3 className="text-heading-3 text-foreground mb-4 print:text-gray-900">
                Conclusion
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In critical infrastructure, sustainability is not a separate objective.<br />
                  It is a consequence of clarity.
                </p>
                <p>
                  The organisations that make the biggest environmental impact improvements are not the ones making the loudest commitments. They are the ones investing in understanding how their assets actually behave — and acting on that understanding consistently.
                </p>
                <p className="text-foreground font-medium">
                  Efficiency is not a compromise between reliability and sustainability.<br />
                  It is the mechanism that delivers both.
                </p>
              </div>
            </section>

          </div>

          {/* Footer / Author */}
          <footer className="mt-20 pt-10 border-t border-border print:border-gray-200">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Integra Networks Research</p>
              <p>Thought leadership on critical power operations</p>
            </div>
          </footer>

        </div>
      </article>
    </PageLayout>
  );
};

export default SustainabilityEfficiencyArticle;
