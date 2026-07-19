import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/** Confirmation page (docs/04 §4.3). noindex; never exposes submitted data in URL. */
export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  const { business } = clientConfig;
  return (
    <SimplePage title="Thank you" intro={`${business.publicName} received your submission.`}>
      <p>
        A team member will review your request. This confirmation does not guarantee immediate
        service or a confirmed appointment.
      </p>
      <p>
        Need help sooner?{" "}
        <a href={telHref(business.phone)}>Call {formatPhoneDisplay(business.phone)}</a>.
      </p>
      <p>
        <Link className="btn btn--secondary" href="/">
          Return home
        </Link>
      </p>
    </SimplePage>
  );
}
