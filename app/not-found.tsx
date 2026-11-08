import Link from "next/link";

export default function NotFound() {
  return <section className="site-container section-space"><p className="font-mono text-base text-signal">404</p><h1 className="page-title mt-4 text-ink">This page could not be found.</h1><p className="mt-5 max-w-xl text-lg text-ink-dim">The address may have changed. Browse our services or contact the firm for help finding what you need.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/" className="action-primary">Return home</Link><Link href="/services" className="action-secondary">Browse services</Link></div></section>;
}
