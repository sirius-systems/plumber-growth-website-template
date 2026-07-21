/**
 * Per-location page content (docs/04 §12–13, docs/07 §17).
 *
 * Each location has genuinely distinct content — real neighborhoods and local
 * plumbing context — NOT a city/keyword swap, which Google treats as scaled
 * content abuse (docs/07 §17). Content stays within general plumbing scope and
 * asserts no physical office in each city (service-area coverage only).
 *
 * Keyed by the service-area slug in config/client.ts.
 */

export interface LocationContent {
  /** Short lead paragraph under the H1. */
  intro: string;
  /** 2–3 paragraphs of location-specific context. */
  body: string[];
  /** Neighborhoods / sub-areas to reference (kept factual and local). */
  neighborhoods: string[];
  /** Service slugs most relevant to this area (internal links). */
  featuredServices: string[];
}

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  "las-vegas": {
    intro:
      "Las Vegas Pro Plumbing serves the full Las Vegas valley — from downtown and the east side out to the Summerlin foothills.",
    body: [
      "The Colorado River gives Las Vegas some of the hardest water in the country, and it's tough on plumbing. Sediment buildup in water heaters and mineral scale in pipes and fixtures are among the most common issues we see, which is why water heater service and drain cleaning are frequent calls across the city.",
      "In older neighborhoods, aging copper pipe and slab leaks are a recurring concern. We use electronic leak detection to find hidden and slab leaks with minimal disruption before recommending a targeted repair.",
      "Emergency plumbing help is available around the clock throughout Las Vegas. Calling is the fastest way to reach us in an urgent situation.",
    ],
    neighborhoods: ["Downtown", "East Las Vegas", "The Lakes", "Summerlin-area foothills"],
    featuredServices: ["water-heater-repair", "leak-detection", "drain-cleaning"],
  },
  henderson: {
    intro:
      "Las Vegas Pro Plumbing serves Henderson homes and businesses, from established neighborhoods to the newest master-planned communities.",
    body: [
      "Henderson is a fast-growing community with a mix of newer construction and long-established neighborhoods. In newer homes we're often called for water heater service and fixture work; in established areas, drain cleaning and pipe repair are more common.",
      "As in the rest of the valley, hard water drives a lot of water heater installation and replacement work here — sediment buildup shortens tank life without regular maintenance.",
      "We serve both residential and commercial properties across Henderson, with emergency help available 24/7.",
    ],
    neighborhoods: ["Green Valley", "Anthem", "Cadence", "MacDonald Ranch"],
    featuredServices: ["water-heater-installation", "drain-cleaning", "leak-detection"],
  },
  "north-las-vegas": {
    intro:
      "Las Vegas Pro Plumbing serves North Las Vegas, from its established residential neighborhoods to newer developments.",
    body: [
      "North Las Vegas has a broad mix of older and newer homes. In the more established areas, aging plumbing infrastructure means pipe repair and drain cleaning are among our most common service calls.",
      "Hard water affects North Las Vegas the same way it does the rest of the valley, so water heater service and leak detection round out the work we do here.",
      "Emergency plumbing response is available throughout North Las Vegas around the clock.",
    ],
    neighborhoods: ["Aliante", "Eldorado", "Sunrise Manor edge", "Craig Ranch area"],
    featuredServices: ["pipe-repair", "drain-cleaning", "water-heater-repair"],
  },
  summerlin: {
    intro:
      "Las Vegas Pro Plumbing serves Summerlin, the master-planned community on the western edge of the valley.",
    body: [
      "Summerlin's upscale homes and larger floor plans mean we're often called for higher-quality fixture repair and replacement, water heater service sized for bigger households, and leak detection.",
      "Even in newer, well-built homes, Las Vegas's hard water takes a toll on water heaters and fixtures over time, so preventive service and timely repairs matter here.",
      "We serve villages across Summerlin and provide emergency plumbing help around the clock.",
    ],
    neighborhoods: ["The Trails", "The Arbors", "The Paseos", "Summerlin villages"],
    featuredServices: ["faucet-repair", "water-heater-repair", "leak-detection"],
  },
  "spring-valley": {
    intro:
      "Las Vegas Pro Plumbing serves Spring Valley, the busy unincorporated community near the Strip corridor.",
    body: [
      "Spring Valley packs a dense mix of residential and commercial properties. Drain cleaning, emergency plumbing, and water heater service are among the most common calls we handle in the area.",
      "With so many rental and multifamily properties nearby, we also provide commercial plumbing service for businesses and property managers in Spring Valley.",
      "Emergency plumbing help is available 24/7 across Spring Valley.",
    ],
    neighborhoods: ["Chinatown corridor", "Rhodes Ranch area", "Peccole Ranch edge"],
    featuredServices: ["drain-cleaning", "emergency-plumbing", "water-heater-repair"],
  },
  enterprise: {
    intro:
      "Las Vegas Pro Plumbing serves Enterprise, the fast-growing area south of Las Vegas.",
    body: [
      "Enterprise is one of the valley's fastest-growing communities, with a lot of newer residential construction and an expanding commercial sector. Water heater installation, new-construction-era plumbing service, and drain cleaning are common here.",
      "Because much of the housing stock is newer, we're often installing and maintaining systems rather than replacing failed older ones — though hard water still means water heaters need attention over time.",
      "We provide both residential and commercial plumbing across Enterprise, with emergency service available around the clock.",
    ],
    neighborhoods: ["Mountain's Edge", "Southern Highlands edge", "Rhodes Ranch area"],
    featuredServices: ["water-heater-installation", "drain-cleaning", "leak-detection"],
  },
};
