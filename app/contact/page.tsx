import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ayush D Gupta & Associates, Company Secretaries in Andheri (E), Mumbai. Call, WhatsApp, or email us for corporate compliance, SEBI, FEMA, and IPO advisory.",
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.lines.join(" "),
)}`;

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <p className="font-mono text-[0.72rem] uppercase tracking-wider text-steel">
          We respond promptly
        </p>
        <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          Contact us
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
          Looking for answers, clarity, or strategic direction? Our team is
          committed to supporting you with practical insights and dependable
          guidance at every step of your business growth.
        </p>
      </div>

      <Enquire />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between gap-6 rounded-xl border border-hairline bg-surface p-6 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
              Our office
            </span>
            <address className="mt-3 not-italic text-lg leading-relaxed text-ink">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <span className="shrink-0 font-mono text-sm text-signal transition-colors group-hover:underline">
            View on Google Maps ↗
          </span>
        </a>
      </section>
    </>
  );
}
