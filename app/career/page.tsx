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
    <div className="site-container section-space grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <h1 className="page-title text-ink">
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
      </div>
      <ResumeForm />
    </div>
  );
}
