import Image from "next/image";
import { serviceImagery } from "@/lib/service-imagery";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Image
        src={serviceImagery.advisory.src}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="hero-photograph object-cover"
      />
      <div className="hero-reading-shade absolute inset-0" />
      <div className="hero-navigation-shade absolute inset-x-0 top-0 h-48" />
    </div>
  );
}
