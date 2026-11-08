import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Figures } from "@/components/home/figures";
import { Principal } from "@/components/home/principal";
import { VisionMission } from "@/components/home/vision-mission";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ayush D Gupta & Associates — a peer-reviewed firm of Company Secretaries in Mumbai, led by CS Ayush Gupta (ICSI), with deep experience in IPOs, SEBI, FEMA, restructuring, and corporate governance.",
};

export default function AboutPage() {
  return (
    <>
      <div className="site-container section-space grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h1 className="page-title text-ink">
            About the firm
          </h1>

          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-ink-dim">
            <p>
              <span className="text-ink">{site.name}</span> is a peer-reviewed firm
              of Company Secretaries, dedicated to comprehensive corporate, legal,
              and regulatory compliance solutions for businesses of all sizes.
            </p>
            <p>
              Our practice supports formation, ongoing compliance, capital markets,
              corporate transactions and cross-border matters under the Companies
              Act, SEBI regulations, FEMA and allied frameworks. We combine
              statutory knowledge with practical support for businesses at every
              stage, from formation through growth and listing.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 border-y border-hairline py-12 text-center lg:border-y-0 lg:py-8" role="img" aria-label={site.name}>
          <span aria-hidden="true" className="firm-emblem block size-44 text-signal sm:size-56 lg:size-64" />
          <div aria-hidden="true" className="text-ink">
            <div className="font-serif text-2xl font-medium leading-tight tracking-tight sm:text-3xl">AYUSH D GUPTA</div>
            <div className="mt-3 text-base font-semibold uppercase tracking-[0.14em]">&amp; Associates</div>
            <div className="mt-5 text-base text-ink-dim">Company Secretaries</div>
          </div>
        </div>
      </div>

      <VisionMission />

      <Figures />

      <Principal />

      <div className="border-t border-hairline">
        <Enquire />
      </div>
    </>
  );
}
