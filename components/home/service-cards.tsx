"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { categories, servicesByCategory, type CategoryId } from "@/lib/services";
import { serviceImagery } from "@/lib/service-imagery";

export function ServiceCards() {
  const [expanded, setExpanded] = useState(true);
  const [selectedId, setSelectedId] = useState<CategoryId>("formation");
  const [renderedIds, setRenderedIds] = useState<CategoryId[]>(["formation"]);
  const [loadedIds, setLoadedIds] = useState<CategoryId[]>([]);
  const [failedIds, setFailedIds] = useState<CategoryId[]>([]);
  const [displayedId, setDisplayedId] = useState<CategoryId | null>("formation");
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const playbackPaused = !expanded || paused || hovered || focused || !inView;

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function selectPractice(id: CategoryId) {
    setExpanded(true);
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
    <section
      ref={section}
      id="services"
      aria-labelledby="practice-heading"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      className="practice-explorer relative isolate scroll-mt-32 overflow-hidden bg-photo-ground text-photo-ink"
    >
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
          <h2 id="practice-heading" className="section-title">Practice areas</h2>
          <p className="mt-3 max-w-sm text-photo-dim">
            Explore our services across company law, capital markets and corporate governance.
          </p>

          <div className="mt-8 border-t border-photo-rule">
            {categories.map((category, index) => {
              const selected = expanded && selectedId === category.id;
              return (
                <div key={category.id} className="relative border-b border-photo-rule">
                  <h3>
                    <button
                      ref={(element) => { buttons.current[index] = element; }}
                      id={`practice-button-${category.id}`}
                      aria-expanded={selected}
                      aria-controls={`practice-panel-${category.id}`}
                      onPointerEnter={(event) => { if (event.pointerType === "mouse") { setHovered(true); selectPractice(category.id); } }}
                      onPointerLeave={() => setHovered(false)}
                      onClick={() => { if (selected) setExpanded(false); else selectPractice(category.id); }}
                      onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) selectPractice(category.id); }}
                      onKeyDown={(event) => moveFocus(event, index)}
                      className={`practice-button flex min-h-20 w-full scroll-mt-36 items-center justify-between gap-4 px-3 py-5 text-left transition-colors hover:text-photo-signal focus-visible:outline-photo-signal ${selected ? "bg-photo-ground/60 text-photo-signal" : "text-photo-ink"}`}
                    >
                      <span className="text-lg font-medium leading-snug xl:text-xl">{category.name}</span>
                      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-md border border-photo-rule text-xl font-normal">{selected ? "−" : "+"}</span>
                    </button>
                  </h3>
                  {selected && (
                    <span
                      key={selectedId}
                      aria-hidden="true"
                      className="practice-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-photo-signal"
                      style={{ animationPlayState: playbackPaused ? "paused" : "running" }}
                      onAnimationEnd={() => selectPractice(categories[(index + 1) % categories.length].id)}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <Link href="/services" className="text-link gap-5 text-base font-semibold text-photo-ink hover:text-photo-signal focus-visible:outline-photo-signal">
              All services <span aria-hidden="true" className="text-photo-signal">→</span>
            </Link>
            <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className="practice-playback min-h-12 text-sm text-photo-dim underline underline-offset-4 hover:text-photo-signal">
              {paused ? "Resume slideshow" : "Pause slideshow"}
            </button>
          </div>
        </div>

        {categories.map((category) => (
          <div
            key={category.id}
            id={`practice-panel-${category.id}`}
            role="region"
            aria-labelledby={`practice-button-${category.id}`}
            hidden={!expanded || selectedId !== category.id}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="practice-panel mt-8 h-[42rem] overflow-y-auto overscroll-contain border-t border-photo-rule bg-photo-ground/95 p-5 sm:p-7 lg:absolute lg:bottom-16 lg:right-8 lg:mt-0 lg:h-[38rem] lg:w-[51%] lg:max-w-2xl"
          >
            <div className="relative mb-5 aspect-video overflow-hidden rounded-md bg-photo-ground lg:hidden">
              {selectedId === category.id && <Image src={serviceImagery[category.id].src} alt="" fill sizes="(min-width: 640px) calc(100vw - 6rem), calc(100vw - 4.5rem)" className="object-cover" style={{ objectPosition: serviceImagery[category.id].position }} />}
            </div>
            <h4 className="text-2xl font-medium leading-tight tracking-[-0.02em]">{category.name}</h4>
            <p className="mt-2 max-w-lg text-base leading-relaxed text-photo-dim">{category.blurb}</p>
            <ul className="mt-5 grid gap-x-8 xl:grid-cols-2">
              {servicesByCategory(category.id).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="group flex h-full min-h-20 scroll-mt-36 items-center justify-between gap-3 border-t border-photo-rule py-4 text-base leading-snug text-photo-ink transition-colors hover:text-photo-signal focus-visible:outline-photo-signal">
                    <span><span className="underline decoration-photo-rule underline-offset-4">{service.name}</span><span className="mt-1 block text-sm text-photo-dim">{service.tagline}</span></span>
                    <span aria-hidden="true" className="text-photo-signal transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
