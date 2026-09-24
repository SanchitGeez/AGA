import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getService,
  services,
  servicesByCategory,
  categoryName,
} from "@/lib/services";
import { getServiceScope } from "@/lib/service-content";
import { site } from "@/lib/site";
import { Enquire } from "@/components/home/enquire";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = servicesByCategory(service.category).filter(
    (s) => s.slug !== service.slug,
  );
  const scope = getServiceScope(service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    category: categoryName(service.category),
    provider: {
      "@type": "LegalService",
      name: site.name,
      areaServed: "IN",
    },
    url: `${site.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <nav className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider text-steel">
          <Link href="/services" className="hover:text-ink">
            Services
          </Link>
          <span aria-hidden>/</span>
          <span className="text-signal">{categoryName(service.category)}</span>
        </nav>

        <h1 className="mt-5 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          {service.name}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-steel">
          <span>{service.tagline}</span>
          <span aria-hidden className="text-hairline">
            ·
          </span>
          <span className="text-signal">{service.law}</span>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim">
          {service.summary}
        </p>

        {scope.length > 0 && (
          <div className="mt-12">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
              Scope of work
            </h2>
            <ul className="mt-4 grid gap-x-8 border-t border-hairline sm:grid-cols-2">
              {scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-hairline py-3 text-sm leading-relaxed text-ink-dim"
                >
                  <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-signal-solid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
              More in {categoryName(service.category)}
            </h2>
            <ul className="mt-4 border-t border-hairline">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-hairline py-3.5 transition-colors hover:bg-surface"
                  >
                    <span className="text-ink">{s.name}</span>
                    <span className="font-mono text-steel transition-colors group-hover:text-signal">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <div className="border-t border-hairline">
        <Enquire defaultService={service.name} />
      </div>
    </>
  );
}
