import { Quote } from "lucide-react";

interface PartnerTestimonialProps {
  quote: string;
  name: string;
  title: string;
  eyebrow?: string;
}

const PartnerTestimonial = ({
  quote,
  name,
  title,
  eyebrow = "Account Manager",
}: PartnerTestimonialProps) => (
  <figure className="not-prose my-12 relative rounded-2xl border border-border bg-card shadow-sm p-8 md:p-10">
    {eyebrow && (
      <span className="absolute top-6 right-6 md:top-8 md:right-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </span>
    )}
    <Quote
      className="h-10 w-10 md:h-12 md:w-12 text-primary mb-5"
      strokeWidth={1.5}
      aria-hidden
    />
    <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 font-normal">
      {quote}
    </blockquote>
    <div className="mt-7 pt-5 border-t border-border">
      <figcaption className="leading-tight">
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground mt-1">{title}</div>
      </figcaption>
    </div>
  </figure>
);

export default PartnerTestimonial;