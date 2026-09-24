import Link from "next/link";
import { servicesByCategory } from "@/lib/services";

export function CapitalMarkets() {
  const items = servicesByCategory("capital-markets");

  return (
    <section
      id="capital-markets"
      className="scroll-mt-20 border-y border-hairline bg-surface"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="font-mono text-sm tracking-wide text-signal">
            The growth wedge
          </p>
          <h2 className="mt-4 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            Built for the capital markets.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-dim">
            The firm's edge is where regulation meets the markets — listings,
            disclosures, and corporate actions under SEBI and the exchanges. If
            you are heading toward an IPO or already listed, this is the desk
            for it.
          </p>
        </div>

        <div className="border-t border-hairline">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-start justify-between gap-6 border-b border-hairline py-6 transition-colors hover:bg-bg/40"
            >
              <div>
                <h3 className="text-lg font-medium text-ink">{s.name}</h3>
                <p className="mt-1 text-sm text-steel">{s.summary}</p>
              </div>
              <span className="mt-1 shrink-0 font-mono text-steel transition-colors group-hover:text-signal">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
