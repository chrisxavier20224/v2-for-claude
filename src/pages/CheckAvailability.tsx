import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Building2, Laptop, Home, Check, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type ServiceType = "business" | "home_worker" | "consumer";
type PainPoint = "slow_connection" | "intermittent" | "no_fibre" | "need_faster";

interface PostcodeData {
  latitude: number;
  longitude: number;
  admin_ward: string;
  admin_district: string;
  region: string;
  country: string;
  postcode: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const SERVICE_OPTIONS: { value: ServiceType; icon: typeof Building2; title: string; desc: string }[] = [
  { value: "business", icon: Building2, title: "Business", desc: "High-speed connection for operations, video calls and cloud services" },
  { value: "home_worker", icon: Laptop, title: "Home Worker", desc: "Reliable internet for working from home and video calls" },
  { value: "consumer", icon: Home, title: "Consumer", desc: "Everyday broadband for streaming, browsing and staying connected" },
];

const PAIN_POINTS: { value: PainPoint; label: string }[] = [
  { value: "slow_connection", label: "My current broadband is too slow" },
  { value: "intermittent", label: "I experience intermittent or unreliable service" },
  { value: "no_fibre", label: "I'm moving to a property with no fibre" },
  { value: "need_faster", label: "I need a faster connection for my business" },
];

const TYPE_LABELS: Record<ServiceType, string> = {
  business: "Business",
  home_worker: "Home Worker",
  consumer: "Consumer",
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

/* ------------------------------------------------------------------ */
/*  Leaflet helpers (loaded from CDN)                                  */
/* ------------------------------------------------------------------ */
declare global {
  interface Window {
    L: any;
  }
}

function loadLeaflet(): Promise<void> {
  return new Promise((resolve) => {
    if (window.L) { resolve(); return; }

    // CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

/* ------------------------------------------------------------------ */
/*  Progress bar                                                       */
/* ------------------------------------------------------------------ */
const ProgressBar = ({ step }: { step: number }) => (
  <div className="flex gap-1.5 max-w-sm mx-auto mt-6">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className={`flex-1 h-1 rounded-full transition-all duration-500 ${
          i === step ? "bg-primary" : i < step ? "bg-primary/40" : "bg-white/10"
        }`}
      />
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
const CheckAvailability = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1 — About You
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2 — Service + Pain Points
  const [service, setService] = useState<ServiceType | null>(null);
  const [pains, setPains] = useState<Set<PainPoint>>(new Set());

  // Step 3 — Map
  const [postcode, setPostcode] = useState("");
  const [pcData, setPcData] = useState<PostcodeData | null>(null);
  const [pcLoading, setPcLoading] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  // Step 1 validation
  const step1Valid = firstName.trim() && lastName.trim() && email.trim().includes("@") && phone.trim();

  // Step 2 validation
  const step2Valid = !!service;

  const togglePain = (p: PainPoint) => {
    setPains((prev) => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
      return next;
    });
  };

  /* ---- Map initialisation ---- */
  const initMap = useCallback(async () => {
    await loadLeaflet();
    const L = window.L;
    if (!mapContainerRef.current || mapRef.current) return;

    const m = L.map(mapContainerRef.current, { zoomControl: true, scrollWheelZoom: true }).setView([52.5, -1.5], 6);

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Esri", maxZoom: 20,
    }).addTo(m);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 20, opacity: 0.85,
    }).addTo(m);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 20, opacity: 0.6,
    }).addTo(m);

    m.on("click", (e: any) => {
      if (markerRef.current) markerRef.current.setLatLng(e.latlng);
      else {
        markerRef.current = L.marker(e.latlng, { draggable: true, autoPan: true }).addTo(m);
        markerRef.current.on("dragend", () => {
          const ll = markerRef.current.getLatLng();
          setCoords({ lat: ll.lat, lng: ll.lng });
        });
      }
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });

    mapRef.current = m;
    setTimeout(() => m.invalidateSize(), 300);
    setTimeout(() => m.invalidateSize(), 600);
  }, []);

  /* ---- Postcode lookup ---- */
  const lookupPostcode = async () => {
    const pc = postcode.trim().replace(/\s+/g, "");
    if (!pc) return;
    setPcLoading(true);
    try {
      const resp = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(pc)}`);
      const data = await resp.json();
      if (data.status === 200 && data.result) {
        const r = data.result;
        setPcData(r);
        // Init map if not yet done
        await initMap();
        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.invalidateSize();
            mapRef.current.flyTo([r.latitude, r.longitude], 18, { duration: 1.5 });
          }
        }, 400);
      } else {
        alert("Postcode not found. Please check and try again.");
      }
    } catch {
      alert("Error looking up postcode. Please try again.");
    }
    setPcLoading(false);
  };

  /* ---- Step navigation ---- */
  const goTo = (n: number) => {
    if (n === 4) {
      // Submit — log payload and redirect to thank you
      const payload = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        user_type: service,
        pain_points: Array.from(pains),
        country: pcData?.country ?? null,
        postcode: postcode.toUpperCase(),
        admin_ward: pcData?.admin_ward ?? null,
        admin_district: pcData?.admin_district ?? null,
        region: pcData?.region ?? null,
        latitude: coords?.lat,
        longitude: coords?.lng,
        property_coordinates: coords ? `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}` : null,
      };
      console.log("SUBMISSION PAYLOAD:", JSON.stringify(payload, null, 2));
      navigate("/thankyou");
      return;
    }
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- Render ---- */
  return (
    <PageLayout>
      <SEO
        title="Check Your Availability — Integra Networks"
        description="Check if Integra Networks can bring fast broadband to your property. Drop a pin on your building and we'll run an automated coverage check."
        keywords="availability checker, broadband coverage, rural broadband, Integra Networks"
        url="/check"
      />

      {/* ── HERO HEADER ──────────────────────────────────────── */}
      <section className="bg-surface-dark pt-12 pb-16 text-center -mt-20 pt-32">
        <div className="mx-auto max-w-xl px-4">
          <motion.h1
            key={`title-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-heading-1 md:text-display-sm text-white mb-2"
          >
            Check your availability
          </motion.h1>
          <p className="text-lg text-surface-dark-muted">
            See if we can bring fast, reliable broadband to your property
          </p>
          <ProgressBar step={step} />
        </div>
      </section>

      {/* ── FORM AREA ────────────────────────────────────────── */}
      <section className="bg-background py-0 -mt-6 relative z-10">
        <div className="mx-auto max-w-lg px-4 pb-16">
          <AnimatePresence mode="wait">
            {/* ═══ STEP 1: About You ═══ */}
            {step === 1 && (
              <motion.div key="step1" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-sm mb-4">
                  <h2 className="text-xl font-semibold text-foreground mb-1">About you</h2>
                  <p className="text-sm text-muted-foreground mb-6">We just need a few details to get started.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First name</label>
                      <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Sarah" autoComplete="given-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last name</label>
                      <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Thompson" autoComplete="family-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sarah@example.com" autoComplete="email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone number</label>
                      <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07700 900 000" autoComplete="tel" />
                    </div>
                  </div>
                </div>

                <Button onClick={() => goTo(2)} disabled={!step1Valid} className="w-full h-12 text-base font-medium">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* ═══ STEP 2: Service Type + Pain Points ═══ */}
            {step === 2 && (
              <motion.div key="step2" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-sm mb-4">
                  <h2 className="text-xl font-semibold text-foreground mb-1">What kind of user are you?</h2>
                  <p className="text-sm text-muted-foreground mb-6">This helps us recommend the right solution for you.</p>

                  <div className="space-y-3">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setService(opt.value)}
                        className={`w-full flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                          service === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30 hover:bg-muted/30"
                        }`}
                      >
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          service === opt.value ? "bg-primary/15" : "bg-muted"
                        }`}>
                          <opt.icon className={`h-5 w-5 ${service === opt.value ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                          <p className="text-xs text-muted-foreground leading-snug">{opt.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-foreground mt-6 mb-3">Which of these apply to you?</p>
                  <div className="space-y-2">
                    {PAIN_POINTS.map((pp) => (
                      <button
                        key={pp.value}
                        onClick={() => togglePain(pp.value)}
                        className={`w-full flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all ${
                          pains.has(pp.value)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className={`h-5 w-5 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                          pains.has(pp.value) ? "bg-primary" : "border-2 border-border"
                        }`}>
                          {pains.has(pp.value) && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span className="text-sm text-foreground">{pp.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button onClick={() => goTo(3)} disabled={!step2Valid} className="w-full h-12 text-base font-medium">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => goTo(1)} className="w-full mt-2 h-11">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              </motion.div>
            )}

            {/* ═══ STEP 3: Pin Drop Map ═══ */}
            {step === 3 && (
              <motion.div key="step3" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-sm mb-4">
                  <h2 className="text-xl font-semibold text-foreground mb-1">Find your property</h2>
                  <p className="text-sm text-muted-foreground mb-6">Enter your postcode, then tap your property on the satellite map.</p>

                  <label className="block text-sm font-medium text-foreground mb-1.5">Postcode</label>
                  <div className="flex gap-2">
                    <Input
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      placeholder="e.g. GU27 1JL"
                      autoComplete="postal-code"
                      className="flex-1 uppercase"
                      onKeyDown={(e) => e.key === "Enter" && lookupPostcode()}
                    />
                    <Button onClick={lookupPostcode} disabled={pcLoading} className="px-5">
                      {pcLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Search className="h-4 w-4 mr-1" /> Find</>}
                    </Button>
                  </div>

                  {pcData && (
                    <div className="mt-4 rounded-lg bg-primary/5 border border-primary/20 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-0.5">Area Found</p>
                      <p className="text-sm text-foreground">
                        {[pcData.admin_ward, pcData.admin_district, pcData.region].filter(Boolean).join(", ")} — {pcData.postcode}
                      </p>
                    </div>
                  )}
                </div>

                {pcData && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm mb-4">
                      <div
                        ref={mapContainerRef}
                        className="w-full rounded-xl border border-border overflow-hidden"
                        style={{ height: 380 }}
                      />
                      <p className="text-center text-sm text-muted-foreground mt-3 leading-relaxed">
                        <span className="font-medium text-primary">Tap or click directly on your property</span> to drop the pin.<br />
                        Zoom in for accuracy — try to place the pin on your roof.
                      </p>

                      {coords && (
                        <div className="mt-3 rounded-lg bg-primary/5 border border-primary/20 px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-0.5">Pin Location</p>
                          <p className="text-sm font-mono text-foreground">
                            {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
                          </p>
                        </div>
                      )}
                    </div>

                    <Button onClick={() => goTo(4)} disabled={!coords} className="w-full h-12 text-base font-medium">
                      Check my coverage <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}

                <Button variant="outline" onClick={() => goTo(2)} className="w-full mt-2 h-11">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
};

export default CheckAvailability;
