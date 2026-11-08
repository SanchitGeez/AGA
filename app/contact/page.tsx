import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ayush D Gupta & Associates, Company Secretaries in Andheri (E), Mumbai. Call, WhatsApp, or email us for corporate compliance, SEBI, FEMA, and IPO advisory.",
};



export default function ContactPage() {
  return (
    <>
      <Enquire headingLevel={1} />

      <section className="site-container section-end">
        <h2 className="section-title mb-6 text-ink">Our office</h2>
        <iframe src={site.mapsEmbed} title="Google Maps: Madhu Industrial Estate, location of our Andheri office" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mb-6 h-80 w-full rounded-xl border border-hairline sm:h-96" />
        <a
          href={site.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between gap-6 rounded-xl border border-hairline bg-surface p-6 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <span className="text-base font-semibold text-ink">
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
          <span className="text-link shrink-0 text-base font-semibold text-signal">
            Get directions on Google Maps ↗
          </span>
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-link mt-6 text-ink">Connect with CS Ayush Gupta on LinkedIn →</a>
      </section>
    </>
  );
}
