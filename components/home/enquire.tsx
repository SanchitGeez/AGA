"use client";

import { useState } from "react";
import { site, whatsappHref } from "@/lib/site";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export function Enquire({ defaultService }: { defaultService?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService ?? "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const waHref = whatsappHref(
    `Enquiry from: ${name || "—"}\nService: ${service || "General"}\n\n${message}`,
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const field =
    "w-full rounded-md border border-hairline bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal placeholder:text-steel";

  return (
    <section
      id="enquire"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="font-mono text-sm tracking-wide text-signal">Enquire</p>
          <h2 className="mt-4 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            Start a conversation.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-dim">
            Looking for clarity or strategic direction? Our team responds
            promptly with practical, dependable guidance for every stage of your
            business.
          </p>

          <dl className="mt-8 divide-y divide-hairline border-t border-hairline">
            <div className="flex items-baseline justify-between gap-4 py-3">
              <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                Call
              </dt>
              <dd className="text-right font-mono text-sm tabular-nums">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="block text-ink transition-colors hover:text-signal"
                  >
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3">
              <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                Email
              </dt>
              <dd className="text-right text-sm">
                {site.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block break-all text-ink transition-colors hover:text-signal"
                  >
                    {e}
                  </a>
                ))}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3">
              <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                Office
              </dt>
              <dd className="max-w-[16rem] text-right text-sm text-ink">
                {site.address.lines.join(" ")}
              </dd>
            </div>
          </dl>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col items-start justify-center rounded-xl border border-hairline bg-surface p-6 sm:p-8">
            <span className="grid size-10 place-items-center rounded-full bg-signal-solid font-mono text-lg text-on-signal">
              ✓
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">
              Thank you — we&apos;ve received your enquiry.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Our team will respond promptly. For anything urgent, call{" "}
              {site.phones[0].display} or reach us on WhatsApp.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-hairline bg-surface p-6 sm:p-8"
          >
            <input type="hidden" name="kind" value="enquiry" />
            {/* honeypot — hidden from users; bots that fill it are silently dropped */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                  Name
                </label>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 …"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                  Service
                </label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={field}
                >
                  <option value="">General enquiry</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="How can we help?"
                  className={`${field} resize-none`}
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 font-mono text-[0.72rem] text-overdue">
                {errorMsg}{" "}
                <a href={waHref} className="underline">
                  Send via WhatsApp instead →
                </a>
              </p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex-1 rounded-md bg-signal-solid px-5 py-3 text-center text-sm font-medium text-on-signal transition-colors hover:bg-signal-solid-hover disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md border border-hairline px-5 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-bg"
              >
                WhatsApp instead
              </a>
            </div>
            <p className="mt-3 font-mono text-[0.68rem] text-steel">
              We&apos;ll reply by email or phone. Prefer chat? Use WhatsApp.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
