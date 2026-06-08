/**
 * NetworkArchitectureSection — shared Network Architecture section for Pro,
 * Ultrafast and Enterprise product pages. Renders a toggle between the
 * bonded and load-balanced topology diagrams, with headline, paragraph and
 * (optionally) PDF download buttons that swap to match the active mode.
 *
 * Single source of truth for the Network Architecture section so that copy
 * stays consistent across the product family.
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Download } from 'lucide-react';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [mode, setMode] = useState<Mode>('bonded');

  const headline =
    mode === 'bonded'
      ? `${CARRIER_WORD[carriers]} carriers. One bonded pipe.`
      : `${CARRIER_WORD[carriers]} carriers. Balanced by session.`;

  const paragraph =
    mode === 'bonded'
      ? bondedParagraph(carriers, bondedParagraphExtra)
      : loadBalancedParagraph(carriers);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="py-12 sm:py-20 md:py-28 bg-[hsl(222,47%,11%)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
            <Network size={24} className="text-primary" />
          </div>
          <span className="text-[0.75rem] uppercase tracking-[0.1em] font-semibold text-primary mb-3 block">
            Network Architecture
          </span>
          <h2 className="text-2xl sm:text-[2.25rem] md:text-[3rem] leading-[1.15] tracking-[-0.02em] text-white mb-4">
            {headline}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            {paragraph}
          </p>
        </motion.div>

        {/* ── Mode Toggle ─────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
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
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl overflow-hidden bg-[hsl(222,47%,11%)]"
        >
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
        </motion.div>

        {/* ── PDF Buttons (per mode, when a href is provided) ── */}
        {(() => {
          const activePdfHref =
            mode === 'bonded' ? bondedPdfHref : loadBalancedPdfHref;
          if (!activePdfHref) return null;
          return (
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center mt-8"
            >
              <a
                href={activePdfHref}
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-md"
              >
                <Download size={18} />
                Download Topology Diagram (PDF)
              </a>
            </motion.div>
          );
        })()}

      </div>
    </motion.section>
  );
};
