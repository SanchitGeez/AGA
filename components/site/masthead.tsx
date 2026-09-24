"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { CommandBar } from "./command-bar";
import { ThemeToggle } from "./theme-toggle";
import { useModKey } from "./use-mod-key";

const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export function Masthead() {
  const [menuOpen, setMenuOpen] = useState(false);
  const modKey = useModKey();
  const openSearch = () =>
    window.dispatchEvent(new Event("open-command-bar"));

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded bg-signal-solid font-mono text-sm font-semibold text-on-signal">
            {site.initial}
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
            AGA <span className="text-steel">&amp; Associates</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-steel transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={openSearch}
            className="hidden items-center gap-2 rounded-md border border-hairline px-3 py-1.5 text-steel transition-colors hover:text-ink sm:flex"
            aria-label="Search services"
          >
            <span className="text-sm">Search</span>
            <kbd className="min-w-[2.5ch] font-mono text-[0.7rem] text-signal">
              {modKey}
            </kbd>
          </button>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-md bg-signal-solid px-4 py-2 text-sm font-medium text-on-signal transition-colors hover:bg-signal-solid-hover sm:block"
          >
            Enquire
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-md border border-hairline text-ink lg:hidden"
          >
            <span className="font-mono text-sm">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-hairline bg-surface px-4 py-3 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-ink"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2 border-t border-hairline pt-3">
            <button
              onClick={() => {
                setMenuOpen(false);
                openSearch();
              }}
              className="flex-1 rounded-md border border-hairline py-2 text-sm text-ink"
            >
              Search {modKey}
            </button>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-md bg-signal-solid py-2 text-center text-sm font-medium text-on-signal"
            >
              Enquire
            </Link>
          </div>
        </nav>
      )}

      <CommandBar />
    </header>
  );
}
