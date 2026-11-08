import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/services/colour/advisory.webp"
        alt="Illustrative boardroom with green chairs, a walnut table and city views"
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
