"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { services, categoryName } from "@/lib/services";

interface Item {
  label: string;
  sub: string;
  href: string;
  keywords?: string;
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
  keywords: s.law,
}));

const all: Item[] = [...serviceItems, ...pages];

export function CommandBar() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const overflowRef = useRef<string | null>(null);
  const id = useId();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return all;
    return all
      .filter((i) => `${i.label} ${i.sub} ${i.keywords || ""}`.toLowerCase().includes(term));
  }, [q]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onOpen = () => {
      if (dialog.open) return;
      triggerRef.current = document.activeElement as HTMLElement;
      overflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setQ("");
      setActive(0);
      dialog.showModal();
      inputRef.current?.focus();
      if (listRef.current) listRef.current.scrollTop = 0;
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.open) dialog.close();
        else onOpen();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-bar", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-bar", onOpen);
      if (overflowRef.current !== null) {
        document.body.style.overflow = overflowRef.current;
        overflowRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (dialogRef.current?.open) {
      listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
    }
  }, [active, results]);

  const restore = () => {
    if (overflowRef.current !== null) {
      document.body.style.overflow = overflowRef.current;
      overflowRef.current = null;
    }
    if (triggerRef.current?.isConnected) triggerRef.current.focus();
    else document.querySelector<HTMLButtonElement>('button[aria-label="Menu"]')?.focus();
  };

  const clear = () => {
    setQ("");
    setActive(0);
    inputRef.current?.focus();
  };

  const go = (href: string) => {
    dialogRef.current?.close();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
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
    <dialog
      ref={dialogRef}
      className="fixed inset-x-0 bottom-auto top-[var(--search-top)] mx-auto my-0 max-h-[calc(100dvh-var(--search-top)-1rem)] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-xl border border-hairline bg-surface p-0 text-ink shadow-[0_20px_64px_-16px_var(--bg)] [--search-top:1rem] backdrop:bg-bg/80 sm:[--search-top:min(8dvh,4rem)]"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      onClose={restore}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.currentTarget.close();
        } else if (e.key === "Tab") {
          const controls = e.currentTarget.querySelectorAll<HTMLElement>('button:not([tabindex="-1"]), input');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
          e.currentTarget.close();
        }
      }}
    >
      <div className="flex max-h-[min(40rem,calc(100dvh-var(--search-top)-1rem-2px))] flex-col">
        <div className="shrink-0 border-b border-hairline px-4 pb-4 pt-3 sm:px-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 id={`${id}-title`} className="text-lg font-semibold tracking-tight">Search the firm</h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-base font-medium text-ink-dim transition-colors hover:bg-surface-2 hover:text-ink"
            >
              Close <kbd className="hidden rounded border border-hairline px-1.5 font-mono text-xs sm:inline">Esc</kbd>
            </button>
          </div>
          <label htmlFor={`${id}-input`} className="sr-only">Search services and pages</label>
          <div className="flex min-h-13 items-center rounded-md border border-hairline bg-bg focus-within:border-signal focus-within:ring-1 focus-within:ring-signal">
          <input
            id={`${id}-input`}
            ref={inputRef}
            type="search"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={results.length > 0}
            aria-controls={`${id}-results`}
            aria-activedescendant={results[active] ? `${id}-result-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onKeyDown}
            placeholder="Try SEBI, audit or FEMA"
            className="h-13 min-w-0 flex-1 rounded-md bg-transparent px-3 text-base text-ink outline-none! placeholder:text-ink-dim sm:px-4 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {q && results.length > 0 && <button type="button" onClick={clear} className="min-h-11 shrink-0 rounded-md px-3 text-base font-medium text-ink-dim hover:text-ink">Clear</button>}
          </div>
        </div>
        <p role="status" className="shrink-0 px-4 py-3 text-base text-ink-dim sm:px-6">
          {q.trim() ? `${results.length} ${results.length === 1 ? "result" : "results"}` : `${serviceItems.length} services and ${pages.length} pages`}
        </p>
        <ul ref={listRef} id={`${id}-results`} role="listbox" aria-label="Search results" className="min-h-0 overflow-y-auto overscroll-contain px-2 pb-2 sm:px-3">
          {results.map((r, i) => (
            <li key={r.href + r.label} role="presentation">
              <button type="button" tabIndex={-1} id={`${id}-result-${i}`} role="option" aria-selected={i === active}
                onClick={() => go(r.href)}
                onMouseEnter={() => setActive(i)}
                className={`flex min-h-18 w-full items-center justify-between gap-4 rounded-md px-3 py-3 text-left transition-colors ${
                  i === active ? "bg-surface-2" : "hover:bg-surface-2"
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-base font-medium leading-snug text-ink">{r.label}</span>
                  <span className="mt-1 block text-base leading-snug text-ink-dim">{r.sub}</span>
                </span>
                <span className="hidden shrink-0 text-xs text-ink-dim sm:block">{r.href.startsWith("/services/") ? "Service" : "Page"}</span>
              </button>
            </li>
          ))}
        </ul>
        {results.length === 0 && (
          <div className="min-h-0 overflow-y-auto px-6 py-8 text-center">
            <p className="text-base font-semibold">No results found</p>
            <p className="mt-2 text-base text-ink-dim">Try a service name, regulation or practice area.</p>
            <button type="button" onClick={clear} className="mt-4 min-h-11 rounded-md border border-hairline px-4 text-base font-medium hover:bg-surface-2">Clear search</button>
          </div>
        )}
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-hairline px-4 py-2 sm:px-6">
          <span className="hidden text-xs text-ink-dim sm:block">Arrow keys to navigate. Enter to open.</span>
          <span className="text-xs text-ink-dim sm:hidden">Search or tap a result</span>
          <button type="button" onClick={() => go("/services")} className="min-h-11 whitespace-nowrap rounded-md px-2 text-base font-semibold text-ink underline-offset-4 hover:underline">All services</button>
        </div>
      </div>
    </dialog>
  );
}
