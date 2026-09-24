"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed hero background — a slate+amber duotone photograph behind the hero
 * copy. Ambient, on-theme motion: a slow Ken Burns zoom, a drifting ruled grid
 * (the terminal identity), and a subtle scroll parallax. Drop a wide photo at
 * `public/hero.jpg` (see the image spec); until then the ruled grid stands in.
 * All motion is reduced-motion aware.
 */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const p =
          (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.setProperty("--py", `${(-p * 40).toFixed(1)}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg">
      {/* Parallax carrier (bled past edges so travel never reveals an edge) */}
      <div
        ref={ref}
        style={{ transform: "translateY(var(--py,0px))" }}
        className="absolute inset-[-60px]"
      >
        {/* Photo — grayscaled, slow Ken Burns zoom */}
        <div className="hero-zoom absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center grayscale contrast-[1.15] brightness-[0.8]" />
      </div>

      {/* Bourse duotone: slate over shadows, amber lift on highlights */}
      <div className="absolute inset-0 bg-bg/55 mix-blend-color" />
      <div className="absolute inset-0 bg-signal-solid/15 mix-blend-overlay" />

      {/* Drifting ruled grid — the markets-terminal signature */}
      <div className="hero-grid absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_39px,var(--hairline)_40px),repeating-linear-gradient(90deg,transparent_0,transparent_39px,var(--hairline)_40px)]" />

      {/* Legibility scrim — functional, left-weighted for the left-aligned copy */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
    </div>
  );
}
