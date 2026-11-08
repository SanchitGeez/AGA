import type { Service } from "./services";

interface Guide { documents: string[]; faqs: { question: string; answer: string }[] }
const categoryDocuments = {
  "formation": [
    "Identity and address details of proposed owners and authorised signatories",
    "Proposed activities, ownership structure and registered-office information"
  ],
  "compliance": [
    "Entity registration details and authorised contact information",
    "Relevant financial records, prior returns and authority correspondence"
  ],
  "capital-markets": [
    "Entity and listing details, applicable registrations and reporting period",
    "Relevant Board records, prior reports and exchange correspondence"
  ],
  "transactions": [
    "Entity structure, key approvals and non-confidential transaction outline",
    "Relevant agreements, financial records and prior regulatory correspondence"
  ],
  "cross-border": [
    "Entity and registration details, ownership and investment information",
    "Relevant bank, transaction and previous regulatory reporting records"
  ],
  "advisory": [
    "Entity or applicant details and the objective of the assignment",
    "Relevant agreements, policies, registrations and correspondence"
  ]
} as const;
const questions: Record<string, [string, string][]> = {
  "incorporation-registration": [
    [
      "Which types of entities can you help form?",
      "We support companies, LLPs, Section 8 companies, trusts, societies and partnership firms, with an approach suited to the proposed activity."
    ],
    [
      "Can you help me choose the structure?",
      "Yes. We discuss ownership, proposed activities, funding and ongoing compliance before recommending a suitable structure."
    ]
  ],
  "startup-advisory": [
    [
      "Can you help before incorporation?",
      "Yes. Structure selection, founder arrangements and an initial compliance plan can be considered before registration."
    ],
    [
      "Does your support include investor readiness?",
      "We support corporate records, due-diligence preparation and funding documentation within the agreed scope."
    ]
  ],
  "regulatory-registrations": [
    [
      "Which registrations can you assist with?",
      "We assess the activity and entity before identifying relevant registrations, including IEC, MSME/Udyam, DPIIT and related approvals."
    ],
    [
      "Can existing registrations be updated?",
      "Amendment, renewal and cancellation support can be included after reviewing the existing registration and proposed change."
    ]
  ],
  "dsc-services": [
    [
      "Can an existing DSC be renewed?",
      "We can assist with renewal or reissuance after reviewing the certificate and the issuing authority’s requirements."
    ],
    [
      "What information is needed from the applicant?",
      "Identity, address and authorisation information is requested through the applicable verification process. Please do not email passwords or private keys."
    ]
  ],
  "partnership-firms": [
    [
      "Can you help amend an existing partnership?",
      "Yes. We review the deed, proposed changes and Registrar of Firms records before preparing the relevant documentation."
    ],
    [
      "Do you also handle registration of a new firm?",
      "We assist with deed drafting, registration documentation and related Registrar of Firms submissions."
    ]
  ],
  "company-secretarial-compliance": [
    [
      "Can you take over an existing compliance assignment?",
      "We first review the company’s current records, filings and pending actions, then agree a handover and compliance plan."
    ],
    [
      "Do you handle event-based work as well as annual filings?",
      "Yes. Board changes, capital matters, registered-office changes and other agreed events can be included alongside annual compliance."
    ]
  ],
  "llp-compliance": [
    [
      "Can you help with changes to partners or the agreement?",
      "Yes. We review the existing LLP agreement and proposed changes before preparing the relevant documents and filings."
    ],
    [
      "What if earlier LLP filings are pending?",
      "We assess the outstanding periods and records, then explain the corrective work and applicable filing requirements."
    ]
  ],
  "xbrl-filings": [
    [
      "What do you need to prepare an XBRL filing?",
      "We typically start with approved financial statements, relevant reports, prior filings and the company’s identification details."
    ],
    [
      "Can you review a validation error or resubmission?",
      "Yes. We review the filing, validation output and authority’s observations to identify the necessary corrections."
    ]
  ],
  "statutory-certification": [
    [
      "Can you confirm whether a certificate is applicable?",
      "We review the transaction, entity and requesting authority’s requirements before confirming the relevant certification scope."
    ],
    [
      "What supports the certification process?",
      "The underlying records, approvals and representations must support the statements being certified."
    ]
  ],
  "secretarial-audit": [
    [
      "Is this the same as the Annual Secretarial Compliance Report?",
      "They are distinct assignments. We review the applicable requirements and agree whether secretarial audit, the annual compliance report or both are needed."
    ],
    [
      "Do you help address audit observations?",
      "We discuss findings and can assist with an agreed corrective-action plan and supporting documentation."
    ]
  ],
  "sebi-stock-exchange": [
    [
      "Can you support an already listed company?",
      "Yes. We can review existing disclosures, governance records and continuing obligations before agreeing recurring or assignment-specific support."
    ],
    [
      "Does this include insider-trading and SDD work?",
      "Insider-trading procedures, disclosures and Structured Digital Database compliance support can be covered in the agreed scope."
    ]
  ],
  "ipo-advisory": [
    [
      "At what stage should a company begin preparation?",
      "An early review helps identify corporate-record, governance and compliance gaps before the formal listing process begins."
    ],
    [
      "Will you coordinate with other IPO intermediaries?",
      "We support coordination with management, merchant bankers, auditors and legal advisers on the agreed corporate and compliance workstreams."
    ]
  ],
  "corporate-actions": [
    [
      "Which corporate actions can you support?",
      "Our scope can cover dividends, bonus or rights issues, capital changes, buybacks and associated approvals and filings."
    ],
    [
      "Can you assist with the approval sequence?",
      "We review the proposed action and coordinate its documentation, approvals and regulatory steps within the engagement."
    ]
  ],
  "corporate-restructuring": [
    [
      "Does the scope cover legal, tax and compliance matters?",
      "Yes. The restructuring plan considers these workstreams, including coordination with relevant professionals where needed."
    ],
    [
      "Can you review options before a transaction is agreed?",
      "We can assess the proposed structure, records and objectives before helping map the implementation and compliance steps."
    ]
  ],
  "due-diligence": [
    [
      "Can the review be focused on a specific transaction?",
      "Yes. The review scope can be tailored to an acquisition, investment, partnership or another proposed transaction."
    ],
    [
      "What will the findings cover?",
      "The agreed report identifies reviewed areas, material observations, missing information and recommended follow-up actions."
    ]
  ],
  "nclt-legal": [
    [
      "Can you review an existing notice or proceeding?",
      "We can review the available documents, procedural position and proposed response before confirming the support required."
    ],
    [
      "Will you coordinate with legal counsel?",
      "Where an assignment involves counsel or other professionals, responsibilities and coordination are agreed at the outset."
    ]
  ],
  "corporate-matchmaking": [
    [
      "What information is needed to discuss an opportunity?",
      "We begin with a non-confidential overview of the entity, objective and broad transaction requirements."
    ],
    [
      "How is confidential transaction information shared?",
      "Detailed information is shared only after agreeing the engagement, confidentiality requirements and appropriate authorisation."
    ]
  ],
  "closure-exit": [
    [
      "Can you assess the appropriate closure route?",
      "We review the entity’s status, activities, liabilities and records before discussing the applicable options."
    ],
    [
      "What happens if filings or liabilities are outstanding?",
      "These must be reviewed as part of the exit plan; the assignment may include resolving records and compliance gaps first."
    ]
  ],
  "rbi-fema": [
    [
      "Do you assist with FLA returns?",
      "Yes. We support preparation and submission of Foreign Liabilities and Assets reporting based on the entity’s records and applicable requirements."
    ],
    [
      "Can you coordinate with our authorised dealer bank?",
      "Yes. Coordination with the AD bank can be included for the relevant foreign-investment or cross-border reporting work."
    ]
  ],
  "nbfc-services": [
    [
      "Can you support an existing NBFC?",
      "We can review current registrations, records and reporting obligations before agreeing ongoing or specific compliance support."
    ],
    [
      "Can you assist during registration or a change in control?",
      "We review the proposal and requirements, then confirm the documentation and regulatory support to be covered."
    ]
  ],
  "advisory-consulting": [
    [
      "Can we engage you for a specific issue?",
      "Yes. Advisory can be scoped around a defined corporate, governance or regulatory question."
    ],
    [
      "Can advisory continue after the initial review?",
      "An ongoing arrangement can be agreed if continuing governance or compliance support is needed."
    ]
  ],
  "approvals-appearances": [
    [
      "Can you assess an authority’s query or notice?",
      "We review the communication, relevant records and response timeline before agreeing the scope of assistance."
    ],
    [
      "Does the work include follow-up after submission?",
      "Follow-up, clarifications and related documentation can be included in the engagement scope."
    ]
  ],
  "trademark-ipr": [
    [
      "Do you support design registration and international trademarks?",
      "Yes. We assist with design registration and international trademark filing strategy and coordination, alongside Indian trademark work."
    ],
    [
      "Can you help with an objection or an existing portfolio?",
      "We review the application history, authority correspondence and ownership records before proposing the next steps."
    ]
  ],
  "drafting-vetting": [
    [
      "Can you review a document prepared by another party?",
      "Yes. We review the agreed commercial context and identify drafting, compliance and risk issues within scope."
    ],
    [
      "Which documents can you help prepare?",
      "Shareholder, subscription, share-purchase and other corporate or commercial documents can be considered for drafting or review."
    ]
  ],
  "independent-director": [
    [
      "Can you help with board appointment documentation?",
      "We can assist with eligibility review, appointment documentation, records and associated compliance requirements."
    ],
    [
      "Does this include ongoing governance guidance?",
      "Governance support, board procedures and related records can be included in the agreed assignment."
    ]
  ],
  "reconciliation-share-capital-audit": [
    [
      "Which records need to be reconciled?",
      "The review compares company and registrar capital records with listed-capital and depository information, as applicable."
    ],
    [
      "Can you help resolve a reconciliation difference?",
      "We examine the supporting records with the company and registrar and discuss the corrective steps needed for the report."
    ]
  ],
  "annual-report": [
    [
      "Do you prepare the financial statements?",
      "This service focuses on annual-report and statutory-disclosure coordination; financial statements are provided by the responsible finance and audit professionals."
    ],
    [
      "Can you coordinate with multiple contributors?",
      "Yes. We can coordinate governance, management, audit and other agreed inputs for review, approval and circulation."
    ]
  ],
  "annual-secretarial-compliance-report": [
    [
      "How does this differ from secretarial audit?",
      "This report addresses applicable SEBI compliance for the reporting period. Secretarial audit is a separate assignment with its own scope and report."
    ],
    [
      "Can prior observations be included in the review?",
      "Yes. Prior reports, corrective actions and relevant authority correspondence form part of the records reviewed."
    ]
  ],
  "rera-services": [
    [
      "Do requirements differ by state?",
      "We review the applicable state authority’s process and the proposed project or agent activity before confirming the scope."
    ],
    [
      "Can you assist after the initial registration?",
      "Periodic disclosures, updates, amendments and other continuing compliance can be included."
    ]
  ],
  "audit-tax-gst-support": [
    [
      "Does this include GST registration and ongoing filings?",
      "Yes. Registration, amendments, returns and reconciliations can be scoped according to the entity’s activities and records."
    ],
    [
      "Who handles work requiring a specific professional qualification?",
      "The engagement identifies the responsible professionals and any audit, certification or specialist work that requires their involvement."
    ]
  ],
  "dpdp-privacy-compliance": [
    [
      "Can you help a startup set up privacy processes?",
      "Yes. We review the product’s data collection and uses, then help map notices, policies, requests and operational responsibilities."
    ],
    [
      "Is a privacy policy alone sufficient?",
      "The work also considers actual data practices, consent where applicable, vendors, retention, individual requests and incident-response documentation."
    ]
  ]
};
const extraDocuments: Record<string, string> = {
  "incorporation-registration": "Proposed names, constitutional documents and relevant trust or society documents, where applicable",
  "secretarial-audit": "Statutory registers, meeting records, filings and the previous audit report",
  "rbi-fema": "Foreign investment, outstanding liabilities/assets and AD bank records",
  "reconciliation-share-capital-audit": "Registrar capital register and NSDL/CDSL statements for the reporting period",
  "annual-report": "Approved financial statements, Board’s Report inputs and prior annual report",
  "annual-secretarial-compliance-report": "SEBI compliance records, prior report and corrective-action status",
  "rera-services": "Project or agent details, approvals and existing registration records",
  "dpdp-privacy-compliance": "Product/data-flow overview, current privacy notices and vendor-processing information",
  "audit-tax-gst-support": "PAN/GST details, financial ledgers, invoices and prior returns",
  "trademark-ipr": "Brand or design representations, ownership details and existing filing references",
  "dsc-services": "Issuer-requested applicant identity and authorisation records; never passwords or private keys"
};

export function getServiceGuide(service: Service): Guide {
  return {
    documents: [...categoryDocuments[service.category], extraDocuments[service.slug] || "The documents and records relevant to the proposed work, as confirmed after our initial review"],
    faqs: [...questions[service.slug].map(([question, answer]) => ({ question, answer })), {
      question: "What is the expected turnaround?",
      answer: "We confirm an assignment-specific timeline after reviewing the scope and documents. Document readiness, third-party inputs and authority approvals can affect completion; no regulatory approval date is guaranteed.",
    }],
  };
}
