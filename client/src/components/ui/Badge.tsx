import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "outline" | "muted" | "success";
type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  primary: "bg-primary text-primary-foreground font-semibold border-primary",
  secondary: "bg-secondary text-secondary-foreground font-medium border-secondary",
  outline: "bg-transparent text-foreground border-shuttle-300 font-medium",
  muted: "bg-shuttle-100 text-shuttle-700 font-medium border-shuttle-200",
  success: "bg-emerald-50 text-emerald-700 font-medium border-emerald-200",
};

const BADGE_SIZES: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-label-xs",
  md: "px-3.5 py-1 text-label-s",
};

export const Badge: FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
}) => (
  <span
    className={cn(
      "inline-flex items-center justify-center rounded-full border transition-colors",
      BADGE_VARIANTS[variant],
      BADGE_SIZES[size],
      className
    )}
  >
    {children}
  </span>
);
