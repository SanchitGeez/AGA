import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Disclaimer", description: "Website terms, professional-engagement information and the regulatory-information disclaimer for Ayush D Gupta & Associates." };
export default function TermsDisclaimer() {
  return <article className="site-container section-space"><div className="max-w-3xl space-y-8 text-base leading-relaxed text-ink-dim">
    <h1 className="page-title text-ink">Terms &amp; Disclaimer</h1>
    <section><h2 className="text-2xl text-ink">Website information</h2><p className="mt-3">This website introduces {site.name} and provides general information about its services. The content is not advice on your particular legal, tax, regulatory or commercial circumstances. Please obtain advice based on your entity, documents and applicable requirements before acting.</p></section>
    <section><h2 className="text-2xl text-ink">Professional engagements</h2><p className="mt-3">Submitting a form, résumé, email or message does not by itself create a client relationship, acceptance of work or an obligation to meet a filing deadline. Scope, fees, responsibilities and timelines are agreed separately. Do not send confidential client records before the appropriate engagement and confidentiality arrangements are in place.</p></section>
    <section><h2 className="text-2xl text-ink">Regulatory references and timelines</h2><p className="mt-3">Service descriptions and calendar entries are general references. Applicability, amendments, extensions, reporting periods and entity-specific facts can change an obligation or deadline. Official legislation, notifications and regulator or exchange circulars should be checked for the relevant filing. A turnaround estimate is subject to complete information, required approvals and authority processing.</p></section>
    <section><h2 className="text-2xl text-ink">External resources and imagery</h2><p className="mt-3">Links to regulators, exchanges, Maps, LinkedIn and other websites are provided for convenience; their content and availability are controlled by those providers. Service and boardroom photographs are illustrative and do not represent the firm’s office or client engagements.</p></section>
    <section><h2 className="text-2xl text-ink">Use of this website</h2><p className="mt-3">Use the website and forms for legitimate enquiries. Do not submit unlawful, misleading or unsolicited material, attempt to interfere with the service, or provide another person’s confidential information without authority. Availability or error-free operation cannot be guaranteed.</p></section>
    <section><h2 className="text-2xl text-ink">Contact and personal information</h2><p className="mt-3">Questions can be sent to <a className="text-ink underline underline-offset-4" href={`mailto:${site.emails.at(-1)}`}>{site.emails.at(-1)}</a>. Information about personal-data handling is available in the <Link href="/privacy-policy" className="text-ink underline underline-offset-4">Privacy Policy</Link>.</p></section>
  </div></article>;
}
