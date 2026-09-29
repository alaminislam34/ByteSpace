import { type FC } from "react";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CategoryPill: FC<CategoryPillProps> = ({
  label,
  isActive = false,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none",
        isActive
          ? "bg-primary text-primary-foreground font-semibold shadow-xs"
          : "bg-surface-light text-foreground/80 hover:bg-shuttle-100 hover:text-foreground font-medium",
        className
      )}
    >
      {label}
    </button>
  );
};
