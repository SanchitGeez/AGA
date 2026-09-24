import Link from "next/link";
import { site } from "@/lib/site";
import { categories } from "@/lib/services";

const label = "font-mono text-[0.7rem] uppercase tracking-wider text-steel";

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
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded bg-signal-solid font-mono text-sm font-semibold text-on-signal">
              {site.initial}
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
              {site.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">
            A peer-reviewed firm of Company Secretaries in {site.address.city} —
            governance, compliance, and strategic insight.
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-steel">
            {site.address.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
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
          <h3 className={label}>Services</h3>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/services#${c.id}`}
                  className="text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={label}>Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
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
          <h3 className={label}>Important Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
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
        <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-5 font-mono text-[0.7rem] text-steel sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.credential}</span>
        </div>
      </div>
    </footer>
  );
}
