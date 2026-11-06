import { site } from "@/lib/site";

export function Brand({ prominent = false }: { prominent?: boolean }) {
  return (
    <span className={`inline-flex shrink-0 items-center ${prominent ? "gap-2 min-[375px]:gap-3 sm:gap-4" : "gap-2.5 sm:gap-3"}`} role="img" aria-label={site.name}>
      <span
        aria-hidden="true"
        className={`firm-emblem block shrink-0 text-signal ${prominent ? "size-11 min-[375px]:size-13 sm:size-16 xl:size-18" : "size-11 sm:size-13"}`}
      />
      <span aria-hidden="true" className={`flex flex-col text-ink ${prominent ? "gap-1.5 sm:gap-2" : "gap-1"}`}>
        <span className={`whitespace-nowrap font-bold leading-none tracking-[-0.025em] ${prominent ? "text-[0.875rem] min-[375px]:text-[1.125rem] sm:text-xl lg:text-2xl xl:text-[1.625rem]" : "text-[0.9375rem] sm:text-[1.125rem]"}`}>
          AYUSH D GUPTA
        </span>
        <span className={`whitespace-nowrap font-semibold uppercase leading-none tracking-[0.14em] ${prominent ? "text-[0.6875rem] sm:text-xs" : "text-[0.625rem] sm:text-[0.6875rem]"}`}>
          &amp; Associates
        </span>
      </span>
    </span>
  );
}
