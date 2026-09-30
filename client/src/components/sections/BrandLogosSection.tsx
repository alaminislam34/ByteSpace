import { type FC } from "react";
import { BrandLogos } from "@/components/ui";

export const BrandLogosSection: FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5] overflow-hidden">
      <div className="mx-auto w-full md:w-10/12 py-8 md:py-14">
        <BrandLogos />
      </div>
    </section>
  );
};
