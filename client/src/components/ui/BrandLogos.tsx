import { type FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BRANDS = [
  "/brands/Frame(1).png",
  "/brands/Frame(2).png",
  "/brands/Frame(3).png",
  "/brands/Frame(4).png",
];

export const BrandLogos: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex w-11/12 mx-auto items-center justify-between gap-8", className)}>
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
  );
};
