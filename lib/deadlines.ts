// Recurring reference dates, checked against the sources below on 8 November 2026.
// Applicability, extensions and authority notifications must be checked for each entity.
export interface Deadline {
  code: string;
  name: string;
  due: string;
  month?: number;
  day?: number;
  occurrences?: { month: number; day: number }[];
}

const quarterly = (day: number) => [1, 4, 7, 10].map((month) => ({ month, day }));
export const deadlineSources = [
  { label: "NSE listed-company compliance calendar", href: "https://www.nseindia.com/static/companies-listing/compliance-information-compliance-calendar-main-board" },
  { label: "ICSI listing-compliance reference (SDD applicability)", href: "https://www.icsi.edu/media/filer_public/f7/f0/f7f04105-8e05-41d3-9ffc-b83ce53c5265/recent_amendment_in_lodr_final-ln_joshi_ji.pdf" },
  { label: "ICAI: revised director KYC framework", href: "https://www.icai.org/post/clcgc-director-kyc-compliance-02012026" },
];

export const deadlines: Deadline[] = [
  { code: "RSCA", name: "Reconciliation of share capital audit · applicable listed entities", due: "Within 30 days of quarter-end", occurrences: quarterly(30) },
  { code: "SEBI Reg 31", name: "Quarterly shareholding pattern · applicable listed entities", due: "Within 21 days of quarter-end", occurrences: quarterly(21) },
  { code: "SDD certificate", name: "Where quarterly certification applies; check Regulation 24A applicability", due: "Within 21 days of quarter-end, where applicable", occurrences: quarterly(21) },
  { code: "SEBI Reg 24A", name: "Annual Secretarial Compliance Report · 31 March year-end", due: "30 May · within 60 days of financial year-end", month: 5, day: 30 },
  { code: "LLP Form 11", name: "LLP annual return", due: "30 May", month: 5, day: 30 },
  { code: "DPT-3", name: "Return of deposits · where applicable", due: "30 Jun", month: 6, day: 30 },
  { code: "DIR-3 KYC Web", name: "Director KYC · revised three-year cycle; verify individual applicability", due: "30 June of the relevant cycle; next cycle 2028 for existing compliant DINs" },
  { code: "AOC-4", name: "Financial statements · ordinary AGM-based filing", due: "Within 30 days of AGM; special cases differ" },
  { code: "LLP Form 8", name: "LLP statement of account and solvency", due: "30 Oct", month: 10, day: 30 },
  { code: "MGT-7 / 7A", name: "Annual return · ordinary AGM-based filing", due: "Within 60 days of AGM; check entity applicability" },
  { code: "MSME-1", name: "Specified MSME payment reporting · where applicable", due: "30 Apr / 31 Oct", occurrences: [{ month: 4, day: 30 }, { month: 10, day: 31 }] },
  { code: "PAS-6", name: "Half-yearly share capital reconciliation · applicable unlisted entities", due: "Within 60 days of half-year-end", occurrences: [{ month: 5, day: 30 }, { month: 11, day: 29 }] },
  { code: "ADT-1", name: "Auditor appointment · where applicable", due: "Within 15 days of the relevant meeting" },
  { code: "SEBI Reg 33", name: "Listed-company financial reporting · applicable entities", due: "Within 45 days of quarter-end; 60 days for the final quarter" },
  { code: "CSR-2", name: "CSR reporting · where applicable", due: "Check current MCA reporting notification" },
];

// Static pages use the build date. Multi-date obligations are ordered by their next occurrence.
export function upcomingDeadlines(from: Date = new Date()): Deadline[] {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return deadlines.map((deadline, index) => {
    const dates = deadline.occurrences || (deadline.month && deadline.day ? [{ month: deadline.month, day: deadline.day }] : []);
    const next = dates.map(({ month, day }) => {
      const date = new Date(today.getFullYear(), month - 1, day);
      if (date < today) date.setFullYear(date.getFullYear() + 1);
      return date.getTime();
    });
    return { deadline, time: next.length ? Math.min(...next) : Infinity, index };
  }).sort((a, b) => a.time - b.time || a.index - b.index).map(({ deadline }) => deadline);
}
