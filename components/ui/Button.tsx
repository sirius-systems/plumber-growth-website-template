import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

/**
 * Shared button (docs/06 §23). All site buttons render through this component so
 * variant, size, and interaction states are consistent. Colors reference design
 * tokens only — never hardcoded, never inline.
 *
 * Polymorphic: pass `href` to render a link (internal → next/link, external/tel/
 * mailto → <a>); omit it for a <button>. Loading state disables the control,
 * announces via aria-busy, and shows a spinner + loadingText to prevent duplicate
 * submits.
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "danger"
  | "inverse"
  | "accent";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  /** Text shown (and announced) while loading. */
  loadingText?: string;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };
type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & { href: string };

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  block: boolean,
  loading: boolean,
  extra?: string,
): string {
  return [
    "btn",
    `btn--${variant}`,
    size !== "md" ? `btn--${size}` : "",
    block ? "btn--block" : "",
    loading ? "btn--loading" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

function Content({ loading, loadingText, children }: { loading: boolean; loadingText?: string; children: ReactNode }) {
  if (!loading) return <>{children}</>;
  return (
    <>
      <span className="btn__spinner" aria-hidden="true" />
      {loadingText ?? children}
    </>
  );
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    block = false,
    loading = false,
    loadingText,
    className,
    children,
  } = props;
  const cls = classes(variant, size, block, loading, className);

  if (props.href !== undefined) {
    const {
      variant: _v,
      size: _s,
      block: _b,
      loading: _l,
      loadingText: _lt,
      className: _c,
      children: _ch,
      href,
      ...anchorProps
    } = props as ButtonAsLink;
    const isInternal = href.startsWith("/");
    const inner = <Content loading={loading} loadingText={loadingText}>{children}</Content>;
    return isInternal ? (
      <Link href={href} className={cls} aria-busy={loading || undefined} {...anchorProps}>
        {inner}
      </Link>
    ) : (
      <a href={href} className={cls} aria-busy={loading || undefined} {...anchorProps}>
        {inner}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    block: _b,
    loading: _l,
    loadingText: _lt,
    className: _c,
    children: _ch,
    href: _h,
    type,
    disabled,
    ...buttonProps
  } = props as ButtonAsButton;
  return (
    <button
      type={type ?? "button"}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonProps}
    >
      <Content loading={loading} loadingText={loadingText}>
        {children}
      </Content>
    </button>
  );
}
