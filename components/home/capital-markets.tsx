import Image from "next/image";
import Link from "next/link";
import { getService } from "@/lib/services";
import { serviceImagery } from "@/lib/service-imagery";

const areas = [
  {
    title: "IPO readiness",
    description: "Corporate preparation, governance and listing coordination.",
    services: ["ipo-advisory"],
  },
  {
    title: "SEBI & exchange compliance",
    description: "Disclosures and continuing listed-company obligations.",
    services: ["sebi-stock-exchange", "annual-secretarial-compliance-report"],
  },
  {
    title: "Corporate actions",
    description: "Capital changes, shareholder approvals and reconciliation.",
    services: ["corporate-actions", "reconciliation-share-capital-audit"],
  },
  {
    title: "Audit & reporting",
    description: "Independent review, statutory records and annual reporting.",
    services: ["secretarial-audit", "annual-report"],
  },
];

export function CapitalMarkets() {
  const image = serviceImagery["capital-markets"];

  return (
    <section id="capital-markets" aria-labelledby="markets-heading" className="scroll-mt-32 border-y border-hairline bg-surface">
      <div className="site-container section-space grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-14 lg:gap-y-8 xl:gap-x-20">
        <div className="lg:col-start-2 lg:row-start-1">
          <h2 id="markets-heading" className="section-title max-w-xl text-ink">Built for the capital markets.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">
            Practical support for companies preparing to list and those already
            navigating the responsibilities of the public markets.
          </p>
        </div>

        <figure className="group relative isolate min-h-72 overflow-hidden rounded-xl bg-photo-ground sm:min-h-96 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-[36rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1600px) 620px, (min-width: 1024px) 42vw, calc(100vw - 2rem)"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
            style={{ objectPosition: "62% 50%" }}
          />
          <div aria-hidden="true" className="markets-photo-shade absolute inset-0" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="max-w-xs font-serif text-2xl leading-snug text-photo-ink sm:text-3xl">From listing readiness to continuing governance.</p>
          </figcaption>
        </figure>

        <div className="min-w-0 lg:col-start-2 lg:row-start-2">
          <div className="grid gap-x-9 gap-y-7 sm:grid-cols-2 xl:gap-x-12">
            {areas.map((area) => (
              <div key={area.title} className="min-w-0 border-t border-hairline pt-5">
                <h3 className="text-xl text-ink">{area.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-dim">{area.description}</p>
                <ul className="mt-3 space-y-1">
                  {area.services.map((slug) => {
                    const service = getService(slug)!;
                    return (
                      <li key={slug}>
                        <Link href={`/services/${slug}`} className="group flex min-h-11 items-center justify-between gap-4 py-2 text-base leading-snug text-ink">
                          <span className="underline decoration-control-line underline-offset-4 transition-colors group-hover:decoration-signal">{service.name}</span>
                          <span aria-hidden="true" className="shrink-0 text-signal transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hairline pt-6">
            <Link href="/contact" className="action-primary">Discuss your requirements</Link>
            <Link href="/services#capital-markets" className="text-link text-base text-ink-dim hover:text-ink">Explore capital-markets services →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
