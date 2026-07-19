import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: `About ${clientConfig.business.publicName}`,
  description: `Learn about ${clientConfig.business.publicName}, serving ${clientConfig.seo.primaryMarket}.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <SimplePage
      title={`About ${clientConfig.business.publicName}`}
      intro={clientConfig.business.description}
    />
  );
}
