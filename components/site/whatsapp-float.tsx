import { whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("Hello, I'd like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-hairline bg-surface-2 px-4 py-3 text-sm font-medium text-ink shadow-[0_8px_28px_-8px_rgba(0,0,0,0.6)] transition-colors hover:bg-surface"
    >
      <span
        aria-hidden
        className="size-2 rounded-full bg-signal-solid shadow-[0_0_10px_1px_var(--signal-solid)]"
      />
      WhatsApp
    </a>
  );
}
