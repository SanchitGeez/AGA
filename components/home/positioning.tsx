import Link from "next/link";
import { site } from "@/lib/site";
import { HeroBackground } from "./hero-visual";

const meta = [
  "Peer-reviewed · ICSI",
  "IPO · SEBI · FEMA · NCLT",
  "Andheri (E), Mumbai",
];

export function Positioning() {
  return (
    <section className="relative isolate flex min-h-[clamp(34rem,82vh,50rem)] items-center overflow-hidden border-b border-hairline">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="font-serif text-[clamp(2.5rem,1.4rem+4vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.015em] text-ink">
            Your trusted partner in corporate governance &amp; compliance.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim">
            Expert advisory and compliance-driven strategy for businesses
            navigating the Companies Act, SEBI, FEMA, and allied laws — from
            incorporation to IPO. Precise, disciplined, dependable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/#enquire"
              className="rounded-md bg-signal-solid px-5 py-3 text-sm font-medium text-on-signal transition-colors hover:bg-signal-solid-hover"
            >
              Talk to {site.principal} →
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-signal hover:underline"
            >
              Explore 25 services →
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-hairline pt-6 font-mono text-[0.72rem] uppercase tracking-wider text-steel">
            {meta.map((m) => (
              <dd key={m}>{m}</dd>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
