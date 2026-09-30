import type { FC } from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  colorClassName?: string;
  "aria-label"?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  barClassName,
  colorClassName = "bg-[#D4FB20]",
  "aria-label": ariaLabel = "Progress",
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(percentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]", className)}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-300", colorClassName, barClassName)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
