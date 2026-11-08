import { Ticker } from "@/components/site/ticker";
import { Positioning } from "@/components/home/positioning";
import { Figures } from "@/components/home/figures";
import { ServiceCards } from "@/components/home/service-cards";
import { CapitalMarkets } from "@/components/home/capital-markets";
import { Principal } from "@/components/home/principal";
import { InsightsTeaser } from "@/components/home/insights-teaser";
import { Enquire } from "@/components/home/enquire";
import { HowWeWork } from "@/components/home/how-we-work";
import Link from "next/link";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phones.map((p) => p.tel),
  email: site.emails[0],
  areaServed: "IN",
  sameAs: [site.linkedin],
  hasMap: site.maps,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.lines.join(" "),
    addressLocality: "Mumbai",
    addressRegion: "MH",
    postalCode: "400069",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: site.principal,
    jobTitle: "Company Secretary",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Positioning />
      <Ticker />
      <Figures />
      <ServiceCards />
      <CapitalMarkets />
      <HowWeWork />
      <Principal />
      <InsightsTeaser />
      <section className="site-container section-space">
        <h2 className="section-title text-ink">Partner with us</h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-dim">We welcome collaboration with CA, CS and law firms on corporate, regulatory and advisory assignments.</p>
        <Link href="/partner-with-us" className="action-secondary mt-6">Discuss a professional collaboration →</Link>
      </section>
      <Enquire />
    </>
  );
}
