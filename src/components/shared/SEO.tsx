import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "NEXR | Critical Power Intelligence";
const DEFAULT_DESCRIPTION = "Real-time visibility, early warnings, and operational clarity for critical power generators. Failure is optional when you pay attention early.";
const DEFAULT_IMAGE = "https://nexr-iot.co.uk/favicon.png";
const SITE_URL = "https://nexr-iot.co.uk";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  publishedTime,
  author,
  noIndex = false,
}: SEOProps) => {
  const pageTitle = title ? `${title} | NEXR` : DEFAULT_TITLE;
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NEXR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific (for blog posts) */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content={author || "NEXR"} />
    </Helmet>
  );
};

export default SEO;
