import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, servicesByCategory } from "@/lib/services";
import { serviceImagery } from "@/lib/service-imagery";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Company-secretarial and corporate-compliance services: incorporation, ongoing compliance, capital markets, transactions, cross-border & NBFC, and advisory & governance.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="site-container section-space">
        <h1 className="page-title text-ink">Services</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
          Company law, capital markets and corporate governance. Find the support your
          business needs, with a detailed scope of work for every service.
        </p>

        <nav aria-label="Practice areas" className="mt-8 grid gap-x-8 divide-y divide-hairline border-y border-hairline sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`#${category.id}`} className="group flex min-h-20 items-center justify-between gap-4 py-3 text-base font-medium text-ink-dim transition-colors hover:text-signal sm:pr-6">
              <span>{category.name}</span>
              <span aria-hidden="true" className="shrink-0 text-steel group-hover:text-signal">↓</span>
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {categories.map((category) => {
            const items = servicesByCategory(category.id);
            const image = serviceImagery[category.id];
            return (
              <section key={category.id} id={category.id} aria-labelledby={`heading-${category.id}`} className="service-directory-card relative isolate flex h-[52rem] scroll-mt-32 flex-col overflow-hidden rounded-xl bg-photo-ground p-5 text-photo-ink sm:p-7">
                <Image src={image.src} alt="" fill sizes="(min-width: 1600px) 756px, (min-width: 1024px) calc((100vw - 5.5rem) / 2), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)" className="-z-20 object-cover" style={{ objectPosition: image.position }} />
                <div className="service-directory-shade absolute inset-0 -z-10" aria-hidden="true" />
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h2 id={`heading-${category.id}`} className="max-w-md text-[clamp(1.53125rem,1.05rem+1.05vw,2.078125rem)] font-semibold leading-tight tracking-[-0.02em]">{category.name}</h2>
                  </div>
                  <p className="mt-3 max-w-md text-base leading-relaxed">{category.blurb}</p>
                </div>
                <ul className="mt-auto min-h-0 overflow-y-auto overscroll-contain pt-16">
                  {items.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group flex min-h-20 items-center justify-between gap-4 border-t border-photo-rule py-3 text-base transition-colors hover:text-photo-signal">
                        <span>
                          <span className="font-medium leading-snug underline decoration-photo-rule underline-offset-4">{service.name}</span>
                          <span className="mt-2 block text-sm text-photo-dim">{service.tagline}</span>
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
