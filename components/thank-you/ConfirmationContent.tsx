"use client";

import { useSearchParams } from "next/navigation";
import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import {
  THANK_YOU_VARIANTS,
  DEFAULT_THANK_YOU_TYPE,
  isThankYouType,
  type HelpfulLink,
} from "@/content/thank-you";
import { ConfirmationBlock } from "@/components/thank-you/ConfirmationBlock";
import { PhoneBlock } from "@/components/thank-you/PhoneBlock";
import { WhatHappensNext } from "@/components/thank-you/WhatHappensNext";
import { HelpfulLinks } from "@/components/thank-you/HelpfulLinks";
import { TrustStrip } from "@/components/thank-you/TrustStrip";

/**
 * Reads the `?type=` param (matching the server's next value) and renders the
 * matching variant. Tokens are resolved here at render time; the review link is
 * dropped when reviewUrl is unset/"#". Emergency mode reorders the phone block
 * above the next-steps.
 */
export function ConfirmationContent() {
  const typeParam = useSearchParams().get("type");
  const type = isThankYouType(typeParam) ? typeParam : DEFAULT_THANK_YOU_TYPE;
  const variant = THANK_YOU_VARIANTS[type];

  const phone = formatPhoneDisplay(clientConfig.business.phone);
  const region = clientConfig.region.name;
  const reviewUrl = clientConfig.integrations.reviewUrl;

  const resolve = (s: string) => s.replace(/\[phone\]/g, phone).replace(/\[regionName\]/g, region);

  const steps = variant.whatHappensNext.map(resolve);

  const links: HelpfulLink[] = variant.helpfulLinks
    .map((l) => ({ ...l, description: resolve(l.description), href: l.href === "[reviewUrl]" ? (reviewUrl ?? "#") : l.href }))
    // Drop the public-review link when no verified review URL exists.
    .filter((l) => !(l.external && (l.href === "#" || !l.href)));

  return (
    <>
      <ConfirmationBlock variant={variant} />
      {variant.emergencyMode && <PhoneBlock emergencyMode />}
      <WhatHappensNext steps={steps} />
      <HelpfulLinks links={links} />
      {!variant.emergencyMode && <PhoneBlock emergencyMode={false} />}
      <TrustStrip />
    </>
  );
}
