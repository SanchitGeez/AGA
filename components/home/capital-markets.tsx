import Link from "next/link";
import { servicesByCategory } from "@/lib/services";

export function CapitalMarkets() {
  const items = servicesByCategory("capital-markets");

  return (
    <section
      id="capital-markets"
      className="scroll-mt-32 border-y border-hairline bg-surface"
    >
      <div className="site-container section-space grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="section-title text-ink">
            Built for the capital markets.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">
            The firm&apos;s edge is where regulation meets the markets — listings,
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
                <h3 className="text-xl font-semibold text-ink underline decoration-control-line underline-offset-4">{s.name}</h3>
                <p className="mt-1 text-base text-steel">{s.summary}</p>
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
