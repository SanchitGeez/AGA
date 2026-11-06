import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, servicesByCategory } from "@/lib/services";
import { serviceImagery } from "@/lib/service-imagery";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twenty-five company-secretarial and corporate-compliance services across six practice areas: incorporation, ongoing compliance, capital markets, transactions, cross-border & NBFC, and advisory & governance.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="site-container section-space">
        <h1 className="page-title text-ink">Services</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
          Twenty-five services across six practice areas. Find the support your
          business needs, with a detailed scope of work for every service.
        </p>

        <nav aria-label="Practice areas" className="mt-8 grid gap-x-8 divide-y divide-hairline border-y border-hairline sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`#${category.id}`} className="group flex min-h-20 items-center justify-between gap-4 py-3 text-base font-medium text-ink-dim transition-colors hover:text-signal sm:pr-6">
              <span>{category.name}</span>
              <span className="shrink-0 font-mono text-xs tabular-nums text-steel">{servicesByCategory(category.id).length}<span aria-hidden="true" className="ml-3 group-hover:text-signal">↓</span></span>
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {categories.map((category) => {
            const items = servicesByCategory(category.id);
            const image = serviceImagery[category.id];
            return (
              <section key={category.id} id={category.id} aria-labelledby={`heading-${category.id}`} className="service-directory-card relative isolate flex min-h-[46rem] scroll-mt-32 flex-col overflow-hidden rounded-xl bg-photo-ground p-5 text-photo-ink sm:p-7">
                <Image src={image.src} alt="" fill sizes="(min-width: 1600px) 756px, (min-width: 1024px) calc((100vw - 5.5rem) / 2), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)" className="-z-20 object-cover" style={{ objectPosition: image.position }} />
                <div className="service-directory-shade absolute inset-0 -z-10" aria-hidden="true" />
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h2 id={`heading-${category.id}`} className="max-w-md text-[clamp(1.75rem,1.2rem+1.2vw,2.375rem)] font-semibold leading-tight tracking-[-0.02em]">{category.name}</h2>
                    <span className="shrink-0 pt-1 font-mono text-xs tabular-nums">{String(items.length).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-3 max-w-md text-base leading-relaxed">{category.blurb}</p>
                </div>
                <ul className="mt-auto pt-24">
                  {items.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group flex min-h-20 items-center justify-between gap-4 border-t border-photo-rule py-3 text-base transition-colors hover:text-photo-signal">
                        <span>
                          <span className="font-medium leading-snug underline decoration-photo-rule underline-offset-4">{service.name}</span>
                          <span className="mt-2 block font-mono text-sm tabular-nums text-photo-dim">{service.law}</span>
                        </span>
                        <span aria-hidden="true" className="shrink-0 text-photo-signal transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
      <div className="border-t border-hairline"><Enquire /></div>
    </>
  );
}
