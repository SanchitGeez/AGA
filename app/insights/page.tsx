import type { Metadata } from "next";
import Link from "next/link";
import { upcomingDeadlines } from "@/lib/deadlines";

export const metadata: Metadata = {
  title: "Insights & Compliance Calendar",
  description:
    "The statutory compliance calendar for Indian companies and LLPs — ROC, MCA, SEBI, and RBI filing due dates — tracked by Ayush D Gupta & Associates, Company Secretaries, Mumbai.",
};

export default function InsightsPage() {
  return (
    <div className="site-container section-space">
      <h1 className="page-title text-ink">
        Compliance calendar
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
        The statutory filing calendar for companies and LLPs — the same feed that
        appears below the homepage opening. Statutory deadlines don&apos;t wait; we
        track them so you never miss a due date.
      </p>

      <div className="mt-12 border-t border-hairline">
        <div className="hidden grid-cols-[200px_1fr_200px] gap-4 border-b border-hairline px-1 py-2.5 text-sm font-semibold text-steel md:grid">
          <span>Form / Reg</span>
          <span>Filing</span>
          <span>Due</span>
        </div>
        <ul>
          {upcomingDeadlines().map((d, i) => (
            <li
              key={`${d.code}-${i}`}
              className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-hairline px-1 py-4 md:grid-cols-[200px_1fr_200px] md:items-baseline"
            >
              <span className="font-mono text-base text-ink md:order-1">
                {d.code}
              </span>
              <span className="text-base text-steel md:order-2">{d.name}</span>
              <span className="font-mono text-base tabular-nums text-signal md:order-3 md:text-right">
                {d.due}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 max-w-3xl text-sm text-steel">
        Indicative recurring due dates. Dates shift with extensions and
        notifications — confirm the current deadline for your entity before
        filing.
      </p>

      <div className="mt-12 rounded-xl border border-hairline bg-surface p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-ink">
          Deadline reminders for your entity
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-dim">
          We maintain a compliance calendar mapped to each client&apos;s
          obligations and flag due dates ahead of time. Dated regulatory updates
          will also be published here.
        </p>
        <Link
          href="/contact"
          className="action-primary mt-6"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
