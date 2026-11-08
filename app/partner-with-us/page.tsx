import type { Metadata } from "next";
import { Enquire } from "@/components/home/enquire";

export const metadata: Metadata = { title: "Partner with us", description: "Collaborate with Ayush D Gupta & Associates on corporate, secretarial and regulatory assignments. We welcome CA, CS and law firm partnerships." };

export default function PartnershipPage() {
  return <><section className="site-container section-start"><h1 className="page-title text-ink">Partner with us</h1><p className="mt-6 max-w-2xl text-lg text-ink-dim">We welcome CA, CS and law firms seeking to collaborate on corporate, secretarial, regulatory and advisory assignments. Tell us about your practice, the work involved and the support you need.</p><p className="mt-4 max-w-2xl text-base text-ink-dim">Scope, responsibilities, confidentiality and commercial terms are agreed for each engagement. Please avoid sharing confidential client documents before an engagement is confirmed.</p></section><Enquire defaultService="Professional collaboration" /></>;
}
