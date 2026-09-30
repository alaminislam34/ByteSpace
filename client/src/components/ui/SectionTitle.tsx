import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "span" | "div";
type TitleAlign = "left" | "center" | "right";

export interface SectionTitleProps {
  children?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  label?: string;
  as?: HeadingLevel;
  align?: TitleAlign;
  maxWidth?: string;
  className?: string;
}

const ALIGN_STYLES: Record<TitleAlign, string> = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  title,
  subtitle,
  label,
  as: Tag = "h2",
  align = "left",
  maxWidth,
  className,
}) => {
  const content = children ?? title;
  const isTailwindClass = maxWidth && (maxWidth.startsWith("max-w-") || maxWidth.startsWith("w-"));
  const maxWidthClass = isTailwindClass ? maxWidth : undefined;
  const maxWidthStyle = maxWidth && !isTailwindClass ? { maxWidth } : undefined;

  // Backwards compatibility if label or subtitle is provided
  if (label || subtitle) {
    return (
      <div
        className={cn(
          "flex flex-col gap-3",
          align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left",
          maxWidthClass,
          className
        )}
        style={maxWidthStyle}
      >
        {label && (
          <span className="inline-block rounded-full bg-primary/20 px-3.5 py-1 text-label-xs font-bold uppercase tracking-wider text-foreground">
            {label}
          </span>
        )}
        <Tag
          className={cn(
            "font-poppins text-3xl font-semibold leading-[120%] tracking-[-1%] text-[#000000] lg:text-[44px] whitespace-pre-line",
            ALIGN_STYLES[align]
          )}
        >
          {content}
        </Tag>
        {subtitle && (
          <p className="text-[15px] lg:text-base leading-[1.75] text-[#6A7180]">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <Tag
      className={cn(
        "font-poppins text-3xl font-semibold leading-[120%] tracking-[-1%] text-[#000000] lg:text-[44px] whitespace-pre-line",
        ALIGN_STYLES[align],
        maxWidthClass,
        className
      )}
      style={maxWidthStyle}
    >
      {content}
    </Tag>
  );
};
