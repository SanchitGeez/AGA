import { Ticker } from "@/components/site/ticker";
import { Positioning } from "@/components/home/positioning";
import { Figures } from "@/components/home/figures";
import { ServiceCards } from "@/components/home/service-cards";
import { CapitalMarkets } from "@/components/home/capital-markets";
import { Principal } from "@/components/home/principal";
import { InsightsTeaser } from "@/components/home/insights-teaser";
import { Enquire } from "@/components/home/enquire";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phones.map((p) => p.tel),
  email: site.emails[1],
  areaServed: "IN",
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
      <Principal />
      <InsightsTeaser />
      <Enquire />
    </>
  );
}
