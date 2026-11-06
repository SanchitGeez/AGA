"use client";

import { useId, useState } from "react";
import { site, whatsappHref } from "@/lib/site";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export function Enquire({ defaultService, headingLevel = 2 }: { defaultService?: string; headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const formId = useId();
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

  const field = "form-field";

  return (
    <section
      id="enquire"
      className="site-container scroll-mt-32 section-space"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Heading className="section-title text-ink">
            Start a conversation.
          </Heading>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-dim">
            Looking for clarity or strategic direction? Our team responds
            promptly with practical, dependable guidance for every stage of your
            business.
          </p>

          <dl className="mt-8 divide-y divide-hairline border-t border-hairline">
            <div className="grid gap-2 py-5">
              <dt className="text-base font-semibold text-ink">
                Call
              </dt>
              <dd className="flex flex-col items-start font-mono text-base tabular-nums">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="text-link w-fit text-ink transition-colors hover:text-signal"
                  >
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div className="grid gap-2 py-5">
              <dt className="text-base font-semibold text-ink">
                Email
              </dt>
              <dd className="flex min-w-0 flex-col items-start gap-1 text-base">
                {site.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="text-link w-fit break-all text-ink transition-colors hover:text-signal"
                  >
                    {e}
                  </a>
                ))}
              </dd>
            </div>
            <div className="grid gap-2 py-5">
              <dt className="text-base font-semibold text-ink">
                Office
              </dt>
              <dd className="max-w-sm text-base text-ink-dim">
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
            <p className="mt-2 text-base leading-relaxed text-ink-dim">
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
                <label htmlFor={`${formId}-name`} className="form-label">
                  Name
                </label>
                <input id={`${formId}-name`} name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-email`} className="form-label">
                    Email
                  </label>
                  <input id={`${formId}-email`} name="email" autoComplete="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className="form-label">
                    Phone
                  </label>
                  <input id={`${formId}-phone`} name="phone" autoComplete="tel"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 …"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor={`${formId}-service`} className="form-label">
                  Service
                </label>
                <select id={`${formId}-service`} name="service"
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
                <label htmlFor={`${formId}-message`} className="form-label">
                  Message
                </label>
                <textarea id={`${formId}-message`} name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="How can we help?"
                  className={field}
                />
              </div>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-4 text-base text-overdue">
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
                className="action-primary flex-1"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="action-secondary flex-1"
              >
                WhatsApp instead
              </a>
            </div>
            <p className="mt-4 text-sm text-steel">
              We&apos;ll reply by email or phone. Prefer chat? Use WhatsApp.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
