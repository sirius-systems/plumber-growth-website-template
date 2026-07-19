import Link from "next/link";

/** 404 handler (docs/04 §4.6). noindex via metadata. */
export const metadata = { robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="container section">
      <h1>Page not found</h1>
      <p>The page you’re looking for isn’t here.</p>
      <p>
        <Link className="btn btn--primary" href="/">
          Return home
        </Link>
      </p>
    </section>
  );
}
