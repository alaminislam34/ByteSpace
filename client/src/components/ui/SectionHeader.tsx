import { type FC } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  className,
  titleClassName = "text-3xl sm:text-4xl lg:text-[44px]",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-230 mx-auto",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2
        className={cn(
          "font-poppins font-semibold text-[#040819] leading-[120%] tracking-[-1%] whitespace-pre-line",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="lg:text-lg leading-[180%] text-[#82868E]">
          {description}
        </p>
      )}
    </div>
  );
};
