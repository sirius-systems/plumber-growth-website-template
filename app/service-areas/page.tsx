import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Areas served by ${clientConfig.business.publicName}.`,
  alternates: { canonical: "/service-areas/" },
};

/** Service-areas hub (docs/04 §12). Lists verified areas as text; no doorway pages. */
export default function ServiceAreasPage() {
  const areas = clientConfig.serviceAreas;
  return (
    <SimplePage
      title="Service Areas"
      intro={`${clientConfig.business.publicName} proudly serves the following areas.`}
    >
      <ul>
        {areas.map((a) => (
          <li key={`${a.name}-${a.state}`}>
            {a.name}, {a.state}
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
