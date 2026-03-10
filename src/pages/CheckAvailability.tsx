import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, Building2, Laptop, Home, Check, Search, Loader2,
  Zap, Clock, Shield, Star, Wifi, MapPin, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { trackEvent, identifyUser } from "@/components/shared/Analytics";
import heroBg from "@/assets/sectors/homeworker-remote-work.avif";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type ServiceType = "business" | "home_worker" | "consumer";
type PainPoint = "slow_connection" | "intermittent" | "moving_no_fibre" | "need_faster" | "quoted_thousands";

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
const SERVICE_OPTIONS: { value: ServiceType; icon: typeof Building2; title: string; desc: string; benefit: string }[] = [
  { value: "business", icon: Building2, title: "Business", desc: "Operations, VoIP, cloud apps and video calls", benefit: "Up to 500Mbps symmetric" },
  { value: "home_worker", icon: Laptop, title: "Home Worker", desc: "Rock-solid connection for remote working", benefit: "No more dropped Zoom calls" },
  { value: "consumer", icon: Home, title: "Consumer", desc: "Streaming, gaming and keeping everyone connected", benefit: "Whole-home coverage" },
];

const PAIN_POINTS: { value: PainPoint; label: string }[] = [
  { value: "slow_connection", label: "We have an existing internet connection that is simply too slow" },
  { value: "intermittent", label: "Our critical services are working intermittently due to poor broadband" },
  { value: "moving_no_fibre", label: "We are moving to a new location and Fibre isn't available" },
  { value: "need_faster", label: "We need a faster connection to scale our business operations" },
  { value: "quoted_thousands", label: "We have been quoted thousands to have a Fibre connection installed" },
];

const TYPE_LABELS: Record<ServiceType, string> = {
  business: "Business",
  home_worker: "Home Worker",
  consumer: "Consumer",
};

const HERO_COPY: Record<number, { title: string; sub: string }> = {
  1: { title: "Let's get you connected", sub: "It takes 60 seconds to check — and could change everything" },
  2: { title: "Tell us about you", sub: "So we can recommend the perfect solution" },
  3: { title: "Show us your property", sub: "Drop a pin and we'll check what speeds we can deliver" },
};

/* ------------------------------------------------------------------ */
/*  HubSpot Forms API                                                  */
/* ------------------------------------------------------------------ */
const HUBSPOT_PORTAL_ID = "20314482";
const HUBSPOT_FORM_GUID = "2aebddb4-ae9f-4b6a-9010-d3b47c6ef797";

const USER_TYPE_HS: Record<string, string> = {
  business: "Business",
  home_worker: "Home Worker",
  consumer: "Consumer",
};

const PAIN_LABEL_HS: Record<string, string> = {
  slow_connection: "Existing connection too slow",
  intermittent: "Critical services intermittent due to poor broadband",
  moving_no_fibre: "Moving to new location, fibre not available",
  need_faster: "Need faster connection to scale operations",
  quoted_thousands: "Quoted thousands for fibre install",
};

/* CRM values for which_statement_applies_to_you_ (must match exactly, including legacy typos) */
const PAIN_CRM_VALUE: Record<string, string> = {
  slow_connection: "We have an existing internet connection that is simply to slow",
  intermittent: "Our critical services are working intermittantly due to poor broadband",
  moving_no_fibre: "We are moving to a new location and Fibre isn't available",
  need_faster: "We need a faster connection to scale our business operations",
  quoted_thousands: "We have been quoted thousands to have a Fibre connection installed.",
};

async function submitToHubSpot(payload: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_type: string | null;
  pain_points: string[];
  country: string | null;
  postcode: string;
  admin_ward: string | null;
  admin_district: string | null;
  region: string | null;
  property_coordinates: string | null;
}): Promise<boolean> {
  const fields: { objectTypeId: string; name: string; value: string }[] = [
    { objectTypeId: "0-1", name: "firstname", value: payload.first_name },
    { objectTypeId: "0-1", name: "lastname", value: payload.last_name },
    { objectTypeId: "0-1", name: "email", value: payload.email },
    { objectTypeId: "0-1", name: "phone", value: payload.phone },
    { objectTypeId: "0-1", name: "zip", value: payload.postcode },
  ];

  if (payload.user_type) {
    fields.push({
      objectTypeId: "0-1",
      name: "what_kind_of_business_are_you_",
      value: USER_TYPE_HS[payload.user_type] || payload.user_type,
    });
  }

  if (payload.property_coordinates) {
    fields.push({ objectTypeId: "0-1", name: "property_coordinates", value: payload.property_coordinates });
  }

  if (payload.country) {
    const countryMap: Record<string, string> = {
      England: "England", Scotland: "Scotland", Wales: "Wales", "Northern Ireland": "Northern Ireland",
    };
    if (countryMap[payload.country]) {
      fields.push({ objectTypeId: "0-1", name: "uk_geo_location", value: countryMap[payload.country] });
    }
  }

  if (payload.admin_district) {
    fields.push({ objectTypeId: "0-1", name: "city", value: payload.admin_district });
  }
  if (payload.region) {
    fields.push({ objectTypeId: "0-1", name: "state", value: payload.region });
  }

  // Pain points as a semicolon-separated string for the message field
  if (payload.pain_points.length > 0) {
    const painText = payload.pain_points.map((p) => PAIN_LABEL_HS[p] || p).join("; ");
    fields.push({ objectTypeId: "0-1", name: "message", value: painText });

    // Also populate the legacy "Which Statement applies to you?" enumeration
    const crmValues = payload.pain_points
      .map((p) => PAIN_CRM_VALUE[p])
      .filter(Boolean)
      .join(";");
    if (crmValues) {
      fields.push({ objectTypeId: "0-1", name: "which_statement_applies_to_you_", value: crmValues });
    }
  }

  try {
    const resp = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: "Availability Checker",
          },
        }),
      },
    );
    if (!resp.ok) {
      const err = await resp.text();
      console.error("HubSpot form submission error:", err);
    }
    return resp.ok;
  } catch (err) {
    console.error("HubSpot network error:", err);
    return false;
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

/* ------------------------------------------------------------------ */
/*  Leaflet helpers (loaded from CDN)                                  */
/* ------------------------------------------------------------------ */
declare global {
  interface Window { L: any; }
}

function loadLeaflet(): Promise<void> {
  return new Promise((resolve) => {
    if (window.L) { resolve(); return; }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */
const ProgressBar = ({ step }: { step: number }) => (
  <div className="flex gap-1.5 max-w-xs mx-auto mt-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
        <div className={`w-full h-1 rounded-full transition-all duration-500 ${
          i === step ? "bg-primary" : i < step ? "bg-primary/40" : "bg-white/10"
        }`} />
        <span className={`text-[10px] font-medium transition-colors ${
          i === step ? "text-primary" : i < step ? "text-primary/50" : "text-white/20"
        }`}>
          {["Details", "About You", "Pin Drop"][i - 1]}
        </span>
      </div>
    ))}
  </div>
);

const TrustBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="flex flex-wrap items-center justify-center gap-3 mt-8"
  >
    {[
      { icon: Zap, text: "Up to 500Mbps" },
      { icon: Clock, text: "Live in 14 Days" },
      { icon: Shield, text: "14-Day Money Back" },
    ].map((item) => (
      <div key={item.text} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
        <item.icon className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-white">{item.text}</span>
      </div>
    ))}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
const CheckAvailability = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2
  const [service, setService] = useState<ServiceType | null>(null);
  const [pains, setPains] = useState<Set<PainPoint>>(new Set());

  // Step 3
  const [postcode, setPostcode] = useState("");
  const [pcData, setPcData] = useState<PostcodeData | null>(null);
  const [pcLoading, setPcLoading] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const [step1Touched, setStep1Touched] = useState(false);
  const formStartedRef = useRef(false);

  /* ---- Conversion tracking ---- */
  // Track form_view on mount (equivalent to Typeform "views")
  useEffect(() => {
    trackEvent("form_view", { form_name: "availability_checker", form_location: "/check" });
  }, []);

  // Track form_start once (equivalent to Typeform "starts")
  const trackFormStart = useCallback(() => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("form_start", { form_name: "availability_checker" });
    }
  }, []);

  const phoneDigits = phone.replace(/[^0-9]/g, "");
  const phoneValid = phoneDigits.length >= 10 && phoneDigits.length <= 13;
  const emailValid = email.trim().includes("@") && email.trim().includes(".");
  const firstNameValid = !!firstName.trim();
  const lastNameValid = !!lastName.trim();
  const step1Valid = firstNameValid && lastNameValid && emailValid && phoneValid;
  const step2Valid = !!service;

  const togglePain = (p: PainPoint) => {
    setPains((prev) => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
      return next;
    });
  };

  /* ---- Map ---- */
  const initMap = useCallback(async () => {
    await loadLeaflet();
    const L = window.L;
    if (!mapContainerRef.current || mapRef.current) return;

    const m = L.map(mapContainerRef.current, { zoomControl: true, scrollWheelZoom: true }).setView([52.5, -1.5], 6);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { attribution: "Esri", maxZoom: 20 }).addTo(m);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", { maxZoom: 20, opacity: 0.85 }).addTo(m);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}", { maxZoom: 20, opacity: 0.6 }).addTo(m);

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

  /* ---- Postcode ---- */
  const lookupPostcode = async () => {
    const pc = postcode.trim().replace(/\s+/g, "");
    if (!pc) return;
    setPcLoading(true);
    try {
      const resp = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(pc)}`);
      const data = await resp.json();
      if (data.status === 200 && data.result) {
        setPcData(data.result);
        await initMap();
        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.invalidateSize();
            mapRef.current.flyTo([data.result.latitude, data.result.longitude], 18, { duration: 1.5 });
          }
        }, 400);
      } else { alert("Postcode not found. Please check and try again."); }
    } catch { alert("Error looking up postcode. Please try again."); }
    setPcLoading(false);
  };

  /* ---- Navigation & submission ---- */
  const goTo = async (n: number) => {
    if (n === 4) {
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
        property_coordinates: coords
          ? `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`
          : null,
      };

      setSubmitting(true);
      try {
        const ok = await submitToHubSpot(payload);

        // ── Conversion tracking ──
        // Identify user in HubSpot for future page tracking
        identifyUser(email, {
          firstname: firstName,
          lastname: lastName,
          phone,
        });

        // GA4: generate_lead is a recommended conversion event
        trackEvent("generate_lead", {
          form_name: "availability_checker",
          user_type: service,
          postcode: postcode.toUpperCase(),
          region: pcData?.region ?? "",
          country: pcData?.country ?? "",
          submission_success: ok,
        });

        // GA4: form_submit for funnel analysis
        trackEvent("form_submit", {
          form_name: "availability_checker",
          form_step: 3,
          value: 1,
        });
      } catch (err) {
        console.error("Submission error:", err);
      }

      navigate("/thankyou");
      return;
    }

    // Track step progression
    trackEvent("form_step", {
      form_name: "availability_checker",
      form_step: n,
      step_label: ["", "details", "about_you", "pin_drop"][n] || `step_${n}`,
    });

    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- Render ---- */
  const hero = HERO_COPY[step] || HERO_COPY[1];

  return (
    <PageLayout>
      <SEO
        title="Check Your Availability — Integra Networks"
        description="Check if Integra Networks can bring fast broadband to your property. Drop a pin on your building and we'll run an automated coverage check."
        keywords="availability checker, broadband coverage, rural broadband, Integra Networks"
        url="/check"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-surface-dark" />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-xl w-full px-4 pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wifi className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-xs font-semibold text-white uppercase tracking-[0.15em]">Free Coverage Check</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`hero-${step}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-display-sm md:text-[3rem] text-white font-medium mb-4 leading-tight">{hero.title}</h1>
              <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto leading-relaxed">{hero.sub}</p>
            </motion.div>
          </AnimatePresence>

          <ProgressBar step={step} />
          {step === 1 && <TrustBar />}
        </div>
      </section>

      {/* ── FORM AREA ────────────────────────────────────────── */}
      <section className="bg-background relative z-10 -mt-12 pt-8">
        <div className="mx-auto max-w-lg px-4 pb-20">
          <AnimatePresence mode="wait">

            {/* ═══ STEP 1: About You ═══ */}
            {step === 1 && (
              <motion.div key="step1" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-lg mb-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Your details</h2>
                      <p className="text-xs text-muted-foreground">So we can send you your results</p>
                    </div>
                  </div>

                  <form autoComplete="on" onSubmit={(e) => { e.preventDefault(); setStep1Touched(true); if (step1Valid) goTo(2); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="fname" className="block text-sm font-medium text-foreground mb-1.5">First name</label>
                        <Input id="fname" name="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} onFocus={trackFormStart} placeholder="Sarah" autoComplete="given-name" className={step1Touched && !firstNameValid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                        {step1Touched && !firstNameValid && <p className="text-xs text-red-500 mt-1">Required</p>}
                      </div>
                      <div>
                        <label htmlFor="lname" className="block text-sm font-medium text-foreground mb-1.5">Last name</label>
                        <Input id="lname" name="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} onFocus={trackFormStart} placeholder="Thompson" autoComplete="family-name" className={step1Touched && !lastNameValid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                        {step1Touched && !lastNameValid && <p className="text-xs text-red-500 mt-1">Required</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                      <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={trackFormStart} placeholder="sarah@example.com" autoComplete="email" className={step1Touched && !emailValid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                      {step1Touched && !emailValid && <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone number</label>
                      <Input id="phone" name="tel" type="tel" inputMode="numeric" pattern="[0-9]*" maxLength={15} value={phone} onChange={(e) => { const digits = e.target.value.replace(/[^0-9+ ]/g, ""); setPhone(digits); }} onFocus={trackFormStart} placeholder="07700 900 000" autoComplete="tel" className={step1Touched && !phoneValid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                      {step1Touched && !phoneValid && <p className="text-xs text-red-500 mt-1">{phone.trim() ? "Please enter a valid UK phone number (10-11 digits)" : "Required"}</p>}
                    </div>
                    {/* Hidden submit button allows Enter key and helps autocomplete */}
                    <button type="submit" className="hidden" />
                  </form>
                </div>

                <Button onClick={() => { setStep1Touched(true); if (step1Valid) goTo(2); }} size="lg" className="w-full h-14 text-lg font-semibold shadow-xl shadow-primary/30 rounded-xl">
                  Check My Availability <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Social proof nudge */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-5 text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Rated <span className="font-semibold text-foreground">4.9/5</span> on Reviews.io
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* ═══ STEP 2: Service Type + Pain Points ═══ */}
            {step === 2 && (
              <motion.div key="step2" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-lg mb-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">What best describes you?</h2>
                      <p className="text-xs text-muted-foreground">We'll tailor your results to match</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setService(opt.value)}
                        className={`w-full flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                          service === opt.value
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/30 hover:bg-muted/30"
                        }`}
                      >
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          service === opt.value ? "bg-primary text-white" : "bg-muted"
                        }`}>
                          <opt.icon className={`h-5 w-5 ${service === opt.value ? "text-white" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                            {service === opt.value && <Check className="h-4 w-4 text-primary flex-shrink-0" />}
                          </div>
                          <p className="text-xs text-muted-foreground leading-snug">{opt.desc}</p>
                          <p className="text-xs font-medium text-primary mt-1">{opt.benefit}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">Sound familiar? Tick any that apply:</p>
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
                </div>

                <Button onClick={() => goTo(3)} disabled={!step2Valid} size="lg" className="w-full h-14 text-lg font-semibold shadow-xl shadow-primary/30 rounded-xl">
                  Continue to Pin Drop <MapPin className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" onClick={() => goTo(1)} className="w-full mt-2 h-11">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                {/* Reassurance */}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  No commitment. No credit card. Just a free coverage check.
                </p>
              </motion.div>
            )}

            {/* ═══ STEP 3: Pin Drop Map ═══ */}
            {step === 3 && (
              <motion.div key="step3" {...fadeUp}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-lg mb-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Find your property</h2>
                      <p className="text-xs text-muted-foreground">We'll check coverage for your exact location</p>
                    </div>
                  </div>

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
                    <Button onClick={lookupPostcode} disabled={pcLoading} className={`px-5 ${postcode.trim().length >= 5 && !pcData ? "animate-pulse" : ""}`}>
                      {pcLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Search className="h-4 w-4 mr-1" /> Find</>}
                    </Button>
                  </div>

                  {!pcData && !pcLoading && (
                    <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                      <ArrowRight className="h-3 w-3" /> Enter your postcode and tap <span className="font-semibold text-primary">Find</span> to load the map
                    </p>
                  )}

                  {pcData && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-lg bg-green-500/5 border border-green-500/20 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-green-600">Area Found</p>
                          <p className="text-sm text-foreground">
                            {[pcData.admin_ward, pcData.admin_district, pcData.region].filter(Boolean).join(", ")}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {pcData && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg mb-4">
                      <div
                        ref={mapContainerRef}
                        className="w-full rounded-xl border border-border overflow-hidden"
                        style={{ height: 380 }}
                      />
                      <div className="mt-3 rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 text-center">
                        <p className="text-sm text-foreground leading-relaxed">
                          <span className="font-semibold text-primary">Tap your building</span> to drop the pin — try to place it right on your roof for the most accurate results.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          <span className="font-medium text-amber-600">Important:</span> Your pin location is used to calculate coverage and pricing. Selecting the wrong property may result in an inaccurate proposal, so please double-check before submitting.
                        </p>
                      </div>

                      {coords && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 rounded-lg bg-green-500/5 border border-green-500/20 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-green-600">Pin Placed</p>
                              <p className="text-sm font-mono text-foreground">
                                {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <Button onClick={() => goTo(4)} disabled={!coords || submitting} size="lg" className="w-full h-14 text-lg font-semibold shadow-xl shadow-primary/30 rounded-xl">
                      {submitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…</>
                      ) : (
                        <>Check My Coverage <ArrowRight className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </motion.div>
                )}

                <Button variant="outline" onClick={() => goTo(2)} className="w-full mt-2 h-11">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                {/* Final reassurance */}
                <div className="mt-6 rounded-xl bg-muted/50 border border-border p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-0.5">Your data is safe</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        We only use your location to check network coverage. No spam, no obligation, and we'll never share your details.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
};

export default CheckAvailability;
