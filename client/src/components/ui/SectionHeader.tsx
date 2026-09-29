import { type FC } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="font-title text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0B0F19] leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm sm:text-base text-shuttle-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
