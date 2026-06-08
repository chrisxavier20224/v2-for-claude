import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Integra Networks | Business-Grade Connectivity";
const DEFAULT_DESCRIPTION = "Managed connectivity and SD-WAN solutions for businesses across the UK. 4G/5G bonding, Starlink, Wi-Fi, and leased lines — installed in 10 working days.";
const DEFAULT_IMAGE = "https://integra-networks.co.uk/og-image.png";
const SITE_URL = "https://integra-networks.co.uk";

const normalisePath = (path?: string) => {
  if (!path || path === "/") return "";
  try {
    const parsed = new URL(path, SITE_URL);
    return parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
  } catch {
    return path.startsWith("/") ? path.replace(/\/$/, "") : `/${path}`.replace(/\/$/, "");
  }
};

const upsertLink = (rel: string, href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  imageWidth,
  imageHeight,
  url,
  type = "website",
  publishedTime,
  author,
  noIndex = false,
}: SEOProps) => {
  const pageTitle = title
    ? /integra(\s+networks)?\s*$/i.test(title.trim())
      ? title
      : `${title} | Integra Networks`
    : DEFAULT_TITLE;
  const location = useLocation();
  const cleanPath = normalisePath(url || location?.pathname);
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const absoluteImage = /^https?:\/\//i.test(image) ? image : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  useEffect(() => {
    document.title = pageTitle;
    upsertLink("canonical", canonicalUrl);
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:image"]', "property", "og:image", absoluteImage);
    if (imageWidth) upsertMeta('meta[property="og:image:width"]', "property", "og:image:width", String(imageWidth));
    if (imageHeight) upsertMeta('meta[property="og:image:height"]', "property", "og:image:height", String(imageHeight));
    upsertMeta('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImage);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  }, [canonicalUrl, description, absoluteImage, pageTitle, imageWidth, imageHeight]);

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
      <meta property="og:image" content={absoluteImage} />
      {imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}
      <meta property="og:site_name" content="Integra Networks" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Article specific (for blog posts) */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />
      <meta name="author" content={author || "Integra Networks"} />
    </Helmet>
  );
};

export default SEO;
