"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  categories,
  servicesByCategory,
  type CategoryId,
} from "@/lib/services";

/**
 * Landing-page services block — the six practice areas as cards. Clicking a card
 * expands its services as a list directly below it, but the list is absolutely
 * positioned and the card is lifted (elevated z), so it overlays the cards
 * beneath instead of pushing the grid around — no layout shift. Click away or
 * press Esc to close; the full searchable 25-row matrix lives on /services and
 * under ⌘K. Drop a themed photo at `public/services/<category-id>.jpg`; until
 * then a ruled-grid placeholder stands in.
 */
export function ServiceCards() {
  const [openId, setOpenId] = useState<CategoryId | null>(null);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    const onDown = (e: PointerEvent) => {
      const el = (e.target as Element).closest("[data-card]");
      if (el?.getAttribute("data-card") !== openId) setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [openId]);

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            Six practice areas
          </h2>
          <p className="mt-2 max-w-lg text-ink-dim">
            Twenty-five services, grouped by the work they do. Open an area to see
            what&rsquo;s inside — or search the full matrix.
          </p>
        </div>
        <Link
          href="/services"
          className="shrink-0 font-mono text-[0.72rem] uppercase tracking-wider text-steel underline-offset-4 transition-colors hover:text-signal hover:underline"
        >
          All 25 services →
        </Link>
      </div>

      <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const items = servicesByCategory(c.id);
          const isOpen = openId === c.id;
          return (
            <div
              key={c.id}
              data-card={c.id}
              className={`relative origin-top transition-transform duration-200 ease-out motion-reduce:transition-none ${
                isOpen ? "z-20 scale-[1.03]" : "z-0 scale-100"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : c.id)}
                aria-expanded={isOpen}
                className={`group flex w-full flex-col overflow-hidden rounded-xl border border-hairline text-left transition-colors ${
                  isOpen
                    ? "rounded-b-none bg-surface-2 shadow-[0_16px_48px_-12px_oklch(0_0_0/0.6)]"
                    : "bg-surface hover:bg-surface-2"
                }`}
              >
                {/* Duotone banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-bg">
                  <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_23px,var(--hairline)_24px),repeating-linear-gradient(90deg,transparent_0,transparent_23px,var(--hairline)_24px)]" />
                  <div
                    style={{ backgroundImage: `url(/services/${c.id}.jpg)` }}
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.15] brightness-[0.8] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-bg/55 mix-blend-color" />
                  <div className="absolute inset-0 bg-signal-solid/15 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <span className="absolute left-3 top-3 font-mono text-[0.65rem] tabular-nums text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card face */}
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-medium text-ink">{c.name}</h3>
                    <p className="mt-1 text-sm text-steel">{c.blurb}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-mono text-sm tabular-nums text-signal">
                      {String(items.length).padStart(2, "0")}
                    </span>
                    <svg
                      className={`size-4 text-steel transition-transform duration-200 group-hover:text-signal ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expansion — absolute overlay, lifts above the cards beneath */}
              <div
                className={`absolute inset-x-0 top-full origin-top overflow-hidden rounded-b-xl border border-t-0 border-hairline bg-surface-2 shadow-[0_16px_48px_-12px_oklch(0_0_0/0.6)] transition-all duration-200 ease-out ${
                  isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <ul className="px-5 pb-2">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group/row flex items-baseline justify-between gap-3 border-b border-hairline py-3 last:border-0"
                      >
                        <span>
                          <span className="text-sm font-medium text-ink">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-steel">
                            {s.tagline}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-[0.7rem] tabular-nums text-steel transition-colors group-hover/row:text-signal">
                          {s.law}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
