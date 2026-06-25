const BridgeTimelineCompare = () => {
  return (
    <>
      <style>{`
        .btc-band { display:block; width:100vw; margin:2.5rem 0 2.5rem calc(50% - 50vw); background:#0a1628; }
        .btc-band svg { width:100%; height:auto; display:block; font-family:inherit; }
        .btc-seg { transform:scaleX(0); transform-box:fill-box; transform-origin:left center; animation: btc-grow .7s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes btc-grow { to { transform:scaleX(1); } }
        .btc-fade { opacity:0; animation: btc-fade .5s ease forwards; }
        @keyframes btc-fade { to { opacity:1; } }
        .btc-playhead { animation: btc-sweep 7s linear infinite; }
        @keyframes btc-sweep { from { transform:translateX(0); } to { transform:translateX(980px); } }
        @media (prefers-reduced-motion: reduce) {
          .btc-seg { transform:none; animation:none; }
          .btc-fade { opacity:1; animation:none; }
          .btc-playhead { display:none; }
        }
        .btc-band-mobile { display:none; width:100vw; margin:2.5rem 0 2.5rem calc(50% - 50vw); background:#0a1628; padding:28px 14px; box-sizing:border-box; justify-content:center; }
        .btc-band-mobile svg { width:100%; height:auto; max-width:440px; display:block; font-family:inherit; }
        .btc-band-mobile .btc-mseg { transform:scaleX(0); transform-box:fill-box; transform-origin:left center; animation: btc-mgrow .65s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes btc-mgrow { to { transform:scaleX(1); } }
        .btc-band-mobile .btc-mfade { opacity:0; animation: btc-mfade .5s ease forwards; }
        @keyframes btc-mfade { to { opacity:1; } }
        .btc-band-mobile .btc-mplayhead { animation: btc-msweep 7s linear infinite; }
        @keyframes btc-msweep { from { transform:translateX(0); } to { transform:translateX(358px); } }
        @media (prefers-reduced-motion: reduce) {
          .btc-band-mobile .btc-mseg { transform:none; animation:none; }
          .btc-band-mobile .btc-mfade { opacity:1; animation:none; }
          .btc-band-mobile .btc-mplayhead { display:none; }
        }
        @media (max-width: 640px) {
          .btc-band { display:none; }
          .btc-band-mobile { display:flex; }
        }
      `}</style>
      <div className="btc-band">
        <svg
          viewBox="0 0 1200 500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Expected go-live is about 2 weeks. Actual leased-line go-live is about 10 weeks, with the customer offline through the WIP gap in between. With Integra Bridge the customer is live in about 2 weeks (10 working days) and stays trading as failover until the permanent circuit lands at week 10."
        >
          <defs>
            <linearGradient id="btc-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a86ff" /><stop offset="100%" stopColor="#1f6fe0" /></linearGradient>
            <linearGradient id="btc-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3ad389" /><stop offset="100%" stopColor="#2bb673" /></linearGradient>
            <pattern id="btc-wip" patternUnits="userSpaceOnUse" width="13" height="13" patternTransform="rotate(45)">
              <rect width="13" height="13" fill="#e15a4e" opacity="0.16" />
              <rect width="6" height="13" fill="#e15a4e" opacity="0.5" />
            </pattern>
          </defs>

          <rect width="1200" height="500" fill="#0a1628" />
          <text x="130" y="48" fill="#2f7dff" fontSize="14" letterSpacing="3" fontWeight="700">EXPECTED GO-LIVE VS ACTUAL — AND WHAT BRIDGE CHANGES</text>

          <line className="btc-fade" style={{ animationDelay: "1.9s" }} x1="293" y1="100" x2="293" y2="376" stroke="#2f7dff" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.35" />
          <line className="btc-fade" style={{ animationDelay: "2.0s" }} x1="947" y1="190" x2="947" y2="376" stroke="#9fb2c8" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.3" />
          <text className="btc-fade" style={{ animationDelay: "1.9s" }} x="293" y="92" fill="#2f7dff" fontSize="11" textAnchor="middle" opacity="0.85">best-case go-live</text>
          <text className="btc-fade" style={{ animationDelay: "2.0s" }} x="947" y="182" fill="#9fb2c8" fontSize="11" textAnchor="middle" opacity="0.85">leased line lands (wk 10)</text>

          <text x="130" y="118" fill="#ffffff" fontSize="17" fontWeight="700">Expected</text>
          <text x="1110" y="118" fill="#cfe0ff" fontSize="15" textAnchor="end">Live ~2 weeks</text>
          <rect x="130" y="130" width="980" height="26" rx="13" fill="#16263d" stroke="#22405f" />
          <rect className="btc-seg" style={{ animationDelay: ".2s" }} x="130" y="130" width="163" height="26" rx="13" fill="url(#btc-blue)" />
          <circle className="btc-fade" style={{ animationDelay: ".9s" }} cx="293" cy="143" r="6" fill="#ffffff" />

          <text x="130" y="214" fill="#ffffff" fontSize="17" fontWeight="700">Actual</text>
          <text x="1110" y="214" fill="#9fb2c8" fontSize="15" textAnchor="end">Live ~10 weeks</text>
          <rect x="130" y="226" width="980" height="26" rx="13" fill="#16263d" stroke="#22405f" />
          <rect className="btc-seg" style={{ animationDelay: ".2s" }} x="130" y="226" width="163" height="26" rx="13" fill="url(#btc-blue)" />
          <rect className="btc-seg" style={{ animationDelay: "1.0s" }} x="293" y="226" width="654" height="26" fill="url(#btc-wip)" />
          <rect className="btc-seg" style={{ animationDelay: "1.7s" }} x="947" y="226" width="163" height="26" rx="13" fill="url(#btc-blue)" />
          <rect className="btc-seg" style={{ animationDelay: "1.7s" }} x="947" y="226" width="20" height="26" fill="url(#btc-blue)" />
          <circle className="btc-fade" style={{ animationDelay: "2.2s" }} cx="947" cy="239" r="6" fill="#ffffff" />
          <text className="btc-fade" style={{ animationDelay: "1.3s" }} x="130" y="278" fill="#e15a4e" fontSize="14">↑ WIP gap — customer offline, revenue not recognised</text>

          <text x="130" y="320" fill="#ffffff" fontSize="17" fontWeight="700">With Integra Bridge</text>
          <text className="btc-fade" style={{ animationDelay: "2.0s" }} x="947" y="330" fill="#6fb1ff" fontSize="12" textAnchor="middle">circuit catches up</text>
          <rect x="130" y="342" width="980" height="26" rx="13" fill="#16263d" stroke="#22405f" />
          <rect className="btc-seg" style={{ animationDelay: "1.1s" }} x="293" y="342" width="654" height="26" fill="#34c77b" opacity="0.26" />
          <rect className="btc-seg" style={{ animationDelay: "1.8s" }} x="947" y="342" width="163" height="26" rx="13" fill="url(#btc-blue)" />
          <rect className="btc-seg" style={{ animationDelay: "1.8s" }} x="947" y="342" width="20" height="26" fill="url(#btc-blue)" />
          <rect className="btc-seg" style={{ animationDelay: ".35s" }} x="130" y="342" width="163" height="26" rx="13" fill="url(#btc-green)" />
          <circle className="btc-fade" style={{ animationDelay: "1.0s" }} cx="293" cy="355" r="6" fill="#ffffff" />
          <text className="btc-fade" style={{ animationDelay: "1.0s" }} x="305" y="333" fill="#34c77b" fontSize="12">Live in ~2 wks · 10 working days</text>
          <text className="btc-fade" style={{ animationDelay: "1.3s" }} x="130" y="390" fill="#34c77b" fontSize="14">↑ Customer trading from day one — Bridge stays on as failover when the circuit lands.</text>

          <g className="btc-playhead">
            <line x1="130" y1="108" x2="130" y2="372" stroke="#7fb0ff" strokeWidth="2" opacity="0.18" />
          </g>

          <line x1="130" y1="420" x2="1110" y2="420" stroke="#22405f" strokeWidth="1" />
          <g fill="#7e94ad" fontSize="12" textAnchor="middle">
            <text x="211" y="442">1</text><text x="293" y="442">2</text><text x="375" y="442">3</text>
            <text x="457" y="442">4</text><text x="538" y="442">5</text><text x="620" y="442">6</text>
            <text x="702" y="442">7</text><text x="783" y="442">8</text><text x="865" y="442">9</text>
            <text x="947" y="442">10</text><text x="1028" y="442">11</text><text x="1110" y="442">12</text>
          </g>
          <text x="620" y="472" fill="#6f86a1" fontSize="12" letterSpacing="2" textAnchor="middle">WEEKS FROM ORDER</text>
        </svg>
      </div>

      <div className="btc-band-mobile">
        <svg
          viewBox="0 0 390 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Expected go-live about 2 weeks. Actual leased-line go-live about 10 weeks, offline through the WIP gap between. With Integra Bridge the customer is live in about 2 weeks and keeps trading as failover until the circuit lands at week 10."
        >
          <defs>
            <linearGradient id="btc-mblue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a86ff" /><stop offset="100%" stopColor="#1f6fe0" /></linearGradient>
            <linearGradient id="btc-mgreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3ad389" /><stop offset="100%" stopColor="#2bb673" /></linearGradient>
            <pattern id="btc-mwip" patternUnits="userSpaceOnUse" width="11" height="11" patternTransform="rotate(45)">
              <rect width="11" height="11" fill="#e15a4e" opacity="0.16" />
              <rect width="5" height="11" fill="#e15a4e" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="390" height="400" fill="#0a1628" />
          <text x="16" y="22" fill="#2f7dff" fontSize="10" letterSpacing="2" fontWeight="700">EXPECTED VS ACTUAL</text>
          <text x="16" y="36" fill="#2f7dff" fontSize="10" letterSpacing="2" fontWeight="700">— AND WHAT BRIDGE CHANGES</text>

          <line className="btc-mfade" style={{ animationDelay: "1.9s" }} x1="76" y1="60" x2="76" y2="316" stroke="#2f7dff" strokeWidth="1.3" strokeDasharray="3 5" opacity="0.35" />
          <line className="btc-mfade" style={{ animationDelay: "2.0s" }} x1="314" y1="120" x2="314" y2="316" stroke="#9fb2c8" strokeWidth="1.3" strokeDasharray="3 5" opacity="0.3" />
          <text className="btc-mfade" style={{ animationDelay: "1.9s" }} x="76" y="54" fill="#2f7dff" fontSize="9" textAnchor="middle" opacity="0.85">go-live</text>
          <text className="btc-mfade" style={{ animationDelay: "2.0s" }} x="314" y="114" fill="#9fb2c8" fontSize="9" textAnchor="middle" opacity="0.85">circuit lands</text>

          <text x="16" y="74" fill="#ffffff" fontSize="14" fontWeight="700">Expected</text>
          <text x="374" y="74" fill="#cfe0ff" fontSize="12" textAnchor="end">Live ~2 weeks</text>
          <rect x="16" y="84" width="358" height="22" rx="11" fill="#16263d" stroke="#22405f" />
          <rect className="btc-mseg" style={{ animationDelay: ".2s" }} x="16" y="84" width="60" height="22" rx="11" fill="url(#btc-mblue)" />
          <circle className="btc-mfade" style={{ animationDelay: ".85s" }} cx="76" cy="95" r="5" fill="#ffffff" />

          <text x="16" y="150" fill="#ffffff" fontSize="14" fontWeight="700">Actual</text>
          <text x="374" y="150" fill="#9fb2c8" fontSize="12" textAnchor="end">Live ~10 weeks</text>
          <rect x="16" y="160" width="358" height="22" rx="11" fill="#16263d" stroke="#22405f" />
          <rect className="btc-mseg" style={{ animationDelay: ".2s" }} x="16" y="160" width="60" height="22" rx="11" fill="url(#btc-mblue)" />
          <rect className="btc-mseg" style={{ animationDelay: "1.0s" }} x="76" y="160" width="238" height="22" fill="url(#btc-mwip)" />
          <rect className="btc-mseg" style={{ animationDelay: "1.7s" }} x="314" y="160" width="60" height="22" rx="11" fill="url(#btc-mblue)" />
          <rect className="btc-mseg" style={{ animationDelay: "1.7s" }} x="314" y="160" width="12" height="22" fill="url(#btc-mblue)" />
          <circle className="btc-mfade" style={{ animationDelay: "2.2s" }} cx="314" cy="171" r="5" fill="#ffffff" />
          <text className="btc-mfade" style={{ animationDelay: "1.3s" }} x="16" y="200" fill="#e15a4e" fontSize="11">↑ WIP gap — offline, revenue not recognised</text>

          <text x="16" y="248" fill="#ffffff" fontSize="14" fontWeight="700">With Integra Bridge</text>
          <text x="374" y="248" fill="#34c77b" fontSize="12" textAnchor="end">Live ~2 wks</text>
          <rect x="16" y="262" width="358" height="22" rx="11" fill="#16263d" stroke="#22405f" />
          <rect className="btc-mseg" style={{ animationDelay: "1.1s" }} x="76" y="262" width="238" height="22" fill="#34c77b" opacity="0.26" />
          <rect className="btc-mseg" style={{ animationDelay: "1.8s" }} x="314" y="262" width="60" height="22" rx="11" fill="url(#btc-mblue)" />
          <rect className="btc-mseg" style={{ animationDelay: "1.8s" }} x="314" y="262" width="12" height="22" fill="url(#btc-mblue)" />
          <rect className="btc-mseg" style={{ animationDelay: ".35s" }} x="16" y="262" width="60" height="22" rx="11" fill="url(#btc-mgreen)" />
          <circle className="btc-mfade" style={{ animationDelay: "1.0s" }} cx="76" cy="273" r="5" fill="#ffffff" />
          <text className="btc-mfade" style={{ animationDelay: "1.3s" }} x="16" y="302" fill="#34c77b" fontSize="11">↑ Trading from day one — Bridge stays on as failover.</text>

          <g className="btc-mplayhead"><line x1="16" y1="66" x2="16" y2="312" stroke="#7fb0ff" strokeWidth="2" opacity="0.18" /></g>

          <line x1="16" y1="326" x2="374" y2="326" stroke="#22405f" strokeWidth="1" />
          <g fill="#7e94ad" fontSize="11" textAnchor="middle">
            <text x="76" y="344">2</text><text x="135" y="344">4</text><text x="195" y="344">6</text>
            <text x="255" y="344">8</text><text x="314" y="344">10</text><text x="374" y="344">12</text>
          </g>
          <text x="195" y="368" fill="#6f86a1" fontSize="10" letterSpacing="2" textAnchor="middle">WEEKS FROM ORDER</text>
        </svg>
      </div>
    </>
  );
};

export default BridgeTimelineCompare;
