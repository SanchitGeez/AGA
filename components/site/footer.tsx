import Link from "next/link";
import { site } from "@/lib/site";

const pages = [["Home", "/"], ["About us", "/about"], ["Services", "/services"], ["Career", "/career"], ["Contact", "/contact"], ["Partner with us", "/partner-with-us"]];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="site-container section-space grid gap-10 md:grid-cols-2 xl:grid-cols-[1fr_1.2fr_1fr]">
        <div><h2 className="text-xl text-ink">Explore</h2><nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-1">{pages.map(([label, href]) => <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-base text-ink-dim hover:text-ink">{label}<span className="sr-only"> (opens in a new tab)</span></Link>)}</nav></div>
        <div><h2 className="text-xl text-ink">Our office</h2><p className="mt-4 max-w-sm text-base text-ink-dim">A peer-reviewed firm of Company Secretaries — governance, compliance, and strategic insight.</p><address className="mt-4 max-w-sm text-base not-italic text-ink-dim">{site.address.lines.join(" ")}</address><a href={`tel:${site.phones[0].tel}`} className="mt-3 block w-fit text-base text-ink">{site.phones[0].display}</a>{site.emails.map((email) => <a key={email} href={`mailto:${email}`} className="block w-fit break-all text-base text-ink">{email}</a>)}<a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-base text-ink">LinkedIn ↗</a></div>
        <div><h2 className="text-xl text-ink">Important links</h2><ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">{site.exchangeLinks.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-ink-dim hover:text-signal">{link.label} ↗</a></li>)}</ul></div>
      </div>
      <div className="border-t border-hairline"><div className="site-container flex flex-col gap-4 py-5 text-sm text-steel sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {site.name}.</span><nav aria-label="Legal information" className="flex flex-wrap gap-x-6 gap-y-2"><Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link><Link href="/terms-disclaimer" target="_blank" rel="noopener noreferrer">Terms &amp; Disclaimer</Link></nav></div></div>
    </footer>
  );
}
