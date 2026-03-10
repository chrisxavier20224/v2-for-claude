import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface HubSpotMeetingProps {
  /** Heading above the widget. Defaults to "Book a Call" */
  heading?: string;
  /** Subtitle. Defaults to a generic line. */
  subtitle?: string;
  /** Background variant */
  variant?: "dark" | "light";
  /** Whether to show the section wrapper (heading + padding) or just the raw embed */
  bare?: boolean;
  /** Custom meeting URL. Defaults to Chris Clapham's general link */
  meetingUrl?: string;
}

const DEFAULT_MEETING_URL = "https://meetings.hubspot.com/chris-clapham";

const HubSpotMeeting = ({
  heading = "Book a Call",
  subtitle = "Pick a time that works for you and we'll walk through your connectivity options — no obligation.",
  variant = "dark",
  bare = false,
  meetingUrl,
}: HubSpotMeetingProps) => {
  // Build the iframe URL with embed=true
  const baseUrl = meetingUrl || DEFAULT_MEETING_URL;
  const iframeSrc = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}embed=true`;

  const isDark = variant === "dark";

  if (bare) {
    return (
      <iframe
        src={iframeSrc}
        title="Book a meeting with Integra Networks"
        className="w-full border-0"
        style={{ minHeight: "700px" }}
        loading="eager"
      />
    );
  }

  return (
    <section className={isDark ? "bg-surface-dark py-16 md:py-24" : "bg-background py-16 md:py-24"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">
            Let's Talk
          </p>
          <h2
            className={`text-heading-1 md:text-display-sm text-center mb-4 ${
              isDark ? "text-surface-dark-foreground" : "text-foreground"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`text-lg text-center mb-10 max-w-xl mx-auto ${
              isDark ? "text-surface-dark-muted" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`rounded-2xl overflow-hidden ${
            isDark ? "border border-white/10 bg-white/[0.03]" : "border border-border bg-card"
          }`}
        >
          <iframe
            src={iframeSrc}
            title="Book a meeting with Integra Networks"
            className="w-full border-0"
            style={{ minHeight: "700px" }}
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HubSpotMeeting;
