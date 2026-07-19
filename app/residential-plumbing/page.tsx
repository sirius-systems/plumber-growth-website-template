import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: "Residential Plumbing",
  description: `Residential plumbing services from ${clientConfig.business.publicName} in ${clientConfig.seo.primaryMarket}.`,
  alternates: { canonical: "/residential-plumbing/" },
};

export default function ResidentialPage() {
  return (
    <SimplePage
      title="Residential Plumbing"
      intro={`${clientConfig.business.publicName} helps homeowners across ${clientConfig.seo.primaryMarket} with everyday and urgent plumbing needs.`}
    />
  );
}
