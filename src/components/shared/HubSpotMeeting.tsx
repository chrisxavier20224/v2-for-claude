import { useEffect, useRef } from "react";
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
}

const MEETING_URL = "https://meetings.hubspot.com/chris-clapham?embed=true";

const HubSpotMeeting = ({
  heading = "Book a Call",
  subtitle = "Pick a time that works for you and we'll walk through your connectivity options — no obligation.",
  variant = "dark",
  bare = false,
}: HubSpotMeetingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot meetings embed script once
    const existingScript = document.querySelector(
      'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  const isDark = variant === "dark";

  if (bare) {
    return (
      <div
        ref={containerRef}
        className="meetings-iframe-container"
        data-src={MEETING_URL}
        style={{ minHeight: "660px" }}
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
          <div
            ref={containerRef}
            className="meetings-iframe-container"
            data-src={MEETING_URL}
            style={{ minHeight: "660px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HubSpotMeeting;
