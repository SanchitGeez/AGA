import { WhatsAppIcon } from "./whatsapp-icon";
import { site, whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center overflow-hidden rounded-full border border-hairline bg-surface-2 text-base font-medium text-ink shadow-[0_8px_28px_-8px_rgba(0,0,0,0.4)]">
      <a href={`tel:${site.phones[0].tel}`} className="flex min-h-12 items-center border-r border-hairline px-4 hover:bg-surface md:hidden" aria-label="Call Ayush Gupta">Call</a>
      <a href={whatsappHref("Hello, I'd like to enquire about your services.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex min-h-12 items-center gap-2 px-4 hover:bg-surface"><WhatsAppIcon />WhatsApp</a>
    </div>
  );
}
