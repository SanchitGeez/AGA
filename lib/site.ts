// Firm constants and client-supplied figures.

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
  emails: ["info.agaassociates@gmail.com"],
  linkedin: "https://www.linkedin.com/in/cs-ayush-gupta-2b8a7b18b/",
  maps: "https://maps.app.goo.gl/Vr78SBnALgGmc6Cn8",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5888473206624!2d72.85005029999999!3d19.125684900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d51e504c1f%3A0x67e469a53d577241!2sMadhu%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1794135545090!5m2!1sen!2sin",
  whatsapp: "919930766702",
  address: {
    lines: [
      "404, Madhu Industrial Park, Mogra Cross Road,",
      "Near Apollo Chamber, Andheri (E),",
      "Mumbai - 400 069",
    ],
    city: "Mumbai",
  },
  stats: [
    { value: 240, suffix: "+", label: "Clients Served" },
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 40, suffix: "+", label: "Entities Incorporated" },
  ],
  exchangeLinks: [
    { label: "SEBI", href: "https://www.sebi.gov.in/" },
    { label: "ICSI", href: "https://www.icsi.edu/" },
    { label: "IBBI", href: "https://ibbi.gov.in/" },
    { label: "MSME", href: "https://msme.gov.in/" },
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
