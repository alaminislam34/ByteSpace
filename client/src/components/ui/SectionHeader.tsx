import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";

export interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  maxWidth?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  maxWidth = "max-w-230",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mx-auto w-full",
        align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left",
        maxWidth,
        className
      )}
    >
      <SectionTitle
        align={align}
        className={cn("text-[#040819]", titleClassName)}
      >
        {title}
      </SectionTitle>
      {description && (
        <SectionDescription
          align={align}
          className={cn("lg:text-lg leading-[180%] text-[#82868E]", descriptionClassName)}
        >
          {description}
        </SectionDescription>
      )}
    </div>
  );
};
