"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clientConfig } from "@/config/client";
import { primaryNav, SITE_PRIMARY_CTA } from "@/config/navigation";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Primary site header (docs/04 §5.1). Sticky on every width, single row from
 * 75rem up: logo | nav | phone + primary CTA.
 *
 * Below 75rem the same nav element becomes a disclosure panel toggled by the
 * menu button. There is exactly ONE nav list and ONE set of header actions in
 * the DOM — the desktop row and the mobile panel are the same elements, laid out
 * differently by CSS (`.site-header__nav`), so links can never drift apart or be
 * announced twice by a screen reader. A compact tel: icon button stays visible
 * beside the toggle so calling never requires opening the menu.
 *
 * Accessibility: the toggle exposes aria-expanded/aria-controls, Escape closes
 * the panel and returns focus to the toggle, and a route change closes it.
 */
export function SiteHeader() {
  const { business, branding } = clientConfig;
  const links = primaryNav();
  const phone = formatPhoneDisplay(business.phone);

  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the panel and restores focus to the control that opened it.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner container container--wide">
        <Link href="/" className="site-header__brand" aria-label={`${business.publicName} - home`}>
          {branding.logoSrc ? (
            <Image
              src={branding.logoSrc}
              alt={branding.logoAlt}
              width={1200}
              height={360}
              priority
              className="site-logo"
            />
          ) : (
            <span className="site-header__wordmark">{branding.wordmark}</span>
          )}
        </Link>

        {/* Compact actions that stay visible while the panel is closed. */}
        <div className="site-header__compact">
          <a
            className="site-header__call-icon"
            href={telHref(business.phone)}
            aria-label={`Call ${phone}`}
          >
            <LucideIcon name="Phone" size={20} />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((wasOpen) => !wasOpen)}
          >
            <LucideIcon name={open ? "X" : "Menu"} size={22} />
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        <nav
          id="primary-nav"
          className="site-header__nav"
          aria-label="Primary"
          data-open={open}
        >
          <ul className="site-header__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="site-header__actions">
            <a className="site-header__call" href={telHref(business.phone)}>
              <LucideIcon name="Phone" size={16} color="var(--color-accent-600)" />
              {phone}
            </a>
            <Button
              variant="accent"
              size="sm"
              href={SITE_PRIMARY_CTA.href}
              onClick={() => setOpen(false)}
            >
              {SITE_PRIMARY_CTA.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
