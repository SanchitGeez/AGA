import Link from "next/link";
import { site } from "@/lib/site";
import { categories } from "@/lib/services";
import { Brand } from "./brand";

const label = "text-lg font-semibold text-ink";

const pageLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="site-container section-space grid gap-8 md:grid-cols-2 xl:grid-cols-4 lg:gap-12">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block" aria-label={`${site.name} — Home`}>
            <Brand />
          </Link>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-dim">
            A peer-reviewed firm of Company Secretaries in {site.address.city} —
            governance, compliance, and strategic insight.
          </p>
          <address className="mt-5 not-italic text-base leading-relaxed text-steel">
            {site.address.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-base">
            {pageLinks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-ink-dim transition-colors hover:text-ink"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className={label}>Services</h2>
          <ul className="mt-4 space-y-1">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/services#${c.id}`}
                  className="text-base text-ink-dim transition-colors hover:text-ink"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={label}>Contact</h2>
          <ul className="mt-4 space-y-1 text-base">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="font-mono tabular-nums text-ink-dim transition-colors hover:text-ink"
                >
                  {p.display}
                </a>
              </li>
            ))}
            {site.emails.map((e) => (
              <li key={e}>
                <a
                  href={`mailto:${e}`}
                  className="break-all text-ink-dim transition-colors hover:text-ink"
                >
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={label}>Important Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-base">
            {site.exchangeLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-ink-dim transition-colors hover:text-signal"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="site-container flex flex-col gap-4 py-5 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.credential}</span>
        </div>
      </div>
    </footer>
  );
}
