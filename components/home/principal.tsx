import Image from "next/image";
import { site } from "@/lib/site";

export function Principal() {
  return (
    <section
      id="principal"
      className="site-container scroll-mt-32 section-space"
    >
      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-hairline bg-surface lg:max-w-none">
          <Image
            src="/portraits/ayush-gupta.webp"
            alt={`${site.principal}, principal of ${site.name}`}
            fill
            sizes="(min-width: 1024px) 300px, (min-width: 416px) 384px, calc(100vw - 2rem)"
            className="object-cover"
          />
        </div>

        <div className="self-center">
          <h2 className="section-title text-ink">
            {site.principal}
          </h2>
          <p className="mt-2 font-mono text-base text-steel">{site.credential}</p>

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
            <cite className="mt-3 block text-sm not-italic text-steel">
              Firm vision
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
