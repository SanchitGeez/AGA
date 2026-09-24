import { site } from "@/lib/site";

export function Principal() {
  return (
    <section
      id="principal"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
        {/* ponytail: portrait placeholder — swap for CS Ayush's real headshot */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-hairline bg-surface">
          <div className="grid h-full place-items-center">
            <span className="font-mono text-6xl font-semibold text-hairline">
              AG
            </span>
          </div>
          <span className="absolute bottom-3 left-3 font-mono text-[0.65rem] uppercase tracking-wider text-steel">
            Portrait — {site.principal}
          </span>
        </div>

        <div className="self-center">
          <p className="font-mono text-sm tracking-wide text-signal">
            The principal
          </p>
          <h2 className="mt-4 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            {site.principal}
          </h2>
          <p className="mt-2 font-mono text-sm text-steel">{site.credential}</p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
            {site.name} is a peer-reviewed firm of Company Secretaries offering
            comprehensive corporate, legal, and regulatory compliance solutions
            to businesses of all sizes. The firm brings extensive experience
            across IPOs, corporate restructuring, and regulatory compliance
            under the Companies Act, SEBI regulations, FEMA, and IPR — delivered
            with professionalism, integrity, and timely service.
          </p>

          <blockquote className="mt-8 border-l-0 border-t border-hairline pt-6">
            <p className="max-w-2xl text-lg italic leading-relaxed text-ink">
              “To shape stronger businesses through governance, compliance, and
              strategic insight.”
            </p>
            <cite className="mt-3 block font-mono text-[0.7rem] uppercase not-italic tracking-wider text-steel">
              — Firm Vision
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
