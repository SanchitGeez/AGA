// The 25 services, grouped into 6 categories (see PRODUCT.md).
// Summaries are Phase-1 concise; the full statutory bullet lists land in Phase 3.

export type CategoryId =
  | "formation"
  | "compliance"
  | "capital-markets"
  | "transactions"
  | "cross-border"
  | "advisory";

export interface ServiceCategory {
  id: CategoryId;
  name: string;
  blurb: string;
}

export interface Service {
  slug: string;
  name: string;
  category: CategoryId;
  tagline: string;
  summary: string;
  /** Primary governing statute / regulation / framework — real data, shown in the matrix. */
  law: string;
}

export const categories: ServiceCategory[] = [
  {
    id: "formation",
    name: "Formation & Setup",
    blurb: "Entities, registrations, and the paperwork that gets you operating.",
  },
  {
    id: "compliance",
    name: "Ongoing Compliance",
    blurb: "Annual filings, audits and continuing statutory obligations.",
  },
  {
    id: "capital-markets",
    name: "Capital Markets",
    blurb: "Listed-company and IPO work across SEBI, exchanges and corporate actions.",
  },
  {
    id: "transactions",
    name: "Transactions & Restructuring",
    blurb: "M&A, restructuring, due diligence, and clean exits.",
  },
  {
    id: "cross-border",
    name: "Cross-Border & NBFC",
    blurb: "FEMA, RBI, foreign investment, and NBFC compliance.",
  },
  {
    id: "advisory",
    name: "Advisory & Governance",
    blurb: "Counsel, representation, IP, drafting, and board governance.",
  },
];

export const services: Service[] = [
  // Formation & Setup
  {
    slug: "incorporation-registration",
    name: "Incorporation & Registration",
    category: "formation",
    law: "Cos. Act 2013",
    tagline: "Company, LLP, OPC & Section 8 setup",
    summary:
      "End-to-end incorporation — entity selection, DSC & DIN, name approval, MOA/AOA drafting, and MCA filings — so your business starts on a sound legal footing.",
  },
  {
    slug: "startup-advisory",
    name: "Startup Advisory",
    category: "formation",
    law: "DPIIT",
    tagline: "Structure, DPIIT, funding & compliance",
    summary:
      "Founder-focused guidance from structure selection and incorporation to DPIIT recognition, funding readiness, and ongoing compliance setup.",
  },
  {
    slug: "regulatory-registrations",
    name: "Regulatory Registrations & Licenses",
    category: "formation",
    law: "IEC · MSME",
    tagline: "IEC, MSME, DPIIT & statutory licenses",
    summary:
      "Registrations and licenses across government authorities — IEC, MSME/Udyam, DPIIT, and other approvals your operations require.",
  },
  {
    slug: "dsc-services",
    name: "DSC Services",
    category: "formation",
    law: "IT Act 2000",
    tagline: "Class-3 Digital Signature Certificates",
    summary:
      "Issuance, renewal, and management of Class-3 DSCs for directors, partners, and signatories across MCA, GST, Income Tax, and DGFT portals.",
  },
  {
    slug: "partnership-firms",
    name: "Partnership Firms & Registrar of Firms",
    category: "formation",
    law: "Partnership Act",
    tagline: "Firm registration & RoF filings",
    summary:
      "Registration of partnership firms, deed drafting, reconstitution, and all filings with the Registrar of Firms under the Indian Partnership Act, 1932.",
  },

  // Ongoing Compliance
  {
    slug: "company-secretarial-compliance",
    name: "Company Law & Secretarial Compliance",
    category: "compliance",
    law: "Cos. Act 2013",
    tagline: "Annual filings, meetings & records",
    summary:
      "End-to-end compliance under the Companies Act, 2013 — annual returns, board & general meetings, resolutions, statutory registers, and ROC filings.",
  },
  {
    slug: "llp-compliance",
    name: "LLP Compliance",
    category: "compliance",
    law: "LLP Act 2008",
    tagline: "Form 8, Form 11 & LLP filings",
    summary:
      "Complete LLP compliance — annual returns, statements of account, agreement amendments, and event-based filings under the LLP Act, 2008.",
  },
  {
    slug: "xbrl-filings",
    name: "XBRL Filings",
    category: "compliance",
    law: "AOC-4 XBRL",
    tagline: "AOC-4 XBRL preparation & filing",
    summary:
      "Accurate XBRL preparation, tagging, validation, and filing of financial statements and regulatory forms — on time and error-free.",
  },
  {
    slug: "statutory-certification",
    name: "Statutory Certification",
    category: "compliance",
    law: "Cos. Act · FEMA",
    tagline: "Certificates under Companies Act & FEMA",
    summary:
      "Reliable certification of returns, compliance certificates, and declarations required under the Companies Act, FEMA, and allied laws.",
  },
  {
    slug: "secretarial-audit",
    name: "Secretarial Audit",
    category: "compliance",
    law: "§204 · MR-3",
    tagline: "Independent Section 204 audit (MR-3)",
    summary:
      "Independent secretarial audit assessing statutory compliance, governance, and risk — culminating in the MR-3 report and corrective advisory.",
  },

  // Capital Markets
  {
    slug: "sebi-stock-exchange",
    name: "SEBI & Stock Exchange Compliances",
    category: "capital-markets",
    law: "SEBI LODR",
    tagline: "LODR, PIT & exchange disclosures",
    summary:
      "Listed-company compliance under SEBI (LODR) — periodic disclosures, PIT/SDD, corporate governance reports, and coordination with NSE/BSE.",
  },
  {
    slug: "ipo-advisory",
    name: "IPO Advisory",
    category: "capital-markets",
    law: "SEBI ICDR",
    tagline: "End-to-end listing readiness",
    summary:
      "Guidance across the IPO journey — restructuring, ICDR compliance, DRHP support, intermediary coordination, and post-listing obligations.",
  },
  {
    slug: "corporate-actions",
    name: "Corporate Actions",
    category: "capital-markets",
    law: "SEBI LODR",
    tagline: "Dividends, bonus, rights & buybacks",
    summary:
      "Execution support for dividends, bonus and rights issues, splits, and buybacks — with board/shareholder approvals and regulatory filings.",
  },

  // Transactions & Restructuring
  {
    slug: "corporate-restructuring",
    name: "Corporate Restructuring",
    category: "transactions",
    law: "§230–232",
    tagline: "Mergers, demergers & capital reduction",
    summary:
      "Advisory and compliance for mergers, demergers, amalgamations, capital restructuring, and schemes of arrangement under the Companies Act.",
  },
  {
    slug: "due-diligence",
    name: "Due Diligence",
    category: "transactions",
    law: "M&A",
    tagline: "Legal & secretarial due diligence",
    summary:
      "Detailed corporate, legal, and regulatory due diligence for M&A, investments, and partnerships — with clear risk findings and reports.",
  },
  {
    slug: "nclt-legal",
    name: "NCLT & Legal Matters",
    category: "transactions",
    law: "NCLT · IBC",
    tagline: "Petitions, schemes & representation",
    summary:
      "Support for NCLT petitions, schemes of arrangement, oppression & mismanagement, and representation before tribunals and appellate forums.",
  },
  {
    slug: "corporate-matchmaking",
    name: "Sell / Purchase of Companies",
    category: "transactions",
    law: "M&A",
    tagline: "Confidential business buy/sell",
    summary:
      "Confidential matching of buyers and sellers, deal positioning, and structured transaction support for business transfers and acquisitions.",
  },
  {
    slug: "closure-exit",
    name: "Closure & Exit Services",
    category: "transactions",
    law: "§248 · IBC",
    tagline: "Strike-off, winding up & dissolution",
    summary:
      "End-to-end exit support — company strike-off, voluntary liquidation, LLP closure, and related statutory filings, done cleanly.",
  },

  // Cross-Border & NBFC
  {
    slug: "rbi-fema",
    name: "RBI & FEMA Compliances",
    category: "cross-border",
    law: "FEMA 1999",
    tagline: "FDI, ODI, ECB & RBI filings",
    summary:
      "FEMA and RBI advisory for cross-border transactions — FDI/ODI structuring, FC-GPR/FC-TRS, ECB reporting, and compounding of contraventions.",
  },
  {
    slug: "nbfc-services",
    name: "Services to NBFCs",
    category: "cross-border",
    law: "RBI Master Dir.",
    tagline: "RBI licensing & ongoing compliance",
    summary:
      "Full lifecycle support for NBFCs — registration, RBI Master Direction compliance, periodic returns, governance, and inspection readiness.",
  },

  // Advisory & Governance
  {
    slug: "advisory-consulting",
    name: "Advisory & Consulting",
    category: "advisory",
    law: "Governance",
    tagline: "Governance, structuring & risk",
    summary:
      "Practical advisory on corporate law, governance, structuring, and compliance frameworks to support informed, risk-aware decisions.",
  },
  {
    slug: "approvals-appearances",
    name: "Approvals & Appearances",
    category: "advisory",
    law: "ROC · RD · NCLT",
    tagline: "ROC, RD, NCLT & RBI representation",
    summary:
      "Regulatory approvals and representation before ROC, RD, NCLT, RBI, and other authorities — drafting, filing, and appearance support.",
  },
  {
    slug: "trademark-ipr",
    name: "Trademark & IPR",
    category: "advisory",
    law: "Trademarks Act",
    tagline: "Search, filing & brand protection",
    summary:
      "Trademark search, filing, prosecution, and IP portfolio advisory to protect your brand and creative assets.",
  },
  {
    slug: "drafting-vetting",
    name: "Drafting & Vetting",
    category: "advisory",
    law: "Contracts",
    tagline: "SHA, SSA, SPA & commercial contracts",
    summary:
      "Precise drafting and vetting of shareholder, subscription, and commercial agreements — clear, compliant, and protective of your interests.",
  },
  {
    slug: "independent-director",
    name: "Independent Director Services",
    category: "advisory",
    law: "§149 · IICA",
    tagline: "Board roles & IICA compliance",
    summary:
      "Independent director services and placement, IICA registration support, and governance advisory to strengthen board effectiveness.",
  },
];

export const servicesByCategory = (id: CategoryId) =>
  services.filter((s) => s.category === id);

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const categoryName = (id: CategoryId) =>
  categories.find((c) => c.id === id)?.name ?? id;
