import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const SchemaMarkup = ({ data }: SchemaMarkupProps) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(Array.isArray(data) ? data : data)}
    </script>
  </Helmet>
);

export default SchemaMarkup;
