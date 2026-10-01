import { type FC } from "react";
import Image from "next/image";
import { HappyStudentsCard, MetricCard } from "@/components/ui";

interface CreatorGrowthShowcaseProps {
  className?: string;
}

export const CreatorGrowthShowcase: FC<CreatorGrowthShowcaseProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative order-2 mx-auto w-10/12 lg:w-full h-110 xs:h-[480px] sm:h-130 lg:h-140 lg:order-1 overflow-visible ${className}`}
    >
      <MetricCard
        label="Total Revenue"
        caption="July 1-28"
        value="$120.29"
        progress={78}
        className="absolute top-[8%] left-0 z-10 min-w-44 sm:min-w-52 lg:min-w-56 scale-[0.80] xs:scale-[0.88] sm:scale-95 lg:scale-100 origin-top-left shadow-lg transition-transform"
      />

      <MetricCard
        label="Year to Date"
        caption="2025"
        value="$1,200.38"
        badge={
          <span className="rounded-full bg-[#D4FB20] px-1.5 py-0.5 text-[10px] font-bold text-[#16320A]">
            +12%
          </span>
        }
        className="absolute top-[32%] left-0 z-10 scale-[0.80] xs:scale-[0.88] sm:scale-95 lg:scale-100 origin-top-left shadow-lg transition-transform"
      />

      <Image
        src="/images/meye.png"
        alt="Creator with a tablet and headset"
        width={700}
        height={700}
        priority
        className="pointer-events-none absolute top-0 left-1/2 sm:left-[55%] md:left-[30%] lg:left-5 -translate-x-1/2 sm:-translate-x-1/4 lg:translate-x-0 z-20 h-full w-auto sm:max-w-none"
      />

      <Image
        src="/images/Frame(1).png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute top-[12%] sm:top-[15%] -right-3 sm:right-6 md:left-[55%] lg:left-[54%] 2xl:left-[38%] z-25 h-auto w-40 lg:w-50"
      />

      <HappyStudentsCard className="absolute bottom-20 sm:bottom-8 md:bottom-20 lg:bottom-15 max-w-fit -right-12 sm:left-[30%] md:left-[60%] lg:left-[38%] z-30 shadow-[0_16px_36px_rgba(15,23,42,0.12)] scale-[0.78] xs:scale-[0.85] sm:scale-95 lg:scale-100 origin-bottom-left transition-transform" />
    </div>
  );
};