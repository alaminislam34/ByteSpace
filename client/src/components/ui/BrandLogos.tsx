import { type FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BRANDS = [
  "/brands/Frame(1).png",
  "/brands/Frame(2).png",
  "/brands/Frame(3).png",
  "/brands/Frame(4).png",
];

const MOBILE_LOGOS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export const BrandLogos: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      {/* Desktop view */}
      <div className={cn("hidden md:flex w-11/12 mx-auto items-center justify-between gap-8", className)}>
        {BRANDS.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Logoipsum"
            width={680}
            height={164}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>

      {/* Mobile auto-scrolling slider */}
      <div className={cn("md:hidden relative w-full overflow-hidden marquee-mask", className)}>
        <div className="flex w-max animate-marquee items-center gap-8 py-1">
          {MOBILE_LOGOS.map((src, index) => (
            <div key={`${src}-${index}`} className="shrink-0">
              <Image
                src={src}
                alt="Brand logo"
                width={680}
                height={164}
                className="h-8 w-auto object-contain opacity-85"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
