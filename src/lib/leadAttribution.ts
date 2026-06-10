/**
 * Lead attribution capture and persistence.
 *
 * Sanitises gclid/UTM values to defend against malformed ad tracking
 * templates that glue the landing-page URL onto the gclid (or other params).
 * Each parameter is read independently from its own query key — we never
 * substitute the page URL when a key is absent.
 */

export type LeadAttribution = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
}>;

const KEYS: (keyof LeadAttribution)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
];

const PRIMARY_STORE_KEY = "integra_lead_attribution";
const LEGACY_STORE_KEY = "integra_utm_params";

/**
 * Trim a captured query value to a safe single token.
 * Cuts at the first whitespace, `http://`, `https://`, `<`, or stray `?`/`&`.
 */
const sanitize = (raw: string | null): string | undefined => {
  if (!raw) return undefined;
  let value: string;
  try {
    value = decodeURIComponent(raw);
  } catch {
    value = raw;
  }
  value = value.trim();
  if (!value) return undefined;
  // Cut at the first URL/whitespace/separator that should never appear inside a real param value.
  const cutMatch = value.match(/(https?:\/\/|[\s<?&])/);
  if (cutMatch && cutMatch.index !== undefined) {
    value = value.slice(0, cutMatch.index);
  }
  value = value.trim();
  return value || undefined;
};

const cleanRecord = (input: Record<string, unknown>): LeadAttribution => {
  const out: LeadAttribution = {};
  for (const k of KEYS) {
    const v = input[k];
    if (typeof v === "string") {
      const cleaned = sanitize(v);
      if (cleaned) out[k] = cleaned;
    }
  }
  return out;
};

const readStored = (): LeadAttribution => {
  if (typeof window === "undefined") return {};
  try {
    const raw =
      window.localStorage.getItem(PRIMARY_STORE_KEY) ||
      window.sessionStorage.getItem(PRIMARY_STORE_KEY) ||
      window.sessionStorage.getItem(LEGACY_STORE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return cleanRecord(parsed as Record<string, unknown>);
    }
  } catch {
    /* ignore */
  }
  return {};
};

const writeStored = (data: LeadAttribution) => {
  if (typeof window === "undefined") return;
  try {
    const serialised = JSON.stringify(data);
    window.localStorage.setItem(PRIMARY_STORE_KEY, serialised);
    // Back-compat: any in-flight code still reading the legacy sessionStorage key keeps working.
    window.sessionStorage.setItem(LEGACY_STORE_KEY, serialised);
    window.sessionStorage.setItem(PRIMARY_STORE_KEY, serialised);
  } catch {
    /* ignore */
  }
};

/**
 * Capture attribution from the current URL and merge with any previously
 * persisted values. URL params win when present; persisted values are
 * preserved when the URL is empty (first-touch attribution).
 */
export const captureLeadAttribution = (): LeadAttribution => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: LeadAttribution = {};
  for (const k of KEYS) {
    const cleaned = sanitize(params.get(k));
    if (cleaned) fromUrl[k] = cleaned;
  }
  const stored = readStored();
  // URL is current touch — overwrite stored values for any key present in URL.
  const merged: LeadAttribution = { ...stored, ...fromUrl };
  // Persist (sanitises any poisoned legacy storage at the same time).
  if (Object.keys(merged).length > 0) writeStored(merged);
  return merged;
};

/** Read the current best-known attribution. Re-sanitises on every read. */
export const getLeadAttribution = (): LeadAttribution => readStored();
