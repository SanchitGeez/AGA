import { site } from "@/lib/site";

export function Brand({ prominent = false }: { prominent?: boolean }) {
  return (
    <span className={`inline-flex shrink-0 items-center ${prominent ? "gap-2 sm:gap-3" : "gap-2.5"}`} role="img" aria-label={`${site.name} A Peer-Reviewed Firm`}>
      <span aria-hidden="true" className={`firm-emblem block shrink-0 text-signal ${prominent ? "size-10 sm:size-14 xl:size-16" : "size-11"}`} />
      <span aria-hidden="true" className="flex flex-col gap-1 text-ink">
        <span className={`font-serif font-medium leading-tight tracking-tight ${prominent ? "text-[0.8125rem] min-[375px]:text-[0.9375rem] sm:text-[1.125rem]" : "text-sm"}`}>
          <span className="block whitespace-nowrap">AYUSH D GUPTA</span>
          <span className="block whitespace-nowrap">&amp; ASSOCIATES</span>
        </span>
        <span className="text-[0.625rem] leading-tight sm:text-xs">A Peer-Reviewed Firm</span>
      </span>
    </span>
  );
}
