"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { services, categoryName } from "@/lib/services";
import { useModKey } from "./use-mod-key";

interface Item {
  label: string;
  sub: string;
  href: string;
}

const pages: Item[] = [
  { label: "Services", sub: "All 25 services", href: "/services" },
  { label: "Capital Markets", sub: "IPO · SEBI · NCLT", href: "/services#capital-markets" },
  { label: "About the firm", sub: "CS Ayush Gupta", href: "/about" },
  { label: "Insights", sub: "Compliance calendar", href: "/insights" },
  { label: "Career", sub: "Join the firm", href: "/career" },
  { label: "Contact", sub: "Start a conversation", href: "/contact" },
];

const serviceItems: Item[] = services.map((s) => ({
  label: s.name,
  sub: categoryName(s.category),
  href: `/services/${s.slug}`,
}));

const all: Item[] = [...serviceItems, ...pages];

export function CommandBar() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const modKey = useModKey();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return all.slice(0, 8);
    return all
      .filter((i) => `${i.label} ${i.sub}`.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q]);

  useEffect(() => setActive(0), [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-bar", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-bar", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[active];
      if (r) go(r.href);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search services and pages"
      onKeyDown={onKeyDown}
    >
      <button
        aria-label="Close search"
        tabIndex={-1}
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-xl origin-top animate-[cmd_.14s_cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-xl border border-hairline bg-surface-2 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6)]">
        <style>{`@keyframes cmd{from{opacity:0;transform:scale(.98) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
        <div className="flex items-center gap-3 border-b border-hairline px-4">
          <span className="font-mono text-xs text-signal">{modKey || "⌘K"}</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 25 services…"
            className="h-12 flex-1 bg-transparent font-mono text-sm text-ink outline-none placeholder:text-steel"
          />
          <kbd className="hidden font-mono text-[0.7rem] text-steel sm:block">
            ESC
          </kbd>
        </div>
        <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-1.5">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-xs text-steel">
              No match for “{q}”
            </li>
          )}
          {results.map((r, i) => (
            <li key={r.href + r.label} data-idx={i}>
              <button
                onClick={() => go(r.href)}
                onMouseMove={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left ${
                  i === active ? "bg-surface" : ""
                }`}
              >
                <span className="truncate text-sm text-ink">{r.label}</span>
                <span className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                  {r.sub}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 border-t border-hairline px-4 py-2 font-mono text-[0.7rem] text-steel">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
