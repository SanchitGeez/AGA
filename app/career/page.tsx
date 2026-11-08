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
  "Learning from experienced professionals with structured guidance",
];

export default function CareerPage() {
  return (
    <div className="site-container section-space grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <h1 className="page-title text-ink">
          Career
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
          We invite ambitious trainees and professionals to join our practice.
          Develop your skills in corporate law, governance and advisory through
          practical assignments and guidance from experienced personnel.
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
