import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NEXR",
  url: "https://nexr-iot.co.uk",
  logo: "https://nexr-iot.co.uk/favicon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-204-626-6880",
    email: "connect@nexr-iot.co.uk",
    contactType: "sales",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 86-90 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NEXR",
  url: "https://nexr-iot.co.uk",
};

const StructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(webSiteSchema)}
    </script>
  </Helmet>
);

export default StructuredData;
