"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const statements = [
  { title: "Firm’s vision", text: "To shape stronger businesses through governance, compliance, and strategic insight." },
  { title: "Firm’s mission", text: "To simplify complex regulatory and corporate compliance requirements through expert advisory, proactive governance, and practical business solutions — enabling organisations to make informed decisions, mitigate risks, and create sustainable value for long-term success." },
];

function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function VisionMission() {
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reading, setReading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    function update() {
      clearInterval(timer);
      if (!motion.matches && visible && !paused && !reading && !focused) {
        timer = setInterval(() => setSelected((value) => (value + 1) % statements.length), 5000);
      }
    }
    update();
    motion.addEventListener("change", update);
    return () => { clearInterval(timer); motion.removeEventListener("change", update); };
  }, [visible, paused, reading, focused, selected]);

  return (
    <section ref={section} aria-label="Firm’s vision and mission" onMouseEnter={() => setReading(true)} onMouseLeave={() => setReading(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} className="vision-mission border-y border-hairline bg-surface">
      <div className="site-container section-space grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <h2 className="section-title text-ink">Vision &amp; mission</h2>
          <p className="mt-5 max-w-xs text-lg leading-relaxed text-ink-dim">The purpose behind our advice and the principles that guide our practice.</p>
          <span aria-hidden="true" className="mt-8 hidden font-serif text-[8rem] lg:block leading-none text-signal">“</span>
        </div>
        <div className="min-w-0">
          <div className="vision-slides grid" aria-live="off">
            {statements.map((statement, index) => (
              <div key={statement.title} data-inactive={!reducedMotion && selected !== index} aria-hidden={!reducedMotion && selected !== index} className="vision-slide col-start-1 row-start-1" aria-labelledby={`statement-${index}`}>
                <h3 id={`statement-${index}`} className="text-2xl text-signal">{statement.title}</h3>
                <p className={`mt-6 font-serif leading-[1.5] tracking-[-0.015em] text-ink ${index === 0 ? "text-[clamp(1.5rem,1rem+1.2vw,2.125rem)]" : "text-[clamp(1.25rem,1rem+0.8vw,1.75rem)]"}`}>{statement.text}</p>
              </div>
            ))}
          </div>
          <div className="vision-controls mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
            {statements.map((statement, index) => (
              <button key={statement.title} type="button" aria-label={`Show ${statement.title.toLowerCase()}`} aria-pressed={selected === index} onClick={() => setSelected(index)} className="flex min-h-11 items-center gap-3 pr-4 text-base text-ink">
                <span aria-hidden="true" className={`size-2.5 rounded-full ${selected === index ? "bg-signal-solid" : "bg-steel"}`} />
                {index === 0 ? "Vision" : "Mission"}
              </button>
            ))}
            <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className="ml-auto min-h-11 text-sm text-ink-dim underline underline-offset-4">{paused ? "Resume rotation" : "Pause rotation"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
