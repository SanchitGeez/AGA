import type { Metadata } from "next";
import Link from "next/link";
import { upcomingDeadlines } from "@/lib/deadlines";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & Compliance Calendar",
  description:
    "The statutory compliance calendar for Indian companies and LLPs — ROC, MCA, SEBI, and RBI filing due dates — tracked by Ayush D Gupta & Associates, Company Secretaries, Mumbai.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
        Always current
      </p>
      <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
        Compliance calendar
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
        The statutory filing calendar for companies and LLPs — the same feed that
        runs across the top of the site. Statutory deadlines don&apos;t wait; we
        track them so you never miss a due date.
      </p>

      <div className="mt-12 border-t border-hairline">
        <div className="hidden grid-cols-[160px_1fr_auto] gap-4 border-b border-hairline px-1 py-2.5 font-mono text-[0.68rem] uppercase tracking-wider text-steel sm:grid">
          <span>Form / Reg</span>
          <span>Filing</span>
          <span>Due</span>
        </div>
        <ul>
          {upcomingDeadlines().map((d, i) => (
            <li
              key={`${d.code}-${i}`}
              className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-hairline px-1 py-4 sm:grid-cols-[160px_1fr_auto] sm:items-baseline"
            >
              <span className="font-mono text-sm text-ink sm:order-1">
                {d.code}
              </span>
              <span className="text-sm text-steel sm:order-2">{d.name}</span>
              <span className="col-start-2 row-start-1 text-right font-mono text-sm tabular-nums text-signal sm:order-3 sm:col-start-auto sm:row-start-auto">
                {d.due}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 font-mono text-[0.7rem] text-steel">
        Indicative recurring due dates. Dates shift with extensions and
        notifications — confirm the current deadline for your entity before
        filing.
      </p>

      <div className="mt-12 rounded-xl border border-hairline bg-surface p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-ink">
          Deadline reminders for your entity
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-dim">
          We maintain a compliance calendar mapped to each client&apos;s
          obligations and flag due dates ahead of time. Dated regulatory updates
          will also be published here.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-md bg-signal-solid px-5 py-3 text-sm font-medium text-on-signal transition-colors hover:bg-signal-solid-hover"
        >
          Get reminders — talk to {site.principal} →
        </Link>
      </div>
    </div>
  );
}
