"use client";

import { usePathname } from "next/navigation";
import { TrustBar } from "@/components/sections/TrustBar";

/**
 * Renders the shared TrustBar on every public page, but hides it on the noindex
 * utility pages whose purpose differs (docs/04 §20–§23). usePathname resolves at
 * prerender time per static route, so excluded pages ship without the bar (no
 * client-side flash).
 */
const EXCLUDED = new Set([
  "/client-onboarding",
  "/review-feedback",
  "/thank-you",
  "/emergency-plumbing-request",
]);

export function TrustBarSlot() {
  const pathname = usePathname() ?? "/";
  const normalized = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  if (EXCLUDED.has(normalized)) return null;
  return <TrustBar />;
}
