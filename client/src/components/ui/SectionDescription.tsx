import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DescriptionAlign = "left" | "center" | "right";
type DescriptionElement = "p" | "span" | "div";

export interface SectionDescriptionProps {
  children?: ReactNode;
  text?: ReactNode;
  as?: DescriptionElement;
  align?: DescriptionAlign;
  maxWidth?: string;
  className?: string;
}

const ALIGN_STYLES: Record<DescriptionAlign, string> = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

export const SectionDescription: FC<SectionDescriptionProps> = ({
  children,
  text,
  as: Tag = "p",
  align = "left",
  maxWidth,
  className,
}) => {
  const content = children ?? text;
  const isTailwindClass = maxWidth && (maxWidth.startsWith("max-w-") || maxWidth.startsWith("w-"));
  const maxWidthClass = isTailwindClass ? maxWidth : undefined;
  const maxWidthStyle = maxWidth && !isTailwindClass ? { maxWidth } : undefined;

  return (
    <Tag
      className={cn(
        "text-[15px] lg:text-base leading-[1.75] text-[#6A7180]",
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
