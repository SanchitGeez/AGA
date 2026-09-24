import Link from "next/link";
import { upcomingDeadlines } from "@/lib/deadlines";

export function InsightsTeaser() {
  const upcoming = upcomingDeadlines().slice(0, 5);

  return (
    <section
      id="insights"
      className="scroll-mt-20 border-y border-hairline bg-surface"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono text-sm tracking-wide text-signal">
            Insights
          </p>
          <h2 className="mt-4 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            The calendar, always current.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-dim">
            Statutory deadlines don't wait. We track the filing calendar so you
            never miss a due date — the same feed that runs across the top of
            this page.
          </p>
          <Link
            href="/#enquire"
            className="mt-6 inline-block font-mono text-sm text-signal hover:underline"
          >
            Get deadline reminders →
          </Link>
        </div>

        <div className="border-t border-hairline">
          {upcoming.map((d, i) => (
            <div
              key={`${d.code}-${i}`}
              className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-hairline py-4"
            >
              <div>
                <span className="font-mono text-sm text-ink">{d.code}</span>
                <span className="ml-3 text-sm text-steel">{d.name}</span>
              </div>
              <span className="font-mono text-sm tabular-nums text-signal">
                {d.due}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
