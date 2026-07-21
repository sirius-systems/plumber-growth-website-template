import { clientConfig } from "@/config/client";

/**
 * Why-choose-us benefits (docs/06 §25 benefit cards). Config-driven where the
 * copy references verified facts (license, years, market) so nothing is invented.
 */
export function WhyChooseUs() {
  const { credentials, location, seo } = clientConfig;

  const reasons: { title: string; body: string }[] = [
    {
      title: "Honest Pricing",
      body: "Clear, upfront pricing explained before work begins, no surprise invoices and no pressure to buy what you don't need.",
    },
    {
      title: "Fast Response",
      body: "Emergency plumbing help is available around the clock. Call and we'll let you know current availability for your area.",
    },
    {
      title: credentials.licenseNumber ? "Nevada Licensed" : "Licensed & Insured",
      body: credentials.licenseNumber
        ? `Fully licensed and insured, ${credentials.licenseJurisdiction} #${credentials.licenseNumber}.`
        : "Fully licensed and insured for your protection.",
    },
    {
      title: "Local & Trusted",
      body: credentials.yearsInBusiness
        ? `Serving ${location.city} and the surrounding valley for ${credentials.yearsInBusiness} years, with the reviews to back it up.`
        : `A local plumbing team serving ${seo.primaryMarket}.`,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Why homeowners choose {clientConfig.business.publicName}
        </h2>
        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {reasons.map((r) => (
            <li
              key={r.title}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-6)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>{r.title}</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: 0 }}>{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
