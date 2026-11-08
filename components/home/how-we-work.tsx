"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  { title: "Understand", description: "Your business, objectives and obligations.", detail: "We begin with the entity, the issue and the outcome you need. An initial review identifies the relevant records, stakeholders and regulatory considerations.", output: "A clear understanding of your requirements" },
  { title: "Plan", description: "A defined scope and a practical route forward.", detail: "We agree the scope, responsibilities and required documents, then map the sequence of work, approvals and expected timelines for the assignment.", output: "Agreed scope, document checklist and timeline" },
  { title: "Execute", description: "Careful preparation, review and coordination.", detail: "We prepare and review the agreed documentation, coordinate inputs and approvals, and support submissions with attention to accuracy and the applicable requirements.", output: "Reviewed documents and agreed submissions" },
  { title: "Maintain", description: "Follow-through beyond the initial submission.", detail: "We support clarifications, record updates and continuing obligations within the engagement, so the next action is understood and tracked.", output: "Follow-up actions and continuing compliance support" },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);
  return (
    <section id="how-we-work" aria-labelledby="work-heading" className="site-container section-space">
      <h2 id="work-heading" className="section-title text-ink">How we work</h2>
      <p className="mt-5 max-w-xl text-lg text-ink-dim">A clear sequence, from understanding your business to supporting its continuing obligations.</p>
      <ol className="process-track relative mt-12 grid gap-7 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => <li key={step.title} className="process-step relative">
          <button type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-pressed={active === index} aria-controls={`process-panel-${index}`} className="group relative flex w-full gap-5 text-left lg:block lg:text-center">
            <span aria-hidden="true" className={`process-node relative grid size-20 shrink-0 place-items-center rounded-full border bg-bg font-mono text-2xl transition-colors ${active === index ? "border-signal text-signal" : "border-control-line text-steel group-hover:border-signal group-hover:text-signal"}`}>{String(index + 1).padStart(2, "0")}</span>
            <span className="block pt-1 lg:mt-6"><span className={`block font-serif text-2xl ${active === index ? "text-signal" : "text-ink"}`}>{step.title}</span><span className="mt-2 block max-w-xs text-base lg:mx-auto text-ink-dim">{step.description}</span></span>
          </button>
        </li>)}
      </ol>
      <div className="mt-10 border-y border-hairline bg-surface px-6 py-7 sm:px-8 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div>{steps.map((step, index) => <div key={step.title} id={`process-panel-${index}`} hidden={active !== index} role="region" aria-label={`${step.title}: assignment approach`} className="process-detail min-h-40 sm:min-h-28"><h3 className="text-xl text-ink">{step.title}</h3><p className="mt-3 max-w-2xl text-base text-ink-dim">{step.detail}</p><p className="mt-4 text-sm font-medium text-signal">{step.output}</p></div>)}</div>
        <div className="mt-6 border-t border-hairline pt-5 lg:mt-0 lg:border-t-0 lg:pt-0"><h3 className="text-xl text-ink">A timeline for your assignment</h3><p className="mt-3 text-base text-ink-dim">We confirm expected turnaround after reviewing the scope and documents. Authority approvals and third-party inputs can affect completion.</p></div>
      </div>
      <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><p className="max-w-3xl text-base text-ink-dim"><span className="font-medium text-ink">Who we serve:</span> listed companies, startups, private and public companies, NBFCs, LLPs, trusts, societies and foreign companies.</p><Link href="/contact" className="text-link shrink-0 text-base font-semibold text-ink">Discuss your requirements →</Link></div>
    </section>
  );
}
