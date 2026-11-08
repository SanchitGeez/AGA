import Image from "next/image";
import { site } from "@/lib/site";

export function Principal() {
  return (
    <section
      id="principal"
      className="site-container scroll-mt-32 section-space"
    >
      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-hairline bg-surface lg:max-w-none">
          <Image
            src="/portraits/ayush-gupta.webp"
            alt={`${site.principal}, principal of ${site.name}`}
            fill
            sizes="(min-width: 1024px) 300px, (min-width: 416px) 384px, calc(100vw - 2rem)"
            className="object-cover"
          />
        </div>

        <div className="self-center">
          <h2 className="section-title text-ink">
            {site.principal}
          </h2>
          <p className="mt-2 text-base text-steel">{site.credential}</p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
            {site.principal} is a member of the Institute of Company Secretaries
            of India (ICSI), with over five years of experience in corporate law,
            governance and regulatory compliance. His work spans IPO advisory,
            SEBI and stock-exchange compliance, corporate restructuring, FEMA
            matters and secretarial practice.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim">
            He guides clients through statutory requirements, transaction
            documentation and governance decisions with a focus on practical
            advice, professional integrity and timely execution.
          </p>

        </div>
      </div>
    </section>
  );
}
