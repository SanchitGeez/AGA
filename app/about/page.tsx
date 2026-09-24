import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Figures } from "@/components/home/figures";
import { Principal } from "@/components/home/principal";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ayush D Gupta & Associates — a peer-reviewed firm of Company Secretaries in Mumbai, led by CS Ayush Gupta (ICSI), with deep experience in IPOs, SEBI, FEMA, restructuring, and corporate governance.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
          Company Secretary firm · Mumbai
        </p>
        <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          About the firm
        </h1>

        <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-ink-dim">
          <p>
            <span className="text-ink">{site.name}</span> is a peer-reviewed firm
            of Company Secretaries, dedicated to comprehensive corporate, legal,
            and regulatory compliance solutions for businesses of all sizes.
          </p>
          <p>
            Led by <span className="text-ink">{site.principal}</span>, a
            distinguished member of the Institute of Company Secretaries of India
            (ICSI), the firm brings extensive experience across IPOs, corporate
            restructuring, regulatory compliance, and business consultancy under
            the prevailing Indian laws. We specialise in guiding businesses
            through the complexities of the Companies Act, SEBI regulations,
            FEMA, IPR, and other statutory frameworks — ensuring seamless
            compliance and governance. With a commitment to professionalism,
            integrity, and timely service, we deliver practical solutions that
            help businesses remain compliant, mitigate risks, and achieve
            sustainable growth.
          </p>
        </div>
      </div>

      <Figures />

      <Principal />

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-hairline bg-surface p-6 sm:p-8">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
              Vision
            </h2>
            <p className="mt-4 text-lg italic leading-relaxed text-ink">
              “To shape stronger businesses through governance, compliance, and
              strategic insight.”
            </p>
          </div>
          <div className="rounded-xl border border-hairline bg-surface p-6 sm:p-8">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
              Mission
            </h2>
            <p className="mt-4 leading-relaxed text-ink-dim">
              To simplify complex regulatory and corporate compliance
              requirements through expert advisory, proactive governance, and
              practical business solutions — enabling organisations to make
              informed decisions, mitigate risks, and create sustainable value
              for long-term success.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-hairline">
        <Enquire />
      </div>
    </>
  );
}
