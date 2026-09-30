import { type FC } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";
type TitleAlign = "left" | "center" | "right";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  as?: HeadingLevel;
  align?: TitleAlign;
  className?: string;
}

const ALIGN_STYLES: Record<TitleAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  label,
  as: Tag = "h2",
  align = "center",
  className,
}) => (
  <div className={cn("flex flex-col gap-3", ALIGN_STYLES[align], className)}>
    {label && (
      <span className="inline-block rounded-full bg-primary/20 px-3.5 py-1 text-label-xs font-bold uppercase tracking-wider text-foreground">
        {label}
      </span>
    )}
    <Tag
      className={cn(
        "font-title font-bold tracking-tight text-foreground",
        Tag === "h1"
          ? "text-[40px] sm:text-[54px] lg:text-[72px] leading-[1.15]"
          : "text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2]"
      )}
    >
      {title}
    </Tag>
    {subtitle && (
      <p className="max-w-2xl text-body-l text-muted-foreground font-normal">
        {subtitle}
      </p>
    )}
  </div>
);
