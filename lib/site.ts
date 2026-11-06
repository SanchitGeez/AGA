// Firm constants. Swap placeholders (stats) for real figures when available.

export const site = {
  name: "Ayush D Gupta & Associates",
  shortName: "AGA & Associates",
  initial: "A",
  principal: "CS Ayush Gupta",
  credential: "Member, Institute of Company Secretaries of India (ICSI)",
  // Canonical origin used by metadata, sitemap, robots.txt, and structured data.
  // Set NEXT_PUBLIC_SITE_URL on the host when the confirmed domain differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://agaassociates.in").replace(/\/$/, ""),
  description:
    "Peer-reviewed firm of Company Secretaries in Mumbai. Corporate, legal, and regulatory compliance — IPOs, SEBI, FEMA, restructuring, and governance under the Companies Act and allied laws.",
  tagline: "SEBI · NCLT · IPO-ready.",
  phones: [
    { display: "+91 99307 66702", tel: "+919930766702" },
  ],
  emails: ["staff.agaassociates@gmail.com", "info.agaassociates@gmail.com"],
  whatsapp: "919930766702",
  address: {
    lines: [
      "404, Madhu Industrial Park, Mogra Cross Road,",
      "Near Apollo Chamber, Andheri (E),",
      "Mumbai - 400 069",
    ],
    city: "Mumbai",
  },
  // ponytail: placeholder figures — swap for client's real numbers.
  stats: [
    { value: 500, suffix: "+", label: "Clients Served" },
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 2400, suffix: "+", label: "ROC Filings Completed" },
  ],
  exchangeLinks: [
    { label: "NSE", href: "https://www.nseindia.com/" },
    { label: "BSE", href: "https://www.bseindia.com/" },
    { label: "NSDL", href: "https://nsdl.com/" },
    { label: "CDSL", href: "https://www.cdslindia.com/" },
    { label: "ROF", href: "https://rof.mahaonline.gov.in/" },
    { label: "NCLT", href: "https://nclt.gov.in/" },
  ],
} as const;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
