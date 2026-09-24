// Statutory-deadline reference for the ticker + insights.
// Illustrative recurring due dates; the dev edits this file (no CMS).
// `month`/`day` (1-based) drive "next upcoming" ordering; entries without a
// fixed calendar date (event-based / recurring) sort after the dated ones.

export interface Deadline {
  code: string; // form / regulation code
  name: string; // plain description
  due: string; // human due label
  month?: number; // 1-12, primary annual occurrence
  day?: number; // 1-31
}

export const deadlines: Deadline[] = [
  { code: "LLP Form 11", name: "LLP annual return", due: "30 May", month: 5, day: 30 },
  { code: "DPT-3", name: "Return of deposits", due: "30 Jun", month: 6, day: 30 },
  { code: "DIR-3 KYC", name: "Director KYC", due: "30 Sep", month: 9, day: 30 },
  { code: "AOC-4", name: "Financial statements", due: "30 Oct", month: 10, day: 30 },
  { code: "LLP Form 8", name: "Statement of account", due: "30 Oct", month: 10, day: 30 },
  { code: "MGT-7", name: "Annual return", due: "29 Nov", month: 11, day: 29 },
  { code: "MSME-1", name: "MSME payments (half-yearly)", due: "30 Apr / 31 Oct", month: 4, day: 30 },
  { code: "PAS-6", name: "Share capital reconciliation", due: "30 May / 29 Nov", month: 5, day: 30 },
  { code: "ADT-1", name: "Auditor appointment", due: "15 days of AGM" },
  { code: "SEBI Reg 33", name: "Quarterly financial results", due: "Quarterly" },
  { code: "CSR-2", name: "CSR reporting", due: "Annual" },
];

// Ordered so the soonest fixed-date deadline (from `from`) leads. For a static
// build, `from` is the build date — each deploy refreshes the order.
export function upcomingDeadlines(from: Date = new Date()): Deadline[] {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const dated = deadlines.filter((d) => d.month && d.day);
  const undated = deadlines.filter((d) => !d.month || !d.day);

  const sorted = dated
    .map((d) => {
      let next = new Date(today.getFullYear(), d.month! - 1, d.day!);
      if (next < today) next = new Date(today.getFullYear() + 1, d.month! - 1, d.day!);
      return { d, t: next.getTime() };
    })
    .sort((a, b) => a.t - b.t)
    .map((x) => x.d);

  return [...sorted, ...undated];
}
