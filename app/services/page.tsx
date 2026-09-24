import Link from "next/link";
import type { Metadata } from "next";
import { categories, servicesByCategory } from "@/lib/services";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twenty-five company-secretarial and corporate-compliance services across six practice areas — incorporation, ongoing compliance, capital markets, transactions, cross-border & NBFC, and advisory & governance.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
          25 services · 6 practice areas
        </p>
        <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          Services
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
          The full practice, grouped by area and mapped to the statute each
          service answers to. Every service has its own detailed scope of work —
          select any to see the checklist.
        </p>

        <div className="mt-14 space-y-16">
          {categories.map((c) => {
            const items = servicesByCategory(c.id);
            return (
              <section key={c.id} id={c.id} className="scroll-mt-20">
                <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                  <div>
                    <h2 className="text-xl font-semibold text-ink">{c.name}</h2>
                    <p className="mt-1 text-sm text-steel">{c.blurb}</p>
                  </div>
                  <span className="shrink-0 font-mono text-sm tabular-nums text-steel">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul>
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group grid grid-cols-1 gap-1 border-b border-hairline px-1 py-4 transition-colors hover:bg-surface md:grid-cols-[150px_1fr_auto] md:items-baseline md:gap-4 md:px-3"
                      >
                        <span className="font-mono text-[0.72rem] tabular-nums text-steel">
                          {s.law}
                        </span>
                        <span>
                          <span className="font-medium text-ink">{s.name}</span>
                          <span className="mt-0.5 block text-sm text-steel">
                            {s.tagline}
                          </span>
                        </span>
                        <span className="hidden font-mono text-steel transition-colors group-hover:text-signal md:block">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <div className="border-t border-hairline">
        <Enquire />
      </div>
    </>
  );
}
