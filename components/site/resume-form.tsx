"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ResumeForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-hairline bg-surface p-6 sm:p-8">
        <span className="grid size-10 place-items-center rounded-full bg-signal-solid font-mono text-lg text-on-signal">
          ✓
        </span>
        <h2 className="mt-4 text-lg font-semibold text-ink">
          Thank you — your résumé is on its way to us.
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-dim">
          We&apos;ll be in touch about current and upcoming openings.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-hairline bg-surface p-6 sm:p-8"
    >
      <h2 className="text-lg font-semibold text-ink">Send us your résumé</h2>
      <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-dim">
        Share your details and attach your updated résumé — we&apos;ll be in
        touch about current and upcoming openings.
      </p>

      <input type="hidden" name="kind" value="career" />
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-name`} className="form-label">
              Name
            </label>
            <input id={`${formId}-name`} name="name" autoComplete="name" required placeholder="Your name" className={field} />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className="form-label">
              Email
            </label>
            <input id={`${formId}-email`} name="email" autoComplete="email"
              type="email"
              required
              placeholder="you@email.com"
              className={field}
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${formId}-service`} className="form-label">
            Position of interest
          </label>
          <input id={`${formId}-service`} name="service"
            placeholder="e.g. Company Secretary — Executive"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-message`} className="form-label">
            Message
          </label>
          <textarea id={`${formId}-message`} name="message"
            rows={3}
            placeholder="Tell us about yourself"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-resume`} className="form-label">
            Résumé — PDF, DOC, DOCX or RTF · max 4 MB
          </label>
          <input id={`${formId}-resume`} name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,.rtf"
            className="form-field file:mr-4 file:rounded-md file:border-0 file:bg-surface-2 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-ink hover:file:bg-hairline"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-base text-overdue">
          {errorMsg} You can also email us at {site.emails[0]}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="action-primary mt-6 w-full sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Submit application →"}
      </button>
    </form>
  );
}
