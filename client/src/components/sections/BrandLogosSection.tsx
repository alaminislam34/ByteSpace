import { type FC } from "react";
import { BrandLogos } from "@/components/ui";

export const BrandLogosSection: FC = () => {
  return (
    <section className="w-full bg-surface-light border-y border-shuttle-100">
      <div className="mx-auto w-11/12">
        <BrandLogos />
      </div>
    </section>
  );
};
