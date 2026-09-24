"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ResumeForm() {
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

  const field =
    "w-full rounded-md border border-hairline bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal placeholder:text-steel";

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-hairline bg-surface p-6 sm:p-8">
        <span className="grid size-10 place-items-center rounded-full bg-signal-solid font-mono text-lg text-on-signal">
          ✓
        </span>
        <h2 className="mt-4 text-lg font-semibold text-ink">
          Thank you — your résumé is on its way to us.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">
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
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-dim">
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
            <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
              Name
            </label>
            <input name="name" required placeholder="Your name" className={field} />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className={field}
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
            Position of interest
          </label>
          <input
            name="service"
            placeholder="e.g. Company Secretary — Executive"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
            Message
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about yourself"
            className={`${field} resize-none`}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-steel">
            Résumé — PDF, DOC, DOCX or RTF · max 4 MB
          </label>
          <input
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,.rtf"
            className="w-full text-sm text-ink-dim file:mr-4 file:rounded-md file:border-0 file:bg-surface-2 file:px-4 file:py-2 file:font-mono file:text-xs file:text-ink hover:file:bg-hairline"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 font-mono text-[0.72rem] text-overdue">
          {errorMsg} You can also email us at {site.emails[0]}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 rounded-md bg-signal-solid px-5 py-3 text-sm font-medium text-on-signal transition-colors hover:bg-signal-solid-hover disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit application →"}
      </button>
    </form>
  );
}
