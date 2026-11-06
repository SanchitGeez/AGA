"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { categories, servicesByCategory, type CategoryId } from "@/lib/services";
import { serviceImagery } from "@/lib/service-imagery";

export function ServiceCards() {
  const [selectedId, setSelectedId] = useState<CategoryId>("formation");
  const [renderedIds, setRenderedIds] = useState<CategoryId[]>(["formation"]);
  const [loadedIds, setLoadedIds] = useState<CategoryId[]>([]);
  const [failedIds, setFailedIds] = useState<CategoryId[]>([]);
  const [displayedId, setDisplayedId] = useState<CategoryId | null>("formation");
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function selectPractice(id: CategoryId) {
    setSelectedId(id);
    setRenderedIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
    if (loadedIds.includes(id)) setDisplayedId(id);
    if (failedIds.includes(id)) setDisplayedId(null);
  }

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowDown" ? (index + 1) % categories.length :
      event.key === "ArrowUp" ? (index - 1 + categories.length) % categories.length :
      event.key === "Home" ? 0 :
      event.key === "End" ? categories.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    buttons.current[next]?.focus();
    selectPractice(categories[next].id);
  }

  return (
    <section id="services" aria-labelledby="practice-heading" className="practice-explorer relative isolate scroll-mt-32 overflow-hidden bg-photo-ground text-photo-ink">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {renderedIds.map((id) => (
          <Image
            key={id}
            src={serviceImagery[id].src}
            alt=""
            fill
            sizes="100vw"
            loading={id === "formation" ? "lazy" : "eager"}
            className={`object-cover transition-opacity duration-300 motion-reduce:transition-none ${displayedId === id ? "opacity-100" : "opacity-0"}`}
            style={{ objectPosition: serviceImagery[id].position }}
            onLoad={() => {
              setLoadedIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
              if (id === selectedId) setDisplayedId(id);
            }}
            onError={() => {
              setFailedIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
              if (id === selectedId) setDisplayedId(null);
            }}
          />
        ))}
      </div>
      <div className="practice-explorer-shade absolute inset-0 -z-10 bg-photo-ground/90" aria-hidden="true" />

      <div className="practice-content site-container relative section-space lg:min-h-[60rem]">
        <div className="practice-navigation lg:w-[40%]">
          <h2 id="practice-heading" className="section-title">
            Six practice areas
          </h2>
          <p className="mt-3 max-w-sm text-photo-dim">
            Explore twenty-five services across company law, capital markets and corporate governance.
          </p>

          <div className="mt-8 border-t border-photo-rule">
            {categories.map((category, index) => {
              const selected = selectedId === category.id;
              const items = servicesByCategory(category.id);
              return (
                <div key={category.id} className="border-b border-photo-rule">
                  <h3>
                    <button
                      ref={(element) => { buttons.current[index] = element; }}
                      id={`practice-button-${category.id}`}
                      aria-expanded={selected}
                      aria-disabled={selected || undefined}
                      aria-controls={`practice-panel-${category.id}`}
                      onClick={() => selectPractice(category.id)}
                      onKeyDown={(event) => moveFocus(event, index)}
                      className={`practice-button flex min-h-20 w-full scroll-mt-36 items-center justify-between gap-4 px-3 py-5 text-left transition-colors hover:text-photo-signal focus-visible:outline-photo-signal ${selected ? "bg-photo-ground/60 text-photo-signal" : "text-photo-ink"}`}
                    >
                      <span className="text-lg font-medium leading-snug xl:text-xl">{category.name}</span>
                      <span className="flex shrink-0 items-center gap-4">
                        <span className="font-mono text-xs tabular-nums text-photo-dim">{String(items.length).padStart(2, "0")}</span>
                        <span aria-hidden="true" className="grid size-10 place-items-center rounded-md border border-photo-rule text-xl font-normal">{selected ? "−" : "+"}</span>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`practice-panel-${category.id}`}
                    role="region"
                    aria-labelledby={`practice-button-${category.id}`}
                    hidden={!selected}
                    className="practice-panel pb-6 lg:absolute lg:bottom-16 lg:right-8 lg:w-[51%] lg:max-w-2xl lg:border-t lg:border-photo-rule lg:bg-photo-ground/95 lg:p-7"
                  >
                    <div className="relative mb-5 aspect-video overflow-hidden rounded-md bg-photo-ground lg:hidden">
                      {selected && <Image src={serviceImagery[category.id].src} alt="" fill sizes="(min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)" className="object-cover" style={{ objectPosition: serviceImagery[category.id].position }} />}
                    </div>
                    <h4 className="hidden text-2xl font-medium leading-tight tracking-[-0.02em] lg:block">{category.name}</h4>
                    <p className="max-w-lg text-base leading-relaxed text-photo-dim lg:mt-2">{category.blurb}</p>
                    <ul className="mt-5 grid gap-x-8 xl:grid-cols-2">
                      {items.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`} className="group flex h-full min-h-20 scroll-mt-36 items-center justify-between gap-3 border-t border-photo-rule py-4 text-base leading-snug text-photo-ink transition-colors hover:text-photo-signal focus-visible:outline-photo-signal">
                            <span><span className="underline decoration-photo-rule underline-offset-4">{service.name}</span><span className="mt-1 block font-mono text-sm text-photo-dim">{service.law}</span></span>
                            <span aria-hidden="true" className="text-photo-signal transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/services" className="text-link mt-7 gap-5 text-base font-semibold text-photo-ink hover:text-photo-signal focus-visible:outline-photo-signal">
            All 25 services <span aria-hidden="true" className="text-photo-signal">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
