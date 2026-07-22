import { Button } from "@/components/ui/Button";

/** 404 handler (docs/04 §4.6). noindex via metadata. */
export const metadata = { robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="container section">
      <h1>Page not found</h1>
      <p>The page you’re looking for isn’t here.</p>
      <p>
        <Button variant="primary" href="/">
          Return home
        </Button>
      </p>
    </section>
  );
}
