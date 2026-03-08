import { ReactNode } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import SEO from "@/components/shared/SEO";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  url: string;
  lastUpdated?: string;
  children: ReactNode;
}

/**
 * Reusable layout for legal/policy pages (Privacy, Terms, Cookies, etc.)
 * Ensures consistent typography and styling across all legal pages.
 * 
 * Typography guidelines:
 * - Page title: text-display-sm (3rem, font-weight 400)
 * - Section headings (h2): text-heading-2 (1.75rem, font-weight 500)
 * - Subsection headings (h3): text-heading-3 (1.25rem, font-weight 500)
 * - Body text: text-base with text-muted-foreground
 * - Last updated: text-lg with text-muted-foreground
 */
const LegalPageLayout = ({
  title,
  description,
  url,
  lastUpdated = "January 2026",
  children,
}: LegalPageLayoutProps) => {
  return (
    <PageLayout>
      <SEO title={title} description={description} url={url} />
      <Section className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          {/* Page Title - matches site display typography */}
          <h1 className="text-display-sm text-foreground mb-8">{title}</h1>

          {/* Last Updated */}
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {lastUpdated}
          </p>

          {/* Content Container */}
          <div className="legal-content space-y-6 text-muted-foreground">
            {children}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

/**
 * Section heading component for legal pages
 * Use for main numbered sections (1. About Us, 2. Website Use, etc.)
 */
export const LegalHeading = ({
  number,
  children,
}: {
  number?: string | number;
  children: ReactNode;
}) => (
  <h2 className="text-heading-2 text-foreground mt-10 mb-4">
    {number && `${number}. `}
    {children}
  </h2>
);

/**
 * Subheading component for legal pages
 * Use for subsections within a main section
 */
export const LegalSubheading = ({ children }: { children: ReactNode }) => (
  <h3 className="text-heading-3 text-foreground mt-6 mb-3">{children}</h3>
);

/**
 * Paragraph component for legal pages
 */
export const LegalParagraph = ({ children }: { children: ReactNode }) => (
  <p className="text-base leading-relaxed">{children}</p>
);

/**
 * List component for legal pages
 */
export const LegalList = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 text-base">{children}</ul>
);

/**
 * Info box component for legal pages (company details, contact info, etc.)
 */
export const LegalInfoBox = ({ children }: { children: ReactNode }) => (
  <div className="bg-muted/20 border border-border/30 rounded-lg p-4 mt-4">
    {children}
  </div>
);

export default LegalPageLayout;
