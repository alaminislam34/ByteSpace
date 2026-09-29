import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionPadding = "none" | "sm" | "md" | "lg" | "xl";
type SectionBg = "default" | "muted" | "surface" | "primary" | "secondary";

export interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  padding?: SectionPadding;
  background?: SectionBg;
}

const PADDING_STYLES: Record<SectionPadding, string> = {
  none: "",
  sm: "py-10",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

const BG_STYLES: Record<SectionBg, string> = {
  default: "bg-background text-foreground",
  muted: "bg-surface-light text-foreground",
  surface: "bg-surface-pure text-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  id,
  className,
  padding = "lg",
  background = "default",
}) => (
  <section
    id={id}
    className={cn("w-full transition-colors", PADDING_STYLES[padding], BG_STYLES[background], className)}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {children}
    </div>
  </section>
);
