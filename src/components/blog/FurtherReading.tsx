import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FurtherReadingLink {
  slug: string;
  label: string;
}

interface FurtherReadingProps {
  links: FurtherReadingLink[];
  heading?: string;
  dark?: boolean;
}

const FurtherReading = ({ links, heading = "Further reading", dark = false }: FurtherReadingProps) => (
  <section className={`${dark ? "bg-surface-dark" : "bg-background"} py-14 md:py-16`}>
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${dark ? "text-primary" : "text-primary"}`}>
        {heading}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.slug}>
            <Link
              to={`/blog/${l.slug}`}
              className={`group inline-flex items-start gap-2 text-base font-medium ${
                dark ? "text-surface-dark-foreground hover:text-primary" : "text-foreground hover:text-primary"
              } transition-colors`}
            >
              <span className="underline-offset-4 group-hover:underline">{l.label}</span>
              <ArrowRight className="h-4 w-4 mt-1 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default FurtherReading;