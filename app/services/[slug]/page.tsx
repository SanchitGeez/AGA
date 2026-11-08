import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getService,
  services,
  servicesByCategory,
  categoryName,
} from "@/lib/services";
import { getServiceScope } from "@/lib/service-content";
import { getServiceGuide } from "@/lib/service-guides";
import { site } from "@/lib/site";
import { Enquire } from "@/components/home/enquire";
import { serviceImagery } from "@/lib/service-imagery";

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
  const guide = getServiceGuide(service);
  const image = serviceImagery[service.category];

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
      <article>
        <header className="service-detail-hero relative isolate overflow-hidden bg-photo-ground text-photo-ink">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" preload className="-z-20 object-cover" style={{ objectPosition: image.position }} />
          <div className="service-detail-shade absolute inset-0 -z-10" aria-hidden="true" />
          <div className="site-container section-space flex min-h-[25rem] flex-col justify-center sm:min-h-[28rem]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-photo-ink">
              <Link href="/services" className="text-link hover:text-photo-signal">
                Services
              </Link>
              <span aria-hidden>/</span>
              <Link href={`/services#${service.category}`} className="text-link hover:text-photo-signal">{categoryName(service.category)}</Link>
            </nav>

            <h1 className="mt-5 max-w-4xl page-title">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-photo-ink">{service.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-base">
              <span className="font-mono text-photo-signal">{service.law}</span>
              <a href="#enquire" className="action-primary">Enquire about this service</a>
              {scope.length > 0 && <a href="#scope" className="text-link gap-4 text-photo-ink hover:text-photo-signal">Scope of work <span aria-hidden="true">↓</span></a>}
            </div>
          </div>
        </header>

        <div className="site-container section-space">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-dim">
            {service.summary}
          </p>

          {scope.length > 0 && (
            <div id="scope" className="mt-10 scroll-mt-36">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                Scope of work
              </h2>
              <ul className="mt-4 grid gap-x-12 border-t border-hairline lg:grid-cols-2">
                {scope.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-hairline py-5 text-base leading-relaxed text-ink-dim"
                  >
                    <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-signal-solid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <section className="mt-12" aria-labelledby="documents-heading">
            <h2 id="documents-heading" className="text-2xl text-ink">Documents to get started</h2>
            <p className="mt-3 max-w-3xl text-base text-ink-dim">The initial list below helps us assess your assignment. We confirm the exact requirements after review. Please do not send confidential records through the initial enquiry form.</p>
            <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-base text-ink-dim">{guide.documents.map((document) => <li key={document}>{document}</li>)}</ul>
          </section>
          <section className="mt-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl text-ink">Frequently asked questions</h2>
            <div className="mt-5 max-w-3xl border-t border-hairline">{guide.faqs.map((faq) => <details key={faq.question} className="border-b border-hairline py-4"><summary className="min-h-11 py-2 text-base font-medium text-ink">{faq.question}</summary><p className="pb-2 pt-3 text-base leading-relaxed text-ink-dim">{faq.answer}</p></details>)}</div>
          </section>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                More in {categoryName(service.category)}
              </h2>
              <ul className="mt-4 border-t border-hairline">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-4 border-b border-hairline py-3.5 transition-colors hover:bg-surface"
                    >
                      <span className="text-ink underline decoration-control-line underline-offset-4">{s.name}</span>
                      <span className="font-mono text-steel transition-colors group-hover:text-signal">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <div className="border-t border-hairline">
        <Enquire defaultService={service.name} />
      </div>
    </>
  );
}
