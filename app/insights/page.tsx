import type { Metadata } from "next";
import Link from "next/link";
import { deadlineSources, upcomingDeadlines } from "@/lib/deadlines";

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
        Plan ahead for recurring company, LLP and listed-company obligations.
        Check the requirements and current notifications that apply to your entity
        before relying on a filing date.
      </p>

      <div className="mt-12 border-t border-hairline">
        <div className="hidden grid-cols-[11rem_minmax(0,1.1fr)_minmax(22rem,1fr)] gap-x-8 border-b border-hairline px-1 py-3 text-sm font-semibold text-steel lg:grid">
          <span>Form / Reg</span>
          <span>Filing</span>
          <span>Due</span>
        </div>
        <ul>
          {upcomingDeadlines().map((d, i) => (
            <li
              key={`${d.code}-${i}`}
              className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-hairline px-1 py-5 lg:grid-cols-[11rem_minmax(0,1.1fr)_minmax(22rem,1fr)] lg:items-start"
            >
              <span className="min-w-0 font-mono text-base text-ink">
                {d.code}
              </span>
              <span className="min-w-0 text-base leading-relaxed text-steel">{d.name}</span>
              <span className="min-w-0 font-mono text-base leading-relaxed tabular-nums text-signal">
                <span className="mb-1 block font-sans text-sm font-medium text-steel lg:hidden">Due</span>
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

      <div className="mt-6 max-w-3xl">
        <h2 className="text-lg text-ink">Reference sources</h2>
        <ul className="mt-3 space-y-2">{deadlineSources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-link text-sm text-ink-dim">{source.label} ↗</a></li>)}</ul>
        <p className="mt-3 text-sm text-steel">Reference review: 8 November 2026. Applicability and subsequent notifications must be checked before filing.</p>
      </div>

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
