import type { Metadata } from "next";
import { ResumeForm } from "@/components/site/resume-form";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Build your career in corporate law, governance, and advisory at Ayush D Gupta & Associates, Company Secretaries in Mumbai. Send us your résumé.",
};

const reasons = [
  "Meaningful, client-impacting assignments across corporate law and governance",
  "Exposure to IPOs, SEBI, FEMA, NCLT, and restructuring work",
  "Mentorship from a peer-reviewed practice led by an ICSI member",
];

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
        Join the firm
      </p>
      <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
        Career
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
        Join our team and shape your career in corporate law, governance, and
        advisory, while working on meaningful, client-impacting assignments.
      </p>

      <ul className="mt-10 border-t border-hairline">
        {reasons.map((r) => (
          <li
            key={r}
            className="flex gap-3 border-b border-hairline py-4 text-ink-dim"
          >
            <span
              aria-hidden
              className="mt-2 size-1 shrink-0 rounded-full bg-signal-solid"
            />
            <span>{r}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ResumeForm />
      </div>
    </div>
  );
}
