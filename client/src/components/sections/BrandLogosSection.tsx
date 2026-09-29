import { type FC } from "react";
import { BrandLogos } from "@/components/ui";

export const BrandLogosSection: FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto w-10/12 py-14">
        <BrandLogos />
      </div>
    </section>
  );
};
