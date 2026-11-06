"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "./brand";
import { CommandBar } from "./command-bar";
import { ThemeToggle } from "./theme-toggle";
import { useModKey } from "./use-mod-key";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export function Masthead() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const modKey = useModKey();
  const openSearch = () =>
    window.dispatchEvent(new Event("open-command-bar"));

  useEffect(() => {
    if (!isHome) return;
    const marker = document.querySelector("[data-hero-start]");
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) => {
      setOverHero(entry.isIntersecting);
    });
    observer.observe(marker);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header data-over-hero={isHome && overHero ? "true" : undefined} className="site-masthead sticky top-0 z-40 border-b border-hairline bg-bg transition-colors duration-200 motion-reduce:transition-none">
      <div className="site-container flex min-h-20 items-center gap-2 sm:min-h-24 sm:gap-5 xl:min-h-28 min-[1360px]:grid min-[1360px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[1360px]:gap-6">
        <Link href="/" className="shrink-0 justify-self-start" aria-label="Ayush D Gupta & Associates - Home">
          <Brand prominent />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center justify-center gap-6 min-[1360px]:flex 2xl:gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : pathname.startsWith(`${n.href}/`) ? "location" : undefined}
              className="masthead-link flex min-h-14 items-center whitespace-nowrap text-[1.375rem] font-semibold text-ink transition-colors hover:text-signal 2xl:text-[1.5rem]"
            >
              <span className="masthead-label relative">{n.label}</span>
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:gap-3 min-[1360px]:ml-0 min-[1360px]:justify-self-end">
          <button
            onClick={openSearch}
            className="hidden min-h-12 items-center gap-3 whitespace-nowrap rounded-md border border-hairline bg-surface px-4 text-ink transition-colors hover:bg-surface-2 lg:flex"
            aria-label="Search services"
          >
            <span className="text-base font-semibold">Search</span>
            <kbd className="min-w-[2.5ch] font-mono text-xs text-signal">
              {modKey}
            </kbd>
          </button>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-signal-solid px-6 text-base font-bold text-on-signal transition-colors hover:bg-signal-solid-hover md:flex"
          >
            Enquire
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="grid size-11 place-items-center rounded-md border border-control-line bg-surface text-ink sm:size-13 min-[1360px]:hidden"
          >
            <span className="font-mono text-xl">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="masthead-menu absolute inset-x-0 top-full max-h-[calc(100dvh-var(--masthead-height)-1px)] overflow-y-auto border-t border-hairline bg-surface px-4 py-4 sm:px-6 min-[1360px]:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : pathname.startsWith(`${n.href}/`) ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
              className="masthead-link flex min-h-14 items-center justify-center rounded-md px-2 py-3 text-[1.375rem] font-semibold text-ink transition-colors hover:text-signal"
            >
              <span className="masthead-label relative">{n.label}</span>
            </Link>
          ))}
          <div className="mt-2 flex gap-2 border-t border-hairline pt-3">
            <button
              onClick={() => {
                setMenuOpen(false);
                openSearch();
              }}
              className="min-h-12 flex-1 whitespace-nowrap rounded-md border border-hairline px-3 text-base font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              Search {modKey}
            </button>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 flex-1 items-center justify-center rounded-md bg-signal-solid px-3 text-base font-bold text-on-signal transition-colors hover:bg-signal-solid-hover"
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
