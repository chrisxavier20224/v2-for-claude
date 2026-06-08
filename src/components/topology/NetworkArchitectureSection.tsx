/**
 * NetworkArchitectureSection — shared Network Architecture section for Pro,
 * Ultrafast and Enterprise product pages. Renders a toggle between the
 * bonded and load-balanced topology diagrams, with headline, paragraph and
 * (optionally) PDF download buttons that swap to match the active mode.
 *
 * Single source of truth for the Network Architecture section so that copy
 * stays consistent across the product family.
 */

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { BondedTopologyDiagram } from './BondedTopologyDiagram';
import { LoadBalancedTopologyDiagram } from './LoadBalancedTopologyDiagram';

type CarrierCount = 2 | 3 | 4;
type Mode = 'bonded' | 'loadBalanced';

interface NetworkArchitectureSectionProps {
  carriers: CarrierCount;
  productName: string;
  /** Throughput label on the bonded diagram, e.g. "Up to 500 Mbps bonded" */
  bondedThroughputLabel: string;
  /** Throughput label on the load-balanced diagram, e.g. "Up to 500 Mbps combined" */
  loadBalancedThroughputLabel: string;
  throughputSubLabel?: string;
  /** Optional bonded PDF link — renders PDF buttons when in bonded mode. */
  bondedPdfHref?: string;
  /** Optional load-balanced PDF link — renders PDF buttons when in LB mode. */
  loadBalancedPdfHref?: string;
  /** Optional extra sentence appended to the bonded paragraph (used by Enterprise). */
  bondedParagraphExtra?: string;
}

// ── Copy helpers ────────────────────────────────────────────────

const CARRIER_WORD: Record<CarrierCount, string> = {
  2: 'Two',
  3: 'Three',
  4: 'Four',
};

const CARRIER_WORD_LOWER: Record<CarrierCount, string> = {
  2: 'two',
  3: 'three',
  4: 'four',
};

const CARRIER_COMBINER: Record<CarrierCount, string> = {
  2: 'both networks',
  3: 'all three networks',
  4: 'all four networks',
};

const bondedParagraph = (n: CarrierCount, extra?: string) =>
  `Traffic flows from the customer firewall through the SD-WAN router, across ${CARRIER_WORD_LOWER[n]} independent carriers, into our bonding server, then out to the internet through a fixed IP. Every session uses the combined bandwidth of ${CARRIER_COMBINER[n]} — certificate-authenticated, VPN-transparent, and monitored 24/7.${extra ? ' ' + extra : ''}`;

const loadBalancedParagraph = (n: CarrierCount) =>
  `Traffic flows from the customer firewall through the SD-WAN router, which distributes sessions across ${CARRIER_WORD_LOWER[n]} independent carriers in parallel. Each session rides a single carrier — chosen live based on health and load — and goes direct to the internet without touching our cloud. Lower latency, no bonding server in the path, and every carrier active all the time. A static public IP is available as a small monthly upgrade when the customer needs it.`;

// ── Animation variants (match product pages) ────────────────────

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

// ── Component ───────────────────────────────────────────────────

export const NetworkArchitectureSection: React.FC<NetworkArchitectureSectionProps> = ({
  carriers,
  productName,
  bondedThroughputLabel,
  loadBalancedThroughputLabel,
  throughputSubLabel = 'aggregate throughput',
  bondedPdfHref,
  loadBalancedPdfHref,
  bondedParagraphExtra,
}) => {
  const [mode, setMode] = useState<Mode>('bonded');

  const caption =
    mode === 'bonded'
      ? `${CARRIER_WORD[carriers]} carriers, one bonded pipe — the topology of an ${productName} SD-WAN.`
      : `${CARRIER_WORD[carriers]} carriers, balanced by session — the topology of an ${productName} SD-WAN.`;

  return (
    <figure className="my-12 not-prose lg:-mx-12 xl:-mx-20">
      <figcaption className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
        Figure — How a {mode === 'bonded' ? 'bonded' : 'load-balanced'} multi-bearer connection works
      </figcaption>

      <div className="rounded-2xl overflow-hidden bg-[hsl(222,47%,11%)] border border-white/10">
        {/* ── Mode Toggle ─────────────────────────────────────── */}
        <div className="flex justify-center pt-5">
          <div
            role="tablist"
            aria-label="Network architecture mode"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 shadow-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'bonded'}
              onClick={() => setMode('bonded')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                mode === 'bonded'
                  ? 'bg-primary text-primary-foreground shadow-md hover:brightness-110'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Bonded
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'loadBalanced'}
              onClick={() => setMode('loadBalanced')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                mode === 'loadBalanced'
                  ? 'bg-primary text-primary-foreground shadow-md hover:brightness-110'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Load Balanced
            </button>
          </div>
        </div>

        <div>
          {mode === 'bonded' ? (
            <BondedTopologyDiagram
              carriers={carriers}
              productName={productName}
              throughputLabel={bondedThroughputLabel}
              throughputSubLabel={throughputSubLabel}
            />
          ) : (
            <LoadBalancedTopologyDiagram
              carriers={carriers}
              productName={productName}
              throughputLabel={loadBalancedThroughputLabel}
              throughputSubLabel={throughputSubLabel}
            />
          )}
        </div>

        {/* ── PDF Buttons (per mode, when a href is provided) ── */}
        {(() => {
          const activePdfHref =
            mode === 'bonded' ? bondedPdfHref : loadBalancedPdfHref;
          if (!activePdfHref) return null;
          return (
            <div className="flex items-center justify-center pb-6">
              <a
                href={activePdfHref}
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-md"
              >
                <Download size={18} />
                Download Topology Diagram (PDF)
              </a>
            </div>
          );
        })()}
      </div>

      <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
        {caption}
      </p>
    </figure>
  );
};
