import Link from "next/link";

export function PrivacyConsent({ id, application = false }: { id: string; application?: boolean }) {
  return (
    <label htmlFor={`${id}-consent`} className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink-dim">
      <input id={`${id}-consent`} type="checkbox" name="consent" value="yes" required className="mt-1 size-5 shrink-0 accent-signal-solid" />
      <span>I agree that my details{application ? " and résumé" : ""} may be used to respond to this {application ? "application" : "enquiry"}, as described in the <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">Privacy Policy</Link>.</span>
    </label>
  );
}
