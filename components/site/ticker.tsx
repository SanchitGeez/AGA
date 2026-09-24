import { upcomingDeadlines } from "@/lib/deadlines";

const ordered = upcomingDeadlines();

function TickerRun({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ordered.map((d, i) => (
        <span
          key={`${d.code}-${i}`}
          className="flex items-center gap-2 whitespace-nowrap px-5 font-mono text-[0.8rem] tabular-nums"
        >
          <span className="text-steel">{d.code}</span>
          <span className="text-ink-dim">{d.name}</span>
          <span className="text-signal">{d.due}</span>
          <span aria-hidden className="pl-3 text-hairline">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="marquee-track flex items-stretch border-b border-hairline bg-surface">
      <div className="z-10 flex shrink-0 items-center gap-2 border-r border-hairline bg-surface px-4 font-mono text-[0.7rem] uppercase tracking-wider text-steel">
        <span className="size-1.5 rounded-full bg-signal-solid shadow-[0_0_10px_1px_var(--signal-solid)]" />
        <span className="hidden sm:inline">Statutory Calendar</span>
      </div>
      <div className="flex overflow-hidden py-2.5">
        <div className="flex animate-marquee">
          <TickerRun />
          <TickerRun ariaHidden />
        </div>
      </div>
    </div>
  );
}
