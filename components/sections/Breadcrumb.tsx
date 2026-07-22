import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumb trail (docs/04 §28). Visible breadcrumbs must match any breadcrumb
 * structured data. The final crumb is the current page and is not a link.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem" }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label}>
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
            )}
            {!isLast && " › "}
          </span>
        );
      })}
    </nav>
  );
}
