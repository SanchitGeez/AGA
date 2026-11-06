import Link from "next/link";
import { upcomingDeadlines } from "@/lib/deadlines";

export function InsightsTeaser() {
  const upcoming = upcomingDeadlines().slice(0, 5);

  return (
    <section
      id="insights"
      className="scroll-mt-32 border-y border-hairline bg-surface"
    >
      <div className="site-container section-space grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="section-title text-ink">
            The calendar, always current.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-dim">
            Statutory deadlines don&apos;t wait. We track the filing calendar so you
            never miss a due date. The same calendar appears below the homepage opening.
          </p>
          <Link
            href="/insights"
            className="action-secondary mt-6"
          >
            View compliance calendar
          </Link>
        </div>

        <div className="border-t border-hairline">
          {upcoming.map((d, i) => (
            <div
              key={`${d.code}-${i}`}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:items-baseline gap-4 border-b border-hairline py-4"
            >
              <div>
                <span className="font-mono text-base text-ink">{d.code}</span>
                <span className="mt-1 block text-base text-ink-dim">{d.name}</span>
              </div>
              <span className="font-mono text-base tabular-nums text-signal">
                {d.due}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
