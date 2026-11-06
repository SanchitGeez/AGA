import Link from "next/link";
import { HeroBackground } from "./hero-visual";

export function Positioning() {
  return (
    <section aria-labelledby="hero-heading" className="home-hero relative isolate flex items-center overflow-hidden bg-photo-ground text-photo-ink">
      <span data-hero-start className="absolute inset-x-0 top-0 h-px" aria-hidden="true" />
      <HeroBackground />

      <div className="hero-content site-container relative">
        <div className="max-w-[54rem]">
          <h1 id="hero-heading" className="hero-heading font-serif font-medium leading-[1.08] tracking-[-0.025em]">
            <span className="block">Where governance</span>
            <span className="block">meets <span className="text-photo-signal">growth</span>.</span>
          </h1>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-photo-dim lg:text-xl">
            Company secretarial, governance and capital markets advisory, from
            incorporation to IPO.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="action-primary"
            >
              Enquire
            </Link>
            <Link
              href="/#services"
              className="action-secondary"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
