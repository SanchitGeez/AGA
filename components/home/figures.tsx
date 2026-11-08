"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function CountUp({ target }: { target: number }) {
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let frame = 0;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        const dur = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setValue(Math.round((1 - Math.pow(1 - p, 4)) * target));
          if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-IN")}
    </span>
  );
}

export function Figures() {
  return (
    <section className="site-container section-space">
      <div className="grid grid-cols-1 divide-y divide-hairline rounded-xl border border-hairline bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {site.stats.map((s) => (
          <div key={s.label} className="px-6 py-8 sm:px-8">
            <div className="font-mono text-[clamp(1.75rem,1.05rem+2.1vw,2.625rem)] font-medium leading-none tracking-tight text-signal">
              <CountUp target={s.value} />
              {s.suffix}
            </div>
            <div className="mt-3 text-sm font-medium text-steel">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
