import { type FC } from "react";
import { cn } from "@/lib/utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  label?: string;
}

const SIZE_STYLES: Record<SpinnerSize, string> = {
  xs: "size-3.5 border-[1.5px]",
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-8 border-[3px]",
};

export const Spinner: FC<SpinnerProps> = ({
  size = "md",
  className,
  label = "Loading...",
}) => (
  <span
    role="status"
    aria-label={label}
    className={cn(
      "inline-block rounded-full border-current border-r-transparent animate-spin",
      SIZE_STYLES[size],
      className
    )}
  />
);
